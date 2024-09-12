import { ChannelNotification, ChannelsNotificationsRepsonse } from 'queries/types';

//any remodelling needed in the response can be done here
export const getChannelNotificationsModelCreator = (response: ChannelsNotificationsRepsonse): ChannelNotification[] =>
  response?.notifications;
