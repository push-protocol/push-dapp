import { Box, Button, Skeleton, Text, TickCircleFilled } from "blocks";
import { addresses } from "config";
import { getPushTokenApprovalAmount } from "helpers";
import { useAccount } from "hooks";
import { FC, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { ChannelInfoFormValues, DashboardActiveState } from "../ChannelDashboard.types";
import isEqual from 'lodash/isEqual';
import { FormikProps } from "formik";

const minFeesForAddChannel = 50;

type EditChannelFooterProps = {
  setActiveState: (activeState: DashboardActiveState) => void;
  channelForm: FormikProps<ChannelInfoFormValues>;

}

const EditChannelFooter: FC<EditChannelFooterProps> = ({
  setActiveState,
  channelForm
}) => {
  const { account, provider } = useAccount();
  const { epnsReadProvider } = useSelector((state) => state.contracts);


  const [feesRequiredForEdit, setFeesRequiredForEdit] = useState<number>();
  // const [pushDeposited, setPushDeposited] = useState(false);
  const [pushApprovalAmount, setPushApprovalAmount] = useState<number>(0);


  useEffect(() => {
    if (!account) return;

    (async function () {
      const amount = await epnsReadProvider.channelUpdateCounter(account);
      setFeesRequiredForEdit(minFeesForAddChannel * (Number(amount) + 1)); //50
    })();
  }, [account]);

  useEffect(() => {
    if (!account || !provider) return;

    (async function () {
      const pushTokenApprovalAmount = await getPushTokenApprovalAmount({
        address: account,
        provider: provider,
        contractAddress: addresses.epnscore,
      });
      console.log("Push TOken Approval Amount >>>", pushTokenApprovalAmount);

      setPushApprovalAmount(parseInt(pushTokenApprovalAmount));
    })();
  }, [account, provider]);


  const checkForChanges = useMemo(() => {
    if (!isEqual(channelForm.values, channelForm.initialValues)) {
      return false
    } else {
      return true
    }
  }, [channelForm.values])



  return (
    <Box display="flex" flexDirection="column" alignSelf="stretch">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        backgroundColor='surface-secondary'
        borderRadius="radius-sm"
        padding="spacing-sm spacing-md"
        alignItems="center"
      >
        <Box>
          <Text
            variant="h4-semibold"
            color='text-primary'
            display={{ ml: 'none', dp: 'block' }}
          >
            Channel edit fee
          </Text>
          <Text
            variant="h5-semibold"
            color='text-primary'
            display={{ ml: 'block', dp: 'none' }}
          >
            Channel edit fee
          </Text>


          <Text
            variant="c-regular"
            color='text-tertiary'
            display={{ ml: 'none', dp: 'block' }}
          >
            Editing channel details requires fees to be deposited
          </Text>

          <Text
            variant="c-regular"
            color='text-tertiary'
            display={{ ml: 'block', dp: 'none' }}
          >
            Editing channel details requires fees to be deposited
          </Text>
        </Box>

        <Skeleton isLoading={!feesRequiredForEdit}>
          <Box display='flex' gap='s1' alignItems='center'>
            {pushApprovalAmount !== 0 && feesRequiredForEdit && pushApprovalAmount >= feesRequiredForEdit &&
              <TickCircleFilled color='text-brand-medium' size={24} />
            }
            <Text variant="h4-semibold" color='text-brand-medium'>
              {feesRequiredForEdit} PUSH
            </Text>
          </Box>
        </Skeleton>
      </Box>


      <Box display='flex' justifyContent='end' gap='spacing-sm' margin='spacing-lg spacing-none spacing-none spacing-none'>
        <Button size="medium" variant="outline" onClick={() => setActiveState('dashboard')}>Back</Button>

        {feesRequiredForEdit && pushApprovalAmount >= feesRequiredForEdit ? (
          <Button
            disabled={checkForChanges}
          // onClick={editChannel} disabled={isDetailsAltered()}
          >
            Save Changes
          </Button>


        ) : (
          <Button variant='primary' size='medium'
          // onClick={depositPush}

          >Approve PUSH</Button>
        )}
      </Box>

    </Box>
  );
};

export { EditChannelFooter };