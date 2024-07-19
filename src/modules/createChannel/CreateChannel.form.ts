import { useFormik } from 'formik';
import { ActiveStepKey, ChannelInfoFormValues } from './CreateChannel.types';
import * as Yup from 'yup';

interface FormikProps {
  handleNextStep: (key: ActiveStepKey) => void;
  setActiveStepKey: (key: ActiveStepKey) => void;
}

const channelInfoValidationSchema = Yup.object().shape({
  channelName: Yup.string()
    .max(32, 'Must be 32 characters only')
    .required('Please Enter Channel Name'),
  channelDesc: Yup.string()
    .max(250, 'Channel Description can be 250 characters only')
    .required('Please Enter Channel Description'),
  channelURL: Yup.string()
    .required('Please Enter Channel URL')
    .test('url', 'Please Enter a valid channel url', function(value) {
      const urlPattern = /^(http:\/\/|https:\/\/|www\.)?([\w-]+\.)+[\w-]{2,}(\/[\w.-]*)*\/?$/;
      return urlPattern.test(value);
    })
});

export const createChannelInfoForm = ({ handleNextStep, setActiveStepKey }: FormikProps) =>
  useFormik<ChannelInfoFormValues>({
    initialValues: {
      channelName: '',
      channelDesc: '',
      channelURL: ''
    },
    validationSchema: channelInfoValidationSchema,
    onSubmit: (values) => {
      handleNextStep('upload_logo');
      setActiveStepKey('upload_logo');
    }
  });

const logoValidationSchema = Yup.object().shape({
  image: Yup.mixed().required('Image is required')
});

export const uploadLogoForm = () =>
  useFormik({
    initialValues: {
      image: null,
      imageSrc: '',
      imageType: ''
    },
    validationSchema: logoValidationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
    }
  });
