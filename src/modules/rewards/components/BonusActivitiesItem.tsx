// React and other libraries
import { FC } from 'react';

// hooks
import { Activity, StakeActivityResponse, UsersActivity } from 'queries';
import { useAccount } from 'hooks';

// components
import { Box, Button, Lock, Multiplier, RewardsBell, Skeleton, Text } from 'blocks';
import { ActivityButton } from './ActivityButton';
import { RewardsActivityIcon } from './RewardsActivityIcon';
import { RewardsActivityTitle } from './RewardsActivityTitle';

export type BonusActivitiesItemProps = {
  userId: string;
  activity: Activity;
  isLoadingItem: boolean;
  setErrorMessage: (errorMessage: string) => void;
  isLocked: boolean;
  allUsersActivity: StakeActivityResponse;
  isAllActivitiesLoading: boolean;
  refetchActivity: () => void;
};

const BonusActivitiesItem: FC<BonusActivitiesItemProps> = ({
  userId,
  activity,
  isLoadingItem,
  setErrorMessage,
  isLocked,
  allUsersActivity,
  isAllActivitiesLoading,
  refetchActivity,
}) => {
  const usersSingleActivity = allUsersActivity?.[activity?.activityType] as UsersActivity;
  const isLoading = isAllActivitiesLoading;

  const { isWalletConnected } = useAccount();

  const isLockedOrNotConnected = isLocked || !isWalletConnected;

  return (
    <Skeleton
      isLoading={isLoadingItem}
      borderRadius="radius-md"
    >
      <Box
        backgroundColor="surface-primary"
        borderRadius="radius-md"
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="spacing-sm"
        justifyContent="space-between"
      >
        {isLockedOrNotConnected ? (
          <Box
            width="48px"
            height="48px"
            borderRadius="radius-round"
            backgroundColor="surface-tertiary"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="border-xs solid stroke-tertiary"
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
          flexDirection="column"
          alignItems="center"
          margin="spacing-xs spacing-none spacing-none spacing-none"
        >
          <Box display={{ ml: 'block', initial: 'none' }}>
            <Text
              color="text-primary"
              variant="h6-bold"
              textAlign="center"
            >
              {activity?.activityTitle}
            </Text>
          </Box>
          <Box display={{ ml: 'none', initial: 'block' }}>
            <Text
              color="text-primary"
              variant="bl-semibold"
              textAlign="center"
            >
              {activity?.activityTitle}
            </Text>
          </Box>

          <Box textAlign="center">
            <RewardsActivityTitle
              activityTitle={activity.activityDesc}
              isLoading={false}
              color="text-tertiary"
              variant="bs-regular"
            />
          </Box>
        </Box>

        <Box margin="spacing-md spacing-none spacing-none spacing-none">
          {/* Rewards Multiplier and Points */}
          {activity.multiplier > 1 ? (
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
          ) : (
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap="spacing-xxs"
            >
              <RewardsBell
                width={28}
                height={28}
              />
              <Text
                variant="bm-semibold"
                color="text-primary"
              >
                {activity.points?.toLocaleString()}
              </Text>
            </Box>
          )}
        </Box>

        {/* Buttons Logic */}
        <Box
          display="flex"
          margin="spacing-md spacing-none spacing-none spacing-none"
        >
          {isLockedOrNotConnected && (
            <Button
              size="small"
              variant="tertiary"
              disabled={true}
            >
              Locked
            </Button>
          )}

          {!isLocked && isWalletConnected && (
            <ActivityButton
              userId={userId}
              activityTypeId={activity.id}
              activityType={activity.activityType}
              refetchActivity={refetchActivity}
              setErrorMessage={setErrorMessage}
              usersSingleActivity={usersSingleActivity}
              isLoadingActivity={isLoading}
              label="Claim"
            />
          )}
        </Box>
      </Box>
    </Skeleton>
  );
};

export { BonusActivitiesItem };
