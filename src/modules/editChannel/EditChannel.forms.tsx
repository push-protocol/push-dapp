import { FC } from "react";

import { FormikProvider, useFormik, useFormikContext } from "formik"
import * as Yup from 'yup';

import { useAccount } from "hooks";

import { useGetChannelDetails } from "queries";

import { getMaxCharLimitFieldMessage, getRequiredFieldMessage, URLRegex } from 'common/Common.form';

type EditChannelFormProviderProps = {
  children: React.ReactNode;
}

const EditChanelFormProvider: FC<EditChannelFormProviderProps> = ({
  children,
}) => {
  const { account } = useAccount();

  const { data: channelDetails } = useGetChannelDetails(account);

  const channelFormValidation = Yup.object().shape({
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

  const editChannelForm = useFormik<EditChannelInfoFormValues>({
    initialValues: {
      channelName: channelDetails?.name,
      channelDesc: channelDetails?.info,
      channelURL: channelDetails?.url,
      channelIcon: channelDetails?.iconV2
    },
    validationSchema: channelFormValidation,
    onSubmit: () => {

    }
  });


  return (
    <FormikProvider value={editChannelForm}>
      {children}
    </FormikProvider>
  )
}


const useEditChannelForm = () => {
  const context = useFormikContext<EditChannelInfoFormValues>();
  if (!context) {
    throw new Error('useEditChannelFormikContext must be used within a FormikChainAliasProvider');
  }
  return context;

}

export { useEditChannelForm, EditChanelFormProvider };