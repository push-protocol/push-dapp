// React and other libraries
import { FC } from 'react';

//Hooks
import { useAccount } from 'hooks';
import { useGetUserRewardsDetails } from 'queries';

//helpers
import { walletToCAIP10 } from 'helpers/w2w';

//components
import { Box, Text } from 'blocks';
import { DashboardSectionHeader } from './DashboardSectionHeader';
import { DashboardSectionPoints } from './DashboardSectionPoints';

export type DashboardSectionProps = {
  onGetStarted: () => void;
};

const DashboardSection: FC<DashboardSectionProps> = ({ onGetStarted }) => {
  const { isWalletConnected, account } = useAccount();
  const caip10WalletAddress = walletToCAIP10({ account });
  const {
    data: userDetails,
    isSuccess,
    refetch,
    isLoading: isUserLoading,
    isFetching,
  } = useGetUserRewardsDetails({ caip10WalletAddress: caip10WalletAddress, enabled: isWalletConnected });

  const isLoading = isUserLoading || !isSuccess;

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        gap="s4"
      >
        <Text
          variant="h4-bold"
          color={{ light: 'gray-1000', dark: 'gray-100' }}
        >
          Dashboard
        </Text>

        <DashboardSectionHeader onGetStarted={onGetStarted} />

        <Box
          display="flex"
          gap="s6"
          flexDirection={{ tb: 'column', initial: 'row' }}
        >
          <DashboardSectionPoints
            title="Total Points"
            points={userDetails?.totalPoints}
            rank={userDetails?.rank}
            isLoading={isLoading}
            isFetching={isFetching}
            refetch={() => refetch()}
          />

          <DashboardSectionPoints
            title="Referral Points"
            points={userDetails?.referralPoints}
            usersInvited={userDetails?.usersInvited}
            isLoading={isLoading}
          />
        </Box>
      </Box>
    </>
  );
};

export { DashboardSection };
