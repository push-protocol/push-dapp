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
