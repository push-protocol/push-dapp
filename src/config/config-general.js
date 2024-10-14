// Internal Components
import daiAbi from './abis/dai';
import epnsTokenAbi from './abis/EPNS.json';
import epnsCommAbi from './abis/epnsCommunicator.json';
import epnscoreAbi from './abis/epnscore';
import erc20Abi from './abis/erc20';
import ec721Abi from './abis/ERC721.json';
import MerkleDistributorAbi from './abis/MerkleDistributor.json';
import NFTRewards from './abis/NFTRewards.json';
import NFTRewardsV2 from './abis/NFTRewardsV2.json';
import ownableAbi from './abis/ownable';
import rockstarAbi from './abis/Rockstar.json';
import rockstarV2Abi from './abis/RockstarV2.json';
import stakingAbi from './abis/Staking.json';
import UniswapV2Router02Abi from './abis/UniswapV2Router02.json';
import yieldFarmingAbi from './abis/YieldFarm.json';
import pushTokenAbi from './abis/pushToken.json';
import stakingV2Abi from './abis/StakingV2.json'; // for new staking V2 Contract on staging
import uniV2LpTokenAbi from './abis/UniV2LPToken.json'; // for new staking V2 Contract on staging
import PushCoreV2 from './abis/PushCoreV2.json';
import PushRevealAbi from './abis/PushReveal.json';

export const abis = {
  erc20: erc20Abi,
  ownable: ownableAbi,
  epnscore: epnscoreAbi,
  epnsPolyComm: epnsCommAbi,
  epnsComm: epnsCommAbi,
  dai: daiAbi,
  pushToken: pushTokenAbi,
  epnsToken: epnsTokenAbi,
  staking: stakingAbi,
  yieldFarming: yieldFarmingAbi,
  rockstar: rockstarAbi,
  erc721: ec721Abi,
  NFTRewards: NFTRewards,
  distributor: MerkleDistributorAbi,
  uniswapV2Router02: UniswapV2Router02Abi,
  rockstarV2: rockstarV2Abi,
  NFTRewardsV2: NFTRewardsV2,
  stakingV2: stakingV2Abi,
  uniV2LpToken: uniV2LpTokenAbi,
  pushCoreV2: PushCoreV2,
  pushReveal: PushRevealAbi,
};
