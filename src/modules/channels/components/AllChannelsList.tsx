import { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { css } from 'styled-components';
import { Box, deviceMediaQ, Spinner } from 'blocks';
import { ChannelDetails } from 'queries';
import { AllChannelsListItem } from './AllChannelsListItem';
import { FrontendChannelListItem } from './FrontendChannelListItem';

export type AllChannelListProps = {
  channels: ChannelDetails[];
  hasMoreData: boolean;
  isLoading: boolean;
  isLoadingNextPage: boolean;
  loadMore: () => void;
  frontendChannels: Array<string>;
};

const AllChannelList: FC<AllChannelListProps> = ({
  channels,
  hasMoreData,
  isLoading,
  isLoadingNextPage,
  loadMore,
  frontendChannels,
}) => {
  return (
    <Box
      height="100%"
      overflow="auto"
      customScrollbar={true}
      padding="spacing-none spacing-xxs"
      margin={{ initial: 'spacing-none spacing-sm', ml: 'spacing-none spacing-xxs' }}
      css={css`
        .channel-scroll {
          display: grid;
          gap: var(--spacing-md);
          grid-template-columns: repeat(3, minmax(0px, 1fr));

          @media${deviceMediaQ.tablet} {
            grid-template-columns: repeat(2, minmax(0px, 1fr));
          }
          @media${deviceMediaQ.mobileL} {
            grid-template-columns: repeat(1, minmax(0px, 1fr));
          }
        }
      `}
    >
      <InfiniteScroll
        pageStart={1}
        loadMore={loadMore}
        hasMore={hasMoreData}
        useWindow={false}
        threshold={150}
        className="channel-scroll"
      >
        {frontendChannels.map((channel: string) => (
          <FrontendChannelListItem
            channelAddress={channel}
            key={`${channel}`}
          />
        ))}
        {channels.map((channel: ChannelDetails, index: number) => (
          <AllChannelsListItem
            key={`${index}`}
            channelDetails={channel}
            isLoading={isLoading}
          />
        ))}
      </InfiniteScroll>
      {isLoadingNextPage && (
        <Box
          justifyContent="center"
          display="flex"
          padding="spacing-sm"
        >
          <Spinner
            size="medium"
            variant="primary"
          />
        </Box>
      )}
    </Box>
  );
};

export { AllChannelList };
