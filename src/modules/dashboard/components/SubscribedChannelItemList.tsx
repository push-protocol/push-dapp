// Components
import { Separator } from 'blocks';
import { ChannelItem } from './ChannelItem';
import { useGetUserSubscriptions } from 'queries';

const SubscribedChannelItemList = () => {
  const { data: userSubscriptions } = useGetUserSubscriptions();
  return userSubscriptions?.map((channel, index) => (
    <>
      <ChannelItem
        key={index}
        channelAddress={channel}
        subscribed
      />
      {index != userSubscriptions.length - 1 && <Separator />}
    </>
  ));
};

export { SubscribedChannelItemList };
