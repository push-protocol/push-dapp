// React + Web3 Essentials
import { ethers } from 'ethers';
import { useContext,useEffect, useState } from 'react';
// Internal Components
import { caip10ToWallet } from 'helpers/w2w';
import { AppContext, Context } from 'sections/chat/ChatMainSection';
import { intitializeDb } from 'components/chat/w2wChat/w2wIndexeddb';
import { MessageIPFS } from 'helpers/w2w/ipfs';

// Internal Configs
import { appConfig } from 'config';

const getEnsFromIndexDb = async(checksumWallet:string):Promise<any> => {
  const ensFromIndexDB: any = await intitializeDb<string>('Read', 'Wallets', checksumWallet, '', 'ens');
  return ensFromIndexDB;
}

export function useResolveEns(username: string): string {
  const [ensName, setEnsName] = useState(null);
  const { currentChat }: AppContext = useContext<AppContext>(Context);
  useEffect(() => {
    if (username) {
      const walletLowercase = caip10ToWallet(username).toLowerCase();
      const checksumWallet = ethers.utils.getAddress(walletLowercase);

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
      getEnsFromIndexDb(checksumWallet).then((ensFromIndexDb)=>{
        if(ensFromIndexDb)
        {
          setEnsName(ensFromIndexDb?.body);
        }
        else{
          provider.lookupAddress(checksumWallet).then(async(ens) => {
            if (ens) {
              setEnsName(ens);
              await intitializeDb<MessageIPFS>('Insert', 'Wallets', checksumWallet, ens, 'ens');
            } else {
              setEnsName(null);
              await intitializeDb<MessageIPFS>('Insert', 'Wallets', checksumWallet, null, 'ens');
            }
          });
        }
      });
    }
  }, [currentChat]);

  return ensName;
}
