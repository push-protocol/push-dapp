import { FC, useState } from 'react';

import { ethers } from 'ethers';

import { Alert, Box, Button, TextInput } from 'blocks';

import { ModalHeader } from 'common';

import { useAccount } from 'hooks';

import { useAddSubgraph } from 'queries';

import { DashboardActiveState } from '../ChannelDashboard.types';
import { createSubgraphForm } from '../forms';

type ChannelAddSubgraphProps = {
  setActiveState: (activeState: DashboardActiveState) => void;
};

const ChannelAddSubgraph: FC<ChannelAddSubgraphProps> = ({
  setActiveState
}) => {

  const { account, provider } = useAccount();

  const [addSubgraphError, setAddSubgraphError] = useState<string | null>(null);

  const { mutate: addSubgraph, isPending: addingSubgraph } = useAddSubgraph();

  const handleAddSubgraph = () => {
    setAddSubgraphError(null);
    const input = subgraphForm.values.pollTime + '+' + subgraphForm.values.subgraphId;
    const identityBytes = ethers.utils.toUtf8Bytes(input);

    var signer = provider.getSigner(account);
    console.debug(signer);

    addSubgraph(
      {
        signer,
        identityBytes
      },
      {
        onSuccess: () => {
          console.log('Subgraph Added successfully');
          setActiveState('dashboard');
        },
        onError: (error) => {
          console.log('Error in adding subgraoh', error);
          setAddSubgraphError('Error in adding subgraph. Please Check console for more reason');
        }
      }
    );

  }

  const subgraphForm = createSubgraphForm({ handleAddSubgraph });



  return (
    <Box
      display="flex"
      alignSelf="stretch"
      flexDirection="column"
      backgroundColor="surface-primary"
      borderRadius="radius-lg"
      padding="spacing-lg"
      gap="spacing-xl"
      width={{ initial: '537px', ml: '275px' }}
    >

      <ModalHeader
        title="Add Subgraph"
        description="Enter Subgraph ID and Poll time (atleast 60 sec)"
      />

      {addSubgraphError && (
        <Box width='100%'>
          <Alert
            variant='error'
            heading={addSubgraphError}
            showIcon
          />
        </Box>
      )}

      <form onSubmit={subgraphForm.handleSubmit}>
        <Box display="flex" flexDirection="column" gap="spacing-md">
          <TextInput
            required
            label="Subgraph ID"
            value={subgraphForm.values.subgraphId}
            onChange={subgraphForm.handleChange('subgraphId')}
            error={subgraphForm.touched.subgraphId && Boolean(subgraphForm.errors.subgraphId)}
            errorMessage={subgraphForm.touched.subgraphId ? subgraphForm.errors.subgraphId : ''}
          />
          <TextInput
            required
            label="Poll Time (in Seconds)"
            value={subgraphForm.values.pollTime}
            onChange={subgraphForm.handleChange('pollTime')}
            error={subgraphForm.touched.pollTime && Boolean(subgraphForm.errors.pollTime)}
            errorMessage={subgraphForm.touched.pollTime ? subgraphForm.errors.pollTime : ''}
          />

        </Box>


      </form>

      <Box display="flex" gap="spacing-sm" justifyContent="center">
        <Button size="medium" variant="outline" onClick={() => setActiveState('dashboard')}>
          Back
        </Button>
        <Button disabled={addingSubgraph} onClick={() => subgraphForm.handleSubmit()}>
          {addingSubgraph ? 'Adding' : 'Add Subgraph'}
        </Button>
      </Box>

    </Box>
  );
};

export { ChannelAddSubgraph };