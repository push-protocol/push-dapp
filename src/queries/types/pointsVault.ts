export type PointsVaultStatus = 'COMPLETED' | 'PENDING' | 'REJECTED';

export type PointsVaultGetUsersPayload = {
  status: PointsVaultStatus;
  page?: number;
  pageSize?: number;
  token?: string;
};

export type PointsVaultActivity = {
  userId: string;
  activityId: string;
  data: {
    twitter: string;
  };
  activityTypeId: string;
  status: PointsVaultStatus;
  points: number;
  multiplier: number;
  verificationProof: string;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
  userWallet: string;
};

export type PointsVaultActivitiesResponse = Array<PointsVaultActivity>;

export type RejectPointsVaultUserPayload = {
  activityId: string;
  currentStatus: PointsVaultStatus;
  token?: string;
};

export type ApprovePointsVaultUserPayload = {
  activityId: string;
  currentStatus: PointsVaultStatus;
  token?: string;
};

export type UserTwitterDetailsPayload = {
  twitterHandle: string;
  token?: string;
};

export type UserTwitterDetailsResponse = {
  data: {
    public_metrics: {
      followers_count: number;
      following_count: number;
      tweet_count: number;
      listed_count: number;
      like_count: number;
    };
    username: string;
    id: string;
    name: string;
  };
};

export type PointsVaultSearchPayload = {
  query: string;
  token?: string;
  page?: number;
  pageSize?: number;
};
