import { Env, SignerType } from '@pushprotocol/restapi';

export type UserSubscriptionData = {
  channel: string;
  user_settings: string;
};

export type UserSubscriptionsResponse = Array<UserSubscriptionData>;

export type SubscribeChannelParams = {
  signer: SignerType;
  channelAddress: string;
  userAddress: string;
  settings?: string | null;
  env: Env;
};

export type SubsribeChannelResponse = {
  status: string;
  message: string;
};

export type UnsubscribeChannelParams = {
  signer: SignerType;
  channelAddress: string;
  userAddress: string;
  settings?: string | null;
  env: Env;
};

export type UnsubscribeChannelResponse = {
  status: string;
  message: string;
};

export type UserProfileDetailsResponse = {
  blockedUsersList: Array<string>;
  desc: string | null;
  name: string | null;
  picture: string;
  profileVerificationProof: string | null;
};
