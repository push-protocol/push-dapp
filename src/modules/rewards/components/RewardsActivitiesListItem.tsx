import { FC, useEffect, useMemo, useState } from 'react';

import { Activity, StakeActivityResponse, UsersActivity } from 'queries';
import { useAccount } from 'hooks';

import {
  Box,
  Button,
  ErrorFilled,
  InfoFilled,
  Lozenge,
  RewardsBell,
  Skeleton,
  Text,
  Lock,
  Multiplier,
  Star,
} from 'blocks';
import { css } from 'styled-components';
import { ActivityButton } from './ActivityButton';
import { RewardsActivityIcon } from './RewardsActivityIcon';
import { RewardsActivityTitle } from './RewardsActivityTitle';
import useLockedStatus from '../hooks/useLockedStatus';

export type RewardActivitiesListItemProps = {
  userId: string;
  activity: Activity;
  isLoadingItem: boolean;
  isLocked: boolean;
  allUsersActivity: StakeActivityResponse;
  isAllActivitiesLoading: boolean;
  refetchActivity: () => void;
};

const getUpdatedExpiryTime = (timestamp: number) => {
  const currentDate = new Date();
  const expiryDate = new Date(timestamp * 1000);

  // Calculate the difference in time (milliseconds)
  const timeDiff = expiryDate.getTime() - currentDate.getTime();

  // Convert the difference from milliseconds to days
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return daysLeft;
};

