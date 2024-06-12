import { Box, Communication, CommunicationDark, Text } from 'blocks';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import React from 'react';

const IllustrationComponent = () => {

  const { mode } = useBlocksTheme();

  return (
    <Box display='flex' flexDirection={{ tb: 'column', ml: 'column', initial: 'row' }} padding='s8 s6' justifyContent='space-between' gap={{ tb: 's3', ml: 's3' }}>

      <Box display='flex' flexDirection='row' gap='s3' minWidth='320px' width={{ tb: '-webkit-fill-available', initial: '320px' }}>
        {mode === 'dark' ? <CommunicationDark /> : <Communication />}
        <Text variant='h5-semibold' color={{ light: 'black', dark: 'white' }}>Your communication super app for web3 & blockchain.</Text>
      </Box>
      <Box display='flex' flexDirection='row' gap='s3' minWidth='320px' width={{ tb: '-webkit-fill-available', initial: '320px' }}>
        {mode === 'dark' ? <CommunicationDark /> : <Communication />}
        <Text variant='h5-semibold' color={{ light: 'black', dark: 'white' }}>Subscribe and get notifications from your favorite protocols.</Text>
      </Box>
      <Box display='flex' flexDirection='row' gap='s3' minWidth='320px' width={{ tb: '-webkit-fill-available', initial: '320px' }}>
        {mode === 'dark' ? <CommunicationDark /> : <Communication />}
        <Text variant='h5-semibold' color={{ light: 'black', dark: 'white' }}>Send and receive chats. Join vibrant communities.</Text>
      </Box>

    </Box>
  );
};

export default IllustrationComponent;