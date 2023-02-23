import { appConfig } from 'config';

interface videoPayloadType {
  userToCall: string;
  fromUser: string;
  signalData: any;
  name: string;
  status: number;
}

interface payloadType {
  sender: string;
  recipient: string;
  identity: string;
  source: string;
}

interface SendVideoCallNotifType {
  toAddress: string;
  fromAddress: string;
  signalData: any;
  name: string;
  status: 1 | 2 | 3;
  // status 1 is call initiated, 2 is call answered, 3 is call completed
}

const sendVideoCallNotif = ({ toAddress, fromAddress, signalData, name, status }: SendVideoCallNotifType) => {
  const videoPayload: videoPayloadType = {
    userToCall: toAddress,
    fromUser: fromAddress,
    signalData,
    name,
    status,
  };
  let identityPayload = {
    notification: {
      title: 'VideoCall',
      body: 'VideoCall',
    },
    data: {
      amsg: 'VideoCall',
      asub: 'VideoCall',
      type: '3',
      etime: Date.now() + 245543,
      hidden: '1',
      videoMeta: videoPayload,
    },
  };

  const identityType: number = 2;
  const stringifiedData: string = JSON.stringify(identityPayload);
  const identity: string = `${identityType}+${stringifiedData}`;

  const payload: payloadType = {
    sender: `eip155:42:${fromAddress}`,
    recipient: `eip155:42:${toAddress}`,
    identity: identity,
    source: 'PUSH_VIDEO',
  };
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  };
  fetch(`${appConfig.w2wApiUrl}/v1/payloads/video/poc`, requestOptions);
};

export default sendVideoCallNotif;
