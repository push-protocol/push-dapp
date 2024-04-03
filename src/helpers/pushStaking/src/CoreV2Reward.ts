import { ethers } from "ethers";
import { PushCoreV2 } from "../types";
import { Helpers } from "./helpers";
import { StateType } from "./types";

export class CoreV2Reward {
  public STATE: StateType;

  public coreV2Contract: PushCoreV2;
  public userAddress: string;

  constructor(coreV2Contract: PushCoreV2, userAddress: string) {
    this.coreV2Contract = coreV2Contract;
    this.userAddress = userAddress;
    this.STATE = Helpers.getEmptyState();
  }

  public async initState() {
    // setup the block infos
    const coreV2Contract = this.coreV2Contract;

    const currentBlockNumber = await coreV2Contract.provider.getBlockNumber();
    const genesisEpoch = await coreV2Contract
      .genesisEpoch()
      .then((res) => res.toNumber());

    const currentEpoch = Helpers.lastEpochRelative(
      genesisEpoch,
      currentBlockNumber
    );


    this.STATE.currentBlockNumber = currentBlockNumber;
    this.STATE.genesisEpoch = genesisEpoch;
    this.STATE.currentEpoch = currentEpoch;
    this.STATE.currentBlockNumber = currentBlockNumber;
    this.STATE.genesisEpoch = genesisEpoch;
    this.STATE.currentEpoch = currentEpoch;

    const epochs = Array.from({ length: currentEpoch + 1 }, (_, i) => i);
    const epochRewards = await Promise.all(
      epochs.map((ep) => coreV2Contract.epochRewards(ep))
    );
    const epochToTotalStakedWeight = await Promise.all(
      epochs.map((ep) => coreV2Contract.epochToTotalStakedWeight(ep))
    );
    const lastEpochInitializedBlock = await coreV2Contract.provider
      .getStorageAt(coreV2Contract.address, 129)
      .then((hexStr) => Number(hexStr));
    const lastTotalStakeEpochInitialized = await coreV2Contract.provider
      .getStorageAt(coreV2Contract.address, 130)
      .then((hexStr) => Number(hexStr));

    this.STATE.lastEpochInitialized = lastEpochInitializedBlock;
    this.STATE.lastTotalStakeEpochInitialized = lastTotalStakeEpochInitialized;
    this.STATE.epochRewards = epochRewards;
    this.STATE.epochToTotalStakedWeight = epochToTotalStakedWeight;

    this.STATE.previouslySetEpochRewards =
      await coreV2Contract.previouslySetEpochRewards();

    // set user info
    const userFeeInfo = await coreV2Contract.userFeesInfo(this.userAddress);
    this.STATE.userFeesInfo.stakedAmount = userFeeInfo.stakedAmount;
    this.STATE.userFeesInfo.stakedWeight = userFeeInfo.stakedWeight;
    this.STATE.userFeesInfo.lastStakedBlock = userFeeInfo.lastStakedBlock;
    this.STATE.userFeesInfo.lastClaimedBlock = userFeeInfo.lastClaimedBlock;
    this.STATE.userFeesInfo.epochToUserStakedWeight = await Promise.all(
      epochs.map((ep) =>
        Helpers.epochToUserStakedWeight(
          coreV2Contract.provider as ethers.providers.JsonRpcProvider,
          this.userAddress,
          ep,
          this.coreV2Contract.address
        )
      )
    );
  }

  private async _setupEpochsRewardAndWeights(_userWeight: number) {
    const coreV2Contract = this.coreV2Contract;
    const genesisEpoch = await coreV2Contract
      .genesisEpoch()
      .then((res) => res.toNumber());

    const _lastEpochInitiliazed = Helpers.lastEpochRelative(
      genesisEpoch,
      this.STATE.lastEpochInitialized
    );

    const _currentEpoch = this.STATE.currentEpoch;

    // Setting up Epoch Based Rewards
    console.debug(
      "\n\nDoing with: _currentEpoch, _lastEpochInitiliazed",
      _currentEpoch,
      _lastEpochInitiliazed,
      "\n"
    );

    if (_currentEpoch > _lastEpochInitiliazed || _currentEpoch == 1) {
      const PROTOCOL_POOL_FEES = await coreV2Contract.PROTOCOL_POOL_FEES();
      const previouslySetEpochRewards =
        await coreV2Contract.previouslySetEpochRewards();

      const availableRewardsPerEpoch = PROTOCOL_POOL_FEES.sub(
        previouslySetEpochRewards
      );

      const _epochGap = _currentEpoch - _lastEpochInitiliazed;

      if (_epochGap > 1) {
        this.STATE.epochRewards[_currentEpoch - 1] = this.STATE.epochRewards[
          _currentEpoch - 1
        ].add(availableRewardsPerEpoch);
      } else {
        this.STATE.epochRewards[_currentEpoch] = Helpers.toBN(
          this.STATE.epochRewards[_currentEpoch].toString()
        ).add(availableRewardsPerEpoch);
      }

      this.STATE.lastEpochInitialized =
        await coreV2Contract.provider.getBlockNumber();
      this.STATE.previouslySetEpochRewards = PROTOCOL_POOL_FEES;
    }

    // Setting up Epoch Based TotalWeight
    if (
      this.STATE.lastTotalStakeEpochInitialized == 0 ||
      this.STATE.lastTotalStakeEpochInitialized == _currentEpoch
    ) {
      this.STATE.epochToTotalStakedWeight[_currentEpoch] =
        this.STATE.epochToTotalStakedWeight[_currentEpoch].add(_userWeight);
    } else {
      for (
        let i = this.STATE.lastTotalStakeEpochInitialized + 1;
        i <= _currentEpoch - 1;
        i++
      ) {
        if (this.STATE.epochToTotalStakedWeight[i].toNumber() == 0) {
          this.STATE.epochToTotalStakedWeight[i] =
            this.STATE.epochToTotalStakedWeight[
              this.STATE.lastTotalStakeEpochInitialized
            ];
        }
      }

      this.STATE.epochToTotalStakedWeight[_currentEpoch] =
        this.STATE.epochToTotalStakedWeight[
          this.STATE.lastTotalStakeEpochInitialized
        ].add(_userWeight);
    }

    this.STATE.lastTotalStakeEpochInitialized = _currentEpoch;
  }

