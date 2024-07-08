import { Box, Button, Text, TextInput } from 'blocks';
import { FC } from 'react';

export type VerifyAliasChainProps = {
  address: string;
};

const VerifyAliasChain: FC<VerifyAliasChainProps> = ({ address }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="s10"
      alignItems="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="s4"
      >
        <Text
          variant="bs-semibold"
          textAlign="center"
        >
          You’re almost there!
          <br /> Verify the address on the new chain to send notifications.
        </Text>
        <TextInput
          disabled
          value={address}
        />
      </Box>
      <Button>Verify New Address</Button>
    </Box>
  );
};

export { VerifyAliasChain };
