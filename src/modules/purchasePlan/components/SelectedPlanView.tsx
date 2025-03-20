import { FC } from 'react';
import { css } from 'styled-components';

import { formatSentenceWithBoldNumbers, parseStringToArray } from 'modules/pricing/utils';
import { PricingPlanType } from 'queries/types/pricing';

import { Box, Link, Text, Tick } from 'blocks';

export type SelectedPlanViewProps = { selectedPlan: PricingPlanType };
const SelectedPlanView: FC<SelectedPlanViewProps> = ({ selectedPlan }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      padding="spacing-none"
      width="50%"
    >
      <Text variant="h3-semibold">Push {selectedPlan?.name}</Text>
      <Link
        to="/pricing"
        isText
        textProps={{
          color: 'text-secondary',
          variant: 'bs-regular',
          css: css`
            text-decoration-line: underline;
          `,
        }}
      >
        change plan
      </Link>

      <Box padding="spacing-md spacing-none spacing-none spacing-none">
        <Text variant="h2-semibold">
          {selectedPlan?.value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </Text>
        {selectedPlan?.value > 0 && (
          <Text
            color="text-tertiary"
            variant="bs-semibold"
          >
            per month billed yearly
          </Text>
        )}
      </Box>

      {/* Render the Plan benefit list */}
      <Box
        flexDirection="column"
        display="flex"
        gap="spacing-sm"
        padding="spacing-lg spacing-none spacing-none spacing-none"
      >
        {parseStringToArray(selectedPlan?.description)?.map((benefit, benefitIndex) => (
          <Box
            flexDirection="row"
            display="flex"
            key={`${benefitIndex}-plan-benefits-item-keys`}
            gap="spacing-xxs"
          >
            <Tick
              color="icon-primary"
              size={17}
            />
            <Box
              flexDirection="row"
              display="flex"
              gap="spacing-xxxs"
            >
              <Text
                color="text-primary"
                variant="bs-regular"
              >
                {formatSentenceWithBoldNumbers(benefit)}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export { SelectedPlanView };
