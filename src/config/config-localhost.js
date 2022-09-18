// environmental configurations for the dapp for different environments
export const config = {
  /**
   * Push Nodes Environment - can be dev, staging or prod - important to keep one on one connection
   */
  pushNodesEnv: 'dev',

  /**
   * API Calls Related
   */
  appEnv: 'dev',

  pushNodeApiVersion: 1,
  apiUrl: 'http://localhost:4000/apis',
  w2wApiUrl: 'http://localhost:4000/apis',
  toolingApiUrl: 'https://tooling.epns.io/apis',

  ipfsInfuraAPIKey: process.env.REACT_APP_IPFS_INFURA_API_KEY || '22rfiNb1J645FdehoqbKMpLbF6V',
  ipfsInfuraAPISecret: process.env.REACT_APP_IPFS_INFURA_API_SECRET || 'a757597f020425c3ae532e6be84de552',

  /**
   * Allowed Networks
   */
  allowedNetworks: [
    42, //for ropsten
    80001, //for mumbai polygon
  ],

  /**
   * Core Network Related Data
   */
  coreContractChain: 42, //the chain id of the network which the core contract relies on
  coreRPC: 'https://kovan.infura.io/v3/4ff53a5254144d988a8318210b56f47a',
  mainnetCoreRPC: 'https://mainnet.infura.io/v3/4ff53a5254144d988a8318210b56f47a',
  mainnetCoreContractChain: 1,
  infuraApiUrl: 'https:/infura-ipfs.io/ipfs/',

  /**
   * Analaytics + Firebase
   */
  googleAnalyticsId: 'UA-165415629-5',
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
    ios: 'https://discord.com/invite/YVPB99F9W5',
    android: 'https://play.google.com/store/apps/details?gl=US&hl=en&id=io.epns.epnsstaging',
    extension: 'https://chrome.google.com/webstore/detail/epns-staging-protocol-alp/bjiennpmhdcandkpigcploafccldlakj',
    howto: 'https://docs.epns.io',
  },
};

/**
 * Smart Contract Related
 */
export const addresses = {
  ceaErc20: '0xc1C0472c0C80bCcDC7F5D01A376Bd97a734B8815',
  epnscore: '0x628E3191dE173d40b9fcDc171557958267c475a6',
  epnsEthComm: '0x99047d328496C14016222a998564B334A4A5723f',
  epnsPolyComm: '0xAf55BE8e6b0d6107891bA76eADeEa032ef8A4504', // the ploygon comm contract
  dai: '0xff795577d9ac8bd7d90ee22b6c1703490b6512fd', //address for dai
  aDai: '0x58AD4cB396411B691A9AAb6F74545b2C5217FE6a',
  staking: '0x8e129EF695F8761922F1AA38588292f8d8817bA5',
  yieldFarmPUSH: '0xb41cd6760d3b1d0d216851f63fda9573b04dd46e',
  yieldFarmLP: '0x604f629A6b5E85805D57f39493BBC2856cE8A540',
  epnsToken: '0x9CE54E83c18f0a797F823905A3ec5CfC2F6d2CA9',
  epnsLPToken: '0x1f094Bd8c260D0C3fC79157096015990885af4d2',
  rockstar: '0x3f8C2152b79276b78315CAF66cCF951780580A8a',
  batchMintNFT: '0xCf733D547B9f7F87c1B1f63f45c197C007F8eedf',
  NFTRewards: '0xc4708BB6EC3B797344f123126171302e4e3E68E2',
  distributor: '0x5B548D33874DeABaC2F683A6E1864795E09932F0',
  uniswapV2Router02: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', //n
  WETHAddress: '0xd0A1E359811322d97991E03f863a0C30C2cF029C', // mainnet address //n
  USDTAddress: '0x13512979ade267ab5100878e2e0f485b568328a4', // mainnet address //n
  rockstarV2: '0xA2b885e7065EA59a3251489715ca80DE5Ff642f8', //mainnet address
  NFTRewardsV2: '0xdc66567a990B7fa10730459537620857c9e03287', //mainnet address
};
