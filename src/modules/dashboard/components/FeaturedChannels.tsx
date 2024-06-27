// React + Web3 Essentials
import { FC } from 'react';

// Components
import { useSmoothHorizontalScroll } from 'common';
import { useDeviceWidthCheck } from 'hooks';
import { FeaturedChannelsList } from './FeaturedChannelsList';
import { FeaturedChannelsMobileViewList } from './FeaturedChannelsMobileViewList';
import { Box, HoverableSVG, Text, Link, deviceSizes, NextIconSlider, PrevIconSlider } from 'blocks';

// Internal Configs
import { featuredChannelsList, mobileFeaturedChannelsList } from '../configs';
import { appConfig } from 'config';

export type FeaturedChannelsProps = {};

const FeaturedChannels: FC<FeaturedChannelsProps> = () => {
  const featureChannelsForCurrrentEnv = featuredChannelsList[appConfig.appEnv];

  const isTablet = useDeviceWidthCheck(parseInt(deviceSizes.tablet));
  const isMobile = useDeviceWidthCheck(parseInt(deviceSizes.mobileL));

  const itemsPerPage = isMobile ? 1 : isTablet ? 2 : 3;

  const showMobileAndTabletView = isMobile || isTablet;

  const applicableFeaturedChannels = showMobileAndTabletView
    ? mobileFeaturedChannelsList
    : featureChannelsForCurrrentEnv;

  const { currentIndex, handleNext, handlePrevious, listRef } = useSmoothHorizontalScroll({
    items: applicableFeaturedChannels,
    itemsPerPage,
    itemGap: isMobile || isTablet ? 32 : 24, // Gap provided in between the list items
  });

  const handleClick: VoidFunction = () => {
    handleNext();
  };

  return (
    <Box
      borderRadius="r6"
      padding={{ ml: 's6 s4', initial: 's6' }}
      display="flex"
      flexDirection="column"
      backgroundColor={{ light: 'darkWhite', dark: 'gray-900' }}
      gap={{ ml: 's4', initial: 's2' }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={{ tb: 'column' }}
        gap={{ tb: 's3' }}
      >
        <Text
          variant="h4-bold"
          color={{ light: 'black', dark: 'white' }}
        >
          Featured Notification Channels
        </Text>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="s4"
        >
          <Link
            to="/channels"
            textProps={{
              variant: 'h5-semibold',
              color: { light: 'black', dark: 'white' },
            }}
          >
            View All
          </Link>

          <Box
            display="flex"
            flexDirection="row"
          >
            <HoverableSVG
              onClick={handlePrevious}
              defaultColor={{ light: 'gray-900', dark: 'gray-400' }}
              disabled={currentIndex === 0}
              icon={<PrevIconSlider size={24} />}
            ></HoverableSVG>
            <HoverableSVG
              onClick={handleClick}
              defaultColor={{ light: 'gray-900', dark: 'gray-400' }}
              disabled={currentIndex + itemsPerPage >= applicableFeaturedChannels.length}
              icon={<NextIconSlider size={24} />}
            ></HoverableSVG>
          </Box>
        </Box>
      </Box>

      {showMobileAndTabletView ? (
        <FeaturedChannelsMobileViewList
          listRef={listRef}
          featuredChannelsList={mobileFeaturedChannelsList}
        />
      ) : (
        <FeaturedChannelsList
          listRef={listRef}
          featuredChannelsList={featureChannelsForCurrrentEnv}
        />
      )}
    </Box>
  );
};

export { FeaturedChannels };
