import { ActivityConfig } from 'modules/rewards/Rewards.constants';
import { RewardsAcitivitesResponse } from 'queries/types';

export const getRewardsActivitiesModelCreator = (response: RewardsAcitivitesResponse): RewardsAcitivitesResponse => {
  response.activities = response.activities.map((activity) => {
    const config = ActivityConfig[activity.id];
    if (config) {
      activity.name = config.name;
      activity.JoinURL = config.JoinURL;
    }
    return activity;
  });

  return response;
};
