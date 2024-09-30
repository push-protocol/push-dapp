import axios from 'axios';

import { getRewardsBaseURL } from '../../baseURL';
import { getUniV2StakeEpochModel } from 'queries/models';

export const getUniV2StakeEpoch = () =>
  axios({
    method: 'GET',
    url: `${getRewardsBaseURL()}/staking/univ2/current-epoch-blocks`,
  }).then((response) => getUniV2StakeEpochModel(response.data));
