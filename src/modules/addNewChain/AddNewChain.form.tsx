import React, { FC } from 'react';
import { FormikProvider, useFormik, useFormikContext } from 'formik';
import * as yup from 'yup';

import { isValidAddress } from 'helpers/ValidationHelper';

export type NewChainAddressValue = {
  alias: string;
  chainId: string;
};

type FormikChainAliasProviderProps = {
  children: React.ReactNode;
  onSubmit: (values: NewChainAddressValue) => void;
};

const FormikChainAliasProvider: FC<FormikChainAliasProviderProps> = ({ children, onSubmit }) => {
  const validationSchema = yup.object().shape({
    alias: yup
      .string()
      .required('Address is required')
      .test('is-valid-address', 'Invalid wallet address', isValidAddress),
    chainId: yup.string().required('ChainId is required'),
  });

  const formik = useFormik<NewChainAddressValue>({
    initialValues: {
      alias: '',
      chainId: '11155111',
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return <FormikProvider value={formik}>{children}</FormikProvider>;
};

const useChainAliasForm = () => {
  const context = useFormikContext<NewChainAddressValue>();
  if (!context) {
    throw new Error('useChainAliasFormikContext must be used within a FormikChainAliasProvider');
  }
  return context;
};

export { FormikChainAliasProvider, useChainAliasForm };
