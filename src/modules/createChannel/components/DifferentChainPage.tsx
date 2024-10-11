// Hooks
import { useAccount } from 'hooks';

// Configs
import { appConfig } from 'config';

// Components
import { Box, Button, Text } from 'blocks';
import { networkName } from 'helpers/UtilityHelper';

const DifferentChainPage = () => {
  const { switchChain } = useAccount();

  const chainId = appConfig.allowedNetworks[0];

  const chainName = networkName[chainId];

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        padding="spacing-md"
        backgroundColor="surface-secondary"
        borderRadius="radius-sm"
        width="-webkit-fill-available"
      >
        <Text
          textAlign="center"
          variant="h5-semibold"
          color="text-brand-medium"
        >
          Please select {chainName} Network in your Wallet to create a channel.
        </Text>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
      >
        <Button onClick={() => switchChain(appConfig.coreContractChain)}>Change Network</Button>
      </Box>
    </>
  );
};

export { DifferentChainPage };
