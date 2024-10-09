import axios from 'axios';
import { getRewardsActivitiesModelCreator } from '../../models/rewards';
import { getRewardsBaseURL } from '../../baseURL';

const pageSize = 100;

export const getRewardsActivities = () =>
  axios({
    method: 'GET',
    url: `${`${getRewardsBaseURL()}`}/activities/all`,
    params: {
      pageSize: pageSize,
    },
  }).then((response) => getRewardsActivitiesModelCreator(response.data));
