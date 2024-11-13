import { FC, useCallback, useEffect, useState } from 'react';
import { css } from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

import { ModalResponse } from 'common';
import { useAccount } from 'hooks';
import { walletToCAIP10 } from 'helpers/w2w';
import { useAppContext } from 'contexts/AppContext';
import { generateVerificationProof } from 'modules/rewards/utils/generateVerificationProof';
import { useSendEmailVerificationCode, useVerifyEmailVerificationCode } from 'queries';

import { Box, Button, Modal, Text, TextInput } from 'blocks';

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

  const caip10WalletAddress = walletToCAIP10({ account });
  const [step, setStep] = useState(1);
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });

  const { mutate: sendVerification } = useSendEmailVerificationCode();
  const { mutate: verifyVerification } = useVerifyEmailVerificationCode();

  const emailValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
  });

  const codeValidationSchema = Yup.object({
    code: Yup.string().length(6, 'Code should be 6 digits').required('Required'),
  });

  const emailFormik = useFormik({
    initialValues: { email: '' },
    validationSchema: emailValidationSchema,
    onSubmit: () => {
      handleSendVerificationCode();
    },
  });

  const codeFormik = useFormik({
    initialValues: { code: '' },
    validationSchema: codeValidationSchema,
    onSubmit: () => {
      handleVerificationCode();
    },
  });

  const getSDKInstance = useCallback(async () => {
    return userPushSDKInstance?.signer ? userPushSDKInstance : await handleConnectWalletAndEnableProfile({ wallet });
  }, [userPushSDKInstance, handleConnectWalletAndEnableProfile, wallet]);

  // Watch for code length and submit automatically if it reaches 6 digits
  useEffect(() => {
    if (codeFormik.values.code.length === 6 && !codeFormik.errors.code) {
      codeFormik.submitForm();
    }
  }, [codeFormik.values.code, codeFormik.errors.code]);

  const handleSendVerificationCode = async () => {
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
      },
      {
        onSuccess: (response: any) => {
          if (response?.success) {
            console.log(response);
            setStep(Steps.VerifyCode);
          }
        },
        onError: (error: Error) => {
          console.log('Error sending code', error);
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
      },
      {
        onSuccess: (response: any) => {
          if (response?.success) {
            onClose();
            refetchSocialHandleStatus();
            setSuccessMessage('Email Account was linked successfully');
          }
        },
        onError: (error: Error) => {
          console.log('Error verifying code', error);
          setErrorMessage('Error verifying code');
        },
      }
    );
  };

  const resendVerificationCode = () => {
    handleSendVerificationCode();
  };

  return (
    <Modal
      size="small"
      isOpen={isOpen}
      onClose={onClose}
      acceptButtonProps={null}
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
              margin="spacing-md spacing-none"
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

            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              width="100%"
              padding="spacing-xs"
            >
              <Button>Next</Button>
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
          </Box>
        </Box>
      )}
    </Modal>
  );
};

export { AddEmail };
