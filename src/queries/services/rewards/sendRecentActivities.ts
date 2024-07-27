import axios from 'axios';
import { getRewardsBaseURL } from 'queries/baseURL';
import { sendRecentActivitiesModel } from 'queries/models';
import { SendRecentActivityProps } from 'queries/types';

export const sendRecentActivities = (payload: SendRecentActivityProps) =>
  axios({
    method: 'POST',
    url: `${getRewardsBaseURL()}/users/${payload.userId}/recent-activities`,
    data: payload.activities,
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => sendRecentActivitiesModel(response.data));
