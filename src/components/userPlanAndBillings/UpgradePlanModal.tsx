import { Box, Cross, Modal, Text } from 'blocks';
import { ModalResponse } from 'common';
import { FC } from 'react';

type UpgradePlanModalProps = {
  modalControl: ModalResponse;
};

const UpgradePlanModal: FC<UpgradePlanModalProps> = ({ modalControl }) => {
  const { isOpen, onClose } = modalControl;

  const planFeatures = [
    {
      text: 'Telegram delivery will reduce to 1,000 from 5,000',
    },
    {
      text: 'Email delivery will reduce to 1,000 from 5,000',
    },
    {
      text: 'Features will reset to Free plan',
    },
  ];
  return (
    <Modal
      size="medium"
      isOpen={isOpen}
      onClose={onClose}
      acceptButtonProps={{
        children: 'Go Back',
        onClick: () => {
          // handleAddSettings(formValues);
        },
      }}
      cancelButtonProps={{
        children: 'Cancel',
      }}
    >
      <Box width="100%">
        <Text
          variant="h3-semibold"
          color="text-primary"
          textAlign="center"
        >
          We’re sorry to see you go
        </Text>
        <Text
          variant="bs-regular"
          color="text-tertiary"
          textAlign="center"
        >
          If you cancel you will be able to continue using Pro features until November 20, 2024. Once the billing term
          ends:
        </Text>

        <Box
          display="flex"
          flexDirection="column"
          margin="spacing-md spacing-none"
          gap="spacing-sm"
        >
          {planFeatures.map((item) => (
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              gap="spacing-xxs"
            >
              <Cross
                size={24}
                color="icon-primary"
              />

              <Text
                variant="bs-regular"
                color="text-primary"
                textAlign="center"
              >
                {item.text}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default UpgradePlanModal;
