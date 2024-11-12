import { FC } from 'react';
import { Box, Text } from 'blocks';
import { PricingPlans } from './PricingPlans';

export type PricingViewProps = {};

const PricingView: FC<PricingViewProps> = () => {
  return (
    <Box
      flexDirection="column"
      display="flex"
      width={{ initial: 'auto', ml: '357px' }}
      margin={{ initial: 'spacing-sm spacing-xl', ml: 'spacing-sm spacing-none' }}
      gap={{ initial: 'spacing-xl' }}
      height="100%"
    >
      <Box>
        <Text
          color="text-primary"
          variant="h1-semibold"
          textAlign="center"
        >
          Built to scale with your app.
        </Text>
        <Text
          color="text-primary"
          variant="h1-semibold"
          textAlign="center"
        >
          Unlock the power of web3 notifications.
        </Text>
        <Text
          color="text-primary"
          variant="h4-regular"
          textAlign="center"
        >
          Choose a plan that fits your needs.
        </Text>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        alignSelf="center"
        gap="spacing-xxs"
        margin="spacing-sm"
      >
        <Text
          color="text-primary"
          variant="bm-semibold"
        >
          Save
        </Text>
        <Text
          color="text-brand-medium"
          variant="bm-semibold"
        >
          15%
        </Text>
        <Text
          color="text-primary"
          variant="bm-semibold"
        >
          on selecting a yearly plan
        </Text>
      </Box>

      {/* Render Plans list */}
      <PricingPlans />
    </Box>
  );
};

export { PricingView };
