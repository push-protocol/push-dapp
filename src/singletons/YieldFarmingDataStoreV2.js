// React + Web3 Essentials
import { ethers } from 'ethers';

// Internal Configs
import { addresses, appConfig } from 'config';

import {getUserPushStakingInfo} from 'helpers/pushStaking'

// Constants
const ONE_PUSH = ethers.BigNumber.from(1).mul(ethers.BigNumber.from(10).pow(ethers.BigNumber.from(18)));
const GENESIS_EPOCH_AMOUNT_PUSH = 59400;
const GENESIS_EPOCH_AMOUNT_LP = 75300;
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
  return parseFloat(ethers.utils.formatEther(tokenBn))
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

    highCapLPStakingAPR: 200,
    highCapPUSHStakingAPR: 200,

    genesisEpochAmountPUSH: GENESIS_EPOCH_AMOUNT_PUSH,
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
      const pushPriceAmounts = await this.state.uniswapV2Router02.getAmountsOut(ONE_PUSH.toString(), [addresses.pushToken, addresses.WETHAddress, addresses.USDTAddress]);
      if (appConfig.coreContractChain === 42 || appConfig.coreContractChain === 5) {
        pushPrice = tokenBNtoNumber(pushPriceAmounts[pushPriceAmounts.length - 1]);
      } else {
        pushPrice = pushPriceAmounts[pushPriceAmounts.length - 1].toNumber() / 1000000;
      }
      const pushAmountReserve = tokenBNtoNumber(await this.state.pushToken.balanceOf(addresses.uniV2LPToken));
      const wethAmountReserve = tokenBNtoNumber(await this.state.pushToken.attach(addresses.WETHAddress).balanceOf(addresses.uniV2LPToken)); // Using pushToken instance for WETH instance

      let ethPrice;
      const ethPriceAmounts = await this.state.uniswapV2Router02.getAmountsOut(ONE_PUSH.toString(), [addresses.WETHAddress, addresses.USDTAddress,]);
      if (appConfig.coreContractChain === 42 || appConfig.coreContractChain === 5) {
        ethPrice = tokenBNtoNumber(ethPriceAmounts[ethPriceAmounts.length - 1]);
      } else {
        ethPrice = ethPriceAmounts[ethPriceAmounts.length - 1].toNumber() / 1000000;
      }

      const uniTotalSupply = tokenBNtoNumber(await this.state.pushToken.attach(addresses.uniV2LPToken).totalSupply()); // Using pushToken instance for Uni-V2 instance
      const uniLpPrice = (pushAmountReserve * pushPrice + wethAmountReserve * ethPrice) / uniTotalSupply;

      const lpToPushRatio = uniLpPrice / pushPrice;

      //calculating total Value locked
      const lpNextPoolSize = tokenBNtoNumber(await yieldFarmingLP.getPoolSize(currentEpochLP.add(1)));
      const pushStakedAmount = tokenBNtoNumber(await pushCoreV2.totalStakedAmount());
      const totalValueLocked = pushStakedAmount * pushPrice + lpNextPoolSize * uniLpPrice;

      
      //calculating epoch Duration
      const epochDurations = await yieldFarmingLP.epochDuration();
      const epochStart = await yieldFarmingLP.epochStart();
      const start = epochStart.add(currentEpochLP.sub(1).mul(epochDurations));
      const epochEndTimestamp = start.add(epochDurations);


      let currentBlockNumber = await provider.getBlock('latest');
      currentBlockNumber = currentBlockNumber.number;
      const genesisEpoch = await pushCoreV2.genesisEpoch();
      const epochDuration = await pushCoreV2.epochDuration();
      const remainingBlocks =  epochDuration.toNumber() - ( (currentBlockNumber - genesisEpoch.toNumber() ) % epochDuration.toNumber() ) ;
      let epochEndTime = (remainingBlocks * 12.6);
      epochEndTime = Math.round(epochEndTime);

      //calculation total distributed amount
      const pushTotalDistributedAmount = tokenToBn(ethers.BigNumber.from(this.state.annualPushReward));
      const lpTotalDistributedAmount = await yieldFarmingLP.TOTAL_DISTRIBUTED_AMOUNT();
      const totalDistributedAmount = pushTotalDistributedAmount.add(lpTotalDistributedAmount);

      // calculating push distributed
      const pushRewardsDistributed = await this.getPushRewardsDistributed(currentEpochPUSH, currentEpochLP);

      resolve({
        pushPrice,
        lpToPushRatio,
        epochEndTimestamp,
        epochEndTime,
        totalValueLocked,
        totalDistributedAmount,
        pushRewardsDistributed,
      });
    });
  };

  getPushRewardsDistributed = async (currentEpochPUSH, currentEpochLP) => {
    const pushCoreV2 = this.state.pushCoreV2;
    const yieldFarmingLP = this.state.yieldFarmingLP;
    const totalNoOfEpochsLP = await yieldFarmingLP.NR_OF_EPOCHS();

    currentEpochLP = currentEpochLP.toNumber() > totalNoOfEpochsLP.toNumber() ? totalNoOfEpochsLP : currentEpochLP;

    //Calculating Push Distributed in the Uni V2  staking Pool
    const genesisEpochAmountLP = tokenToBn(ethers.BigNumber.from(this.state.genesisEpochAmountLP));
    const deprecationPerEpochLP = tokenToBn(ethers.BigNumber.from(this.state.deprecationPerEpochLP));

    let pushPoolRewardsDistributed = ethers.BigNumber.from(0);
    let lpPoolRewardsDistributed = ethers.BigNumber.from(0);


    for (var i = 0; i < currentEpochLP.toNumber(); i++) {
      const rewardForCurrentEpochLP = this.calcTotalAmountPerEpoch(
        genesisEpochAmountLP,
        ethers.BigNumber.from(i),
        deprecationPerEpochLP
      );

      lpPoolRewardsDistributed = lpPoolRewardsDistributed.add(rewardForCurrentEpochLP);

      const rewardForCurrentEpochPush = await pushCoreV2.epochRewards(i);

      lpPoolRewardsDistributed = lpPoolRewardsDistributed.add(rewardForCurrentEpochPush);

    }
    return pushPoolRewardsDistributed.add(lpPoolRewardsDistributed)
  };

  getLPPoolStats = async (poolStats) => {
    return new Promise(async (resolve, reject) => {
      const yieldFarmingLP = this.state.yieldFarmingLP;
      const totalEpochLP = await yieldFarmingLP.NR_OF_EPOCHS();
      const currentEpochLP = await yieldFarmingLP
        .getCurrentEpoch()
        .then((epoch) => (epoch.toNumber() > totalEpochLP.toNumber() ? totalEpochLP : epoch));

      //calculating current Reward
      const genesisEpochAmount = tokenToBn(ethers.BigNumber.from(this.state.genesisEpochAmountLP));
      const deprecationPerEpoch = tokenToBn(ethers.BigNumber.from(this.state.deprecationPerEpochLP));
      const rewardForCurrentEpoch = this.calcTotalAmountPerEpoch(
        genesisEpochAmount,
        currentEpochLP,
        deprecationPerEpoch
      );
      this.state.rewardForCurrentEpochLP = rewardForCurrentEpoch;

      //Calculating Total Staked Amount
      const poolBalance = await yieldFarmingLP.getPoolSize(currentEpochLP.add(1));

      //Calculating Staking APR
      let stakingAPR = await this.calcLPPoolAPR(
        genesisEpochAmount,
        currentEpochLP,
        deprecationPerEpoch,
        poolBalance,
        poolStats
      );
      stakingAPR = Math.min(this.state.highCapLPStakingAPR, stakingAPR);

      resolve({
        currentEpochLP,
        totalEpochLP,
        rewardForCurrentEpoch,
        poolBalance,
        stakingAPR,
      });
    });
  };

  getUserDataLP = async () => {
    return new Promise(async (resolve, reject) => {
      if (this.state.account) {
        const contract = this.state.yieldFarmingLP;

        const totalNumEpochs = await contract.NR_OF_EPOCHS();
        const currentEpochLP = await contract
          .getCurrentEpoch()
          .then((epoch) => (epoch.toNumber() > totalNumEpochs.toNumber() ? totalNumEpochs : epoch));

        //Calculating User Deposit
        const epochStakeNext = await contract.getEpochStake(this.state.account, currentEpochLP.add(1));

        //Calcuating Current Epoch Reward
        const potentialUserReward = (await this.calculateUserEpochReward(currentEpochLP.toNumber(), contract)).toFixed(2);

        const lastEpochIdHarvested = (await contract.lastEpochIdHarvested(this.state.account)).toNumber();
        let accumulatedReward = this.getAccumulatedReward(currentEpochLP, contract);
        let availableReward = this.getTotalAvailableRewards(lastEpochIdHarvested, currentEpochLP, contract)

        let [totalAccumulatedReward, totalAvailableReward] = await Promise.all([accumulatedReward, availableReward]);

        resolve({
          potentialUserReward,
          epochStakeNext,
          totalAccumulatedReward,
          totalAvailableReward,
        });
      }
    });
  };

  calculateLpEpochRewards = async (epochId, contract) => {

    // we are doing this because we are calculating the epochStake and pool size so we need to multiply them with that current epoch reward
    epochId = epochId + 1;

    const epochStake = tokenBNtoNumber(await contract.getEpochStake(this.state.account, epochId));
    const poolSize = tokenBNtoNumber(await contract.getPoolSize(epochId));

    let potentialUserReward = 0;
    if (poolSize > 0) {
      if (contract.address == addresses.yieldFarmLP) {
        const genesisEpochAmount = this.state.genesisEpochAmountLP;
        const deprecationPerEpoch = this.state.deprecationPerEpochLP;
        const rewardForCurrentEpoch = genesisEpochAmount - deprecationPerEpoch * epochId;
        potentialUserReward = (epochStake / poolSize) * rewardForCurrentEpoch;

      }
    }
    return potentialUserReward;
  }

  getAccumulatedReward = async (
    currentEpochPUSH,//BN
    contract
  ) => {

    let promises = []
    for (var i = 0; i < currentEpochPUSH.sub(1).toNumber(); i++) {
      const epochReward = this.calculateLpEpochRewards(i, contract)
      promises.push(epochReward);
    }
    let resolvePromises = await Promise.all(promises);

    let availableReward = resolvePromises.reduce((total, num) => {
      return total + num;
    }, 0)

    availableReward = availableReward.toFixed(2)
    return availableReward;
  }

  getTotalAvailableRewards = async (
    lastEpochIdHarvested,
    currentEpochPUSH,//BN
    contract
  ) => {
    let promises = []

    for (var i = lastEpochIdHarvested; i < currentEpochPUSH.sub(1).toNumber(); i++) {
      const epochReward = this.calculateLpEpochRewards(i, contract);
      promises.push(epochReward);
    }
    let resolvePromises = await Promise.all(promises);

    let availableReward = resolvePromises.reduce((total, num) => {
      return total + num;
    }, 0)

    availableReward = availableReward.toFixed(2)
    return availableReward;

  }

  getUserDataPUSH = async (provider) => {
    return new Promise(async (resolve, reject) => {
      if (this.state.account) {
        // Rewards Claimed
        const pushCoreV2 = this.state.pushCoreV2;

        let {
          epochRewards, 
          currentEpochNumber,
          userStaked,
          potentialReward,
          availableRewards
        } = await getUserPushStakingInfo(provider,this.state.account,addresses.pushCoreV2);

        //Calculating TotalStaked Amount
        const totalStakedAmount = await pushCoreV2.totalStakedAmount();

        //Calculating Current Reward
        let currentReward = epochRewards;
        this.state.rewardForCurrentEpochPush = currentReward; //this sets the rewardForCurrentEpochPush equal to currentReward.

        //Calculating Staking APR
        let stakingAPR = this.calcPushStakingAPR(totalStakedAmount);
        stakingAPR = Math.min(this.state.highCapPUSHStakingAPR, stakingAPR);
        let claimedReward = await pushCoreV2.usersRewardsClaimed(this.state.account);
        claimedReward = tokenBNtoNumber(claimedReward);

        //Current Epoch Rewards
        potentialReward = tokenBNtoNumber(potentialReward);

        //Available For Claiming
        availableRewards = tokenBNtoNumber(availableRewards);

        const userPushInfo = {
          userStaked,//BN
          claimedReward,//Int
          potentialReward,//Int
          availableRewards,//Int
        }

        const userPushStats = {
          currentEpochNumber,//Int
          currentReward, //BN
          totalStakedAmount,
          stakingAPR,
        }

        resolve([userPushStats,userPushInfo]);
      }
    });
  };

  /* Calculation 'Current Epoch Reward' for Push Fee staking Pool */
  // calculateCurrentPushReward = async (epochId, contract, userstakedAmount) => {

  //   let [PROTOCOL_POOL_FEES, totalStakedAmount] = await Promise.all([
  //     contract.PROTOCOL_POOL_FEES(),
  //     contract.totalStakedAmount(),
  //   ]);
  //   totalStakedAmount = tokenBNtoNumber(totalStakedAmount);

  //   let epochReward = await this.getEpochRewards(contract, PROTOCOL_POOL_FEES, epochId);
  //   epochReward = tokenBNtoNumber(epochReward);
  //   const userStakedWeight = bnToInt(userstakedAmount.stakedWeight);
  //   let totalStakedWeight = await contract.epochToTotalStakedWeight(epochId);
  //   totalStakedWeight = bnToInt(totalStakedWeight);

  //   let currentEpochReward;
  //   if (contract.address === addresses.pushCoreV2) {
  //     currentEpochReward = (userStakedWeight / totalStakedWeight) * (epochReward);
  //   }

  //   return currentEpochReward;

  // }

  // Calculating 'Current Epoch Reward' for UNI-V2 LP Token
  calculateUserEpochReward = async (epochId, contract) => {

    const epochStake = tokenBNtoNumber(await contract.getEpochStake(this.state.account, epochId));
    const poolSize = tokenBNtoNumber(await contract.getPoolSize(epochId));

    let potentialUserReward = 0;
    if (poolSize > 0) {
      if (contract.address == addresses.yieldFarmLP) {
        const genesisEpochAmount = this.state.genesisEpochAmountLP;
        const deprecationPerEpoch = this.state.deprecationPerEpochLP;
        const rewardForCurrentEpoch = genesisEpochAmount - deprecationPerEpoch * (epochId);
        potentialUserReward = (epochStake / poolSize) * rewardForCurrentEpoch;
      }
    }
    return potentialUserReward;
  };



  /* This Calculated the total amount in given Epoch */
  calcTotalAmountPerEpoch = (genesisEpochAmount, epochId, deprecationPerEpoch) => {
    if (epochId.toNumber() === 0) {
      return genesisEpochAmount.mul(0);
    }
    return genesisEpochAmount.sub(epochId.mul(deprecationPerEpoch));
  };

  /* This Checks for which epoch to consider for calculation depending upon lastTotalStakeEpochInitialized */
  // getComputationalEpoch = async (epochId) => {
  //   const pushCoreV2 = this.state.pushCoreV2;

  //   const lastTotalStakeEpochInitialized = await pushCoreV2.provider
  //     .getStorageAt(pushCoreV2.address, 129)
  //     .then((data) => parseInt(data));

  //   const _lastTotalStakeEpochInitialized = await this.getEpochRelation(lastTotalStakeEpochInitialized);

  //   let computationalEpochId = epochId;

  //   if (
  //     _lastTotalStakeEpochInitialized.toNumber() == 0 ||
  //     _lastTotalStakeEpochInitialized.toNumber() == computationalEpochId
  //   ) {
  //     computationalEpochId = epochId;
  //   } else {
  //     for (var i = _lastTotalStakeEpochInitialized.toNumber() + 1; i <= computationalEpochId; i++) {
  //       if (tokenBNtoNumber(await pushCoreV2.epochToTotalStakedWeight(i)) == 0) {
  //         computationalEpochId = i - 1;
  //       } else {
  //         computationalEpochId = i;
  //       }
  //     }
  //   }
  //   return computationalEpochId;
  // };

  // getEpochRelation = async (blockNum) => {
  //   const pushCoreV2 = this.state.pushCoreV2;
  //   const genesisBlock = await pushCoreV2.genesisEpoch();

  //   const epochNumber = await pushCoreV2.lastEpochRelative(genesisBlock, blockNum);

  //   return epochNumber;
  // };

  currentEpochCalculation = async (provider) => {
    const pushCoreV2 = this.state.pushCoreV2;
    const genesisBlock = await pushCoreV2.genesisEpoch();
    const currentBlock = await provider.getBlock('latest');

    const currentEpochNumber = await pushCoreV2.lastEpochRelative(genesisBlock, currentBlock.number);

    return currentEpochNumber;
  };


  calcAnnualEpochReward = (genesisEpochAmount, epochId, deprecationPerEpoch) => {
    const NUM_MONTHS = 12
    const currentEpochReward = this.calcTotalAmountPerEpoch(genesisEpochAmount, epochId, deprecationPerEpoch);

    let rew = currentEpochReward
    for (let i = epochId.toNumber(); i < epochId.toNumber() + NUM_MONTHS; i++) {
      rew = rew.add(currentEpochReward.sub(deprecationPerEpoch.mul(i)))
    }

    return rew;
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
    const denominator = totalStaked * poolStats.lpToPushRatio;
    const arr = annualRewards.mul(100) / denominator;

    return arr.toFixed(2);
  };


  // getEpochRewards = async (pushCoreV2, PROTOCOL_POOL_FEES, currentEpoch) => {
  //   let epochRewards = await pushCoreV2.epochRewards(currentEpoch);

  //   let previouslySetEpochRewards = await pushCoreV2.previouslySetEpochRewards();

  //   if (tokenBNtoNumber(previouslySetEpochRewards) !== tokenBNtoNumber(PROTOCOL_POOL_FEES)) {
  //     // Manually Calculate Rewards
  //     const [previouslySetEpochRewards, _lastEpochInitiliazed] = await Promise.all([
  //       pushCoreV2.previouslySetEpochRewards(),
  //       this.state.pushCoreV2.provider
  //         .getStorageAt(pushCoreV2.address, 129)
  //         .then((hexStr) => Number(hexStr))
  //         .then((blockNum) => this.getEpochRelation(blockNum)),
  //     ]);
  //     // const _epochGap = currentEpoch.sub(_lastEpochInitiliazed);

  //     if (currentEpoch == _lastEpochInitiliazed + 1) {
  //       const availableRewardsPerEpoch = PROTOCOL_POOL_FEES.sub(previouslySetEpochRewards);
  //       epochRewards = epochRewards.add(availableRewardsPerEpoch);
  //     }
  //   }
  //   return epochRewards;
  // };


}
