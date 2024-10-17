import { FC } from 'react';

import { useAccount } from 'hooks';
import { ChannelDetails, useGetUserSubscriptions } from 'queries';

import { Button, CaretDown, NotificationMobile, Skeleton } from 'blocks';
import { SubscribeChannelDropdown, UnsubscribeChannelDropdown } from 'common';

import { UserSetting } from 'helpers/channel/types';

export type ChannelDetailSubscribeProps = {
  channel: ChannelDetails;
};

const ChannelDetailSubscribe: FC<ChannelDetailSubscribeProps> = ({ channel }) => {
  const { wallet } = useAccount();

  const isWalletConnected = !!wallet?.accounts?.length;
  const {
    data: userSubscription,
    refetch: refetchUserSubscription,
    isLoading: isSubscriptionLoading,
  } = useGetUserSubscriptions(channel?.channel, {
    enabled: isWalletConnected,
  });
  const isSubscribed = userSubscription && userSubscription?.length;

  const handleRefetch = () => {
    refetchUserSubscription();
  };
  return (
    <Skeleton isLoading={isSubscriptionLoading}>
      {channel && !isSubscribed && (
        <SubscribeChannelDropdown
          channelDetails={channel}
          onSuccess={handleRefetch}
        >
          <Button
            variant="tertiary"
            size="small"
            block
          >
            Subscribe
          </Button>
        </SubscribeChannelDropdown>
      )}

      {channel && !!isSubscribed && (
        <UnsubscribeChannelDropdown
          channelDetail={channel}
          onSuccess={handleRefetch}
          userSetting={JSON.parse(userSubscription[0].user_settings) as UserSetting[]}
        >
          <Button
            variant="secondary"
            size="small"
            block
            leadingIcon={<NotificationMobile />}
            trailingIcon={<CaretDown />}
          >
            Subscribed
          </Button>
        </UnsubscribeChannelDropdown>
      )}
    </Skeleton>
  );
};

export { ChannelDetailSubscribe };
