import * as PushAPI from '@pushprotocol/restapi';
import { ConnectedUser, Feeds, User } from 'types/chat';
import { appConfig } from '../../config';

import * as PushNodeClient from 'api';

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

type CheckIfIntentExistPropType = {
  receivedIntents: Feeds[];
  currentChat: Feeds;
  connectedUser: ConnectedUser;
  isGroup: boolean;
};

export const checkIfIntentExist = ({
  receivedIntents,
  currentChat,
  connectedUser,
  isGroup,
}: CheckIfIntentExistPropType): boolean => {
  let val: boolean;
  if (isGroup) {
    val = receivedIntents?.find((x) => x?.groupInformation?.chatId === currentChat?.groupInformation?.chatId)
      ? true
      : false;
  } else {
    val = receivedIntents?.find(
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
  const profilePicture = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg==`;
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
  intents
}: {
  walletAddress?: string;
  userData?: User;
  inbox: Feeds[];
  intents: Feeds[];
}): Feeds => {
  const user =
    userData ??
    (await PushAPI.user.get({
      account: walletAddress!,
      env: appConfig.appEnv,
    }));
    console.log(user)
    let feed:Feeds ={};
    const inboxUser = inbox.filter((inb) => inb.did === user.did);

    const intentUser = intents.filter((userExist) => userExist.did === user.did);
    console.log(inboxUser)
    console.log(intentUser)
    if (inboxUser.length) {
      feed = inboxUser[0];
    } else if(intentUser.length){
      feed = intentUser[0];
    }
    else {
   feed = {
    msg: {
      messageContent: null,
      timestamp: null,
      messageType: null,
      signature: null,
      signatureType: null,
      link: null,
      encType: null,
      encryptedSecret: null,
      fromDID: null,
      fromCAIP10: null,
      toDID: null,
      toCAIP10: null,
    },
    wallets: user.wallets,
    did: user.did,
    threadhash: null,
    profilePicture: user.profilePicture,
    about: user.about,
    intent: null,
    intentSentBy: null,
    intentTimestamp: null,
    publicKey: user.publicKey,
    combinedDID: null,
    cid: null,
    groupInformation: undefined,
  };
}
  return feed;
};
export const getUserWithDecryptedPvtKey = async(connectedUser:ConnectedUser):Promise<ConnectedUser> => {
  let decryptedPrivateKey;
    let user:User;
    if(!connectedUser.privateKey)
    {
       user = await PushNodeClient.getUser({ caip10:connectedUser.wallets });
       decryptedPrivateKey = await PushAPI.chat.decryptWithWalletRPCMethod(
        user.encryptedPrivateKey,
        connectedUser.wallets
      );
    }
  return {...user,privateKey:decryptedPrivateKey};
}
