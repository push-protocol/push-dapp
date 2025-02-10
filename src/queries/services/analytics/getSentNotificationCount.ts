import axios from 'axios';
import { analyticsBaseURLV2 } from 'queries/baseURL';
import { getNotificationCountModelCreator } from 'queries/models/analytics';

export const getSentNotificationCount = () =>
  axios({
    method: 'GET',
    url: `${analyticsBaseURLV2}/analytics/notification`,
    params: {
      startDate: new Date('2022-01-01'),
      endDate: new Date(),
      channel: 'All',
      source: 'All',
    },
  }).then((response) => getNotificationCountModelCreator(response.data));
