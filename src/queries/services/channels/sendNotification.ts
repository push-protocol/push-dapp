import { INotification, IPayload, PushAPI } from '@pushprotocol/restapi';

type SendNotificationParams = {
  userPushSDKInstance: PushAPI;
  recipients: Array<string>;
  payload: IPayload;
  notification: INotification;
  channel: string; //chain address in caip format
};

export const sendNotification = ({
  userPushSDKInstance,
  channel,
  recipients,
  payload,
  notification,
}: SendNotificationParams) =>
  userPushSDKInstance.channel
    .send(recipients, {
      notification,
      payload,
      channel,
    })
    .then(console.debug);
