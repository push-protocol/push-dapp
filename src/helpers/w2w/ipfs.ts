import { Feeds, getFromIPFS, getInbox } from "api"
import { InboxChat } from "sections/chat/ChatMainSection"

export interface MessageIPFS {
  fromCAIP10: string
  toCAIP10: string
  fromDID: string
  toDID: string
  messageType: string
  messageContent: string
  signature: string
  sigType: string
  link: string | null
  timestamp?: number
  encType: string
  encryptedSecret: string
}

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
