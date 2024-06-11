import { Box, Text } from 'blocks';
import React from 'react';

const IllustrationComponent = () => {
  return (
    <Box display='flex' flexDirection='row' css={{
      padding: '32px 24px'
    }}>

      <Box>
        <Text variant='h5-semibold'>Your communication super app for web3 & blockchain.</Text>
      </Box>
      <Box>
        <Text variant='h5-semibold'>Subscribe and get notifications from your favorite protocols.</Text>
      </Box>
      <Box>
        <Text variant='h5-semibold'>Send and receive chats.Join vibrant communities.</Text>
      </Box>

    </Box>
  );
};

export default IllustrationComponent;