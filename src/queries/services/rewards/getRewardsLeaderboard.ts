import axios from 'axios';

import { getRewardsLeaderboardModalCreator } from '../../models';

const temporaryApi = 'https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld/users/leaderboard';

export const getRewardsLeaderboard = () =>
  axios({
    method: 'GET',
    url: temporaryApi,
  }).then((response) => getRewardsLeaderboardModalCreator(response.data));
