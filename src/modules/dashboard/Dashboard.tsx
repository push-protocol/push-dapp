// React and other libraries
import { FC, useState } from 'react';

// Hooks
import { useAccount } from 'hooks';
import { walletToCAIP10 } from 'helpers/w2w';
import { RewardActivityStatus, useGetRewardsActivity, useGetUserRewardsDetails } from 'queries';

// Components
import { Alert, Box, Button, Link, Skeleton } from 'blocks';
import { AnalyticsOverview } from './components/AnalyticsOverview';
import { ChannelVariantsSection } from './components/ChannelVariantsSection';
import { DashboardHeader } from './components/DashboardHeader';
import { DashboardSubHeader } from './components/DashboardSubHeader';
import { FeaturedChannels } from './components/FeaturedChannels';
import { StakingPools } from './components/StakingPools';
import { SocialHandles } from './components/Socialhandles';

export type DashboardProps = {};

const Dashboard: FC<DashboardProps> = () => {
  const { isWalletConnected, account } = useAccount();

  // Getting user Id by wallet address
  const caip10WalletAddress = walletToCAIP10({ account });
  const { data: userDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const [showSubHeader, setSubHeaderVisibility] = useState(true);
  // for alerts
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const activityType = ['notifications_integration_email_telegram_discord'];
  const {
    data: emailTelegramIntegrationStatus,
    isLoading: isActivitiesLoading,
    // refetch: refetchActivity,
  } = useGetRewardsActivity(
    { userId: userDetails?.userId as string, activityTypes: activityType },
    { enabled: !!userDetails?.userId && activityType.length > 0 }
  );

  // Type Guard to check if an object is RewardActivityStatus
  const isRewardActivityStatus = (obj: any): obj is RewardActivityStatus => {
    return obj && typeof obj.status === 'string';
  };

  const hasUserClaimedEmailTelegramIntegration =
    isRewardActivityStatus(emailTelegramIntegrationStatus?.notifications_integration_email_telegram_discord) &&
    emailTelegramIntegrationStatus.notifications_integration_email_telegram_discord.status === 'COMPLETED';

  return (
    <Box
      flexDirection="column"
      display="flex"
      width={{ initial: 'auto', ml: '357px' }}
      margin={{ initial: 'spacing-sm spacing-xl', ml: 'spacing-sm spacing-none' }}
      gap={{ ml: 'spacing-md' }}
      height="100%"
    >
      <DashboardHeader
        showSubHeader={showSubHeader}
        setSubHeaderVisibility={setSubHeaderVisibility}
      />

      {showSubHeader && <DashboardSubHeader />}
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

        {isWalletConnected && (
          <SocialHandles
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            successMessage={successMessage}
            setSuccessMessage={setSuccessMessage}
            padding={{ ml: 'spacing-md spacing-sm', initial: 'spacing-md' }}
            claimButton={
              <Skeleton isLoading={isActivitiesLoading}>
                {hasUserClaimedEmailTelegramIntegration ? (
                  <Button
                    variant="tertiary"
                    size="small"
                    disabled
                  >
                    Claimed
                  </Button>
                ) : (
                  <Link to={'/points/activity'}>
                    <Button
                      aria-label="Claim"
                      size="small"
                      variant="tertiary"
                    >
                      Claim
                    </Button>
                  </Link>
                )}
              </Skeleton>
            }
          />
        )}
        <FeaturedChannels />
        <ChannelVariantsSection />
        <Box
          display="flex"
          flexDirection={{ initial: 'row', ml: 'column' }}
          gap="spacing-md"
        >
          <AnalyticsOverview />
          <StakingPools />
        </Box>
      </Box>
    </Box>
  );
};

export { Dashboard };
