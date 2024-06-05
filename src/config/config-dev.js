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
  deliveryNodeApiUrl: 'https://delivery-dev.epns.io/apis',

  ipfsInfuraAPIKey: import.meta.env.VITE_APP_IPFS_INFURA_API_KEY || '2DVyu4GEkiFksOrihKk8NMEWWwY',
  ipfsInfuraAPISecret: import.meta.env.VITE_APP_IPFS_INFURA_API_SECRET || '8e39eefc3d70b851b47f90611d40cfa5',

  /**
   * Allowed Networks
   */
  allowedNetworks: [
    // 5, // for eth goerli
    11155111, // for eth sepolia
    80002, //for amoy polygon
    97, // bnb testnet
    11155420, // optimism sepolia testnet
    2442, // polygon zkevm cardona testnet
    421614, // arbitrum testnet
    123, // fuse testnet
    111557560, // Cyber testnet
  ],

  /**
   * Core Network Related Data
   */
  coreContractChain: 11155111, //the chain id of the network which the core contract relies on
  coreRPC: 'https://ethereum-sepolia-rpc.publicnode.com',
  mainnetCoreRPC: 'https://mainnet.infura.io/v3/4ff53a5254144d988a8318210b56f47a',
  mainnetCoreContractChain: 1,
  aliasRPC: {
    80002: 'https://polygon-amoy.infura.io/v3/5524d420b29f4f7a8d8d2f582a0d43f7',
    97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    11155420: 'https://optimism-sepolia.infura.io/v3/5524d420b29f4f7a8d8d2f582a0d43f7',
    2442: 'https://rpc.cardona.zkevm-rpc.com',
    421614: 'https://arbitrum-sepolia.infura.io/v3/5524d420b29f4f7a8d8d2f582a0d43f7',
  },
  infuraApiUrl: 'https:/infura-ipfs.io/ipfs/',

  /**
   * Analaytics + Firebase
   */
  googleAnalyticsId: 'UA-165415629-5',
  vapidKey: 'BJYsH1MYRqzfuzduyHLNaUfZCYdAahcJXsdWzdTqleWox0vOLaycyVPdy_J9XWzSIKvRu0xkwxo75mhDiVJhNnw',
  firebaseConfig: {
    apiKey: 'AIzaSyB4aXx2pJ9T5sw0Q1bba3jI1EAGp0Z5kBI',
    authDomain: 'push-dev-a6a63.firebaseapp.com',
    projectId: 'push-dev-a6a63',
    storageBucket: 'push-dev-a6a63.appspot.com',
    messagingSenderId: '974364469170',
    appId: '1:974364469170:web:47fd6304c6cf36b5bfe6ab',
    measurementId: 'G-5YR8N35DY4',
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
};

/**
 * Smart Contract Related
 */
