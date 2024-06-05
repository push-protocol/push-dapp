// environmental configurations for the dapp for different environments
export const config = {
  /**
   * Push Nodes Environment - can be dev, staging or prod - important to keep one on one connection
   */
  pushNodesEnv: 'prod',

  /**
   * API Calls Related
   */
  appEnv: 'prod', // helps in deciding some text, links, etc, DO NOT CHANGE

  pushNodeApiVersion: 1,
  apiUrl: 'https://backend.epns.io/apis',
  w2wApiUrl: 'https://backend.epns.io/apis',
  toolingApiUrl: 'https://tooling.epns.io/apis',
  deliveryNodeApiUrl: 'https://delivery-prod.epns.io/apis',

  ipfsInfuraAPIKey: import.meta.env.VITE_APP_IPFS_INFURA_API_KEY || '2DVyu4GEkiFksOrihKk8NMEWWwY',
  ipfsInfuraAPISecret: import.meta.env.VITE_APP_IPFS_INFURA_API_SECRET || '8e39eefc3d70b851b47f90611d40cfa5',

  /**
   * Allowed Networks
   */
  allowedNetworks: [
    1, //for ethereum mainnet
    137, //for polygon mainnet
    56, // for bnb mainnet
    // 10, // for optimism mainnet
    42161, // arbitrum mainnet
    1101, // polygon zkevm mainnet
    122, // fuse mainnet
    7560, // Cyber mainnet
  ],

  /**
   * Core Network Related Data
   */
  coreContractChain: 1, //the chain id of the network which the core contract relies on
  coreRPC: 'https://mainnet.infura.io/v3/4ff53a5254144d988a8318210b56f47a',
  mainnetCoreRPC: 'https://mainnet.infura.io/v3/4ff53a5254144d988a8318210b56f47a',
  mainnetCoreContractChain: 1,
  aliasRPC: {
    137: 'https://polygon-mainnet.infura.io/v3/150f25623ae64d08ab7ec7dd0c6b6ee9',
    56: 'https://bsc-dataseed.binance.org/',
    10: 'https://opt-mainnet.g.alchemy.com/v2/JYW0UaSC5Zd0hrI6vE2K9VN1wJupoY5B',
    42161: 'https://arb1.arbitrum.io/rpc',
    1101: 'https://rpc.polygon-zkevm.gateway.fm',
  },
  infuraApiUrl: 'https:/infura-ipfs.io/ipfs/',

  /**
   * Analaytics + Firebase
   */
  googleAnalyticsId: 'UA-165415629-1',
  vapidKey: 'BOMOB--KihZkwM8SQ_OrPEsuu8UcSYiRB9AvMjsWil3WJDmxBEcDex8g4d5rFGgA8U-7esfRM5pvR98jaE1nX0M',
  firebaseConfig: {
    apiKey: 'AIzaSyBrzkFPyNmVDFzGY7dKz2HocUO4m-ni-Fc',
    authDomain: 'epns-ethereum-push-service.firebaseapp.com',
    databaseURL: 'https://epns-ethereum-push-service.firebaseio.com',
    projectId: 'epns-ethereum-push-service',
    storageBucket: 'epns-ethereum-push-service.appspot.com',
    messagingSenderId: '915758146133',
    appId: '1:915758146133:web:2de388356233f5c22f2adc',
    measurementId: 'G-X1L5P2E4EP',
  },

  /**
   * External links
   */
  links: {
    ios: 'https://apps.apple.com/app/ethereum-push-service-epns/id1528614910',
    android: 'https://play.google.com/store/apps/details?id=io.epns.epns',
    extension: 'https://chrome.google.com/webstore/detail/epns-protocol-beta/lbdcbpaldalgiieffakjhiccoeebchmg',
    howto: 'https://push.org/docs',
  },
};

/**
 * Smart Contract Related
 */
