// External Packages
import { initializeConnector } from '@web3-react/core'
import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2'

import { CHAIN_DETAILS } from '../config';


// Internal Configs
import { appConfig } from '../config';

require('dotenv').config();
const [mainnet, ...optionalChains] = Object.keys(CHAIN_DETAILS).map(Number);
console.log(mainnet, ...optionalChains)

export const [walletConnectV2, hooks] = initializeConnector<WalletConnectV2>(
  (actions) =>
    new WalletConnectV2({
      actions,
      options: {
        projectId: process.env.REACT_APP_WALLETCONNECT_PROJECT_ID,
        chains: [mainnet,
        ...optionalChains],
        showQrModal: true,
      },
    })
)