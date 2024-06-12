import { Box, Button, CaretDown, InboxBell, NotificationMobile, Text } from 'blocks';
import { FeaturedNotificationChannelsProps } from '../configs/DashboardFeaturedChannels.config';

type FeaturedChannelListItemProps = {
  channel: FeaturedNotificationChannelsProps,
}

const FeaturedChannelListItem = ({
  channel,
}: FeaturedChannelListItemProps) => {

  const formatSubscriberCount = (count: number) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    } else {
      return count;
    }
  };


  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <InboxBell color="primaryPink" size={52} />
        <Button
          size="small"
          variant="secondary"
          leadingIcon={<NotificationMobile size={20} />}
          trailingIcon={<CaretDown size={20} />}
        >
          Subscribe
        </Button>
      </Box>
      <Box display="flex" flexDirection="column" gap="s2">
        <Box>
          <Text variant="h5-semibold" color={{ light: "gray-1000", dark: 'gray-100' }}>
            {channel.channelName}
          </Text>
          <Text variant="c-regular" color={{ light: "gray-600", dark: 'gray-500' }}>
            {formatSubscriberCount(channel.subscribersCount)} subscribers
          </Text>
        </Box>
        <Box>
          <Text variant="bs-regular" color={{ light: "gray-600", dark: 'gray-500' }}>
            {channel.channelDescription}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default FeaturedChannelListItem;