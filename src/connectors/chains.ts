import type { AddEthereumChainParameter } from '@web3-react/types';
import { Chain, ChainWithDecimalId } from '@web3-onboard/common';
import { appConfig } from 'config/index.js';
import { ethers } from 'ethers';

const ETH: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Ether',
  symbol: 'ETH',
  decimals: 18,
};

const MATIC: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Matic',
  symbol: 'MATIC',
  decimals: 18,
};

const CELO: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Celo',
  symbol: 'CELO',
  decimals: 18,
};

const BNB: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Binance Coin',
  symbol: 'BNB',
  decimals: 18,
};

const FUSE: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Fuse',
  symbol: 'FUSE',
  decimals: 18,
};

const SPARK: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Spark',
  symbol: 'SPARK',
  decimals: 18,
};

interface BasicChainInformation {
  urls: string[];
  name: string;
  nativeCurrency: AddEthereumChainParameter['nativeCurrency'];
}

interface ExtendedChainInformation extends BasicChainInformation {
  nativeCurrency: AddEthereumChainParameter['nativeCurrency'];
  blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls'];
}

function isExtendedChainInformation(
  chainInformation: BasicChainInformation | ExtendedChainInformation
): chainInformation is ExtendedChainInformation {
  return !!(chainInformation as ExtendedChainInformation).nativeCurrency;
}

export function getAddChainParameters(chainId: number): AddEthereumChainParameter | number {
  const chainInformation = CHAINS[chainId];
  if (isExtendedChainInformation(chainInformation)) {
    return {
      chainId,
      chainName: chainInformation.name,
      nativeCurrency: chainInformation.nativeCurrency,
      rpcUrls: chainInformation.urls,
      blockExplorerUrls: chainInformation.blockExplorerUrls,
    };
  } else {
    return chainId;
  }
}

const getInfuraUrlFor = (network: string) => `https://${network}.infura.io/v3/${appConfig?.infuraAPIKey}`;

type ChainConfig = { [chainId: number]: BasicChainInformation | ExtendedChainInformation };

export const MAINNET_CHAINS: ChainConfig = {
  1: {
    urls: [getInfuraUrlFor('mainnet')].filter(Boolean),
    nativeCurrency: ETH,
    name: 'Mainnet',
    blockExplorerUrls: ['https://etherscan.io'],
  },
  56: {
    urls: ['https://bsc-dataseed.binance.org/'],
    nativeCurrency: BNB,
    name: 'BNB Mainnet',
    blockExplorerUrls: ['https://bscscan.com'],
  },
  1101: {
    urls: ['https://rpc.polygon-zkevm.gateway.fm'],
    nativeCurrency: MATIC,
    name: 'Polygon zkEVM Mainnet',
    blockExplorerUrls: ['https://zkevm.polygonscan.com/'],
  },
  10: {
    urls: [getInfuraUrlFor('optimism-mainnet'), 'https://mainnet.optimism.io'].filter(Boolean),
    name: 'Optimism',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://optimistic.etherscan.io'],
  },
  42161: {
    urls: [getInfuraUrlFor('arbitrum-mainnet'), 'https://arb1.arbitrum.io/rpc'].filter(Boolean),
    name: 'Arbitrum One',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://arbiscan.io'],
  },
  137: {
    urls: [getInfuraUrlFor('polygon-mainnet'), 'https://polygon-rpc.com'].filter(Boolean),
    name: 'Polygon Mainnet',
    nativeCurrency: MATIC,
    blockExplorerUrls: ['https://polygonscan.com'],
  },
  42220: {
    urls: ['https://forno.celo.org'],
    name: 'Celo',
    nativeCurrency: CELO,
    blockExplorerUrls: ['https://explorer.celo.org'],
  },
  122: {
    urls: ['https://rpc.fuse.io'],
    name: 'Fuse Mainnet',
    nativeCurrency: FUSE,
    blockExplorerUrls: ['https://explorer.fuse.io/'],
  },
  7560: {
    name: 'Cyber Mainnet',
    urls: ['https://cyber.alt.technology/'],
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://cyberscan.co/'],
  },
  8453: {
    name: 'Base Mainnet',
    urls: ['https://mainnet.base.org/'],
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://basescan.org/'],
  },
};

