import axios from 'axios';

import { appConfig } from '../../../config/index';
import { getUserRewardsDetailModel } from '../../models';
import { UserRewardsDetailParams } from '../../types/rewards';

export const getUserRewardsDetail = ({ walletAddress }: UserRewardsDetailParams) =>
  axios({
    method: 'GET',
    url: `https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld/users/wallet/${walletAddress}`,
  }).then((response) => getUserRewardsDetailModel(response.data));
