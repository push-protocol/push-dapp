import { RewardsStakeParams } from 'queries';

/**
 * Compares two objects based on the numerical value of their `index` property.
 * Assumes `index` is a string with a hyphen ('-') and takes the last segment as the number.
 * Compares these numbers and returns the result to sort in numerical order.
 *
 * @param {{ index?: string }} a - First object to compare, optionally having an `index` property.
 * @param {{ index?: string }} b - Second object to compare, optionally having an `index` property.
 * @returns {number} - Negative if `a` < `b`, positive if `a` > `b`, or `0` if they are equal.
 */

export const sortByIndexNumber = (a: { index?: string }, b: { index?: string }): number => {
  const numA = parseInt(a.index?.split('-').pop() || '0', 10);
  const numB = parseInt(b.index?.split('-').pop() || '0', 10);
  return numA - numB;
};

/**
 * Returns the appropriate staking data based on the activity type.
 *
 * - If `activityTypeIndex` starts with 'point-push' or 'multiplier-push', returns `pushStakeData`.
 * - If `activityTypeIndex` starts with 'point-uni-v2' or 'multiplier-uni-v2', returns `uniV2StakeData`.
 * - Returns an empty object if no match is found.
 *
 * @param {string | undefined} activityTypeIndex - The type of activity.
 * @param {RewardsStakeParams} [pushStakeData] - Staking data for Push.
 * @param {RewardsStakeParams} [uniV2StakeData] - Staking data for Uni V2.
 *
 * @returns {RewardsStakeParams | {}} - Corresponding stake data or an empty object.
 */
export const getActivityData = (
  activityTypeIndex: string | undefined,
  pushStakeData?: RewardsStakeParams,
  uniV2StakeData?: RewardsStakeParams
): RewardsStakeParams | {} => {
  if (activityTypeIndex?.startsWith('point-push') || activityTypeIndex?.startsWith('multiplier-push')) {
    return pushStakeData as RewardsStakeParams;
  }

  if (activityTypeIndex?.startsWith('point-uni-v2') || activityTypeIndex?.startsWith('multiplier-uni-v2')) {
    return uniV2StakeData as RewardsStakeParams;
  }

  return {}; // Default if no match
};

// Consolidated function for filtering and sorting activities in stake points and multipliers, we are
// sorting by the indexes to get multiplier points, mulitplier unis, push points and uni points.
// and also, doing a filter and sort of all the unis, and all push to get the latest activities in the useStakeRewardsResetTime hook
export const filterAndSortActivities = (prefix: string, activities: any[], multiplier?: boolean) => {
  return activities
    .filter(
      (activity) =>
        activity.index.startsWith(multiplier ? `multiplier-${prefix}` : `point-${prefix}`) &&
        activity?.status === 'ENABLED'
    )
    .sort(sortByIndexNumber);
};

export const filterAndSortAllActivities = (prefix: string, secondprefix: string, activities: any[]) => {
  return activities.filter(
    (activity) =>
      activity.index.startsWith(prefix) || (activity.index.startsWith(secondprefix) && activity?.status === 'ENABLED')
  );
};
