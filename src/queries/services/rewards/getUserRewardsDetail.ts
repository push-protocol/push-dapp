import axios from 'axios';

import { getUserRewardsDetailModel } from '../../models';
import { UserRewardsDetailParams } from '../../types/rewards';

/* this url will change as per the env once the apis are ready */
const apiUrl = 'https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld/users/wallet/';

export const getUserRewardsDetail = ({ caip10WalletAddress }: UserRewardsDetailParams) =>
  axios({
    method: 'GET',
    url: `${apiUrl}${caip10WalletAddress}`,
  }).then((response) => getUserRewardsDetailModel(response.data));
