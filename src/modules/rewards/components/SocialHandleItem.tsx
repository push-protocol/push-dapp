import { FC, useEffect, useMemo, useState } from 'react';

import { Activity, StakeActivityResponse, UsersActivity } from 'queries';
import { useAccount } from 'hooks';
import useLockedStatus from '../hooks/useLockedStatus';

import { Alert, Box, Button, Skeleton } from 'blocks';
import { ActivityButton } from './ActivityButton';
import { SocialHandles } from 'modules/dashboard/components/Socialhandles';
import { useSocialHandles } from 'modules/dashboard/hooks/useSocialHandles';

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

  const { socialHandleStatus } = useSocialHandles(setErrorMessage, false);

  const isRewardsLocked = useMemo(() => {
    return (
      (isLocked || !isWalletConnected) &&
      activity?.activityType !== 'follow_push_on_discord' &&
      activity?.activityType !== 'follow_push_on_twitter'
    );
  }, [isLocked, isWalletConnected, activity?.activityType]);

  const hasUserConnectedAccounts = socialHandleStatus?.email && socialHandleStatus?.telegram_username;

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

  console.log(socialHandleStatus, 'soc soc', hasUserConnectedAccounts);

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
            ) : hasUserConnectedAccounts ? (
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
            ) : (
              <Button
                size="small"
                variant="tertiary"
                disabled
              >
                Claim
              </Button>
            )
          }
        />
      </Box>
    </Skeleton>
  );
};

export default SocialHandleItem;
