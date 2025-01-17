import axios from 'axios';
import { analyticsBaseURL } from 'queries/baseURL';

import { sendSupportMessageModelCreator } from 'queries/models';

type sendSupportMessageType = {
  from: string;
  name: string;
  topic: string;
  sub: string;
  msg: string;
};

export const sendSupportMessage = async (payload: sendSupportMessageType) => {
  const response = await axios({
    method: 'POST',
    url: `${analyticsBaseURL}/mailing/send`,
    data: payload,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return sendSupportMessageModelCreator(response.data);
};
