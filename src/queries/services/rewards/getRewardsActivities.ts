import axios from 'axios';
import { getRewardsActivitiesModelCreator } from 'queries/models/rewards';
// import { appConfig } from 'config';

export const getRewardsActivities = () =>
  axios({
    method: 'GET',
    // url: `${appConfig.apiUrl}/activities/all`
    url: 'https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld/activities/all'
  }).then((response) => getRewardsActivitiesModelCreator(response.data));
