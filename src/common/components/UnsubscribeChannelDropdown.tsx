// React and other libraries
import { FC, ReactNode, useEffect, useState } from 'react';
import { MdCheckCircle, MdError } from 'react-icons/md';

import { useSelector } from 'react-redux';

import { Dropdown, Menu, MenuItem, OptOut } from 'blocks';

import { appConfig } from 'config';
import { useAppContext } from 'contexts/AppContext';

import { useAccount } from 'hooks';
import useToast from 'hooks/useToast';

import { UserSetting } from 'helpers/channel/types';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import { notifUserSettingFormatString, userSettingsFromDefaultChannelSetting } from 'helpers/channel/notifSetting';

// Utility functions
import { ChannelDetails } from 'queries';
import { useUnsubscribeChannel, useUpdateNotificationSettings } from 'queries';

// Components
import { ManageSettingsDropdown } from './ManageSettingsDropdown';
import { UserStoreType } from 'types';
import { ProfileModalVisibilityType } from './SubscribeChannelDropdown';
import { retrieveUserPGPKeyFromStorage } from 'helpers/connectWalletHelper';

export type UnsubscribeChannelDropdownProps = {
  children: ReactNode;
  channelDetail: ChannelDetails;
  centeronMobile?: boolean;
  onSuccess: () => void;
  userSetting?: UserSetting[] | undefined;
  onChangeProfileModalVisibility?: (show: ProfileModalVisibilityType) => void; // Function prop to control modal visibility
  profileModalVisibility?: ProfileModalVisibilityType;
};

const UnsubscribeChannelDropdown: FC<UnsubscribeChannelDropdownProps> = ({
  children,
  channelDetail,
  onSuccess,
  userSetting,
  profileModalVisibility,
  onChangeProfileModalVisibility,
}) => {
  const { account, chainId, provider, wallet } = useAccount();

  const { handleConnectWalletAndEnableProfile } = useAppContext();

  // State to handle the temporary channel setting
  const [tempSetting, setTempSettings] = useState<UserSetting[] | undefined>(undefined);
  // Get the userPushSDKInstance from the store
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const channelSetting =
    channelDetail && channelDetail?.channel_settings ? JSON.parse(channelDetail?.channel_settings) : null;

  const { mutate: saveNotificationSettings, isPending: updatingNotificationSettings } = useUpdateNotificationSettings();
  const { mutate: unsubscribeChannel, isPending: unsubscribing } = useUnsubscribeChannel();

  // This will get changed when new toast is made
  const unsubscribeToast = useToast();

  useEffect(() => {
    // If the user has account and the profile is unlocked, then run the optInHandler
    if (
      profileModalVisibility?.isVisible &&
      profileModalVisibility?.channel_id === channelDetail.id &&
      userPushSDKInstance &&
      !userPushSDKInstance?.readmode()
    ) {
      onChangeProfileModalVisibility?.({ isVisible: false, channel_id: null });
      if (tempSetting) {
        handleSaveNotificationSettings(tempSetting);
      } else {
        handleOptOut();
      }
    }
  }, [profileModalVisibility, userPushSDKInstance]);

  const handleSaveNotificationSettings = async (settings: UserSetting[]) => {
    // If the profile is locked, then show the profile modal and return
    if (userPushSDKInstance && userPushSDKInstance?.readmode()) {
      onChangeProfileModalVisibility?.({ isVisible: true, channel_id: channelDetail.id });
      setTempSettings(settings);
      return;
    }
    const onCoreNetwork = chainId === appConfig.coreContractChain;

    const channelAddress = !onCoreNetwork ? (channelDetail.alias_address as string) : channelDetail.channel;

    const sdkInstance = !userPushSDKInstance.signer
      ? (await handleConnectWalletAndEnableProfile({ wallet })) ?? undefined
      : userPushSDKInstance;

    saveNotificationSettings(
      {
        userPushSDKInstance: sdkInstance,
        channelAddress: convertAddressToAddrCaip(channelAddress, chainId),
        settings: notifUserSettingFormatString({ settings: settings }),
      },
      {
        onSuccess: (response) => {
          if (response.status === 204) {
            onSuccess();
            unsubscribeToast.showMessageToast({
              toastTitle: 'Success',
              toastMessage: 'Successfully saved the user settings!',
              toastType: 'SUCCESS',
              getToastIcon: (size) => (
                <MdCheckCircle
                  size={size}
                  color="green"
                />
              ),
            });
          } else {
            unsubscribeToast.showMessageToast({
              toastTitle: 'Error',
              toastMessage: `There was an error in saving the settings`,
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
          console.log('Error in saving notification settings', error);
        },
      }
    );
    setTempSettings(undefined);
  };

  const handleOptOut = async () => {
    // If the profile is locked, then show the profile modal and return
    if (userPushSDKInstance && userPushSDKInstance?.readmode()) {
      onChangeProfileModalVisibility?.({ isVisible: true, channel_id: channelDetail.id });
      return;
    }
    const onCoreNetwork = chainId === appConfig.coreContractChain;

    const channelAddress = !onCoreNetwork ? (channelDetail.alias_address as string) : channelDetail.channel;

    const _signer = await provider.getSigner(account);

    const decryptedPGPKeys = userPushSDKInstance?.decryptedPgpPvtKey ?? retrieveUserPGPKeyFromStorage(account);

    unsubscribeChannel(
      {
        signer: _signer,
        channelAddress: convertAddressToAddrCaip(channelAddress, chainId),
        userAddress: convertAddressToAddrCaip(account, chainId),
        env: appConfig.pushNodesEnv,
        decryptedPGPKeys,
      },
      {
        onSuccess: (response) => {
          onSuccess();
          if (response.status === 204) {
            unsubscribeToast.showMessageToast({
              toastTitle: 'Success',
              toastMessage: 'Successfully opted out of channel !',
              toastType: 'SUCCESS',
              getToastIcon: (size) => (
                <MdCheckCircle
                  size={size}
                  color="green"
                />
              ),
            });
          } else {
            unsubscribeToast.showMessageToast({
              toastTitle: 'Error',
              toastMessage: `There was an error opting out of channel`,
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
          console.log('Error in the unsubcribe channel', error);
        },
      }
    );
  };

  return (
    <>
      {userSetting && channelSetting ? (
        <Dropdown
          overlay={
            <ManageSettingsDropdown
              userSetting={userSetting ?? userSettingsFromDefaultChannelSetting({ channelSetting: channelSetting })}
              updateNotificationSettings={handleSaveNotificationSettings}
              updatingNotificationSettings={updatingNotificationSettings}
              unsubscribing={unsubscribing}
              unsubscribe={handleOptOut}
            />
          }
        >
          {children}
        </Dropdown>
      ) : (
        <Dropdown
          overlay={
            <Menu>
              <MenuItem
                label="Unsubscribe"
                icon={<OptOut />}
                onClick={handleOptOut}
              />
            </Menu>
          }
        >
          {children}
        </Dropdown>
      )}
    </>
  );
};

export { UnsubscribeChannelDropdown };
