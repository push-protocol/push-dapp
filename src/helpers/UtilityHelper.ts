import { appConfig } from 'config';
import { utils } from 'ethers';
import { convertChainIdToChainCaip } from './CaipHelper';

// Utility Helper Functions
const UtilityHelper = {
  isMainnet: (chainId: number) => {
    if (chainId === 1 || chainId === 137) {
      return true;
    }
  },
};

export const MaskedPolygonChannels = {
  '0x2dbf5aFead4759E6151590E4a8F6cD596B7044F8': 1,
  '0xe5b06bfd663C94005B8b159Cd320Fd7976549f9b': 1,
  '0x46b676303ebC5699BF47e416677A57A89c70a015': 1,
  '0x68e9DaC7f8fa2e5F6C823Df82c91AC0F132Ec7E4': 0,
  '0x57f61667Ec26A23C47c77ab1B39c983BE3Bb7855': 1,
  '0xC2f41b3a1FF28Fd2A6EeE76EE12e51482fcFd11F': 1,
  '0x9bE426C8A28ee7Ca935b5C27a4bc2395640c9378': 0,
  '0x994909594Ef6c80cE8d9C85Ad30AeC696E10f73E': 0,
  '0xdc0964aaacE97CF4E7476B4EEbC924730E524ade': 0,
  '0x19A6C52bd08898F8Ee5c6ba3FB67AFd184be8034': 1, // Polygon Bridge
  '0x64A971F0D01b3555Ac60B9Bd151d5B7A75cf12Fd': 0, // MahaDAO
  '0xe8381F84a32A4C2B08c328BfF68c0E889a34F255': 0, // Good Ghosting
  '0x2f5ccA6f594118ef54f4157927A323BaA982Fd78': 0, // mean finance
  '0x77f319B1d9c43a8B729399f81515166632100744': 0, // ethsign
  '0x27F68B2C092DB48928D70EA781F7dE8B844ad07B': 0, // polychain
 }

export const MaskedChannels = {
  '0xDa63D70332139E6A8eCA7513f4b6E2E0Dc93b693': 1, 
  '0xAd95A5fE898679B927C266eB2eDfAbC7fe268C27': 1,
  '0x7101829b8C82184D59D1dAE4361DB057F85656a1': 1,
  '0xf192080bdFbF1ED6f2c6a38Cd273a8ff59018176': 1, 
  '0xEC864BE26084ba3bbF3cAAcF8F6961A9263319C4': 1, 
  '0x7183a02EBb534a7B183741Bab09F4ec932DCe27B': 1, 
  '0xcf3224c64FF2d5b18b5e4460b1103FF9037eFAC2': 1
}

export const isLengthValid = (data: string, len: number): boolean => {
  return data.length <= len;
};

export const isValidUrl = (urlString: string): boolean => {
  var urlPattern = new RegExp(
    '^((?:https|http):\\/\\/)' + // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // validate fragment locator
  return !!urlPattern.test(urlString);
};

export const isValidAddress = (address: string): boolean => {
  return utils.isAddress(address);
}

// Disable the browser notification on Metamask iphone mobile
export const isUserAgentIphone = (userAgent) => {
  return userAgent.indexOf('iPhone') !== -1;
};

export const envUtil = {
  prod: 'app.push.org',
  staging: 'staging.push.org',
  dev: 'dev.push.org',
  localhost: 'localhost',
};

export const EnvHelper = {
  isProd: window.location.hostname === envUtil['prod'],
  isStaging: window.location.hostname === envUtil['staging'],
  isDev: window.location.hostname === envUtil['dev'],
  isLocalHost: window.location.hostname === envUtil['localhost'],
  isProduction() {
    return this.isProd || this.isStaging || this.isDev;
  },
  dappTitle() {
    return `Push (EPNS) ${this.isStaging ? 'Staging' : this.isDev ? 'Dev' : ''} App`;
  },
};

export const networkName = {
  42: 'Ethereum Kovan',
  5: "Ethereum Goerli",
  1: 'Ethereum Mainnet',
  137: 'Polygon Mainnet',
  80001: 'Polygon Mumbai',
};

export const aliasChainIdsMapping = {
  1: 137,
  42: 80001,
  5: 80001
};

export const PolygonNetworks = {
  MUMBAI_TESTNET: {
    chainId: utils.hexValue(80001),
    chainName: 'Polygon Mumbai Testnet',
    nativeCurrency: { name: 'tMATIC', symbol: 'tMATIC', decimals: 18 },
    rpcUrls: ['https://matic-mumbai.chainstacklabs.com', 'https://rpc-mumbai.maticvigil.com'],
    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
  },
  POLYGON_MAINNET: {
    chainId: utils.hexValue(137),
    chainName: 'Polygon Mainnet',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    rpcUrls: ['https://polygon-rpc.com'],
    blockExplorerUrls: ['https://www.polygonscan.com/'],
  },
};

export const CORE_CHAIN_ID: number = appConfig.coreContractChain;

export const getAliasFromChannelDetails = (channelDetails: Object | null | string): string | null => {
  if (!channelDetails || channelDetails === 'unfetched') return null;

  if (channelDetails['aliasDetails']) {
    const aliasDetails = channelDetails['aliasDetails'];
    const aliasChainId = aliasChainIdsMapping[CORE_CHAIN_ID];
    const caipChainId = convertChainIdToChainCaip(aliasChainId);
    if (aliasDetails[caipChainId]) {
      return aliasDetails[caipChainId];
    }
  } else if (channelDetails['address'] != null && channelDetails['address'] != '') {
    if (channelDetails['chain_id'] === aliasChainIdsMapping[CORE_CHAIN_ID].toString()) {
      return channelDetails['address'];
    }
  }

  return null;
};

export default UtilityHelper;
