import * as Yup from 'yup';

export const supportValidationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid E-mail address').required('E-mail is required'),
  topic: Yup.string().required('Topic is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});
