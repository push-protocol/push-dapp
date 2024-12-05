import { useState } from 'react';

import { TabItem, Tabs } from 'blocks';

import { PricingPlanTabsType } from '../Pricing.types';
import { PricingPlansContainer } from './PricingPlansContainer';

const PricingPlanTabs = () => {
  const pricingPlanTabs: TabItem[] = [
    {
      label: 'Yearly',
      key: 'yearly',
      children: <PricingPlansContainer type="yearly" />,
    },
    {
      label: 'Monthly',
      key: 'monthly',
      children: <PricingPlansContainer type="monthly" />,
    },
  ];
  const [selectedPricingPlanTab, setSelectedPricingPlanTab] = useState<PricingPlanTabsType>(
    pricingPlanTabs[0].key as PricingPlanTabsType
  );

  return (
    <Tabs
      items={pricingPlanTabs}
      activeKey={selectedPricingPlanTab}
      variant="fill"
      onChange={(activeKey) => setSelectedPricingPlanTab(activeKey as PricingPlanTabsType)}
      alignTabs="center"
    />
  );
};

export { PricingPlanTabs };
