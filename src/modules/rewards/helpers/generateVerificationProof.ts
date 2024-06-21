import { PushAPI } from '@pushprotocol/restapi';
import * as openpgp from 'openpgp';

export const generateVerificationProof = async (data?: any, userPushSDKInstance?: PushAPI) => {
  if (userPushSDKInstance && !userPushSDKInstance?.readmode()) {
    const sigingingMessage = JSON.stringify(data);

    const messageObject: openpgp.Message<string> = await openpgp.createMessage({
      text: sigingingMessage
    });
    const privateKey: openpgp.PrivateKey = await openpgp.readPrivateKey({
      armoredKey: userPushSDKInstance.decryptedPgpPvtKey as string
    });
    const verificationProof = await openpgp.sign({
      message: messageObject,
      signingKeys: privateKey,
      detached: true
    });

    return verificationProof;
  }
};
