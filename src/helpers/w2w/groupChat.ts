import { Feeds } from '../../types/chat';

export const checkIfGroup = (feed: Feeds): boolean => {
  if (feed?.hasOwnProperty('groupInformation') && feed?.groupInformation) return true;
  return false;
};

export const getProfilePicture = (feed: Feeds): string => {
  if (checkIfGroup(feed))
    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA4ElEQVR4AcXBsW3EMAxA0R9CG7jVDgQEeAEv4/pWSAZw7WW0gAEB3EGtZ7i0hAsGhxR87+v7Z30TWO8Dr00lMqrhXcuLiJBMSCYkKzzs1vmPNhWvzY536oYnJBOSCckKfzh1w9utEzl1w9utExGSCcmEZIWHUQ1vt84ndut4oxoRIZmQTEhWdut8YlQj0qbital4bXY8IZmQTEhWeBjViLSpREY1Im0qnpBMSCYkKzy0qXijGt6pG5H1PvDaVCJCMiGZkKycuuGt94HXpuJdC6E2FW9Uw7uWF56QTEgmJPsFcBk6PuFgEa0AAAAASUVORK5CYII=';
  else return feed?.profilePicture!;
};

export const getName = (feed: Feeds): string => {
  if (checkIfGroup(feed)) return feed?.groupInformation?.groupName!;
  else return feed?.wallets.split(',')[0].toString();
};

export const getChatsnapMessage = (feed: Feeds) => {
  if (checkIfGroup(feed) && !feed.msg.messageContent) {
    return {
      type: 'Text',
      message: 'Group successfully created!',
    };
  }
  return {
    type: feed.msg.messageType,
    message: feed.msg.messageContent,
  };
};
