import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getRequiredFieldMessage } from 'common';

// Define Formik initial values type
type FormValues = {
  displayName: string;
  picture: string | null;
  desc: string | null;
};

// Validation schema for the email field
const validationSchema = Yup.object({
  displayName: Yup.string()
    .max(50, 'Display Name cannot exceed 50 characters')
    .required(getRequiredFieldMessage('Display Name')),
  desc: Yup.string().max(150, 'Bio cannot exceed 150 characters').nullable(),
});

// Formik setup for the email form
export const useUserFormik = (handleSubmit: () => void) => {
  return useFormik<FormValues>({
    initialValues: { displayName: '', picture: null, desc: '' }, // Ensure picture starts as null
    validationSchema,
    onSubmit: handleSubmit,
  });
};
