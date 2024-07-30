import { FC, useContext } from 'react';
import { useSelector } from 'react-redux';

import { Box, OptOut, Separator, Text } from 'blocks';

import { AppContext } from 'contexts/AppContext';

import { shortenText } from 'helpers/UtilityHelper';
import { useAccount } from 'hooks';

import { useRemoveDelegate } from 'queries';

import { UserStoreType } from 'types';

type ChannelDelegateListProps = {
  delegate_address: string;
  refetchChannelDelegate: () => void;
  setChannelDashboardError: (error: string) => void;
}
const ChannelDelegateList: FC<ChannelDelegateListProps> = ({
  delegate_address,
  refetchChannelDelegate,
  setChannelDashboardError
}) => {
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });
  const { wallet } = useAccount();

  // @ts-expect-error
  const { handleConnectWalletAndEnableProfile } = useContext(AppContext);
  const { mutate: removeDelegate, isPending } = useRemoveDelegate();

  const handleRemoveDelegate = async () => {
    if (isPending) return;

    let userPushInstance = userPushSDKInstance;

    if (userPushSDKInstance?.readmode()) {
      userPushInstance = await handleConnectWalletAndEnableProfile({ wallet });
      if (!userPushInstance || userPushInstance?.readmode()) {
        return;
      }
    }

    removeDelegate(
      {
        userPushSDKInstance: userPushInstance,
        delegateAddress: delegate_address,
      },
      {
        onSuccess: () => {
          refetchChannelDelegate();
        },
        onError: (error) => {
          console.log('Error in removing delegatee', error);
          setChannelDashboardError('User rejected signature. Please try again.');
        },
      }
    );


  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="43px"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
      >
        <Box
          display="flex"
          alignItems="center"
          gap="spacing-xxxs"
        >
          <Text
            variant="bs-semibold"
            color="text-primary"
          >
            {shortenText(delegate_address, 7)}
          </Text>
          {/* <Tooltip description={tooltipText}> */}
          {/* <Box cursor="pointer">
            <Copy
              onClick={copyWalletAddress}
              size={14}
              color="icon-tertiary"
            />
          </Box> */}
          {/* </Tooltip> */}
        </Box>

        <Box
          display="flex"
          cursor="pointer"
          gap="spacing-xxxs"
          onClick={handleRemoveDelegate}
        >
          <OptOut
            size={16}
            color="icon-primary"
          />
          <Text color="text-tertiary-inverse">{isPending ? 'Removing' : 'Remove'}</Text>

        </Box>
      </Box>

      <Separator />
    </Box>
  );
};

export { ChannelDelegateList };