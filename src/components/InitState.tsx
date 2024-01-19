// React + Web3 Essentials
import { ethers } from 'ethers';
import React, { useContext, useEffect } from 'react';

// External Packages
import { useDispatch, useSelector } from 'react-redux';

// Internal Components
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
import { updateBulkChannelSettings } from 'redux/slices/channelSlice';
import { setPushAdmin } from 'redux/slices/contractSlice';
import { getUserDelegations } from 'services';
import * as PushAPI from '@pushprotocol/restapi';
import { getAliasDetails } from 'services';
import { useAccount } from 'hooks';

// Internals Configs
import { abis, addresses, appConfig, CHAIN_DETAILS } from 'config';
import { AppContext } from 'contexts/AppContext';
import useSDKStream from 'hooks/useStream';

// Constants
const CORE_CHAIN_ID = appConfig.coreContractChain;

const InitState = () => {
  const dispatch = useDispatch();
  const { account, provider, chainId } = useAccount();
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });   
  const { epnsReadProvider, epnsWriteProvider, epnsCommReadProvider } = useSelector((state: any) => state.contracts);
  const {
    channelDetails,
    delegatees,
    aliasDetails: { aliasAddr, aliasEthAddr, isAliasVerified },
  } = useSelector((state: any) => state.admin);
  const { processingState } = useSelector((state: any) => state.channelCreation);

  // enable socket notifications
  useSDKStream();

  const onCoreNetwork: boolean = CORE_CHAIN_ID === chainId;

  useEffect(() => {
    if (!provider || !chainId) return;

    (async function init() {
      const coreProvider = onCoreNetwork ? provider : new ethers.providers.JsonRpcProvider(appConfig.coreRPC);

      // inititalise the read contract for the core network
      const coreContractInstance = new ethers.Contract(addresses.epnscore, abis.epnscore, coreProvider);

      // initialise the read contract for the communicator function
      const commAddress = CHAIN_DETAILS[chainId].commAddress;
      const commContractInstance = new ethers.Contract(commAddress, abis.epnsComm, provider);
      dispatch(setCommunicatorReadProvider(commContractInstance));
      dispatch(setCoreReadProvider(coreContractInstance));

      // initialise the read contract for the communicator function
      if (!!(provider && account)) {
        let signer = provider.getSigner(account);
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
        console.error({ err });
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
        const channelDetail = await userPushSDKInstance.channel.info(account);
        const subsCount = channelDetail.subscriber_count;
        dispatch(
          setUserChannelDetails({
            ...response,
            ...channelJson,
            subscriber_count: subsCount,
          })
        );
        dispatch(setCoreChannelAdmin(ownerAccount));
        dispatch(setCanVerify(Boolean(verificationStatus)));
      })
      .catch((err) => {
        console.error('There was an error [checkUserForChannelOwnership]:', err.message);
        dispatch(setUserChannelDetails(null));
        dispatch(setProcessingState(0));
      });
  };

  // fetch all the channels who have delegated to this account
  const fetchDelegators = async (aliasAddress: string, aliasEthAddress: string, aliasVerified: string) => {
    if (!epnsReadProvider || !epnsCommReadProvider || !epnsWriteProvider) return;

    const userAddressInCaip = convertAddressToAddrCaip(account, chainId);
    try {
      const delegations = await getUserDelegations({ userCaipAddress: userAddressInCaip });
      const isChannelDetails = channelDetails && channelDetails !== 'unfetched';
      let delegateeList: Array<{ channel: string }> = [];
      if (
        ((aliasAddress || aliasEthAddress) && aliasVerified && isChannelDetails) ||
        (processingState === 0 && isChannelDetails)
      ) {
        if (onCoreNetwork) delegateeList.push({ channel: account });
        else {
          if (aliasEthAddr) {
            delegateeList.push({ channel: account });
          }
        }
      }
      if (delegations) {
        delegateeList.push(...delegations);
      }
      if (delegateeList.length > 0) {
        let channelInformationPromise;
        if(onCoreNetwork) {
          channelInformationPromise = [...delegateeList].map(({ channel }) => {
            return userPushSDKInstance.channel.info(convertAddressToAddrCaip(channel, chainId))
          });
        } else {
          channelInformationPromise = [...delegateeList].map(({ channel }) => {
            return getAliasDetails({account,chainId}).then(
              (data) => userPushSDKInstance.channel.info(convertAddressToAddrCaip(data.channel, appConfig.coreContractChain)))
          });
        }
        const channelInformation = await Promise.all(channelInformationPromise);
        dispatch(setDelegatees(channelInformation));
        // get channel settings of all the channels
        const channelSettings = {};
        for (const channel of channelInformation) {
          channelSettings[channel.channel] = channel.channel_settings ? JSON.parse(channel.channel_settings) : [];
        }
        dispatch(updateBulkChannelSettings(channelSettings));
      } else {
        dispatch(setDelegatees([]));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!account || !userPushSDKInstance) return;
    (async function () {
      await fetchDelegators(aliasAddr, aliasEthAddr, isAliasVerified);
    })();
  }, [aliasAddr, aliasEthAddr, isAliasVerified, account, processingState, channelDetails, userPushSDKInstance]);

  // get core address of alias
  const checkUserForEthAlias = async () => {
    const { aliasEth, aliasVerified } = await getAliasDetails({account,chainId}).then((data) => {
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
    if (!epnsReadProvider || !epnsCommReadProvider || channelDetails !== 'unfetched' || !account || !userPushSDKInstance) return;

    (async function () {
      if (onCoreNetwork) {
        checkUserForChannelOwnership(account).then(async () => {
          await checkUserForAlias();
        });
      } else {
        const { aliasEth, aliasVerified } = await checkUserForEthAlias();
        if (aliasEth) {
          // await checkUserForChannelOwnership(aliasEth);
          const channelDetail = await userPushSDKInstance.channel.info(aliasEth);
          if(channelDetail != "channel not found" && channelDetail) {
            dispatch(setUserChannelDetails(channelDetail));
            const channelDetailsFromContract = await epnsReadProvider.channels(aliasEth);
            dispatch(setUserChannelDetails({...channelDetail, ...channelDetailsFromContract}));
          }
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
  }, [epnsReadProvider, epnsCommReadProvider, channelDetails, account, userPushSDKInstance]);

  return <></>;
};

export default InitState;
