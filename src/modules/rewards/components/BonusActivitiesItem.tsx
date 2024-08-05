// React and other libraries
import { FC } from 'react';

// hooks
import { Activity, useGetRewardsActivity } from 'queries';
import { useAccount } from 'hooks';

// components
import { Box, Button, Lock, RewardsBell, Skeleton, Text } from 'blocks';
import { ActivityButton } from './ActivityButton';
import { RewardsActivityIcon } from './RewardsActivityIcon';

export type BonusActivitiesItemProps = {
  userId: string;
  activity: Activity;
  isLoadingItem: boolean;
  setErrorMessage: (errorMessage: string) => void;
  isLocked: boolean;
};

const BonusActivitiesItem: FC<BonusActivitiesItemProps> = ({
  userId,
  activity,
  isLoadingItem,
  setErrorMessage,
  isLocked,
}) => {
  const {
    data: usersSingleActivity,
    isLoading,
    refetch: refetchActivity,
  } = useGetRewardsActivity({ userId, activityId: activity.id }, { enabled: !!userId });

  const { isWalletConnected } = useAccount();

  const isLockedOrNotConnected = isLocked || !isWalletConnected;

  /* TODO: ask BE to update Title according to design only */
  const updatedTitle = activity?.activityTitle?.replace(
    /Reach\s+([\d,]+)\s+Subscribers\s+for\s+your\s+channel/i,
    '$1 Subscribers'
  );

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
              {updatedTitle}
            </Text>
          </Box>
          <Box display={{ ml: 'none', initial: 'block' }}>
            <Text
              color="text-primary"
              variant="bl-semibold"
              textAlign="center"
            >
              {updatedTitle}
            </Text>
          </Box>

          <Text
            variant="bs-regular"
            color="text-tertiary"
            textAlign="center"
          >
            {activity.activityDesc}
          </Text>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="spacing-xxs"
          margin="spacing-md spacing-none spacing-none spacing-none"
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
              startingLabel="Claim"
            />
          )}
        </Box>
      </Box>
    </Skeleton>
  );
};

export { BonusActivitiesItem };