export const TESTNET_CHAINS: ChainConfig = {
  // 5: {
  //   urls: [getInfuraUrlFor('goerli')].filter(Boolean),
  //   nativeCurrency: ETH,
  //   name: 'Görli',
  // },
  11155111: {
    urls: [getInfuraUrlFor('sepolia')].filter(Boolean),
    nativeCurrency: ETH,
    name: 'Sepolia',
    blockExplorerUrls: ['https://sepolia.etherscan.io'],
  },
  11155420: {
    urls: [getInfuraUrlFor('optimism-sepolia'), 'https://sepolia.optimism.io'].filter(Boolean),
    name: 'Optimism Sepolia',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://sepolia-optimistic.etherscan.io'],
  },
  421614: {
    urls: [getInfuraUrlFor('arbitrum-sepolia'), 'https://sepolia-rollup.arbitrum.io/rpc'].filter(Boolean),
    name: 'Arbitrum Sepolia',
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://sepolia.arbiscan.io/'],
  },
  80002: {
    urls: [getInfuraUrlFor('polygon-amoy')].filter(Boolean),
    name: 'Polygon Amoy',
    nativeCurrency: MATIC,
    blockExplorerUrls: ['https://www.oklink.com/amoy'],
  },
  44787: {
    urls: ['https://alfajores-forno.celo-testnet.org'],
    name: 'Celo Alfajores',
    nativeCurrency: CELO,
    blockExplorerUrls: ['https://alfajores-blockscout.celo-testnet.org'],
  },
  97: {
    name: 'BNB Testnet',
    urls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
    nativeCurrency: BNB,
    blockExplorerUrls: [],
  },
  2442: {
    name: 'Polygon zkEVM Testnet',
    urls: ['https://rpc.cardona.zkevm-rpc.com'],
    nativeCurrency: MATIC,
    blockExplorerUrls: ['https://cardona-zkevm.polygonscan.com/'],
  },
  123: {
    name: 'Fuse Testnet',
    urls: ['https://rpc.fusespark.io'],
    nativeCurrency: SPARK,
    blockExplorerUrls: ['https://explorer.fusespark.io/'],
  },
  111557560: {
    name: 'Cyber Testnet',
    urls: ['https://cyber-testnet.alt.technology/'],
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://testnet.cyberscan.co/'],
  },
  84532: {
    name: 'Base Sepolia',
    urls: ['https://sepolia.base.org/'],
    nativeCurrency: ETH,
    blockExplorerUrls: ['https://sepolia-explorer.base.org/'],
  },
};

export const CHAINS: ChainConfig = {
  ...MAINNET_CHAINS,
  ...TESTNET_CHAINS,
};

export const URLS: { [chainId: number]: string[] } = Object.keys(CHAINS).reduce<{ [chainId: number]: string[] }>(
  (accumulator, chainId) => {
    const validURLs: string[] = CHAINS[Number(chainId)].urls;

    if (validURLs.length) {
      accumulator[Number(chainId)] = validURLs;
    }

    return accumulator;
  },
  {}
);

export const getWeb3OnboardChains = (): (Chain | ChainWithDecimalId)[] => {
  const web3OnboardChains: (Chain | ChainWithDecimalId)[] = [];
  appConfig.allowedNetworks.forEach((chainId: number) => {
    const details = CHAINS[chainId];
    web3OnboardChains.push({
      id: ethers.utils.hexValue(chainId),
      label: details.name,
      rpcUrl: details.urls[0],
      token: details.nativeCurrency.symbol,
    });
  });
  return web3OnboardChains;
};
