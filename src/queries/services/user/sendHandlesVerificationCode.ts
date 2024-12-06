import axios from 'axios';
import { getCustomDeliveryURL } from 'queries/baseURL';

import { sendHandlesVerificationCodeModelCreator } from 'queries/models';

type sendHandlesVerificationCodeType = {
  caipAddress: string;
  value: string | { telegram_username: string } | { discord_username: string };
  verificationProof: string;
  social_platform: 'email' | 'discord' | 'telegram';
};

export const sendHandlesVerificationCode = async (payload: sendHandlesVerificationCodeType) => {
  const response = await axios({
    method: 'POST',
    url: `${getCustomDeliveryURL()}/apis/v1/users/verify/init/${payload?.caipAddress}/${payload.social_platform}`,
    data: {
      value: payload?.value,
      verificationProof: payload?.verificationProof,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return sendHandlesVerificationCodeModelCreator(response.data);
};
