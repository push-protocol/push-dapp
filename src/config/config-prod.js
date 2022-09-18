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

  ipfsInfuraAPIKey: process.env.REACT_APP_IPFS_INFURA_API_KEY || '22rfiNb1J645FdehoqbKMpLbF6V',
  ipfsInfuraAPISecret: process.env.REACT_APP_IPFS_INFURA_API_SECRET || 'a757597f020425c3ae532e6be84de552',

  /**
   * Allowed Networks
   */
  allowedNetworks: [
    1, //for ropsten
    137, //for mumbai polygon
  ],

  /**
   * Core Network Related Data
   */
  coreContractChain: 1, //the chain id of the network which the core contract relies on
  coreRPC: 'https://kovan.infura.io/v3/4ff53a5254144d988a8318210b56f47a',
  mainnetCoreRPC: 'https://mainnet.infura.io/v3/4ff53a5254144d988a8318210b56f47a',
  mainnetCoreContractChain: 1,
  infuraApiUrl: 'https:/infura-ipfs.io/ipfs/',

  /**
   * Analaytics + Firebase
   */
  googleAnalyticsId: 'UA-165415629-1',
  vapidKey: 'BFRmmAEEXOhk31FIsooph5CxlXKh6N0_NocUWHzvtpoUEvqQTwLXu6XtwkrH7ckyr2CvVz1ll-8q4oo6-ZqFJPY',
  firebaseConfig: {
    apiKey: 'AIzaSyClOk4qP0ttFW-BPnXy7WT920xfdXSbFu8',
    authDomain: 'epns-internal.firebaseapp.com',
    databaseURL: 'https://epns-internal.firebaseio.com',
    projectId: 'epns-internal',
    storageBucket: 'epns-internal.appspot.com',
    messagingSenderId: '755180533582',
    appId: '1:755180533582:web:752ff8db31905506b7d01f',
    measurementId: 'G-ZJH2T7R9S1',
  },

  /**
   * External links
   */
  links: {
    ios: 'https://apps.apple.com/app/ethereum-push-service-epns/id1528614910',
    android: 'https://play.google.com/store/apps/details?id=io.epns.epns',
    extension: 'https://chrome.google.com/webstore/detail/epns-protocol-beta/lbdcbpaldalgiieffakjhiccoeebchmg',
    howto: 'https://docs.epns.io',
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
  dai: '0x6B175474E89094C44Da98b954EedeAC495271d0F', // mainnet address
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
};
