// React and other libraries
import { FC } from 'react';

// third party libraries
import { useSelector } from 'react-redux';
import { css } from 'styled-components';
import { useSearchParams } from 'react-router-dom';

//Hooks
import { useRewardsTabs } from './hooks/useRewardsTabs';
import { useDiscordSession } from './hooks/useDiscordSession';
import { useRewardsAuth } from './hooks/useRewardsAuth';
import { useCreateRewardsUser } from './hooks/useCreateRewardsUser';

//Types
import { UserStoreType } from 'types';

//Components
import { Box, Text } from 'blocks';
import { RewardsTabsContainer } from './components/RewardsTabsContainer';
import UnlockProfileWrapper, { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfileWrapper';
import { useRewardsContext } from 'contexts/RewardsContext';

export type RewardsProps = {};

const Rewards: FC<RewardsProps> = () => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => state.user);

  //fetch ref from url
  const [searchParams] = useSearchParams();

  const ref = searchParams.get('ref');
  if (ref) sessionStorage.setItem('ref', ref);

  // Used to set the discord session after discord redirects back to the Dapp.
  useDiscordSession();

  const { activeTab, handleSetActiveTab } = useRewardsTabs();

  const { isAuthModalVisible } = useRewardsContext();

  const { connectUserWallet, hideAuthModal } = useRewardsAuth();

  useCreateRewardsUser();

  const heading = activeTab === 'leaderboard' ? 'Push Reward Points' : 'Introducing Push Reward Points Program';

  // retry unlock profile
  const handleUnlockProfile = () => {
    connectUserWallet();
  };

  return (
    <Box
      flexDirection="column"
      display="flex"
      width={{ initial: '100%', ml: '357px' }}
      gap="spacing-md"
      height="100%"
    >
      <Text
        variant="h3-bold"
        display={{ ml: 'none', initial: 'block' }}
        color="text-primary"
      >
        {heading}
      </Text>
      <Text
        variant="h4-semibold"
        display={{ ml: 'block', initial: 'none' }}
        color="text-primary"
      >
        {heading}
      </Text>

      <RewardsTabsContainer
        activeTab={activeTab}
        handleSetActiveTab={handleSetActiveTab}
        handleUnlockProfile={handleUnlockProfile}
      />

      {userPushSDKInstance && userPushSDKInstance?.readmode() && isAuthModalVisible && (
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
            showConnectModal={isAuthModalVisible}
            onClose={() => hideAuthModal()}
            description="Unlock your profile to proceed."
          />
        </Box>
      )}
    </Box>
  );
};

export { Rewards };
