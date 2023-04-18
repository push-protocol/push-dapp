// React + Web3 Essentials
import { utils } from 'ethers';

// Internal Components
import { convertChainIdToChainCaip } from './CaipHelper';

// Internal Configs
import { appConfig } from '../config';

// Utility Helper Functions
const UtilityHelper = {
  isMainnet: (chainId: number):boolean => {
    if (chainId === 1 || chainId === 137) {
      return true;
    }
    return false;
  },
};

export const MaskedAliasChannels:{
  [x:number]: {
    [y:string]: number
  }
} = {
  137: {
    '0x2dbf5aFead4759E6151590E4a8F6cD596B7044F8': 1,
    '0xe5b06bfd663C94005B8b159Cd320Fd7976549f9b': 1,
    '0x46b676303ebC5699BF47e416677A57A89c70a015': 1,
    '0x68e9DaC7f8fa2e5F6C823Df82c91AC0F132Ec7E4': 0,
    '0x57f61667Ec26A23C47c77ab1B39c983BE3Bb7855': 1,
    '0xC2f41b3a1FF28Fd2A6EeE76EE12e51482fcFd11F': 1,
    '0x9bE426C8A28ee7Ca935b5C27a4bc2395640c9378': 0,
    '0x994909594Ef6c80cE8d9C85Ad30AeC696E10f73E': 0,
    '0xdc0964aaacE97CF4E7476B4EEbC924730E524ade': 0,
    '0x19A6C52bd08898F8Ee5c6ba3FB67AFd184be8034': 0, // Polygon Bridge
    '0x64A971F0D01b3555Ac60B9Bd151d5B7A75cf12Fd': 0, // MahaDAO
    '0xe8381F84a32A4C2B08c328BfF68c0E889a34F255': 0, // Good Ghosting
    '0x2f5ccA6f594118ef54f4157927A323BaA982Fd78': 0, // mean finance
    '0x77f319B1d9c43a8B729399f81515166632100744': 0, // ethsign
    '0x27F68B2C092DB48928D70EA781F7dE8B844ad07B': 0, // polychain
  },
  56: {

  },
  80001: {},
  97: {},
  10: {},
  420: {}
 }
 export const findObject = (data: any,parentArray: any[],property: string ): boolean => {
  let isPresent = false;
  if(data) {
  parentArray.map((value) => {
    if (value[property] == data[property]) {
      isPresent = true;
    }
  });
  }
  return isPresent;
}

export const MaskedChannels = {
  '0x64F4fba925CbDe309acC875b8Af2feb07f2aCCA0': 0, // ETHIndia
  '0xDa63D70332139E6A8eCA7513f4b6E2E0Dc93b693': 1, 
  '0xAd95A5fE898679B927C266eB2eDfAbC7fe268C27': 1,
  '0x7101829b8C82184D59D1dAE4361DB057F85656a1': 1,
  '0xf192080bdFbF1ED6f2c6a38Cd273a8ff59018176': 1, 
  '0xEC864BE26084ba3bbF3cAAcF8F6961A9263319C4': 1, 
  '0x7183a02EBb534a7B183741Bab09F4ec932DCe27B': 1, 
  '0xcf3224c64FF2d5b18b5e4460b1103FF9037eFAC2': 1
}



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
  isProduction():boolean {
    return this.isProd || this.isStaging || this.isDev;
  },
  dappTitle():string {
    return `Push (EPNS) ${this.isStaging ? 'Staging' : this.isDev ? 'Dev' : ''} App`;
  },
};

export const networkName = {
  42: 'Ethereum Kovan',
  5: "Ethereum Goerli",
  1: 'Ethereum Mainnet',
  137: 'Polygon Mainnet',
  80001: 'Polygon Mumbai',
  97: "BNB Testnet",
  56: "BNB Mainnet",
  420: "Optimism Goerli",
  10: "Optimism Mainnet"
};

export const chainNameBackendStandard = {
  5: "ETH_TEST_GOERLI",
  1: 'ETH_MAINNET',
  137: 'POLYGON_MAINNET',
  80001: 'POLYGON_TEST_MUMBAI',
}

