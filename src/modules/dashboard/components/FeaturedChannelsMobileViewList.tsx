import { FC } from 'react';
import { FeaturedChannelDetailsProps } from '../configs';
import { Box } from 'blocks';
import { FeaturedChannelsListItem } from './FeaturedChannelsListItem';
import { css } from 'styled-components';

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
            css={css`
              flex-shrink: 0;
            `}
          >
            {channelListArray.map((channel: FeaturedChannelDetailsProps) => (
              <FeaturedChannelsListItem channelAddress={channel.channel} />
            ))}
          </Box>
        );
      })}
    </Box>
  );
};

export { FeaturedChannelsMobileViewList };
