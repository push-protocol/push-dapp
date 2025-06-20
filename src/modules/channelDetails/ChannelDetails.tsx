import { css } from 'styled-components';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useGetChannelDetails, useGetChannelslist } from 'queries';

import { ChannelDetail } from './components/ChannelDetail';
import { ChannelList } from './components/ChannelList';
import { Box } from 'blocks';
import { ProfileModalVisibilityType } from 'common';

import { isAddress } from 'ethers/lib/utils';
import APP_PATHS from 'config/AppPaths';

import UnlockProfileWrapper, { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfileWrapper';

const ChannelDetails: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedChannelId, setSelectedChannelId] = useState<string>(id || '');
  // State to handle the profile modal
  const [profileModalVisibility, setProfileModalVisibility] = useState<ProfileModalVisibilityType>({
    isVisible: false,
    channel_id: null,
  });

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useGetChannelslist({
    pageSize: 15,
  });
  const { data: channelDetail } = useGetChannelDetails(id || '');

  const channelsList = isLoading ? Array(10).fill(0) : data?.pages.flatMap((page) => page.channels) || [];
  const hasMoreData = !isFetchingNextPage && hasNextPage;

  const selectedChannel = channelsList?.find((channel) => channel?.channel === selectedChannelId) || channelDetail;

  /* Redirects to /channels page if the channel address is invalid*/
  useEffect(() => {
    if (!isAddress(id || '')) navigate(APP_PATHS.Channels);
  }, [id]);

  return (
    channelsList?.length && (
      <Box
        width="-webkit-fill-available"
        padding={{ initial: 'spacing-md spacing-none spacing-none spacing-sm', ml: 'spacing-none' }}
        display="flex"
        height="100%"
        justifyContent="flex-start"
        borderRadius="radius-md radius-md radius-none radius-none"
        gap="spacing-md"
        border="border-sm solid stroke-secondary"
        backgroundColor="surface-primary"
      >
        <ChannelList
          channels={channelsList}
          fetchNextPage={fetchNextPage}
          hasMoreData={hasMoreData}
          isLoading={isLoading}
          setSelectedChannelId={setSelectedChannelId}
          isFetchingNextPage={isFetchingNextPage}
        />
        <ChannelDetail
          channel={selectedChannel}
          isLoading={isLoading}
          onChangeProfileModalVisibility={(data) => setProfileModalVisibility(data)}
          profileModalVisibility={profileModalVisibility}
        />

        {/* Render Unlock profile modal if the profile is not enabled */}
        {profileModalVisibility?.isVisible && (
          <Box
            display="flex"
            justifyContent="center"
            width="-webkit-fill-available"
            alignItems="center"
            css={css`
              z-index: 99999;
            `}
          >
            <UnlockProfileWrapper
              type={UNLOCK_PROFILE_TYPE.MODAL}
              showConnectModal={true}
              onClose={() =>
                setProfileModalVisibility({
                  isVisible: false,
                  channel_id: null,
                })
              }
              description="Unlock your profile to proceed."
            />
          </Box>
        )}
      </Box>
    )
  );
};

export { ChannelDetails };
