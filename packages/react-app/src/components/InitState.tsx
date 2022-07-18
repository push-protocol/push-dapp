import React from "react";
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { addresses, abis , envConfig } from "@project/contracts";
import { useWeb3React } from "@web3-react/core";

import {
  setCoreReadProvider,
  setCoreWriteProvider,
  setCommunicatorReadProvider,
  setCommunicatorWriteProvider,
} from "redux/slices/contractSlice";

const CORE_CHAIN_ID = envConfig.coreContractChain;

const InitState = () => {
  const dispatch = useDispatch();
  const { account, library, chainId } = useWeb3React();

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

  return <></>;
};

export default InitState;