const RewardsActivitiesListItem: FC<RewardActivitiesListItemProps> = ({
  userId,
  activity,
  isLoadingItem,
  isLocked,
  allUsersActivity,
  isAllActivitiesLoading,
  refetchActivity,
}) => {
  const { isWalletConnected } = useAccount();
  const usersSingleActivity = allUsersActivity?.[activity?.activityType] as UsersActivity;
  const isLoading = isAllActivitiesLoading;

  const [errorMessage, setErrorMessage] = useState('');
  const { refetchRecentActivities, getLockStatus, statusRecentActivities } = useLockedStatus();

  const isRewardsLocked = useMemo(() => {
    return (
      (isLocked || !isWalletConnected) &&
      activity.activityType !== 'follow_push_on_discord' &&
      activity.activityType !== 'follow_push_on_twitter'
    );
  }, [isLocked, isWalletConnected, activity.activityType]);

  const isNotDiscordOrTwitter =
    activity.activityType !== 'follow_push_on_discord' && activity.activityType !== 'follow_push_on_twitter';

  const updateActivities = () => {
    refetchActivity();
    refetchRecentActivities();
  };

  // if activityType is twitter or discord, then re-call check lock status fn
  useEffect(() => {
    if (activity.activityType == 'follow_push_on_discord' || activity.activityType == 'follow_push_on_twitter') {
      getLockStatus();
    }
  }, [usersSingleActivity?.status, activity.activityType, statusRecentActivities]);

  return (
    <Skeleton isLoading={isLoadingItem}>
      <Box
        display="flex"
        flexDirection="column"
        borderRadius="radius-sm"
        backgroundColor="surface-secondary"
      >
        <Box
          display="flex"
          flexDirection="row"
          padding={{ ml: 'spacing-xs', lp: 'spacing-sm spacing-xxs', initial: 'spacing-sm' }}
          borderRadius="radius-sm radius-sm radius-none radius-none"
          alignItems={{ ml: 'flex-start', initial: 'center' }}
          gap="spacing-sm"
        >
          {isRewardsLocked ? (
            <Box
              width="48px"
              height="48px"
              borderRadius="radius-round"
              backgroundColor="surface-tertiary"
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="border-xs solid stroke-tertiary"
              css={css`
                flex-shrink: 0;
              `}
            >
              <Lock
                size={28}
                color="icon-tertiary"
              />
            </Box>
          ) : (
            <RewardsActivityIcon type={activity.activityType} />
          )}

          <Box
            display="flex"
            flexDirection={{ ml: 'column', initial: 'row' }}
            gap={{ ml: 'spacing-sm', initial: 'spacing-md' }}
            width="100%"
            alignItems={{ ml: 'baseline', initial: 'center' }}
          >
            {/* Rewards Contents */}
            <Box
              display="flex"
              flexDirection={{ ml: 'column', initial: 'row' }}
              gap={{ ml: 'spacing-xxxs', initial: 'spacing-sm' }}
              alignItems={{ ml: 'flex-start', initial: 'center' }}
              justifyContent="space-between"
              width="100%"
            >
              {/* Rewards Description */}
              <Box
                display="flex"
                flexDirection="column"
                gap="spacing-xxxs"
              >
                <Box
                  display="flex"
                  flexDirection={{ lp: 'column-reverse', initial: 'row' }}
                  gap={{ lp: 'spacing-xxxs', initial: 'spacing-sm' }}
                >
                  <RewardsActivityTitle
                    activityTitle={activity.activityTitle}
                    isLoading={isLoading}
                  />

                  <Box
                    display="flex"
                    gap="spacing-xxs"
                  >
                    {!!activity.expiryType && getUpdatedExpiryTime(activity?.expiryType) > 0 && (
                      <Lozenge size="small">
                        {`Expires in ${getUpdatedExpiryTime(activity?.expiryType)} days`.toUpperCase()}
                      </Lozenge>
                    )}
                    {activity?.tags?.map((tag) => (
                      <Lozenge
                        size="small"
                        icon={<Star />}
                      >
                        {tag}
                      </Lozenge>
                    ))}
                  </Box>
                </Box>

                {/* We don't need to show the Description when the title is discord and twitter according to the design */}
                {activity.activityType !== 'follow_push_on_discord' &&
                  activity.activityType !== 'follow_push_on_twitter' && (
                    <Skeleton isLoading={isLoading}>
                      <RewardsActivityTitle
                        activityTitle={activity.activityDesc}
                        isLoading={isLoading}
                        color="text-tertiary"
                        variant="bs-regular"
                      />
                    </Skeleton>
                  )}
              </Box>

              <Box
                display="flex"
                flexDirection="row"
                gap="spacing-sm"
                alignItems="center"
              >
                {/* Rewards Multiplier and Points */}
                {activity.multiplier > 1 && (
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    gap="spacing-xxxs"
                  >
                    <Multiplier />
                    <Text
                      variant="bm-semibold"
                      color="text-state-success-bold"
                    >
                      {activity.multiplier?.toLocaleString()}x
                    </Text>
                  </Box>
                )}

                <Box
                  display="flex"
                  minWidth="200px"
                  flexDirection="row"
                  gap="spacing-xxs"
                  alignItems="center"
                >
                  <Skeleton
                    isLoading={isLoading}
                    height="32px"
                  >
                    <RewardsBell
                      width={32}
                      height={32}
                    />
                    <Text
                      variant="bm-semibold"
                      color="text-primary"
                    >
                      {activity.points?.toLocaleString()}
                    </Text>
                  </Skeleton>
                </Box>
              </Box>
            </Box>

            {/* Buttons Logic */}
            <Box display="flex">
              {isRewardsLocked && (
                <Button
                  size="small"
                  variant="tertiary"
                  disabled
                >
                  Locked
                </Button>
              )}

              {!isRewardsLocked && (
                <ActivityButton
                  userId={userId}
                  activityTypeId={activity.id}
                  activityType={activity.activityType}
                  refetchActivity={() => updateActivities()}
                  setErrorMessage={setErrorMessage}
                  usersSingleActivity={usersSingleActivity}
                  isLoadingActivity={isLoading}
                  label={isNotDiscordOrTwitter ? 'Claim' : 'Verify'}
                />
              )}
            </Box>
          </Box>
        </Box>

        {(errorMessage || usersSingleActivity?.status === 'REJECTED') && (
          <Box
            gap="spacing-xxs"
            display="flex"
            flexDirection="row"
            alignItems="center"
            backgroundColor="surface-state-danger-subtle"
            borderRadius="radius-none radius-none radius-sm radius-sm"
            padding={{ ml: 'spacing-xxs', lp: 'spacing-xxs', initial: 'spacing-xxs' }}
          >
            <ErrorFilled
              color="icon-state-danger-bold"
              size={24}
            />
            <Text
              variant="h5-semibold"
              color="text-state-danger-bold"
            >
              {errorMessage || 'Verification Rejected. Please contact the Push team over discord.'}
            </Text>
          </Box>
        )}

        {usersSingleActivity?.status === 'PENDING' && (
          <Box
            gap="spacing-xs"
            display="flex"
            flexDirection="row"
            alignItems="center"
            backgroundColor="surface-state-disabled"
            borderRadius="radius-none radius-none radius-sm radius-sm"
            padding={{ ml: 'spacing-xxs', lp: 'spacing-xxs', initial: 'spacing-xxs' }}
          >
            <InfoFilled
              color="icon-tertiary"
              size={24}
            />

            <Text
              variant="h5-semibold"
              color="text-tertiary"
            >
              Verification Pending: Expected completion within 24-72 hours.
            </Text>
          </Box>
        )}
      </Box>
    </Skeleton>
  );
};

export { RewardsActivitiesListItem };
