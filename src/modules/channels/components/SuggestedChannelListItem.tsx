import { FC } from 'react';

import { useGetChannelDetails } from 'queries';

import { AllChannelsListItem } from './AllChannelsListItem';

export type SuggestedChannelListItemProps = {
  channelAddress: string;
};

const SuggestedChannelListItem: FC<SuggestedChannelListItemProps> = ({ channelAddress }) => {
  const { data: channelDetails, isLoading } = useGetChannelDetails(channelAddress);

  return (
    <AllChannelsListItem
      channelDetails={channelDetails}
      isLoading={isLoading}
    />
  );
};

export { SuggestedChannelListItem };
