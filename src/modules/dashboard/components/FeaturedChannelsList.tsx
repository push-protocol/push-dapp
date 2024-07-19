// React + Web3 Essentials
import { FC } from 'react';

//Third party libraries
import { css } from 'styled-components';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';

// Components
import { FeaturedChannelsListItem } from './FeaturedChannelsListItem';
import { Box, HoverableSVG, Text, Link, NextIconSlider, PrevIconSlider, deviceSizes } from 'blocks';

// Internal Configs
import { FeaturedChannelDetailsProps } from '../configs';
import { useFeaturedChannelsCarouselButtons } from '../hooks/useFeaturedChannelsCarouselButtons';
import { useDeviceWidthCheck } from 'hooks';

export type FeaturedChannelsListProps = {
  featuredChannelsList: FeaturedChannelDetailsProps[];
};

const FeaturedChannelsList: FC<FeaturedChannelsListProps> = ({ featuredChannelsList }) => {
  const isTablet = useDeviceWidthCheck(parseInt(deviceSizes.tablet));
  const isXsLaptop = useDeviceWidthCheck(parseInt(deviceSizes.laptop));

  const CarouselOptions: EmblaOptionsType = {
    slidesToScroll: isTablet || isXsLaptop ? 2 : 3,
    align: 'start',
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(CarouselOptions);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    useFeaturedChannelsCarouselButtons(emblaApi);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={{ tb: 'column' }}
        gap={{ tb: 'spacing-xs' }}
        width="100%"
      >
        <Text
          variant="h4-bold"
          color="text-primary"
        >
          Featured Notification Channels
        </Text>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="spacing-sm"
        >
          <Link
            to="/channels"
            textProps={{
              variant: 'h5-semibold',
              color: 'text-primary',
            }}
          >
            View All
          </Link>

          <Box
            display="flex"
            flexDirection="row"
          >
            {/* Previous Button  */}
            <HoverableSVG
              onClick={onPrevButtonClick}
              defaultColor="icon-primary"
              disabled={prevBtnDisabled}
              icon={<PrevIconSlider size={24} />}
            ></HoverableSVG>

            {/* Next button */}
            <HoverableSVG
              onClick={onNextButtonClick}
              defaultColor="icon-primary"
              disabled={nextBtnDisabled}
              icon={<NextIconSlider size={24} />}
            ></HoverableSVG>
          </Box>
        </Box>
      </Box>

      <Box width={{ initial: '67rem', tb: '42rem', lp: '42rem' }}>
        <Box
          css={css`
            overflow: hidden;
          `}
          ref={emblaRef}
        >
          <Box
            gap="spacing-md"
            display="flex"
            css={css`
              backface-visibility: hidden;
              touch-action: pan-y pinch-zoom;
            `}
          >
            {featuredChannelsList.map((channel) => (
              <FeaturedChannelsListItem channelAddress={channel.channel} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export { FeaturedChannelsList };
