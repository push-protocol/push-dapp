import axios from 'axios';
import { getRewardsBaseURL } from 'queries/baseURL';
import { RejectPointsVaultUserPayload } from 'queries/types';

export const rejectPointsVaultUser = ({ activityId, token }: RejectPointsVaultUserPayload) =>
  axios({
    method: 'POST',
    url: `${getRewardsBaseURL()}/activities/rejected`,
    data: { activities: [{ activityId }] },
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  }).then((response) => response.data);
