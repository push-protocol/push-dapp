// React + Web3 Essentials
import { FC } from 'react';

// Components
import { useDeviceWidthCheck } from 'hooks';
import { FeaturedChannelsList } from './FeaturedChannelsList';
import { FeaturedChannelsMobileViewList } from './FeaturedChannelsMobileViewList';
import { Box, deviceSizes } from 'blocks';

// Internal Configs
import { featuredChannelsList, mobileFeaturedChannelsList } from '../configs';
import { appConfig } from 'config';

export type FeaturedChannelsProps = {};

const FeaturedChannels: FC<FeaturedChannelsProps> = () => {
  const featureChannelsForCurrrentEnv = featuredChannelsList[appConfig.appEnv];

  const isMobile = useDeviceWidthCheck(parseInt(deviceSizes.mobileL));

  const showMobileAndTabletView = isMobile;

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
        <FeaturedChannelsMobileViewList featuredChannelsList={mobileFeaturedChannelsList} />
      ) : (
        <FeaturedChannelsList featuredChannelsList={featureChannelsForCurrrentEnv} />
      )}
    </Box>
  );
};

export { FeaturedChannels };
