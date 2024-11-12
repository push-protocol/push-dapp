import { FC } from 'react';
import { Box } from 'blocks';
import { PricingView } from './components/PricingView';

export type PricingProps = {};

const Pricing: FC<PricingProps> = () => {
  return (
    <Box
      flexDirection="column"
      display="flex"
      width={{ initial: 'auto', ml: '357px' }}
      margin={{ initial: 'spacing-sm spacing-xl', ml: 'spacing-sm spacing-none' }}
      gap={{ ml: 'spacing-md' }}
      height="100%"
    >
      <PricingView />
    </Box>
  );
};

export { Pricing };
