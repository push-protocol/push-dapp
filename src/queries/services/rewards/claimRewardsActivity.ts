import axios from 'axios';
import { getRewardsBaseURL } from 'queries/baseURL';
import { claimRewardsActivityModelCreator } from 'queries/models/rewards';
import { ClaimRewardsActivityProps } from 'queries/types';

export const claimRewardsActivity = (payload: ClaimRewardsActivityProps) =>
  axios({
    method: 'POST',
    url: `${getRewardsBaseURL()}/users/${payload.userId}/activity/${payload.activityTypeId}`,
    data: {
      data: payload.data,
      verificationProof: payload.verificationProof,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => claimRewardsActivityModelCreator(response.data));