  private async _adjustUserAndTotalStake(_userWeight: number) {
    await this._setupEpochsRewardAndWeights(_userWeight);

    const currentEpoch = this.STATE.currentEpoch;

    const userStakedWeight = this.STATE.userFeesInfo.stakedWeight;

    if (userStakedWeight.isZero()) {
      this.STATE.userFeesInfo.stakedWeight = Helpers.toBN(_userWeight);
    } else {
      const lastStakedEpoch = Helpers.lastEpochRelative(
        this.STATE.genesisEpoch,
        this.STATE.userFeesInfo.lastStakedBlock.toNumber()
      );

      if (currentEpoch == lastStakedEpoch) {
        this.STATE.userFeesInfo.stakedWeight =
          userStakedWeight.add(_userWeight);
      } else {
        // Initiating 2.2 Case: User stakes again but in Different Epoch
        for (let i = lastStakedEpoch; i <= currentEpoch; i++) {
          if (i != currentEpoch) {
            this.STATE.userFeesInfo.epochToUserStakedWeight[i] =
              userStakedWeight;
          } else {
            this.STATE.userFeesInfo.stakedWeight =
              userStakedWeight.add(_userWeight);

            this.STATE.userFeesInfo.epochToUserStakedWeight[i] =
              this.STATE.userFeesInfo.stakedWeight;
          }
        }
      }
    }

    if (_userWeight != 0) {
      this.STATE.userFeesInfo.lastStakedBlock = Helpers.toBN(
        this.STATE.currentBlockNumber
      );
    }
  }

  private calculateEpochRewards(_epochId: number) {
    return this.STATE.userFeesInfo.epochToUserStakedWeight[_epochId]
      .mul(this.STATE.epochRewards[_epochId])
      .div(this.STATE.epochToTotalStakedWeight[_epochId].add(1));
  }

  public async estimateHarvestAll() {
    await this.initState();

    const _tillEpoch = this.STATE.currentEpoch - 1;

    await this._adjustUserAndTotalStake(0);

    const currentEpoch = this.STATE.currentEpoch;

    if (!(currentEpoch > _tillEpoch)) {
      return Helpers.toBN(0);
    }

    const nextFromEpoch = Helpers.lastEpochRelative(
      this.STATE.genesisEpoch,
      Math.max(
        this.STATE.userFeesInfo.lastClaimedBlock.toNumber(),
        this.STATE.genesisEpoch
      )
    );

    const coreV2Contract = this.coreV2Contract;

    if (!(_tillEpoch >= nextFromEpoch)) {
      return Helpers.toBN(0);
    }

    let rewards = Helpers.toBN(0);
    for (let i = nextFromEpoch; i <= _tillEpoch; i++) {
      const claimableReward = this.calculateEpochRewards(i);
      rewards = rewards.add(claimableReward);
    }


    return rewards;
  }

  public async getUserPotentialEpochReward() {
    await this.initState();
    await this._setupEpochsRewardAndWeights(0);

    const epochRewards = this.STATE.epochRewards[this.STATE.currentEpoch];
    const totalStakedWeight =
      this.STATE.epochToTotalStakedWeight[this.STATE.currentEpoch];
    const userstakedWeight = this.STATE.userFeesInfo.stakedWeight;
    const potentialReward = userstakedWeight
      .mul(epochRewards)
      .div(totalStakedWeight);
    const currentEpochNumber = this.STATE.currentEpoch;

    const userStaked = this.STATE.userFeesInfo.stakedAmount;
    return { potentialReward, epochRewards, userStaked, currentEpochNumber };
  }
}
