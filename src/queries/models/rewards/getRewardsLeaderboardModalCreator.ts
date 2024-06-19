import { LeaderboardModelledResponse, LeaderboardResponse } from '../../types/rewards';

export const getRewardsLeaderboardModalCreator = (response: LeaderboardResponse): LeaderboardModelledResponse => {
  return response.users.map((user) => ({
    userId: user.userId,
    userWallet: user.userWallet,
    totalPoints: user.activityPoints + user.referralPoints, // Calculating total points
  }));
};
