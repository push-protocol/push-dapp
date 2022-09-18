import { Feeds, getFromIPFS, getInbox, User } from 'api'
import { DID } from 'dids'
import { decryptAndVerifySignature } from 'helpers/w2w'
import { MessageIPFS } from 'helpers/w2w/ipfs'
import { InboxChat } from 'sections/chat/ChatMainSection'
import { intitializeDb } from './w2wIndexeddb'

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
        encryptedSecret: msgIPFS.encryptedSecret
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
        encryptedSecret: null
      }
      inbox[i] = { ...inbox[i], msg }
    }
  }
  inbox?.sort((a, b) => (a.msg?.timestamp < b.msg?.timestamp ? 1 : -1))
  return inbox
}

export const fetchInbox = async (did: DID): Promise<Feeds[]> => {
  let inbox: Feeds[] = await getInbox(did.id)
  inbox = inbox.filter((inbx) => inbx.intent.includes(did.id))
  inbox = await fetchMessagesFromIPFS(inbox)
  return inbox
}

export const fetchIntent = async ({
  did,
  intentStatus = ''
}: {
  did: string
  intentStatus?: string
}): Promise<Feeds[]> => {
  let intents: Feeds[] = await getInbox(did)
  intents = intents.filter((intent) => !intent.intent.includes(did) && intent.intentSentBy !== did)
  if (intentStatus === 'Pending') {
    intents = intents.filter((intent) => !intent.intent.includes(did))
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
  did
}: {
  feeds: Feeds[]
  connectedUser: User
  did: DID
}): Promise<Feeds[]> => {
  for (let feed of feeds) {
    if (feed.msg.encType !== 'PlainText' && feed.msg.encType !== null) {
      // To do signature verification it depends on who has sent the message
      let signatureValidationPubliKey: string
      if (feed.msg.fromDID === connectedUser.did) {
        signatureValidationPubliKey = connectedUser.publicKey
      } else {
        signatureValidationPubliKey = feed.publicKey
      }

      feed.msg.lastMessage = await decryptAndVerifySignature({
        cipherText: feed.msg.lastMessage,
        encryptedSecretKey: feed.msg.encryptedSecret,
        did: did,
        encryptedPrivateKeyArmored: connectedUser.encryptedPrivateKey,
        publicKeyArmored: signatureValidationPubliKey,
        signatureArmored: feed.msg.signature
      })
    }
  }
  return feeds
}
