// import { useWeb3React } from '@web3-react/core'
import { ConnectedUser, Feeds, getFromIPFS, getInbox, MessageIPFSWithCID, User } from 'api'
import { DID } from 'dids'
// import { ethers } from 'ethers'
import { decryptAndVerifySignature, walletToCAIP10 } from 'helpers/w2w'
import { MessageIPFS } from 'helpers/w2w/ipfs'
import { InboxChat } from 'sections/chat/ChatMainSection'
import { intitializeDb } from './w2wIndexeddb'
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';


export const fetchMessagesFromIPFS = async (inbox: Feeds[]): Promise<Feeds[]> => {
  for (const i in inbox) {
    if (inbox[i]?.threadhash) {
      const current = await getFromIPFS(inbox[i].threadhash)
      const msgIPFS: MessageIPFS = current as MessageIPFS

      const msg: InboxChat = {
        name: inbox[i].wallets.split(',')[0].toString(),
        profilePicture: inbox[i].profilePicture,
        lastMessage: msgIPFS.messageContent,
        timestamp: msgIPFS.timestamp,
        messageType: msgIPFS.messageType,
        signature: msgIPFS.signature,
        signatureType: msgIPFS.sigType,
        encType: msgIPFS.encType,
        fromDID: msgIPFS.fromDID,
        toDID: msgIPFS.toDID,
        encryptedSecret: msgIPFS.encryptedSecret,
        fromCAIP10: msgIPFS.fromCAIP10,
        toCAIP10: msgIPFS.toCAIP10
      }
      // if (msg.lastMessage.length > 25) {
      //   msg.lastMessage = msg.lastMessage.slice(0, 25) + '...'
      // }
      inbox[i] = { ...inbox[i], msg }
    } else {
      const msg: InboxChat = {
        name: inbox[i].wallets.split(',')[0].toString(),
        profilePicture: inbox[i].profilePicture,
        lastMessage: null,
        encType: null,
        timestamp: null,
        messageType: null,
        signature: null,
        signatureType: null,
        fromDID: null,
        toDID: null,
        encryptedSecret: null,
        fromCAIP10: null,
        toCAIP10: null
      }
      inbox[i] = { ...inbox[i], msg }
    }
  }
  inbox?.sort((a, b) => (a.msg?.timestamp < b.msg?.timestamp ? 1 : -1))
  return inbox
}

export const fetchInbox = async (userId: string): Promise<Feeds[]> => {
  let inbox: Feeds[] = await getInbox(userId)
  inbox = inbox.filter((inbx) => inbx.intent.includes(userId))
  inbox = await fetchMessagesFromIPFS(inbox)
  return inbox
}

export const fetchIntent = async ({
  userId,
  intentStatus = ''
}: {
  userId: string
  intentStatus?: string
}): Promise<Feeds[]> => {
  let intents: Feeds[] = await getInbox(userId)
  intents = intents.filter((intent) => !intent.intent.includes(userId) && intent.intentSentBy !== userId)
  if (intentStatus === 'Pending') {
    intents = intents.filter((intent) => !intent.intent.includes(userId))
  }
  intents = await fetchMessagesFromIPFS(intents)
  return intents
}

export const formatFileSize = (size: number): string => {
  const i = Math.floor(Math.log(size) / Math.log(1024))
  return `${(size / Math.pow(1024, i)).toFixed(1)} ${['B', 'KB', 'MB', 'GB', 'TB'][i]}`
}

export const decryptFeeds = async ({
  feeds,
  connectedUser,
}: {
  feeds: Feeds[]
  connectedUser: ConnectedUser
}): Promise<Feeds[]> => {
  for (let feed of feeds) {
    if (feed.msg.encType !== 'PlainText' && feed.msg.encType !== null) {
      // To do signature verification it depends on who has sent the message
      let signatureValidationPubliKey: string
      if (feed.msg.fromCAIP10 === connectedUser.wallets.split(',')[0]) {
        signatureValidationPubliKey = connectedUser.publicKey
      } else {
        signatureValidationPubliKey = feed.publicKey
      }

      feed.msg.lastMessage = await decryptAndVerifySignature({
        cipherText: feed.msg.lastMessage,
        encryptedSecretKey: feed.msg.encryptedSecret,
        publicKeyArmored: signatureValidationPubliKey,
        signatureArmored: feed.msg.signature,
        privateKeyArmored: connectedUser.privateKey
      })
    }
  }
  return feeds
}

export const decryptMessages = async ({
  savedMsg,
  connectedUser,
  account,
  chainId,
  currentChat,
  inbox
}: {
  savedMsg: MessageIPFSWithCID 
  connectedUser: ConnectedUser
  account:string
  chainId:number
  currentChat:Feeds
  inbox:Feeds[]
}): Promise<MessageIPFSWithCID> => {
  if (savedMsg.encType !== 'PlainText' && savedMsg.encType !== null) {
    // To do signature verification it depends on who has sent the message
    let signatureValidationPubliKey: string;
    if (savedMsg.fromCAIP10 === walletToCAIP10({ account, chainId })) {
      signatureValidationPubliKey = connectedUser.publicKey;
    } else {
      // signatureValidationPubliKey = currentChat.publicKey;
      if (!currentChat.publicKey) {
        const latestUserInfo = inbox.find(
          (x) => x.wallets.split(',')[0] === currentChat.wallets.split(',')[0]
        );
        if (latestUserInfo) {
          signatureValidationPubliKey = latestUserInfo.publicKey;
        }
      } else {
        signatureValidationPubliKey = currentChat.publicKey;
      }
    }
    savedMsg.messageContent = await decryptAndVerifySignature({
      cipherText: savedMsg.messageContent,
      encryptedSecretKey: savedMsg.encryptedSecret,
      privateKeyArmored: connectedUser.privateKey,
      publicKeyArmored: signatureValidationPubliKey,
      signatureArmored: savedMsg.signature,
    });

  }

  return savedMsg;
}
