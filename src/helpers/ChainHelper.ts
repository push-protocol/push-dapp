// React + Web3 Essentials
import { ethers } from 'ethers';

// Internal Components
import { NETWORK_DETAILS } from 'helpers/UtilityHelper';
import { appConfig, CHAIN_DETAILS } from 'config';

// handles network change request
export const handleChangeNetwork: (
  chainId: number,
  provider: ethers.providers.ExternalProvider
) => Promise<void> = async (chainId, provider) => {
  const chainIds = appConfig?.allowedNetworks;
  if (chainIds.includes(chainId)) {
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: ethers.utils.hexValue(chainId) }],
      });
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
