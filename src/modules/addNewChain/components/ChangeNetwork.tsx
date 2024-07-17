import { FC, useEffect } from 'react';

import { useAccount } from 'hooks';

import { Box, Button, Text } from 'blocks';
import { ActiveStepKey } from '../AddNewChain.types';

export type ChangeNetworkProps = {
  handleNextStep: (key: ActiveStepKey) => void;
  formik: any;
};

const ChangeNetwork: FC<ChangeNetworkProps> = ({ handleNextStep, formik }) => {
  const { switchChain, chainId } = useAccount();
  const selectedChainId = parseInt(formik.values.chainId);
  useEffect(() => {
    if (chainId === selectedChainId) {
      handleNextStep('verifyalias');
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
      <Button onClick={() => switchChain(selectedChainId)}>Change Network</Button>
    </Box>
  );
};

export { ChangeNetwork };
