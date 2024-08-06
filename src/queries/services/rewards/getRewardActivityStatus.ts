import axios from 'axios';
import { getRewardsBaseURL } from 'queries/baseURL';
import { getRewardActivityStatusModel } from 'queries/models';
import { RewardActivityStatusProps } from 'queries/types';

export const getRewardActivityStatus = (payload: RewardActivityStatusProps) =>
  axios({
    method: 'POST',
    url: `${getRewardsBaseURL()}/users/${payload.userId}/recent-activities`,
    data: payload.activities,
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => getRewardActivityStatusModel(response.data));
