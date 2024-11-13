import { FC, useEffect, useState } from 'react';
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

const AddEmail: FC<AddEmailProps> = ({
  modalControl,
  refetchSocialHandleStatus,
  setErrorMessage,
  setSuccessMessage,
}) => {
  const { isOpen, onClose } = modalControl;
  const { account, isWalletConnected, wallet } = useAccount();
  const { handleConnectWalletAndEnableProfile } = useAppContext();

  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });

  // Getting user Id by wallet address
  const caip10WalletAddress = walletToCAIP10({ account });
  const [step, setStep] = useState(1); // Step 1 for email input, Step 2 for verification

  const { mutate: sendVerification } = useSendEmailVerificationCode();
  const { mutate: verifyVerification } = useVerifyEmailVerificationCode();

  // Email validation schema for Step 1
  const emailValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
  });

  // Formik setup for the email form in Step 1
  const emailFormik = useFormik({
    initialValues: { email: '' },
    validationSchema: emailValidationSchema,
    onSubmit: () => {
      handleSendVerificationCode();
    },
  });

  // Verification code validation schema for Step 2
  const codeValidationSchema = Yup.object({
    code: Yup.string().length(6, 'Code should be 6 digits').required('Required'),
  });

  // Formik setup for the verification code form in Step 2
  const codeFormik = useFormik({
    initialValues: { code: '' },
    validationSchema: codeValidationSchema,
    onSubmit: () => {
      handleVerificationCode();
    },
  });

  // Watch for code length and submit automatically if it reaches 6 digits
  useEffect(() => {
    if (codeFormik.values.code.length === 6 && !codeFormik.errors.code) {
      codeFormik.submitForm();
    }
  }, [codeFormik.values.code, codeFormik.errors.code]);

  const handleSendVerificationCode = async () => {
    const sdkInstance = !userPushSDKInstance?.signer
      ? (await handleConnectWalletAndEnableProfile({ wallet })) ?? undefined
      : userPushSDKInstance;

    const data = {
      wallet: caip10WalletAddress,
      value: emailFormik.values.email,
      valueType: 'email',
    };

    // generate verification proof
    const verificationProof = await generateVerificationProof(data, sdkInstance);

    //if verification proof is null, unlock push profile update to update userPUSHSDKInstance
    if (verificationProof === null || verificationProof === undefined) {
      if (isWalletConnected && userPushSDKInstance && userPushSDKInstance.readmode()) {
        console.log('open modal');
        // setIsAuthModalVisible(true);
      }
    }

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
            setStep(2);
          }
        },
        onError: (error: Error) => {
          console.log('Error sending code', error);
        },
      }
    );
  };

  const handleVerificationCode = async () => {
    const sdkInstance = !userPushSDKInstance?.signer
      ? (await handleConnectWalletAndEnableProfile({ wallet })) ?? undefined
      : userPushSDKInstance;

    const data = {
      wallet: caip10WalletAddress,
      value: emailFormik.values.email,
      valueType: 'email',
      verificationCode: codeFormik.values.code,
    };

    // generate verification proof
    const verificationProof = await generateVerificationProof(data, sdkInstance);

    //if verification proof is null, unlock push profile update to update userPUSHSDKInstance
    if (verificationProof === null || verificationProof === undefined) {
      if (isWalletConnected && userPushSDKInstance && userPushSDKInstance.readmode()) {
        console.log('open modal');
        // setIsAuthModalVisible(true);
      }
    }

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

  return (
    <Modal
      size="small"
      isOpen={isOpen}
      onClose={onClose}
      acceptButtonProps={null}
      cancelButtonProps={null}
    >
      {step == 1 && (
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

      {step == 2 && (
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
