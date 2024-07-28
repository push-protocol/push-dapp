// React and other libraries
import { FC, useState } from 'react';

// hooks
import { Activity, useGetRewardsActivity } from 'queries';
import useLockedStatus from '../hooks/useLockedStatus';

// components
import { Box, Button, Lock, RewardsBell, Skeleton, Text } from 'blocks';
import { RewardsActivityTitle } from './RewardsActivityTitle';
import { ActivityButton } from './ActivityButton';

export type BonusActivitiesItemProps = {
  userId: string;
  activity: Activity;
  isLoadingItem: boolean;
};

const BonusActivitiesItem: FC<BonusActivitiesItemProps> = ({ userId, activity, isLoadingItem }) => {
  const {
    data: usersSingleActivity,
    isLoading,
    refetch: refetchActivity,
  } = useGetRewardsActivity({ userId, activityId: activity.id }, { enabled: !!userId });

  const [errorMessage, setErrorMessage] = useState('');

  const { isLocked } = useLockedStatus();

  return (
    <Skeleton isLoading={isLoadingItem}>
      <Box
        backgroundColor="surface-primary"
        borderRadius="radius-md"
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="spacing-sm"
        justifyContent="space-between"
      >
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
          <Lock size={28} />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          margin="spacing-xs spacing-none spacing-none spacing-none"
        >
          <Text
            color="text-primary"
            variant="bl-semibold"
            textAlign="center"
          >
            <RewardsActivityTitle
              activityTitle={activity.activityTitle}
              isLoading={isLoading}
            />
          </Text>
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
          {isLocked && (
            <Button
              size="small"
              variant="tertiary"
              disabled={true}
            >
              Locked
            </Button>
          )}
          {!isLocked && (
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
