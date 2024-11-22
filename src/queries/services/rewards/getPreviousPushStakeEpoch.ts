import axios from 'axios';

import { getRewardsBaseURL } from '../../baseURL';
import { getPreviousPushStakeEpochModel } from 'queries/models';

export const getPreviousPushStakeEpoch = () =>
  axios({
    method: 'GET',
    url: `${getRewardsBaseURL()}/staking/push/previous-epoch-blocks`,
  }).then((response) => getPreviousPushStakeEpochModel(response.data));
