// React + Web3 Essentials
import { FC } from 'react';

// Components
import { FeaturedChannelsListItem } from './FeaturedChannelsListItem';
import { Box } from 'blocks';

// Internal Configs
import { FeaturedChannelDetailsProps } from '../configs';
import { css } from 'styled-components';

export type FeaturedChannelsListProps = {
  listRef: any;
  featuredChannelsList: FeaturedChannelDetailsProps[];
};

const FeaturedChannelsList: FC<FeaturedChannelsListProps> = ({ listRef, featuredChannelsList }) => {
  return (
    <Box
      ref={listRef}
      display="flex"
      flexDirection={{ initial: 'row', tb: 'column' }}
      gap="s6"
      padding="s4 s0"
      overflow="scroll"
      css={css`
        overflow-y: scroll;
      `}
    >
      {featuredChannelsList?.map((channel) => {
        return <FeaturedChannelsListItem channelAddress={channel.channel} />;
      })}
    </Box>
  );
};

export { FeaturedChannelsList };
