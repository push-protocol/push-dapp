import { Box, Button, TextInput } from "blocks";
import { useFormik } from "formik";
import { FC, useState } from "react";
import * as Yup from 'yup';
import { DashboardActiveState } from "../ChannelDashboard.types";
import { ChannelAddHeader } from "./ChannelAddHeader";
import { useAddSubgraph } from "queries";
import { ethers } from "ethers";
import { useAccount } from "hooks";
import InlineError from "common/components/InlineError";

type ChannelAddSubgraphProps = {
  setActiveState: (activeState: DashboardActiveState) => void;
}

const ChannelAddSubgraph: FC<ChannelAddSubgraphProps> = ({
  setActiveState
}) => {

  const { account, provider } = useAccount();

  const subgraphFormValidation = Yup.object().shape({
    subgraphId: Yup.string().required('Required'),
    pollTime: Yup.string()
      .required('Required')
      .matches(/^\d+$/, 'Must be a valid timestamp in seconds')  // Ensure pollTime is a number
      .test('is-valid-timestamp', 'Invalid timestamp', value => {
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
      console.log("Valuess", values);
      handleAddSubgraph();
    }
  })

  const { mutate: addSubgraph, isPending: addingSubgraph } = useAddSubgraph();
  const [addSubgraphError, setAddSubgraphError] = useState('');

  const handleAddSubgraph = () => {

    const input = subgraphForm.values.pollTime + '+' + subgraphForm.values.subgraphId;
    // Prepare Identity bytes
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
        console.log("Error in adding delegatee", error);
        setAddSubgraphError('User rejected signature. Please try again.')
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

      <ChannelAddHeader
        title="Add Subgraph"
        description="Enter Subgraph ID and Poll time (atleast 60 sec)"
      />

      {addSubgraphError && <InlineError title={addSubgraphError} />}

      <form onSubmit={subgraphForm.handleSubmit}>
        <Box display='flex' flexDirection='column' gap='spacing-md'>
          <TextInput
            required
            label="Subgraph ID"
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
        <Button size="medium" variant="outline" onClick={() => setActiveState('dashboard')}>
          Back
        </Button>
        <Button onClick={() => subgraphForm.handleSubmit()}>
          Add Subgraph
        </Button>
      </Box>

    </Box>
  );
};

export { ChannelAddSubgraph };