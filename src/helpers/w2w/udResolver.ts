import Resolution from '@unstoppabledomains/resolution';
import { ethers } from 'ethers';
import { appConfig, CHAIN_DETAILS } from 'config';

export const getUdResolver = (): Resolution => {
  const l1ChainId = appConfig.allowedNetworks.includes(1) ? 1 : 5;
  const l2ChainId = appConfig.allowedNetworks.includes(137) ? 137 : 80001;
  return Resolution.fromEthersProvider({
    uns: {
      locations: {
        Layer1: {
          network: CHAIN_DETAILS[l1ChainId].network,
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
