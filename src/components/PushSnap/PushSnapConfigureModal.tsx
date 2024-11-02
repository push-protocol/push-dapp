// React + Web3 Essentials
import { useEffect, useState, useContext } from 'react';

// Internal Compoonents
import { Alert, Box, Button, Dropdown, KebabMenuVertical, Menu, MenuItem, OptOut, Text, TextInput, ToggleSwitch } from 'blocks';
import { AppContext } from 'contexts/AppContext';
import { shortenText } from 'helpers/UtilityHelper';
import { useAccount } from 'hooks';

// Internal Configs
import { defaultSnapOrigin } from 'config/index.js';
import { updateSnoozeDuration } from 'helpers';
import { SnoozeDurationType } from 'types';

const PushSnapConfigureModal = ({
  snoozeDuration,
  setSnoozeDuration,
}: {
  snoozeDuration: SnoozeDurationType;
  setSnoozeDuration: (snoozeDuration: SnoozeDurationType) => void;
}) => {

  const { isWalletConnected } = useAccount();
  const { setSnapState, SnapState, showMetamaskPushSnap } = useContext(AppContext);


  const [addresses, setAddresses] = useState([]);
  const [searchedUser, setSearchedUser] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setChecked(SnapState === 6);
  }, [SnapState]);

  const { account, provider } = useAccount();

  useEffect(() => {
    (async function () {
      getWalletAddresses();
      await updateSnoozeDuration(setSnoozeDuration);
    })();
  }, [SnapState]);

  const disableSnooze = async () => {
    await window.ethereum?.request({
      method: 'wallet_invokeSnap',
      params: {
        snapId: defaultSnapOrigin,
        request: {
          method: 'pushproto_disablesnooze',
        },
      },
    });
  };

  // Wallet address param correctly display the message on snap
  async function getSignature(mode: number, walletAddress: String) {
    if (mode == 1) {
      const signer = provider.getSigner(account);
      const signature = await signer.signMessage(
        `Add address ${walletAddress} to receive notifications via Push Snap in MetaMask`
      );
      return signature;
    }
    if (mode == 2) {
      const signer = provider.getSigner(account);
      const signature = await signer.signMessage(
        `Remove address ${walletAddress} to stop receive notifications via Push Snap in MetaMask`
      );
      return signature;
    }
  }

  const addWalletAddresses = async () => {
    if (!isWalletConnected) {
      setErrorMessage('Wallet is not connected. Please Connect');
      return;
    }
    const signatureResult = await getSignature(1, searchedUser);
    if (signatureResult) {
      if (searchedUser) {
        await window.ethereum?.request({
          method: 'wallet_invokeSnap',
          params: {
            snapId: defaultSnapOrigin,
            request: {
              method: 'pushproto_addaddress',
              params: { address: searchedUser },
            },
          },
        });
        setSearchedUser('');
        getWalletAddresses();
      }
    } else {
      console.error('Signature Validation Failed');
    }
  };

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(snoozeDuration.enabled);
  }, [snoozeDuration]);

  const handleChange = async (nextChecked) => {
    setChecked(nextChecked);

    // When the switch is turned on
    if (nextChecked) {
      setSnapState(4); // Enable snooze or show the EnableSnoozeModal
      showMetamaskPushSnap();
    } else {
      await disableSnooze();
    }
    await updateSnoozeDuration(setSnoozeDuration);
  };

  const removeWalletAddresses = async (walletSelected: string) => {
    if (!isWalletConnected) {
      setErrorMessage('Wallet is not connected. Please Connect');
      return;
    }

    const signatureResult = await getSignature(2, walletSelected);
    if (signatureResult) {
      if (walletSelected) {
        await window.ethereum?.request({
          method: 'wallet_invokeSnap',
          params: {
            snapId: defaultSnapOrigin,
            request: {
              method: 'pushproto_removeaddress',
              params: { address: walletSelected },
            },
          },
        });
        getWalletAddresses();
      }
    } else {
      console.error('Signature Validation Failed');
    }
  };

  const getWalletAddresses = async () => {
    const result = await window.ethereum?.request({
      method: 'wallet_invokeSnap',
      params: {
        snapId: defaultSnapOrigin,
        request: { method: 'pushproto_getaddresses' },
      },
    });
    setAddresses(result);
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      margin='spacing-md spacing-none spacing-none spacing-none'
    >
      <Box
        display='flex'
        flexDirection='column'
        width='100%'
        gap='spacing-xxs'
      >
        <Box display='flex' flexDirection='column'>
          <Text variant='bl-semibold'>Notification Address</Text>
          <Text variant='bes-regular'>Add or remove wallet address to receive notifications</Text>
        </Box>

        {errorMessage && (
          <Alert
            variant="error"
            heading={errorMessage}
            showIcon
          />
        )}

        <Box display='flex' gap='spacing-xxxs'>
          <TextInput
            value={searchedUser}
            onChange={(e) => {
              setSearchedUser(e.target.value);
            }}
            placeholder="0x123 .... 4567"
          />
          <Button
            onClick={addWalletAddresses}
            size="medium"
          >
            Add
          </Button>
        </Box>
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        padding='spacing-xxs spacing-none'
        gap='spacing-xxs'
        margin='spacing-xxs spacing-none spacing-md spacing-none'
        width='-webkit-fill-available'
        maxHeight='240px'
        overflow='auto'
        customScrollbar
      >
        {addresses?.map((wallet) => (
          <Box
            display='flex'
            maxHeight='42px'
            padding='spacing-sm spacing-md'
            backgroundColor='surface-tertiary'
            justifyContent='space-between'
            alignItems='center'
            borderRadius='radius-sm'
          >
            <Text
              variant='h5-semibold'>
              {shortenText(wallet, 8)}
            </Text>
            <Dropdown
              trigger='click'
              overlay={<Menu>
                <MenuItem
                  label="Remove"
                  icon={<OptOut size={24} />}
                  onClick={() => removeWalletAddresses(wallet)}
                />
              </Menu>}
            >
              <Box
                display="flex"
                height="16px"
                cursor="pointer"
                alignItems="center"
              >
                <KebabMenuVertical
                  size={20}
                  color="icon-primary"
                />
              </Box>
            </Dropdown>
          </Box>
        ))}
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        gap='spacing-sm'
        justifyContent='flex-start'
      >
        <Box display='flex' flexDirection='column'>
          <Text variant='bl-semibold'>Snooze Notifications</Text>
          <Text variant='bes-regular'>When snooze is enabled, you won't receive notifications for a specified period of time.</Text>
        </Box>
        <ToggleSwitch
          checked={checked}
          onCheckedChange={handleChange}
        />
      </Box>

      {snoozeDuration.enabled == true && <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        margin='spacing-md spacing-none spacing-none spacing-none'
      >
        <Text variant='bl-semibold'>Snooze Duration</Text>
        <Text variant='bes-regular'>{snoozeDuration.hrsLeft} hours</Text>
      </Box>}
    </Box>
  );
};

export default PushSnapConfigureModal;