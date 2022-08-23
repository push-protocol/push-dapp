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

export const envUtil = {
  prod: "app.epns.io",
  staging: "staging.epns.io",
  dev: "dev.epns.io",
  localhost: "localhost"
}

export const EnvHelper = {
  isProd: window.location.hostname === envUtil['prod'],
  isStaging: window.location.hostname === envUtil['staging'],
  isDev: window.location.hostname === envUtil['dev'],
  isLocalHost: window.location.hostname === envUtil['localhost'],
  isProduction() {
    return (this.isProd || this.isStaging || this.isDev);
  }
};

export const networkName = {
  42: "Ethereum Kovan",
  1: "Ethereum Mainnet",
  137: "Polygon Mainnet",
  80001: "Polygon Mumbai"
}

export const aliasChainIdsMapping = {
  1: 137,
  42: 80001
};

export default UtilityHelper;
