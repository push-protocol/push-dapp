// External Packages
import walletConnectModule, { WalletConnectOptions } from '@web3-onboard/walletconnect';

// Internal Packages
import { appConfig } from "config";

require('dotenv').config();

const wcV2InitOptions: WalletConnectOptions = {
  /**
   * Project ID associated with [WalletConnect account](https://cloud.walletconnect.com)
   */
  projectId: process.env.REACT_APP_WALLETCONNECT_PROJECT_ID,
  /**
   * Chains required to be supported by all wallets connecting to your DApp
   */
  requiredChains: [appConfig.coreContractChain],
  /**
   * Optional chains
   */
  optionalChains: appConfig.allowedNetworks,
  version: 2,
}

export const walletConnect = walletConnectModule(wcV2InitOptions);
