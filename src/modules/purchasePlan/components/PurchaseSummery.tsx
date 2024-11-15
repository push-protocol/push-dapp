import { FC, useState } from 'react';
import { Box, Button, ExternalLink, Link, TabItem, Tabs, Text, TextInput } from 'blocks';
import { PricingPlansItemTypes, PricingPlanTabsType } from 'modules/pricing/Pricing.types';
import { css } from 'styled-components';

export type PurchaseSummeryProps = { selectedPlan: PricingPlansItemTypes };
const PurchaseSummery: FC<PurchaseSummeryProps> = ({ selectedPlan }) => {
  const pricingPlanTabs: TabItem[] = [
    {
      label: 'Yearly',
      key: 'yearly',
      children: null,
    },
    {
      label: 'Monthly',
      key: 'monthly',
      children: null,
    },
  ];

  const [selectedPricingPlanTab, setSelectedPricingPlanTab] = useState<PricingPlanTabsType>(
    pricingPlanTabs[0].key as PricingPlanTabsType
  );
  const [email, setEmail] = useState('');
  const [isApproved, setIsApproved] = useState(false);

  const totalAmount = selectedPlan?.price ? selectedPlan?.price * (selectedPricingPlanTab === 'yearly' ? 12 : 1) : 0;

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="50%"
      gap="spacing-md"
    >
      <Box>
        <Text variant="h3-semibold">Summary</Text>
        <Text
          color="text-tertiary"
          variant="bs-regular"
        >
          Each wallet can purchase a limited allocation of Nodes.
        </Text>
      </Box>

      {/* Render Summary view */}
      <Box
        display="flex"
        flexDirection="column"
        padding="spacing-lg spacing-md"
        borderRadius="radius-lg"
        border="border-sm solid stroke-secondary"
        backgroundColor="surface-primary"
        gap="spacing-lg"
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-md"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Text variant="bl-semibold">Plan</Text>
            <Text
              color="text-secondary"
              variant="bl-bold"
            >
              Push {selectedPlan?.planName}
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Text variant="bl-semibold">Duration</Text>
            <Tabs
              items={pricingPlanTabs}
              activeKey={selectedPricingPlanTab}
              variant="fill"
              onChange={(activeKey) => setSelectedPricingPlanTab(activeKey as PricingPlanTabsType)}
              alignTabs="center"
            />
          </Box>
        </Box>

        <TextInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email Address"
        />

        {/* Render total pricing view */}
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-lg"
        >
          <Box
            display="flex"
            flexDirection="column"
            borderRadius="radius-sm"
            backgroundColor="surface-tertiary"
            padding="spacing-xs spacing-sm"
          >
            <Text variant="h5-semibold">Total Price</Text>
            <Text variant="h3-bold">{totalAmount} USDC</Text>
            <Text
              color="text-tertiary"
              variant="bs-regular"
              textAlign="right"
            >
              Balance: 0
            </Text>
          </Box>

          <Link
            style={{ alignSelf: 'center' }}
            to="#"
          >
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap="spacing-xxxs"
            >
              <Text
                color="text-brand-medium"
                variant="bm-semibold"
              >
                Get more USDC
              </Text>
              <ExternalLink
                size={16}
                color="icon-brand-medium"
              />
            </Box>
          </Link>
        </Box>

        {/* Render bottom buttons */}
        <Box
          display="flex"
          flexDirection="row"
          gap="spacing-md"
        >
          <Button
            css={css`
              flex: 1 0 0;
            `}
            onClick={() => setIsApproved(true)}
            disabled={isApproved}
          >
            Approve
          </Button>
          <Button
            css={css`
              flex: 1 0 0;
            `}
            disabled={!isApproved}
          >
            Purchase
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export { PurchaseSummery };
