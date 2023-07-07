// React + Web3 Essentials
import { ethers } from 'ethers';

// Internal Configs
import { addresses, appConfig } from 'config';

// Constants
const ONE_PUSH = ethers.BigNumber.from(1).mul(ethers.BigNumber.from(10).pow(ethers.BigNumber.from(18)));
const GENESIS_EPOCH_AMOUNT_PUSH = 59400;
const GENESIS_EPOCH_AMOUNT_LP = 74400;
const PUSH_ANNUAL_REWARD = 1323100;

const bn = function (number, defaultValue = null) {
  if (number == null) {
    if (defaultValue == null) {
      return null;
    }
    number = defaultValue;
  }
  return ethers.BigNumber.from(number);
};

const tokenToBn = (token) => {
  return token.mul(ethers.BigNumber.from(10).pow(ethers.BigNumber.from(18)));
};

const tokenBNtoNumber = (tokenBn) => {
  return tokenBn.div(ethers.BigNumber.from(10).pow(ethers.BigNumber.from(10))).toNumber() / 100000000;
};

const bnToInt = function (bnAmount) {
  return parseInt(bnAmount.div(bn(10).pow(18)));
};

export default class YieldFarmingDataStoreV2 {
  static instance = YieldFarmingDataStoreV2.instance || new YieldFarmingDataStoreV2();

  state = {
    account: null,
    signer: null,
    staking: null,
    yieldFarmingPUSH: null,
    yieldFarmingLP: null,
    rewardForCurrentEpochPush: null,
    rewardForCurrentEpochLP: null,

    genesisEpochAmountPUSH: GENESIS_EPOCH_AMOUNT_PUSH, //59400 - (136 * 900) = -63400
    deprecationPerEpochPUSH: 900,
    genesisEpochAmountLP: GENESIS_EPOCH_AMOUNT_LP,
    deprecationPerEpochLP: 900,

    annualPushReward: PUSH_ANNUAL_REWARD,

    uniswapV2Router02: null,
  };

  // init
  init = (account, staking, pushToken, pushCoreV2, yieldFarmingLP, uniswapV2Router02) => {
    // set account
    this.state.account = account;
    this.state.staking = staking;
    this.state.pushToken = pushToken;
    this.state.pushCoreV2 = pushCoreV2;
    this.state.yieldFarmingLP = yieldFarmingLP;
    this.state.uniswapV2Router02 = uniswapV2Router02;
  };

