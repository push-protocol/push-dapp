import { FC, useState } from "react";

import { ethers } from "ethers";
import { useFormik } from "formik";
import * as Yup from 'yup';

import { Alert, Box, Button, ErrorFilled, TextInput } from "blocks";

import { ModalHeader } from "common";

import { useAccount } from "hooks";

import { useAddSubgraph } from "queries";

import { DashboardActiveState } from "../ChannelDashboard.types";
import { getRequiredFieldMessage } from "common/Common.form";

type ChannelAddSubgraphProps = {
  setActiveState: (activeState: DashboardActiveState) => void;
}

const ChannelAddSubgraph: FC<ChannelAddSubgraphProps> = ({
  setActiveState
}) => {

  const { account, provider } = useAccount();

  const subgraphFormValidation = Yup.object().shape({
    subgraphId: Yup.string().required(getRequiredFieldMessage('Subgraph Id')),
    pollTime: Yup.string()
      .required(getRequiredFieldMessage('Poll Time'))
      .matches(/^\d+$/, 'Must be a valid timestamp in seconds')  // Ensure pollTime is a number
      .test('is-valid-timestamp', 'Invalid timestamp format', value => {
        const timestamp = parseInt(value, 10);
        return !isNaN(timestamp) && timestamp > 0;
      }),
  })

  const subgraphForm = useFormik({
    initialValues: {
      subgraphId: '',
      pollTime: '',
    },
    validationSchema: subgraphFormValidation,
    onSubmit: (values) => {
      handleAddSubgraph();
    }
  })

  const { mutate: addSubgraph, isPending: addingSubgraph } = useAddSubgraph();
  const [addSubgraphError, setAddSubgraphError] = useState('');

  const handleAddSubgraph = () => {
    setAddSubgraphError('')
    const input = subgraphForm.values.pollTime + '+' + subgraphForm.values.subgraphId;
    const identityBytes = ethers.utils.toUtf8Bytes(input);

    var signer = provider.getSigner(account);
    console.debug(signer);

    addSubgraph({
      signer,
      identityBytes,
    }, {
      onSuccess: () => {
        console.log("Subgraph Added successfully");
        setActiveState('dashboard');
      },
      onError: (error) => {
        console.log("Error in adding subgraoh", error);
        setAddSubgraphError('Error in adding subgraph. Please Check console for more reason')
      }
    }
    )
  }

  return (
    <Box
      display='flex'
      alignSelf='stretch'
      flexDirection='column'
      backgroundColor='surface-primary'
      borderRadius="radius-lg"
      padding='spacing-lg'
      gap='spacing-xl'
      width={{ initial: '537px', ml: '275px' }}
    >

      <ModalHeader
        title="Add Subgraph"
        description="Enter Subgraph ID and Poll time (atleast 60 sec)"
      />

      {addSubgraphError && <Alert
        variant='error'
        icon={<ErrorFilled color='icon-state-danger-bold' size={24} />}
        message={addSubgraphError}
        width='100%'
      />}

      <form onSubmit={subgraphForm.handleSubmit}>
        <Box display='flex' flexDirection='column' gap='spacing-md'>
          <TextInput
            required
            label="Subgraph ID"
            value={subgraphForm.values.subgraphId}
            onChange={(e) => {
              const inputValue = e.target.value;
              subgraphForm.setFieldValue('subgraphId', inputValue);
            }}
            error={subgraphForm.touched.subgraphId && Boolean(subgraphForm.errors.subgraphId)}
            errorMessage={subgraphForm.touched.subgraphId ? subgraphForm.errors.subgraphId : ''}
          />
          <TextInput
            required
            label="Poll Time (in Seconds)"
            value={subgraphForm.values.pollTime}
            onChange={(e) => {
              const inputValue = e.target.value;
              subgraphForm.setFieldValue('pollTime', inputValue);
            }}
            error={subgraphForm.touched.pollTime && Boolean(subgraphForm.errors.pollTime)}
            errorMessage={subgraphForm.touched.pollTime ? subgraphForm.errors.pollTime : ''}
          />
        </Box>
      </form>

      <Box display='flex' gap='spacing-sm' justifyContent='center'>
        <Button
          size="medium"
          variant="outline"
          onClick={() => setActiveState('dashboard')}
        >
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