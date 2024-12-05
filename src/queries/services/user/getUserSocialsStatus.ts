import axios from 'axios';
import { getCustomDeliveryURL } from 'queries/baseURL';
import { getSocialsStatusModelCreator } from 'queries/models';

type SocialStatusType = {
  channelAddress: string;
  verificationProof?: string;
};

export const getUserSocialsStatus = async (payload: SocialStatusType) => {
  const response = await axios({
    method: 'POST',
    url: `${getCustomDeliveryURL()}/apis/v1/users/${payload?.channelAddress}`,
    data: {
      verificationProof: payload?.verificationProof,
    },
  });
  return getSocialsStatusModelCreator(response.data);
};
