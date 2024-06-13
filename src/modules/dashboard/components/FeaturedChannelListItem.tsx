// React + Web3 Essentials
import { FC, useMemo, useState, useEffect } from 'react';

// External Packages
import { useSelector } from 'react-redux';
import { cloneDeep } from 'lodash';

// Internal Components
import { Box, Button, CaretDown, HoverableSVG, InboxBell, NotificationMobile, Skeleton, Text } from 'blocks';
import SubscribeChannelDropdown from 'common/components/SubscribeChannelDropdown';
import UnsubscribeChannelDropdown from 'common/components/UnsubscribeChannelDropdown';

// Internal Configs
import { ChannelDetailsProps } from '../configs/DashboardFeaturedChannels.config';
import { useGetChannelDetails } from 'queries';
import { css } from 'styled-components';

type FeaturedChannelListItemProps = {
  channel: ChannelDetailsProps;
};

const FeaturedChannelListItem: FC<FeaturedChannelListItemProps> = (props) => {
  const { channel } = props;

  const { subscriptionStatus, userSettings: currentUserSettings } = useSelector((state) => state.channels);

  const userSettings = useMemo(() => {
    return cloneDeep(currentUserSettings);
  }, [currentUserSettings]);

  const formatSubscriberCount = (count: number) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    } else {
      return count;
    }
  };

  const { data: channelDetails, isLoading } = useGetChannelDetails(channel.channel);
  console.log('Channel Details in Featured channels >>>', channelDetails, isLoading);

  const [subscribed, setSubscribed] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(0);

  useEffect(() => {
    if (channelDetails) {
      console.log("Subscribe Count checking", channelDetails, channel.channel);
      setSubscribed(subscriptionStatus[channel.channel]);
      setSubscriberCount(channelDetails.subscriberCount);
    }
  }, [subscriptionStatus, channelDetails]);

  // const [isLoading, setIsLoading] = useState(false);

  const [loading, setLoading] = useState(false);



  return (
    <>

      <Box
        display="flex"
        flexDirection="column"
        border={{ light: '1px solid gray-200', dark: '1px solid gray-800' }}
        padding="s6"
        borderRadius="24px"
        gap="s3"
        maxWidth="-webkit-fill-available"
        width={{ tb: '-webkit-fill-available' }}
        css={css`
        flex: 1;
      `}
      >
        <Box display="flex" justifyContent="space-between">
          <Skeleton isLoading={isLoading}>
            <Box
              width="40px"
              height="40px"
              borderRadius="var(--r3)"
              css={css`
            overflow: hidden;
          `}
            >
              <img
                width="100%"
                height="100%"
                src={channelDetails?.icon}
                alt={channelDetails?.name}
              />
            </Box>

          </Skeleton>

          {!subscribed && !isLoading && (
            <SubscribeChannelDropdown
              channelDetails={channelDetails}
              setLoading={setLoading}
              setSubscribed={setSubscribed}
              setSubscriberCount={setSubscriberCount}
            >
              <Button disabled={isLoading} variant="tertiary" size="small">
                Subscribe
              </Button>
            </SubscribeChannelDropdown>
          )}

          {subscribed && !isLoading && (
            <UnsubscribeChannelDropdown
              channelDetail={channel}
              setSubscribed={setSubscribed}
              setSubscriberCount={setSubscriberCount}
              userSetting={userSettings[channel.channel]}
            >
              <Button
                variant="secondary"
                size="small"
                leadingIcon={<NotificationMobile size={20} />}
                trailingIcon={<CaretDown size={20} />}
              >
                Unsubscribe
              </Button>
            </UnsubscribeChannelDropdown>
          )}


          {/* {!subscribed ? (
            <SubscribeChannelDropdown
              channelDetails={channelDetails}
              setLoading={setLoading}
              setSubscribed={setSubscribed}
              setSubscriberCount={setSubscriberCount}
            >
              <Button disabled={isLoading} variant="tertiary" size="small">
                Subscribe
              </Button>
            </SubscribeChannelDropdown>
          ) : (
            <UnsubscribeChannelDropdown
              channelDetail={channel}
              setSubscribed={setSubscribed}
              setSubscriberCount={setSubscriberCount}
              userSetting={userSettings[channel.channel]}
            >
              <Button
                variant="secondary"
                size="small"
                leadingIcon={<NotificationMobile size={20} />}
                trailingIcon={<CaretDown size={20} />}
              >
                Unsubscribe
              </Button>
            </UnsubscribeChannelDropdown>
          )} */}
        </Box>
        <Box display="flex" flexDirection="column" gap="s2">
          <Box display='flex' flexDirection='column' gap='s1' >
            <Skeleton isLoading={isLoading} height='20px'>
              <Text variant="h5-semibold" color={{ light: 'gray-1000', dark: 'gray-100' }}>
                {channelDetails?.name}
              </Text>
            </Skeleton>
            <Skeleton isLoading={isLoading} height='20px'>
              <Text variant="c-regular" color={{ light: 'gray-600', dark: 'gray-500' }}>
                {formatSubscriberCount(subscriberCount)} subscribers
              </Text>
            </Skeleton>
          </Box>
          <Box>
            <Skeleton isLoading={isLoading} height='40px'>
              <Text variant="bs-regular" color={{ light: 'gray-600', dark: 'gray-500' }}>
                {channelDetails?.info}
              </Text>
            </Skeleton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FeaturedChannelListItem;
