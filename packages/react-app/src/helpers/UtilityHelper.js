// Utility Helper Functions
const UtilityHelper = {
  isMainnet : (chainId) => {
    if (chainId === 1 || chainId === 137) {
      return true;
    }
  },
}

export default UtilityHelper;
