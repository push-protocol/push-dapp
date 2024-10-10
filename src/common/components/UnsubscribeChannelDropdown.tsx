// React and other libraries
import { FC, ReactNode } from 'react';
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

export type UnsubscribeChannelDropdownProps = {
  children: ReactNode;
  channelDetail: ChannelDetails;
  centeronMobile?: boolean;
  onSuccess: () => void;
  userSetting?: UserSetting[] | undefined;
};

const UnsubscribeChannelDropdown: FC<UnsubscribeChannelDropdownProps> = ({
  children,
  channelDetail,
  onSuccess,
  userSetting,
}) => {
  const { account, chainId, provider, wallet } = useAccount();

  const { handleConnectWalletAndEnableProfile } = useAppContext();

  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const channelSetting =
    channelDetail && channelDetail?.channel_settings ? JSON.parse(channelDetail?.channel_settings) : null;

  const { mutate: saveNotificationSettings, isPending: updatingNotificationSettings } = useUpdateNotificationSettings();
  const { mutate: unsubscribeChannel, isPending: unsubscribing } = useUnsubscribeChannel();

  // This will get changed when new toast is made
  const unsubscribeToast = useToast();

  const handleSaveNotificationSettings = async (settings: UserSetting[]) => {
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
            console.log('Error in Saving notification settings', response);
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
  };

  const handleOptOut = async () => {
    const onCoreNetwork = chainId === appConfig.coreContractChain;

    const channelAddress = !onCoreNetwork ? (channelDetail.alias_address as string) : channelDetail.channel;

    const _signer = await provider.getSigner(account);

    unsubscribeChannel(
      {
        signer: _signer,
        channelAddress: convertAddressToAddrCaip(channelAddress, chainId),
        userAddress: convertAddressToAddrCaip(account, chainId),
        env: appConfig.pushNodesEnv,
      },
      {
        onSuccess: (response) => {
          onSuccess();
          if (response.status === 'success') {
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
