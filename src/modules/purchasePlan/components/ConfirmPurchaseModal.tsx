import { FC } from 'react';
import { Box, Modal, Spinner, Text } from 'blocks';
import { ModalResponse } from 'common';

export type ConfirmPurchaseModalProps = {
  purchaseAmount: number;
  modalControl: ModalResponse;
  onClose: () => void;
};

const ConfirmPurchaseModal: FC<ConfirmPurchaseModalProps> = ({ purchaseAmount, modalControl, onClose }) => {
  const { isOpen } = modalControl;
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
            Purchase Push Pro plan for {purchaseAmount} USDC
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
