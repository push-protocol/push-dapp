import axios from 'axios';

import { verifyEmailVerificationCodeModelCreator } from 'queries/models';

type verifyEmailVerificationCodeType = {
  caipAddress: string;
  value: string;
  verificationCode: string;
};

export const verifyEmailVerificationCode = async (payload: verifyEmailVerificationCodeType) => {
  const response = await axios({
    method: 'POST',
    url: `http://localhost:7575/apis/v1/users/verify/${payload?.caipAddress}/email`,
    data: {
      value: payload?.value,
      verificationCode: payload?.verificationCode,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return verifyEmailVerificationCodeModelCreator(response.data);
};
