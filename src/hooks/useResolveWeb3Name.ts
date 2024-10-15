// React + Web3 Essentials
import { ethers } from 'ethers';
import { useContext, useEffect } from 'react';
import { createWeb3Name } from '@web3-name-sdk/core';

// Internal Components
import { AppContext } from 'contexts/AppContext';
import { caip10ToWallet } from 'helpers/w2w';
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
      } else {
        domainName = null;
      }
      setWeb3NameList((prev) => ({ ...prev, [checksumWallet]: domainName }));
    });

  return domainName;
};

// TODO This is causing multiple errors constantly on timeout
const getUnstoppableName = async (checksumWallet: string, setWeb3NameList: any) => {
  // Unstoppable Domains resolution library
  const udResolver = getUdResolver();

  // attempt reverse resolution on provided address
  let udName = await udResolver.reverse(checksumWallet);
  if (!udName) {
    udName = null;
  }
  setWeb3NameList((prev) => ({ ...prev, [checksumWallet]: udName }));

  return udName;
};

export function useResolveWeb3Name(address?: string) {
  const { web3NameList, setWeb3NameList }: AppContextType = useContext<AppContextType>(AppContext);

  useEffect(() => {
    (async () => {
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
            if (web3NameList.hasOwnProperty(checksumWallet)) {
              return;
            } else {
              (await getDomainName(checksumWallet, setWeb3NameList)) ||
                (await getUnstoppableName(checksumWallet, setWeb3NameList));
            }
          } catch (e) {
            console.debug('Error fetching web3 name from indexDB', e);
          }
        }
      }

      // no web3 name found
    })();
  }, [address]);
}
