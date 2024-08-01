import axios from 'axios';
import { analyticsBaseURL } from 'queries/baseURL';
import { getSubscriberCountModelCreator } from 'queries/models/analytics';

export const getSubscriberCount = () => {
  const start = new Date('2022-01-01');
  const end = new Date();
  return axios({
    method: 'GET',
    url: `${analyticsBaseURL}/analytics/subscriber`,
    params: {
      startDate: start,
      endDate: end,
      channel: 'All',
      source: 'All',
    },
  }).then((response) => getSubscriberCountModelCreator(response.data, { start, end }));
};
