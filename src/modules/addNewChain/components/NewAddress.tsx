import { FC } from 'react';

import { Alert, Box, Button, Select, TextInput } from 'blocks';

import { getSelectChains } from 'common';

import { useChainAliasForm } from '../AddNewChain.form';

import { allowedNetworks } from '../AddNewChain.constants';

import { ChannelDetails } from 'queries';

export type NewAddressProps = {
  isLoading: boolean;
  channelDetails: ChannelDetails | undefined;
};

const NewAddress: FC<NewAddressProps> = ({ isLoading, channelDetails }) => {
  const selectChainOptions = getSelectChains(allowedNetworks);
  const { values: formValues, handleSubmit, handleChange, errors, touched } = useChainAliasForm();
  const isAliasNetworkExists = channelDetails?.aliases.find(
    (alias) => alias.alias_blockchain_id === formValues.chainId && alias.is_alias_verified
  );

  const validateInput = () => {
    if (!isAliasNetworkExists && formValues.alias) return false;
    return true;
  };

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      gap="spacing-lg"
    >
      {isAliasNetworkExists && (
        <Alert
          variant={'error'}
          heading="Channel already exists on this chain. Select a different chain to proceed."
          showIcon
        />
      )}
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
          >
            <Box width={{ dp: '60%', ml: '100%' }}>
              <TextInput
                label="Your Address on New Chain"
                description="Make sure you own this alias as verification will take place."
                value={formValues.alias}
                onChange={handleChange('alias')}
                error={touched?.alias && Boolean(errors?.alias)}
                errorMessage={touched?.alias ? errors?.alias : ''}
              />
            </Box>
            <Box
              display="flex"
              alignSelf="center"
              width={{ dp: 'auto', ml: '100%' }}
              margin="spacing-none spacing-none spacing-xxxs spacing-none"
            >
              <Select
                options={selectChainOptions}
                value={formValues.chainId}
                onSelect={handleChange('chainId')}
                error={touched?.chainId && Boolean(errors?.chainId)}
                errorMessage={touched?.chainId ? errors.chainId : ''}
              />
            </Box>
          </Box>
          <Button
            disabled={validateInput()}
            variant="primary"
            loading={isLoading}
          >
            {isLoading ? 'Adding new chain' : 'Add'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export { NewAddress };
