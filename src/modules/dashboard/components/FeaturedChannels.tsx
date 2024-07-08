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

  const isTablet = useDeviceWidthCheck(parseInt(deviceSizes.tablet));
  const isMobile = useDeviceWidthCheck(parseInt(deviceSizes.mobileL));

  const showMobileAndTabletView = isMobile || isTablet;

  return (
    <Box
      borderRadius="r6"
      padding={{ ml: 's6 s4', initial: 's6' }}
      display="flex"
      flexDirection="column"
      backgroundColor={{ light: 'darkWhite', dark: 'gray-900' }}
      gap={{ ml: 's4', initial: 's2' }}
    >

      {showMobileAndTabletView ? (
        <FeaturedChannelsMobileViewList
          featuredChannelsList={mobileFeaturedChannelsList}
        />

      ) : (
        <FeaturedChannelsList
          featuredChannelsList={featureChannelsForCurrrentEnv}
        />
      )}

    </Box>
  );
};

export { FeaturedChannels };