  // 1. Listen for Subscribe Async
  getPoolStats = (provider) => {
    return new Promise(async (resolve, reject) => {
      const pushCoreV2 = this.state.pushCoreV2;
      const yieldFarmingLP = this.state.yieldFarmingLP;
      const currentEpochLP = await yieldFarmingLP.getCurrentEpoch()
      const currentEpochPUSH = await this.currentEpochCalculation(provider);

      let pushPrice;
      const pushPriceAmounts = await this.state.uniswapV2Router02.getAmountsOut(ONE_PUSH.toString(), [addresses.pushToken,addresses.WETHAddress,addresses.USDTAddress]);
      if (appConfig.coreContractChain === 42 || appConfig.coreContractChain === 5) {
        // pushPrice = pushPriceAmounts[pushPriceAmounts.length - 1].div(1000000).toNumber();
        pushPrice = tokenBNtoNumber(pushPriceAmounts[pushPriceAmounts.length - 1]);
      } else {
        pushPrice = pushPriceAmounts[pushPriceAmounts.length - 1].toNumber() / 1000000;
      }
      console.log("Push PRice",pushPrice);

      const pushAmountReserve = tokenBNtoNumber(await this.state.pushToken.balanceOf(addresses.uniV2LPToken));
      const wethAmountReserve = tokenBNtoNumber(await this.state.pushToken.attach(addresses.WETHAddress).balanceOf(addresses.uniV2LPToken)); // Using pushToken instance for WETH instance

      console.log("PpushAmountReserve",pushAmountReserve,wethAmountReserve);

      let ethPrice;
      const ethPriceAmounts = await this.state.uniswapV2Router02.getAmountsOut(ONE_PUSH.toString(),[addresses.WETHAddress,addresses.USDTAddress,]);
      if (appConfig.coreContractChain === 42 || appConfig.coreContractChain === 5) {
        ethPrice = tokenBNtoNumber(ethPriceAmounts[ethPriceAmounts.length - 1]);
      } else {
        ethPrice = ethPriceAmounts[ethPriceAmounts.length - 1].toNumber() / 1000000;
      }
      console.log("ETH PRice",ethPrice);

      const uniTotalSupply = tokenBNtoNumber(await this.state.pushToken.attach(addresses.uniV2LPToken).totalSupply()); // Using pushToken instance for Uni-V2 instance
      const uniLpPrice = (pushAmountReserve * pushPrice + wethAmountReserve * ethPrice) / uniTotalSupply;
      const lpToPushRatio = uniLpPrice / pushPrice;

      //calculating total Value locked
      const lpNextPoolSize = tokenBNtoNumber(await yieldFarmingLP.getPoolSize(currentEpochLP.add(1)));
      const pushStakedAmount = tokenBNtoNumber(await pushCoreV2.totalStakedAmount());
      const totalValueLocked = pushStakedAmount * pushPrice + lpNextPoolSize * uniLpPrice;

      //calculating epoch Duration
      const epochDuration = await yieldFarmingLP.epochDuration();
      const epochStart = await yieldFarmingLP.epochStart();
      const start = epochStart.add(currentEpochLP.sub(1).mul(epochDuration));
      const epochEndTimestamp = start.add(epochDuration);

      //calculation total distributed amount
      const pushTotalDistributedAmount = tokenToBn(ethers.BigNumber.from(this.state.annualPushReward));
      const lpTotalDistributedAmount = await yieldFarmingLP.TOTAL_DISTRIBUTED_AMOUNT();
      const totalDistributedAmount = pushTotalDistributedAmount.add(lpTotalDistributedAmount);

      console.log('total distributed amount>>>>>', tokenBNtoNumber(totalDistributedAmount));

      // calculating push distributed
      const pushRewardsDistributed = await this.getPushRewardsDistributed(currentEpochPUSH,currentEpochLP);

      resolve({
        pushPrice,
        lpToPushRatio,
        epochEndTimestamp,
        totalValueLocked,
        totalDistributedAmount,
        pushRewardsDistributed,
      });
    });
  };

  getPushRewardsDistributed = async (currentEpochPUSH,currentEpochLP) => {
    const pushCoreV2 = this.state.pushCoreV2;
    const yieldFarmingLP = this.state.yieldFarmingLP;
    const totalNoOfEpochsLP = await yieldFarmingLP.NR_OF_EPOCHS();

    currentEpochLP = currentEpochLP.toNumber() > totalNoOfEpochsLP.toNumber() ? totalNoOfEpochsLP  : currentEpochLP;

    //Calculating Push Distributed in the Uni V2  staking Pool
    const genesisEpochAmountLP = tokenToBn(ethers.BigNumber.from(this.state.genesisEpochAmountLP));
    const deprecationPerEpochLP = tokenToBn(ethers.BigNumber.from(this.state.deprecationPerEpochLP));

    console.log('Amount of LP', genesisEpochAmountLP, deprecationPerEpochLP, currentEpochLP.toNumber());

    let pushPoolRewardsDistributed = ethers.BigNumber.from(0);
    let lpPoolRewardsDistributed = ethers.BigNumber.from(0);

    // for (var i = 0; i < currentEpochLP.toNumber(); i++) {
    for (var i = 0; i < currentEpochLP.toNumber(); i++) {
      const rewardForCurrentEpochLP = this.calcTotalAmountPerEpoch(
        genesisEpochAmountLP,
        ethers.BigNumber.from(i),
        deprecationPerEpochLP
      );

      lpPoolRewardsDistributed = lpPoolRewardsDistributed.add(rewardForCurrentEpochLP);

      const pushPoolRewardsDistributed = await pushCoreV2.epochRewards(i);
      console.log("Reward for current epoch PUSH",tokenBNtoNumber(pushPoolRewardsDistributed));

    }
    console.log('Lp Pool rewards distributed', tokenBNtoNumber(lpPoolRewardsDistributed),tokenBNtoNumber(pushPoolRewardsDistributed));

    return pushPoolRewardsDistributed.add(lpPoolRewardsDistributed)
  };

