// environmental configurations for the dapp for different environments
const config = {
    apiUrl: "https://backend-dev.epns.io/apis", //the right backend URL to be used
    allowedNetworks: [
        42, //for ropsten
        80001 //for mumbai polygon
    ],
    coreContractChain: 42, //the chain id of the network which the core contract relies on
    coreRPC: "https://kovan.infura.io/v3/TZCWZ8YCQDH4THP54865SDGTG3XXY8ZAQU"
};

export default config;