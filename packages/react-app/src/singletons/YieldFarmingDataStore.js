import EPNSCoreHelper from "helpers/EPNSCoreHelper";
import { ethers } from "ethers";

import { addresses, abis } from "@project/contracts";

export default class YieldFarmingDataStore {
  static instance =
    YieldFarmingDataStore.instance || new YieldFarmingDataStore();

  state = {
    account: null,
    staking: null,
    yieldFarmingPUSH: null,
    yieldFarmingLP: null,
    rewardForCurrentEpoch: null,
    genesisEpochAmountPUSH: 30000,
    deprecationPerEpochPUSH: 100,
    genesisEpochAmountLP: 30000,
    deprecationPerEpochLP: 100,
  };

  // init
  init = (account, epnsToken, staking, yieldFarmingPUSH, yieldFarmingLP) => {
    // set account
    this.state.account = account;
    this.state.epnsToken = epnsToken;
    this.state.staking = staking;
    this.state.yieldFarmingPUSH = yieldFarmingPUSH;
    this.state.yieldFarmingLP = yieldFarmingLP;
  };

  // 1. Listen for Subscribe Async
  getPoolStats = () => {
    return new Promise(async (resolve, reject) => {
      const yieldFarmingPUSH = this.state.yieldFarmingPUSH;
      const yieldFarmingLP = this.state.yieldFarmingLP;

      const currentEpochPUSH = await yieldFarmingPUSH.getCurrentEpoch();

      const pushNextPoolSize = await yieldFarmingPUSH.getPoolSize(
        currentEpochPUSH.add(1)
      );

      const lpNextPoolSize = await yieldFarmingLP.getPoolSize(
        currentEpochPUSH.add(1)
      );  

      const nextPoolSize = pushNextPoolSize.add(lpNextPoolSize);

      const pushPrice = 12;

      const epochDuration = await yieldFarmingPUSH.epochDuration();

      const epochStart = await yieldFarmingPUSH.epochStart();

      const start = epochStart.add(currentEpochPUSH.sub(1).mul(epochDuration));
      const epochEndTimestamp = start.add(epochDuration);

      const pushTotalDistributedAmount = await yieldFarmingPUSH.TOTAL_DISTRIBUTED_AMOUNT();
      const lpTotalDistributedAmount = await yieldFarmingLP.TOTAL_DISTRIBUTED_AMOUNT();

      const totalDistributedAmount = pushTotalDistributedAmount.add(
        lpTotalDistributedAmount
      );

      const pushRewardsDistributed = await this.getPushRewardsDistributed();
      
      resolve({
        nextPoolSize,
        pushPrice,
        epochEndTimestamp,
        totalDistributedAmount,
        pushRewardsDistributed
      });
    });
  };

  // 1. Listen for Subscribe Async
  getPUSHPoolStats = async () => {
    return new Promise(async (resolve, reject) => {
      const epnsToken = this.state.epnsToken;
      const staking = this.state.staking;
      const yieldFarmingPUSH = this.state.yieldFarmingPUSH;

      const currentEpochPUSH = await yieldFarmingPUSH.getCurrentEpoch();
      const totalEpochPUSH = (await yieldFarmingPUSH.NR_OF_EPOCHS()).toString();
      const genesisEpochAmount = ethers.BigNumber.from(30000).mul(
        ethers.BigNumber.from(10).pow(ethers.BigNumber.from(18))
      );
      const deprecationPerEpoch = ethers.BigNumber.from(100).mul(
        ethers.BigNumber.from(10).pow(ethers.BigNumber.from(18))
      );

      const rewardForCurrentEpoch = this.calcTotalAmountPerEpoch(
        genesisEpochAmount,
        currentEpochPUSH,
        deprecationPerEpoch
      );

      this.state.rewardForCurrentEpoch = rewardForCurrentEpoch;

      const poolBalance = await yieldFarmingPUSH.getPoolSize(
        currentEpochPUSH.add(1)
      );

      resolve({
        currentEpochPUSH,
        totalEpochPUSH,
        rewardForCurrentEpoch,
        poolBalance,
      });
    });
  };

