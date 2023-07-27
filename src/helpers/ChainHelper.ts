// React + Web3 Essentials
import { ethers } from 'ethers';

// Internal Components
import { NETWORK_DETAILS } from 'helpers/UtilityHelper';
import { appConfig, CHAIN_DETAILS } from 'config';
// import { useWeb3React } from '@web3-react/core';

// handles network change request
export const handleChangeNetwork: (
  chainId: number,
  provider: ethers.providers.ExternalProvider
) => Promise<void> = async (chainId, provider) => {
  // const { connector } = useWeb3React();

  const chainIds = appConfig?.allowedNetworks;
  console.log(chainIds.includes(chainId), chainId, provider,'handleChangeNEtwork')
  if (chainIds.includes(chainId)) {
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: ethers.utils.hexValue(chainId) }],
      });
      window.location.reload();
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        const networkDetails = { ...NETWORK_DETAILS[CHAIN_DETAILS[chainId].name] };
        try {
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [networkDetails],
          });
        } catch (addError) {
          console.error(addError);
        }
      }
      console.log(switchError);
    }
  } 
};

// handles network change request
export const handleChangeAllowedNetwork: (
  chainId: number,
  provider: ethers.providers.ExternalProvider,
  connector: any
) => Promise<void> = async (chainId, provider, connector) => {

  const chainIds = appConfig?.allowedNetworks;
  if (chainIds.includes(chainId)) {
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: ethers.utils.hexValue(chainId) }],
      });
      window.location.reload();
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        const networkDetails = { ...NETWORK_DETAILS[CHAIN_DETAILS[chainId].name] };
        try {
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [networkDetails],
          });
        } catch (addError) {
          console.error(addError);
        }
      }
      console.log(switchError);
    }
  } 
  else {
      if (connector.deactivate) {
        await connector.deactivate();
        } else {
        await connector.resetState();
        }

        if (connector && connector.close) {
          await connector.close();
        }
    if (appConfig.coreContractChain === 42)
    return 'Unsupported Network, please connect to the Ethereum Kovan network or Polygon Mumbai network'
    else if (appConfig.coreContractChain === 5)
      return 'Unsupported Network, please connect to the Ethereum Goerli, Polygon Mumbai, BNB testnet, Optimism Goerli or Polygon zkEVM testnet';
    else return 'Unsupported Network, please connect to the Ethereum, Polygon, BNB or Polygon zkEVM Mainnet';
  }
};


