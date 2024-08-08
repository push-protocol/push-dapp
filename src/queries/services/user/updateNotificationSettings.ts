import { PushAPI } from '@pushprotocol/restapi';

type updateNotificationSettingsParams = {
  userPushSDKInstance: PushAPI;
  channelAddress: string;
  settings: any;
};

export const updateNotificationSettings = async ({
  userPushSDKInstance,
  channelAddress,
  settings
}: updateNotificationSettingsParams) => {
  const res = await userPushSDKInstance.notification.subscribe(channelAddress, {
    settings
  });

  return res;
};
