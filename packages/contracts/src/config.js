// environmental configurations for the dapp for different environments
const config = {
    apiUrl: "https://backend-prod.epns.io/apis", //the right backend URL to be used
    allowedNetworks: [
        1, //for eth
        137 //for polygon
    ],
    coreContractChain: 1, //the chain id of the network which the core contract relies on
    coreRPC: "https://mainnet.infura.io/v3/4ff53a5254144d988a8318210b56f47a"
};

export default config;