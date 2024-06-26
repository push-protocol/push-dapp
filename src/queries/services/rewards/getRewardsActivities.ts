import axios from 'axios';
import { getRewardsActivitiesModelCreator } from '../../models/rewards';
import { getRewardsBaseURL } from '../../baseURL';

export const getRewardsActivities = () =>
  axios({
    method: 'GET',

    url: `${`${getRewardsBaseURL()}`}/activities/all`,
  }).then((response) => getRewardsActivitiesModelCreator(response.data));
