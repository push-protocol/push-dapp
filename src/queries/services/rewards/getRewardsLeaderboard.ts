import axios from 'axios';

import { getRewardsLeaderboardModalCreator } from '../../models';
import { GetRewardsLeaderboardParams } from '../../types';

/* this url will change as per the env once the apis are ready */
const temporaryApi = 'https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld/users/leaderboard';

export const getRewardsLeaderboard = async ({ pageParam = 1, pageSize = 10 }: GetRewardsLeaderboardParams) =>
  axios({
    method: 'GET',
    url: temporaryApi,
    params: { pageNumber: pageParam, pageSize },
  }).then((response) => getRewardsLeaderboardModalCreator(response.data));
