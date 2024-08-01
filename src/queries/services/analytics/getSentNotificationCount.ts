import axios from 'axios';
import { analyticsBaseURL } from 'queries/baseURL';
import { getNotificationCountModelCreator } from 'queries/models/analytics';

export const getSentNotificationCount = () =>
  axios({
    method: 'GET',
    url: `${analyticsBaseURL}/analytics/notification`,
    params: {
      startDate: new Date('2022-01-01'),
      endDate: new Date(),
      channel: 'All',
      source: 'All',
    },
  }).then((response) => getNotificationCountModelCreator(response.data));
