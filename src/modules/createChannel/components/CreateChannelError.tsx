//React + web3 essentials
import { FC } from 'react';

// Components
import { Box, ErrorFilled, Text } from 'blocks';

// Types
import { ChannelCreationError } from '../CreateChannel.types';

type CreateChannelError = {
  channelCreationError: ChannelCreationError;
}
const CreateChannelError: FC<CreateChannelError> = ({
  channelCreationError
}) => {
  return (
    <Box
      gap="s2"
      display="flex"
      flexDirection="row"
      backgroundColor={{ light: 'red-100', dark: 'red-800' }}
      borderRadius="r4"
      padding={{ ml: 's2', lp: 's2', initial: 's2' }}
      width="100%"
    >
      <ErrorFilled color={{ light: 'red-600', dark: 'red-300' }} size={24} />

      <Box color={{ light: 'red-700', dark: 'red-300' }}>
        <Text variant="h5-semibold" color={{ light: 'red-700', dark: 'red-300' }}>
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
