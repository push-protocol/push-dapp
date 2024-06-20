type LeaderBoardUser = {
  userId: string;
  userWallet: string;
  refPrimary: string | null;
  refSecondary: string | null;
  verificationProof: string;
  activityPoints: number;
  referralPoints: number;
  multiplier: number;
  lastUpdated: string;
  pgpPublicKey: string;
};

type ModelledLeaderBoardUser = {
  userId: string;
  userWallet: string;
  totalPoints: number;
};

export type LeaderboardResponse = {
  users: Array<LeaderBoardUser>;
};

export type LeaderboardModelledResponse = Array<ModelledLeaderBoardUser>;
