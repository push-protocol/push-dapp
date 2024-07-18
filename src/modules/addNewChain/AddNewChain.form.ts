import * as yup from 'yup';

import { isValidAddress } from 'helpers/ValidationHelper';

export type NewChainAddressValue = {
  alias: string;
  chainId: string;
};

export const validationSchema = yup.object().shape({
  alias: yup
    .string()
    .required('Address is required')
    .test('is-valid-address', 'Invalid wallet address', isValidAddress),
  chainId: yup.string().required('ChainId is required'),
});

export const initialValues = {
  alias: '',
  chainId: '11155111',
};
