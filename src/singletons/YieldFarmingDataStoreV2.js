// React + Web3 Essentials
import { ethers } from 'ethers';

// Internal Configs
import { addresses, appConfig } from 'config';

// Constants
const ONE_PUSH = ethers.BigNumber.from(1).mul(ethers.BigNumber.from(10).pow(ethers.BigNumber.from(18)));
const GENESIS_EPOCH_AMOUNT_PUSH = 30000;
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

    genesisEpochAmountPUSH: GENESIS_EPOCH_AMOUNT_PUSH,
    deprecationPerEpochPUSH: 100,
    genesisEpochAmountLP: GENESIS_EPOCH_AMOUNT_LP,
    deprecationPerEpochLP: 300,

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
  getPoolStats = () => {
    return new Promise(async (resolve, reject) => {
      const yieldFarmingPUSH = this.state.pushCoreV2;
      const yieldFarmingLP = this.state.yieldFarmingLP;

      const pushPriceAmounts = await this.state.uniswapV2Router02.getAmountsOut(ONE_PUSH.toString(), [
        addresses.pushToken,
        addresses.WETHAddress,
        addresses.USDTAddress,
      ]);
      const pushPrice = pushPriceAmounts[pushPriceAmounts.length - 1].div(1000000).toNumber();

      const pushAmountReserve = tokenBNtoNumber(await this.state.pushToken.balanceOf(addresses.uniV2LPToken));
      const wethAmountReserve = tokenBNtoNumber(
        await this.state.pushToken.attach(addresses.WETHAddress).balanceOf(addresses.uniV2LPToken)
      ); // Using pushToken instance for WETH instance

      const ethPriceAmounts = await this.state.uniswapV2Router02.getAmountsOut(ONE_PUSH.toString(), [
        addresses.WETHAddress,
        addresses.USDTAddress,
      ]);
      const ethPrice = tokenBNtoNumber(ethPriceAmounts[ethPriceAmounts.length - 1]);

      const uniTotalSupply = tokenBNtoNumber(await this.state.pushToken.attach(addresses.uniV2LPToken).totalSupply()); // Using pushToken instance for Uni-V2 instance
      const uniLpPrice = (pushAmountReserve * pushPrice + wethAmountReserve * ethPrice) / uniTotalSupply;
      const lpToPushRatio = uniLpPrice / pushPrice;

      resolve({
        pushPrice,
        lpToPushRatio,
      });
    });
  };

  getLPPoolStats = async (poolStats) => {
    return new Promise(async (resolve, reject) => {
      const yieldFarmingLP = this.state.yieldFarmingLP;
      const currentEpochPUSH = await yieldFarmingLP.getCurrentEpoch();
      const totalEpochPUSH = (await yieldFarmingLP.NR_OF_EPOCHS()).toString();
      const genesisEpochAmount = tokenToBn(ethers.BigNumber.from(this.state.genesisEpochAmountLP));
      const deprecationPerEpoch = tokenToBn(ethers.BigNumber.from(this.state.deprecationPerEpochLP));

      const rewardForCurrentEpoch = this.calcTotalAmountPerEpoch(
        genesisEpochAmount,
        currentEpochPUSH,
        deprecationPerEpoch
      );

      this.state.rewardForCurrentEpochLP = rewardForCurrentEpoch;

      const poolBalance = await yieldFarmingLP.getPoolSize(currentEpochPUSH.add(1));

      const stakingAPR = await this.calcLPPoolAPR(
        genesisEpochAmount,
        currentEpochPUSH,
        deprecationPerEpoch,
        poolBalance,
        poolStats
      );

      resolve({
        currentEpochPUSH,
        totalEpochPUSH,
        rewardForCurrentEpoch,
        poolBalance,
        stakingAPR,
      });
    });
  };

  getPUSHPoolStats = async (provider) => {
    return new Promise(async (resolve, reject) => {
      const pushCoreV2 = this.state.pushCoreV2;
      const pushToken = this.state.pushToken;
      const currentEpoch = await this.currentEpochCalculation(provider);

      //get Current Rewards
      const currentReward = await pushCoreV2.epochRewards(currentEpoch.toNumber() - 1);

      //get Total staked Amount
      const CHANNEL_POOL_FUNDS = await pushCoreV2.CHANNEL_POOL_FUNDS();
      const PROTOCOL_POOL_FEES = await pushCoreV2.PROTOCOL_POOL_FEES();
      const balanceOfContract = await pushToken.balanceOf(pushCoreV2.address);

      const totalStakedAmount = balanceOfContract.sub(CHANNEL_POOL_FUNDS).sub(PROTOCOL_POOL_FEES);

      //TODO: calculate PUSH Staking APR
    //   const stakingAPR = await this.calcPushStakingAPR(totalStakedAmount);
    //   console.log('stakingAPR', stakingAPR);

      resolve({
        currentEpoch,
        currentReward,
        totalStakedAmount,
      });
    });
  };

  getUserDataPUSH = async (provider) => {
    return new Promise(async (resolve, reject) => {
      if (this.state.account) {
        const pushCoreV2 = this.state.pushCoreV2;
        const genesisBlock = await pushCoreV2.genesisEpoch();

        //getCurrent Epoch
        const currentEpoch = await this.currentEpochCalculation(provider);

        //get User Deposit
        const userstakedAmount = await pushCoreV2.userFeesInfo(this.state.account);

        //get Rewards Claimed so far
        const claimedReward = await pushCoreV2.usersRewardsClaimed(this.state.account);

        //Current Epoch Reward Calculation
        const potentialUserReward = await pushCoreV2.calculateEpochRewards(
          this.state.account,
          currentEpoch.toNumber() - 1
        );

        //get Rewards Available for claiming
        let lastClaimedEpoch;
        if (userstakedAmount.lastClaimedBlock.toNumber() != 0) {
          lastClaimedEpoch = await pushCoreV2.lastEpochRelative(genesisBlock, userstakedAmount.lastClaimedBlock);
        } else {
          const currentBlock = await provider.getBlock('latest');
          lastClaimedEpoch = await pushCoreV2.lastEpochRelative(genesisBlock, currentBlock.number);
        }

        console.log('lastClaimedEpoch', lastClaimedEpoch.toNumber());

        let totalClaimableReward = 0;

        for (let i = lastClaimedEpoch.toNumber(); i < currentEpoch.toNumber(); i++) {
          const reward = await pushCoreV2.calculateEpochRewards(this.state.account, i);
          console.log('Epoch ID', i, 'Reward in this epoch', reward, tokenBNtoNumber(reward));
          totalClaimableReward = totalClaimableReward + tokenBNtoNumber(reward);
        }
        totalClaimableReward = totalClaimableReward.toFixed(2);

        resolve({
          userstakedAmount,
          claimedReward,
          potentialUserReward,
          totalClaimableReward,
        });
      }
    });
  };

  currentEpochCalculation = async (provider) => {
    const pushCoreV2 = this.state.pushCoreV2;
    const genesisBlock = await pushCoreV2.genesisEpoch();
    const currentBlock = await provider.getBlock('latest');

    const currentEpochNumber = await pushCoreV2.lastEpochRelative(genesisBlock, currentBlock.number);

    return currentEpochNumber;
  };

  getUserDataLP = async () => {
    return new Promise(async (resolve, reject) => {
      if (this.state.account) {
        const contract = this.state.yieldFarmingLP;
        const numEpoch = await contract.NR_OF_EPOCHS();
        const currentEpochPUSH = await contract
          .getCurrentEpoch()
          .then((epoch) => (epoch > numEpoch ? numEpoch : epoch));
        const potentialUserReward = (await this.calculateUserEpochReward(currentEpochPUSH, contract)).toFixed(2);
        const epochStakeNext = await contract.getEpochStake(this.state.account, currentEpochPUSH.add(1));

        let totalAccumulatedReward = 0;
        for (var i = 1; i <= currentEpochPUSH.sub(1).toNumber(); i++) {
          const epochReward = await this.calculateUserEpochReward(i, contract);
          console.log('id', i, 'harvested ', epochReward);
          totalAccumulatedReward = totalAccumulatedReward + epochReward;
        }
        totalAccumulatedReward = totalAccumulatedReward.toFixed(2);

        const lastEpochIdHarvested = (await contract.lastEpochIdHarvested(this.state.account)).toNumber();
        console.log('user last epoch id harvested', lastEpochIdHarvested);
        let totalAvailableReward = 0;
        for (var i = lastEpochIdHarvested + 1; i <= currentEpochPUSH.sub(1).toNumber(); i++) {
          const epochReward = await this.calculateUserEpochReward(i, contract);
          console.log('claim id', i, 'harvested ', epochReward);
          totalAvailableReward = totalAvailableReward + epochReward;
        }

        console.log('all', totalAccumulatedReward, 'for', totalAvailableReward);
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

  calcTotalAmountPerEpoch = (genesisEpochAmount, epochId, deprecationPerEpoch) => {
    return genesisEpochAmount.sub(epochId.mul(deprecationPerEpoch));
  };

  calcAnnualEpochReward = (genesisEpochAmount, epochId, deprecationPerEpoch) => {
    // get current epoch reward
    const currentEpochReward = this.calcTotalAmountPerEpoch(genesisEpochAmount, epochId, deprecationPerEpoch);

    const weeks = 52;
    const depreciate = deprecationPerEpoch.mul(weeks * (weeks - 1)).div(2);

    const annualEpochReward = currentEpochReward.mul(weeks).sub(depreciate);

    return annualEpochReward;
  };

//   calcPushStakingAPR = (totalStaked) => {
//     // get annual rewards
//     const annualRewards = bn(this.state.annualPushReward);
//     console.log('Annual rewards', annualRewards, annualRewards.toNumber(), totalStaked, tokenBNtoNumber(totalStaked));
//     let apr;
//     if (appConfig.coreContractChain === 42 || appConfig.coreContractChain === 5) apr = annualRewards.div(totalStaked);
//     else apr = annualRewards.mul(1000000).div(totalStaked);
//     //  apr = (annualRewards * 100) / tokenBNtoNumber(totalStaked);

//     console.log('Annual rewards', apr, tokenBNtoNumber(apr), (parseInt(apr.toString()) / 10000).toFixed(2));

//     const aprFormatted = (parseInt(apr.toString()) / 10000).toFixed(2);

//     return aprFormatted;
//   };

  calcLPPoolAPR = async (genesisEpochAmount, epochId, deprecationPerEpoch, totalStaked, poolStats) => {
    // get annual rewards
    const annualRewards = this.calcAnnualEpochReward(genesisEpochAmount, epochId, deprecationPerEpoch);
    if (totalStaked < ethers.BigNumber.from(0)) {
      totalStaked = totalStaked.add(1);
    }

    let apr = annualRewards.div(totalStaked);

    return (parseInt(apr.toString()) / poolStats.lpToPushRatio).toFixed(2);
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
}
