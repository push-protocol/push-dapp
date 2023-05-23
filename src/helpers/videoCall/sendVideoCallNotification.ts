// Internal Compoonents
import * as PushAPI from '@pushprotocol/restapi';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';

// Internal Configs
import { appConfig } from 'config';

interface videoPayloadType {
  userToCall: string;
  fromUser: string;
  chatId: string;
  signalData: any;
  name: string;
  status: number;
}

interface VideoCallInfoType {
  toAddress: string;
  fromAddress: string;
  signalData: any;
  name: string;
  status: 1 | 2 | 3;
  // status 1 is call initiated, 2 is call answered, 3 is call completed
}

interface UserInfoType {
  account: string;
  library: any;
  chainId: number;
  connectedUser: any;
  createUserIfNecessary: any;
}

interface NotifInfoType {
  type: PushAPI.payloads.NOTIFICATION_TYPE; // number, 1 -> broadcase, 3 -> target
  chatId: string;
}

const sendVideoCallNotification = async (
  { toAddress, fromAddress, signalData, name, status }: VideoCallInfoType,
  { account, library, chainId, connectedUser, createUserIfNecessary }: UserInfoType,
  { type, chatId }: NotifInfoType
) => {
  try {
    const videoPayload: videoPayloadType = {
      userToCall: toAddress,
      fromUser: fromAddress,
      chatId,
      signalData,
      name,
      status,
    };

    const senderAddrInCaip = convertAddressToAddrCaip(fromAddress, chainId);
    const _signer = await library.getSigner(account);

    let createdUser;
    if (!connectedUser.publicKey) {
      createdUser = await createUserIfNecessary();
    }

    let notifRecipient;
    if (type === PushAPI.payloads.NOTIFICATION_TYPE.BROADCAST) {
      notifRecipient = senderAddrInCaip;
    }
    if (type === PushAPI.payloads.NOTIFICATION_TYPE.TARGETTED) {
      notifRecipient = convertAddressToAddrCaip(toAddress, chainId);
    }

    const notificationText = `Video Call from ${fromAddress}`;

    await PushAPI.payloads.sendNotification({
      senderType: 1, // for chat notification
      signer: _signer,
      pgpPrivateKey: connectedUser?.privateKey || createdUser?.privateKey,
      chatId,
      type,
      identityType: 2,
      notification: {
        title: notificationText,
        body: notificationText,
      },
      payload: {
        title: 'VideoCall',
        body: 'VideoCall',
        cta: '',
        img: '',
        additionalMeta: videoPayload,
      },
      recipients: notifRecipient,
      channel: senderAddrInCaip,
      env: appConfig.pushNodesEnv,
    });
  } catch (err) {
    console.log('error occured', err);
  }
};

export default sendVideoCallNotification;
