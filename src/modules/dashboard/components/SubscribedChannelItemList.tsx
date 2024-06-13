// Components
import { Separator } from 'blocks';
import { ChannelItem } from './ChannelItem';
import { useGetChannelDetails, useGetUserSubscriptions } from 'queries';

const SubscribedChannelItemList = () => {
  const channels = ['saa', 'sdfqsd', 'sdve', 'fvqef', 'fvqef'];
  const { data: userSubscriptions } = useGetUserSubscriptions();
  const { data } = useGetChannelDetails('0xB88460Bb2696CAb9D66013A05dFF29a28330689D');
  return channels.map((channel, index) => (
    <>
      <ChannelItem
        key={index}
        channelDetails={channel}
      />
      {index != channels.length - 1 && <Separator />}
    </>
  ));
};

export { SubscribedChannelItemList };
