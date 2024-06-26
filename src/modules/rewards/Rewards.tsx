// React and other libraries
import { FC, useEffect } from 'react';

// third party libraries
import { css } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Hooks
import { useGetUserRewardsDetails } from 'queries';
import { useAccount } from 'hooks';
import { useRewardsTabs } from './hooks/useRewardsTabs';
import { useGenerateUserId } from './hooks/useGenerateUserId';

//Types
import { UserStoreType } from 'types';
import { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfile';
import { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';

//helpers
import { walletToCAIP10 } from 'helpers/w2w';

//Components
import { Box, Text } from 'blocks';
import { ReferralSection } from './components/ReferralSection';
import { RewardsTabsContainer } from './components/RewardsTabsContainer';
import UnlockProfileWrapper from 'components/chat/unlockProfile/UnlockProfileWrapper';
import LoaderSpinner from 'components/reusables/loaders/LoaderSpinner';

export type RewardsProps = {};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Rewards: FC<RewardsProps> = () => {
  const { isWalletConnected, account, wallet } = useAccount();
  const caip10WalletAddress = walletToCAIP10({ account });

  const {
    data: userDetails,
    refetch,
    isLoading: isUserLoading,
    error: userError,
  } = useGetUserRewardsDetails({ caip10WalletAddress: caip10WalletAddress, enabled: isWalletConnected });

  const query = useQuery();
  const ref = query.get('ref');

  const { activeTab, handleSetActiveTab } = useRewardsTabs();
  const heading = activeTab === 'leaderboard' ? 'Push Reward Points' : 'Introducing Push Reward Points Program';

  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const {
    isRewardsLoading,
    setIsRewardsLoading,
    showConnectModal,
    setConnectModalVisibility,
    generateUserId,
    handleError,
  } = useGenerateUserId(caip10WalletAddress, refetch);


  useEffect(() => {
    // TO handle the case where the user switches the tab or click back button.
    if (activeTab !== 'activity') {
      setConnectModalVisibility(false);
    }

    // To handle the case where the user clicks on activities tab and the wallet is not connected.
    if (activeTab === 'activity' && !isWalletConnected) {
      setConnectModalVisibility(true);
      return;
    }

    // if no wallet is connected, set loader false so you can see dashboard unconnected state
    if (!isWalletConnected) {
      setIsRewardsLoading(false);
      return;
    }

    // if there is no converted caip wallet address, userPushSDKInstance, or wallet is not connected, or no error, return
    if (!caip10WalletAddress || !userPushSDKInstance || !userError || !isWalletConnected) return;

    setIsRewardsLoading(true);
    handleError(userError, ref);
  }, [caip10WalletAddress, userPushSDKInstance, userError, isWalletConnected, activeTab]);

  const location = useLocation();

  //Tried creating hook for this. It was not working access_token was not getting stored in the session storage.
  // This is for the case when the user authorizes the dapp for discord and it redirects the user to the redirected url with the access_token and expires_in present in the url.
  useEffect(() => {
    if (location.hash) {
      const params = new URLSearchParams(location.hash.substring(1));
      const token = params.get('access_token');
      const expiresIn = params.get('expires_in');

      if (token && expiresIn) {
        sessionStorage.setItem('access_token', token);
        sessionStorage.setItem('expires_in', expiresIn);
      }

      window.history.replaceState({}, '', location.pathname);
    }
  }, []);

  return (
    <Box
      height="100%"
      margin={{ initial: 's4 s6 s4 s6', ml: 's4' }}
    >
      {isWalletConnected && isRewardsLoading && (
        <Box
          display="flex"
          justifyContent="center"
          width="-webkit-fill-available"
          height="100%"
          alignItems="center"
          position="relative"
          css={css`
            z-index: 99;
          `}
        >
          <LoaderSpinner
            type={LOADER_TYPE}
            spinnerSize="36"
          />
        </Box>
      )}

      {!isRewardsLoading && (
        <Box
          flexDirection="column"
          display="flex"
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

          {activeTab === 'dashboard' && <ReferralSection />}
        </Box>
      )}

      <Box
        display="flex"
        justifyContent="center"
        width="-webkit-fill-available"
        height="100%"
        alignItems="center"
        css={css`
          z-index: 99999;
        `}
      >
        {userPushSDKInstance && userPushSDKInstance?.readmode() && showConnectModal && (
          <UnlockProfileWrapper
            type={UNLOCK_PROFILE_TYPE.MODAL}
            showConnectModal={showConnectModal}
          />
        )}
      </Box>
    </Box>
  );
};

export { Rewards };
