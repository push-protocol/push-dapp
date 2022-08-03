import * as IPFSHelper from '../../../helpers/w2w/IPFS'
import { IPFSHTTPClient } from 'ipfs-http-client'
import { MessageIPFS } from '../../../helpers/w2w/IPFS'
import { intitializeDb } from './w2wIndexeddb'
import { DID } from 'dids'
import { Feeds, getInbox, getIntents } from '../../../api'
import { InboxChat } from './w2wIndex'

export const fetchMessagesFromIPFS = async (inbox: Feeds[]): Promise<Feeds[]> => {
  for (const i in inbox) {
    if (inbox[i]?.threadhash) {
      const IPFSClient: IPFSHTTPClient = IPFSHelper.createIPFSClient()
      const current = await IPFSHelper.get(inbox[i].threadhash, IPFSClient)
      const msgIPFS: MessageIPFS = current as MessageIPFS

      const msg: InboxChat = {
        name: inbox[i].wallets.split(',')[0].toString(),
        profile_picture: inbox[i].profile_picture,
        lastMessage: msgIPFS.messageContent,
        timestamp: msgIPFS.timestamp,
        messageType: msgIPFS.messageType,
        signature: msgIPFS.signature,
        signatureType: msgIPFS.sig_type
      }
      if (msg.lastMessage.length > 25) {
        msg.lastMessage = msg.lastMessage.slice(0, 25) + '...'
      }
      inbox[i] = { ...inbox[i], msg }
    } else {
      const msg: InboxChat = {
        name: inbox[i].wallets.split(',')[0].toString(),
        profile_picture: inbox[i].profile_picture,
        lastMessage: null,
        timestamp: null,
        messageType: null,
        signature: null,
        signatureType: null
      }
      inbox[i] = { ...inbox[i], msg }
    }
  }
  inbox?.sort((a, b) => (a.msg?.timestamp < b.msg?.timestamp ? 1 : -1))
  return inbox
}

export const fetchInbox = async (did: DID): Promise<Feeds[]> => {
  let inbox: Feeds[] = await getInbox(did.id)
  inbox = await fetchMessagesFromIPFS(inbox)
  await intitializeDb<Array<{}>>('Insert', 2, 'Inbox', did.id, inbox, 'did')
  return inbox
}

export const fetchIntent = async (did: DID): Promise<Feeds[]> => {
  let Intents: Feeds[] = await getIntents(did.id)
  Intents = await fetchMessagesFromIPFS(Intents)
  await intitializeDb<Array<{}>>('Insert', 2, 'Intent', did.id, Intents, 'did')
  return Intents
}

export const formatFileSize = (size: number): string => {
  const i = Math.floor(Math.log(size) / Math.log(1024))
  return `${(size / Math.pow(1024, i)).toFixed(1)} ${['B', 'KB', 'MB', 'GB', 'TB'][i]}`
}
