import axios from 'axios';

import { sendEmailVerificationCodeModelCreator } from 'queries/models';

type sendEmailVerificationCodeType = {
  caipAddress: string;
  value: string;
  verificationProof: string;
};

export const sendEmailVerificationCode = async (payload: sendEmailVerificationCodeType) => {
  const response = await axios({
    method: 'POST',
    url: `http://localhost:7575/apis/v1/users/verify/init/${payload?.caipAddress}/email`,
    data: {
      value: payload?.value,
      verificationProof: payload?.verificationProof,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return sendEmailVerificationCodeModelCreator(response.data);
};
