import axios from 'axios';
import { getRewardsBaseURL } from 'queries/baseURL';
import { getRewardsActivityModelCreator } from 'queries/models';

export const getRewardsActivity = (userId: string, activityId: string) =>
  axios({
    method: 'GET',

    url: `${getRewardsBaseURL()}/users/${userId}/activity/${activityId}`,
  }).then((response) => getRewardsActivityModelCreator(response.data));
