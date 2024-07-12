import { FC, useEffect } from 'react';

import { useAccount } from 'hooks';

import { Box, Button, Text } from 'blocks';

export type ChangeNetworkProps = {
  handleNextStep: () => void;
  alias: string;
};

const ChangeNetwork: FC<ChangeNetworkProps> = ({ handleNextStep, alias }) => {
  const { switchChain, chainId } = useAccount();
  const aliasChainId = parseInt(alias.split(':')[1]);

  useEffect(() => {
    if (chainId === aliasChainId) {
      handleNextStep();
    }
  }, [chainId]);
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-xl"
      alignItems="center"
    >
      <Text
        variant="bs-semibold"
        color="text-primary"
      >
        Switch to the desired chain in your wallet to add it to your channel.
      </Text>
      <Button onClick={() => switchChain(aliasChainId)}>Change Network</Button>
    </Box>
  );
};

export { ChangeNetwork };
