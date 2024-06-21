import axios from 'axios';
import { generateUserIdModelCreator } from 'queries/models/rewards';
// import { appConfig } from 'config';

type GenerateUserIdPayload = {
  pgpPublicKey: string;
  userWallet: string;
  verificationProof: string;
};

export const generateUserId = (payload: GenerateUserIdPayload) =>
  axios({
    method: 'POST',
    // url: `${appConfig.apiUrl}/activities/all`
    url: `https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld/users/`,
    data: {
      pgpPublicKey: payload.pgpPublicKey,
      userWallet: payload.userWallet,
      verificationProof: payload.verificationProof
    },
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => generateUserIdModelCreator(response.data));
