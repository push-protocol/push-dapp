import { useGetChannelDetails } from 'queries';
import { FC } from 'react';
import { AllChannelsListItem } from './AllChannelsListItem';

export type FrontendChannelListItemProps = {
  channelAddress: string;
};

const FrontendChannelListItem: FC<FrontendChannelListItemProps> = ({ channelAddress }) => {
  const { data: channelDetails, isLoading } = useGetChannelDetails(channelAddress);

  return (
    <AllChannelsListItem
      channelDetails={channelDetails}
      isLoading={isLoading}
    />
  );
};

export { FrontendChannelListItem };
