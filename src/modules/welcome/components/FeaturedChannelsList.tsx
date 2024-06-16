// React + Web3 Essentials
import { FC } from 'react';

// Components
import { Box } from 'blocks';
import { FeaturedChannelsListItem } from './FeaturedChannelsListItem';

// Internal Configs
import { css } from 'styled-components';
import { FeaturedChannelDetailsProps } from '../configs';

export type FeaturedChannelsListProps = {
  listRef: any;
  featuredChannelsList: FeaturedChannelDetailsProps[];
  projectedItemWidth: number;
};

const FeaturedChannelsList: FC<FeaturedChannelsListProps> = ({ listRef, featuredChannelsList, projectedItemWidth }) => {
  return (
    <Box
      ref={listRef}
      display="flex"
      flexDirection={{ initial: 'row', tb: 'column' }}
      gap="s6"
      padding="s4 s0"
      overflow="hidden"
      css={css`
        overflow-y: scroll;
      `}
    >
      {featuredChannelsList?.map((channel) => {
        return (
          <FeaturedChannelsListItem
            channelAddress={channel.channel}
            // client width without the item gap
            width={`${projectedItemWidth - 66}px`}
          />
        );
      })}
    </Box>
  );
};

export { FeaturedChannelsList };
