import axios from 'axios';
import { getRewardsBaseURL } from 'queries/baseURL';
import { getRewardsActivityModelCreator } from 'queries/models';

export const getRewardsActivity = (userId: string, activityTypes: string[]) => {
  // Join the activities array into a string
  const activitiesString = activityTypes.join(',');

  return axios({
    method: 'GET',

    url: `${getRewardsBaseURL()}/users/${userId}/activities/bytype?types=${activitiesString}`,
  }).then((response) => getRewardsActivityModelCreator(response.data));
};
