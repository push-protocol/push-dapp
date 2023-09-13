import Onboard from '@web3-onboard/core';
import injectedModule from '@web3-onboard/injected-wallets';
import { getWeb3OnboardChains } from './chains';
import { walletConnect } from './walletConnect';
import PushBlocknativeLogo from '../assets/PushBlocknativeLogo.svg';

const injected = injectedModule();

const chains = getWeb3OnboardChains();
export const web3Onboard = Onboard({
  appMetadata: {
    name: 'Push (EPNS)',
    icon: PushBlocknativeLogo,
    logo: PushBlocknativeLogo,
    description: 'The Communication Protocol of Web3',
    explore: "https://app.push.org",
    agreement: {
      termsUrl: "https://push.org/tos",
      version: "2nd Nov 2020",
      privacyUrl: "https://push.org/privacy",
    },
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
  },
  wallets: [injected, walletConnect],
  chains: chains,
  theme: 'system',
});
