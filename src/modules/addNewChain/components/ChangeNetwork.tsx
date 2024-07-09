import { Box, Button, Text } from 'blocks';
import { useAccount } from 'hooks';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

export type ChangeNetworkProps = {
  handleNextStep: () => void;
  alias: string;
};

const ChangeNetwork: FC<ChangeNetworkProps> = ({ handleNextStep, alias }) => {
  const { switchChain, chainId } = useAccount();
  const aliasChainId = parseInt(alias.split(':')[1]);

  useEffect(() => {
    console.debug(chainId === aliasChainId, chainId, aliasChainId);
    if (chainId === aliasChainId) {
      handleNextStep();
    }
  }, [chainId]);
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="s10"
      alignItems="center"
    >
      <Text variant="bs-semibold">Switch to the desired chain in your wallet to add it to your channel.</Text>
      <Button onClick={() => switchChain(80002)}>Change Network</Button>
    </Box>
  );
};

export { ChangeNetwork };
