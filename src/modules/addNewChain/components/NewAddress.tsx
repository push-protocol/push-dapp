import { useFormik } from 'formik';
import * as yup from 'yup';

// Components
import { Box, Button, TextInput } from 'blocks';
import { NewChainAddressValue } from '../AddNewChain.types';
import { FC } from 'react';
import { useInitiateNewChain } from 'queries';
import { useSelector } from 'react-redux';
import { UserStoreType } from 'types';
import useToast from 'hooks/useToast';
import { MdError } from 'react-icons/md';
import { isValidAddress } from 'helpers/ValidationHelper';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';

export type NewAddressProps = {
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  handleNextStep: () => void;
};

const NewAddress: FC<NewAddressProps> = ({ setAddress, handleNextStep }) => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });

  const toast = useToast();

  const { mutate: initiateNewChain, isPending, isError } = useInitiateNewChain();

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
          gap="s10"
        >
          <Box
            display="flex"
            alignItems="center"
            gap="s3"
            width="100%"
          >
            <TextInput
              label="Your Address on New Chain"
              description="Make sure you own this alias as verification will take place."
              value={formik.values.alias}
              onChange={formik.handleChange('alias')}
              error={formik.touched.alias && Boolean(formik.errors.alias)}
              errorMessage={formik.touched.alias ? formik.errors.alias : ''}
            />
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