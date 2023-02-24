
import { ConnectedUser,Feeds, User } from "types/chat";
import * as PushNodeClient from 'api';
import * as PushAPI from '@pushprotocol/restapi';


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
};

export const checkIfIntentExist = ({
  receivedIntents,
  currentChat,
  connectedUser,
}: CheckIfIntentExistPropType): string => {
  const threadHash = receivedIntents?.find(
    (x) => x?.combinedDID === currentChat?.combinedDID && x?.msg?.toDID === connectedUser?.did
  )?.threadhash;

  return threadHash;
};

type GetLatestThreadHashPropRtpe = {
  inbox: Feeds[];
  receivedIntents: Feeds[];
  currentChat: Feeds;
};
export const getLatestThreadHash = ({ inbox, receivedIntents, currentChat }: GetLatestThreadHashPropRtpe): string => {
  const latestThreadHash =
    inbox?.find((x) => x?.combinedDID === currentChat?.combinedDID)?.threadhash ||
    receivedIntents?.find((x) => x?.combinedDID === currentChat?.combinedDID)?.threadhash;
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

export const getUserWithDecryptedPvtKey = async(connectedUser:ConnectedUser):Promise<ConnectedUser> => {
  let decryptedPrivateKey;
    let user:User;


    if(!connectedUser.publicKey)
    {

       user = await PushNodeClient.getUser({ caip10:connectedUser.wallets });
       if(!user){
        return connectedUser
       }else{
        decryptedPrivateKey = await PushAPI.chat.decryptWithWalletRPCMethod(
          user.encryptedPrivateKey,
          connectedUser.wallets.split(':')[1]
        );
        return {...user,privateKey:decryptedPrivateKey};
       }

    }
    return connectedUser;
}