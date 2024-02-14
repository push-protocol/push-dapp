import Onboard from '@web3-onboard/core';
import injectedModule from '@web3-onboard/injected-wallets';
import coinbaseWalletModule from '@web3-onboard/coinbase'
import { EnvHelper } from 'helpers/UtilityHelper';
import { getWeb3OnboardChains } from './chains';
import { walletConnect } from './walletConnect';
import PushBlocknativeLogo from '../assets/PushBlocknativeLogo.svg';

const injected = injectedModule();
const coinbase = coinbaseWalletModule();

const chains = getWeb3OnboardChains();
export const web3Onboard = Onboard({
  appMetadata: {
    name: EnvHelper.dappTitle(),
    icon: PushBlocknativeLogo,
    logo: PushBlocknativeLogo,
    description: 'The Communication Protocol of Web3',
    explore: "https://app.push.org",
  },
  accountCenter: {
    desktop: {
      enabled: false,
    },
    mobile: {
      enabled: false,
    },
  },
  connect: {
    showSidebar: true,
    autoConnectLastWallet: true,
    removeWhereIsMyWalletWarning: true,
    removeIDontHaveAWalletInfoLink: true,
    disableClose: false,
  },
  containerElements: {
    // connectModal: "#onboard-container"
  },
  wallets: [injected, walletConnect, coinbase],
  chains: chains,
  theme: 'system',
});
