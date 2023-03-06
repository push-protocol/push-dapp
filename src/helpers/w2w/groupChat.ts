import { walletToCAIP10 } from '.';
import { Feeds } from '../../types/chat';

export const checkIfGroup = (feed: Feeds): boolean => {
  if (feed?.hasOwnProperty('groupInformation') && feed?.groupInformation) return true;
  return false;
};

export const getGroupImage = (feed: Feeds): string => {
  if (checkIfGroup(feed)) return feed?.groupInformation?.groupImage!;
  else return feed?.profilePicture!;
};

export const getMemberDetails = (feed:Feeds,msg:any) => {

    const senderProfile = feed?.groupInformation?.members?.filter((chat) => chat?.wallet == msg?.fromCAIP10)!;


    return senderProfile? senderProfile[0]: null;

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

  //Group is there and feeds are also there in the group but it is an Intent
  if (checkIfGroup(feed) && isIntent) {
    return {
      type: 'Text',
      message: 'Group Invite Received',
    };
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
