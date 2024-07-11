import { FC, useState } from 'react';

import { useSelector } from 'react-redux';
import { MdError } from 'react-icons/md';
import { useFormik } from 'formik';
import * as yup from 'yup';

import useToast from 'hooks/useToast';
import { useInitiateNewChain } from 'queries';

// Components
import { Box, Button, Select, TextInput } from 'blocks';

import { isValidAddress } from 'helpers/ValidationHelper';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';

import { NewChainAddressValue } from '../AddNewChain.types';
import { UserStoreType } from 'types';
import { LOGO_ALIAS_CHAIN } from 'modules/dashboard/configs';
import { chainLabels } from '../AddNewChain.constants';

export type NewAddressProps = {
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  handleNextStep: () => void;
};

const NewAddress: FC<NewAddressProps> = ({ setAddress, handleNextStep }) => {
  const [selectedChainValue, setSelectedChainValue] = useState<string>('80002');
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });

  const toast = useToast();

  const { mutate: initiateNewChain, isPending, isError } = useInitiateNewChain();

  //optimise this
  const selectOptions = Object.keys(LOGO_ALIAS_CHAIN).map((key) => {
    const chainId = parseInt(key, 10);
    const Component = LOGO_ALIAS_CHAIN[chainId];
    return {
      value: key,
      label: chainLabels[chainId],
      icon: <Component />,
    };
  });

  console.debug(selectOptions, 'chain');

  const validationSchema = yup.object().shape({
    alias: yup
      .string()
      .required('Address is required')
      .test('is-valid-address', 'Invalid wallet address', isValidAddress),
  });
  const formik = useFormik<NewChainAddressValue>({
    initialValues: {
      alias: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setAddress(convertAddressToAddrCaip(values.alias, 80002));
      handleInitiate(values.alias);
    },
  });

  //convert to caip before passing the address
  const handleInitiate = (alias: string) => {
    initiateNewChain(
      {
        userPushSDKInstance,
        alias,
      },
      {
        onSuccess: () => {
          handleNextStep();
        },
        onError: (error: any) => {
          if (error) {
            toast.showMessageToast({
              toastTitle: 'Error',
              toastMessage: error.message,
              toastType: 'ERROR',
              getToastIcon: (size) => (
                <MdError
                  size={size}
                  color="red"
                />
              ),
            });
          }
        },
      }
    );
  };
  return (
    <Box width="100%">
      <form onSubmit={formik.handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
          gap="spacing-xl"
        >
          <Box
            display="flex"
            flexDirection={{ ml: 'column', dp: 'row' }}
            alignItems="center"
            gap="spacing-xs"
            width="100%"
            justifyContent="center"
          >
            <TextInput
              label="Your Address on New Chain"
              description="Make sure you own this alias as verification will take place."
              value={formik.values.alias}
              onChange={formik.handleChange('alias')}
              error={formik.touched.alias && Boolean(formik.errors.alias)}
              errorMessage={formik.touched.alias ? formik.errors.alias : ''}
            />
            <Box width={{ dp: 'auto', ml: '100%' }}>
              <Select
                options={selectOptions}
                selectedValue={selectedChainValue}
                onSelect={(value) => {
                  console.debug(value, 'value');
                  setSelectedChainValue(value);
                }}
              />
            </Box>
          </Box>
          <Button
            disabled={!formik.values.alias || (isPending && !isError)}
            variant="primary"
          >
            {isPending && !isError ? 'Initiating' : 'Next'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export { NewAddress };

//error messages fix
// navigation
//fix import order
//select button
