import { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { Box } from 'blocks';
import { useAccount } from 'hooks';

import { ChannelDetails, useGetChannelDelegates } from 'queries';

import { ChannelDashboardNotificationSettings } from './ChannelDashboardNotificationSettings';
import { ChannelDashboardDelegates } from './ChannelDashboardDelegates';

import { DashboardActiveState } from '../ChannelDashboard.types';
import { UserStoreType } from 'types';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';

type ChannelDashboardBodyProps = {
  setActiveState: (activeState: DashboardActiveState) => void;
  setChannelDashboardError: (error: string) => void;
  channelDetails?: ChannelDetails;
  loadingChannelDetails: boolean;
};

const ChannelDashboardBody: FC<ChannelDashboardBodyProps> = ({
  setActiveState,
  setChannelDashboardError,
  channelDetails,
  loadingChannelDetails

}) => {
  const { account, chainId } = useAccount();
  const { userPushSDKInstance } = useSelector((state: UserStoreType) => {
    return state.user;
  });

  const addressinCaip = useMemo(() => {
    return convertAddressToAddrCaip(account, chainId);
  }, [chainId, account]);

  const {
    data: channel_delegates,
    refetch: refetchChannelDelegate,
    isLoading: loadingDelegates
  } = useGetChannelDelegates(userPushSDKInstance, addressinCaip);

  return (
    <Box display="flex" gap="spacing-md" width="100%" flexDirection={{ ml: 'column', initial: 'row' }}>
      <ChannelDashboardNotificationSettings
        channel_settings={channelDetails?.channel_settings}
        loadingChannelSettings={loadingChannelDetails}
      />

      <ChannelDashboardDelegates
        channel_delegates={channel_delegates}
        loadingDelegates={loadingDelegates}
        setChannelDashboardError={setChannelDashboardError}
        refetchChannelDelegate={refetchChannelDelegate}
        setActiveState={setActiveState}
      />
    </Box>
  );
};

export { ChannelDashboardBody };
