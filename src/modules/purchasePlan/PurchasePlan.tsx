import { FC } from 'react';

import { toNumber } from 'lodash';
import { css } from 'styled-components';

import { useGetPricingInfo } from 'queries';

import { Box, Spinner, Text } from 'blocks';
import { SelectedPlanView } from './components/SelectedPlanView';
import { PurchaseSummery } from './components/PurchaseSummery';

export type PurchasePlanProps = {
  index: string;
};

const PurchasePlan: FC<PurchasePlanProps> = ({ index }) => {
  const { data: pricingInfoList, isLoading } = useGetPricingInfo();

  const selectedPlan = pricingInfoList?.find((planItem: { id: number }) => planItem?.id == toNumber(index));

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Spinner
          size="large"
          variant="primary"
        />
      </Box>
    );
  }

  if (!selectedPlan) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Text
          color="text-primary"
          variant="h3-semibold"
        >
          Plan not found
        </Text>
      </Box>
    );
  }

  return (
    <Box
      flexDirection={{ initial: 'row', ml: 'column' }}
      display="flex"
      gap={{ ml: 'spacing-md', initial: 'spacing-xxxl' }}
      width="100%"
      css={css`
        padding: 45px 0px 0px 0px;
        box-sizing: border-box;
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
