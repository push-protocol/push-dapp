import { FC } from 'react';
import { Box } from 'blocks';

export type RewardsProps = {};

const Rewards: FC<RewardsProps> = () => {
  return (
    <Box
      flexDirection="column"
      display="flex"
      margin={{ initial: 's4 s6 s4 s6', ml: 's4' }}
      gap={{ ml: 's6' }}
    >
      Hello World
    </Box>
  );
};

export { Rewards };
