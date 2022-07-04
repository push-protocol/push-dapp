import * as IPFSHelper from '../../../helpers/w2w/IPFS';
import { IPFSHTTPClient } from 'ipfs-http-client';
import { MessageIPFS } from '../../../helpers/w2w/IPFS';
import {intitializeDb} from './w2wIndexeddb';

import {getInbox} from '../../../helpers/w2wChatHelper';
export interface InboxChat {
    name: string,
    profile_picture: string,
    timestamp: number,
    lastMessage: string,
    messageType:string
}

export const fetchMessagesFromIpfs = async (inbox)=>{
    for(let i in inbox)
    {
        if (inbox[i]?.threadhash) {
            const IPFSClient: IPFSHTTPClient = IPFSHelper.createIPFSClient();
            const current = await IPFSHelper.get(inbox[i].threadhash, IPFSClient);
            const msgIPFS: MessageIPFS = current as MessageIPFS
            
            const msg: InboxChat = {
                name: inbox[i].wallets.split(',')[0].toString(),
                profile_picture:inbox[i].profile_picture,
                lastMessage: msgIPFS.messageContent,
                timestamp: msgIPFS.timestamp,
                messageType:msgIPFS.messageType
            };
            if(msg.lastMessage.length>25)
            {
               
                msg.lastMessage = msg.lastMessage.slice(0,25)+'...';
            }
            inbox[i] = {...inbox[i],msg}
        }
        else{
            const msg: InboxChat = {
                name: inbox[i].wallets.split(',')[0].toString(),
                profile_picture:inbox[i].profile_picture,
                lastMessage: null,
                timestamp: null,
                messageType:null
            }
            inbox[i] = {...inbox[i],msg}
        }
    }
    inbox?.sort((a,b)=>(a.msg?.timestamp<b.msg?.timestamp?1:-1))
    return inbox
}

export const fetchInbox = async (did)=>{
    console.log(did.id);
    let inbox = await getInbox(did.id); //[{},{}]=>"did":[]
    console.log(inbox);
    inbox = await fetchMessagesFromIpfs(inbox);
    console.log(inbox);
    await intitializeDb('Insert',2,'Inbox',did.id,inbox,'did');
    return inbox;
}

export const formatFileSize = (size: number) => {
    let i = Math.floor(Math.log(size) / Math.log(1024));
  
    return `${(size / Math.pow(1024, i)).toFixed(1)} ${
      ["B", "KB", "MB", "GB", "TB"][i]
    }`;
};