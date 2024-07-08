import { useFormik } from 'formik';
import * as yup from 'yup';

// Components
import { Box, Button, TextInput } from 'blocks';
import { NewChainAddressValue } from '../AddNewChain.types';
import { FC } from 'react';

export type NewAddressProps = {
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  handleNextStep: () => void;
};

const NewAddress: FC<NewAddressProps> = ({ setAddress, handleNextStep }) => {
  const validationSchema = yup.object().shape({
    address: yup.string().required('Address is required'),
  });
  const formik = useFormik<NewChainAddressValue>({
    initialValues: {
      address: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.debug('in set addrss', values);
      setAddress(values.address);
      handleNextStep();
    },
  });

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
              description="Make sure you own this address as verification will take place."
              value={formik.values.address}
              onChange={formik.handleChange('address')}
              error={formik.touched.address && Boolean(formik.errors.address)}
              errorMessage={formik.touched.address ? formik.errors.address : ''}
            />
          </Box>
          <Button
            disabled={!formik.values.address}
            variant="primary"
          >
            Next
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export { NewAddress };
