import { caip10ToWallet, walletToCAIP10 } from '.';
import { Feeds } from '../../types/chat';

export const checkIfGroup = (feed: Feeds): boolean => {
  if (feed?.hasOwnProperty('groupInformation') && feed?.groupInformation) return true;
  return false;
};

export const getProfilePicture = (feed: Feeds): string => {
  if (checkIfGroup(feed)) return feed?.groupInformation?.groupImage!;
  else return feed?.profilePicture!;
};

export const getName = (feed: Feeds): string => {
  if (checkIfGroup(feed)) return feed?.groupInformation?.groupName!;
  else return feed.wallets?.split(',')[0].toString();
};

export const getChatsnapMessage = (feed: Feeds, account: string, isIntent?: boolean) => {
  if (checkIfGroup(feed) && !feed.msg.messageContent) {
    if (feed?.groupInformation?.groupCreator === walletToCAIP10({ account })) {
      return {
        type: 'Text',
        message: 'Group successfully created!',
      };
    } else {
      if (isIntent) {
        console.log('in intent');
        return {
          type: 'Text',
          message: 'Group Invite Received',
        };
      } else {
        return {
          type: 'Text',
          message: 'Joined group successfully',
        };
      }
    }
  }
  return {
    type: feed.msg.messageType,
    message: feed.msg.messageContent,
  };
};

export const getIntentMessage = (feed: Feeds, isGroup: boolean) => {
  if (isGroup)
    return `You were invited to the group ${feed?.groupInformation?.groupName}. Please accept to continue messaging in this group`;
  return 'Please accept to enable push chat from this wallet';
};

export const convertToWalletAddressList = (memberList) => {
  return memberList?.map((member) => member.wallets);
};

export const getUpdatedAdminList = (feed: Feeds, walletAddress: string, toRemove: boolean): Array<string> => {
  const existingAdmins = feed?.groupInformation?.groupMembers?.filter((admin) => admin.isAdmin == true);
  const groupAdminList = convertToWalletAddressList(existingAdmins);
  if (!toRemove) {
    return [...groupAdminList, walletAddress];
  } else {
    const newAdminList = groupAdminList.filter((wallet) => wallet !== walletAddress);
    return newAdminList;
  }
};
