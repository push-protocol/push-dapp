import React from "react";
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

const CORE_CHAIN_ID = envConfig.coreContractChain;

const InitState = () => {
  const dispatch = useDispatch();
  const { account, library, chainId } = useWeb3React();
  const {
    epnsReadProvider,
    epnsWriteProvider,
    epnsCommReadProvider,
  } = useSelector((state: any) => state.contracts);

  const onCoreNetwork = CORE_CHAIN_ID === chainId;

  React.useEffect(() => {
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
      console.log(commContractInstance, coreContractInstance);
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
        console.log(coreSignerInstance, communicatorSignerInstance);
        dispatch(setCoreWriteProvider(coreSignerInstance));
        dispatch(setCommunicatorWriteProvider(communicatorSignerInstance));
      }
    })();
  }, [account, chainId]);

  React.useEffect(() => {
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

  return <></>;
};

export default InitState;