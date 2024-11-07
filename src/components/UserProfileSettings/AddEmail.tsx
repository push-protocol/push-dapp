import { FC, useEffect, useState } from 'react';
import { css } from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { ModalResponse } from 'common';

import { Box, Button, Modal, Text, TextInput } from 'blocks';

export type AddEmailProps = { modalControl: ModalResponse };

const AddEmail: FC<AddEmailProps> = ({ modalControl }) => {
  const { isOpen, onClose } = modalControl;
  const [step, setStep] = useState(1); // Step 1 for email input, Step 2 for verification

  // Email validation schema for Step 1
  const emailValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
  });

  // Formik setup for the email form in Step 1
  const emailFormik = useFormik({
    initialValues: { email: '' },
    validationSchema: emailValidationSchema,
    onSubmit: () => {
      setStep(2);
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
    onSubmit: (values) => {
      console.log('Verification code submitted:', values.code);
      // Add your logic here for what happens after the verification code is submitted
    },
  });

  // Watch for code length and submit automatically if it reaches 6 digits
  useEffect(() => {
    if (codeFormik.values.code.length === 6 && !codeFormik.errors.code) {
      codeFormik.submitForm();
    }
  }, [codeFormik.values.code, codeFormik.errors.code]);

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
