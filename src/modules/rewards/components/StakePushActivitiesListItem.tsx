// React and other libraries
import { FC } from 'react';

// hooks
import { Activity, StakeActivityResponse, UsersActivity } from 'queries';
import { useAccount } from 'hooks';

// components
import { Box, Button, Lock, Lozenge, Multiplier, RewardsBell, Skeleton, Star, Text } from 'blocks';
import { RewardsActivityIcon } from './RewardsActivityIcon';
import { ActivityButton } from './ActivityButton';

export type StakeActivitiesItemProps = {
  userId: string;
  activity: Activity;
  isLoadingItem: boolean;
  setErrorMessage: (errorMessage: string) => void;
  isLocked: boolean;
  hasEpochEnded?: boolean;
  allUsersActivity: StakeActivityResponse;
  isAllActivitiesLoading: boolean;
  refetchActivity: () => void;
  lifeTime?: boolean;
};
const StakePushActivitiesListItem: FC<StakeActivitiesItemProps> = ({
  userId,
  activity,
  isLoadingItem,
  setErrorMessage,
  isLocked,
  hasEpochEnded,
  allUsersActivity,
  isAllActivitiesLoading,
  refetchActivity,
  lifeTime,
}) => {
  const { isWalletConnected } = useAccount();

  const usersSingleActivity = allUsersActivity?.[activity?.activityType] as UsersActivity;
  const isLoading = isAllActivitiesLoading;

  const hasActivityEndedUnclaimed = hasEpochEnded;

  const isLockedOrNotConnected = isLocked || !isWalletConnected;

  return (
    <Skeleton
      isLoading={isLoadingItem}
      borderRadius="radius-md"
    >
      <Box
        backgroundColor="surface-secondary"
        borderRadius="radius-md"
        display="flex"
        flexDirection={{ ml: 'column', initial: 'row' }}
        alignItems="center"
        padding="spacing-sm"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexDirection={{ ml: 'column', initial: 'row' }}
          alignItems="center"
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
            justifyContent="center"
            margin={{
              ml: 'spacing-xxs spacing-none spacing-none spacing-none',
              initial: 'spacing-none spacing-none spacing-none spacing-md',
            }}
            gap={{ ml: 'spacing-sm', initial: 'spacing-xxxs' }}
            alignItems={{ ml: 'center' }}
          >
            <Box
              display={{ ml: 'flex', initial: 'none' }}
              flexDirection="column"
              alignItems="center"
            >
              <Text
                color="text-primary"
                variant="h6-bold"
                textAlign="center"
              >
                {activity?.activityTitle}
              </Text>
              {activity?.tags?.map((tag) => (
                <Lozenge
                  size="small"
                  icon={<Star />}
                >
                  {tag}
                </Lozenge>
              ))}
            </Box>
            <Box
              display={{ ml: 'none', initial: 'flex' }}
              gap="spacing-xs"
            >
              <Text
                color="text-primary"
                variant="bl-semibold"
                textAlign="center"
              >
                {activity?.activityTitle}
              </Text>
              {activity?.tags?.map((tag) => (
                <Lozenge
                  size="small"
                  icon={<Star />}
                >
                  {tag}
                </Lozenge>
              ))}
            </Box>

            {activity.points > 0 && (
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap="spacing-xxxs"
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

            {activity.multiplier > 0 && (
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap="spacing-xxxs"
              >
                <Multiplier />
                <Text
                  variant="bm-semibold"
                  color="text-primary"
                >
                  {activity.multiplier?.toLocaleString()}x
                </Text>
              </Box>
            )}
          </Box>
        </Box>

        {/* Buttons Logic */}
        <Box
          display="flex"
          margin={{ ml: 'spacing-sm spacing-none spacing-xxxs spacing-none' }}
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

          {hasActivityEndedUnclaimed && !isLocked && isWalletConnected && !lifeTime && (
            <Button
              variant="tertiary"
              size="small"
              disabled
            >
              Ended
            </Button>
          )}

          {/* stake reset/one-time button */}
          {!hasActivityEndedUnclaimed && !isLocked && isWalletConnected && !lifeTime && (
            <ActivityButton
              userId={userId}
              activityTypeId={activity.id}
              activityTypeIndex={activity.index}
              activityType={activity.activityType}
              refetchActivity={refetchActivity}
              setErrorMessage={setErrorMessage}
              usersSingleActivity={usersSingleActivity}
              isLoadingActivity={isLoading}
              label="Claim"
              isStakeSection
              lifeTime={lifeTime}
            />
          )}

          {/* stake lifetime button */}
          {lifeTime && !isLocked && isWalletConnected && (
            <ActivityButton
              userId={userId}
              activityTypeId={activity.id}
              activityTypeIndex={activity.index}
              activityType={activity.activityType}
              refetchActivity={refetchActivity}
              setErrorMessage={setErrorMessage}
              usersSingleActivity={usersSingleActivity}
              isLoadingActivity={isLoading}
              label="Claim"
              isStakeSection
              lifeTime={lifeTime}
            />
          )}
        </Box>
      </Box>
    </Skeleton>
  );
};

export { StakePushActivitiesListItem };
