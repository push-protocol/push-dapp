import { FC, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Hooks
import { useAccount } from 'hooks';
import { useRewardsTabs } from './hooks/useRewardsTabs';
import { useGetUserRewardsDetails, useCreateUserRewardsDetails } from 'queries';

//helpers
import { walletToCAIP10 } from 'helpers/w2w';
import { generateVerificationProof } from './helpers/generateVerificationProof';

//Components
import { Box, Text } from 'blocks';
import { RefferalSection } from './components/RefferalSection';
import { RewardsTabsContainer } from './components/RewardsTabsContainer';
import UnlockProfileWrapper from 'components/chat/unlockProfile/UnlockProfileWrapper';
import { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfile';
import { UserStoreType } from 'types';

export type RewardsProps = {};

const Rewards: FC<RewardsProps> = () => {
  const query = useQuery();
  const ref = query.get('ref');

  const { isWalletConnected, account } = useAccount();
  let walletAddress = walletToCAIP10({ account });

  const [showConnectModal, setShowConnectModal] = useState(false);

  const { activeTab, handleSetActiveTab } = useRewardsTabs();
  const heading = activeTab === 'leaderboard' ? 'Push Reward Points' : 'Introducing Push Reward Points Program';

  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });

  const {
    data: userDetails,
    refetch,
    isSuccess,
    isLoading,
    isFetching,
    error,
  } = useGetUserRewardsDetails({ walletAddress });

  const dataRef = {
    refPrimary: ref,
    userWallet: walletAddress,
  };

  const data = {
    userWallet: walletAddress,
  };

  const { mutate: createUser } = useCreateUserRewardsDetails();

  const generateUserId = async () => {
    if (!userPushSDKInstance || userDetails?.userId) return;

    const userData = ref ? dataRef : data;
    const verificationProof = await generateVerificationProof(userData, userPushSDKInstance);

    if (verificationProof == null || verificationProof == undefined) {
      if (activeTab === 'dashboard' && userPushSDKInstance && userPushSDKInstance.readmode()) {
        setShowConnectModal(true);
      }
    }

    createUser(
      {
        pgpPublicKey: userPushSDKInstance?.pgpPublicKey,
        userWallet: walletAddress,
        verificationProof: verificationProof as string,
        refPrimary: dataRef.refPrimary,
      },
      {
        onSuccess: (response) => {
          refetch();
        },
        onError: (err) => {
          console.error('Error', err);
        },
      }
    );
  };

  useEffect(() => {
    if (!walletAddress || !isWalletConnected) return;
    generateUserId();
  }, [isWalletConnected, walletAddress, userPushSDKInstance, activeTab]);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  return (
    <Box
      flexDirection="column"
      display="flex"
      margin={{ initial: 's4 s6 s4 s6', ml: 's4' }}
      gap="s6"
      height="100%"
    >
      <Text
        variant="h3-bold"
        display={{ ml: 'none', dp: 'block' }}
        color={{ light: 'gray-1000', dark: 'gray-100' }}
      >
        {heading}
      </Text>
      <Text
        variant="h4-semibold"
        display={{ ml: 'block', dp: 'none' }}
        color={{ light: 'gray-1000', dark: 'gray-100' }}
      >
        {heading}
      </Text>
      <RewardsTabsContainer
        activeTab={activeTab}
        handleSetActiveTab={handleSetActiveTab}
      />
      {userPushSDKInstance && userPushSDKInstance?.readmode() && showConnectModal && (
        <UnlockProfileWrapper
          type={UNLOCK_PROFILE_TYPE.MODAL}
          showConnectModal={showConnectModal}
        />
      )}
      {activeTab === 'dashboard' && <RefferalSection />}
    </Box>
  );
};

export { Rewards };
