
import { ConnectedUser,Feeds } from "types/chat";

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
