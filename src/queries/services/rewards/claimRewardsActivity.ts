import axios from 'axios';
import { claimRewardsActivityModelCreator } from 'queries/models/rewards';
import { ClaimRewardsActivityProps } from 'queries/types';
// import { appConfig } from 'config';

export const claimRewardsActivity = (payload: ClaimRewardsActivityProps) =>
  axios({
    method: 'POST',
    // url: `${appConfig.apiUrl}/activities/all`
    url: `https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld/users/${payload.userId}/activity/${payload.activityTypeId}`,
    data: {
      data: payload.data,
      verificationProof: payload.verificationProof
    },
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => claimRewardsActivityModelCreator(response.data));
