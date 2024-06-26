import axios from 'axios';

import { getUserRewardsDetailModel } from '../../models';
import { UserRewardsDetailParams } from '../../types/rewards';
import { getRewardsBaseURL } from '../../baseURL';

export const getUserRewardsDetail = ({ caip10WalletAddress }: UserRewardsDetailParams) =>
  axios({
    method: 'GET',
    url: `${getRewardsBaseURL()}/users/wallet/${caip10WalletAddress}`,
  }).then((response) => getUserRewardsDetailModel(response.data));
