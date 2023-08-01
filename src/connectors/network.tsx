import { initializeConnector } from "@web3-react/core";
import { Network } from "@web3-react/network";

// Internal Configs
import { appConfig } from 'config';

require('dotenv').config();
const CORE_CHAIN_ID = appConfig.coreContractChain;

let RPC_URLS: { [chainId: number]: string } = {
    [CORE_CHAIN_ID]: appConfig.coreRPC,
  };
  
  RPC_URLS = Object.assign(RPC_URLS, appConfig.aliasRPC);

export const [network, hooks] = initializeConnector<Network>((actions) => new Network({ actions, urlMap: RPC_URLS }));
