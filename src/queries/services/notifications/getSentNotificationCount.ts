import axios from 'axios';
import { appConfig } from 'config';

export const getSentNotificationCount = () =>
  axios({
    method: 'GET',
    url: `${appConfig.apiUrl}/v1/analytics/chat/chats`,
  }).then((response) => response.data.totalMessages as number);
