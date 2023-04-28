export interface Web3NameListType {
  [key: string]: string;
}

export interface AppContextType {
  web3NameList: Web3NameListType;
  setWeb3NameList: (ens: Web3NameListType) => void;
}
