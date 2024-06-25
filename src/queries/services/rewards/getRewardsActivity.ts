import axios from 'axios';
import { getRewardsActivityModelCreator } from 'queries/models';
// import { appConfig } from 'config';

export const getRewardsActivity = (userId: string, activityId: string) =>
  axios({
    method: 'GET',
    // url: `${appConfig.apiUrl}/activities/all`
    url: `https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld/users/${userId}/activity/${activityId}`
  }).then((response) => getRewardsActivityModelCreator(response.data));
