import { FC, useState } from 'react';

import { Box, Button, Link, Modal, Telegram, Text, TextInput } from 'blocks';
import { CopyButton, ModalResponse } from 'common';

type AddTelegramProps = {
  modalControl: ModalResponse;
  refetchSocialHandleStatus: () => void;
  setErrorMessage: (errorMessage: string) => void;
  setSuccessMessage: (successMessage: string) => void;
};

enum Steps {
  EnterTelegram = 1,
  VerifyId = 2,
}

const AddTelegram: FC<AddTelegramProps> = ({
  modalControl,
  // refetchSocialHandleStatus,
  // setErrorMessage,
  // setSuccessMessage,
}) => {
  const { isOpen, onClose } = modalControl;
  const [step, setStep] = useState(2);

  return (
    <Modal
      size="small"
      isOpen={isOpen}
      onClose={onClose}
      {...(step === Steps.VerifyId && {
        onBack: () => setStep(step - 1),
      })}
      acceptButtonProps={null}
      cancelButtonProps={null}
    >
      {step === Steps.EnterTelegram && (
        <Box width="100%">
          <Box
            width="100%"
            display="flex"
            margin="spacing-none spacing-none spacing-sm spacing-none"
            justifyContent="center"
          >
            <Telegram />
          </Box>

          <Text
            textAlign="center"
            variant="h4-semibold"
          >
            Enter your Telegram ID
          </Text>

          <Text
            textAlign="center"
            variant="bs-regular"
          >
            Proceed to the next step after entering your Telegram chat ID
          </Text>

          <Box
            margin="spacing-md spacing-none"
            width="100%"
          >
            <TextInput
              label="Telegram ID"
              value={''}
              onChange={() => console.log('')}
              // error={emailFormik.touched.email && Boolean(emailFormik.errors.email)}
              // errorMessage={emailFormik.touched.email ? emailFormik.errors.email : ''}
            />
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            width="100%"
            padding="spacing-xs"
          >
            <Button>Next</Button>
          </Box>
        </Box>
      )}

      {step === Steps.VerifyId && (
        <Box width="100%">
          <Box
            width="100%"
            display="flex"
            margin="spacing-none spacing-none spacing-sm spacing-none"
            justifyContent="center"
          >
            <Telegram />
          </Box>

          <Text
            textAlign="center"
            variant="h3-semibold"
          >
            Connect your Telegram
          </Text>

          <Text
            textAlign="center"
            variant="bs-regular"
            color="text-tertiary"
          >
            Follow the steps to link your Telegram to Push and receive notifications
          </Text>

          <Box
            margin="spacing-sm spacing-none"
            gap="spacing-xxs"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Text
              textAlign="center"
              variant="bl-regular"
            >
              Step 1: Copy the verification code
            </Text>

            <Box
              display="flex"
              padding="spacing-xs"
              gap="spacing-xxs"
              alignItems="center"
              justifyContent="center"
              backgroundColor="surface-tertiary"
              width="fit-content"
              borderRadius="radius-sm"
            >
              <Text
                color="text-brand-subtle"
                variant="bl-semibold"
                textAlign="center"
              >
                /verify 0x123...45678 665889
              </Text>

              <CopyButton
                tooltipTitle="Copy Address"
                content={'/verify 0x123...45678 665889'}
                size={24}
              />
            </Box>
          </Box>

          <Box margin="spacing-lg spacing-none spacing-none spacing-none">
            <Text
              textAlign="center"
              variant="bl-regular"
            >
              Step 2: Visit the link and paste the code
            </Text>

            <Box margin="spacing-xs spacing-none">
              <Link
                to={'https://telegram.me/pushlinkbot'}
                isText={true}
                textProps={{
                  variant: 'bl-semibold',
                  textAlign: 'center',
                  color: 'text-brand-medium',
                }}
              >
                telegram.me/pushlinkbot
              </Link>
            </Box>
          </Box>

          <Text
            textAlign="center"
            variant="bs-regular"
            color="text-tertiary"
          >
            Please ensure you’re logged into your Telegram account. Click on Complete Verification below once complete.
          </Text>
        </Box>
      )}
    </Modal>
  );
};

export default AddTelegram;
