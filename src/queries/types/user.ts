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
  decryptedPGPKeys?: string | null;
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
  decryptedPGPKeys?: string | null;
};

export type UnsubscribeChannelResponse = {
  status: number;
  message: string;
};

export type UserProfileInfoResponse = {
  name: string | null;
  desc: string | null;
  picture: string | null;
  profileVerificationProof?: string | null;
};

export type UpdateProfileInfoResponse = {
  name: string | null;
  desc: string | null;
  picture: string | null;
  profileVerificationProof?: string | null;
  blockedUserList?: [];
};

export type SendHandlesVerificationResponse = {
  email: string | null;
  success: boolean;
  VerificationCode?: string | null;
};

export type VerifyHandlesVerificationResponse = {
  message: string;
  success: boolean;
};

export type UserSocialStatusResponse = {
  email: string | null;
  telegram_username: string | null;
  discord_username: string | null;
};

export type UserProfileInfoResponse = {
  name: string | null;
  desc: string | null;
  picture: string | null;
  profileVerificationProof?: string | null;
};

export type UpdateProfileInfoResponse = {
  name: string | null;
  desc: string | null;
  picture: string | null;
  profileVerificationProof?: string | null;
  blockedUserList?: [];
};

export type SendHandlesVerificationResponse = {
  email: string | null;
  success: boolean;
  VerificationCode?: string | null;
};

export type VerifyHandlesVerificationResponse = {
  message: string;
  success: boolean;
};

export type UserSocialStatusResponse = {
  email: string | null;
  telegram_username: string | null;
  discord_username: string | null;
 };

export type UserProfileDetailsResponse = {
  blockedUsersList: Array<string>;
  desc: string | null;
  name: string | null;
  picture: string;
  profileVerificationProof: string | null;
};

