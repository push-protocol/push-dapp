import { ethers } from 'ethers';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { getRequiredFieldMessage } from 'common';

type CreateDelegateFormProps = {
  handleAddDelegate: () => void;
  channel_delegates: Array<string> | undefined;
};

type ChannelDelegateFormTypes = {
  delegateAddress: string;
}


const delegateValidation = (channel_delegates: any) =>
  Yup.object().shape({
    delegateAddress: Yup.string()
      .required(getRequiredFieldMessage('Delegate Address'))
      .test('address', 'Invalid Wallet Address', (value) => {
        const isWallet = ethers.utils.isAddress(value);
        return isWallet;
      })
      .test('uniqueDelegate', 'Delegate address already exists', (value) => {
        const existingDelegate = channel_delegates?.find((delegateAddress: string) => delegateAddress === value);
        return !existingDelegate;
      })
  });

const createDelegateForm = ({
  handleAddDelegate,
  channel_delegates
}: CreateDelegateFormProps): ReturnType<typeof useFormik<ChannelDelegateFormTypes>> => {
  return useFormik<ChannelDelegateFormTypes>({
    initialValues: {
      delegateAddress: ''
    },
    validationSchema: delegateValidation(channel_delegates),
    onSubmit: () => {
      handleAddDelegate();
    }
  });
};

export { createDelegateForm };
