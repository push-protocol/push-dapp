// environmental configurations for the dapp for different environments
const config = {
    apiUrl: "https://backend-kovan.epns.io/apis", //the right backend URL to be used
    allowedNetworks: [
        42, //for ropsten
        80001 //for mumbai polygon
    ],
    coreContractChain: 42, //the chain id of the network which the core contract relies on
    coreRPC: "https://kovan.infura.io/v3/4ff53a5254144d988a8318210b56f47a"
};

export default config;