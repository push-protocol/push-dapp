// React + Web3 Essentials
import { FC } from 'react';

// Components
import { FeaturedChannelsListItem } from './FeaturedChannelsListItem';
import { Box } from 'blocks';

// Internal Configs
import { FeaturedChannelDetailsProps } from '../configs';

type FeaturedNotificationChannelsListProps = {
  listRef: any;
  featuredChannelsList: FeaturedChannelDetailsProps[];
};

const FeaturedNotificationChannelsList: FC<FeaturedNotificationChannelsListProps> = ({
  listRef,
  featuredChannelsList,
}) => (
  <Box
    ref={listRef}
    display="flex"
    flexDirection={{ initial: 'row', tb: 'column' }}
    gap="s6"
    padding="s4 s0"
    overflow="scroll"
    width={{ initial: 'calc(100vw - 346px)' }}
  >
    {featuredChannelsList.map((channel) => {
      return <FeaturedChannelsListItem channelAddress={channel.channel} />;
    })}
  </Box>
);

export { FeaturedNotificationChannelsList };