  getLPPoolStats = async (poolStats) => {
    return new Promise(async (resolve, reject) => {
      const yieldFarmingLP = this.state.yieldFarmingLP;
      // const staking = this.state.staking;
      const totalEpochLP = await yieldFarmingLP.NR_OF_EPOCHS();
      const currentEpochLP = await yieldFarmingLP
        .getCurrentEpoch()
        .then((epoch) => (epoch.toNumber() > totalEpochLP.toNumber() ? totalEpochLP : epoch));
      const genesisEpochAmount = tokenToBn(ethers.BigNumber.from(this.state.genesisEpochAmountLP));
      const deprecationPerEpoch = tokenToBn(ethers.BigNumber.from(this.state.deprecationPerEpochLP));

      const rewardForCurrentEpoch = this.calcTotalAmountPerEpoch(
        genesisEpochAmount,
        currentEpochLP,
        deprecationPerEpoch
      );

      this.state.rewardForCurrentEpochLP = rewardForCurrentEpoch;

      const poolBalance = await yieldFarmingLP.getPoolSize(currentEpochLP.add(1));

      const stakingAPR = await this.calcLPPoolAPR(
        genesisEpochAmount,
        currentEpochLP,
        deprecationPerEpoch,
        poolBalance,
        poolStats
      );

      resolve({
        currentEpochLP,
        totalEpochLP,
        rewardForCurrentEpoch,
        poolBalance,
        stakingAPR,
      });
    });
  };

  getPUSHPoolStats = async (provider) => {
    return new Promise(async (resolve, reject) => {
      const pushCoreV2 = this.state.pushCoreV2;
      console.log('pushCore', pushCoreV2);
      const pushToken = this.state.pushToken;
      const currentEpoch = await this.currentEpochCalculation(provider);

      const [ PROTOCOL_POOL_FEES, totalStakedAmount ]= await Promise.all([
        pushCoreV2.PROTOCOL_POOL_FEES(),
        pushCoreV2.totalStakedAmount(),
      ]);

      //get Current Rewards (If Admin adds the Pool Fees they will also stake 1 PUSH so the current reward will get updated)
      let currentReward = await this.getEpochRewards(pushCoreV2, PROTOCOL_POOL_FEES, currentEpoch);

      const stakingAPR = this.calcPushStakingAPR(totalStakedAmount);

      resolve({
        currentEpoch,
        currentReward,
        totalStakedAmount,
        stakingAPR,
      });
    });
  };

  getUserDataLP = async () => {
    return new Promise(async (resolve, reject) => {
      if (this.state.account) {
        const contract = this.state.yieldFarmingLP;

        const numEpoch = await contract.NR_OF_EPOCHS();
        const currentEpochLP = await contract
          .getCurrentEpoch()
          .then((epoch) => (epoch.toNumber() > numEpoch.toNumber() ? numEpoch : epoch));
          console.log("Current Epoch LP",currentEpochLP.toNumber())
        const epochStakeNext = await contract.getEpochStake(this.state.account, currentEpochLP.add(1));

        const potentialUserReward = (await this.calculateUserEpochReward(currentEpochLP, contract)).toFixed(2);

        let totalAccumulatedReward = 0;
        for (var i = 1; i <= currentEpochLP.sub(1).toNumber(); i++) {
          const epochReward = await this.calculateUserEpochReward(i, contract);
          // console.log("Epohc ID", i , "Reward ", epochReward)
          totalAccumulatedReward = totalAccumulatedReward + epochReward;
        }
        totalAccumulatedReward = totalAccumulatedReward.toFixed(2);

        const lastEpochIdHarvested = (await contract.lastEpochIdHarvested(this.state.account)).toNumber();
        let totalAvailableReward = 0;
        for (var i = lastEpochIdHarvested + 1; i <= currentEpochLP.sub(1).toNumber(); i++) {
          const epochReward = await this.calculateUserEpochReward(i, contract);
          totalAvailableReward = totalAvailableReward + epochReward;
        }
        totalAvailableReward = totalAvailableReward.toFixed(2);

        resolve({
          potentialUserReward,
          epochStakeNext,
          totalAccumulatedReward,
          totalAvailableReward,
        });
      }
    });
  };

