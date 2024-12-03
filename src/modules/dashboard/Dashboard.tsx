// React and other libraries
import { FC, useState } from 'react';

// Components
import { Alert, Box, Button, Link } from 'blocks';
import { AnalyticsOverview } from './components/AnalyticsOverview';
import { ChannelVariantsSection } from './components/ChannelVariantsSection';
import { DashboardHeader } from './components/DashboardHeader';
import { DashboardSubHeader } from './components/DashboardSubHeader';
import { FeaturedChannels } from './components/FeaturedChannels';
import { StakingPools } from './components/StakingPools';
import { SocialHandles } from './components/Socialhandles';
import { useAccount } from 'hooks';

export type DashboardProps = {};

const Dashboard: FC<DashboardProps> = () => {
  const { isWalletConnected } = useAccount();

  const [showSubHeader, setSubHeaderVisibility] = useState(true);
  // for alerts
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

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
              <Link to={'/points/activity'}>
                <Button
                  aria-label="Claim"
                  size="small"
                  variant="tertiary"
                >
                  Claim
                </Button>
              </Link>
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
