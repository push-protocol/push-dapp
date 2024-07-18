import { Box, Button, Lozenge, Text } from "blocks";

const CreateChannelFaucet = () => {
  return (
    <Box
      display='flex'
      padding='s4 s6'
      backgroundColor='pink-200'
      borderRadius="r0 r0 r4 r4"
      justifyContent='space-between'
    >
      <Text variant="c-regular">Follow these Steps to get Testnet Push</Text>
      <Box display='flex' gap='s3'>
        <Box
          display='flex'
          gap='s2'
          alignItems='center'
          color='pink-600'
        >
          <Box
            borderRadius="r10"
            padding='s0 s1'
            border='1.5px solid pink-500'
          >
            <Text variant="c-regular">1</Text>
          </Box>
          <Text>Sepolia ETH Faucet</Text>
        </Box>
        <Box
          display='flex'
          gap='s2'
          alignItems='center'
          color='pink-600'
        >
          <Box>2</Box>
          <Text>Get Testnet Push</Text>
        </Box>
      </Box>
    </Box >
  );
};

export { CreateChannelFaucet };