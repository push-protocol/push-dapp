import { ProgressHookType, PushAPI } from '@pushprotocol/restapi';
import { ConnectedUser } from './chat';

export interface Web3NameListType {
  [key: string]: string;
}

export interface onboardingProgressI {
  enabled: boolean;
  hookInfo: ProgressHookType;
  spinnerType: number;
  progress: number;
  errorMessage?: string;
}

export interface BlockedLoadingI {
  enabled: boolean;
  title: string;
  spinnerEnabled?: boolean;
  spinnerSize?: number;
  spinnerType?: number;
  progressEnabled?: boolean;
  progress?: number;
  progressNotice?: string;
  errorMessage?: string;
}

export interface LocalPeerType {
  peer: string;
  peerID: string;
}

export interface ConnectedPeerIDType {
  peerID: string;
}

export type handleConnectWalletAndEnableProfileProps = {
  showToast?: boolean;
  toastMessage?: string;
  wallet?: any;
  remember?: boolean;
};

export interface AppContextType {
  web3NameList: Web3NameListType;
  setWeb3NameList: (ens: Web3NameListType) => void;
  MetamaskPushSnapModalComponent: any;
  showMetamaskPushSnap: () => void;
  SnapState: number;
  setSnapState: (SnapState: number) => void;
  initializePushSDK: () => Promise<void>;
  snapInstalled: boolean;
  setSnapInstalled: (snapInstalled: boolean) => void;
  handleConnectWalletAndEnableProfile: (props: handleConnectWalletAndEnableProfileProps) => Promise<PushAPI>;
  connectWallet: (showToast?: boolean, toastMessage?: string) => any;
  setBlockedLoading: (blockedLoading: BlockedLoadingI) => void;
  blockedLoading: BlockedLoadingI;
  getUser: () => Promise<void>;
  connectedUser: ConnectedUser;
  setConnectedUser: (connectedUser: ConnectedUser) => void;
  pgpPvtKey: string;
  setPgpPvtKey: (pgpPvtKey: string) => void;
  localPeer: LocalPeerType;
  setLocalPeer: (localPeer: LocalPeerType) => void;
  connectedPeerID: ConnectedPeerIDType;
  setConnectedPeerID: (connectedPeerID: ConnectedPeerIDType) => void;
  displayQR: boolean;
  setDisplayQR: (displayQR: boolean) => void;
  createUserIfNecessary: () => Promise<ConnectedUser>;
  initializePushSdkReadMode: () => Promise<void>;
  isUserProfileUnlocked: boolean;
  setUserProfileUnlocked: (isUserProfileUnlocked: boolean) => void;
}
