// React and other libraries
import { FC, memo, ReactNode, useCallback, useEffect, useState } from 'react';
import { MdCheckCircle, MdError } from 'react-icons/md';
import { useSelector } from 'react-redux';

// Utility functions
import { ChannelDetails } from 'queries';
import { ethers } from 'ethers';

import { Box, Dropdown } from 'blocks';
import { appConfig } from 'config';
import { useAppContext } from 'contexts/AppContext';

import { useAccount } from 'hooks';

import { UserStoreType } from 'types';

import { ChannelSetting } from 'helpers/channel/types';
import { getMinimalUserSetting, notifChannelSettingFormatString } from 'helpers/channel/notifSetting';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import useToast from 'hooks/useToast';

import { useSubscribeChannel } from 'queries';

import { NotificationSettingsDropdown } from './NotificationSettingsDropdown';
import { retrieveUserPGPKeyFromStorage } from 'helpers/connectWalletHelper';

export type ProfileModalVisibilityType = {
  isVisible: boolean;
  channel_id: number | null;
};

export type SubscribeChannelDropdownProps = {
  children: ReactNode;
  channelDetails: ChannelDetails;
  onSuccess: () => void;
  onChangeProfileModalVisibility?: (show: ProfileModalVisibilityType) => void; // Function prop to control modal visibility
  profileModalVisibility?: ProfileModalVisibilityType;
};

const SubscribeChannelDropdown: FC<SubscribeChannelDropdownProps> = memo((options) => {
  const { children, channelDetails, onSuccess, onChangeProfileModalVisibility, profileModalVisibility } = options;
  const { account, provider, wallet, chainId } = useAccount();

  const { connectWallet } = useAppContext();

  // State to handle the temporary channel setting
  const [tempChannelSetting, setTempChannelSettings] = useState<ChannelSetting[] | undefined>(undefined);
  // Get the userPushSDKInstance from the store
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const channelSettings =
    channelDetails && channelDetails?.channel_settings ? JSON.parse(channelDetails?.channel_settings) : null;

  const { mutate: subscribeChannel, isPending } = useSubscribeChannel();
  const subscribeToast = useToast();

  useEffect(() => {
    // If the user has account and the profile is unlocked, then run the optInHandler
    if (
      profileModalVisibility?.isVisible &&
      profileModalVisibility?.channel_id === channelDetails.id &&
      userPushSDKInstance &&
      !userPushSDKInstance?.readmode()
    ) {
      console.log('run optInHandler side effect====>>>>>>>');
      onChangeProfileModalVisibility?.({ isVisible: false, channel_id: null });
      optInHandler(tempChannelSetting);
    }
  }, [profileModalVisibility, userPushSDKInstance]);

  const optInHandler = useCallback(
    async (channelSetting?: ChannelSetting[]) => {
      const hasAccount = wallet?.accounts?.length > 0;

      const connectedWallet = !hasAccount ? await connectWallet() : null;

      // If the user has account or the wallet is connected, and the profile is locked, then show the profile modal and return
      if ((hasAccount || connectedWallet) && userPushSDKInstance && userPushSDKInstance?.readmode()) {
        onChangeProfileModalVisibility?.({ isVisible: true, channel_id: channelDetails.id });
        channelSetting && setTempChannelSettings(channelSetting);
        return;
      }

      const walletAddress = hasAccount ? account : connectedWallet.accounts[0].address;
      const web3Provider = hasAccount ? provider : new ethers.providers.Web3Provider(connectedWallet.provider, 'any');
      const onCoreNetwork = chainId === appConfig.coreContractChain;

      const channelAddress = !onCoreNetwork ? (channelDetails.alias_address as string) : channelDetails.channel;

      const _signer = await web3Provider?.getSigner(walletAddress);

      const minimalNotifSettings = channelSetting
        ? getMinimalUserSetting(notifChannelSettingFormatString({ settings: channelSetting }))
        : null;

      const decryptedPGPKeys = userPushSDKInstance?.decryptedPgpPvtKey ?? retrieveUserPGPKeyFromStorage(account);

      subscribeChannel(
        {
          signer: _signer,
          channelAddress: convertAddressToAddrCaip(channelAddress, chainId),
          userAddress: convertAddressToAddrCaip(walletAddress, chainId),
          settings: minimalNotifSettings,
          env: appConfig.pushNodesEnv,
          decryptedPGPKeys,
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
      tempChannelSetting && setTempChannelSettings(undefined);
    },
    [
      account,
      chainId,
      connectWallet,
      onChangeProfileModalVisibility,
      provider,
      subscribeChannel,
      userPushSDKInstance,
      wallet,
      profileModalVisibility,
    ]
  );

  return (
    <Box>
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
    </Box>
  );
});

export { SubscribeChannelDropdown };
