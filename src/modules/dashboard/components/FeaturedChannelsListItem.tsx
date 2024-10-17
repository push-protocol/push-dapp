import { FC } from 'react';
import { useAccount } from 'hooks';
import { ChannelDetailsCard } from 'common';
import { UserSetting } from 'helpers/channel/types';
import { useGetChannelDetails, useGetUserSubscriptions } from 'queries';

type FeaturedChannelsListItemProps = {
  channelAddress: string;
};

const FeaturedChannelsListItem: FC<FeaturedChannelsListItemProps> = (props) => {
  const { channelAddress } = props;

  const { wallet } = useAccount();
  const isWalletConnected = !!wallet?.accounts?.length;

  /* Fetching Channel Details based on Channel Address */
  const { data: channelDetails, isLoading } = useGetChannelDetails(channelAddress, 3600000);
  const { refetch: refetchAllSubscriptions } = useGetUserSubscriptions();
  /* Fetching User Subscribed Channel Details along with user settings */
  const {
    data: userSubscription,
    refetch: refetchCurrentChannelSubscription,
    isLoading: isSubscriptionLoading,
  } = useGetUserSubscriptions(channelAddress, { enabled: isWalletConnected });

  const isSubscribed = !!(userSubscription && userSubscription?.length);

  const handleRefetch = () => {
    refetchCurrentChannelSubscription();
    refetchAllSubscriptions();
  };
  return (
    <ChannelDetailsCard
      channelDetails={channelDetails}
      isLoading={isLoading}
      isSubscribed={isSubscribed}
      isSubscriptionLoading={isSubscriptionLoading}
      handleRefetch={handleRefetch}
      userSettings={JSON.parse(userSubscription?.[0]?.user_settings || '[]') as UserSetting[]}
    />
  );
};

export { FeaturedChannelsListItem };
