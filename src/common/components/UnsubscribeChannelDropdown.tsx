// React and other libraries
import { FC, ReactNode, useContext, useMemo } from 'react';
import { MdCheckCircle, MdError } from 'react-icons/md';

import { useSelector } from 'react-redux';

import { Box, Dropdown, Menu, MenuItem, OptOut } from 'blocks';

import { appConfig } from 'config';
import { AppContext } from 'contexts/AppContext';

import { useAccount } from 'hooks';
import useToast from 'hooks/useToast';

import { UserSetting } from 'helpers/channel/types';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import { notifUserSettingFormatString, userSettingsFromDefaultChannelSetting } from 'helpers/channel/notifSetting';

// Utility functions
import { ChannelDetailsResponse, useUnsubscribeChannel, useUpdateNotificationSettings } from 'queries';

// Components
import { ManageSettingsDropdown } from './ManageSettingsDropdown';

export type UnsubscribeChannelDropdownProps = {
  children: ReactNode;
  channelDetail: ChannelDetailsResponse;
  onSuccess: () => void;
  userSetting?: UserSetting[] | undefined;
};

const UnsubscribeChannelDropdown: FC<UnsubscribeChannelDropdownProps> = ({
  children,
  channelDetail,
  onSuccess,
  userSetting
}) => {
  const { account, chainId, provider, wallet } = useAccount();

  const { handleConnectWalletAndEnableProfile } = useContext(AppContext);
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });

  const channelSetting = useMemo(() => {
    if (channelDetail && channelDetail?.channel_settings) {
      return JSON.parse(channelDetail?.channel_settings);
    }
    return null;
  }, [channelDetail]);

  const { mutate: saveNotificationSettings, isPending: updatingNotificationSettings } = useUpdateNotificationSettings();
  const { mutate: unsubscribeChannel, isPending: unsubscribing } = useUnsubscribeChannel();

  // This will get changed when new toast is made
  const unsubscribeToast = useToast();

  const handleSaveNotificationSettings = async (settings: UserSetting[]) => {
    const onCoreNetwork = chainId === appConfig.coreContractChain;

    let channelAddress = channelDetail.channel;
    if (!onCoreNetwork) {
      channelAddress = channelDetail.alias_address as string;
    }

    if (settings) {
      const userSettings = notifUserSettingFormatString({ settings: settings });
      console.log('User Setting after >>', userSettings);
    }

    let userPushInstance = userPushSDKInstance;

    if (!userPushInstance.signer) {
      userPushInstance = await handleConnectWalletAndEnableProfile({ wallet });
      if (!userPushInstance) {
        return;
      }
    }

    saveNotificationSettings(
      {
        userPushSDKInstance: userPushInstance,
        channelAddress: convertAddressToAddrCaip(channelAddress, chainId),
        settings: notifUserSettingFormatString({ settings: settings })
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
            console.log("Error in Saving notification settings", response);
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
        }
      }
    );
  };

  const handleOptOut = async () => {
    let channelAddress = channelDetail.channel;
    const onCoreNetwork = chainId === appConfig.coreContractChain;

    if (!onCoreNetwork) {
      channelAddress = channelDetail.alias_address as string;
    }

    const _signer = await provider.getSigner(account);

    unsubscribeChannel(
      {
        signer: _signer,
        channelAddress: convertAddressToAddrCaip(channelAddress, chainId),
        userAddress: convertAddressToAddrCaip(account, chainId),
        env: appConfig.pushNodesEnv
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
        }
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
          <Box display="flex" alignItems="center" cursor="pointer">
            {children}
          </Box>
        </Dropdown>
      ) : (
        <Dropdown
          overlay={
            <Menu>
              <MenuItem label='Opt-out' icon={<OptOut />} onClick={handleOptOut} />
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
