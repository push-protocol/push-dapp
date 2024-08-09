import { FC, useMemo, useState } from 'react';

import { Alert, Box } from 'blocks';

import { appConfig } from 'config';

import { useAccount } from 'hooks';

import { useGetChannelDetails } from 'queries';

import { ChannelDashboardHeader } from './ChannelDashboardHeader';
import { AppFooter } from './AppFooter';
import { ChannelDashboardBody } from './ChannelDashboardBody';

import { DashboardActiveState } from '../ChannelDashboard.types';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ChannelDashboardNullChain } from './ChannelDashboardNullChain';

type UserChannelDashboardProps = {
  setActiveState: (activeState: DashboardActiveState) => void;
};

const UserChannelDashboard: FC<UserChannelDashboardProps> = ({ setActiveState }) => {
  const { account, chainId } = useAccount();
  const { data: channelDetails, isLoading: loadingChannelDetails } = useGetChannelDetails(account);

  const [channelDashboardError, setChannelDashboardError] = useState('');

  const verifiedAliasChainIds = channelDetails?.aliases?.map((item) => item.is_alias_verified && parseInt(item.alias_blockchain_id)) || [];
  const onActiveNetwork = appConfig.coreContractChain === chainId || verifiedAliasChainIds.includes(chainId);

  const currentAliasDetails = useMemo(() => {
    return channelDetails?.aliases.find((alias) => {
      return parseInt(alias.alias_blockchain_id) === chainId;
    });
  }, [chainId, channelDetails])

  return (
    <>
      <Box
        display="flex"
        width={{ initial: '1120px', ml: '357px', tb: '700px' }}
        padding="spacing-md"
        flexDirection="column"
        alignItems="center"
        gap="spacing-lg"
        backgroundColor="surface-primary"
        borderRadius="radius-lg"
        margin="spacing-none spacing-none spacing-sm spacing-none"
      >
        <ChannelDashboardHeader
          channelDetails={channelDetails}
          setActiveState={setActiveState}
          onActiveNetwork={onActiveNetwork}
          currentAliasDetails={currentAliasDetails}
        />

        {channelDashboardError && (
          <Box width="100%">
            <Alert variant="error" heading={channelDashboardError} showIcon />
          </Box>
        )}


        {!onActiveNetwork && <ChannelDashboardNullChain currentAliasDetails={currentAliasDetails} />}

        {onActiveNetwork && (
          <Box width="100%" height={{ initial: '355px', tb: 'auto' }}>
            {loadingChannelDetails || !channelDetails?.name ? (
              <Box height="100%" display="flex" justifyContent="center" alignItems="center">
                <LoaderSpinner type={LOADER_TYPE.SEAMLESS} title="Loading Channel Details. Please wait..." />
              </Box>
            ) : (
              <ChannelDashboardBody
                setActiveState={setActiveState}
                setChannelDashboardError={setChannelDashboardError}
              />
            )}
          </Box>
        )}

      </Box>

      <AppFooter />
    </>
  );
};

export { UserChannelDashboard };
