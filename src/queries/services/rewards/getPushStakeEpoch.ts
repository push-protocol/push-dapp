import axios from 'axios';

import { getRewardsBaseURL } from '../../baseURL';
import { getPushStakeEpochModel } from 'queries/models';

export const getPushStakeEpoch = () =>
  axios({
    method: 'GET',
    url: `${getRewardsBaseURL()}/staking/push/current-epoch-blocks`,
  }).then((response) => getPushStakeEpochModel(response.data));
