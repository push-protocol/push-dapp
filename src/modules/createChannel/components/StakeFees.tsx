import { Box, Button, Text } from "blocks";
import { FC } from "react";
import { css } from "styled-components";
import { CreateChannelFaucet } from "./CreateChannelFaucet";

type StakeFeesProps = {

}

const StakeFees: FC<StakeFeesProps> = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignSelf='stretch'
      justifyContent='center'
      gap='s10'
    >
      <Box
        display='flex'
        flexDirection='column'
        gap='s4'
      >
        <Box
          display='flex'
          flexDirection='column'
          alignSelf='stretch'
        >
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            backgroundColor='gray-100'
            borderRadius="r4 r4 r0 r0"
            padding='s4 s6'
            alignItems='center'
          >
            <Text variant="h4-semibold">Amout For Staking</Text>
            <Box>
              <Text variant="h4-semibold" color='pink-500'>50 PUSH</Text>
              <Text variant="bes-semibold" color='gray-500'>Balance: 5,000</Text>
            </Box>
          </Box>
          <CreateChannelFaucet />
        </Box>

        <Box
          display='flex'
          flexDirection='row'
          gap='s1'
          justifyContent='center'
        >
          <Text variant="bes-semibold" color='gray-500'>
            Don't see Push token in your wallet?
          </Text>
          <Text css={css`cursor:pointer;`} variant="bes-semibold" color='pink-500'>Import Token</Text>
        </Box>
      </Box>


      <Box display='flex' justifyContent='center'>
        <Button>Create Channel</Button>
      </Box>
    </Box>
  );
};

export { StakeFees };