// React + Web3 Essentials
import { ethers } from 'ethers';
import { useContext, useEffect, useState } from 'react';
import { createWeb3Name } from '@web3-name-sdk/core';

// Internal Components
import { AppContext } from 'contexts/AppContext';
import { caip10ToWallet } from 'helpers/w2w';
import { Context } from 'modules/chat/ChatModule';
import { AppContext as ContextType, MessageIPFS } from 'types/chat';
import { AppContextType } from 'types/context';

// Internal Configs
import { getUdResolver } from 'helpers/w2w/udResolver';
import { appConfig } from '../config/index.js';

const getDomainName = async (checksumWallet: string, setWeb3NameList: any) => {
  let domainName: string | null = '';
  const web3NameClient = createWeb3Name();
  web3NameClient
    .getDomainName({
      address: checksumWallet,
      queryChainIdList: appConfig.allowedNetworks,
    })
    .then(async (domain) => {
      if (domain) {
        domainName = domain;
        setWeb3NameList((prev) => ({ ...prev, [checksumWallet]: domain }));
      } else {
        domainName = null;
      }
    });
  return domainName;
};

// TODO This is causing multiple errors constantly on timeout
const getUnstoppableName = async (checksumWallet: string, setWeb3NameList: any) => {
  // Unstoppable Domains resolution library
  const udResolver = getUdResolver();

  // attempt reverse resolution on provided address
  let udName = await udResolver.reverse(checksumWallet);
  if (udName) {
    setWeb3NameList((prev) => ({ ...prev, [checksumWallet]: udName }));
  } else {
    udName = null;
  }
  return udName;
};

export function useResolveWeb3Name(address?: string) {
  const [web3Name, setWeb3Name] = useState<string | null>(null);

  const ctx: ContextType = useContext<ContextType>(Context);

  const { web3NameList, setWeb3NameList }: AppContextType = useContext<AppContextType>(AppContext);

  useEffect(() => {
    (async () => {
      setWeb3Name(null);
      if (address) {
        const walletLowercase = address.includes(':nft')
          ? caip10ToWallet(
              address
                ?.replace(/eip155:\d+:/, 'eip155:')
                .split(':nft')[0]
                .toString()
                .toLowerCase()
            )
          : caip10ToWallet(address.split(',')[0].toString())?.toLowerCase();
        const checksumWallet = ethers.utils.getAddress(walletLowercase);
        if (ethers.utils.isAddress(checksumWallet)) {
          try {
            Object.keys(web3NameList).forEach((element) => {
              if (web3NameList[checksumWallet]) {
                setWeb3Name(web3NameList[checksumWallet]);
                return;
              }
            });

            let web3Response =
              (await getDomainName(checksumWallet, setWeb3NameList)) ||
              (await getUnstoppableName(checksumWallet, setWeb3NameList));
            // store result
            if (web3Response) {
              setWeb3Name(web3Response);
              return;
            }
          } catch (e) {
            console.debug('Error fetching web3 name from indexDB', e);
          }
        }
      }

      // no web3 name found
      setWeb3Name('');
    })();
  }, [ctx?.currentChat, address]);
}
