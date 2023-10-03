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
  apiUrl: 'https://backend-dev.epns.io/apis',
  w2wApiUrl: 'https://backend-dev.epns.io/apis',
  toolingApiUrl: 'https://tooling.epns.io/apis',

  ipfsInfuraAPIKey: process.env.REACT_APP_IPFS_INFURA_API_KEY || '22rfiNb1J645FdehoqbKMpLbF6V',
  ipfsInfuraAPISecret: process.env.REACT_APP_IPFS_INFURA_API_SECRET || 'a757597f020425c3ae532e6be84de552',

  /** 
   * Allowed Networks
   */
  allowedNetworks: [
    5, // for eth goerli
    80001, //for mumbai polygon
    97, // bnb testnet
    420, // optimism goerli testnet
    1442, // polygon zkevm testnet
    421613 // arbitrum testnet
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
    howto: 'https://docs.epns.io',
  },
}

/**
 * Smart Contract Related
 */
export const addresses = {
  ceaErc20: "0xc1C0472c0C80bCcDC7F5D01A376Bd97a734B8815",
  epnscore: "0x23346b732d56d34ec4e890419fbfb8548216a799",
  epnsEthComm: "0xc064F30bac07e84500c97A04D21a9d1bfFC72Ec0", 
  epnsPolyComm: "0xAf55BE8e6b0d6107891bA76eADeEa032ef8A4504", // the ploygon comm contract
  pushToken: "0x2b9bE9259a4F5Ba6344c1b1c07911539642a2D33", //address for push token
  aDai: "0x31f30d9A5627eAfeC4433Ae2886Cf6cc3D25E772",
  epnsToken: "0x2b9bE9259a4F5Ba6344c1b1c07911539642a2D33",
  epnsLPToken: "0x1f094Bd8c260D0C3fC79157096015990885af4d2",
  rockstar: "0x3f8C2152b79276b78315CAF66cCF951780580A8a",
  batchMintNFT: "0xCf733D547B9f7F87c1B1f63f45c197C007F8eedf",
  NFTRewards: "0xc4708BB6EC3B797344f123126171302e4e3E68E2",
  distributor: "0x5B548D33874DeABaC2F683A6E1864795E09932F0",
  uniswapV2Router02: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", //n
  WETHAddress: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", // mainnet address //n
  USDTAddress: "0x11fe4b6ae13d2a6055c8d9cf65c55bac32b5d844", // mainnet address //n
  rockstarV2: "0xA2b885e7065EA59a3251489715ca80DE5Ff642f8", //mainnet address
  NFTRewardsV2: "0xdc66567a990B7fa10730459537620857c9e03287", //mainnet address

  //For Yield Farm V1(Deprecated)
  staking: "0xAECb9074e222e8F06f8034140A3F86610E4d3c3E", // deprecated staking addresses
  depYieldFarmPUSH: "0x6EA019f7FE2640A55154DdC36Bfd21275De388BD", // deprecated YieldFarm Push address
  depYieldFarmLP:"0xc2886D0e7DAd16cc92b1156Dc9A0b0D3F047FD15",

  //For Yield Farm V2
  // stakingV2: "0x6C83ce5eE433d53E10b64E277B1cf5207C37b662",
  stakingV2: "0x0B318CA01Cec62bB29526591f368b44f4b8a0303",
  yieldFarmLP: "0x576c46b328433AaDcb9d9cDd81E0A92852bb0B6F",
  // yieldFarmLP: "0x13ac63901c8fD5797939099553582951fAbAFDE3",
  pushCoreV2: "0x23346b732d56d34ec4e890419fbfb8548216a799",
  uniV2LPToken: "0x698839247E5b83572fFF6ccdcf386CC37e60bEf5",
  pushToken: "0x2b9bE9259a4F5Ba6344c1b1c07911539642a2D33",
  


}

export const CHAIN_DETAILS = {
  5: {
    label: "Ethereum Goerli",
    name: "ETH_TEST_GOERLI",
    chainId: 5,
    rpcUrl: "https://goerli.infura.io/v3/4ff53a5254144d988a8318210b56f47a",
    commAddress: "0xc064F30bac07e84500c97A04D21a9d1bfFC72Ec0",
    network: "goerli",
  }, 
  80001: {
    label: "Polygon Mumbai",
    name: "POLYGON_TEST_MUMBAI",
    chainId: 80001,
    rpcUrl: "https://polygon-mumbai.infura.io/v3/150f25623ae64d08ab7ec7dd0c6b6ee9",
    commAddress: "0xAf55BE8e6b0d6107891bA76eADeEa032ef8A4504",
    network: "polygon-mumbai",
  },
  97: {
    label: "BNB Testnet",
    name: "BNB_TESTNET",
    chainId: 97,
    rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545",
    commAddress: "0x4132061E3349ff36cFfCadA460E10Bd4f31F7ea8"
  },
  420: {
    label: "Optimism Goerli",
    name: "OPTIMISM_TESTNET",
    chainId: 420,
    rpcUrl: 'https://opt-goerli.g.alchemy.com/v2/98vFj7OCg4vbGKvCDpj6pOAMSBVC7rzm',
    commAddress: '0x4305D572F2bf38Fc2AE8D0172055b1EFd18F57a6'
  },
  1442: {
    label: "Polygon zkEVM Testnet",
    name: "POLYGON_ZK_EVM_TESTNET",
    chainId: 1442,
    rpcUrl: 'https://rpc.public.zkevm-test.net',
    commAddress: '0x630b152e4185c63D7177c656b56b26f878C61572'
  },
  421613: {
    label: "Arbitrum Testnet",
    name: "ARBITRUM_TESTNET",
    chainId: 421613,
    rpcUrl: '',
    commAddress: '0x2f6aE0907116A2c50D712e78b48D874fadeB6850'
  }
}