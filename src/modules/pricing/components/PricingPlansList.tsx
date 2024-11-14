import { FC } from 'react';
import { Box, Button, Meteor, Tag, Text, Tick } from 'blocks';
import { pricingPlanList } from '../Pricing.constants';
import { PricingPlanTabsType } from '../Pricing.types';

export type PricingPlansListProps = {
  type: PricingPlanTabsType;
};

const PricingPlansList: FC<PricingPlansListProps> = () => {
  return (
    <Box
      flexDirection="column"
      display="flex"
      width="auto"
      gap="spacing-xl"
    >
      <Box
        display="flex"
        flexDirection="row"
        alignSelf="center"
        gap="spacing-xxs"
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

      {/* Render pricing plans list */}
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
            border="border-sm solid stroke-tertiary"
            borderRadius="radius-lg"
            width="296px"
            backgroundColor={planItem?.isPopular ? 'surface-primary' : 'surface-transparent'}
          >
            <Box
              display="flex"
              flexDirection="column"
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap="spacing-xxs"
              >
                <Text
                  color="text-primary"
                  variant="h3-semibold"
                >
                  {planItem?.planName}
                </Text>
                {planItem?.isPopular && (
                  <Tag
                    icon={<Meteor size={16} />}
                    label="Popular"
                    variant="brand"
                    size="medium"
                  />
                )}
              </Box>
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
              <Box
                margin={
                  planItem?.billingCriteria.length > 0 ? 'spacing-none' : 'spacing-none spacing-none 20px spacing-none'
                }
              >
                <Text
                  color="text-primary"
                  variant="h2-semibold"
                >
                  {planItem?.currency}{' '}
                  {planItem?.price !== null ? (planItem?.price > 0 ? planItem?.price : 'Free') : 'Talk to us!'}
                </Text>
                <Text
                  color="text-tertiary"
                  variant="bs-semibold"
                >
                  {planItem?.billingCriteria}
                </Text>
              </Box>

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
        ))}
      </Box>
    </Box>
  );
};

export { PricingPlansList };
