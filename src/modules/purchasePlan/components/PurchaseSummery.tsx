import { FC, useState } from 'react';
import { Box, Button, ExternalLink, Link, TabItem, Tabs, Text, TextInput, Tick } from 'blocks';
import { PricingPlan, PricingPlanTabsType } from 'modules/pricing/Pricing.types';
import { ConfirmPurchaseModal } from './ConfirmPurchaseModal';
import { PurchasePlanModalTypes } from '../PusrchasePlan.types';
import { PlanPurchasedModal } from './PlanPurchasedModal';
import { useDisclosure } from 'common';

export type PurchaseSummeryProps = { selectedPlan: PricingPlan };
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
  const [modalType, setShowModalType] = useState<PurchasePlanModalTypes>(null);
  const modalControl = useDisclosure();

  const totalAmount = selectedPlan?.price ? selectedPlan?.price * (selectedPricingPlanTab === 'yearly' ? 12 : 1) : 0;

  const handleOnCloseModal = () => {
    if (modalType === 'confirmPurchase') {
      setShowModalType('planPurchased');
    } else {
      modalControl.onClose();
      setShowModalType(null);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="50%"
      gap="spacing-md"
    >
      {/* Render Plan Purchase confirmation modal */}
      {modalType === 'confirmPurchase' && (
        <ConfirmPurchaseModal
          onClose={handleOnCloseModal}
          modalControl={modalControl}
          purchaseAmount={totalAmount}
        />
      )}
      {modalType === 'planPurchased' && (
        <PlanPurchasedModal
          onClose={handleOnCloseModal}
          modalControl={modalControl}
          plan={selectedPlan}
        />
      )}

      <Box>
        <Text variant="h3-semibold">Summary</Text>
        <Text
          color="text-tertiary"
          variant="bs-regular"
        >
          Each wallet can purchase a limited allocation of Nodes.
        </Text>
      </Box>

      {/* Render Summary View */}
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
          <Box width="250px">
            <Button
              onClick={() => setIsApproved(true)}
              disabled={isApproved}
              leadingIcon={isApproved ? <Tick /> : null}
              block
            >
              Approve
            </Button>
          </Box>
          <Box width="250px">
            <Button
              onClick={() => {
                setShowModalType('confirmPurchase');
                modalControl?.open();
              }}
              disabled={!isApproved}
              block
            >
              Purchase
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { PurchaseSummery };