export const addresses = {
  ceaErc20: '0xc1C0472c0C80bCcDC7F5D01A376Bd97a734B8815',
  epnscore: '0x5AB1520E2bd519BDab2e1347EEe81C00a77f4946',
  epnsEthComm: '0x9dDCD7ed7151afab43044E4D694FA064742C428c',
  epnsPolyComm: '0xAf55BE8e6b0d6107891bA76eADeEa032ef8A4504', // the ploygon comm contract
  pushToken: '0x37c779a1564DCc0e3914aB130e0e787d93e21804', //address for push token
  pushChannelAdmin: '0xfA47d7EaEC85eE8db2cBFF7d18AC407d1A556Dc2',
  aDai: '0x31f30d9A5627eAfeC4433Ae2886Cf6cc3D25E772',
  epnsToken: '0x37c779a1564DCc0e3914aB130e0e787d93e21804',
  epnsLPToken: '0x1f094Bd8c260D0C3fC79157096015990885af4d2',
  rockstar: '0x3f8C2152b79276b78315CAF66cCF951780580A8a',
  batchMintNFT: '0xCf733D547B9f7F87c1B1f63f45c197C007F8eedf',
  NFTRewards: '0xc4708BB6EC3B797344f123126171302e4e3E68E2',
  distributor: '0x5B548D33874DeABaC2F683A6E1864795E09932F0',
  rockstarV2: '0xA2b885e7065EA59a3251489715ca80DE5Ff642f8', //mainnet address
  NFTRewardsV2: '0xdc66567a990B7fa10730459537620857c9e03287', //mainnet address

  //For Yield Farm V1(Deprecated)
  staking: '0xAECb9074e222e8F06f8034140A3F86610E4d3c3E', // deprecated staking addresses
  depYieldFarmPUSH: '0x6EA019f7FE2640A55154DdC36Bfd21275De388BD', // deprecated YieldFarm Push address
  depYieldFarmLP: '0xc2886D0e7DAd16cc92b1156Dc9A0b0D3F047FD15',

  pushToken: '0x37c779a1564DCc0e3914aB130e0e787d93e21804',

  // For Sepolia
  pushToken: '0x37c779a1564DCc0e3914aB130e0e787d93e21804',
  // pushCoreV2: "0x8a965286c0752DFE821868312025091f60BD902A", // 15 min epoch
  pushCoreV2: '0x5AB1520E2bd519BDab2e1347EEe81C00a77f4946', //21 days epoch
  uniV2LPToken: '0x2333609Cc527a9309Cdad16E0742a3C6DC1C551b',
  uniswapV2Router02: '0xC532a74256D3Db42D0Bf7a0400fEFDbad7694008',
  WETHAddress: '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9',
  USDTAddress: '0x7169D38820dfd117C3FA1f22a697dBA58d90BA06',

  //For 30 mins epoch
  // stakingV2: "0xCa02F3FdF3794aF08CADb98b0E4504261cB8c302",
  // yieldFarmLP: "0x22C1dBC8975c23De9e2219C0fC3E03b404577512",

  //For 21 days Epoch
  stakingV2: '0xFf13FBc1dE7FBF300059FE56495c82bBa2F986c6',
  yieldFarmLP: '0xAB531bD9D39c492a05de65Eee85F6C712c05ea0b',

  alphaAccessNft: '0x39f77Db4d5d3e85c213233D5Af02C46a85Cf1Db4',
};

export const CHAIN_DETAILS = {
  11155111: {
    label: 'Ethereum Sepolia',
    name: 'ETH_TEST_SEPOLIA',
    chainId: 11155111,
    rpcUrl: 'https://sepolia.infura.io/v3/5524d420b29f4f7a8d8d2f582a0d43f7',
    commAddress: '0x28709649Dfda9baDEbb61dBF7a8D199cfC8EcF2e',
    network: 'sepolia',
  },
  80002: {
    label: 'Polygon Amoy',
    name: 'POLYGON_TEST_AMOY',
    chainId: 80002,
    rpcUrl: 'https://polygon-amoy.infura.io/v3/5524d420b29f4f7a8d8d2f582a0d43f7',
    commAddress: '0x9cb3bd7550b5c92baa056fc0f08132f49508145f',
    network: 'polygon-amoy',
  },
  97: {
    label: 'BNB Testnet',
    name: 'BNB_TESTNET',
    chainId: 97,
    rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    commAddress: '0x4132061E3349ff36cFfCadA460E10Bd4f31F7ea8',
  },
  11155420: {
    label: 'Optimism Sepolia',
    name: 'OPTIMISM_TESTNET',
    chainId: 11155420,
    rpcUrl: 'https://optimism-sepolia.infura.io/v3/5524d420b29f4f7a8d8d2f582a0d43f7',
    commAddress: '0x754787358fac861ef904c92d54f7adb659779317',
  },
  2442: {
    label: 'Polygon zkEVM Testnet',
    name: 'POLYGON_ZK_EVM_TESTNET',
    chainId: 2442,
    rpcUrl: 'https://rpc.cardona.zkevm-rpc.com',
    commAddress: '0x9cb3bd7550b5c92baa056fc0f08132f49508145f',
  },
  421614: {
    label: 'Arbitrum Testnet',
    name: 'ARBITRUM_TESTNET',
    chainId: 421614,
    rpcUrl: 'https://arbitrum-sepolia.infura.io/v3/5524d420b29f4f7a8d8d2f582a0d43f7',
    commAddress: '0x754787358fac861ef904c92d54f7adb659779317',
  },
  123: {
    label: 'Fuse Testnet',
    name: 'FUSE_TESTNET',
    chainId: 123,
    rpcUrl: 'https://rpc.fusespark.io',
    commAddress: '0x7eBb54D86CF928115965DB596a3E600404dD8039',
  },
  111557560: {
    label: 'Cyber Testnet',
    name: 'CYBER_TESTNET',
    chainid: 111557560,
    rpcUrl: 'https://cyber-testnet.alt.technology/',
    commAddress: '0x9cb3bd7550B5c92baA056Fc0F08132f49508145F',
  },
};
