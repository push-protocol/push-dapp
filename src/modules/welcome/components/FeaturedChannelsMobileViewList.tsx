import { Box } from 'blocks';
import { FC } from 'react';
import { css } from 'styled-components';
import { FeaturedChannelDetailsProps } from '../configs';
import { FeaturedChannelsListItem } from './FeaturedChannelsListItem';

export type FeaturedChannelsMobileViewListProps = {
  listRef: any;
  featuredChannelsList: FeaturedChannelDetailsProps[][];
};

const FeaturedChannelsMobileViewList: FC<FeaturedChannelsMobileViewListProps> = ({ listRef, featuredChannelsList }) => {
  return (
    <Box
      ref={listRef}
      display="flex"
      flexDirection="row"
      gap="s8"
      padding="s4 s0"
      overflow="scroll"
      width={{
        ms: 'calc(100vw - -12px)',
        mm: 'calc(100vw - 42px)',
        ml: 'calc(100vw - 60px)',
        tb: 'calc(100vw - 100px);',
      }}
    >
      {featuredChannelsList.map((channelListArray: any) => {
        return (
          <Box
            display="flex"
            flexDirection="column"
            gap="s6"
            width={{ mm: 'inherit', ms: 'inherit', ml: 'inherit', tb: '48%' }}
            overflow="hidden"
            css={css`
              flex-shrink: 0;
            `}
          >
            {channelListArray.map((channel: FeaturedChannelDetailsProps) => (
              <FeaturedChannelsListItem
                channelAddress={channel.channel}
                width="-webkit-fill-available"
              />
            ))}
          </Box>
        );
      })}
    </Box>
  );
};

export { FeaturedChannelsMobileViewList };
