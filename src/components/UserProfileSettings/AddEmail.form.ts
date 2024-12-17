import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getRequiredFieldMessage } from 'common';

// Validation schema for the email field
export const emailValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required(getRequiredFieldMessage('Email')),
});

// Validation schema for the verification code
export const codeValidationSchema = Yup.object({
  code: Yup.string().length(6, 'Code should be 6 digits').required('Required'),
});

// Formik setup for the email form
export const useEmailFormik = (handleSendVerificationCode: () => void) =>
  useFormik({
    initialValues: { email: '' },
    validationSchema: emailValidationSchema,
    onSubmit: handleSendVerificationCode,
  });

// Formik setup for the code form
export const useCodeFormik = (handleVerificationCode: () => void) =>
  useFormik({
    initialValues: { code: '' },
    validationSchema: codeValidationSchema,
    onSubmit: handleVerificationCode,
  });
