import axios from 'axios';

import { getRewardsLeaderboardModalCreator } from '../../models';
import { LeaderboardParams } from '../../types';
import { getRewardsBaseURL } from '../../baseURL';

export const getRewardsLeaderboard = async ({ order, pageSize, pageNumber }: LeaderboardParams) =>
  axios({
    method: 'GET',
    url: `${getRewardsBaseURL()}/users/leaderboard`,
    params: {
      order: order || 'desc',
      pageSize: pageSize || 20,
      pageNumber: pageNumber || 1,
    },
  }).then((response) => getRewardsLeaderboardModalCreator(response.data));
