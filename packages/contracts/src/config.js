// environmental configurations for the dapp for different environments
const config = {
    apiUrl: "https://backend-dev.epns.io/apis",
    toolingApiUrl: "https://tooling.epns.io/apis",
    allowedNetworks: [
        42, //for ropsten
        80001 //for mumbai polygon
    ],
    coreContractChain: 42, //the chain id of the network which the core contract relies on
    coreRPC: "https://kovan.infura.io/v3/4ff53a5254144d988a8318210b56f47a",
    googleAnalyticsId: "UA-165415629-5"
};

export default config;