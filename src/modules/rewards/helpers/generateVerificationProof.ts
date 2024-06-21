import { PushAPI } from '@pushprotocol/restapi';
import * as openpgp from 'openpgp';

export const generateVerificationProof = async (data?: any, userPushSDKInstance?: PushAPI) => {
  console.log(
    'userPushSDKInstance && userPushSDKInstance?.readmode()',
    userPushSDKInstance,
    !userPushSDKInstance?.readmode()
  );
  if (userPushSDKInstance && !userPushSDKInstance?.readmode()) {
    const sigingingMessage = JSON.stringify(data);

    console.log('---------------- MEESGAE TO BE SIGNED ----------------');
    console.log(sigingingMessage);

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

    console.log('Sign', verificationProof);
    return verificationProof;
  }
};
