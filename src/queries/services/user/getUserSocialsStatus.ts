import axios from 'axios';
import { getSocialsStatusModelCreator } from 'queries/models';

type SocialStatusType = {
  channelAddress: string;
  verificationProof?: string;
};

export const getUserSocialsStatus = (payload: SocialStatusType) => {
  return axios({
    method: 'POST',
    url: `http://localhost:7575/apis/v1/users/${payload?.channelAddress}`,
    data: {
      verificationProof: payload?.verificationProof,
    },
  }).then((response) => getSocialsStatusModelCreator(response.data));
};
