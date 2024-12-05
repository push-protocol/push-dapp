import { FC } from 'react';
import { Box, Link, Text, Tick } from 'blocks';
import { PricingPlan } from 'modules/pricing/Pricing.types';
import { css } from 'styled-components';

export type SelectedPlanViewProps = { selectedPlan: PricingPlan };
const SelectedPlanView: FC<SelectedPlanViewProps> = ({ selectedPlan }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      padding="spacing-md"
      width="50%"
    >
      <Text variant="h3-semibold">Push {selectedPlan?.planName}</Text>
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
          {selectedPlan?.currency} {selectedPlan?.price}
        </Text>
        <Text
          color="text-tertiary"
          variant="bs-semibold"
        >
          {selectedPlan?.billingCriteria}
        </Text>
      </Box>

      {/* Render the Plan benefit list */}
      <Box
        flexDirection="column"
        display="flex"
        gap="spacing-sm"
        padding="spacing-lg spacing-none spacing-none spacing-none"
      >
        {selectedPlan?.planBenefits.map((benefit, benefitIndex) => (
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
              {benefit?.limit && (
                <Text
                  color="text-primary"
                  variant="bs-bold"
                >
                  {benefit?.limit}
                </Text>
              )}
              <Text
                color="text-primary"
                variant="bs-regular"
              >
                {benefit?.benefitName}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export { SelectedPlanView };
