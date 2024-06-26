// // External Packages
// // import { InjectedConnector } from '@web3-react/injected-connector';
// import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
// import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2';
// import { LedgerConnector } from '@web3-react/ledger-connector';
// import { TrezorConnector } from '@web3-react/trezor-connector';
// import { initializeConnector } from '@web3-react/core';
// import { CHAIN_DETAILS } from 'config';

// // Internal Configs
// import { appConfig } from 'config';

// require('dotenv').config();
// const SUPPORTED_CHAIN_IDS = [...appConfig.allowedNetworks];
// const POLLING_INTERVAL = 12000;
// const CORE_CHAIN_ID = appConfig.coreContractChain;
// const CORE_RPC = appConfig.coreRPC;

// let RPC_URLS: { [chainId: number]: string } = {
//   [CORE_CHAIN_ID]: appConfig.coreRPC,
// };

// RPC_URLS = Object.assign(RPC_URLS, appConfig.aliasRPC);

// // export const injected = new InjectedConnector({ supportedChainIds: SUPPORTED_CHAIN_IDS });

// const [mainnet, ...optionalChains] = Object.keys(CHAIN_DETAILS).map(Number);

// // export const [walletConnectV2, hooks] = initializeConnector<WalletConnectV2>(
// //   (actions) =>
// //     new WalletConnectV2({
// //       actions,
// //       options: {
// //         projectId: import.meta.env.PROJECT_ID,
// //         showQrModal: true,
// //         chains: [mainnet],
// //         optionalChains,
// //       },
// //     })
// // );

// export const walletconnect = new WalletConnectConnector({
//   rpc: { ...RPC_URLS },
//   bridge: 'https://bridge.walletconnect.org',
//   qrcode: true,
//   pollingInterval: POLLING_INTERVAL,
// });

// // export const walletlink = new WalletLinkConnector({
// //   url: RPC_URLS[1],
// //   appName: 'web3-react example'
// // })
// //
// export const ledger = new LedgerConnector({ chainId: CORE_CHAIN_ID, url: CORE_RPC, pollingInterval: POLLING_INTERVAL });

// export const trezor = new TrezorConnector({
//   chainId: CORE_CHAIN_ID,
//   url: CORE_RPC,
//   pollingInterval: POLLING_INTERVAL,
//   manifestEmail: 'support@epns.io',
//   manifestAppUrl: 'https://staging.push.org',
// });

// //
// // export const frame = new FrameConnector({ supportedChainIds: [1] })
// //
// // export const authereum = new AuthereumConnector({ chainId: 42 })
// //
// // export const fortmatic = new FortmaticConnector({ apiKey: import.meta.env.FORTMATIC_API_KEY as string, chainId: 4 })

// // export const portis = new PortisConnector({ dAppId: 'cfefa032-9afd-4833-bfb4-2b0cb7ec3413' as string, networks: [CORE_CHAIN_ID] })

// // export const squarelink = new SquarelinkConnector({
// //   clientId: import.meta.env.SQUARELINK_CLIENT_ID as string,
// //   networks: [1, 100]
// // })

// // export const torus = new TorusConnector({ chainId: 1 })
