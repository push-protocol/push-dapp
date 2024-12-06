import { FC, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { CopyButton, ModalResponse } from 'common';
import { useAccount } from 'hooks';
import { useAppContext } from 'contexts/AppContext';
import { walletToCAIP10 } from 'helpers/w2w';
import { generateVerificationProof } from 'modules/rewards/utils/generateVerificationProof';
import { useSendHandlesVerificationCode } from 'queries';
import { appConfig } from 'config';

import { Box, Link, Modal, Telegram, Text, TextInput } from 'blocks';
import { shortenText } from 'helpers/UtilityHelper';

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
  const { account, wallet } = useAccount();
  const { handleConnectWalletAndEnableProfile } = useAppContext();

  const caip10WalletAddress = walletToCAIP10({ account });
  const [step, setStep] = useState(1);
  const [telegramCode, setTelegramCode] = useState<string>('');
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });

  const { mutate: sendVerification, isPending: isSendingVerification } = useSendHandlesVerificationCode();

  const telegramValidationSchema = Yup.object({
    telegram: Yup.string().required('Required'),
  });

  const telegramFormik = useFormik({
    initialValues: { telegram: '' },
    validationSchema: telegramValidationSchema,
    onSubmit: () => {
      handleSendVerificationCode();
    },
  });

  const getSDKInstance = useCallback(async () => {
    return userPushSDKInstance?.signer ? userPushSDKInstance : await handleConnectWalletAndEnableProfile({ wallet });
  }, [userPushSDKInstance, handleConnectWalletAndEnableProfile, wallet]);

  const handleSendVerificationCode = async () => {
    const sdkInstance = await getSDKInstance();
    const data = {
      wallet: caip10WalletAddress,
      value: { telegram_username: telegramFormik.values.telegram },
      valueType: 'telegram',
    };

    const verificationProof = await generateVerificationProof(data, sdkInstance);

    if (!verificationProof) return;

    sendVerification(
      {
        caipAddress: caip10WalletAddress as string,
        verificationProof: verificationProof as string,
        value: { telegram_username: telegramFormik.values.telegram },
        social_platform: 'telegram',
      },
      {
        onSuccess: (response: any) => {
          if (response?.success) {
            console.log(response);
            setTelegramCode(response.verificationCode);
            setStep(Steps.VerifyId);
          }
        },
        onError: (error: Error) => {
          console.log('Error sending code', error);
        },
      }
    );
  };

  return (
    <Modal
      size="small"
      isOpen={isOpen}
      onClose={onClose}
      {...(step === Steps.VerifyId && {
        onBack: () => setStep(Steps.EnterTelegram),
      })}
      acceptButtonProps={
        step === Steps.EnterTelegram
          ? {
              children: 'Next',
              loading: isSendingVerification,
              onClick: () => {
                telegramFormik?.handleSubmit();
              },
            }
          : null
      }
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

          <form onSubmit={telegramFormik.handleSubmit}>
            <Box
              margin="spacing-md spacing-none spacing-none spacing-none"
              width="100%"
            >
              <TextInput
                label="Telegram ID"
                value={telegramFormik.values.telegram}
                onChange={telegramFormik.handleChange('telegram')}
                error={telegramFormik.touched.telegram && Boolean(telegramFormik.errors.telegram)}
                errorMessage={telegramFormik.touched.telegram ? telegramFormik.errors.telegram : ''}
              />
            </Box>
          </form>
        </Box>
      )}

      {step === Steps.VerifyId && telegramCode && (
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
                {shortenText(`/verify ${caip10WalletAddress}-${telegramCode}`, 10)}
              </Text>

              <CopyButton
                tooltipTitle="Copy Address"
                content={`/verify ${caip10WalletAddress}-${telegramCode}`}
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
                to={appConfig?.telegramExternalURL}
                target="_blank"
                isText={true}
                textProps={{
                  variant: 'bl-semibold',
                  textAlign: 'center',
                  color: 'text-brand-medium',
                }}
              >
                {appConfig?.telegramExternalURL}
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
