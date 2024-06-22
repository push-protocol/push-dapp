import axios from 'axios';
import { postCreateActivityModelCreator } from 'queries/models/rewards';
import { CreateActivityPayload } from 'queries/types';
// import { appConfig } from 'config';

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
