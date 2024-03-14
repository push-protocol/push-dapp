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
  toolingApiUrl: 'https://staging-tooling.epns.io/apis',

  ipfsInfuraAPIKey: process.env.REACT_APP_IPFS_INFURA_API_KEY || '22rfiNb1J645FdehoqbKMpLbF6V',
  ipfsInfuraAPISecret: process.env.REACT_APP_IPFS_INFURA_API_SECRET || 'a757597f020425c3ae532e6be84de552',

  /** 
   * Allowed Networks
   */
  allowedNetworks: [
    // 42, //for kovan
    // 5, // for goerli
    11155111, // for eth sepolia
    80001, //for mumbai polygon
    97, // bnb testnet
    420, // optimism goerli testnet
    1442, // polygon zkevm testnet
    421613, // arbitrum testnet
    123 // fuse testnet
  ],

  /** 
   * Core Network Related Data
   */
  coreContractChain: 11155111, //the chain id of the network which the core contract relies on
  coreRPC: 'https://sepolia.infura.io/v3/49f638cc25a94ddb86b7aefd612f11ab',
  mainnetCoreRPC: "https://mainnet.infura.io/v3/4ff53a5254144d988a8318210b56f47a",
  mainnetCoreContractChain: 1,
  aliasRPC: {
    80001: "https://polygon-mumbai.infura.io/v3/150f25623ae64d08ab7ec7dd0c6b6ee9",
    97: "https://data-seed-prebsc-1-s1.binance.org:8545",
    420: "https://opt-goerli.g.alchemy.com/v2/98vFj7OCg4vbGKvCDpj6pOAMSBVC7rzm",
    1442: "https://rpc.public.zkevm-test.net",
    421613: "https://goerli-rollup.arbitrum.io/rpc"
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
    ios: 'https://discord.gg/pushprotocol',
    android: 'https://play.google.com/store/apps/details?gl=US&hl=en&id=io.epns.epnsstaging',
    extension: 'https://chrome.google.com/webstore/detail/epns-staging-protocol-alp/bjiennpmhdcandkpigcploafccldlakj',
    howto: 'https://push.org/docs',
  },
}

/**
 * Smart Contract Related
 */
export const addresses = {
  ceaErc20: "0xc1C0472c0C80bCcDC7F5D01A376Bd97a734B8815",
  epnscore: "0x9d65129223451fbd58fc299c635cd919baf2564c",
  epnsEthComm: "0x0c34d54a09cfe75bccd878a469206ae77e0fe6e7", // the core contract
  epnsPolyComm: "0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa", // the ploygon comm contract
  pushToken: "0x37c779a1564DCc0e3914aB130e0e787d93e21804", //address for push token
  aDai: "0x31f30d9A5627eAfeC4433Ae2886Cf6cc3D25E772",
  pushChannelAdmin: "0x0c97B7B7D14FBBfe726bF85c992db02E8E7D0fC6",
  // staking: "0xAECb9074e222e8F06f8034140A3F86610E4d3c3E", // deprecated staking addresses
  // yieldFarmPUSH: "0xb41cd6760d3b1d0d216851f63fda9573b04dd46e",
  // yieldFarmLP: "0x604f629A6b5E85805D57f39493BBC2856cE8A540",
  epnsToken: "0x37c779a1564DCc0e3914aB130e0e787d93e21804",
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

  //For Yield Farm v1(deprecated)
  staking: "0xAECb9074e222e8F06f8034140A3F86610E4d3c3E", // deprecated staking addresses
  depYieldFarmPUSH: "0x6EA019f7FE2640A55154DdC36Bfd21275De388BD", // deprecated YieldFarm Push address
  depYieldFarmLP:"0xc2886D0e7DAd16cc92b1156Dc9A0b0D3F047FD15", // deprecated YieldFarm LP address

  //For Yield Farm V2
  stakingV2:"0xA99dE35dce05f59fF87ae393a7576B8Ce5881416",
  yieldFarmLP: "0xeE543C5bC1b6EB647CfC23fe95D3C5877945Ad21",
  pushCoreV2: "0x9d65129223451fbd58fc299c635cd919baf2564c",//not upgraded
  uniV2LPToken: "0x698839247E5b83572fFF6ccdcf386CC37e60bEf5",
  pushToken: "0x37c779a1564DCc0e3914aB130e0e787d93e21804",

  alphaAccessNft: "0x39f77Db4d5d3e85c213233D5Af02C46a85Cf1Db4"
}

export const CHAIN_DETAILS = {
  11155111: {
    label: "Ethereum Sepolia",
    name: "ETH_TEST_SEPOLIA",
    chainId: 11155111,
    rpcUrl: "https://sepolia.infura.io/v3/5524d420b29f4f7a8d8d2f582a0d43f7",
    commAddress: "0x0c34d54a09cfe75bccd878a469206ae77e0fe6e7",
    network: "sepolia",
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
  },
  1442: {
    label: "Polygon zkEVM Testnet",
    name: "POLYGON_ZK_EVM_TESTNET",
    chainId: 1442,
    rpcUrl: 'https://rpc.public.zkevm-test.net',
    commAddress: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa'
  },
  421613: {
    label: "Arbitrum Testnet",
    name: "ARBITRUM_TESTNET",
    chainId: 421613,
    rpcUrl: '',
    commAddress: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa'
  },
  123: {
    label: "Fuse Testnet",
    name: "FUSE_TESTNET",
    chainId: 123,
    rpcUrl: 'https://rpc.fusespark.io',
    commAddress: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa'
  }
}