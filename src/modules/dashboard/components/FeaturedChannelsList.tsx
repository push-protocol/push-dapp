// React + Web3 Essentials
import { FC } from 'react';

//Third party libraries
import { css } from 'styled-components';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';

// Components
import { FeaturedChannelsListItem } from './FeaturedChannelsListItem';
import { Box, HoverableSVG, Text, Link, NextIconSlider, PrevIconSlider } from 'blocks';

// Internal Configs
import { FeaturedChannelDetailsProps } from '../configs';
import { useFeaturedChannelsCarouselButtons } from '../hooks/useFeaturedChannelsCarouselButtons';

export type FeaturedChannelsListProps = {
  featuredChannelsList: FeaturedChannelDetailsProps[];
};

const FeaturedChannelsList: FC<FeaturedChannelsListProps> = ({ featuredChannelsList }) => {
  const CarouselOptions: EmblaOptionsType = {
    slidesToScroll: 3,
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

      <Box
        width="-webkit-fill-available"
        css={css`
          margin: auto;
        `}
      >
        <Box
          css={css`
            overflow: hidden;
            padding: 0px 10px;
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
