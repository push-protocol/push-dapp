import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { abis, addresses, appConfig } from 'config';
import { useAccount } from 'hooks';
import YieldFarmingDataStoreV2 from 'singletons/YieldFarmingDataStoreV2';
import { useQuery } from '@tanstack/react-query';

// TODO: Fix this hook in future
export const usePushStakingStats = () => {
  const { provider, account, chainId } = useAccount();

  const [pushToken, setPushToken] = useState<ethers.Contract>();
  const [staking, setStaking] = useState<ethers.Contract>();
  const [yieldFarmingLP, setYieldFarmingLP] = useState<ethers.Contract>();
  const [pushCoreV2, setPushCoreV2] = useState<ethers.Contract>();
  const [uniswapV2Router02Instance, setUniswapV2Router02Instance] = useState<ethers.Contract>();

  const library = provider?.getSigner(account);

  const { data: poolStats } = useQuery({
    queryKey: ['poolStats'],
    enabled: !!provider && !!yieldFarmingLP,
    // @ts-expect-error
    queryFn: () => YieldFarmingDataStoreV2.getInstance().getPoolStats(provider),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchInterval: 3600000,
    retry: 2,
  });

  /* not needed as of now */
  // const { data: lpPoolStats } = useQuery({
  //   queryKey: ['lpPoolStats'],
  //   enabled: !!provider && !!poolStats,
  //   // @ts-expect-error
  //   queryFn: () => YieldFarmingDataStoreV2.getInstance().getLPPoolStats(poolStats),
  //   staleTime: Infinity,
  //   refetchOnWindowFocus: false,
  //   refetchInterval: 3600000,
  //   retry: 2,
  // });

  /* not needed as of now */
  // const { data: userDataLP } = useQuery({
  //   queryKey: ['userDataLP'],
  //   enabled: !!provider,
  //   // @ts-expect-error
  //   queryFn: () => YieldFarmingDataStoreV2.getInstance().getUserDataLP(),
  //   staleTime: Infinity,
  //   refetchOnWindowFocus: false,
  //   refetchInterval: 3600000,
  //   retry: 2,
  // });

  const { data: userDataPush } = useQuery({
    queryKey: ['pushPoolStats'],
    enabled: !!provider && !!pushCoreV2,
    // @ts-expect-error
    queryFn: () => YieldFarmingDataStoreV2.getInstance().getUserDataPUSH(provider),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchInterval: 3600000,
    retry: 2,
  });

  //initiate the YieldFarmV2 data store here
  useEffect(() => {
    if (chainId !== appConfig.coreContractChain && chainId !== appConfig.mainnetCoreContractChain) {
      return;
    }

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

    // @ts-expect-error
    YieldFarmingDataStoreV2.getInstance().init(
      account,
      staking,
      pushToken,
      pushCoreV2,
      yieldFarmingLP,
      uniswapV2Router02Instance
    );
  }, [account, chainId]);

  return {
    poolStats,
    // lpPoolStats,
    // userDataLP,
    // userDataPush,
    pushPoolStats: userDataPush?.[0],
  };
};
