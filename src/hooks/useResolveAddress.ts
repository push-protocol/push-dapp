// React + Web3 Essentials
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';

// Internal Configs
import { appConfig } from 'config';

const getAddress = async (provider: ethers.providers.BaseProvider | any, ensName: string) => {
  let address: string;
  let checksummedAddress: string;
  address = await provider.resolveName(ensName);

  // this ensures address are checksummed
  checksummedAddress = ethers.utils.getAddress(address.toLowerCase());

  return checksummedAddress;
};

export function useResolveAddress(username: string): string {
  const [ensAddress, setEnsAddress] = useState(null);
  const { library } = useWeb3React();
  let isMainnet: boolean = false;

  useEffect(() => {
    (async () => {
      let provider = ethers.getDefaultProvider('mainnet');

      if (
        window.location.hostname == 'app.push.org' ||
        window.location.hostname == 'staging.push.org' ||
        window.location.hostname == 'dev.push.org' ||
        window.location.hostname == 'alpha.push.org' ||
        window.location.hostname == 'w2w.push.org'
      ) {
        provider = new ethers.providers.InfuraProvider('mainnet', appConfig.infuraAPIKey);
      }

      if (window.location.hostname == 'app.push.org') {
        isMainnet = true;
      }

      if (username) {
          let addressResponse: string = null;
          try {
            addressResponse = await getAddress(provider, username);
            if (addressResponse) {
              setEnsAddress(addressResponse);
            } else if (!addressResponse && !isMainnet) {
              try {
                addressResponse = await getAddress(library, username);
                setEnsAddress(addressResponse);
              } catch (e) {
                console.log('Error in getting address from testnet ens');
              }
            }
          } catch (e) {
            console.log('Error in getting address from mainnet ens');
          }
        }
    })();
  }, []);

  return ensAddress;
}
