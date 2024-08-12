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

  const {
    data: channelDetails,
    isLoading: loadingChannelDetails,
    refetch: refetchChannelDetails
  } = useGetChannelDetails(accountToFetchChannelDetails);

  return { channelDetails, loadingChannelDetails, refetchChannelDetails };
};
export default useFetchChannelDetails;
