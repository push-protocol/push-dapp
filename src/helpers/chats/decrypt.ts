import { decryptAndVerifySignature, decryptionErrorMsg } from "helpers/w2w";
import { checkIfGroup, getMemberDetails } from "helpers/w2w/groupChat";
import { ConnectedUser, FeedsNew } from "types/chat";

export const decryptFeedsNew = async ({
  feeds,
  connectedUser,
}: {
  feeds: FeedsNew;
  connectedUser: ConnectedUser;
}): Promise<FeedsNew> => {
  for (const key in feeds) {
    if (feeds[key].msg.encType !== 'PlainText' && feeds[key].msg.encType !== null && feeds[key].msg.messageContent) {
      // To do signature verification it depends on who has sent the message
      let signatureValidationPubliKey: string;
      if (feeds[key].msg.fromCAIP10 === connectedUser.wallets) {
        signatureValidationPubliKey = connectedUser.publicKey;
      } else {
        if (checkIfGroup(feeds[key]) && !feeds[key].publicKey) {
          const member = getMemberDetails(feeds[key], feeds[key]?.msg?.fromCAIP10);
          feeds[key].publicKey = member ? member.publicKey : '';
        }
        signatureValidationPubliKey = feeds[key].publicKey!;
      }
      try {
        feeds[key].msg.messageContent = await decryptAndVerifySignature({
          cipherText: feeds[key].msg.messageContent,
          encryptedSecretKey: feeds[key].msg.encryptedSecret,
          publicKeyArmored: signatureValidationPubliKey,
          signatureArmored: feeds[key].msg.signature,
          privateKeyArmored: connectedUser.privateKey!,
        });
      } catch (e) {
        // console.log(e);
        if(e.message == decryptionErrorMsg){
          feeds[key].msg.messageType = 'Text';
          feeds[key].msg.messageContent = 'message encrypted before you joined';
        }
      }
    }
  }
  return feeds;
};