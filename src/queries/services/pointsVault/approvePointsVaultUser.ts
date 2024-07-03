import axios from 'axios';
import { getRewardsBaseURL } from 'queries/baseURL';
import { ApprovePointsVaultUserPayload } from 'queries/types';

export const approvePointsVaultUser = ({ activityId, token }: ApprovePointsVaultUserPayload) =>
  axios({
    method: 'POST',
    url: `${getRewardsBaseURL()}/activities/approved`,
    data: {
      activities: [{ activityId }],
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  }).then((response) => response.data);
