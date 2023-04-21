import * as PushAPI from '@pushprotocol/restapi';
import { intitializeDb } from 'components/chat/w2wChat/w2wIndexeddb';
import { profilePicture } from 'config/W2WConfig';
import * as w2wHelper from 'helpers/w2w/';
import { ConnectedUser, Feeds, IGroup, User } from 'types/chat';
import { walletToCAIP10 } from '.';
import { appConfig } from '../../config';

export function checkConnectedUser(connectedUser: ConnectedUser): boolean {
  if (
    !(
      connectedUser.allowedNumMsg === 0 &&
      connectedUser.numMsg === 0 &&
      connectedUser.about === '' &&
      connectedUser.signature === '' &&
      connectedUser.encryptedPrivateKey === '' &&
      connectedUser.publicKey === ''
    )
  ) {
    return true;
  } else return false;
}

type CheckIfChatsExistPropType = {
  chats: Feeds[];
  currentChat: Feeds;
  connectedUser: ConnectedUser;
  isGroup?: boolean;
};

export const checkIfChatExist = ({
  chats,
  currentChat,
  connectedUser,
  isGroup,
}: CheckIfChatsExistPropType): boolean => {
  let val: boolean;
  if (isGroup) {
    val = chats?.find((x) => x?.groupInformation?.chatId === currentChat?.groupInformation?.chatId)
      ? true
      : false;
  } else {
    val = chats?.find(
      (x) => x?.combinedDID === currentChat?.combinedDID && x?.msg?.toDID === connectedUser?.did
    )
      ? true
      : false;
  }
  return val;
};

type GetLatestThreadHashPropRtpe = {
  inbox: Feeds[];
  receivedIntents: Feeds[];
  currentChat: Feeds;
  isGroup: boolean;
};
export const getLatestThreadHash = ({
  inbox,
  receivedIntents,
  currentChat,
  isGroup,
}: GetLatestThreadHashPropRtpe): string => {
  let latestThreadHash = '';
  if (isGroup) {
    latestThreadHash =
      inbox?.find((x) => x?.groupInformation?.chatId === currentChat?.groupInformation?.chatId)?.threadhash ||
      receivedIntents?.find((x) => x?.groupInformation?.chatId === currentChat?.groupInformation?.chatId)?.threadhash;
  } else {
    latestThreadHash =
      inbox?.find((x) => x?.combinedDID === currentChat?.combinedDID)?.threadhash ||
      receivedIntents?.find((x) => x?.combinedDID === currentChat?.combinedDID)?.threadhash;
  }

  return latestThreadHash;
};

export const displayDefaultUser = ({ caip10 }: { caip10: string }): User => {
  const userCreated: User = {
    did: caip10,
    wallets: caip10,
    publicKey: 'temp',
    profilePicture: profilePicture,
    encryptedPrivateKey: 'temp',
    encryptionType: 'temp',
    signature: 'temp',
    sigType: 'temp',
    about: null,
    name: null,
    numMsg: 1,
    allowedNumMsg: 100,
    linkedListHash: null,
  };
  return userCreated;
};

export const getDefaultFeed = async ({
  walletAddress,
  userData,
  inbox,
  intents,
}: {
  walletAddress?: string;
  userData?: User;
  inbox: Feeds[];
  intents: Feeds[];
}): Promise<Feeds> => {
  
  const user =
    userData ??
    (await PushAPI.user.get({
      account: walletAddress!,
      env: appConfig.appEnv,
    }));
    let feed:Feeds;
    const inboxUser = inbox.filter((inb) => inb.did === user.did);

    const intentUser = intents.filter((userExist) => userExist.did === user.did);
    if (inboxUser.length) {
      feed = inboxUser[0];
    } else if(intentUser.length){
      feed = intentUser[0];
    }
    else {
   feed = getDefaultFeedObject({user});
}
  return feed;
};

export const getDefaultGroupFeed = async ({
  groupData,
  inbox,
  intents,
}: {
  groupData: IGroup;
  inbox: Feeds[];
  intents: Feeds[];
}): Promise<{feed:Feeds,isNew:boolean}> => {
    let isNew:boolean = false;
    let feed:Feeds;
    console.log(inbox)
    const inboxGroup = inbox.filter((inb) => inb?.groupInformation?.chatId === groupData.chatId);

    const intentGroup = intents.filter((int) =>int?.groupInformation?.chatId === groupData.chatId);
    if (inboxGroup.length) {
      feed = inboxGroup[0];
    } else if(intentGroup.length){
      feed = intentGroup[0];
    }
    else {
   feed = getDefaultFeedObject({groupInformation:groupData});
   isNew = true;
   }
  return {feed,isNew};
};

export const getDefaultFeedObject = ({user,groupInformation}:{user?:User,groupInformation?:IGroup}) => {
  const feed = {
    msg: {
      messageContent: null,
      timestamp: null,
      messageType: null,
      signature: null,
      sigType: null,
      link: null,
      encType: null,
      encryptedSecret: null,
      fromDID: null,
      fromCAIP10: null,
      toDID: null,
      toCAIP10: null,
    },
    wallets: groupInformation?null: user.wallets,
    did: groupInformation?null: user.did,
    threadhash: null,
    profilePicture: groupInformation?groupInformation.groupImage:user.profilePicture,
    about: groupInformation?null:user.about,
    intent: null,
    intentSentBy: null,
    intentTimestamp: null,
    publicKey: groupInformation?null: user.publicKey,
    combinedDID: null,
    cid: null,
    groupInformation: groupInformation??undefined,
  };
  return feed;
}



export const fetchInbox = async (connectedUser):Promise<Feeds[]>=> {
  let inboxes:Feeds[] = await PushAPI.chat.chats({ account: connectedUser.wallets!, env: appConfig.appEnv, toDecrypt: false });
  await intitializeDb<Feeds[]>('Insert', 'Inbox', walletToCAIP10({ account: connectedUser.wallets! }), inboxes, 'did');
  inboxes = await w2wHelper.decryptFeeds({ feeds: inboxes, connectedUser: connectedUser });
  return inboxes
};

export const fetchIntent = async (connectedUser): Promise<Feeds[]> => {
  let intents = await PushAPI.chat.requests({account:connectedUser.wallets.split(':')[1],env:appConfig.appEnv, toDecrypt:false});
  await intitializeDb<Feeds[]>('Insert', 'Intent', w2wHelper.walletToCAIP10({ account: connectedUser.wallets }),intents, 'did');
  intents = await w2wHelper.decryptFeeds({ feeds: intents, connectedUser });
  return intents;
};