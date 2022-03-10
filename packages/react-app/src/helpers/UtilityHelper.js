// Utility Helper Functions
const UtilityHelper = {
  isMainnet : (chainId) => {
    if (chainId === 1) {
      return true;
    }
  },
}

export default UtilityHelper;