export const aliasChainIdToChainName={
  80001:'POLYGON',
  97:'BSC',
  420:'OPTIMISM',
  137:'POLYGON',
  56:'BSC',
  10:'OPTIMISM',
}

export const aliasChainIdsMapping = {
  1: 137,
  42: 80001,
  5: 80001
};

export const NETWORK_DETAILS = {
  POLYGON_TEST_MUMBAI: {
    chainId: utils.hexValue(80001),
    chainName: 'Polygon Mumbai Testnet',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
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
  BNB_TESTNET: {
    chainId: utils.hexValue(97),
    chainName: 'BNB Testnet',
    nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
    blockExplorerUrls: ['https://testnet.bscscan.com/'],
  },
  BNB_MAINNET: {
    chainId: utils.hexValue(56),
    chainName: 'BNB Mainnet',
    nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    blockExplorerUrls: ['https://bscscan.com/'],
  },
  OPTIMISM_TESTNET: {
    chainId: utils.hexValue(420),
    chainName: 'Optimism Testnet',
    nativeCurrency: {name: 'ETH', symbol: 'ETH', decimals: 18},
    rpcUrls: ['https://endpoints.omniatech.io/v1/op/goerli/public'],
    blockExplorerUrls: ['https://goerli-optimism.etherscan.io/']
  },
  OPTIMISM_MAINNET: {
    chainId: utils.hexValue(10),
    chainName: 'Optimism Mainnet',
    nativeCurrency: {name: 'ETH', symbol: 'ETH', decimals: 18},
    rpcUrls: ['https://endpoints.omniatech.io/v1/op/mainnet/public'],
    blockExplorerUrls: ['https://optimistic.etherscan.io/']
  },
};

export const CORE_CHAIN_ID: number = appConfig.coreContractChain;

export type getAliasResponseType = {
  address: string | null, 
  chainId: string | null
}

export const getAliasFromChannelDetails = (channelDetails: Object | null | string): getAliasResponseType => {
  if (!channelDetails || channelDetails === 'unfetched') return null;

  if (channelDetails['aliasDetails']) {
    const aliasDetails = channelDetails['aliasDetails'];
    const aliasDetail = {chainId: null, address: null};
    appConfig.allowedNetworks.forEach((chainID) => {
      const caipChainId = convertChainIdToChainCaip(chainID);
      if (aliasDetails[caipChainId!]) {
        aliasDetail.address = aliasDetails[caipChainId!];
        aliasDetail.chainId = chainID;
      }
    })
    if(aliasDetail.address)
      return aliasDetail;
  } else if (channelDetails['address'] != null && channelDetails['address'] != '') {
    if (appConfig.allowedNetworks.includes(+channelDetails['chain_id'])) {
      return {address: channelDetails['address'], chainId: channelDetails['chain_id']};
    }
  }

  return {address: null, chainId: null};
};


export const CHANNEL_TYPE = {
  TIMEBOUND: 4,
  GENERAL: 2
}

export const shortenText = (str: string, substringLengthStart: number, substringLengthEnd?: number):string => {
  return `${str?.substring(0, substringLengthStart)}...${str?.substring(str?.length-(substringLengthEnd??substringLengthStart))}`;
};

export const swapPropertyOrder = <T extends object>(obj: T, prop1: keyof T, prop2: keyof T): T =>{
  if (!obj.hasOwnProperty(prop1) || !obj.hasOwnProperty(prop2)) {
    throw new Error(`Object does not have one or both of the properties: ${String(prop1)}, ${String(prop2)}`);
  }

  const props = Object.keys(obj) as (keyof T)[];
  const index1 = props.indexOf(prop1);
  const index2 = props.indexOf(prop2);

  if (index1 === -1 || index2 === -1) {
    throw new Error(`One or both properties are not present in the object: ${String(prop1)}, ${String(prop2)}`);
  }

  const reorderedProps = [...props];
  [reorderedProps[index1], reorderedProps[index2]] = [reorderedProps[index2], reorderedProps[index1]];

  return Object.fromEntries(reorderedProps.map(key => [key, obj[key]])) as T;
}

export default UtilityHelper;
