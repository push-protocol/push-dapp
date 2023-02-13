// React + Web3 Essentials
import { ethers } from 'ethers';
import { useContext, useEffect, useState } from 'react';

// Internal Components
import { caip10ToWallet } from 'helpers/w2w';
import { AppContext, MessageIPFS } from 'types/chat';
import { Context } from 'modules/chat/ChatModule';
import { intitializeDb } from 'components/chat/w2wChat/w2wIndexeddb';

// Internal Configs
import { appConfig } from '../config';

const getEnsFromIndexDb = async (checksumWallet: string): Promise<any> => {
  const ensFromIndexDB: any = await intitializeDb<string>('Read', 'Wallets', checksumWallet, '', 'ens');
  return ensFromIndexDB;
};

const getEnsName = async (provider: ethers.providers.BaseProvider | any, checksumWallet: string) => {
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


export function useResolveEns(address?: string, ens?: string):string {
  const [ensName, setEnsName] = useState(null);

  const { currentChat }: AppContext = useContext<AppContext>(Context);

  useEffect(() => {
    (async () => {
      let provider = new ethers.providers.InfuraProvider(appConfig.coreContractChain, appConfig.infuraAPIKey);
      if (address) {
        const walletLowercase = caip10ToWallet(address).toLowerCase();
        const checksumWallet = ethers.utils.getAddress(walletLowercase);

        if (ethers.utils.isAddress(checksumWallet)) {
          try {
          let ensFromIndexDb = await getEnsFromIndexDb(checksumWallet);
          if (ensFromIndexDb?.body) {
            setEnsName(ensFromIndexDb?.body);
          } else {
            try {
            let ensResponse = await getEnsName(provider, checksumWallet);

            if (ensResponse) {
              setEnsName(ensResponse);
            }
          }
          catch (e) {
            console.log('Error in resolving ens');
          }
          }
        }
        catch (e) {
          console.log('Error fetching ens from indexDB');
        }
        }
      }
    })();
  }, [currentChat]);

  return ensName;
}
