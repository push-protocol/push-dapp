import { FC } from 'react';

import { Box, Button, Select, TextInput } from 'blocks';

import { getSelectChains } from '../AddNewChain.utils';

export type NewAddressProps = {
  formik: any;
  isLoading: boolean;
};

const NewAddress: FC<NewAddressProps> = ({ isLoading, formik }) => {
  const selectOptions = getSelectChains();

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
            gap="spacing-xs"
            alignItems="flex-start"
            width="100%"
            // justifyContent="center"
          >
            <TextInput
              label="Your Address on New Chain"
              description="Make sure you own this alias as verification will take place."
              value={formik.values.alias}
              onChange={formik.handleChange('alias')}
              error={formik?.touched?.alias && Boolean(formik?.errors?.alias)}
              errorMessage={formik?.touched?.alias && formik?.errors?.alias}
            />
            <Box
              display="flex"
              alignSelf="center"
              width={{ dp: 'auto', ml: '100%' }}
              margin="spacing-xxxs spacing-none spacing-none spacing-none"
            >
              <Select
                options={selectOptions}
                value={formik.values.chainId}
                onSelect={formik.handleChange('chainId')}
                error={formik?.touched?.chainId && Boolean(formik?.errors?.chainId)}
                errorMessage={formik?.touched?.chainId && formik?.errors?.chainId}
              />
            </Box>
          </Box>
          <Button
            disabled={!formik.values.alias || isLoading}
            variant="primary"
          >
            {isLoading ? 'Initiating' : 'Add'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export { NewAddress };
