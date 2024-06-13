import { UserSetting } from '@pushprotocol/restapi';

export type UserSubscriptionData = {
  channel: string;
  user_settings: UserSetting[];
};

export type UserSubscriptionsResponse = Array<UserSubscriptionData>;
