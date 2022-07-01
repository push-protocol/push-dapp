import * as IPFSHelper from '../../../helpers/w2w/IPFS';
import { IPFSHTTPClient } from 'ipfs-http-client';
import { MessageIPFS } from '../../../helpers/w2w/IPFS';
import { intitializeDb } from './w2wIndexeddb';
import { getInbox } from '../../../helpers/w2wChatHelper';

export interface InboxChat {
    name: string,
    profile_picture: string,
    timestamp: number,
    lastMessage: string
}

export const fetchMessagesFromIpfs = async (inbox) => {
    for (let i in inbox) {
        if (inbox[i]?.threadhash) {
            const IPFSClient: IPFSHTTPClient = IPFSHelper.createIPFSClient();
            const current = await IPFSHelper.get(inbox[i].threadhash, IPFSClient);
            const msgIPFS: MessageIPFS = current as MessageIPFS
            const msg: InboxChat = {
                name: inbox[i].wallets.split(',')[0].toString().slice(0, 15) + '...',
                profile_picture: inbox[i].profile_picture,
                lastMessage: msgIPFS.messageContent,
                timestamp: msgIPFS.timestamp
            };
            if (msg.lastMessage.length > 25) {

                msg.lastMessage = msg.lastMessage.slice(0, 25) + '...';
            }
            inbox[i] = { ...inbox[i], msg }
        }
        else {
            const msg: InboxChat = {
                name: inbox[i].wallets.split(',')[0].toString().slice(0, 15) + '...',
                profile_picture: inbox[i].profile_picture,
                lastMessage: null,
                timestamp: null
            }
            inbox[i] = { ...inbox[i], msg }
        }
    }
    inbox?.sort((a, b) => (a.msg?.timestamp < b.msg?.timestamp ? 1 : -1))
    return inbox
}

export const fetchInbox = async (did) => {
    let inbox = await getInbox(did.id); //[{},{}]=>"did":[]
    inbox = await fetchMessagesFromIpfs(inbox);
    await intitializeDb('Insert', 2, 'Inbox', did.id, inbox, 'did');
    return inbox;
}