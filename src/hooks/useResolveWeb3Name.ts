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
import { getUdResolver } from 'helpers/w2w/udResolver';

const getWeb3NameFromIndexDb = async (checksumWallet: string): Promise<any> => {
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

const getUnstoppableName = async (checksumWallet: string) => {
  // Unstoppable Domains resolution library
  const udResolver = getUdResolver();

  // attempt reverse resolution on provided address
  let udName = await udResolver.reverse(checksumWallet);
  if (udName) {
    await intitializeDb<MessageIPFS>('Insert', 'Wallets', checksumWallet, udName, 'ens');
  } else {
    udName = null;
    await intitializeDb<MessageIPFS>('Insert', 'Wallets', checksumWallet, null, 'ens');
  }
  return udName;
};

export function useResolveWeb3Name(address?: string): string {
  const [web3Name, setWeb3Name] = useState<string>(null);

  const ctx: AppContext = useContext<AppContext>(Context);

  useEffect(() => {
    (async () => {
      setWeb3Name(null);
      let provider = new ethers.providers.InfuraProvider(appConfig.coreContractChain, appConfig.infuraAPIKey);
      if (address) {
        const walletLowercase = caip10ToWallet(address).toLowerCase();
        const checksumWallet = ethers.utils.getAddress(walletLowercase);
        if (ethers.utils.isAddress(checksumWallet)) {
          try {
            let web3NameFromIndexDb = await getWeb3NameFromIndexDb(checksumWallet);
            if (web3NameFromIndexDb?.body) {
              setWeb3Name(web3NameFromIndexDb?.body);
              return;
            } else {
              try {
                // attempt ENS name resolution first, with a fallback to Unstoppable Domains if
                // a value is not found from ENS.
                let web3Response =
                  (await getEnsName(provider, checksumWallet)) || (await getUnstoppableName(checksumWallet));

                // store result
                if (web3Response) {
                  setWeb3Name(web3Response);
                  return;
                }
              } catch (e) {
                console.error('Error in resolving web3 name', e);
              }
            }
          } catch (e) {
            console.error('Error fetching web3 name from indexDB', e);
          }
        }
      }

      // no web3 name found
      setWeb3Name("");
    })();
  }, [ctx?.currentChat, address]);

  return web3Name;
}
