// React and other libraries
import { FC, useMemo, useState } from 'react';

// hooks
import { useAccount } from 'hooks';
import { useGetUserRewardsDetails } from 'queries';
import { useRewardsContext } from 'contexts/RewardsContext';

// helpers
import { walletToCAIP10 } from 'helpers/w2w';

// components
import { Alert, Box, Clockwise, Lozenge, Skeleton, Stopwatch, Text } from 'blocks';
import { StakePushActivitiesListItem } from './StakePushActivitiesListItem';
import { RewardsActivityTitle } from './RewardsActivityTitle';
import { useStakeRewardsResetTime } from '../hooks/useStakeRewardsResetTime';

export type StakePushPoints = {
  title: string;
  subtitle: string;
  timeline?: boolean;
  multiplier?: boolean;
};

const StakePushSection: FC<StakePushPoints> = ({ title, subtitle, timeline, multiplier }) => {
  const { account, isWalletConnected } = useAccount();
  const { isLocked } = useRewardsContext();
  const { stakePushArray, uniV2PushArray, isLoading, daysToReset } = useStakeRewardsResetTime({
    multiplier,
  });
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Getting user Id by wallet address
  const caip10WalletAddress = walletToCAIP10({ account });
  const { data: userDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const activityResetDate = daysToReset + 7;

  const isEpochStatusActive = useMemo(() => {
    return daysToReset != null && !multiplier && daysToReset >= 0 && activityResetDate > 7 && isWalletConnected;
  }, [daysToReset, multiplier, activityResetDate, isWalletConnected]);

  const hasEpochEnded = useMemo(() => {
    return daysToReset != null && activityResetDate >= 0 && activityResetDate <= 7 && !multiplier && isWalletConnected;
  }, [daysToReset, activityResetDate, multiplier, isWalletConnected]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-md"
    >
      <Box
        display="flex"
        flexDirection={{ ml: 'column', initial: 'row' }}
        width="-webkit-fill-available"
        justifyContent="space-between"
        gap={{ ml: 'spacing-sm' }}
      >
        <Box>
          <Box
            display="flex"
            justifyContent="align-items"
            alignItems="center"
            gap="spacing-xs"
          >
            <Text
              variant="h4-bold"
              color="text-primary"
            >
              {title}
            </Text>

            {isEpochStatusActive && (
              <Lozenge
                size="small"
                icon={<Stopwatch color="icon-brand-medium" />}
              >
                {daysToReset} DAYS
              </Lozenge>
            )}

            {hasEpochEnded && (
              <Lozenge
                size="small"
                icon={<Stopwatch color="icon-brand-medium" />}
              >
                ENDED
              </Lozenge>
            )}
          </Box>

          <RewardsActivityTitle
            activityTitle={subtitle}
            isLoading={false}
            color="text-tertiary"
            variant="bm-regular"
          />
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="spacing-xxxs"
        >
          {isWalletConnected && timeline && activityResetDate != null && activityResetDate >= 0 && (
            <Skeleton
              isLoading={daysToReset == null}
              width="240px"
              height="20px"
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap="spacing-xxxs"
              >
                <Clockwise
                  size={24}
                  color="icon-brand-medium"
                />
                <Text
                  variant="bs-semibold"
                  color={activityResetDate <= 7 ? 'text-brand-medium' : 'text-tertiary'}
                >
                  Activity resets in {activityResetDate} days
                </Text>
              </Box>
            </Skeleton>
          )}
        </Box>
      </Box>

      {errorMessage && (
        <Box width="-webkit-fill-available">
          <Alert
            heading={errorMessage}
            variant="error"
            onClose={() => setErrorMessage('')}
          />
        </Box>
      )}

      <Box
        display="flex"
        flexDirection="row"
        width="100%"
        gap="spacing-sm"
      >
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          gap="spacing-sm"
        >
          {stakePushArray?.map((activity) => (
            <StakePushActivitiesListItem
              key={activity.activityType}
              userId={userDetails?.userId || ''}
              activity={activity}
              isLoadingItem={isLoading}
              setErrorMessage={setErrorMessage}
              isLocked={isLocked}
              hasEpochEnded={hasEpochEnded}
            />
          ))}
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          gap="spacing-sm"
        >
          {uniV2PushArray?.map((activity) => (
            <StakePushActivitiesListItem
              key={activity.activityType}
              userId={userDetails?.userId || ''}
              activity={activity}
              isLoadingItem={isLoading}
              setErrorMessage={setErrorMessage}
              isLocked={isLocked}
              hasEpochEnded={hasEpochEnded}
            />
          ))}
        </Box>
      </Box>

      {!multiplier && (
        <Text
          textAlign="center"
          variant="bs-semibold"
          color="text-tertiary"
        >
          Staking rewards can be claimed once per reset after a cooldown period of 7 days.
        </Text>
      )}
    </Box>
  );
};

export { StakePushSection };
