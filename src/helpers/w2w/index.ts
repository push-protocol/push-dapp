// Internal Components
import * as PGP from './pgp'
import * as DIDHelper from './did'
import * as Ceramic from './ceramic'
import * as AES from './aes'
import { ConnectedUser, Feeds, MessageIPFSWithCID } from '../../types/chat'
import { checkIfGroup, getMemberDetails } from './groupChat'
import { getUser } from '../../api/w2w'
// import { ConnectedUser, Feeds, MessageIPFSWithCID } from 'api'

export const walletToCAIP10 = ({ account }: { account: string;}): string => {
  if (account.includes('eip155:')) {
    return account
  }
  return 'eip155:' + account
}

export const caip10ToWallet = (wallet: string): string => {
  wallet = wallet?.replace('eip155:', '')
  return wallet
}

export const encryptAndSign = async ({
  plainText,
  fromPublicKeyArmored,
  toPublicKeyArmored,
  privateKeyArmored
}: {
  plainText: string
  fromPublicKeyArmored: string
  toPublicKeyArmored: string,
  privateKeyArmored: string
}): Promise<{ cipherText: string; encryptedSecret: string; signature: string; sigType: string; encType: string }> => {
  const secretKey: string = AES.generateRandomSecret(15)
  const cipherText: string = AES.encrypt({ plainText, secretKey })
  const encryptedSecret = await PGP.encrypt({
    plainText: secretKey,
    fromPublicKeyArmored,
    toPublicKeyArmored
  })
  const signature: string = await PGP.sign({ message: cipherText, signingKey: privateKeyArmored })
  return {
    cipherText,
    encryptedSecret,
    signature,
    sigType: 'pgp',
    encType: 'pgp'
  }
}

export const decryptAndVerifySignature = async ({
  cipherText,
  encryptedSecretKey,
  publicKeyArmored,
  signatureArmored,
  privateKeyArmored
}: {
  cipherText: string
  encryptedSecretKey: string
  publicKeyArmored: string
  signatureArmored: string,
  privateKeyArmored: string
}): Promise<string> => {
  // const privateKeyArmored: string = await DIDHelper.decrypt(JSON.parse(encryptedPrivateKeyArmored), did)
  const secretKey: string = await PGP.decrypt({
    cipherText: encryptedSecretKey,
    toPrivateKeyArmored: privateKeyArmored
  })
  await PGP.verifySignature({ messageContent: cipherText, signatureArmored, publicKeyArmored })
  return AES.decrypt({ cipherText, secretKey })
}

export const decryptFeeds = async ({
  feeds,
  connectedUser,
}: {
  feeds: Feeds[]
  connectedUser: ConnectedUser
}): Promise<Feeds[]> => {
  for (let feed of feeds) {
    if (feed.msg.encType !== 'PlainText' && feed.msg.encType !== null && feed.msg.messageContent) {
      // To do signature verification it depends on who has sent the message
      let signatureValidationPubliKey: string
      if (feed.msg.fromCAIP10 === connectedUser.wallets.split(',')[0]) {
        signatureValidationPubliKey = connectedUser.publicKey
      } else {
        if (checkIfGroup(feed) && !feed.publicKey) 
        { const member = getMemberDetails(feed);
         feed.publicKey = member?member.publicKey:'';
        }
        signatureValidationPubliKey = feed.publicKey!;
      }
      try {
        feed.msg.messageContent = await decryptAndVerifySignature({
          cipherText: feed.msg.messageContent,
          encryptedSecretKey: feed.msg.encryptedSecret,
          publicKeyArmored: signatureValidationPubliKey,
          signatureArmored: feed.msg.signature,
          privateKeyArmored: connectedUser.privateKey!,
        });
      } catch (e) {
        console.log(e);
      }
    }
  }
  return feeds
}

export interface IDecryptMessage {
  savedMsg: MessageIPFSWithCID
  connectedUser: ConnectedUser
  account:string
  chainId:number
  currentChat:Feeds
  inbox:Feeds[]
}

export const decryptMessages = async ({
  savedMsg,
  connectedUser,
  account,
  currentChat,
  inbox
}:
  IDecryptMessage
): Promise<MessageIPFSWithCID> => {
  if (savedMsg.encType !== 'PlainText' && savedMsg.encType !== null) {
    // To do signature verification it depends on who has sent the message
    let signatureValidationPubliKey: string;
    if (savedMsg.fromCAIP10 === walletToCAIP10({ account })) {
      signatureValidationPubliKey = connectedUser.publicKey;
    } else {
      if (!currentChat.publicKey) {
        const latestUserInfo = inbox.find(
          (x) => x.wallets.split(',')[0] === currentChat.wallets.split(',')[0]
        );
        if (latestUserInfo) {
          signatureValidationPubliKey = latestUserInfo.publicKey!;
        }
      } else {
        signatureValidationPubliKey = currentChat.publicKey!;
      }
    }
    try {
      savedMsg.messageContent = await decryptAndVerifySignature({
        cipherText: savedMsg.messageContent,
        encryptedSecretKey: savedMsg.encryptedSecret,
        privateKeyArmored: connectedUser.privateKey!,
        publicKeyArmored: signatureValidationPubliKey!,
        signatureArmored: savedMsg.signature,
      });
    } catch (e) {
      console.log(e);
    }

  }

  return savedMsg;
}

export const formatFileSize = (size: number): string => {
  const i = Math.floor(Math.log(size) / Math.log(1024))
  return `${(size / Math.pow(1024, i)).toFixed(1)} ${['B', 'KB', 'MB', 'GB', 'TB'][i]}`
}


export default {
  PGP: PGP,
  DID: DIDHelper,
  Ceramic: Ceramic
}


