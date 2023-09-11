import Onboard from '@web3-onboard/core';
import injectedModule from '@web3-onboard/injected-wallets';
import { getWeb3OnboardChains } from './chains';
import { walletConnect } from './walletConnect';
import PushLogo from '../assets/PushLogo.svg';

const injected = injectedModule();

const chains = getWeb3OnboardChains();
export const web3Onboard = Onboard({
  appMetadata: {
    name: 'Push (EPNS)',
    icon: PushLogo,
    logo: PushLogo,
    description: 'The Communication Protocol of Web3',
    explore: "https://app.push.org"
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
    showSidebar: false,
    autoConnectLastWallet: true,
    removeWhereIsMyWalletWarning: true,
  },
  wallets: [injected, walletConnect],
  chains: chains,
  theme: 'system',
});
