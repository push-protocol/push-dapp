import { useMemo } from 'react';

import { appConfig } from 'config';

import { aliasChainIdToChainName } from 'helpers/UtilityHelper';
import { useAccount } from 'hooks';

import { ALIAS_CHAIN } from 'modules/addNewChain/AddNewChain.types';

import { useGetAliasInfo, useGetChannelDetails } from 'queries';

const CORE_CHAIN_ID = appConfig.coreContractChain;

const useFetchChannelDetails = () => {
  const { account, chainId } = useAccount();

  const onCoreNetwork: boolean = CORE_CHAIN_ID === chainId;

  const selectedChainId = parseInt(chainId);

  const aliasChain = aliasChainIdToChainName[selectedChainId as keyof typeof aliasChainIdToChainName] as ALIAS_CHAIN;

  const { data: aliasData } = useGetAliasInfo({
    alias: account,
    aliasChain: aliasChain as ALIAS_CHAIN
  });

  const accountToFetchChannelDetails = useMemo(() => {
    if (!onCoreNetwork && aliasData && aliasData?.channel) {
      return aliasData.channel;
    }
    return account;
  }, [onCoreNetwork, aliasData, account]);

  // Refetch interval is set based on alias is verified or not.
  // 5000 is given for the case when the user is not on core network and has alias details
  const refetchInterval = useMemo(() => {
    if (!!(!onCoreNetwork && aliasData && aliasData?.channel)) {
      return 5000;
    }
    return 0;
  }, [onCoreNetwork, aliasData]);

  const {
    data: channelDetails,
    isLoading: loadingChannelDetails,
    refetch: refetchChannelDetails
  } = useGetChannelDetails(accountToFetchChannelDetails, refetchInterval);

  return { channelDetails, loadingChannelDetails, refetchChannelDetails };
};
export default useFetchChannelDetails;
