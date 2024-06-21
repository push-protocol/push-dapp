import axios from 'axios';
import { postCreateActivityModelCreator } from 'queries/models/rewards';
// import { appConfig } from 'config';

type CreateActivityData = {
  discord: string;
  discord_token: string;
};

export type CreateActivityPayload = {
  userId: string;
  activityTypeId: string;
  data: CreateActivityData;
  verificationProof: string;
  pgpPublicKey: string;
};

export const createActivity = (payload: CreateActivityPayload) =>
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
  }).then((response) => postCreateActivityModelCreator(response.data));
