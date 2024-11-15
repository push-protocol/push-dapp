import { FC } from 'react';
import { Box, Text } from 'blocks';
import { SelectedPlanView } from './components/SelectedPlanView';
import { PurchaseSummery } from './components/PurchaseSummery';
import { pricingPlanList } from 'modules/pricing/Pricing.constants';
import { toNumber } from 'lodash';

export type PurchasePlanProps = {
  index: string | undefined;
};

const PurchasePlan: FC<PurchasePlanProps> = ({ index }) => {
  const selectedPlan = pricingPlanList[toNumber(index)];
  return (
    <Box
      flexDirection="row"
      display="flex"
      gap={{ ml: 'spacing-md' }}
      width="100%"
      padding="85px spacing-none spacing-none spacing-none"
    >
      {/* Render selected plan */}
      <SelectedPlanView selectedPlan={selectedPlan} />
      {/* Render selected plan */}
      <PurchaseSummery selectedPlan={selectedPlan} />
    </Box>
  );
};

export { PurchasePlan };
