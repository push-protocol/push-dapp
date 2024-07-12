//React + web3 essentials
import { FC } from 'react';

// Components
import { Box, ErrorFilled, Text } from 'blocks';

// Types
import { ChannelCreationError } from '../CreateChannel.types';

type CreateChannelErrorProp = {
  channelCreationError: ChannelCreationError;
}
const CreateChannelError: FC<CreateChannelErrorProp> = ({
  channelCreationError
}) => {
  return (
    <Box
      gap="s2"
      display="flex"
      flexDirection="row"
      backgroundColor='surface-danger-subtle'
      borderRadius="radius-xs"
      padding='s2'
      width="100%"
    >
      <ErrorFilled color={{ light: 'red-600', dark: 'red-300' }} size={24} />

      <Box color={{ light: 'red-700', dark: 'red-300' }}>
        <Text variant="h5-semibold" color='text-danger-bold'>
          {channelCreationError.txError}
        </Text>

        {channelCreationError.txErrorStatus === 2 && (
          <>
            <Text variant='bs-regular'>1. Not enough Push tokens in your wallet.</Text>
            <Text variant='bs-regular'>2. Gas price increased due to network congestion. Adjust gas limit manually.</Text>
          </>
        )}
      </Box>




    </Box>
  );
};

export { CreateChannelError };
