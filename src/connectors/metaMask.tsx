import { initializeConnector } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';

// Internal Configs
require('dotenv').config();

export const [metaMask, hooks] = initializeConnector<MetaMask>((actions) => new MetaMask({ actions }))