// Internal Configs
import { appConfig } from '../config/index.js';

export const Eip155EnabledIds: Array<Number> = [
  1, 56, 137, 10, 1101, 42161, 11155111, 97, 80002, 11155420, 2442, 421614, 122, 123, 111557560, 7560, 84532, 8453,
  59141, 59144,
];

// Types
type CAIPProps = {
  chainId: number;
  address: string;
};

// return caip obj from chainId and address
export const getCAIPObj = ({ chainId, address }: CAIPProps): { [key: string]: string } => {
  if (chainId === appConfig.coreContractChain) return {};

  if (Eip155EnabledIds.includes(chainId)) {
    const caip = 'eip155:' + chainId;

    return {
      [caip]: address,
    };
  } else {
    return {};
  }
};

export const getCAIP = (chainId: number): string | null => {
  if (Eip155EnabledIds.includes(chainId)) {
    return 'eip155';
  } else {
    return null;
  }
};

export const convertAddressToAddrCaip = (userAddress: string, chainId: number): string => {
  return `eip155:${chainId}:${userAddress}`;
};

export const convertAddrCaipToAddress = (addressInCaip: string): string => {
  const caipArr: string[] = addressInCaip.split(':');
  if (caipArr.length == 3 && caipArr[0] == 'eip155') {
    return caipArr[2];
  } else {
    throw new Error('Invalid CAIP Format');
  }
};

export const convertChainIdToChainCaip = (chainId: number): string | null => {
  if (Eip155EnabledIds.includes(chainId)) return `eip155:${chainId}`;
  else return null;
};

export const convertChainCaipToChainId = (chainInCaip: string): string => {
  const caipArr: string[] = chainInCaip.split(':');
  if (caipArr.length == 2 && caipArr[0] == 'eip155') {
    return caipArr[2];
  } else {
    throw new Error('Invalid CAIP Format');
  }
};
