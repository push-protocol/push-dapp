import { FC } from 'react';
import { Box } from 'blocks';
import { FAQContainer } from 'common';
import { PricingView } from './components/PricingView';
import { css } from 'styled-components';

export type PricingProps = {};

const Pricing: FC<PricingProps> = () => {
  return (
    <Box
      flexDirection="column"
      display="flex"
      width={{ initial: 'auto', ml: '357px' }}
      height="100%"
      css={css`
        gap: 232px;
        padding: 120px var(--spacing-none);
      `}
    >
      {/* Render Pricing View Component */}
      <PricingView />

      {/* Render FAQ Component */}
      <FAQContainer />
    </Box>
  );
};

export { Pricing };