  getUserDataPUSH = async (provider) => {
    return new Promise(async (resolve, reject) => {
      if (this.state.account) {
        const userAddress = this.state.account;
        const pushCoreV2 = this.state.pushCoreV2;

        //getCurrent Epoch
        const currentEpoch = await this.currentEpochCalculation(provider);

        const [genesisBlock, userstakedAmount, claimedReward] = await Promise.all([
          pushCoreV2.genesisEpoch(),
          pushCoreV2.userFeesInfo(userAddress),
          pushCoreV2.usersRewardsClaimed(userAddress),
        ]);

        let potentialUserReward;

        //checking for which Epoch ID to consider for calculation of the reward
        const computationalEpochId = await this.getComputationalEpoch(currentEpoch.toNumber());

        potentialUserReward = await pushCoreV2.calculateEpochRewards(userAddress, computationalEpochId);

        let lastClaimedEpoch;

        if (userstakedAmount.lastClaimedBlock.toNumber() != 0) {
          lastClaimedEpoch = await pushCoreV2.lastEpochRelative(genesisBlock, userstakedAmount.lastClaimedBlock);
        } else {
          const currentBlock = await provider.getBlock('latest');
          lastClaimedEpoch = await pushCoreV2.lastEpochRelative(genesisBlock, currentBlock.number);
        }

        lastClaimedEpoch = lastClaimedEpoch.toNumber();

        let totalClaimableReward = 0;
        // let lengthToLoop = 0;

        // if(computationalEpochId == lastClaimedEpoch){
        //   lengthToLoop = (computationalEpochId - lastClaimedEpoch);
        // }else{
        //   lengthToLoop = (computationalEpochId - lastClaimedEpoch) + 1;
        // }

        let lengthToLoop = computationalEpochId - lastClaimedEpoch;

        console.log('PUSH Epoch DIfferences', lastClaimedEpoch, computationalEpochId, lengthToLoop);

        const epochsToCondider = Array.from({ length: lengthToLoop }, (_, i) => i + lastClaimedEpoch);

        const userRewards = await Promise.all(
          epochsToCondider.map((epochId) => {
            return pushCoreV2.calculateEpochRewards(userAddress, epochId).then((reward) => {
              console.log('Push: Epoch ID', epochId, 'Reward in this epoch', reward, tokenBNtoNumber(reward));
              return reward;
            });
          })
        );

        const userTotalReawards = userRewards.reduce(
          (accumulator, currentValue) => accumulator.add(currentValue),
          ethers.BigNumber.from(0)
        );
        totalClaimableReward = tokenBNtoNumber(userTotalReawards).toFixed(2);

        resolve({
          userstakedAmount,
          claimedReward,
          potentialUserReward,
          totalClaimableReward,
        });
      }
    });
  };

  calcTotalAmountPerEpoch = (genesisEpochAmount, epochId, deprecationPerEpoch) => {
    return genesisEpochAmount.sub(epochId.mul(deprecationPerEpoch));
  };

  getComputationalEpoch = async (epochId) => {
    const pushCoreV2 = this.state.pushCoreV2;

    const lastTotalStakeEpochInitialized = await pushCoreV2.provider
      .getStorageAt(pushCoreV2.address, 129)
      .then((data) => parseInt(data));

    const _lastTotalStakeEpochInitialized = await this.getEpochRelation(lastTotalStakeEpochInitialized);

    let computationalEpochId = epochId;

    if (
      _lastTotalStakeEpochInitialized.toNumber() == 0 ||
      _lastTotalStakeEpochInitialized.toNumber() == computationalEpochId
    ) {
      computationalEpochId = epochId;
    } else {
      for (var i = _lastTotalStakeEpochInitialized.toNumber() + 1; i <= computationalEpochId; i++) {
        if (tokenBNtoNumber(await pushCoreV2.epochToTotalStakedWeight(i)) == 0) {
          computationalEpochId = i - 1;
        } else {
          computationalEpochId = i;
        }
      }
    }
    console.log('Final epoch ID', computationalEpochId);
    return computationalEpochId;
  };

  getEpochRelation = async (blockNum) => {
    const pushCoreV2 = this.state.pushCoreV2;
    const genesisBlock = await pushCoreV2.genesisEpoch();

    const epochNumber = await pushCoreV2.lastEpochRelative(genesisBlock, blockNum);

    return epochNumber;
  };

  currentEpochCalculation = async (provider) => {
    const pushCoreV2 = this.state.pushCoreV2;
    const genesisBlock = await pushCoreV2.genesisEpoch();
    const currentBlock = await provider.getBlock('latest');

    const currentEpochNumber = await pushCoreV2.lastEpochRelative(genesisBlock, currentBlock.number);

    return currentEpochNumber;
  };

 

