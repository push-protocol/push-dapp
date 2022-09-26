import { useWeb3React } from '@web3-react/core';
import { abis, addresses, appConfig } from 'config';
import { ethers } from 'ethers';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChannelsDataStore from 'singletons/ChannelsDataStore';
import UsersDataStore from 'singletons/UsersDataStore';

import {
  setCommunicatorReadProvider,
  setCommunicatorWriteProvider,
  setCoreReadProvider,
  setCoreWriteProvider,
} from 'redux/slices/contractSlice';

import { getReq } from 'api';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import EPNSCoreHelper from 'helpers/EPNSCoreHelper';
import {
  setAliasAddress,
  setAliasEthAddress,
  setAliasVerified,
  setCanVerify,
  setCoreChannelAdmin,
  setDelegatees,
  setUserChannelDetails,
} from 'redux/slices/adminSlice';
import { setProcessingState } from 'redux/slices/channelCreationSlice';
import { setPushAdmin } from 'redux/slices/contractSlice';
import { getChannelsSearch, getUserDelegations } from 'services';

const CORE_CHAIN_ID = appConfig.coreContractChain;

const InitState = () => {
  const dispatch = useDispatch();
  const { account, library, chainId } = useWeb3React();
  const { epnsReadProvider, epnsWriteProvider, epnsCommReadProvider } = useSelector((state: any) => state.contracts);
  const {
    channelDetails,
    delegatees,
    aliasDetails: { aliasAddr, aliasEthAddr, isAliasVerified },
  } = useSelector((state: any) => state.admin);
  const { processingState } = useSelector((state: any) => state.channelCreation);

  const onCoreNetwork: boolean = CORE_CHAIN_ID === chainId;

  useEffect(() => {
    if (!library) return;

    (async function init() {
      const coreProvider = onCoreNetwork ? library : new ethers.providers.JsonRpcProvider(appConfig.coreRPC);

      // inititalise the read contract for the core network
      const coreContractInstance = new ethers.Contract(addresses.epnscore, abis.epnscore, coreProvider);

      // initialise the read contract for the communicator function
      const commAddress = onCoreNetwork ? addresses.epnsEthComm : addresses.epnsPolyComm;
      const commContractInstance = new ethers.Contract(commAddress, abis.epnsComm, library);
      dispatch(setCommunicatorReadProvider(commContractInstance));
      dispatch(setCoreReadProvider(coreContractInstance));

      // initialise the read contract for the communicator function
      if (!!(library && account)) {
        let signer = library.getSigner(account);
        let coreSigner = coreProvider.getSigner(account);

        const coreSignerInstance = new ethers.Contract(addresses.epnscore, abis.epnscore, coreSigner);
        const communicatorSignerInstance = new ethers.Contract(commAddress, abis.epnsComm, signer);
        dispatch(setCoreWriteProvider(coreSignerInstance));
        dispatch(setCommunicatorWriteProvider(communicatorSignerInstance));
      }
    })();
  }, [account, chainId]);

  useEffect(() => {
    if (!epnsReadProvider || !epnsCommReadProvider || !epnsWriteProvider) return;
    // save push admin to global state
    epnsReadProvider
      .pushChannelAdmin()
      .then((response) => {
        dispatch(setPushAdmin(response));
      })
      .catch((err) => {
        console.log({ err });
      });

    // Push (EPNS) Read Provider Set
    if (epnsReadProvider != null && epnsCommReadProvider != null) {
      // Instantiate Data Stores
      UsersDataStore.instance.init(account, epnsReadProvider, epnsCommReadProvider);
      ChannelsDataStore.instance.init(account, epnsReadProvider, epnsCommReadProvider, chainId);
    }
  }, [epnsReadProvider, epnsCommReadProvider, epnsWriteProvider]);

  // Check if a user is a channel or not
  const checkUserForChannelOwnership = async (channelAddress: string) => {
    if (!channelAddress) return;
    // Check if account is admin or not and handle accordingly
    const ownerAccount = channelAddress;
    return EPNSCoreHelper.getChannelJsonFromUserAddress(ownerAccount, epnsReadProvider)
      .then(async (response) => {
        // if channel admin, then get if the channel is verified or not, then also fetch more details about the channel
        const verificationStatus = await epnsWriteProvider.getChannelVerfication(ownerAccount);
        const channelJson = await epnsWriteProvider.channels(ownerAccount);
        const channelDetail = await getChannelsSearch({
          page: 1,
          limit: 1,
          query: account
        });
        const subsCount = channelDetail[0].subscriber_count;
        dispatch(
          setUserChannelDetails({
            ...response,
            ...channelJson,
            subscriberCount: subsCount,
          })
        );
        dispatch(setCoreChannelAdmin(ownerAccount));
        dispatch(setCanVerify(Boolean(verificationStatus)));
      })
      .catch((err) => {
        console.log('There was an error [checkUserForChannelOwnership]:', err.message);
        dispatch(setUserChannelDetails(null));
        dispatch(setProcessingState(0));
      });
  };

  // fetch all the channels who have delegated to this account
  const fetchDelegators = async (aliasAddress: string, aliasEthAddress: string, aliasVerified: string) => {
    if (!epnsReadProvider || !epnsCommReadProvider || !epnsWriteProvider) return;

    const userAddressInCaip = convertAddressToAddrCaip(account, chainId);
    try {
      const delegations = await getUserDelegations({userCaipAddress: userAddressInCaip});
        const isChannelDetails = channelDetails && channelDetails !== 'unfetched';
        let delegateeList: Array<{channel: string}> = [];
        console.log(delegations);
        if (
          ((aliasAddress || aliasEthAddress) && aliasVerified && isChannelDetails) ||
          (processingState === 0 && isChannelDetails)
        ) {
          if (onCoreNetwork) delegateeList.push({channel: account});
          else {
            if (aliasEthAddr) {
              delegateeList.push({channel: aliasEthAddr});
            }
          }
        }
        if (delegations) {
          delegateeList.push(...delegations);
        }
        console.log(delegateeList);
        if (delegateeList.length > 0) {
          const channelInformationPromise = [...delegateeList].map(({channel}) => {
            return ChannelsDataStore.instance
              .getChannelJsonAsync(channel)
              .then((res) => ({ ...res, address: channel }))
              .catch(() => false);
          });
          const channelInformation = await Promise.all(channelInformationPromise);
          dispatch(setDelegatees(channelInformation));
        } else {
          dispatch(setDelegatees([]));
        }
      } catch(err) {
        console.log(err);
      };
  };

  useEffect(() => {
    if (!account) return;
    (async function () {
      await fetchDelegators(aliasAddr, aliasEthAddr, isAliasVerified);
    })();
  }, [aliasAddr, aliasEthAddr, isAliasVerified, account, processingState, channelDetails]);

  // get core address of alias
  const checkUserForEthAlias = async () => {
    const userAddressInCaip = convertAddressToAddrCaip(account, chainId);
    const { aliasEth, aliasVerified } = await getReq(`/v1/alias/${userAddressInCaip}/channel`).then(({ data }) => {
      if (data) {
        dispatch(setAliasEthAddress(data.channel));
        dispatch(setCoreChannelAdmin(data.channel));
        dispatch(setAliasVerified(data.is_alias_verified));
        return { aliasEth: data['channel'], aliasVerified: data['is_alias_verified'] };
      }
      return { aliasEth: null, aliasVerified: null };
    });
    return { aliasEth, aliasVerified };
  };

  const checkUserForAlias = async () => {
    let { aliasAddress = null, isAliasVerified = null } = await ChannelsDataStore.instance.getChannelDetailsFromAddress(
      account
    );
    if (aliasAddress == 'NULL') aliasAddress = null;

    if (aliasAddress) {
      dispatch(setAliasAddress(aliasAddress));
      dispatch(setAliasVerified(isAliasVerified));
      if (isAliasVerified) {
        dispatch(setAliasVerified(true));
        dispatch(setProcessingState(0));
      } else {
        dispatch(setProcessingState(2));
        dispatch(setAliasVerified(false));
      }
    } else {
      dispatch(setProcessingState(0));
    }
    return;
  };

  useEffect(() => {
    if (!epnsReadProvider || !epnsCommReadProvider || channelDetails !== 'unfetched' || !account) return;

    (async function () {
      if (onCoreNetwork) {
        checkUserForChannelOwnership(account).then(async () => {
          await checkUserForAlias();
        });
      } else {
        const { aliasEth, aliasVerified } = await checkUserForEthAlias();
        if (aliasEth) {
          await checkUserForChannelOwnership(aliasEth);
          if (!aliasVerified) {
            dispatch(setProcessingState(3));
          } else {
            dispatch(setProcessingState(0));
          }
        } else {
          dispatch(setUserChannelDetails(null));
          dispatch(setProcessingState(0));
        }
      }
    })();
  }, [epnsReadProvider, epnsCommReadProvider, channelDetails, account]);

  return <></>;
};

export default InitState;