  getLPPoolStats = async () => {
    return new Promise(async (resolve, reject) => {
      const epnsToken = this.state.epnsToken;
      const staking = this.state.staking;
      const yieldFarmingLP = this.state.yieldFarmingLP;

      const currentEpochPUSH = await yieldFarmingLP.getCurrentEpoch();
      const totalEpochPUSH = (await yieldFarmingLP.NR_OF_EPOCHS()).toString();
      const genesisEpochAmount = ethers.BigNumber.from(30000).mul(
        ethers.BigNumber.from(10).pow(ethers.BigNumber.from(18))
      );
      const deprecationPerEpoch = ethers.BigNumber.from(100).mul(
        ethers.BigNumber.from(10).pow(ethers.BigNumber.from(18))
      );

      const rewardForCurrentEpoch = this.calcTotalAmountPerEpoch(
        genesisEpochAmount,
        currentEpochPUSH,
        deprecationPerEpoch
      );

      this.state.rewardForCurrentEpoch = rewardForCurrentEpoch;

      const poolBalance = await yieldFarmingLP.getPoolSize(
        currentEpochPUSH.add(1)
      );

      resolve({
        currentEpochPUSH,
        totalEpochPUSH,
        rewardForCurrentEpoch,
        poolBalance,
      });
    });
  };

  // 1. Listen for Subscribe Async
  getUserData = async (contract) => {
    return new Promise(async (resolve, reject) => {
      if (this.state.account) {
        const epnsToken = this.state.epnsToken;
        const staking = this.state.staking;
        const currentEpochPUSH = await contract.getCurrentEpoch();

        const userPUSHStakeBalance = await staking.balanceOf(
          this.state.account,
          epnsToken.address
        );

        const epochStake = await contract.getEpochStake(
          this.state.account,
          currentEpochPUSH
        );
        const poolSize = await contract.getPoolSize(currentEpochPUSH);
        let potentialUserReward = 0;
        if (poolSize > 0) {
          potentialUserReward = epochStake
            .div(poolSize)
            .mul(this.state.rewardForCurrentEpoch);
        }

        const epochStakeNext = await contract.getEpochStake(
          this.state.account,
          currentEpochPUSH.add(1)
        );

        resolve({
          userPUSHStakeBalance,
          potentialUserReward,
          epochStakeNext,
        });
      }
    });
  };

  getPushRewardsDistributed = async () => {
    const yieldFarmingPUSH = this.state.yieldFarmingPUSH;
    const yieldFarmingLP = this.state.yieldFarmingLP;

    const currentEpochPUSH = await yieldFarmingPUSH.getCurrentEpoch();
    const genesisEpochAmountPUSH = ethers.BigNumber.from(this.state.genesisEpochAmountPUSH).mul(
      ethers.BigNumber.from(10).pow(ethers.BigNumber.from(18))
    );
    const deprecationPerEpochPUSH = ethers.BigNumber.from(this.state.deprecationPerEpochPUSH).mul(
      ethers.BigNumber.from(10).pow(ethers.BigNumber.from(18))
    );
    const currentEpochLP = await yieldFarmingLP.getCurrentEpoch();
    const genesisEpochAmountLP = ethers.BigNumber.from(this.state.genesisEpochAmountLP).mul(
      ethers.BigNumber.from(10).pow(ethers.BigNumber.from(18))
    );
    const deprecationPerEpochLP = ethers.BigNumber.from(this.state.deprecationPerEpochLP).mul(
      ethers.BigNumber.from(10).pow(ethers.BigNumber.from(18))
    );

    let pushPoolRewardsDistributed = ethers.BigNumber.from(0);
    let lpPoolRewardsDistributed = ethers.BigNumber.from(0);
    
    for(var i=0; i<currentEpochLP.toNumber(); i++){
      const rewardForCurrentEpochLP = this.calcTotalAmountPerEpoch(
        genesisEpochAmountLP,
        ethers.BigNumber.from(i),
        deprecationPerEpochLP
      );

      lpPoolRewardsDistributed = lpPoolRewardsDistributed.add(rewardForCurrentEpochLP);

      const rewardForCurrentEpochPUSH = this.calcTotalAmountPerEpoch(
        genesisEpochAmountPUSH,
        ethers.BigNumber.from(i),
        deprecationPerEpochPUSH
      );

      pushPoolRewardsDistributed = pushPoolRewardsDistributed.add(rewardForCurrentEpochPUSH);
    }

    return pushPoolRewardsDistributed.add(lpPoolRewardsDistributed)
  }

  calcTotalAmountPerEpoch = (
    genesisEpochAmount,
    epochId,
    deprecationPerEpoch
  ) => {
    return genesisEpochAmount.sub(epochId.mul(deprecationPerEpoch));
  };
}
