import { FC } from 'react';
import { Box } from 'blocks';
import { SelectedPlanView } from './components/SelectedPlanView';
import { PurchaseSummery } from './components/PurchaseSummery';
import { pricingPlanList } from 'modules/pricing/Pricing.constants';
import { toNumber } from 'lodash';
import { css } from 'styled-components';

export type PurchasePlanProps = {
  index: string;
};

const PurchasePlan: FC<PurchasePlanProps> = ({ index }) => {
  const selectedPlan = pricingPlanList[toNumber(index)];
  return (
    <Box
      flexDirection="row"
      display="flex"
      gap={{ ml: 'spacing-md' }}
      width="100%"
      css={css`
        padding: 85px 0px 0px 0px;
      `}
    >
      {/* Render selected plan */}
      <SelectedPlanView selectedPlan={selectedPlan} />
      {/* Render selected plan */}
      <PurchaseSummery selectedPlan={selectedPlan} />
    </Box>
  );
};

export { PurchasePlan };
