// environmental configurations for the dapp for different environments
export const config = {
  /** 
   * Push Nodes Environment - can be dev, staging or prod - important to keep one on one connection
   */
  pushNodesEnv: 'staging',
  
  /** 
   * API Calls Related
   */
  appEnv: 'staging', // helps in deciding some text, links, etc, DO NOT CHANGE
  
  pushNodeApiVersion: 1,
  apiUrl: 'https://backend-staging.epns.io/apis',
  w2wApiUrl: 'https://backend-staging.epns.io/apis',
  toolingApiUrl: 'https://tooling.epns.io/apis',

  ipfsInfuraAPIKey: process.env.REACT_APP_IPFS_INFURA_API_KEY || '22rfiNb1J645FdehoqbKMpLbF6V',
  ipfsInfuraAPISecret: process.env.REACT_APP_IPFS_INFURA_API_SECRET || 'a757597f020425c3ae532e6be84de552',

  /** 
   * Allowed Networks
   */
  allowedNetworks: [
    // 42, //for kovan
    5, // for goerli
    80001, //for mumbai polygon
    97 // bnb testnet
  ],

  /** 
   * Core Network Related Data
   */
  coreContractChain: 5, //the chain id of the network which the core contract relies on
  coreRPC: 'https://goerli.infura.io/v3/4ff53a5254144d988a8318210b56f47a',
  mainnetCoreRPC: "https://mainnet.infura.io/v3/4ff53a5254144d988a8318210b56f47a",
  mainnetCoreContractChain: 1,
  aliasRPC: {
    80001: "https://polygon-mumbai.infura.io/v3/150f25623ae64d08ab7ec7dd0c6b6ee9",
    97: "https://data-seed-prebsc-1-s1.binance.org:8545",
    420: "https://opt-goerli.g.alchemy.com/v2/98vFj7OCg4vbGKvCDpj6pOAMSBVC7rzm"
  },
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
}

/**
 * Smart Contract Related
 */
export const addresses = {
  ceaErc20: "0xc1C0472c0C80bCcDC7F5D01A376Bd97a734B8815",
  epnscore: "0xd4E3ceC407cD36d9e3767cD189ccCaFBF549202C",
  epnsEthComm: "0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa", // the core contract
  epnsPolyComm: "0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa", // the ploygon comm contract
  pushToken: "0x2b9bE9259a4F5Ba6344c1b1c07911539642a2D33", //address for push token
  aDai: "0x31f30d9A5627eAfeC4433Ae2886Cf6cc3D25E772",
  staking: "0xAECb9074e222e8F06f8034140A3F86610E4d3c3E", // deprecated staking addresses
  depYieldFarmPUSH: "0x6EA019f7FE2640A55154DdC36Bfd21275De388BD", // deprecated YieldFarm Push address
  depYieldFarmLP:"0xc2886D0e7DAd16cc92b1156Dc9A0b0D3F047FD15", // deprecated YieldFarm LP address
  epnsToken: "0x2b9bE9259a4F5Ba6344c1b1c07911539642a2D33",
  epnsLPToken: "0x1f094Bd8c260D0C3fC79157096015990885af4d2",
  uniV2LPToken:"0x698839247E5b83572fFF6ccdcf386CC37e60bEf5",// for new staking V2 Contract on staging
  rockstar: "0x3f8C2152b79276b78315CAF66cCF951780580A8a",
  batchMintNFT: "0xCf733D547B9f7F87c1B1f63f45c197C007F8eedf",
  NFTRewards: "0xc4708BB6EC3B797344f123126171302e4e3E68E2",
  distributor: "0x5B548D33874DeABaC2F683A6E1864795E09932F0",
  uniswapV2Router02: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  WETHAddress: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  USDTAddress: "0x11fe4b6ae13d2a6055c8d9cf65c55bac32b5d844",
  rockstarV2:"0xA2b885e7065EA59a3251489715ca80DE5Ff642f8",//mainnet address
  NFTRewardsV2: "0xdc66567a990B7fa10730459537620857c9e03287", //mainnet address
  // pushCoreV2:'0xb4B1512ECdd9Bb21Bb41d888f4Cac22A39bab1D2', //for new staking V2 Push Token
  // pushCoreV2:'0x44C60743E93E51509b9B37C9048fF780a4B222E1', //for new staking V2 Push Token
  // pushCoreV2:'0x7a6bdCaF08fC2fedA583646054FA4429C0266eD7', //for new staking V2 Push Token very latest



  //this below one is the new one pushCoreV2 address
  // pushCoreV2:'0xC09B14263217F32c1Ce2D71fe231d83A3CE0301b', 
  pushCoreV2:'0xEE805a4EE5B44D8bC1b8E5B6e75eE16d4790aD4A', 


  // this below is of 21 days epoch but has wrong distributed amount
  // stakingV2:"0x65Cd2765997E779218b3F6d3395fd92F951e692B",
  // yieldFarmLP: "0x073ce8E0650FfF2BA1D468dB700EDC97ca604D25", 
 
  // this one is of 1 hour epoch duration for QA on goerli
  // stakingV2:"0xb117C60C213581672F376180f183EBe4be981Dc0",
  // yieldFarmLP: "0x8280196B9836d259Fd4304e86cf6CB83Ce0C0c2E", 

  //this below is for 21 days epoch with 900 depAmount
  stakingV2:"0x9d65129223451fbd58fc299C635Cd919BaF2564C",
  yieldFarmLP: "0x9E0c685752E55CC01D1302Dc1cA71cCe7Dd0958a",

}

export const CHAIN_DETAILS = {
  5: {
    label: "Ethereum Goerli",
    name: "ETH_TEST_GOERLI",
    chainId: 5,
    rpcUrl: "https://goerli.infura.io/v3/4ff53a5254144d988a8318210b56f47a",
    commAddress: "0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa",
    network: "goerli",
  }, 
  80001: {
    label: "Polygon Mumbai",
    name: "POLYGON_TEST_MUMBAI",
    chainId: 80001,
    rpcUrl: "https://polygon-mumbai.infura.io/v3/150f25623ae64d08ab7ec7dd0c6b6ee9",
    commAddress: "0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa",
    network: "polygon-mumbai",
  },
  97: {
    label: "BNB Testnet",
    name: "BNB_TESTNET",
    chainId: 97,
    rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545",
    commAddress: "0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa"
  },
  420: {
    label: "Optimism Goerli",
    name: "OPTIMISM_TESTNET",
    chainId: 420,
    rpcUrl: 'https://opt-goerli.g.alchemy.com/v2/98vFj7OCg4vbGKvCDpj6pOAMSBVC7rzm',
    commAddress: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa'
  }
}