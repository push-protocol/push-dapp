// environmental configurations for the dapp for different environments
const config = {
    apiUrl: "https://backend-dev.epns.io/apis",
    toolingApiUrl: "https://tooling.epns.io/apis",
    allowedNetworks: [
        42, //for ropsten
        80001 //for mumbai polygon
    ],
    coreContractChain: 42, //the chain id of the network which the core contract relies on
    mainnetCoreContractChain: 1,
    coreRPC: "https://kovan.infura.io/v3/4ff53a5254144d988a8318210b56f47a",
    mainnetCoreRPC: "https://mainnet.infura.io/v3/4ff53a5254144d988a8318210b56f47a",
    googleAnalyticsId: "UA-165415629-5",
    vapidKey: "BFRmmAEEXOhk31FIsooph5CxlXKh6N0_NocUWHzvtpoUEvqQTwLXu6XtwkrH7ckyr2CvVz1ll-8q4oo6-ZqFJPY",
    firebaseConfig: {
        apiKey: "AIzaSyClOk4qP0ttFW-BPnXy7WT920xfdXSbFu8",
        authDomain: "epns-internal.firebaseapp.com",
        databaseURL: "https://epns-internal.firebaseio.com",
        projectId: "epns-internal",
        storageBucket: "epns-internal.appspot.com",
        messagingSenderId: "755180533582",
        appId: "1:755180533582:web:752ff8db31905506b7d01f",
        measurementId: "G-ZJH2T7R9S1",
    }
};

export default config;