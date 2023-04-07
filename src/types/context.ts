export interface Web3NameListType {
  address: string;
  name: string;
}

export interface AppContextType {
  web3NameList: Web3NameListType[];
  setWeb3NameList: (ens: Web3NameListType[]) => void;
}
