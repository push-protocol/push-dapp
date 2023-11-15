import Resolution from '@unstoppabledomains/resolution';
import { ethers } from 'ethers';
import { appConfig, CHAIN_DETAILS } from 'config';

export const getUdResolver = (): Resolution => {
  // ToDo: Enable for sepolia chainId once UD supports it
  // const l1ChainId = appConfig.allowedNetworks.includes(1) ? 1 : 11155111;
  const l1ChainId = 1;
  const l2ChainId = appConfig.allowedNetworks.includes(137) ? 137 : 80001;
  return Resolution.fromEthersProvider({
    uns: {
      locations: {
        Layer1: {
          network: "mainnet", // add config for sepolia once it's supported by UD
          provider: new ethers.providers.InfuraProvider(l1ChainId, appConfig.infuraAPIKey),
        },
        Layer2: {
          network: CHAIN_DETAILS[l2ChainId].network,
          provider: new ethers.providers.InfuraProvider(l2ChainId, appConfig.infuraAPIKey),
        },
      },
    },
  });
};
