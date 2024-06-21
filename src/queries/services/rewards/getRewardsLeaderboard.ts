import axios from 'axios';

import { getRewardsLeaderboardModalCreator } from '../../models';
import { LeaderboardParams } from 'queries/types';

/* this url will change as per the env once the apis are ready */
const temporaryApi = 'https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld/users/leaderboard';

export const getRewardsLeaderboard = async ({ order, pageSize, pageNumber }: LeaderboardParams) =>
  axios({
    method: 'GET',
    url: temporaryApi,
    params: {
      order: order || 'desc',
      pageSize: pageSize || 20,
      pageNumber: pageNumber || 1,
    },
  }).then((response) => getRewardsLeaderboardModalCreator(response.data));
