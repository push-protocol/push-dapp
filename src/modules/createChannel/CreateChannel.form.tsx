import { FC } from 'react';
import { FormikProvider, useFormik, useFormikContext } from 'formik';
import * as Yup from 'yup';

import { getMaxCharLimitFieldMessage, getRequiredFieldMessage, URLRegex } from 'common/Common.form';

import { ChannelInfoFormValues } from './CreateChannel.types';

type CreateChannelFormProviderProps = {
  children: React.ReactNode;
  onSubmit: (values: ChannelInfoFormValues) => void;
};

const CreateChannelValidationSchema = Yup.object().shape({
  channelName: Yup.string().required(getRequiredFieldMessage('Channel Name')).max(32, getMaxCharLimitFieldMessage(32)),
  channelDesc: Yup.string()
    .required(getRequiredFieldMessage('Channel Description'))
    .max(250, getMaxCharLimitFieldMessage(250)),
  channelCategory: Yup.string().required(getRequiredFieldMessage('Channel Category')),
  channelURL: Yup.string()
    .required(getRequiredFieldMessage('Channel URL'))
    .test('url', 'Please enter a valid channel url', (value) => URLRegex.test(value)),
});

const CreateChannelFormProvider: FC<CreateChannelFormProviderProps> = ({ children, onSubmit }) => {
  const createChannelForm = useFormik<ChannelInfoFormValues>({
    initialValues: {
      channelName: '',
      channelDesc: '',
      channelCategory: '',
      channelURL: '',
      image: null,
    },
    validationSchema: CreateChannelValidationSchema,
    onSubmit: onSubmit,
  });

  return <FormikProvider value={createChannelForm}>{children}</FormikProvider>;
};

const useCreateChannelForm = () => {
  const context = useFormikContext<ChannelInfoFormValues>();
  if (!context) {
    throw new Error('useChainAliasFormikContext must be used within a FormikChainAliasProvider');
  }
  return context;
};

export { useCreateChannelForm, CreateChannelFormProvider };
