import axios from 'axios';
import { getUsersSingleActivityModelCreator } from 'queries/models/rewards/getUsersSingleActivityModelCreator';
// import { appConfig } from 'config';

export const getUsersSingleActivity = (userId: string, activityId: string) =>
  axios({
    method: 'GET',
    // url: `${appConfig.apiUrl}/activities/all`
    url: `https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld/users/${userId}/activity/${activityId}`
  }).then((response) => getUsersSingleActivityModelCreator(response.data));
