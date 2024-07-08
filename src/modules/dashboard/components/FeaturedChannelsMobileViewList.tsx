// React + Web3 Essentials
import { FC } from 'react';

//Third party libraries
import { css } from 'styled-components';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';

// Components
import { Box, HoverableSVG, Text, Link, NextIconSlider, PrevIconSlider } from 'blocks';
import { FeaturedChannelsListItem } from './FeaturedChannelsListItem';

// Hooks
import { useFeaturedChannelsCarouselButtons } from '../hooks/useFeaturedChannelsCarouselButtons';

// Internal Configs
import { FeaturedChannelDetailsProps } from '../configs';

export type FeaturedChannelsMobileViewListProps = {
  featuredChannelsList: FeaturedChannelDetailsProps[][];
};

const FeaturedChannelsMobileViewList: FC<FeaturedChannelsMobileViewListProps> = ({ featuredChannelsList }) => {
  const CarouselOptions: EmblaOptionsType = {
    slidesToScroll: 'auto',
    align: 'start',
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(CarouselOptions);

  //Initiating Carousel Buttons
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    useFeaturedChannelsCarouselButtons(emblaApi);

  return (
    <>
      {/* Featured Channels Header with Buttons */}
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
            {/* Previous Button  */}
            <HoverableSVG
              onClick={onPrevButtonClick}
              defaultColor={{ light: 'gray-900', dark: 'gray-400' }}
              disabled={prevBtnDisabled}
              icon={<PrevIconSlider size={24} />}
            ></HoverableSVG>

            {/* Next button */}
            <HoverableSVG
              onClick={onNextButtonClick}
              defaultColor={{ light: 'gray-900', dark: 'gray-400' }}
              disabled={nextBtnDisabled}
              icon={<NextIconSlider size={24} />}
            ></HoverableSVG>
          </Box>
        </Box>
      </Box>

      {/* Featured Channels Carousel */}
      <Box
        width="20rem"
        css={css`
          overflow: hidden;
        `}
        ref={emblaRef}
      >
        <Box
          gap="s6"
          display="flex"
          css={css`
            backface-visibility: hidden;
            touch-action: pan-y pinch-zoom;
          `}
        >
          {featuredChannelsList.map((channelListArray) => {
            return (
              <Box
                css={css`
                  flex: 0 0 100%;
                `}
                gap="s6"
                display="flex"
                flexDirection="column"
              >
                {channelListArray.map((channel: FeaturedChannelDetailsProps) => (
                  <FeaturedChannelsListItem channelAddress={channel.channel} />
                ))}
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export { FeaturedChannelsMobileViewList };
