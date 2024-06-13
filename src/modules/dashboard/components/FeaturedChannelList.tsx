import { useGetChannelDetails } from 'queries';
import { FC } from 'react';
import { ChannelDetailsProps } from '../configs';
import FeaturedChannelListItem from './FeaturedChannelListItem';

type FeaturedChannelListprops = {
  channel: ChannelDetailsProps;
};

const FeaturedChannelList: FC<FeaturedChannelListprops> = (props) => {
  const { channel } = props;


  const { data: channelDetails, isLoading } = useGetChannelDetails(channel.channel);

  return (
    <>
      {channelDetails && <FeaturedChannelListItem channelDetails={channelDetails} isLoading={isLoading} />}
    </>
  );
};

export default FeaturedChannelList;