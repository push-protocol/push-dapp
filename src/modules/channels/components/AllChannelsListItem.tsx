import { FC } from 'react';
import { ChannelDetailsCard } from 'common';
import { UserSetting } from 'helpers/channel/types';

import { ChannelDetails, useGetUserSubscriptions } from 'queries';

export type AllChannelsListItemProps = {
  channelDetails: ChannelDetails | undefined;
  isLoading: boolean;
};

const AllChannelsListItem: FC<AllChannelsListItemProps> = ({ channelDetails, isLoading }) => {
  /* Fetching User Subscribed Channel Details along with user settings */
  const {
    data: userSubscription,
    refetch: refetchChannelSubscription,
    isLoading: isSubscriptionLoading,
  } = useGetUserSubscriptions(undefined, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    refetchInterval: 900000, // 15 minutes,
  });

  const handleRefetch = () => {
    refetchChannelSubscription();
  };

  const channelSubscriptionData = userSubscription?.find((sub) => sub.channel === channelDetails?.channel);

  const userChannelSettings = (JSON.parse(channelSubscriptionData?.user_settings || '[]') || []) as UserSetting[];

  return (
    <ChannelDetailsCard
      channelDetails={channelDetails}
      isLoading={isLoading}
      isSubscribed={!!channelSubscriptionData}
      isSubscriptionLoading={isSubscriptionLoading}
      handleRefetch={handleRefetch}
      subscribeButtonVariant="outline"
      userSettings={userChannelSettings}
      width={{ initial: 'inherit', tb: 'auto', lp: 'auto', mm: 'auto' }}
    />
  );
};

export { AllChannelsListItem };
