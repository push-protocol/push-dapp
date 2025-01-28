import { FC } from 'react';
import { css } from 'styled-components';
import { Box, Link, Text } from 'blocks';
import { PricingPlanTabs } from './PricingPlanTabs';

export type PricingViewProps = {};

const PricingView: FC<PricingViewProps> = () => {
  return (
    <Box
      flexDirection="column"
      display="flex"
      width={{ initial: 'auto', ml: '357px' }}
      gap={{ initial: 'spacing-xl' }}
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

      {/* Render plans tab and list */}
      <Box>
        <PricingPlanTabs />
      </Box>

      <Box
        display="inline"
        flexDirection="row"
        alignSelf="center"
        gap="spacing-xxxs"
        padding="spacing-lg spacing-none spacing-none spacing-none"
      >
        <Text
          color="text-primary"
          variant="bl-regular"
          as="span"
        >
          Have more questions? Get in touch with our
        </Text>
        <Link
          target="_blank"
          to={'#'}
          textProps={{
            variant: 'bl-bold',
            as: 'span',
            css: css`
              text-decoration-line: underline;
            `,
          }}
        >
          {' '}
          sales team.
        </Link>
      </Box>
    </Box>
  );
};

export { PricingView };
