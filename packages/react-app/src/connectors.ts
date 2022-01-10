import { InjectedConnector } from '@web3-react/injected-connector'
import { envConfig } from "@project/contracts";
import { PortisConnector } from '@web3-react/portis-connector'
// import { NetworkConnector } from '@web3-react/network-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
// import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { LedgerConnector } from '@web3-react/ledger-connector'
import { TrezorConnector } from '@web3-react/trezor-connector'
// import { FrameConnector } from '@web3-react/frame-connector'
// import { AuthereumConnector } from '@web3-react/authereum-connector'
// import { FortmaticConnector } from '@web3-react/fortmatic-connector'
// import { SquarelinkConnector } from '@web3-react/squarelink-connector'
// import { TorusConnector } from '@web3-react/torus-connector'

require('dotenv').config();
const SUPPORTED_CHAIN_IDS = [...envConfig.allowedNetworks];
const POLLING_INTERVAL = 12000;
const CORE_CHAIN_ID = envConfig.coreContractChain;
const CORE_RPC = envConfig.coreRPC;

const RPC_URLS: { [chainId: number]: string } = {
  [CORE_CHAIN_ID]: envConfig.coreRPC
}

export const injected = new InjectedConnector({ supportedChainIds: SUPPORTED_CHAIN_IDS })


export const walletconnect = new WalletConnectConnector({
  rpc: { ...RPC_URLS },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
})
//
// export const walletlink = new WalletLinkConnector({
//   url: RPC_URLS[1],
//   appName: 'web3-react example'
// })
//
export const ledger = new LedgerConnector({ chainId: CORE_CHAIN_ID, url: CORE_RPC, pollingInterval: POLLING_INTERVAL })

export const trezor = new TrezorConnector({
  chainId: CORE_CHAIN_ID,
  url: CORE_RPC,
  pollingInterval: POLLING_INTERVAL,
  manifestEmail: 'support@epns.io',
  manifestAppUrl: 'https://staging-app.epns.io'
})

//
// export const frame = new FrameConnector({ supportedChainIds: [1] })
//
// export const authereum = new AuthereumConnector({ chainId: 42 })
//
// export const fortmatic = new FortmaticConnector({ apiKey: process.env.FORTMATIC_API_KEY as string, chainId: 4 })

export const portis = new PortisConnector({ dAppId: 'cfefa032-9afd-4833-bfb4-2b0cb7ec3413' as string, networks: [CORE_CHAIN_ID] })

// export const squarelink = new SquarelinkConnector({
//   clientId: process.env.SQUARELINK_CLIENT_ID as string,
//   networks: [1, 100]
// })

// export const torus = new TorusConnector({ chainId: 1 })
