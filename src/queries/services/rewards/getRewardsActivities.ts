import axios from 'axios';
import { getRewardsActivitiesModelCreator } from '../../models/rewards';
import { getRewardsBaseURL } from '../../baseURL';
import { ActivitiesParams } from 'queries/types';

export const getRewardsActivities = ({ pageSize, pageNumber }: ActivitiesParams) =>
  axios({
    method: 'GET',
    url: `${`${getRewardsBaseURL()}`}/activities/all`,
    params: {
      pageSize: pageSize || 1,
      pageNumber: pageNumber || 1
    }
  }).then((response) => getRewardsActivitiesModelCreator(response.data));
