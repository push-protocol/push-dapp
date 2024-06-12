// Components
import { Separator } from 'blocks';
import { ChannelItem } from './ChannelItem';

const TrendingChannelItemList = () => {
  const channels = ['saa', 'sdfqsd', 'sdve', 'fvqef', 'fvqef'];

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

export { TrendingChannelItemList };
