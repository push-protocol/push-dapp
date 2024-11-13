import axios from 'axios';
import { getSocialsStatusModelCreator } from 'queries/models';

type SocialStatusType = {
  channelAddress: string;
};

export const getUserSocialsStatus = (payload: SocialStatusType) => {
  return axios({
    method: 'GET',
    url: `http://localhost:7575/apis/v1/users/${payload?.channelAddress}`,
  }).then((response) => getSocialsStatusModelCreator(response.data));
};
