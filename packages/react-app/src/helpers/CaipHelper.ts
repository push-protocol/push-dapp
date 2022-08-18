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
  return `eip155:${chainId}`;
}

export const convertChainCaipToChainId = (chainInCaip: string) => {
  const caipArr = chainInCaip.split(':');
  if (caipArr.length == 2 && caipArr[0] == 'eip155') {
    return caipArr[2];
  } else {
    throw new Error('Invalid CAIP Format');
  }
}