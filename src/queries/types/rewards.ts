export type RewardsAcitivitesResponse = {
  activities: Activity[];
  total: number;
  page: number;
  size: number;
};

//TODO: Remove the test expiry type
export type ActvityType =
  | 'follow_push_on_discord'
  | 'follow_push_on_twitter'
  | 'test_expiry_type'
  | 'create_gated_group_push_chat'
  | 'subscribe_5_channels_push'
  | 'subscribe_20_channels_push'
  | 'setup_push_user_profile'
  | 'active_push_chat_user'
  | 'hold_push_alpha_access_nft'
  | 'hold_push_rockstar_nft'
  | 'create_channel_push'
  | 'reach_100_subscribers'
  | 'reach_500_subscribers'
  | 'reach_1000_subscribers'
  | 'reach_5000_subscribers'
  | 'reach_10000_subscribers'
  | 'reach_50000_subscribers'
  | 'reach_100000_subscribers';

export type Activity = {
  id: string;
  activityType: ActvityType;
  activityTitle: string;
  activityDesc: string;
  points: number;
  multiplier: number;
  expiryType: number;
  name?: string;
  JoinURL: string;
  index: number;
  status: 'ENABLED' | 'DISABLED';
  tags: [];
};

export type UsersAllActivitiesResponse = {
  activities: UsersActivity[];
  total: number;
  page: number;
  size: number;
};

export type UsersActivity = {
  activityId: string;
  userId: string;
  activityTypeId: string;
  data: { twitter?: string; discord?: string };
  status: 'COMPLETED' | 'PENDING';
  points: number;
  multiplier: number;
  verificationProof: string;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
};

type Prop = {
  [key: string]: string;
};

export type ClaimRewardsActivityProps = {
  userId: string;
  activityTypeId: string;
  data: Prop;
  verificationProof: string;
  pgpPublicKey: string;
};

export type SendRecentActivityProps = {
  userId: string;
  activities: any;
};

export type PointsVaultUserLoginProps = {
  username: string;
  password: string;
};
export type PointsVaultUserLoginPayload = {
  token: string;
};

export type ClaimActivitesResponse = {
  status: 'COMPLETED' | 'PENDING';
};

export type DiscordDetails = {
  id: string;
  username: string;
  avatar: null | string;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: null | string;
  accent_color: null | string;
  global_name: string;
  avatar_decoration_data: null | object;
  banner_color: null | string;
  clan: null | object;
  mfa_enabled: boolean;
  locale: string;
  premium_type: number;
};

export type UserRewardsDetailParams = {
  caip10WalletAddress: string;
};

export type UserRewardsDetailResponse = {
  userId: string;
  userWallet: string;
  refPrimary: string | null;
  refSecondary: string | null;
  verificationProof: string;
  activityPoints: number;
  referralPoints: number;
  totalPoints: number;
  multiplier: number;
  rank: number;
  lastUpdated: string;
  pgpPublicKey: string;
  usersInvited: number;
};

export type createUserRewardsDetailsProps = {
  userWallet: string;
  pgpPublicKey: string;
  verificationProof: string;
  refPrimary?: string;
};

export type createUserRewardsDetailsResponse = {};

type LeaderBoardUser = {
  userId: string;
  userWallet: string;
  refPrimary: string | null;
  refSecondary: string | null;
  verificationProof: string;
  activityPoints: number;
  referralPoints: number;
  totalPoints: number;
  multiplier: number;
  lastUpdated: string;
  pgpPublicKey: string;
  rank: number;
};

export type ModelledLeaderBoardUser = {
  userId: string;
  userWallet: string;
  totalPoints: number;
  rank: number;
};

export type LeaderboardResponse = {
  users: Array<LeaderBoardUser>;
  page: number;
  pageSize: number;
  total: number;
};

export type LeaderboardModelledResponse = {
  users: Array<ModelledLeaderBoardUser>;
  page: number;
  pageSize: number;
  total: number;
};

export type LeaderboardParams = {
  order?: string;
  pageSize?: number;
  pageNumber?: number;
};

export type ActivitiesParams = {
  pageSize?: number;
  pageNumber?: number;
};
