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
    isAdmin?:boolean;
}
  
export interface ConnectedUser extends User {
    privateKey: string | null;
}
export interface Member {
    wallet: string;
    publicKey: string;
    image: string;
    isAdmin: boolean;
  }
export interface IGroup {
  members: { wallet: string, publicKey: string, isAdmin: boolean, image: string }[],
  pendingMembers: { wallet: string, publicKey: string, isAdmin: boolean, image: string }[],
  contractAddressERC20: string | null,
  numberOfERC20: number,
  contractAddressNFT: string | null,
  numberOfNFTTokens: number,
  verificationProof: string,
  groupImage: string | null,
  groupName: string,
  isPublic: boolean,
  groupDescription: string | null,
  groupCreator: string,
  chatId: string
}

export interface ChatMetaI {
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
  cid?: string;
  groupInformation?: IGroup
}

export interface Feeds {
    chatId?: string;
    msg: MessageIPFS;
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
    cid?: string;
    groupInformation?: IGroup
}

export interface TwitterFeedReturnType{
    tweetId:string;
    messageType:string;
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
  setChat: (feed: Feeds) => void;
  intents: Feeds[];
  setIntents: (intents: Feeds[]) => void;
  inbox: Feeds[];
  setInbox: (inbox: Feeds[]) => void;
  hasUserBeenSearched: boolean;
  setHasUserBeenSearched: (searched: boolean) => void;
  loadingMessage: string;
  setLoadingMessage: (loadingMessage: string) => void;
  setBlockedLoading: (blockedLoading: BlockedLoadingI) => void;
  activeTab: number;
  messages:MessageIPFSWithCID[],
  setMessages:(msg:MessageIPFSWithCID[])=>void;
  setActiveTab: (active: number) => void;
  userShouldBeSearched: boolean;
  setUserShouldBeSearched: (value: boolean) => void;
  filteredUserData:User[];
  setFilteredUserData:(value:User[] |IGroup[])=>void;
}

export type MessagetypeType = 'Text' | 'Image' | 'File' | 'GIF';

export interface VideoCallInfoI {
  address: string;
  fromPublicKeyArmored: string;
  fromProfileUsername?: string;
  fromProfilePic?: string;
  toPublicKeyArmored: string;
  toProfileUsername?: string;
  toProfilePic?: string;
  privateKeyArmored: string;
  establishConnection: number;
  chatId?:string;
}