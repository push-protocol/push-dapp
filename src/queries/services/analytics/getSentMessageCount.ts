import axios from 'axios';
import { analyticsBaseURL } from 'queries/baseURL';

export const getSentMessageCount = () =>
  axios({
    method: 'GET',
    url: `${analyticsBaseURL}/analytics/chat/chats`,
  }).then((response) => response.data.totalMessages as number);
