// React and other libraries
import { FC, useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Hooks
import { useGetUserRewardsDetails, useCreateUserRewardsDetails } from 'queries';
import { useAccount } from 'hooks';
import { useRewardsTabs } from './hooks/useRewardsTabs';

//helpers
import { walletToCAIP10 } from 'helpers/w2w';
import { generateVerificationProof } from './helpers/generateVerificationProof';

//Types
import { UserStoreType } from 'types';
import { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfile';

//Components
import { Box, Text } from 'blocks';
import { ReferralSection } from './components/ReferralSection';
import { RewardsTabsContainer } from './components/RewardsTabsContainer';
import UnlockProfileWrapper from 'components/chat/unlockProfile/UnlockProfileWrapper';

export type RewardsProps = {};

const Rewards: FC<RewardsProps> = () => {
  const { isWalletConnected, account } = useAccount();

  const caip10WalletAddress = walletToCAIP10({ account });
  const { data: userDetails, refetch } = useGetUserRewardsDetails({ caip10WalletAddress });

  const query = useQuery();
  const ref = query.get('ref');

  const [showConnectModal, setConnectModalVisibility] = useState(false);

  const { activeTab, handleSetActiveTab } = useRewardsTabs();
  const heading = activeTab === 'leaderboard' ? 'Push Reward Points' : 'Introducing Push Reward Points Program';

  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const dataRef = {
    refPrimary: ref,
    userWallet: caip10WalletAddress,
  };

  const data = {
    userWallet: caip10WalletAddress,
  };

  const { mutate: createUser } = useCreateUserRewardsDetails();

  const generateUserId = async () => {
    if (!userPushSDKInstance || userDetails?.userId) return;

    const userData = ref ? dataRef : data;
    const verificationProof = await generateVerificationProof(userData, userPushSDKInstance);

    if (verificationProof == null || verificationProof == undefined) {
      if (activeTab === 'dashboard' && userPushSDKInstance && userPushSDKInstance.readmode()) {
        setConnectModalVisibility(true);
      }
    }

    createUser(
      {
        pgpPublicKey: userPushSDKInstance?.pgpPublicKey,
        userWallet: caip10WalletAddress,
        verificationProof: verificationProof as string,
        refPrimary: dataRef.refPrimary,
      },
      {
        onSuccess: () => {
          refetch();
        },
        onError: (err) => {
          console.error('Error', err);
        },
      }
    );
  };

  useEffect(() => {
    if (!caip10WalletAddress || !isWalletConnected) return;
    generateUserId();
  }, [isWalletConnected, caip10WalletAddress, userPushSDKInstance, activeTab]);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const token = params.get('access_token');
      const expiresIn = params.get('expires_in');

      if (token && expiresIn) {
        sessionStorage.setItem('access_token', token);
        sessionStorage.setItem('expires_in', expiresIn);
      }

      window.history.replaceState({}, '', window.location.pathname);
    }
  }, [])


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
        setShowConnectModal={setShowConnectModal}
      />
      {userPushSDKInstance && userPushSDKInstance?.readmode() && showConnectModal && (
        <UnlockProfileWrapper
          type={UNLOCK_PROFILE_TYPE.MODAL}
          showConnectModal={showConnectModal}
        />
      )}
      {activeTab === 'dashboard' && <ReferralSection />}
    </Box>
  );
};

export { Rewards };
