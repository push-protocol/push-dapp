// // React + Web3 Essentials
import { useContext, useEffect, useState } from 'react';

// // Internal Components
import { useAccount } from './useAccount';
import { appConfig } from 'config/index.js';
import { UnsupportedChainIdError } from 'connectors/error';
import { ErrorContext } from 'contexts/ErrorContext';

export function useInactiveListener() {
  const [allowedChain, setAllowedChain] = useState(false);
  const { wallet, chainId, switchChain, disconnect, isActive } = useAccount();
  const { authError, setAuthError } = useContext(ErrorContext);

  const getErrorMessage = () => {
    if (appConfig.coreContractChain === 42)
      return 'Unsupported Network, please connect to the Ethereum Kovan network or Polygon Amoy network';
    else if (appConfig.coreContractChain === 11155111)
      return 'Unsupported Network, please connect to the Ethereum Sepolia, Polygon Amoy, BNB testnet, Optimism Sepolia, Arbitrum Sepolia, Base Sepolia, Linea Sepolia or Polygon zkEVM testnet';
    else
      return 'Unsupported Network, please connect to the Ethereum, Polygon, BNB, Optimism, Arbitrum, Base, Linea or Polygon zkEVM Mainnet';
  };

  useEffect(() => {
    if (wallet && chainId) {
      if (!appConfig.allowedNetworks.includes(chainId)) {
        setAllowedChain(false);
        setAuthError(new UnsupportedChainIdError(getErrorMessage()));
        switchChain(appConfig.coreContractChain).then((success) => {
          if (!success) disconnect(wallet);
        });
      } else {
        if (authError) setAuthError(undefined);
        setAllowedChain(true);
      }
    }
  }, [wallet, chainId, isActive]);

  return { allowedChain };
}
