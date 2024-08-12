import { ActvityType, RewardsStakeParams } from 'queries';

export const sortByIndexNumber = (a: any, b: any) => {
  const numA = parseInt(a.index?.split('-').pop() || '0', 10);
  const numB = parseInt(b.index?.split('-').pop() || '0', 10);
  return numA - numB;
};

// Helper function to determine the data based on activity type
export const getActivityData = (
  activityType: ActvityType | undefined,
  pushStakeData: RewardsStakeParams | undefined,
  uniV2StakeData: RewardsStakeParams | undefined
) => {
  if (activityType?.startsWith('point-push') || activityType?.startsWith('multiplier-push')) {
    return pushStakeData as RewardsStakeParams;
  }

  if (activityType?.startsWith('uni-v2-push') || activityType?.startsWith('multiplier-v2-push')) {
    return uniV2StakeData as RewardsStakeParams;
  }
  // Default to an empty object if none match
  return {};
};
