// React + Web3 Essentials
import { FC } from 'react';

// Components
import { useSmoothHorizontalScroll } from 'common';
import { FeaturedNotificationChannelsList } from './FeaturedNotificationChannelsList';
import PrevIconSlider from 'blocks/icons/components/PrevIconSlider';
import NextIconSlider from 'blocks/icons/components/NextIconSlider';
import { Box, HoverableSVG, Text, Link, deviceSizes } from 'blocks';

// Internal Configs
import { FeaturedChannelsList, MobileFeaturedChannelsList } from '../configs';
import { appConfig } from 'config';
import { useDeviceWidthCheck } from 'hooks';
import MobileFeaturedNotificationChannelsList from './MobileFeaturedNotificationChannelsList';

export type FeaturedNotificationsComponentProps = {};

const FeaturedNotificationsComponent: FC<FeaturedNotificationsComponentProps> = () => {

  const UpdatedFeaturedChannelsList = FeaturedChannelsList[appConfig.appEnv];
  const MobileFeaturedChannelsListItems = MobileFeaturedChannelsList;

  const isTablet = useDeviceWidthCheck(parseInt(deviceSizes.laptop));
  const isMobile = useDeviceWidthCheck(parseInt(deviceSizes.tablet));

  const itemsPerPage = isMobile ? 1 : isTablet ? 2 : 3;

  const { currentIndex, handleNext, handlePrevious, listRef } = useSmoothHorizontalScroll({
    items: UpdatedFeaturedChannelsList,
    itemsPerPage,
    itemGap: 24, // Gap provided in between the list items
  });

  const handleClick: VoidFunction = () => {
    handleNext();
  };

  return (
    <Box
      borderRadius="24px"
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
              disabled={currentIndex + itemsPerPage >= UpdatedFeaturedChannelsList.length}
              icon={<NextIconSlider size={24} />}
            ></HoverableSVG>
          </Box>
        </Box>
      </Box>

      {!isMobile && <FeaturedNotificationChannelsList
        listRef={listRef}
        featuredChannelsList={UpdatedFeaturedChannelsList}
      />}

      {isMobile && (
        <MobileFeaturedNotificationChannelsList
          listRef={listRef}
          featuredChannelsList={MobileFeaturedChannelsListItems}
        />
      )}



    </Box>
  );
};

export { FeaturedNotificationsComponent };
