import { Box, Text } from 'blocks';
import { channelListTypeValues } from '../Dashboard.types';
import { TrendingChannelItemList } from './TrendingChannelItemList';
import { useState } from 'react';
import { SubscribedChannelItemList } from './SubscribedChannelItemList';

const TrendingSubscribed = () => {
  const [selectedListType, setSelectedListType] = useState<(typeof channelListTypeValues)[number]>('trending channels');
  return (
    <Box
      display="flex"
      flexDirection="column"
      width={{ ml: '100%', initial: '50%' }}
      gap="s4"
    >
      <Box width="100%">
        <Box
          backgroundColor="gray-100"
          cursor="pointer"
          display="flex"
          gap="s2"
          padding="s1"
          height="fit-content"
          borderRadius="var(--r3)"
          width={{ ll: '100%', initial: '60%' }}
        >
          {channelListTypeValues.map((listType) => (
            <Box
              padding="s2 s3"
              width="100%"
              borderRadius="var(--r3)"
              backgroundColor={selectedListType === listType ? 'white' : 'transparent'}
              onClick={() => setSelectedListType(listType)}
            >
              <Text
                align="center"
                color="gray-1000"
                variant="h5-semibold"
                transform="capitalize"
              >
                {listType}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        borderRadius="var(--r6)"
        border="1px solid #E5E5E5"
        padding="s4"
        gap="s3"
      >
        {selectedListType === 'trending channels' && <TrendingChannelItemList />}
        {selectedListType === 'subscribed' && <SubscribedChannelItemList />}
      </Box>
    </Box>
  );
};

export { TrendingSubscribed };
