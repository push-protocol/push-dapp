import axios from 'axios';

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
    url: 'https://backend-kovan.epns.io/apis/mailing/sendMail',
    data: payload,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return sendSupportMessageModelCreator(response.data);
};
