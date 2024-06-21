import axios from 'axios';
import { getUsersAllActivitiesModelCreator } from 'queries/models/rewards';
// import { appConfig } from 'config';

export const getUsersAllActivities = (userId: string) =>
  axios({
    method: 'GET',
    // url: `${appConfig.apiUrl}/activities/all`
    url: `https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld/users/${userId}/activities/`
  }).then((response) => getUsersAllActivitiesModelCreator(response.data));
