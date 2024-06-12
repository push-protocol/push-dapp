import { BellRingFilled, Box, Button, CaretDown, CaretUp, HoverableSVG, IconWrapper, InboxBell, NotificationMobile, Text } from 'blocks';
import { FeaturedNotificationChannels } from '../configs/DashboardFeaturedChannels.config';
import { useSmoothCarousel } from 'common';
import NextIconSlider from 'blocks/icons/components/NextIconSlider';
import PrevIconSlider from 'blocks/icons/components/PrevIconSlider';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import FeaturedChannelListItem from './FeaturedChannelListItem';
import { useDeviceWidthCheck } from 'hooks';

const FeaturedNotificationComponent = () => {

  const { mode } = useBlocksTheme();

  const itemsPerPage = 3;

  const { currentIndex, handleNext, handlePrevious, listRef, visibleItems } = useSmoothCarousel({
    items: FeaturedNotificationChannels,
    itemsPerPage
  });


  const handleClick: VoidFunction = () => {
    console.log("CLicked");
    handleNext();
  }

  return (
    <Box
      borderRadius="24px"
      padding="s6"
      display="flex"
      flexDirection="column"
      backgroundColor={{ light: "dark-white", dark: 'gray-900' }}
      gap={{ ml: 's4', initial: 's2' }}
    >
      <Box display="flex" justifyContent="space-between" flexDirection={{ tb: 'column' }} gap={{ tb: 's3' }}>
        <Text variant="h4-bold" color={{ light: 'black', dark: 'white' }}>Featured Notification Channels</Text>

        <Box display="flex" flexDirection="row" alignItems='center' gap='s4'>
          <Text variant="h5-semibold" color={{ light: 'black', dark: 'white' }}>View All</Text>

          <Box display='flex' flexDirection='row'>
            <HoverableSVG
              onClick={handlePrevious}
              // defaultColor={currentIndex === 0 ? mode === 'dark' ? 'gray-300' : '' : 'gray-900'}
              defaultColor={mode === 'dark' ? 'gray-400' : 'gray-900'}
              disabled={currentIndex === 0}
              icon={<PrevIconSlider size={24} />}>
            </HoverableSVG>
            <HoverableSVG
              onClick={handleClick}
              // defaultColor={currentIndex + itemsPerPage >= FeaturedNotificationChannels.length ? 'gray-300' : 'gray-900'}
              defaultColor={mode === 'dark' ? 'gray-400' : 'gray-900'}
              disabled={currentIndex + itemsPerPage >= FeaturedNotificationChannels.length}
              icon={<NextIconSlider size={24} />}
            >
            </HoverableSVG>

          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection={{ initial: "row", tb: 'column' }}
        gap="s6"
        ref={listRef}
        width='100%'
      >

        {visibleItems.map((channel) => {
          return (
            <>
              <Box
                display="flex"
                flexDirection="column"
                border="1px solid var(--gray-200)"
                // border={{light:"1px solid var(--gray-200)",dark:"1px solid var(--gray-200)"}}
                padding="s6"
                borderRadius="24px"
                gap="s3"
                minWidth="320px"
                width={{ tb: '-webkit-fill-available' }}
              // maxWidth="290px"
              >
                <FeaturedChannelListItem channel={channel} />
              </Box>
            </>
          );
        })}

      </Box>
    </Box>
  );
};

export default FeaturedNotificationComponent;
