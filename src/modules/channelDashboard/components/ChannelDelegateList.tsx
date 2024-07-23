import { FC, useContext } from "react";
import { useSelector } from "react-redux";

import { Box, OptOut, Separator, Skeleton, Text } from "blocks";

import { AppContext } from "contexts/AppContext";

import { shortenText } from "helpers/UtilityHelper";

import { useRemoveDelegate } from "queries";

import { UserStoreType } from "types";

type ChannelDelegateListProps = {
  delegate_address: string;
  setChannelDashboardError: (error: string) => void;
  refetchChannelDelegate: () => void;

}
const ChannelDelegateList: FC<ChannelDelegateListProps> = ({
  delegate_address,
  setChannelDashboardError,
  refetchChannelDelegate
}) => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });
  const { handleConnectWallet } = useContext(AppContext);
  const { mutate: removeDelegate, isPending } = useRemoveDelegate();

  const handleRemoveDelegate = async () => {

    let userPushInstance = userPushSDKInstance;

    if (userPushSDKInstance?.readmode()) {
      userPushInstance = await handleConnectWallet();
      if (!userPushInstance || userPushInstance?.readmode()) {
        return;
      }
    }

    removeDelegate({
      userPushSDKInstance: userPushInstance,
      delegateAddress: delegate_address
    }, {
      onSuccess: () => {
        console.log("Channel Delegate Removed Successfully");
        refetchChannelDelegate();
      },
      onError: (error) => {
        console.log("Error in removing delegatee", error);
        setChannelDashboardError('User rejected signature. Please try again.')
      }
    })

  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      height='43px'
    >
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        height='100%'

      >
        <Text variant='bs-semibold' color='text-primary'>
          {shortenText(delegate_address, 7)}
        </Text>

        <Skeleton isLoading={isPending}>
          <Box
            display='flex'
            cursor='pointer'
            gap='spacing-xxxs'
            onClick={handleRemoveDelegate}
          >
            <OptOut size={16} color='icon-primary' />
            <Text color='text-tertiary-inverse'>Remove</Text>
          </Box>
        </Skeleton>
      </Box>

      <Separator />
    </Box>
  );
};

export { ChannelDelegateList };