// React + Web3 Essentials
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';
import { useContext, useEffect, useState } from 'react';

// Internal Components
import { caip10ToWallet } from 'helpers/w2w';
import { AppContext, MessageIPFS } from 'types/chat';
import { Context } from 'modules/chat/ChatModule';
import { intitializeDb } from 'components/chat/w2wChat/w2wIndexeddb';

// Internal Configs
import { appConfig } from 'config';

const getEnsFromIndexDb = async (checksumWallet: string): Promise<any> => {
  const ensFromIndexDB: any = await intitializeDb<string>('Read', 'Wallets', checksumWallet, '', 'ens');
  return ensFromIndexDB;
};

const getEnsName = async (provider, checksumWallet) => {
  let ensName: string = '';
  provider.lookupAddress(checksumWallet).then(async (ens) => {
    if (ens) {
      ensName = ens;
      await intitializeDb<MessageIPFS>('Insert', 'Wallets', checksumWallet, ens, 'ens');
    } else {
      ensName = null;
      await intitializeDb<MessageIPFS>('Insert', 'Wallets', checksumWallet, null, 'ens');
    }
  });
  return ensName;
};

// const getAddress = async (provider: ethers.providers.BaseProvider | any, ensName: string) => {
//   let address: string;
//   let checksummedAddress: string;
//   address = await provider.resolveName(ensName);

//   // this ensures address are checksummed
//   checksummedAddress = ethers.utils.getAddress(address.toLowerCase());

//   return checksummedAddress;
// };

export function useResolveEns(username: string): string {
  const [ensName, setEnsName] = useState(null);
  const { library } = useWeb3React();
  const { currentChat }: AppContext = useContext<AppContext>(Context);
  let isMainnet: boolean = false;

  useEffect(() => {
    // (async () => {
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
        const walletLowercase = caip10ToWallet(username).toLowerCase();
        const checksumWallet = ethers.utils.getAddress(walletLowercase);

        if (ethers.utils.isAddress(checksumWallet)) {
          getEnsFromIndexDb(checksumWallet)
            .then((ensFromIndexDb) => {
              if (ensFromIndexDb?.body) {
                setEnsName(ensFromIndexDb?.body);
              } else {
                getEnsName(provider, checksumWallet)
                  .then((ens) => {
                    if (ens) {
                      setEnsName(ens);
                    }
                  })
                  .catch((e) => console.log('Error in resolving mainnet ens'));
                if (!ensName && !isMainnet) {
                  getEnsName(library, checksumWallet)
                    .then((ens) => {
                      if (ens) {
                        setEnsName(ens);
                      }
                    })
                    .catch((e) => console.log('Error in resolving testnet ens'));
                }
              }
            })
            .catch((e) => console.log('Error in getting ens from indexedDB'));
        } 
        // else {
        //   let addressResponse: string = null;
        //   try {
        //     addressResponse = await getAddress(provider, username);
        //     if (addressResponse) {
        //       setEnsName(addressResponse);
        //     } else if (!addressResponse && !isMainnet) {
        //       try {
        //         addressResponse = await getAddress(library, username);
        //         setEnsName(addressResponse);
        //       } catch (e) {
        //         console.log('Error in getting address from testnet ens');
        //       }
        //     }
        //   } catch (e) {
        //     console.log('Error in getting address from mainnet ens');
        //   }
        // }
      }
    // })();
  }, [currentChat]);

  return ensName;
}