export const addresses = {
  ceaErc20: '0xc1C0472c0C80bCcDC7F5D01A376Bd97a734B8815', // mainnet address
  epnscore: '0x66329Fdd4042928BfCAB60b179e1538D56eeeeeE', // mainnet address core
  epnsEthComm: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa', // mainnet address eth comm
  epnsPolyComm: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa', // mainnet address polygon comm
  pushToken: '0xf418588522d5dd018b425E472991E52EBBeEEEEE', // mainnet address
  pushChannelAdmin: '0x65193c896eC400f731712D4f71046CeDd11Bff27', // mainnet push core admin
  aDai: '0xcB1Fe6F440c49E9290c3eb7f158534c2dC374201', // mainnet address
  staking: '0xB72ff1e675117beDefF05a7D0a472c3844cfec85', // mainnet address
  yieldFarmPUSH: '0x6019B84E2eE9EB62BC42E32AB6375A7095886366', // mainnet address
  yieldFarmLP: '0xbB2A70e67770D0A7F5f42d883C5BBE9b85e0DcD6', // mainnet address
  epnsToken: '0xf418588522d5dd018b425E472991E52EBBeEEEEE', // mainnet address
  epnsLPToken: '0xaf31fd9c3b0350424bf96e551d2d1264d8466205', // mainnet address
  rockstar: '0x3f8C2152b79276b78315CAF66cCF951780580A8a', // mainnet address
  batchMintNFT: '0x6BaeeD93336B277D8949Cb89161269032698f443', // mainnet address
  NFTRewards: '0xc4708BB6EC3B797344f123126171302e4e3E68E2', // mainnet address
  distributor: '0x64CfAb2eA55ADAe08c9040fdA247828444fB9D0D', // mainnet address
  uniswapV2Router02: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  WETHAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // mainnet address
  USDTAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7', // mainnet address
  rockstarV2: '0xA2b885e7065EA59a3251489715ca80DE5Ff642f8', //mainnet address
  NFTRewardsV2: '0xdc66567a990B7fa10730459537620857c9e03287', //mainnet address

  //For Yield Farm V1(Deprecated)
  staking: '0xB72ff1e675117beDefF05a7D0a472c3844cfec85', // deprecated staking mainnet addresses
  depYieldFarmPUSH: '0x6019B84E2eE9EB62BC42E32AB6375A7095886366', // deprecated YieldFarmPUSH mainnet address
  depYieldFarmLP: '0xbB2A70e67770D0A7F5f42d883C5BBE9b85e0DcD6', // deprecated YieldFarmLP mainnet addresses

  //For Yield Farm V2
  stakingV2: '0x9D2513F5b539DC774C66b28ACEc94e4bD00105C2', //mainnet address
  yieldFarmLP: '0x9af118D9fA1eFEa5b5a792847554960217DEdb04', //mainnet address
  uniV2LPToken: '0xaf31fd9c3b0350424bf96e551d2d1264d8466205', //same as epnsLPToken
  pushCoreV2: '0x66329Fdd4042928BfCAB60b179e1538D56eeeeeE', //not upgraded

  alphaAccessNft: '0x87d34d40EFaF2d594A7eD9B1126F15Cb3fc721ef',
};

export const CHAIN_DETAILS = {
  1: {
    label: 'Ethereum Mainnet',
    name: 'ETH_MAINNET',
    chainId: 1,
    rpcUrl: 'https://mainnet.infura.io/v3/4ff53a5254144d988a8318210b56f47a',
    commAddress: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    network: 'mainnet',
  },
  137: {
    label: 'Polygon Mainnet',
    name: 'POLYGON_MAINNET',
    chainId: 137,
    rpcUrl: 'https://polygon-mainnet.infura.io/v3/150f25623ae64d08ab7ec7dd0c6b6ee9',
    commAddress: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    network: 'polygon-mainnet',
  },
  56: {
    label: 'BNB Mainnet',
    name: 'BNB_MAINNET',
    chainId: 56,
    rpcUrl: 'https://bsc-dataseed.binance.org/',
    commAddress: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
  },
  10: {
    label: 'Optimism Mainnet',
    name: 'OPTIMISM_MAINNET',
    chainId: 10,
    rpcUrl: 'https://opt-mainnet.g.alchemy.com/v2/JYW0UaSC5Zd0hrI6vE2K9VN1wJupoY5B',
    commAddress: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
  },
  1101: {
    label: 'Polygon zkEVM Mainnet',
    name: 'POLYGON_ZK_EVM_MAINNET',
    chainId: 1101,
    rpcUrl: 'https://rpc.polygon-zkevm.gateway.fm',
    commAddress: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
  },
  42161: {
    label: 'Arbitrum Mainnet',
    name: 'ARBITRUMONE_MAINNET',
    chainId: 42161,
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
    commAddress: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
  },
  122: {
    label: 'Fuse Mainnet',
    name: 'FUSE_MAINNET',
    chainId: 122,
    rpcUrl: 'https://rpc.fuse.io',
    commAddress: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
  },
  7560: {
    label: 'Cyber Mainnet',
    name: 'CYBER_MAINNET',
    chainid: 7560,
    rpcUrl: 'https://cyber.alt.technology/',
    commAddress: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
  },
};
