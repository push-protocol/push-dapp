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
  const { account } = useAccount();
  const caip10WalletAddress = walletToCAIP10({ account });
  const {
    data: userDetails,
    refetch,
    isLoading: isUserLoading,
    isFetching,
  } = useGetUserRewardsDetails({ caip10WalletAddress: caip10WalletAddress });

  const isLoading = isUserLoading;

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-sm"
      >
        <Text
          variant="h4-bold"
          color="text-primary"
        >
          Dashboard
        </Text>

        <DashboardSectionHeader onGetStarted={onGetStarted} />

        <Box
          display="flex"
          gap="spacing-md"
          flexDirection={{ tb: 'column', initial: 'row' }}
        >
          <DashboardSectionPoints
            title="Total Points"
            points={userDetails?.totalPoints}
            rank={userDetails?.rank}
            isLoading={isLoading}
            isFetching={isFetching}
            data={userDetails}
            refetch={() => refetch()}
          />

          <DashboardSectionPoints
            title="Multiplier"
            multiplier={true}
            points={userDetails?.referralPoints}
            data={userDetails}
            isLoading={isLoading}
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
