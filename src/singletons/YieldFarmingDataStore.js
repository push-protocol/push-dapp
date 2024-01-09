// React + Web3 Essentials
import { ethers } from "ethers";

// Internal Configs
import { addresses, appConfig } from "config";

// Constants
const ONE_PUSH = ethers.BigNumber.from(1).mul(
  ethers.BigNumber.from(10).pow(ethers.BigNumber.from(18))
);
const GENESIS_EPOCH_AMOUNT_PUSH = 30000
const GENESIS_EPOCH_AMOUNT_LP = 35000

const bn = function(number, defaultValue = null) { if (number == null) { if (defaultValue == null) { return null } number = defaultValue } return ethers.BigNumber.from(number) }

const tokenToBn = (token) => {
  return token.mul(ethers.BigNumber.from(10).pow(ethers.BigNumber.from(18)))
}

const tokenBNtoNumber = (tokenBn) => {
  return tokenBn.div(ethers.BigNumber.from(10).pow(ethers.BigNumber.from(10))).toNumber() / 100000000
}

const bnToInt = function (bnAmount) { return parseInt(bnAmount.div(bn(10).pow(18))) }

export default class YieldFarmingDataStore {
  static instance =
    YieldFarmingDataStore.instance || new YieldFarmingDataStore();

  state = {
    account: null,
    signer: null,
    staking: null,
    yieldFarmingPUSH: null,
    yieldFarmingLP: null,
    rewardForCurrentEpochPush: null,
    rewardForCurrentEpochLP: null,

    genesisEpochAmountPUSH: GENESIS_EPOCH_AMOUNT_PUSH,
    deprecationPerEpochPUSH: 100,
    genesisEpochAmountLP: GENESIS_EPOCH_AMOUNT_LP,
    deprecationPerEpochLP: 100,
    
    uniswapV2Router02:null,
  };

  // init
  init = (account, pushToken, staking, yieldFarmingPUSH, yieldFarmingLP, uniswapV2Router02) => {
    // set account
    this.state.account = account;
    this.state.pushToken = pushToken;
    this.state.staking = staking;
    this.state.yieldFarmingPUSH = yieldFarmingPUSH;
    this.state.yieldFarmingLP = yieldFarmingLP;
    this.state.uniswapV2Router02 = uniswapV2Router02;

  };

  // 1. Listen for Subscribe Async
  getPoolStats = () => {
    
    return new Promise(async (resolve, reject) => {
      const yieldFarmingPUSH = this.state.yieldFarmingPUSH;

      const currentEpochPUSH = await yieldFarmingPUSH.getCurrentEpoch();
      const pushPriceAmounts = await this.state.uniswapV2Router02.getAmountsOut(ONE_PUSH.toString(), [
        addresses.pushToken, 
        addresses.WETHAddress, 
        addresses.USDTAddress
      ]);

      let pushPrice;

      if (appConfig.coreContractChain === 42 || appConfig.coreContractChain === 5) {
        pushPrice = pushPriceAmounts[pushPriceAmounts.length - 1].div(1000000).toNumber();
      } else {
        pushPrice = pushPriceAmounts[pushPriceAmounts.length - 1].toNumber() / 1000000;
      }

      console.debug('Push PRice', pushPrice);

      const pushAmountReserve = tokenBNtoNumber(await this.state.pushToken.balanceOf(addresses.uniV2LPToken))
      const wethAmountReserve = tokenBNtoNumber(await this.state.pushToken.attach(addresses.WETHAddress).balanceOf(addresses.uniV2LPToken)) // Using pushToken instance for WETH instance

      const ethPriceAmounts =  await this.state.uniswapV2Router02.getAmountsOut(ONE_PUSH.toString(), [addresses.WETHAddress, addresses.USDTAddress]);
      let ethPrice;
      if (appConfig.coreContractChain === 42 || appConfig.coreContractChain === 5) {
        ethPrice = tokenBNtoNumber(ethPriceAmounts[ethPriceAmounts.length - 1]);
      } else {
        ethPrice = ethPriceAmounts[ethPriceAmounts.length -1].toNumber()/1000000;
      }

      console.debug('Eth Price', ethPrice);

      const uniTotalSupply = tokenBNtoNumber(await this.state.pushToken.attach(addresses.uniV2LPToken).totalSupply()) // Using pushToken instance for Uni-V2 instance
      const uniLpPrice = ((pushAmountReserve * pushPrice) + (wethAmountReserve * ethPrice)) / uniTotalSupply
      const lpToPushRatio = uniLpPrice / pushPrice

      resolve({
        currentEpoch: currentEpochPUSH,
        lpToPushRatio
      });
    });
  };

