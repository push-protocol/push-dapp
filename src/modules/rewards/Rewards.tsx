// React and other libraries
import { FC, useEffect } from 'react';

// third party libraries
import { css } from 'styled-components';
import { useSelector } from 'react-redux';

//Hooks
import { useAccount } from 'hooks';
import { useRewardsTabs } from './hooks/useRewardsTabs';
import { useGenerateUserId } from './hooks/useGenerateUserId';
import { useDiscordSession } from './hooks/useDiscordSession';

//Types
import { UserStoreType } from 'types';
import { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfile';

//helpers
import { walletToCAIP10 } from 'helpers/w2w';

//Components
import { Box, Text } from 'blocks';
import { ReferralSection } from './components/ReferralSection';
import { RewardsTabsContainer } from './components/RewardsTabsContainer';
import UnlockProfileWrapper from 'components/chat/unlockProfile/UnlockProfileWrapper';

export type RewardsProps = {};

const Rewards: FC<RewardsProps> = () => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  const { account } = useAccount();

  const caip10WalletAddress = walletToCAIP10({ account });

  // Used to set the discord session after discord redirects back to the Dapp.
  useDiscordSession();

  const { activeTab, handleSetActiveTab } = useRewardsTabs();

  const { showConnectModal, setConnectModalVisibility } = useGenerateUserId(caip10WalletAddress);

  useEffect(() => {
    if (activeTab !== 'activity') {
      setConnectModalVisibility(false);
    }

    if (activeTab === 'activity' && userPushSDKInstance && userPushSDKInstance.readmode()) {
      setConnectModalVisibility(true);
    }
  }, [activeTab, account, userPushSDKInstance]);

  const heading = activeTab === 'leaderboard' ? 'Push Reward Points' : 'Introducing Push Reward Points Program';

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

        {activeTab === 'dashboard' && <ReferralSection />}
      </Box>

      {userPushSDKInstance && userPushSDKInstance?.readmode() && showConnectModal && (
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
