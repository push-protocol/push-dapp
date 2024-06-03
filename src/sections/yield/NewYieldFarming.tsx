// React + Web3 Essentials
import { useState, useCallback, useEffect } from 'react';
import { ethers } from 'ethers';

// External Packages
import styled from 'styled-components';

// Internal Compoonents
import { ItemHV2 } from 'components/reusables/SharedStylingV2';
import YieldAnnouncementSection from 'sections/yield/YieldAnnouncementSection';
import YieldPushPriceSection from 'sections/yield/YieldPushPriceSection';
import YieldStatsSection from 'sections/yield/YieldStatsSection';
import YieldFarmingDataStoreV2 from 'singletons/YieldFarmingDataStoreV2';
import YieldUniswapV3 from 'components/yield/YieldUniswapV3';
import YieldPushFeeV3 from 'components/yield/YieldPushFeeV3';
import { useAccount } from 'hooks';

// Internal Configs
import { abis, addresses, appConfig } from 'config/index.js';

const NewYieldFarming = ({ setActiveTab }) => {
  const { provider, account, chainId } = useAccount();

  const [pushToken, setPushToken] = useState<ethers.Contract>();
  const [staking, setStaking] = useState<ethers.Contract>();
  const [yieldFarmingLP, setYieldFarmingLP] = useState<ethers.Contract>();
  const [pushCoreV2, setPushCoreV2] = useState<ethers.Contract>();
  const [uniswapV2Router02Instance, setUniswapV2Router02Instance] = useState<ethers.Contract>();

  const [poolStats, setPoolStats] = useState(null);
  const [lpPoolStats, setLpPoolStats] = useState(null);
  const [userDataLP, setUserDataLP] = useState(null);
  const [userDataPush, setUserDataPush] = useState(null);
  const [PUSHPoolstats, setPUSHPoolStats] = useState(null);

  const library = provider?.getSigner(account);

  const getPoolStats = useCallback(async () => {
    const poolStats = await YieldFarmingDataStoreV2.getInstance().getPoolStats(provider);

    setPoolStats({ ...poolStats });
  }, [staking, pushToken, pushCoreV2, yieldFarmingLP, uniswapV2Router02Instance, provider]);

  const getLpPoolStats = useCallback(async () => {
    const poolStats = await YieldFarmingDataStoreV2.getInstance().getPoolStats(provider);
    const lpPoolStats = await YieldFarmingDataStoreV2.getInstance().getLPPoolStats(poolStats);

    setLpPoolStats({ ...lpPoolStats });
  }, [staking, pushToken, pushCoreV2, yieldFarmingLP, uniswapV2Router02Instance, provider]);

  const getPUSHPoolStats = useCallback(async () => {
    // const pushPoolStats = await YieldFarmingDataStoreV2.getInstance().getPUSHPoolStats(provider);
    // setPUSHPoolStats({ ...pushPoolStats });
  }, []);

  const getUserDataLP = useCallback(async () => {
    const userDataLP = await YieldFarmingDataStoreV2.getInstance().getUserDataLP();

    setUserDataLP({ ...userDataLP });
  }, [staking, pushToken, pushCoreV2, yieldFarmingLP, uniswapV2Router02Instance]);

  const getUserDataPush = useCallback(async () => {
    const [pushPoolStats, userDataPush] = await YieldFarmingDataStoreV2.getInstance().getUserDataPUSH(provider);

    setPUSHPoolStats({ ...pushPoolStats });
    setUserDataPush({ ...userDataPush });
  }, [staking, pushToken, pushCoreV2, yieldFarmingLP, uniswapV2Router02Instance, provider]);

  //initiate the YieldFarmV2 data store here
  useEffect(() => {
    if (chainId !== appConfig.coreContractChain && chainId !== appConfig.mainnetCoreContractChain) {
      return;
    }

    setLpPoolStats(null);
    setUserDataLP(null);
    setPUSHPoolStats(null);
    setUserDataPush(null);

    let staking = new ethers.Contract(addresses.stakingV2, abis.stakingV2, library);
    let pushToken = new ethers.Contract(addresses.pushToken, abis.pushToken, library);
    let pushCoreV2 = new ethers.Contract(addresses.pushCoreV2, abis.pushCoreV2, library);
    let yieldFarmingLP = new ethers.Contract(addresses.yieldFarmLP, abis.yieldFarming, library);
    let uniswapV2Router02Instance = new ethers.Contract(addresses.uniswapV2Router02, abis.uniswapV2Router02, library);

    setStaking(staking);
    setPushToken(pushToken);
    setPushCoreV2(pushCoreV2);
    setYieldFarmingLP(yieldFarmingLP);
    setUniswapV2Router02Instance(uniswapV2Router02Instance);

    if (!!(library && account)) {
      var signer = provider?.getSigner(account);

      let staking = new ethers.Contract(addresses.stakingV2, abis.stakingV2, signer);
      let pushToken = new ethers.Contract(addresses.pushToken, abis.pushToken, signer);
      let pushCoreV2 = new ethers.Contract(addresses.pushCoreV2, abis.pushCoreV2, signer);
      let yieldFarmingLP = new ethers.Contract(addresses.yieldFarmLP, abis.yieldFarming, signer);
      let uniswapV2Router02Instance = new ethers.Contract(addresses.uniswapV2Router02, abis.uniswapV2Router02, signer);

      setStaking(staking);
      setPushToken(pushToken);
      setPushCoreV2(pushCoreV2);
      setYieldFarmingLP(yieldFarmingLP);
      setUniswapV2Router02Instance(uniswapV2Router02Instance);
    }

    YieldFarmingDataStoreV2.getInstance().init(
      account,
      staking,
      pushToken,
      pushCoreV2,
      yieldFarmingLP,
      uniswapV2Router02Instance
    );

    getPoolStats();
    getUserDataLP();
    getLpPoolStats();
    getUserDataPush();
  }, [account, chainId]);

  return (
    <>
      <YieldAnnouncementSection
        logo={'announcement'}
        title={'New V2 Pools are now Live! Stake or migrate now.'}
        body={
          'Users who were part of the previous Push staking program, need to migrate to new pools to continue earning rewards. Click'
        }
        setActiveTab={setActiveTab}
      />
      <YieldStatsSection
        getLpPoolStats={getLpPoolStats}
        poolStats={poolStats}
        setPoolStats={setPoolStats}
      />
      <YieldPushPriceSection poolStats={poolStats} />
      <V3Container>
        <YieldPushFeeV3
          userDataPush={userDataPush}
          getUserDataPush={getUserDataPush}
          PUSHPoolstats={PUSHPoolstats}
          getPUSHPoolStats={getPUSHPoolStats}
        />

        <YieldUniswapV3
          lpPoolStats={lpPoolStats}
          userDataLP={userDataLP}
          getLpPoolStats={getLpPoolStats}
          getUserDataLP={getUserDataLP}
        />
      </V3Container>
    </>
  );
};

export default NewYieldFarming;

const V3Container = styled(ItemHV2)`
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;