  // 1. Listen for Subscribe Async
  getPUSHPoolStats = async () => {
    return new Promise(async (resolve, reject) => {
      const yieldFarmingPUSH = this.state.yieldFarmingPUSH;

      //Getting Current Epoch PUSH
      let totalEpochPUSH = (await yieldFarmingPUSH.NR_OF_EPOCHS()); //100
      const currentEpochPUSH = await yieldFarmingPUSH.getCurrentEpoch(); // 1-100
      totalEpochPUSH = totalEpochPUSH.toString() > currentEpochPUSH.toString() ? currentEpochPUSH : totalEpochPUSH;

      const genesisEpochAmount = tokenToBn(ethers.BigNumber.from(this.state.genesisEpochAmountPUSH));
      const deprecationPerEpoch = tokenToBn(ethers.BigNumber.from(this.state.deprecationPerEpochPUSH));

      const rewardForCurrentEpoch = this.calcTotalAmountPerEpoch(
        genesisEpochAmount,
        totalEpochPUSH,
        deprecationPerEpoch
      );

      this.state.rewardForCurrentEpochPush = rewardForCurrentEpoch;

      //Calculating TotalStaked Amount
      const poolBalance = await yieldFarmingPUSH.getPoolSize(
        currentEpochPUSH.add(1)
      );

      resolve({
        currentEpochPUSH,
        totalEpochPUSH,
        poolBalance,
      });
    });
  };

  // getlpToPushRatio = async () =>{
  //   const pushPriceAmounts = await this.state.uniswapV2Router02.getAmountsOut(ONE_PUSH.toString(), [addresses.pushToken, addresses.WETHAddress, addresses.USDTAddress]);
  //   const pushPrice = pushPriceAmounts[pushPriceAmounts.length -1].toNumber()/1000000;

  //   const pushAmountReserve = tokenBNtoNumber(await this.state.pushToken.balanceOf(addresses.epnsLPToken))
  //   const wethAmountReserve = tokenBNtoNumber(await this.state.pushToken.attach(addresses.WETHAddress).balanceOf(addresses.epnsLPToken)) // Using pushToken instance for WETH instance

  //   const ethPriceAmounts = await this.state.uniswapV2Router02.getAmountsOut(ONE_PUSH.toString(), [addresses.WETHAddress, addresses.USDTAddress]);
  //   const ethPrice = ethPriceAmounts[ethPriceAmounts.length -1].toNumber()/1000000;

  //   const uniTotalSupply = tokenBNtoNumber(await this.state.pushToken.attach(addresses.epnsLPToken).totalSupply()) // Using pushToken instance for Uni-V2 instance

  //   const uniLpPrice = ((pushAmountReserve * pushPrice) + (wethAmountReserve * ethPrice)) / uniTotalSupply
  //   const lpToPushRatio = uniLpPrice / pushPrice

  //   return lpToPushRatio;
  // }

