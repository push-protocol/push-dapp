// environmental configurations for the dapp for different environments
const infuraAPIKey = import.meta.env.VITE_APP_INFURA_PROJECT_ID || '';
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

  ipfsInfuraAPIKey: import.meta.env.VITE_APP_IPFS_INFURA_API_KEY || '22rfiNb1J645FdehoqbKMpLbF6V',
  ipfsInfuraAPISecret: import.meta.env.VITE_APP_IPFS_INFURA_API_SECRET || 'a757597f020425c3ae532e6be84de552',

  /**
   * Allowed Networks
   */
  allowedNetworks: [
    5, // for eth goerli
    80002, //for amoy polygon
    97, // bnb testnet
    11155420, // optimism sepolia testnet
  ],

  /**
   * Core Network Related Data
   */
  infuraAPIKey: infuraAPIKey,
  coreContractChain: 5, //the chain id of the network which the core contract relies on
  coreRPC: `https://goerli.infura.io/v3/${infuraAPIKey}`,
  mainnetCoreRPC: `https://mainnet.infura.io/v3/${infuraAPIKey}`,
  mainnetCoreContractChain: 1,
  aliasRPC: {
    80002: 'https://polygon-amoy.infura.io/v3/5524d420b29f4f7a8d8d2f582a0d43f7',
    97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    11155420: 'https://optimism-sepolia.infura.io/v3/5524d420b29f4f7a8d8d2f582a0d43f7',
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

  // social media integration
  telegramExternalURL: 'https://web.telegram.org/k/#@PushCommDevBot',
  discordExternalURL: null,
};

/**
 * Smart Contract Related
 */
export const addresses = {
  ceaErc20: '0xc1C0472c0C80bCcDC7F5D01A376Bd97a734B8815',
  epnscore: '0x23346b732d56d34ec4e890419fbfb8548216a799',
  epnsEthComm: '0xc064F30bac07e84500c97A04D21a9d1bfFC72Ec0',
  epnsPolyComm: '0xAf55BE8e6b0d6107891bA76eADeEa032ef8A4504', // the ploygon comm contract
  pushToken: '0x2b9bE9259a4F5Ba6344c1b1c07911539642a2D33', //address for push token
  aDai: '0x31f30d9A5627eAfeC4433Ae2886Cf6cc3D25E772',
  staking: '0x8e129EF695F8761922F1AA38588292f8d8817bA5',
  yieldFarmPUSH: '0xb41cd6760d3b1d0d216851f63fda9573b04dd46e',
  yieldFarmLP: '0x604f629A6b5E85805D57f39493BBC2856cE8A540',
  epnsToken: '0x2b9bE9259a4F5Ba6344c1b1c07911539642a2D33',
  epnsLPToken: '0x1f094Bd8c260D0C3fC79157096015990885af4d2',
  rockstar: '0x3f8C2152b79276b78315CAF66cCF951780580A8a',
  batchMintNFT: '0xCf733D547B9f7F87c1B1f63f45c197C007F8eedf',
  NFTRewards: '0xc4708BB6EC3B797344f123126171302e4e3E68E2',
  distributor: '0x5B548D33874DeABaC2F683A6E1864795E09932F0',
  uniswapV2Router02: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', //n
  WETHAddress: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', // mainnet address //n
  USDTAddress: '0x13512979ade267ab5100878e2e0f485b568328a4', // mainnet address //n
  rockstarV2: '0xA2b885e7065EA59a3251489715ca80DE5Ff642f8', //mainnet address
  NFTRewardsV2: '0xdc66567a990B7fa10730459537620857c9e03287', //mainnet address

  delegateAddress: '0xf418588522d5dd018b425e472991e52ebbeeeeee',
  delegateABI: ['function delegate(address delegatee) external'],
};

export const CHAIN_DETAILS = {
  5: {
    label: 'Ethereum Goerli',
    name: 'ETH_TEST_GOERLI',
    chainId: 5,
    rpcUrl: `https://goerli.infura.io/v3/${infuraAPIKey}`,
    commAddress: '0xc064F30bac07e84500c97A04D21a9d1bfFC72Ec0',
    network: 'goerli',
  },
  80002: {
    label: 'Polygon Amoy',
    name: 'POLYGON_TEST_AMOY',
    chainId: 80002,
    rpcUrl: `https://polygon-amoy.infura.io/v3/${infuraAPIKey}`,
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
    rpcUrl: `https://optimism-sepolia.infura.io/v3/${infuraAPIKey}`,
    commAddress: '0x9Dc25996ba72A2FD7E64e7a674232a683f406F1A',
  },
};
