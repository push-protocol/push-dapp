// React and other libraries
import { FC, ReactNode } from 'react';
import { MdCheckCircle, MdError } from 'react-icons/md';

// Utility functions
import { ChannelDetails } from 'queries';
import { ethers } from 'ethers';

import { Box, Dropdown } from 'blocks';
import { appConfig } from 'config';
import { useAppContext } from 'contexts/AppContext';

import { useAccount } from 'hooks';

import { ChannelSetting } from 'helpers/channel/types';
import { getMinimalUserSetting, notifChannelSettingFormatString } from 'helpers/channel/notifSetting';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import useToast from 'hooks/useToast';

import { useSubscribeChannel } from 'queries';

import { NotificationSettingsDropdown } from './NotificationSettingsDropdown';

export type SubscribeChannelDropdownProps = {
  children: ReactNode;
  channelDetails: ChannelDetails;
  onSuccess: () => void;
};

const SubscribeChannelDropdown: FC<SubscribeChannelDropdownProps> = (options) => {
  const { children, channelDetails, onSuccess } = options;
  const { account, provider, wallet, chainId } = useAccount();

  const { connectWallet } = useAppContext();

  const channelSettings =
    channelDetails && channelDetails?.channel_settings ? JSON.parse(channelDetails?.channel_settings) : null;

  const { mutate: subscribeChannel, isPending } = useSubscribeChannel();
  const subscribeToast = useToast();

  const optInHandler = async (channelSetting?: ChannelSetting[]) => {
    const hasAccount = wallet?.accounts?.length > 0;

    const connectedWallet = !hasAccount ? await connectWallet() : null;

    const walletAddress = hasAccount ? account : connectedWallet.accounts[0].address;
    const web3Provider = hasAccount ? provider : new ethers.providers.Web3Provider(connectedWallet.provider, 'any');
    const onCoreNetwork = chainId === appConfig.coreContractChain;

    const channelAddress = !onCoreNetwork ? (channelDetails.alias_address as string) : channelDetails.channel;

    const _signer = await web3Provider?.getSigner(walletAddress);

    const minimalNotifSettings = channelSetting
      ? getMinimalUserSetting(notifChannelSettingFormatString({ settings: channelSetting }))
      : null;

    subscribeChannel(
      {
        signer: _signer,
        channelAddress: convertAddressToAddrCaip(channelAddress, chainId),
        userAddress: convertAddressToAddrCaip(walletAddress, chainId),
        settings: minimalNotifSettings,
        env: appConfig.pushNodesEnv,
      },
      {
        onSuccess: (response) => {
          console.log('Response on the channels  apge', response);
          if (response.status == '204') {
            onSuccess();
            subscribeToast.showMessageToast({
              toastTitle: 'Success',
              toastMessage: 'Successfully opted into channel !',
              toastType: 'SUCCESS',
              getToastIcon: (size) => (
                <MdCheckCircle
                  size={size}
                  color="green"
                />
              ),
            });
          } else {
            console.log('Error in the response >>', response);
            subscribeToast.showMessageToast({
              toastTitle: 'Error',
              toastMessage: `There was an error opting into channel`,
              toastType: 'ERROR',
              getToastIcon: (size) => (
                <MdError
                  size={size}
                  color="red"
                />
              ),
            });
          }
        },
        onError: (error) => {
          console.log('Error in the schnnale', error);
        },
      }
    );
  };

  return (
    <>
      {channelSettings && channelSettings.length ? (
        <Dropdown
          overlay={(setIsOpen) => (
            <NotificationSettingsDropdown
              optInHandler={optInHandler}
              channelSettings={channelSettings}
              loading={isPending}
              onClose={() => setIsOpen(false)}
            />
          )}
        >
          {children}
        </Dropdown>
      ) : (
        <Box
          onClick={() => {
            optInHandler();
          }}
        >
          {children}
        </Box>
      )}
    </>
  );
};

export { SubscribeChannelDropdown };
