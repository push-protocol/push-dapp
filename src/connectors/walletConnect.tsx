// External Packages
import walletConnectModule, { WalletConnectOptions } from '@web3-onboard/walletconnect';

// Internal Packages
import { appConfig } from 'config/index.js';

require('dotenv').config();

const wcV2InitOptions: WalletConnectOptions = {
  /**
   * Project ID associated with [WalletConnect account](https://cloud.walletconnect.com)
   */
  projectId: import.meta.env.VITE_APP_WALLETCONNECT_PROJECT_ID,
  /**
   * Chains required to be supported by all wallets connecting to your DApp
   */
  requiredChains: [appConfig.coreContractChain],
  /**
   * Defaults to `appMetadata.explore` that is supplied to the web3-onboard init
   * Strongly recommended to provide atleast one URL as it is required by some wallets (i.e. MetaMask)
   * To connect with walletconnect
   */
  dappUrl: 'https://localhost:3000/',

  /**
   * Optional chains
   */
  optionalChains: appConfig.allowedNetworks,
  version: 2,
};

export const walletConnect = walletConnectModule(wcV2InitOptions);
