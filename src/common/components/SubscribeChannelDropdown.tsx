// React and other libraries
import { FC, ReactNode, useContext, useMemo } from 'react';
import { MdCheckCircle, MdError } from 'react-icons/md';

import { ethers } from 'ethers';

import { Box, Dropdown } from 'blocks';
import { appConfig } from 'config';
import { AppContext } from 'contexts/AppContext';

import { useAccount } from 'hooks';

import { ChannelSetting } from 'helpers/channel/types';
import { getMinimalUserSetting, notifChannelSettingFormatString } from 'helpers/channel/notifSetting';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import useToast from 'hooks/useToast';

import { ChannelDetailsResponse, useSubscribeChannel } from 'queries';

import { NotificationSettingsDropdown } from './NotificationSettingsDropdown';

export type SubscribeChannelDropdownProps = {
  children: ReactNode;
  channelDetails: ChannelDetailsResponse;
  onSuccess: () => void;
};

const SubscribeChannelDropdown: FC<SubscribeChannelDropdownProps> = (options) => {
  const { children, channelDetails, onSuccess } = options;
  const { account, provider, wallet, chainId } = useAccount();
  const { connectWallet } = useContext(AppContext);

  const channelSettings = useMemo(() => {
    if (channelDetails && channelDetails?.channel_settings) {
      return JSON.parse(channelDetails?.channel_settings);
    }
    return null;
  }, [channelDetails]);

  const { mutate: subscribeChannel, isPending } = useSubscribeChannel();
  const subscribeToast = useToast();

  const optInHandler = async (channelSetting?: ChannelSetting[]) => {
    let walletAddress = account;
    let web3Provider = provider;
    const onCoreNetwork = chainId === appConfig.coreContractChain;

    if (!(wallet?.accounts?.length > 0)) {
      const connectedWallet = await connectWallet();
      walletAddress = connectedWallet.accounts[0].address;
      web3Provider = new ethers.providers.Web3Provider(connectedWallet.provider, 'any');
    }

    let channelAddress = channelDetails.channel;
    if (!onCoreNetwork) {
      channelAddress = channelDetails.alias_address as string;
    }

    const _signer = await web3Provider?.getSigner(walletAddress);

    let minimalNotifSettings; // this changes the settings into a single thread e.g:3+1-1+2-1-745+3-1-35-395

    if (channelSetting) {
      let notificationSettings = notifChannelSettingFormatString({ settings: channelSetting });
      minimalNotifSettings = getMinimalUserSetting(notificationSettings);
    }

    subscribeChannel(
      {
        signer: _signer,
        channelAddress: convertAddressToAddrCaip(channelAddress, chainId),
        userAddress: convertAddressToAddrCaip(walletAddress, chainId),
        settings: minimalNotifSettings,
        env: appConfig.pushNodesEnv
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
              getToastIcon: (size) => <MdCheckCircle size={size} color="green" />
            });
          } else {
            console.log('Error in the response >>', response);
            subscribeToast.showMessageToast({
              toastTitle: 'Error',
              toastMessage: `There was an error opting into channel`,
              toastType: 'ERROR',
              getToastIcon: (size) => <MdError size={size} color="red" />
            });
          }
        },
        onError: (error) => {
          console.log('Error in the schnnale', error);
        }
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
