import { FC } from 'react';
import { Box, Text } from 'blocks';
import { PricingPlanTabsType } from '../Pricing.types';
import { PricingPlansList } from './PricingPlansList';

export type PricingPlansContainerProps = {
  type: PricingPlanTabsType;
};

const PricingPlansContainer: FC<PricingPlansContainerProps> = ({ type }) => {
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
      <PricingPlansList type={type} />
    </Box>
  );
};

export { PricingPlansContainer };
