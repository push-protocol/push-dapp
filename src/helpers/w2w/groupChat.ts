import { walletToCAIP10 } from '.';
import { Feeds } from '../../types/chat';

export const checkIfGroup = (feed: Feeds): boolean => {
  if (feed?.hasOwnProperty('groupInformation') && feed?.groupInformation) return true;
  return false;
};

export const getProfilePicture = (feed: Feeds): string => {
  if (checkIfGroup(feed))
    return `https://gateway.ipfs.io/ipfs/${feed?.groupInformation?.groupImageCID}`;
  else return feed?.profilePicture!;
};

export const getName = (feed: Feeds): string => {
  if (checkIfGroup(feed)) return feed?.groupInformation?.groupName!;
  else return feed?.wallets.split(',')[0].toString();
};

export const getChatsnapMessage = (feed: Feeds, account: string) => {
  if (checkIfGroup(feed) && !feed.msg.messageContent) {
    if (feed?.groupInformation?.groupCreator === walletToCAIP10({ account})) {
      return {
        type: 'Text',
        message: 'Group successfully created!',
      };
    } else {
      return {
        type: 'Text',
        message: 'Joined group successfully',
      };
    }
  }
  return {
    type: feed.msg.messageType,
    message: feed.msg.messageContent,
  };
};
