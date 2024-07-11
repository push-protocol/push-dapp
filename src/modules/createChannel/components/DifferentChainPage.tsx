// Hooks
import { useAccount } from 'hooks';

// Components
import { Box, Button, Text } from 'blocks';

// Configs
import { appConfig } from 'config';

const DifferentChainPage = () => {
  const { switchChain } = useAccount();
  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        padding='s6'
        backgroundColor={{ light: 'gray-100', dark: 'gray-1000' }}
        borderRadius="r4"
        width='-webkit-fill-available'
      >
        <Text textAlign='center' variant='h5-semibold' color='pink-600'>
          Please select Ethereum Sepolia Network in your Wallet to create a channel.
        </Text>

      </Box>

      <Box display='flex' justifyContent='center'>
        <Button onClick={() => switchChain(appConfig.coreContractChain)}>
          Change Network
        </Button>
      </Box>
    </>
  );
};

export { DifferentChainPage };