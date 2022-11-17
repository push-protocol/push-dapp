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

export interface InboxChat {
    name: string;
    profilePicture: string;
    timestamp: number;
    fromDID: string;
    toDID: string;
    fromCAIP10: string;
    toCAIP10: string;
    lastMessage: string;
    messageType: string;
    encType: string;
    signature: string;
    signatureType: string;
    encryptedSecret: string;
}

export interface BlockedLoadingI {
    enabled: boolean;
    title: string;
    spinnerEnabled?: boolean;
    spinnerSize?: number;
    spinnerType?: number;
    progressEnabled?: boolean;
    progress?: number;
    progressNotice?: string;
}

export interface AppContext {
    currentChat: Feeds;
    viewChatBox: boolean;
    receivedIntents: Feeds[];
    setReceivedIntents: (rIntent: Feeds[]) => void;
    // did: DID;
    // setDID: (did: DID) => void;
    setSearchedUser: (searched: string) => void;
    searchedUser: string;
    setChat: (feed: Feeds) => void;
    connectedUser: ConnectedUser;
    setConnectedUser: (user: ConnectedUser) => void;
    intents: Feeds[];
    setIntents: (intents: Feeds[]) => void;
    inbox: Feeds[];
    setInbox: (inbox: Feeds[]) => void;
    pendingRequests: number;
    setPendingRequests: (pending: number) => void;
    hasUserBeenSearched: boolean;
    setHasUserBeenSearched: (searched: boolean) => void;
    loadingMessage: string;
    setLoadingMessage: (loadingMessage: string) => void;
    setBlockedLoading: (blockedLoading: BlockedLoadingI) => void;
    activeTab: number;
    setActiveTab: (active: number) => void;
    userShouldBeSearched: boolean;
    setUserShouldBeSearched: (value: boolean) => void;
}

