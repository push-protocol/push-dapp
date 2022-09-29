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
  '0x9bE426C8A28ee7Ca935b5C27a4bc2395640c9378': 0
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
  prod: 'app.epns.io',
  staging: 'staging.epns.io',
  dev: 'dev.epns.io',
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
  1: 'Ethereum Mainnet',
  137: 'Polygon Mainnet',
  80001: 'Polygon Mumbai',
};

export const aliasChainIdsMapping = {
  1: 137,
  42: 80001,
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
