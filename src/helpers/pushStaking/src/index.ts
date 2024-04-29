import { ethers } from 'ethers';
import { PushCoreV2 } from '../types';
import { CoreV2Reward } from './CoreV2Reward';
import { Helpers } from './helpers';
import { Constants } from './constants';

export const getUserPushStakingInfo = async (
  provider: ethers.providers.JsonRpcProvider,
  userAddress: string,
  contractAddress: string
) => {
  const coreV2Contract = Helpers.getCoreV2Contract(provider, contractAddress);

  const avilableRewardHelper = new CoreV2Reward(coreV2Contract, userAddress);
  const userRewardInfoHelper = new CoreV2Reward(coreV2Contract, userAddress);

  let totalStaked = coreV2Contract.totalStakedAmount();
  let claimedR = coreV2Contract.usersRewardsClaimed(userAddress);

  const [availableRewards, userFeeInfo, totalStakedAmount, claimedReward] = await Promise.all([
    avilableRewardHelper.estimateHarvestAll(),
    userRewardInfoHelper.getUserPotentialEpochReward(),
    totalStaked,
    claimedR,
  ]);

  return {
    availableRewards,
    totalStakedAmount,
    claimedReward,
    ...userFeeInfo,
  };
};
