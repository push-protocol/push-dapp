import { envConfig } from "@project/contracts";

// Utility Helper Functions
const UtilityHelper = {
  isMainnet : (chainId: number) => {
    if (chainId === 1 || chainId === 137) {
      return true;
    }
  },
}

// Disable the browser notification on Metamask iphone mobile
export const isUserAgentIphone = (userAgent) =>{
  return userAgent.indexOf("iPhone") !== -1
}

export const networkName = {
  42: "Ethereum Kovan",
  1: "Ethereum Mainnet",
  137: "Polygon Mainnet",
  80001: "Polygon Mumbai"
}

export const Eip155EnableIds = [137, 80001];

type CAIPProps = {
  chainId: number;
  address: string;
}

// return caip obj from chainId and address
export const getCAIP = ({ chainId, address }: CAIPProps) => {
  if (chainId === envConfig.coreContractChain) return {};

  if (Eip155EnableIds.includes(chainId)) {
    const caip = 'eip155:' + chainId;

    return {
      [caip]: address
    }
  } else {
    return {};
  }
}

export default UtilityHelper;
