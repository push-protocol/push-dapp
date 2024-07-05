// React and other libraries
import { FC, useEffect } from 'react';

// third party libraries
import { useSelector } from 'react-redux';
import { css } from 'styled-components';

//Hooks
import { useAccount } from 'hooks';
import { useRewardsTabs } from './hooks/useRewardsTabs';
import { useDiscordSession } from './hooks/useDiscordSession';
import { useGenerateUserId } from './hooks/useGenerateUserId';

//Types
import { UserStoreType } from 'types';

//helpers
import { walletToCAIP10 } from 'helpers/w2w';

//Components
import { Box, Text } from 'blocks';
import { ReferralSection } from './components/ReferralSection';
import { RewardsTabsContainer } from './components/RewardsTabsContainer';
import UnlockProfileWrapper, { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfileWrapper';
import { useContext } from 'react';
import { AppContext } from 'contexts/AppContext';
import { AppContextType } from 'types/context';

export type RewardsProps = {};

const Rewards: FC<RewardsProps> = () => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const { account, isWalletConnected } = useAccount();
  const { isUserProfileUnlocked } = useContext<AppContextType>(AppContext);

  const caip10WalletAddress = walletToCAIP10({ account });

  // Used to set the discord session after discord redirects back to the Dapp.
  useDiscordSession();

  const { activeTab, handleSetActiveTab } = useRewardsTabs();

  const { showConnectModal, setConnectModalVisibility, unlockUser, handleCreateUser, isPending } =
    useGenerateUserId(caip10WalletAddress);

  useEffect(() => {
    //   if (activeTab !== 'activity') {
    setConnectModalVisibility(false);
    //   }

    // if (activeTab === 'activity' && userPushSDKInstance && userPushSDKInstance.readmode()) {
    //   setConnectModalVisibility(true);
    // }

    // if (isUserProfileUnlocked && userPushSDKInstance) {
    //   handleCreateUser;
    // }
  }, [account, userPushSDKInstance]);

  useEffect(() => {
    if (isUserProfileUnlocked && userPushSDKInstance) {
      handleCreateUser();
    }
  }, [userPushSDKInstance, isUserProfileUnlocked]);

  const heading = activeTab === 'leaderboard' ? 'Push Reward Points' : 'Introducing Push Reward Points Program';

  // const handleUser = useCallback(() => {
  const handleUser = () => {
    if (isUserProfileUnlocked) {
      handleCreateUser();
    } else {
      unlockUser();
    }
  };

  // console.log(SHA256(account).toString().slice(0, 7));

  return (
    <Box
      height="100%"
      width="-webkit-fill-available"
    >
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

        {activeTab === 'dashboard' && (
          <ReferralSection
            generateUser={handleUser}
            isPending={isPending}
          />
        )}
      </Box>

      {isWalletConnected && userPushSDKInstance && userPushSDKInstance?.readmode() && showConnectModal && (
        <Box
          display="flex"
          justifyContent="center"
          width="-webkit-fill-available"
          alignItems="center"
          css={css`
            z-index: 99999;
          `}
        >
          <UnlockProfileWrapper
            type={UNLOCK_PROFILE_TYPE.MODAL}
            showConnectModal={showConnectModal}
          />
        </Box>
      )}
    </Box>
  );
};

export { Rewards };
