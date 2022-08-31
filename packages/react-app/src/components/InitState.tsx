import React, { useEffect } from "react";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { addresses, abis , envConfig } from "@project/contracts";
import { useWeb3React } from "@web3-react/core";
import ChannelsDataStore from "singletons/ChannelsDataStore";
import UsersDataStore from "singletons/UsersDataStore";

import {
  setCoreReadProvider,
  setCoreWriteProvider,
  setCommunicatorReadProvider,
  setCommunicatorWriteProvider,
} from "redux/slices/contractSlice";

import {
  setPushAdmin,
} from "redux/slices/contractSlice";
import { convertAddressToAddrCaip } from "helpers/CaipHelper";
import { getReq } from "api";
import { setAliasAddress, setAliasEthAddress, setAliasVerified, setCanVerify, setCoreChannelAdmin, setDelegatees, setUserChannelDetails } from "redux/slices/adminSlice";
import { setProcessingState } from "redux/slices/channelCreationSlice";
import EPNSCoreHelper from "helpers/EPNSCoreHelper";

const CORE_CHAIN_ID = envConfig.coreContractChain;

const InitState = () => {
  const dispatch = useDispatch();
  const { account, library, chainId } = useWeb3React();
  const {
    epnsReadProvider,
    epnsWriteProvider,
    epnsCommReadProvider,
  } = useSelector((state: any) => state.contracts);
  const { channelDetails, delegatees, aliasDetails: { aliasAddr, aliasEthAddr, isAliasVerified } } = useSelector((state: any) => state.admin);
  const { processingState } = useSelector((state: any) => state.channelCreation);

  const onCoreNetwork: boolean = CORE_CHAIN_ID === chainId;

  useEffect(() => {
    if (!library) return;
    
    (async function init() {
      console.log(library);
      const coreProvider = onCoreNetwork
        ? library
        : new ethers.providers.JsonRpcProvider(envConfig.coreRPC)
      
      // inititalise the read contract for the core network
      const coreContractInstance = new ethers.Contract(
        addresses.epnscore,
        abis.epnscore,
        coreProvider
      );
      
      // initialise the read contract for the communicator function
      const commAddress = onCoreNetwork
        ? addresses.epnsEthComm
        : addresses.epnsPolyComm;
      const commContractInstance = new ethers.Contract(
        commAddress,
        abis.epnsComm,
        library
      );
      dispatch(setCommunicatorReadProvider(commContractInstance));
      dispatch(setCoreReadProvider(coreContractInstance));

      // initialise the read contract for the communicator function
      if (!!(library && account)) {
        let signer = library.getSigner(account);
        let coreSigner = coreProvider.getSigner(account);

        const coreSignerInstance = new ethers.Contract(
          addresses.epnscore,
          abis.epnscore,
          coreSigner
        );
        const communicatorSignerInstance = new ethers.Contract(
          commAddress,
          abis.epnsComm,
          signer
        );
        dispatch(setCoreWriteProvider(coreSignerInstance));
        dispatch(setCommunicatorWriteProvider(communicatorSignerInstance));
      }
    })();
  }, [account, chainId]);

  useEffect(() => {
    if (!epnsReadProvider || !epnsCommReadProvider || !epnsWriteProvider) return;
    // save push admin to global state
    epnsReadProvider.pushChannelAdmin()
      .then((response) => {
        dispatch(setPushAdmin(response));
      })
      .catch(err => {
        console.log({ err })
      });

    // EPNS Read Provider Set
    if (epnsReadProvider != null && epnsCommReadProvider != null) {
      // Instantiate Data Stores
      UsersDataStore.instance.init(
        account,
        epnsReadProvider,
        epnsCommReadProvider
      );
      ChannelsDataStore.instance.init(
        account,
        epnsReadProvider,
        epnsCommReadProvider,
        chainId
      );
    }
  }, [epnsReadProvider, epnsCommReadProvider, epnsWriteProvider]);

  // Check if a user is a channel or not
  const checkUserForChannelOwnership = async (channelAddress: string) => {
    if (!channelAddress) return;
    // Check if account is admin or not and handle accordingly
    const ownerAccount = channelAddress;
    EPNSCoreHelper.getChannelJsonFromUserAddress(ownerAccount, epnsReadProvider)
      .then(async (response) => {
        // if channel admin, then get if the channel is verified or not, then also fetch more details about the channel
        const verificationStatus = await epnsWriteProvider.getChannelVerfication(
          ownerAccount
        );
        const channelJson = await epnsWriteProvider.channels(ownerAccount);
        const channelSubscribers = await ChannelsDataStore.instance.getChannelSubscribers(
          account
        );
        dispatch(
          setUserChannelDetails({
            ...response,
            ...channelJson,
            subscribers: channelSubscribers,
          })
        );
        dispatch(setCoreChannelAdmin(ownerAccount));
        dispatch(setCanVerify(Boolean(verificationStatus)));
      })
      .catch((err) => {
        console.log(
          "There was an error [checkUserForChannelOwnership]:",
          err.message
        );
        dispatch(setUserChannelDetails(null));
        dispatch(setProcessingState(0));
      })
  };

  // fetch all the channels who have delegated to this account
  const fetchDelegators = (aliasAddress: string, aliasEthAddress: string, aliasVerified: string) => {
    if (!epnsReadProvider || !epnsCommReadProvider || !epnsWriteProvider) return;

    const channelAddressInCaip = convertAddressToAddrCaip(account, chainId);
    getReq(`/channels/_getUserDelegations/${channelAddressInCaip}`)
      .then(async ({ data: delegators }) => {
        // if there are actual delegators
        // fetch basic information abouot the channels and store it to state
        const isChannelDetails = channelDetails && channelDetails !== 'unfetched';
        let delegateeList: Array<string> = [];
        if (((aliasAddress || aliasEthAddress) && aliasVerified && isChannelDetails) || (processingState === 0 && isChannelDetails)) {
          if(onCoreNetwork)
            delegateeList.push(account);
          else {
            if (aliasEthAddr) {
              delegateeList.push(aliasEthAddr);
            }
          }
        }
        if (delegators && delegators.channelOwners) {
          console.log(delegators.channelOwners, delegators);
          delegateeList.push(...delegators.channelOwners);
          console.log(delegateeList);
        }
        console.log(delegateeList);
        if (delegateeList.length > 0) {
          const channelInformationPromise = [...delegateeList].map((channelAddress) => {
            return ChannelsDataStore.instance
              .getChannelJsonAsync(channelAddress)
              .then((res) => ({ ...res, address: channelAddress }))
              .catch(() => false);
          });
          const channelInformation = await Promise.all(
            channelInformationPromise
          );
          dispatch(setDelegatees(channelInformation));
        } else {
          dispatch(setDelegatees([]));
        }})
      .catch(async (err) => {
        console.log({ err });
      });
  };

  useEffect(() => {
    if (!account) return;
    (async function () {
      await fetchDelegators(aliasAddr, aliasEthAddr, isAliasVerified);
    })()
  }, [aliasAddr, aliasEthAddr, isAliasVerified, account, processingState, channelDetails]);

  // get core address of alias
  const checkUserForEthAlias = async () => {
    const userAddressInCaip = convertAddressToAddrCaip(account, chainId);
    const { aliasEth, aliasVerified} = await getReq(`/v1/alias/${userAddressInCaip}/channel`).then(({ data }) => {
      if (data) {
        dispatch(setAliasEthAddress(data.channel));
        dispatch(setCoreChannelAdmin(data.channel));
        dispatch(setAliasVerified(data.is_alias_verified));
        return {aliasEth: data['channel'], aliasVerified: data['is_alias_verified']};
      }
      return { aliasEth: null, aliasVerified: null };
    });
    return {aliasEth, aliasVerified};
  };

  const checkUserForAlias = async () => {
    let { aliasAddress = null, isAliasVerified = null } = await ChannelsDataStore.instance.getChannelDetailsFromAddress(account);
    if (aliasAddress == "NULL") aliasAddress = null;
    
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
    }
    return;
  }

  useEffect(() => {
    if (!epnsReadProvider || !epnsCommReadProvider || channelDetails !== 'unfetched' || !account)
      return;
    
    (async function () {
      if (onCoreNetwork) {
        await checkUserForChannelOwnership(account);
        await checkUserForAlias();
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
