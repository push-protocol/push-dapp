import erc20Abi from "./abis/erc20";
import ownableAbi from "./abis/ownable";
import epnscoreAbi from "./abis/epnscore";
import daiAbi from "./abis/dai";
import epnsTokenAbi from "./abis/EPNS.json";
import stakingAbi from "./abis/Staking.json";
import yieldFarmingAbi from "./abis/YieldFarm.json";
import rockstarAbi from "./abis/Rockstar.json";
import ec721Abi from "./abis/ERC721.json";
import NFTRewards from "./abis/NFTRewards.json";
import epnsCommAbi from "./abis/epnsCommunicator.json";
import MerkleDistributorAbi from "./abis/MerkleDistributor.json";

export const abis = {
  erc20: erc20Abi,
  ownable: ownableAbi,
  epnscore: epnscoreAbi,
  epnsPolyComm: epnsCommAbi,
  epnsComm: epnsCommAbi,
  dai: daiAbi,
  epnsToken: epnsTokenAbi,
  staking: stakingAbi,
  yieldFarming: yieldFarmingAbi,
  rockstar: rockstarAbi,
  erc721: ec721Abi,
  NFTRewards: NFTRewards,
  distributor: MerkleDistributorAbi,
};

export { default as envConfig } from "./config";
export { default as addresses } from "./addresses";
