import { ethers } from "ethers";

export interface UserFeeInfoType {
  stakedAmount: ethers.BigNumber;
  stakedWeight: ethers.BigNumber;
  lastStakedBlock: ethers.BigNumber;
  lastClaimedBlock: ethers.BigNumber;
  epochToUserStakedWeight: Array<ethers.BigNumber>;
}

export interface StateType {
  // block info
  currentEpoch: number;
  currentBlockNumber: number;
  genesisEpoch: number;

  // contract info
  epochRewards: Array<ethers.BigNumber>;
  lastEpochInitialized: number;
  previouslySetEpochRewards: ethers.BigNumber;
  lastTotalStakeEpochInitialized: number;
  epochToTotalStakedWeight: Array<ethers.BigNumber>;

  // user info
  userFeesInfo: UserFeeInfoType;
}
