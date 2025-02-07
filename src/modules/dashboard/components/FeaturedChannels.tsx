// React + Web3 Essentials
import { FC, useState } from 'react';
import { css } from 'styled-components';

// Components
import { useDeviceWidthCheck } from 'hooks';
import { FeaturedChannelsList } from './FeaturedChannelsList';
import { FeaturedChannelsMobileViewList } from './FeaturedChannelsMobileViewList';
import { Box, deviceSizes } from 'blocks';
import UnlockProfileWrapper, { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfileWrapper';

// Internal Configs
import { featuredChannelsList, mobileFeaturedChannelsList } from '../configs';
import { appConfig } from 'config';
import { ProfileModalVisibilityType } from 'common';

export type FeaturedChannelsProps = {};

const FeaturedChannels: FC<FeaturedChannelsProps> = () => {
  const featureChannelsForCurrrentEnv = featuredChannelsList[appConfig.appEnv];

  const isMobile = useDeviceWidthCheck(parseInt(deviceSizes.mobileL));

  const showMobileAndTabletView = isMobile;

  // State to handle the profile modal
  const [profileModalVisibility, setProfileModalVisibility] = useState<ProfileModalVisibilityType>({
    isVisible: false,
    channel_id: null,
  });

  return (
    <Box
      borderRadius="radius-md"
      padding={{ ml: 'spacing-md spacing-sm', initial: 'spacing-md' }}
      display="flex"
      flexDirection="column"
      backgroundColor="surface-primary"
      gap={{ ml: 'spacing-sm', initial: 'spacing-xxs' }}
      alignItems="flex-start"
    >
      {showMobileAndTabletView ? (
        <FeaturedChannelsMobileViewList
          featuredChannelsList={mobileFeaturedChannelsList}
          onChangeProfileModalVisibility={(data) => setProfileModalVisibility(data)}
          profileModalVisibility={profileModalVisibility}
        />
      ) : (
        <FeaturedChannelsList
          featuredChannelsList={featureChannelsForCurrrentEnv}
          onChangeProfileModalVisibility={(data) => setProfileModalVisibility(data)}
          profileModalVisibility={profileModalVisibility}
        />
      )}

      {/* Render Unlock profile modal if the profile is not enabled */}
      {profileModalVisibility?.isVisible && (
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
            showConnectModal={true}
            onClose={() =>
              setProfileModalVisibility({
                isVisible: false,
                channel_id: null,
              })
            }
            description="Unlock your profile to proceed."
          />
        </Box>
      )}
    </Box>
  );
};

export { FeaturedChannels };
