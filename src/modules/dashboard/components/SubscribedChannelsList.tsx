import { useState } from 'react';
import { css } from 'styled-components';

//Hooks
import { useGetUserSubscriptions } from 'queries';

// Components
import { Box, Separator } from 'blocks';
import { ChannelListItem } from './ChannelListItem';
import { EmptyChannelList } from './EmptyChannelList';
import UnlockProfileWrapper, { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfileWrapper';

import { ProfileModalVisibilityType } from 'common';

const SubscribedChannelsList = () => {
  const { data: subscribedChannels, isLoading, refetch, isSuccess } = useGetUserSubscriptions();

  // If there are channels then render them else render 5 skeletons
  const channelList = isLoading ? Array(5).fill(0) : subscribedChannels;

  // State to handle the profile modal
  const [profileModalVisibility, setProfileModalVisibility] = useState<ProfileModalVisibilityType>({
    isVisible: false,
    channel_id: null,
  });

  return (
    <>
      {isSuccess && !isLoading && !subscribedChannels?.length && (
        <EmptyChannelList
          heading="No Channels Subscribed"
          subHeading="Channels that you are subscribed to will show up here."
        />
      )}
      {channelList?.map((channel, index) => (
        <Box key={`${index}`}>
          <ChannelListItem
            channelAddress={channel.channel}
            isLoading={isLoading}
            refetchChannels={refetch}
            onChangeProfileModalVisibility={(data) => setProfileModalVisibility(data)}
            profileModalVisibility={profileModalVisibility}
          />
          {index != channelList.length - 1 && <Separator />}
        </Box>
      ))}

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
    </>
  );
};

export { SubscribedChannelsList };
