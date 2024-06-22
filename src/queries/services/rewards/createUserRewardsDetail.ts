import axios from 'axios';

import { appConfig } from '../../../config/index';
import { createUserRewardsDetailModel } from '../../models';
import { createUserRewardsDetailsProps } from '../../types/rewards';

/* this url will change as per the env once the apis are ready */
const apiUrl = 'https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld/users/';

export const createUserRewardsDetail = (payload: any) =>
  axios({
    method: 'POST',
    url: `${apiUrl}`,
    data: {
      userWallet: payload.userWallet,
      pgpPublicKey: payload.pgpPublicKey,
      verificationProof: payload.verificationProof,
      refPrimary: payload.refPrimary,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => createUserRewardsDetailModel(response.data));
