import { LeaderboardModelledResponse, LeaderboardResponse } from '../../types';

export const getRewardsLeaderboardModalCreator = (response: LeaderboardResponse): LeaderboardModelledResponse => {
  return {
    users: response.users.map((user) => ({
      userId: user.userId,
      userWallet: user.userWallet,
      totalPoints: user.totalPoints,
      rank: user.rank,
    })),
    page: response.page,
    pageSize: response.pageSize,
    total: response.total,
  };
};
