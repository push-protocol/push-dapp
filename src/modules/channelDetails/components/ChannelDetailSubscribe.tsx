import { FC } from 'react';

import { useAccount } from 'hooks';
import { ChannelDetails, useGetUserSubscriptions } from 'queries';

import { Button, CaretDown, NotificationMobile, Skeleton } from 'blocks';
import { ProfileModalVisibilityType, SubscribeChannelDropdown, UnsubscribeChannelDropdown } from 'common';

import { UserSetting } from 'helpers/channel/types';

export type ChannelDetailSubscribeProps = {
  channel: ChannelDetails;
  onChangeProfileModalVisibility?: (value: ProfileModalVisibilityType) => void;
  profileModalVisibility?: ProfileModalVisibilityType;
};

const ChannelDetailSubscribe: FC<ChannelDetailSubscribeProps> = ({
  channel,
  onChangeProfileModalVisibility,
  profileModalVisibility,
}) => {
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
          onChangeProfileModalVisibility={onChangeProfileModalVisibility}
          profileModalVisibility={profileModalVisibility}
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
          onChangeProfileModalVisibility={onChangeProfileModalVisibility}
          profileModalVisibility={profileModalVisibility}
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
