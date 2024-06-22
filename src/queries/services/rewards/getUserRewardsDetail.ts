import axios from 'axios';

import { getUserRewardsDetailModel } from '../../models';
import { UserRewardsDetailParams } from '../../types/rewards';

/* this url will change as per the env once the apis are ready */
const apiUrl = 'https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld/users/wallet/';

export const getUserRewardsDetail = ({ walletAddress }: UserRewardsDetailParams) =>
  axios({
    method: 'GET',
    url: `${apiUrl}${walletAddress}`,
  }).then((response) => getUserRewardsDetailModel(response.data));
