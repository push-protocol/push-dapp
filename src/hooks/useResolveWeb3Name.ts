// React + Web3 Essentials
import { ethers } from 'ethers';
import { useContext, useEffect, useState } from 'react';

// Internal Components
import { caip10ToWallet } from 'helpers/w2w';
import { AppContext as ContextType, MessageIPFS } from 'types/chat';
import { Context } from 'modules/chat/ChatModule';
import { AppContext } from 'contexts/AppContext';
import { AppContextType } from 'types/context';

// Internal Configs
import { appConfig } from '../config';
import { getUdResolver } from 'helpers/w2w/udResolver';

const getEnsName = async (provider: ethers.providers.BaseProvider | any, checksumWallet: string,setWeb3NameList:any) => {
  let ensName: string = '';
  provider.lookupAddress(checksumWallet).then(async (ens) => {
    if (ens) {
      ensName = ens;
      setWeb3NameList(prev=>({...prev,[checksumWallet]:ens}))
    } else {
      ensName = null;
    }
  });
  return ensName;
};

const getUnstoppableName = async (checksumWallet: string,setWeb3NameList:any) => {
  // Unstoppable Domains resolution library
  const udResolver = getUdResolver();

  // attempt reverse resolution on provided address
  let udName = await udResolver.reverse(checksumWallet);
  if (udName) {
    setWeb3NameList(prev=>({...prev,[checksumWallet]:udName}))
  } else {
    udName = null;
  }
  return udName;
};

export function useResolveWeb3Name(address?: string) {
  const [web3Name, setWeb3Name] = useState<string>(null);

  const ctx: ContextType = useContext<ContextType>(Context);

  const {web3NameList,setWeb3NameList}:AppContextType=useContext<AppContextType>(AppContext);

  useEffect(() => {
    (async () => {
      setWeb3Name(null);
      let provider = new ethers.providers.InfuraProvider(appConfig.coreContractChain, appConfig.infuraAPIKey);
      if (address) {
        const walletLowercase = caip10ToWallet(address)?.toLowerCase();
        const checksumWallet = ethers.utils.getAddress(walletLowercase);
        if (ethers.utils.isAddress(checksumWallet)) {
          try {
              // attempt ENS name resolution first, with a fallback to Unstoppable Domains if
              // a value is not found from ENS.
              Object.keys(web3NameList).forEach(element => {
                if(web3NameList[checksumWallet]){
                  setWeb3Name(web3NameList[checksumWallet]);
                  return;
                }
              });
              
             
              let web3Response =
              (await getEnsName(provider, checksumWallet,setWeb3NameList)) || (await getUnstoppableName(checksumWallet,setWeb3NameList));
              // store result
              if (web3Response) {
                setWeb3Name(web3Response);
                return;
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
  
}
