// React + Web3 Essentials
import { FC, useMemo, useState, useEffect } from 'react';

// External Packages
import { useSelector } from 'react-redux';
import { cloneDeep } from 'lodash';

// Internal Components
import { Box, Button, CaretDown, InboxBell, NotificationMobile, Text } from 'blocks';
import SubscribeChannelDropdown from 'common/components/SubscribeChannelDropdown';
import UnsubscribeChannelDropdown from 'common/components/UnsubscribeChannelDropdown';

// Internal Configs
import { ChannelDetailsProps } from '../configs/DashboardFeaturedChannels.config';


type FeaturedChannelListItemProps = {
  channel: ChannelDetailsProps,
}

const FeaturedChannelListItem: FC<FeaturedChannelListItemProps> = (props) => {

  const { channel } = props;

  const {
    subscriptionStatus,
    userSettings: currentUserSettings,
  } = useSelector((state) => state.channels);

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

  const [subscribed, setSubscribed] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(channel.subscriber_count);

  useEffect(() => {
    setSubscribed(subscriptionStatus[channel.channel]);
  }, [subscriptionStatus]);


  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Box display="flex" justifyContent="space-between" >
        <InboxBell color="primaryPink" size={52} />
        {!subscribed ? (
          <SubscribeChannelDropdown
            channelDetails={channel}
            setLoading={setIsLoading}
            setSubscribed={setSubscribed}
            setSubscriberCount={setSubscriberCount}
          >
            <Button disabled={isLoading} variant='tertiary' size='small'>Subscribe</Button>
          </SubscribeChannelDropdown>
        ) : (
          <UnsubscribeChannelDropdown
            channelDetail={channel}
            setSubscribed={setSubscribed}
            setSubscriberCount={setSubscriberCount}
            userSetting={userSettings[channel.channel]}
          >
            <Button
              variant='secondary'
              size='small'
              leadingIcon={<NotificationMobile size={20} />}
              trailingIcon={<CaretDown size={20} />}
            >Unsubscribe</Button>
          </UnsubscribeChannelDropdown>
        )}

      </Box>
      <Box display="flex" flexDirection="column" gap="s2">
        <Box>
          <Text variant="h5-semibold" color={{ light: "gray-1000", dark: 'gray-100' }}>
            {channel.name}
          </Text>
          <Text variant="c-regular" color={{ light: "gray-600", dark: 'gray-500' }}>
            {formatSubscriberCount(subscriberCount)} subscribers
          </Text>
        </Box>
        <Box>
          <Text variant="bs-regular" color={{ light: "gray-600", dark: 'gray-500' }}>
            {channel.info}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default FeaturedChannelListItem;