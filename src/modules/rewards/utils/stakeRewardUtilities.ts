import { RewardsStakeParams } from 'queries';

export const sortByIndexNumber = (a: any, b: any) => {
  const numA = parseInt(a.index?.split('-').pop() || '0', 10);
  const numB = parseInt(b.index?.split('-').pop() || '0', 10);
  return numA - numB;
};

// Helper function to determine the data based on activity type
export const getActivityData = (
  activityTypeIndex: string | undefined,
  pushStakeData: RewardsStakeParams | undefined,
  uniV2StakeData: RewardsStakeParams | undefined
) => {
  if (activityTypeIndex?.startsWith('point-push') || activityTypeIndex?.startsWith('multiplier-push')) {
    return pushStakeData as RewardsStakeParams;
  }

  if (activityTypeIndex?.startsWith('point-uni-v2') || activityTypeIndex?.startsWith('multiplier-uni-v2')) {
    return uniV2StakeData as RewardsStakeParams;
  }
  // Default to an empty object if none match
  return {};
};
