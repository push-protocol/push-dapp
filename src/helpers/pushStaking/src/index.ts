import { ethers } from "ethers";
import { PushCoreV2 } from "../types";
import { CoreV2Reward } from "./CoreV2Reward";
import { Helpers } from "./helpers";
import { Constants } from "./constants";

export const getUserPushStakingInfo = async (
  provider: ethers.providers.JsonRpcProvider,
  userAddress: string,
  contractAddress:string
) => {
  const coreV2Contract = Helpers.getCoreV2Contract(
    provider,
    contractAddress
  );

  const avilableRewardHelper = new CoreV2Reward(coreV2Contract, userAddress);
  const userRewardInfoHelper = new CoreV2Reward(coreV2Contract, userAddress);

  const [availableRewards, userFeeInfo] = await Promise.all([
    avilableRewardHelper.estimateHarvestAll(),
    userRewardInfoHelper.getUserPotentialEpochReward(),
  ]);

  return {
    availableRewards,
    ...userFeeInfo,
  };
};
