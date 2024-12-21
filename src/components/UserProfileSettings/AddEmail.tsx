import { FC, useCallback, useEffect, useState } from 'react';
import { css } from 'styled-components';
import { useSelector } from 'react-redux';

import { useEmailFormik, useCodeFormik } from './AddEmail.form'; // Import Formik hooks
import { ModalResponse } from 'common';
import { useAccount } from 'hooks';
import { walletToCAIP10 } from 'helpers/w2w';
import { useAppContext } from 'contexts/AppContext';
import { generateVerificationProof } from 'modules/rewards/utils/generateVerificationProof';
import { useSendHandlesVerificationCode, useVerifyHandlesVerificationCode } from 'queries';

import { Box, Modal, Spinner, Text, TextInput } from 'blocks';

type AddEmailProps = {
  modalControl: ModalResponse;
  refetchSocialHandleStatus: () => void;
  setErrorMessage: (errorMessage: string) => void;
  setSuccessMessage: (successMessage: string) => void;
};

enum Steps {
  EnterEmail = 1,
  VerifyCode = 2,
}

const AddEmail: FC<AddEmailProps> = ({
  modalControl,
  refetchSocialHandleStatus,
  setErrorMessage,
  setSuccessMessage,
}) => {
  const { isOpen, onClose } = modalControl;
  const { account, wallet } = useAccount();
  const { handleConnectWalletAndEnableProfile } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  const caip10WalletAddress = walletToCAIP10({ account });
  const [step, setStep] = useState(1);
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });

  const { mutate: sendVerification, isPending: isSendingVerification } = useSendHandlesVerificationCode();
  const { mutate: verifyVerification } = useVerifyHandlesVerificationCode();

  const getSDKInstance = useCallback(async () => {
    return userPushSDKInstance?.signer ? userPushSDKInstance : await handleConnectWalletAndEnableProfile({ wallet });
  }, [userPushSDKInstance, handleConnectWalletAndEnableProfile, wallet]);

  const handleSendVerificationCode = async () => {
    setIsLoading(true);
    const sdkInstance = await getSDKInstance();
    const data = {
      wallet: caip10WalletAddress,
      value: emailFormik.values.email,
      valueType: 'email',
    };

    const verificationProof = await generateVerificationProof(data, sdkInstance);

    if (!verificationProof) return;

    sendVerification(
      {
        caipAddress: caip10WalletAddress as string,
        verificationProof: verificationProof as string,
        value: emailFormik.values.email,
        social_platform: 'email',
      },
      {
        onSuccess: (response: any) => {
          if (response?.success) {
            setStep(Steps.VerifyCode);
          } else {
            emailFormik?.setFieldError('email', 'Error sending code. Please try again');
          }
          setIsLoading(false);
        },
        onError: (error: Error) => {
          console.log('Error sending code', error);
          setIsLoading(false);
        },
      }
    );
  };

  const handleVerificationCode = async () => {
    const sdkInstance = await getSDKInstance();
    const data = {
      wallet: caip10WalletAddress,
      value: emailFormik.values.email,
      valueType: 'email',
      verificationCode: codeFormik.values.code,
    };

    const verificationProof = await generateVerificationProof(data, sdkInstance);

    if (!verificationProof) return;

    verifyVerification(
      {
        caipAddress: caip10WalletAddress as string,
        verificationCode: codeFormik.values.code,
        value: emailFormik.values.email,
        social_platform: 'email',
      },
      {
        onSuccess: (response: any) => {
          if (response?.success) {
            onClose();
            refetchSocialHandleStatus();
            setSuccessMessage('Email Account was linked successfully');
          } else {
            codeFormik?.setFieldError('code', 'Error verifying code. Please try again');
          }
        },
        onError: (error: Error) => {
          console.log('Error verifying code', error);
          setErrorMessage('Error verifying code');
        },
      }
    );
  };

  // Formik hooks from form.ts
  const emailFormik = useEmailFormik(handleSendVerificationCode);
  const codeFormik = useCodeFormik(handleVerificationCode);

  // Watch for code length and submit automatically if it reaches 6 digits
  useEffect(() => {
    if (codeFormik.values.code.length === 6 && !codeFormik.errors.code) {
      codeFormik.submitForm();
    }
  }, [codeFormik.values.code, codeFormik.errors.code]);

  const resendVerificationCode = () => {
    handleSendVerificationCode();
  };

  return (
    <Modal
      size="small"
      isOpen={isOpen}
      onClose={onClose}
      acceptButtonProps={
        step === Steps.EnterEmail
          ? {
              children: 'Next',
              loading: isSendingVerification || isLoading,
              onClick: () => {
                emailFormik.handleSubmit();
              },
            }
          : null
      }
      cancelButtonProps={null}
    >
      {step === Steps.EnterEmail && (
        <Box width="100%">
          <Text
            textAlign="center"
            variant="h4-semibold"
          >
            Enter your email
          </Text>

          <Text
            textAlign="center"
            variant="bs-regular"
          >
            Confirm your email and verify to connect
          </Text>

          <form onSubmit={emailFormik.handleSubmit}>
            <Box
              margin="spacing-md spacing-none spacing-none spacing-none"
              width="100%"
            >
              <TextInput
                label="Email Address"
                value={emailFormik.values.email}
                onChange={emailFormik.handleChange('email')}
                error={emailFormik.touched.email && Boolean(emailFormik.errors.email)}
                errorMessage={emailFormik.touched.email ? emailFormik.errors.email : ''}
              />
            </Box>
          </form>
        </Box>
      )}

      {step === Steps.VerifyCode && (
        <Box width="100%">
          <Text
            textAlign="center"
            variant="h4-semibold"
          >
            Verify Email
          </Text>

          <Text
            textAlign="center"
            variant="bs-regular"
          >
            We sent you a 6 digit confirmation code to {emailFormik.values.email} Please enter it below to confirm your
            email address.
          </Text>

          <Box
            margin="spacing-md spacing-none"
            width="100%"
          >
            <TextInput
              placeholder="Enter 6-digit code"
              value={codeFormik.values.code}
              onChange={codeFormik.handleChange('code')}
              error={codeFormik.touched.code && Boolean(codeFormik.errors.code)}
              errorMessage={codeFormik.touched.code ? codeFormik.errors.code : ''}
            />
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            gap="spacing-xxxs"
          >
            <Text textAlign="center">Didn't receive a code?</Text>
            <Text
              textAlign="center"
              onClick={resendVerificationCode}
              css={css`
                text-decoration: underline;
                cursor: pointer;
              `}
            >
              Send code again
            </Text>
            {(isSendingVerification || isLoading) && <Spinner variant="secondary"></Spinner>}
          </Box>
        </Box>
      )}
    </Modal>
  );
};

export { AddEmail };
