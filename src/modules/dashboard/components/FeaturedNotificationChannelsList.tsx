// React + Web3 Essentials
import { FC } from 'react';

// Components
import { FeaturedNotificationChannelsListItem } from './FeaturedNotificationChannelsListItem';
import { Box } from 'blocks';

// Internal Configs
import { FeaturedChannelDetailsProps } from '../configs';
import { css } from 'styled-components';

type FeaturedNotificationChannelsListProps = {
  listRef: any;
  featuredChannelsList?: FeaturedChannelDetailsProps[];
}

const FeaturedNotificationChannelsList: FC<FeaturedNotificationChannelsListProps> = ({
  listRef,
  featuredChannelsList
}) => {

  return (
    <Box
      ref={listRef}
      display="flex"
      flexDirection={{ initial: 'row', tb: 'column' }}
      gap="s6"
      padding='s4 s0'
      overflow="scroll"
      width={{ initial: 'calc(100vw - 346px)', lp: 'calc(100vw - 130px)' }}
      css={css`overflow-Y:hidden;`}
    >
      {featuredChannelsList?.map((channel) => {
        return <FeaturedNotificationChannelsListItem
          channelAddress={channel.channel}
        />;
      })}
    </Box>
  );
};

export { FeaturedNotificationChannelsList };