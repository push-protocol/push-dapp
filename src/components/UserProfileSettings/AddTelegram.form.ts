import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getRequiredFieldMessage } from 'common';

// Validation schema for the telegram field
const telegramValidationSchema = Yup.object({
  telegram: Yup.string().required(getRequiredFieldMessage('Telegram')),
});

// Formik setup for the code form
export const useTelegramFormik = (handleSendVerificationCode: () => void) =>
  useFormik({
    initialValues: { telegram: '' },
    validationSchema: telegramValidationSchema,
    onSubmit: () => {
      handleSendVerificationCode();
    },
  });
