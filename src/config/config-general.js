// environmental configurations for the dapp for different environments
export const config = {
  /** 
   * API Calls Related
   */
  infuraAPIKey: 'e214e9781e104829bc93941508a45b58'

}

import daiAbi from "./abis/dai";
import epnsTokenAbi from "./abis/EPNS.json";
import epnsCommAbi from "./abis/epnsCommunicator.json";
import epnscoreAbi from "./abis/epnscore";
import erc20Abi from "./abis/erc20";
import ec721Abi from "./abis/ERC721.json";
import MerkleDistributorAbi from "./abis/MerkleDistributor.json";
import NFTRewards from "./abis/NFTRewards.json";
import NFTRewardsV2 from "./abis/NFTRewardsV2.json";
import ownableAbi from "./abis/ownable";
import rockstarAbi from "./abis/Rockstar.json";
import rockstarV2Abi from "./abis/RockstarV2.json";
import stakingAbi from "./abis/Staking.json";
import UniswapV2Router02Abi from "./abis/UniswapV2Router02.json";
import yieldFarmingAbi from "./abis/YieldFarm.json";

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
  uniswapV2Router02: UniswapV2Router02Abi,
  rockstarV2: rockstarV2Abi,
  NFTRewardsV2: NFTRewardsV2
};
