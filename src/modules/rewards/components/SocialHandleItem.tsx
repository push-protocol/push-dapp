import { FC, useEffect, useMemo, useState } from 'react';

import { Activity, StakeActivityResponse, UsersActivity } from 'queries';
import { useAccount } from 'hooks';
import useLockedStatus from '../hooks/useLockedStatus';

import { Alert, Box, Button, Skeleton } from 'blocks';
import { ActivityButton } from './ActivityButton';
import { SocialHandles } from 'modules/dashboard/components/Socialhandles';

export type SocialHandleItemFCType = {
  userId: string;
  activity: Activity;
  isLoadingItem: boolean;
  isLocked: boolean;
  allUsersActivity: StakeActivityResponse;
  isAllActivitiesLoading: boolean;
  refetchActivity: () => void;
};

const SocialHandleItem: FC<SocialHandleItemFCType> = ({
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

  // for alerts
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const { refetchRecentActivities, getLockStatus, statusRecentActivities } = useLockedStatus();

  const isRewardsLocked = useMemo(() => {
    return (
      (isLocked || !isWalletConnected) &&
      activity?.activityType !== 'follow_push_on_discord' &&
      activity?.activityType !== 'follow_push_on_twitter'
    );
  }, [isLocked, isWalletConnected, activity?.activityType]);

  const updateActivities = () => {
    refetchActivity();
    refetchRecentActivities();
  };

  // if activityType is twitter or discord, then re-call check lock status fn
  useEffect(() => {
    if (activity?.activityType == 'follow_push_on_discord' || activity?.activityType == 'follow_push_on_twitter') {
      getLockStatus();
    }
  }, [usersSingleActivity?.status, activity?.activityType, statusRecentActivities]);

  return (
    <Skeleton isLoading={isLoadingItem}>
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-md"
      >
        {successMessage && (
          <Box margin="spacing-sm spacing-none spacing-none spacing-none">
            <Alert
              variant="success"
              heading={successMessage}
            />
          </Box>
        )}

        {errorMessage && (
          <Box margin="spacing-sm spacing-none spacing-none spacing-none">
            <Alert
              variant="error"
              heading={errorMessage}
            />
          </Box>
        )}

        <SocialHandles
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          successMessage={successMessage}
          setSuccessMessage={setSuccessMessage}
          padding="spacing-none spacing-none spacing-none spacing-none"
          claimButton={
            isRewardsLocked ? (
              <Button
                size="small"
                variant="tertiary"
                disabled
              >
                Locked
              </Button>
            ) : (
              <ActivityButton
                userId={userId}
                activityTypeId={activity?.id}
                activityType={activity?.activityType}
                refetchActivity={() => updateActivities()}
                setErrorMessage={setErrorMessage}
                usersSingleActivity={usersSingleActivity}
                isLoadingActivity={isLoading}
                label={'Claim'}
              />
            )
          }
        />
      </Box>
    </Skeleton>
  );
};

export default SocialHandleItem;
