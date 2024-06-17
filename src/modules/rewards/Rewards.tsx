import { FC } from 'react';
import { Box, Text } from 'blocks';

export type RewardsProps = {};

const Rewards: FC<RewardsProps> = () => {
  return (
    <Box
      flexDirection="column"
      display="flex"
      margin={{ initial: 's6 s6 s4 s6', ml: 's4' }}
      gap={{ ml: 's6' }}
      height="100%"
    >
      <Text
        variant="h3-bold"
        color={{ light: 'black', dark: 'white' }}
      >
        Introducing Push Reward Points Program
      </Text>
    </Box>
  );
};

export { Rewards };
