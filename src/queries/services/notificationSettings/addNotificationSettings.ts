import { AddNotificationSettingsProps } from 'queries/types';

export const addNotificationSettings = async ({
  userPushSDKInstance,
  settings,
}: AddNotificationSettingsProps): Promise<{
  transactionHash: any;
}> => await userPushSDKInstance.channel.setting(settings);
