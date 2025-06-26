import { FC } from 'react';
import { Box, Modal, Spinner, Text } from 'blocks';
import { ModalResponse } from 'common';
import { PricingPlanType } from 'queries/types/pricing';

export type ConfirmPurchaseModalProps = {
  modalControl: ModalResponse;
  plan: PricingPlanType;
  selectedPlanType: string;
};

const ConfirmPurchaseModal: FC<ConfirmPurchaseModalProps> = ({ modalControl, plan, selectedPlanType }) => {
  const { isOpen, onClose } = modalControl;

  return (
    <Modal
      size={'small'}
      isOpen={isOpen}
      onClose={onClose}
      acceptButtonProps={null}
      cancelButtonProps={null}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        gap="spacing-xxxs"
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-sm"
          alignItems="center"
        >
          <Spinner
            size="large"
            variant="primary"
          />
          <Text
            textAlign="center"
            variant="h4-semibold"
          >
            Confirm purchase
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-md"
          alignItems="center"
        >
          <Text
            color="text-tertiary"
            variant="bs-regular"
          >
            Purchase Push Pro plan for {selectedPlanType === '12' ? (plan?.value * 12 * 0.85).toFixed(2) : plan?.value}{' '}
            USDC
          </Text>
          <Text
            color="text-tertiary"
            variant="bs-regular"
          >
            Confirm the transaction in your wallet
          </Text>
        </Box>
      </Box>
    </Modal>
  );
};

export { ConfirmPurchaseModal };
