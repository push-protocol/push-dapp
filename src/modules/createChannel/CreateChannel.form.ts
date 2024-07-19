import { useFormik } from 'formik';
import { ActiveStepKey, ChannelInfoFormValues } from './CreateChannel.types';
import * as Yup from 'yup';
import { getMaxCharLimitFieldMessage, getRequiredFieldMessage, URLRegex } from 'common/Common.form';

interface CreateChannelForm {
  handleNextStep: (key: ActiveStepKey) => void;
  setActiveStepKey: (key: ActiveStepKey) => void;
}

const channelInfoValidationSchema = Yup.object().shape({
  channelName: Yup.string()
    .required(getRequiredFieldMessage('Channel Name'))
    .max(32, getMaxCharLimitFieldMessage(32)),
  channelDesc: Yup.string()
    .required(getRequiredFieldMessage('Channel Description'))
    .max(250, getMaxCharLimitFieldMessage(250)),
  channelURL: Yup.string()
    .required(getRequiredFieldMessage('Channel URL'))
    .test('url', 'Please enter a valid channel url', (value) => URLRegex.test(value))
});

export const createChannelInfoForm = ({ handleNextStep, setActiveStepKey }: CreateChannelForm) =>
  useFormik<ChannelInfoFormValues>({
    initialValues: {
      channelName: '',
      channelDesc: '',
      channelURL: ''
    },
    validationSchema: channelInfoValidationSchema,
    onSubmit: (values) => {
      handleNextStep('uploadLogo');
      setActiveStepKey('uploadLogo');
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
