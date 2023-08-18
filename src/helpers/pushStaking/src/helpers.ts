import { ethers } from "ethers";
import { PushCoreV2__factory } from "../types";
import { Constants } from "./constants";
import { StateType } from "./types";

export const Helpers = {
  toBN: (num: number | string) => {
    return ethers.BigNumber.from(num);
  },
  getCoreV2Contract: (
    provider: ethers.providers.JsonRpcProvider,
    address: string
  ) => {
    return PushCoreV2__factory.connect(address, provider);
  },

  lastEpochRelative: (genesisBlock: number, currentBlock: number) => {
    const calcEpoch = Math.floor(
      (currentBlock - genesisBlock) / Constants.epochDuration + 1
    );

    return calcEpoch;
  },

  epochToUserStakedWeight: async (
    provider: ethers.providers.JsonRpcProvider,
    userAddress: string,
    epoch: number,
    contractAddress:string
  ) => {
    const mappingSlot = Constants.config.SLOTS.userFeesInfo;

    const userFessInfoSlotHash = ethers.utils.solidityKeccak256(
      ["uint256", "uint256"],
      [userAddress, mappingSlot] // key, mapping slot
    );

    const eTUSWtMappingSlot = ethers.BigNumber.from(userFessInfoSlotHash)
      .add(4)
      .toHexString();

    const eTUSWtSlot = ethers.utils.solidityKeccak256(
      ["uint256", "uint256"],
      [epoch, eTUSWtMappingSlot] // key, mapping slot
    );

    const eTUSWt = await provider.getStorageAt(contractAddress, eTUSWtSlot);
    return ethers.BigNumber.from(eTUSWt);
  },

  deepCopy(obj: StateType) {
    return JSON.parse(JSON.stringify(obj)) as StateType;
  },

  getEmptyState(): StateType {
    return {
      // Block
      currentEpoch: 0,
      currentBlockNumber: 0,
      genesisEpoch: 0,

      // Contract
      epochRewards: [],
      lastEpochInitialized: 0,
      lastTotalStakeEpochInitialized: 0,
      epochToTotalStakedWeight: [],
      previouslySetEpochRewards: ethers.BigNumber.from(0),

      // User
      userFeesInfo: {
        epochToUserStakedWeight: [],
        lastClaimedBlock: ethers.BigNumber.from(0),
        lastStakedBlock: ethers.BigNumber.from(0),
        stakedAmount: ethers.BigNumber.from(0),
        stakedWeight: ethers.BigNumber.from(0),
      },
    };
  },
};
