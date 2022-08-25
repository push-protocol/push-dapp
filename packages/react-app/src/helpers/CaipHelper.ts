import { envConfig } from "@project/contracts";

export const Eip155EnabledIds: Array<Number> = [137, 80001];

type CAIPProps = {
  chainId: number;
  address: string;
}

// return caip obj from chainId and address
export const getCAIPObj = ({ chainId, address }: CAIPProps) => {
  if (chainId === envConfig.coreContractChain) return {};

  if (Eip155EnabledIds.includes(chainId)) {
    const caip = 'eip155:' + chainId;

    return {
      [caip]: address
    }
  } else {
    return {};
  }
}

export const getCAIP = (chainId: number) => {
  if (Eip155EnabledIds.includes(chainId)) {
    return 'eip155';
  } else {
    return null;
  }
}

export const convertAddressToAddrCaip = (userAddress: string, chainId: number) => {
  return `eip155:${chainId}:${userAddress}`;
}

export const convertAddrCaipToAddress = (addressInCaip: string) => {
  const caipArr = addressInCaip.split(':');
  if (caipArr.length == 3 && caipArr[0] == 'eip155') {
    return caipArr[2];
  } else {
    throw new Error('Invalid CAIP Format');
  }
}

export const convertChainIdToChainCaip = (chainId: number) => {
  if (Eip155EnabledIds.includes(chainId))
    return `eip155:${chainId}`;
  else
    return null;
}

export const convertChainCaipToChainId = (chainInCaip: string) => {
  const caipArr = chainInCaip.split(':');
  if (caipArr.length == 2 && caipArr[0] == 'eip155') {
    return caipArr[2];
  } else {
    throw new Error('Invalid CAIP Format');
  }
}