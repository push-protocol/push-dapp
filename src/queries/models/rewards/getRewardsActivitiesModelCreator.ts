import { RewardsAcitivitesResponse } from 'queries/types';

export const getRewardsActivitiesModelCreator = (response: RewardsAcitivitesResponse): RewardsAcitivitesResponse => {
  return {
    activities: response.activities,
    page: response.page,
    size: response.size,
    total: response.total
  };
};
