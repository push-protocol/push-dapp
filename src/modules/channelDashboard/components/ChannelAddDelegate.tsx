import { Box, Button, TextInput } from "blocks";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { DashboardActiveState } from "../ChannelDashboard.types";
import { FC, useContext, useState } from "react";
import { ChannelAddHeader } from "./ChannelAddHeader";
import { useAddDelegate, useGetChannelDelegates } from "queries";
import { useSelector } from "react-redux";
import { UserStoreType } from "types";
import { AppContext } from "contexts/AppContext";
import InlineError from "common/components/InlineError";
import { ethers } from "ethers";

type ChannelAddDelegateProps = {
  setActiveState: (activeState: DashboardActiveState) => void;
}
const ChannelAddDelegate: FC<ChannelAddDelegateProps> = ({
  setActiveState,
}) => {

  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });

  const { handleConnectWallet } = useContext(AppContext);

  const [addDelegateError, setAddDelegateError] = useState('');

  const delegateValidation = Yup.object().shape({
    delegateAddress: Yup.string()
      .required('Required')
      .test('address', 'Invalid Address', value => {
        const isWallet = ethers.utils.isAddress(value);
        console.log("Wallet", value, isWallet);
        return isWallet;
      })
  })

  const delegateForm = useFormik({
    initialValues: {
      delegateAddress: ''
    },
    validationSchema: delegateValidation,
    onSubmit: (values) => {
      console.log("Valuess", values);
      handleAddDelegate();
    }
  })

  const { mutate: addDelegate, isPending, isError } = useAddDelegate();
  const { refetch: refetchChannelDelegate } = useGetChannelDelegates(userPushSDKInstance);


  const handleAddDelegate = async () => {
    if (!delegateForm.isValid) {
      return;
    }

    let userPushInstance = userPushSDKInstance;

    if (userPushSDKInstance?.readmode()) {
      userPushInstance = await handleConnectWallet();
      if (!userPushInstance || userPushInstance?.readmode()) {
        return;
      }
    }

    addDelegate({
      userPushSDKInstance: userPushInstance,
      delegateAddress: delegateForm.values.delegateAddress
    }, {
      onSuccess: () => {
        console.log("Channel Delegate Added Successfully");
        refetchChannelDelegate();
        setActiveState('dashboard');
      },
      onError: (error) => {
        console.log("Error in adding delegatee", error);
        setAddDelegateError('User rejected signature. Please try again.')
      }
    })
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
        title="Add Delegate"
        description="Add an account who can send notifications on behalf of the channel"
      />

      {addDelegateError && <InlineError title={addDelegateError} />}

      <form onSubmit={delegateForm.handleSubmit}>
        <Box display='flex' flexDirection='column' gap='spacing-md'>
          <TextInput
            required
            label="Delegate Address"
            onChange={(e) => {
              const inputValue = e.target.value;
              delegateForm.setFieldValue('delegateAddress', inputValue);
            }}
            error={Boolean(delegateForm.errors.delegateAddress)}
            errorMessage={delegateForm.errors.delegateAddress}
          />

          <Box display='flex' gap='spacing-sm' justifyContent='center'>
            <Button size="medium" variant="outline" onClick={() => setActiveState('dashboard')}>Back</Button>
            <Button disabled={isPending}>Add</Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export { ChannelAddDelegate };