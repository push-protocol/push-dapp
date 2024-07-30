import { FC } from 'react';

import { Box, Button, Select, TextInput } from 'blocks';

import { getSelectChains } from 'common';

import { useChainAliasForm } from '../AddNewChain.form';

import { appConfig } from 'config';

export type NewAddressProps = {
  isLoading: boolean;
};

const NewAddress: FC<NewAddressProps> = ({ isLoading }) => {
  const selectOptions = getSelectChains(appConfig.allowedNetworks);
  const { values: formValues, handleSubmit, handleChange, errors, touched } = useChainAliasForm();
  return (
    <Box width="100%">
      <form onSubmit={handleSubmit}>
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
              value={formValues.alias}
              onChange={handleChange('alias')}
              error={touched?.alias && Boolean(errors?.alias)}
              errorMessage={touched?.alias ? errors?.alias : ''}
            />
            <Box
              display="flex"
              alignSelf="center"
              width={{ dp: 'auto', ml: '100%' }}
              margin="spacing-xxxs spacing-none spacing-none spacing-none"
            >
              <Select
                options={selectOptions}
                value={formValues.chainId}
                onSelect={handleChange('chainId')}
                error={touched?.chainId && Boolean(errors?.chainId)}
                errorMessage={touched?.chainId ? errors.chainId : ''}
              />
            </Box>
          </Box>
          <Button
            disabled={!formValues.alias || isLoading}
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
