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
  } = useGetUserSubscriptions();

  const isSubscribed = !!(userSubscription && userSubscription?.length);

  const handleRefetch = () => {
    refetchChannelSubscription();
  };

  const userChannelSettings = (JSON.parse(
    userSubscription?.find((sub) => sub.channel === channelDetails?.channel)?.user_settings || '[]'
  ) || []) as UserSetting[];
  console.log('ALL Subscriptions', userSubscription), userChannelSettings;
  return (
    <ChannelDetailsCard
      channelDetails={channelDetails}
      isLoading={isLoading}
      isSubscribed={isSubscribed}
      isSubscriptionLoading={isSubscriptionLoading}
      handleRefetch={handleRefetch}
      userSettings={userChannelSettings}
      width={{ initial: 'inherit' }}
    />
  );
};

export { AllChannelsListItem };
