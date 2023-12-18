import { PushAPI } from '@pushprotocol/restapi';

export interface Web3NameListType {
  [key: string]: string;
}

export interface AppContextType {
  web3NameList: Web3NameListType;
  setWeb3NameList: (ens: Web3NameListType) => void;
  MetamaskPushSnapModalComponent: any;
  showMetamaskPushSnap: any;
  SnapState: number;
  setSnapState: any;
  initializePushSDK: any;
  handleConnectWallet: (
    showToast?: boolean,
    toastMessage?: string
  ) => void;
}
