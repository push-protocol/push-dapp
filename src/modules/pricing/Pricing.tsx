import { FC } from 'react';
import { Box } from 'blocks';
import { PricingView } from './components/PricingView';
import { FAQMainContainer } from './components/FAQMainContainer';

export type PricingProps = {};

const Pricing: FC<PricingProps> = () => {
  return (
    <Box
      flexDirection="column"
      display="flex"
      width={{ initial: 'auto', ml: '357px' }}
      gap={{ ml: 'spacing-md' }}
      height="100%"
      padding="101px spacing-none spacing-none spacing-none"
    >
      {/* Render Pricing View Component */}
      <PricingView />

      {/* Render FAQ Component */}
      <FAQMainContainer />
    </Box>
  );
};

export { Pricing };
