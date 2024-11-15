import axios from 'axios';

import { verifyHandlesVerificationCodeModelCreator } from 'queries/models';

type verifyHandlesVerificationCodeType = {
  caipAddress: string;
  value: string;
  verificationCode: string;
  social_platform: 'email' | 'discord' | 'telegram';
};

export const verifyHandlesVerificationCode = async (payload: verifyHandlesVerificationCodeType) => {
  const response = await axios({
    method: 'POST',
    url: `http://localhost:7575/apis/v1/users/verify/${payload?.caipAddress}/${payload?.social_platform}`,
    data: {
      value: payload?.value,
      verificationCode: payload?.verificationCode,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return verifyHandlesVerificationCodeModelCreator(response.data);
};
