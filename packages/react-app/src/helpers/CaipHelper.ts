import { envConfig } from "@project/contracts";

export const Eip155EnabledIds = [137, 80001];

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