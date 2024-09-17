import { FC } from 'react';
import { ChannelDetailsCard } from 'common';
import { UserSetting } from 'helpers/channel/types';
import { useAccount } from 'hooks';
import { ChannelDetails, useGetUserSubscriptions } from 'queries';

export type AllChannelsListItemProps = {
  channelDetails: ChannelDetails | undefined;
  isLoading: boolean;
};

const AllChannelsListItem: FC<AllChannelsListItemProps> = ({ channelDetails, isLoading }) => {
  const { wallet } = useAccount();
  const isWalletConnected = !!wallet?.accounts?.length;

  /* Fetching User Subscribed Channel Details along with user settings */
  const {
    data: userSubscription,
    refetch: refetchChannelSubscription,
    isLoading: isSubscriptionLoading,
  } = useGetUserSubscriptions(channelDetails?.channel, { enabled: isWalletConnected });

  const isSubscribed = !!(userSubscription && userSubscription?.length);

  const handleRefetch = () => {
    refetchChannelSubscription();
  };
  return (
    <ChannelDetailsCard
      channelDetails={channelDetails}
      isLoading={isLoading}
      isSubscribed={isSubscribed}
      isSubscriptionLoading={isSubscriptionLoading}
      handleRefetch={handleRefetch}
      userSettings={JSON.parse(userSubscription?.[0].user_settings || '') || ([] as UserSetting[])}
    />
  );
};

export { AllChannelsListItem };
