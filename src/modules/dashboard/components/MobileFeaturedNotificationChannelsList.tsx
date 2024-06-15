import { FC } from 'react';
import { FeaturedChannelDetailsProps } from '../configs';
import { Box } from 'blocks';
import { FeaturedNotificationChannelsListItem } from './FeaturedNotificationChannelsListItem';
import { css } from 'styled-components';

type MobileFeaturedNotificationChannelsListProps = {
  listRef: any;
  featuredChannelsList: FeaturedChannelDetailsProps[][];
}

const MobileFeaturedNotificationChannelsList: FC<MobileFeaturedNotificationChannelsListProps> = ({
  listRef,
  featuredChannelsList
}) => {
  return (
    <Box
      ref={listRef}
      display="flex"
      flexDirection='row'
      gap="s8"
      padding='s4 s0'
      overflow="scroll"
      // width='100%'
      width={{ initial: 'calc(100vw - 150px)', ml: 'calc(100vw - 60px)' }}
      css={css`margin:auto;`}
    >
      {featuredChannelsList.map((channelListArray: any) => {
        return (
          <Box display='flex' flexDirection='column' gap='s8'
            width='inherit'
          >
            {channelListArray.map((channel: FeaturedChannelDetailsProps) => (
              <FeaturedNotificationChannelsListItem
                channelAddress={channel.channel}
                isMobile={true}
              />
            ))}
          </Box>
        )
      })}

    </Box>
  );
};

export default MobileFeaturedNotificationChannelsList;