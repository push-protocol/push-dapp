// React and other libraries
import { useState } from 'react';

// Constants
import { channelListTypeValues } from '../Dashboard.types';

// Components
import { Box, Text } from 'blocks';
import { TrendingChannelItemList } from './TrendingChannelItemList';
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
          backgroundColor={{ light: 'gray-100', dark: 'gray-1000' }}
          cursor="pointer"
          display="flex"
          gap="s2"
          padding="s1"
          height="fit-content"
          borderRadius="var(--r4)"
          width={{ ll: '100%', initial: '50%' }}
        >
          {channelListTypeValues.map((listType) => (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="s2 s3"
              borderRadius="var(--r4)"
              backgroundColor={selectedListType === listType ? { dark: 'gray-800', light: 'white' } : 'transparent'}
              onClick={() => setSelectedListType(listType)}
            >
              <Text
                color={{ light: 'gray-1000', dark: 'white' }}
                variant="h5-semibold"
                textTransform="capitalize"
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
        border={{ light: '1px solid gray-200', dark: '1px solid gray-800' }}
        padding="s2 s4"
        // gap="s2"
      >
        {selectedListType === 'trending channels' && <TrendingChannelItemList />}
        {selectedListType === 'subscribed' && <SubscribedChannelItemList />}
      </Box>
    </Box>
  );
};

export { TrendingSubscribed };
