import { appConfig } from 'config';
import { walletToCAIP10 } from '.';
import { ConnectedUser, Feeds, Member, User } from '../../types/chat';
import * as PushAPI from "@pushprotocol/restapi";
import { GroupDTO } from '@pushprotocol/restapi';
import { findObject } from 'helpers/UtilityHelper';
import * as w2wChatHelper from 'helpers/w2w';


type UpdateGroupType = {
  currentChat:Feeds,
  connectedUser:ConnectedUser,
  adminList:Array<string>,
  memeberList:Array<string>,
}

export const checkIfGroup = (feed: Feeds): boolean => {
  if (feed?.hasOwnProperty('groupInformation') && feed?.groupInformation) return true;
  return false;
};

export const getGroupImage = (feed: Feeds): string => {
  if (checkIfGroup(feed)) return feed?.groupInformation?.groupImage!;
  else return feed?.profilePicture!;
};

export const getMemberDetails = (feed:Feeds,walletAddress:string) => {

    const senderProfile = feed?.groupInformation?.members?.filter((chat) => chat?.wallet?.toLowerCase() == walletAddress?.toLowerCase())!;


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

export const convertToWalletAddressList = (memberList:Member[]) => {
  return memberList?.map((member) => member.wallet);
};

export const getUpdatedAdminList = (groupInformation: GroupDTO, walletAddress: string, toRemove: boolean): Array<string> => {
  const groupAdminList = getAdminList(groupInformation);
  if (!toRemove) {
    return [...groupAdminList, walletAddress];
  } else {
    const newAdminList = groupAdminList.filter((wallet) => wallet !== walletAddress);
    return newAdminList;
  }
};

export const getAdminList = (groupInformation: GroupDTO): Array<string> => {
  const adminsFromMembers = convertToWalletAddressList(groupInformation?.members.filter((admin) => admin.isAdmin == true));
    const adminsFromPendingMembers = convertToWalletAddressList(groupInformation?.pendingMembers.filter((admin) => admin.isAdmin == true));
    const adminList = [...adminsFromMembers,...adminsFromPendingMembers];
    return adminList
};

export const getUpdatedMemberList = (feed:Feeds,walletAddress:string): Array<string> =>{
  const members = feed?.groupInformation?.members?.filter((i) => i.wallet?.toLowerCase() !== walletAddress?.toLowerCase());
  return convertToWalletAddressList([...members,...feed?.groupInformation?.pendingMembers]);
}



export const updateGroup = async(options:UpdateGroupType) => {
  const { currentChat, connectedUser,adminList,memeberList } = options;
  const updateResponse = await PushAPI.chat.updateGroup({
    chatId: currentChat?.groupInformation?.chatId,
    groupName: currentChat?.groupInformation?.groupName,
    groupDescription: currentChat?.groupInformation?.groupDescription,
    groupImage: currentChat?.groupInformation?.groupImage,
    members: memeberList,
    admins: adminList,
    account: connectedUser?.wallets,
    pgpPrivateKey: connectedUser?.privateKey,
    env: appConfig.appEnv,
  });
  let updatedCurrentChat = null;
  if(typeof updateResponse !== 'string')
  {
    updatedCurrentChat = currentChat;
    updatedCurrentChat.groupInformation = updateResponse;
  }
  return {updateResponse,updatedCurrentChat};
}


export const rearrangeMembers = (currentChat,connectedUser) => {
  currentChat?.groupInformation?.members.sort(x => (x?.isAdmin) ? -1 : 1);
  currentChat?.groupInformation?.members.some(
    (member, idx) =>
      member?.wallet?.toLowerCase() == currentChat?.groupInformation?.groupCreator?.toLowerCase() &&
      currentChat?.groupInformation?.members.unshift(
        currentChat?.groupInformation?.members.splice(idx, 1)[0]
      )
  );
  currentChat?.groupInformation?.members.some(
    (member, idx) =>
      member?.wallet?.toLowerCase() == connectedUser.wallets?.toLowerCase() &&
      currentChat?.groupInformation?.members.unshift(
        currentChat?.groupInformation?.members.splice(idx, 1)[0]
      )
  );
  return currentChat;
}

export const MemberAlreadyPresent = (member:any,groupMembers:any)=>{
  const memberCheck = groupMembers?.find((x)=>x.wallet?.toLowerCase() == member.wallets?.toLowerCase());
  if(memberCheck){
    return true;
  }
  return false;
}

export const addWalletValidation = (member:User,memberList:any,groupMembers:any,account) : string  =>{
  const checkIfMemberisAlreadyPresent = MemberAlreadyPresent(member, groupMembers);

  let errorMessage = '';

    if (checkIfMemberisAlreadyPresent) {
      errorMessage = "This Member is Already present in the group"
    }

    if (memberList?.length + groupMembers?.length >= 9) {
      errorMessage = 'No More Addresses can be added'
    }

    if (memberList?.length >= 9) {
      errorMessage = 'No More Addresses can be added'
    }

    if (findObject(member, memberList, 'wallets')) {
      errorMessage = 'Address is already added'
    }

    if (member?.wallets?.toLowerCase() === w2wChatHelper.walletToCAIP10({ account })?.toLowerCase()) {
      errorMessage = 'Group Creator cannot be added as Member'
    }

    return errorMessage;
}