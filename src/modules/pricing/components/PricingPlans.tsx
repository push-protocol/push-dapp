import { FC } from 'react';
import { Box, Button, Text, Tick } from 'blocks';
import { pricingPlanList } from '../Pricing.constants';
import { Item } from '@pushprotocol/uiweb';

export type PricingPlansProps = {};

const PricingPlans: FC<PricingPlansProps> = () => {
  return (
    <Box
      flexDirection="row"
      display="flex"
      justifyContent="space-between"
      width={{ initial: 'auto', ml: '357px' }}
      gap="spacing-xs"
    >
      {pricingPlanList.map((planItem, index) => (
        <Box
          display="flex"
          flexDirection="column"
          padding="spacing-md"
          gap="spacing-md"
          key={`${index}-pricing-plan-key`}
          border="border-sm solid stroke-secondary"
          borderRadius="radius-lg"
          width="296px"
        >
          <Box
            display="flex"
            flexDirection="column"
          >
            <Text
              color="text-primary"
              variant="h3-semibold"
            >
              {planItem?.planName}
            </Text>
            <Text
              color="text-secondary"
              variant="bm-regular"
            >
              {planItem?.planFor}
            </Text>
          </Box>

          <Box
            flexDirection="column"
            display="flex"
            width="auto"
            gap="spacing-lg"
          >
            <Text
              color="text-primary"
              variant="h2-semibold"
            >
              {planItem?.currency}{' '}
              {planItem?.price !== null ? (planItem?.price > 0 ? planItem?.price : 'Free') : 'Talk to us!'}
            </Text>

            <Button variant={planItem?.price === 0 ? 'outline' : planItem?.isPopular ? 'primary' : 'secondary'}>
              Get Started
            </Button>
          </Box>

          {/* Render the Plan benefit list */}
          <Box
            flexDirection="column"
            display="flex"
            gap="spacing-sm"
          >
            {planItem?.planBenefits.map((benefit, index) => (
              <Box
                flexDirection="row"
                display="flex"
                key={`${index}-plan-benefits-item-keys`}
                gap="spacing-xxs"
              >
                <Tick
                  color="icon-tertiary"
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
      ))}
    </Box>
  );
};

export { PricingPlans };
