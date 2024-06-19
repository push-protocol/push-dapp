type User = {
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
type ModelledUser = {
  userId: string;
  userWallet: string;
  totalPoints: number;
};

export type LeaderboardResponse = {
  users: Array<User>;
};

export type LeaderboardModelledResponse = Array<ModelledUser>;
