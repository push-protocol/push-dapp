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

export interface MessageIPFSWithCID extends MessageIPFS {
    cid: string;
}

export interface User {
    did: string;
    wallets: string;
    profilePicture: string | null;
    publicKey: string;
    encryptedPrivateKey: string;
    encryptionType: string;
    signature: string;
    sigType: string;
    about: string | null;
    name: string | null;
    numMsg: number;
    allowedNumMsg: number;
    linkedListHash?: string | null;
}
  
export interface ConnectedUser extends User {
    privateKey: string | null;
}

export interface Feeds {
    // This property contains all the info to be displayed on the sidebar for the other peer's information
    // Such as the decrypted message content and peer's profilePicture
    msg: InboxChat;
    did: string;
    wallets: string;
    profilePicture: string | null;
    publicKey: string | null;
    about: string | null;
    threadhash: string | null;
    intent: string | null;
    intentSentBy: string | null;
    intentTimestamp: Date;
    combinedDID: string;
    cid: string;
}