  getLPPoolStats = async (
    poolStats
  ) => {
    return new Promise(async (resolve, reject) => {
      const yieldFarmingLP = this.state.yieldFarmingLP;

      let totalEpochPUSH = (await yieldFarmingLP.NR_OF_EPOCHS());
      const currentEpochPUSH = await yieldFarmingLP.getCurrentEpoch();

      totalEpochPUSH = totalEpochPUSH.toString() > currentEpochPUSH.toString() ? currentEpochPUSH : totalEpochPUSH;

      const poolBalance = await yieldFarmingLP.getPoolSize(
        currentEpochPUSH.add(1)
      );

      resolve({
        currentEpochPUSH,
        totalEpochPUSH,
        poolBalance,
      });
    });
  };

  // 1. Listen for Subscribe Async
  getUserData = async (contract) => {
    return new Promise(async (resolve, reject) => {
      if (this.state.account) {
        const currentEpochPUSH = await contract.getCurrentEpoch().then(res=>ethers.BigNumber.from(Math.min(res,100))); //100

        const epoch = await contract.getCurrentEpoch(); // 120

        const epochStakeNext = await contract.getEpochStake(
          this.state.account,
          epoch.add(1)
        );

        const lastEpochIdHarvested = (await contract.lastEpochIdHarvested(this.state.account)).toNumber()

        let accumulatedReward =  this.getAccumulatedReward(currentEpochPUSH,contract);
        let availableReward =  this.getTotalAvailableRewards(lastEpochIdHarvested,currentEpochPUSH,contract)
    
        let [totalAccumulatedReward,totalAvailableReward] = await Promise.all([accumulatedReward,availableReward]);

        resolve({
          epochStakeNext,
          totalAccumulatedReward,
          totalAvailableReward
        });
      }
    });
  };

  getTotalAvailableRewards = async(
    lastEpochIdHarvested,
    currentEpochPUSH,
    contract
  ) =>{
    let promises = []
    for(var i = lastEpochIdHarvested + 1; i<=currentEpochPUSH.toNumber(); i++){
      const epochReward =  this.calculateUserEpochReward(i, contract);
      promises.push(epochReward);
    }
    let resolvePromises = await Promise.all(promises);

    let availableReward = resolvePromises.reduce((total,num)=>{
      return total + num;
    } , 0)

    availableReward = availableReward.toFixed(2)
    return availableReward;

  }

  getAccumulatedReward = async (
    currentEpochPUSH,
    contract
  )=>{
    let promises = []
    for(var i=0; i<=currentEpochPUSH.toNumber(); i++){
      const epochReward = this.calculateUserEpochReward(i, contract)
      promises.push(epochReward);
    }
    let resolvePromises = await Promise.all(promises);
    let availableReward = resolvePromises.reduce((total,num)=>{
      return total + num;
    } , 0)

    availableReward = availableReward.toFixed(2)

    return availableReward;
  }

  calcTotalAmountPerEpoch = (
    genesisEpochAmount,
    epochId,
    deprecationPerEpoch,
  ) => {
    return genesisEpochAmount.sub(epochId.mul(deprecationPerEpoch));
  };

  calculateUserEpochReward = async (
    epochId,
    contract
  ) => {
      const epochStake = tokenBNtoNumber(await contract.getEpochStake(
        this.state.account,
        epochId
      ));
      const poolSize = tokenBNtoNumber(await contract.getPoolSize(epochId));

      let potentialUserReward = 0;
      if (poolSize > 0) {
        if (contract.address == addresses.yieldFarmLP) {
          const genesisEpochAmount = this.state.genesisEpochAmountLP;
          const deprecationPerEpoch = this.state.deprecationPerEpochLP;
          const rewardForCurrentEpoch =  genesisEpochAmount - deprecationPerEpoch*epochId
          potentialUserReward = epochStake / poolSize * rewardForCurrentEpoch
        }
        else {
          const genesisEpochAmount = this.state.genesisEpochAmountPUSH;
          const deprecationPerEpoch = this.state.deprecationPerEpochPUSH;
          const rewardForCurrentEpoch =  genesisEpochAmount - deprecationPerEpoch*epochId
          potentialUserReward = epochStake / poolSize * rewardForCurrentEpoch
        }
      }
      return potentialUserReward
  }
}
