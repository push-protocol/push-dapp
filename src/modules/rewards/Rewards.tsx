// React and other libraries
import { FC } from 'react';

// third party libraries
import { useSelector } from 'react-redux';
import { css } from 'styled-components';
import { useSearchParams } from 'react-router-dom';

//Hooks
import { useRewardsTabs } from './hooks/useRewardsTabs';
import { useDiscordSession } from './hooks/useDiscordSession';
import { handleRewardsAuth } from './hooks/handleRewardsAuth';
import { handleCreateRewardsUser } from './hooks/handleCreateUser';

//Types
import { UserStoreType } from 'types';

//Components
import { Box, Text } from 'blocks';
import { ReferralSection } from './components/ReferralSection';
import { RewardsTabsContainer } from './components/RewardsTabsContainer';
import UnlockProfileWrapper, { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfileWrapper';

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

  const { showConnectModal } = handleRewardsAuth();
  handleCreateRewardsUser();

  // const userMessage = 'Error decrypting PGP private key ...swiching to Guest mode';

  // reject signature
  // const hasError =
  //   userPushSDKInstance?.errors.some((error) => error.type === 'ERROR' && error.message === userMessage);

  // useEffect(() => {
  //   if (hasError && isWalletConnected) {
  //     //   setShowConnectModal(false);
  //   }
  // }, [userPushSDKInstance, showConnectModal, hasError]);

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
            description="Unlock your profile to proceed."
          />
        </Box>
      )}
    </Box>
  );
};

export { Rewards };
