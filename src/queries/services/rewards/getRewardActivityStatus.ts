import axios from 'axios';
import { getRewardsBaseURL } from 'queries/baseURL';
import { getRewardActivityStatusModel } from 'queries/models';
import { RewardActivityStatusProps } from 'queries/types';

export const getRewardActivityStatus = (payload: RewardActivityStatusProps) => {
  // Join the activities array into a string
  const activitiesString = payload.activities.join(',');

  return axios({
    method: 'GET',
    url: `${getRewardsBaseURL()}/users/${payload.userId}/recent-activities/v2?types=${activitiesString}`,
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => getRewardActivityStatusModel(response.data));
};
