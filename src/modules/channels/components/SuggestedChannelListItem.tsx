import { FC } from 'react';

import { useGetChannelDetails } from 'queries';

import { AllChannelsListItem } from './AllChannelsListItem';
import { ProfileModalVisibilityType } from 'common';

export type SuggestedChannelListItemProps = {
  channelAddress: string;
  onChangeProfileModalVisibility?: (value: ProfileModalVisibilityType) => void; // Function prop to control modal visibility
  profileModalVisibility?: ProfileModalVisibilityType;
};

const SuggestedChannelListItem: FC<SuggestedChannelListItemProps> = ({
  channelAddress,
  onChangeProfileModalVisibility,
  profileModalVisibility,
}) => {
  const { data: channelDetails, isLoading } = useGetChannelDetails(channelAddress);

  return (
    <AllChannelsListItem
      channelDetails={channelDetails}
      isLoading={isLoading}
      onChangeProfileModalVisibility={onChangeProfileModalVisibility}
      profileModalVisibility={profileModalVisibility}
    />
  );
};

export { SuggestedChannelListItem };