  calcAnnualEpochReward = (genesisEpochAmount, epochId, deprecationPerEpoch) => {
    const currentEpochReward = this.calcTotalAmountPerEpoch(genesisEpochAmount, epochId, deprecationPerEpoch);

    const weeks = 52;
    const depreciate = deprecationPerEpoch.mul(weeks * (weeks - 1)).div(2);

    const annualEpochReward = currentEpochReward.mul(weeks).sub(depreciate);

    return annualEpochReward;
  };

  calcPushStakingAPR = (totalStaked) => {
    const annualRewards = this.state.annualPushReward;
    let apr;
    if (appConfig.coreContractChain === 42 || appConfig.coreContractChain === 5)
      apr = (annualRewards / Math.max(tokenBNtoNumber(totalStaked), 1)) * 100;
    else apr = (annualRewards / tokenBNtoNumber(totalStaked)) * 100;

    const aprFormatted = apr.toFixed(2);

    return aprFormatted;
  };

  calcLPPoolAPR = async (genesisEpochAmount, epochId, deprecationPerEpoch, totalStaked, poolStats) => {
    const annualRewards = this.calcAnnualEpochReward(genesisEpochAmount, epochId, deprecationPerEpoch);
    let apr;
    if (appConfig.coreContractChain === 42 || appConfig.coreContractChain === 5)
      apr = (tokenBNtoNumber(annualRewards) * 1000000) / Math.max(tokenBNtoNumber(totalStaked, 1));
    else apr = annualRewards.mul(1000000).div(totalStaked);

    const aprFormatted = (parseInt(apr.toString()) / (10000 * poolStats.lpToPushRatio)).toFixed(2);

    return aprFormatted;
  };

  calculateUserEpochReward = async (epochId, contract) => {
    const epochStake = tokenBNtoNumber(await contract.getEpochStake(this.state.account, epochId));
    const poolSize = tokenBNtoNumber(await contract.getPoolSize(epochId));
    let potentialUserReward = 0;
    if (poolSize > 0) {
      if (contract.address == addresses.yieldFarmLP) {
        const genesisEpochAmount = this.state.genesisEpochAmountLP;
        const deprecationPerEpoch = this.state.deprecationPerEpochLP;
        const rewardForCurrentEpoch = genesisEpochAmount - deprecationPerEpoch * epochId;
        potentialUserReward = (epochStake / poolSize) * rewardForCurrentEpoch;
      } else {
        const rewardForCurrentEpoch = tokenBNtoNumber(this.state.rewardForCurrentEpochPush);
        potentialUserReward = (epochStake / poolSize) * rewardForCurrentEpoch;
      }
    }
    return potentialUserReward;
  };

  getEpochRewards = async (pushCoreV2, PROTOCOL_POOL_FEES, currentEpoch) => {
    let epochRewards = await pushCoreV2.epochRewards(currentEpoch);

    let previouslySetEpochRewards = await pushCoreV2.previouslySetEpochRewards();
    console.log(
      '-----tsss-',
      tokenBNtoNumber(previouslySetEpochRewards),
      tokenBNtoNumber(PROTOCOL_POOL_FEES),
      tokenBNtoNumber(epochRewards)
    );

    if (tokenBNtoNumber(previouslySetEpochRewards) !== tokenBNtoNumber(PROTOCOL_POOL_FEES)) {
      // Manually Calculate Rewards
      const [previouslySetEpochRewards, _lastEpochInitiliazed] = await Promise.all([
        pushCoreV2.previouslySetEpochRewards(),
        this.state.pushCoreV2.provider
          .getStorageAt(pushCoreV2.address, 129)
          .then((hexStr) => Number(hexStr))
          .then((blockNum) => this.getEpochRelation(blockNum)),
      ]);

      console.log('Last Epoch inisitaliased', _lastEpochInitiliazed.toNumber());

      const _epochGap = currentEpoch.sub(_lastEpochInitiliazed);
      console.log('EPoch Gap', _epochGap.toNumber()); // 1

      if (currentEpoch == _lastEpochInitiliazed + 1) {
        console.log('<<<>> it worked');
        const availableRewardsPerEpoch = PROTOCOL_POOL_FEES.sub(previouslySetEpochRewards);
        epochRewards = epochRewards.add(availableRewardsPerEpoch);
      }
    }
    console.log('*********** reward', epochRewards, tokenBNtoNumber(epochRewards));
    return epochRewards;
  };

  
}
