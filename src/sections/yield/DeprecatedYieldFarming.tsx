// React + Web3 Essentials
import React, { useState } from 'react';
import { ethers } from 'ethers';

// External Packages
import styled from 'styled-components';

// Internal Compoonents
import { ItemHV2 } from 'components/reusables/SharedStylingV2';
import YieldFarmingDataStore from 'singletons/YieldFarmingDataStore';
import YieldPoolCard from 'components/yield/YieldPoolCard';
import YieldAnnouncementSection from './YieldAnnouncementSection';
import { useAccount } from 'hooks';

// Internal Configs
import { abis, addresses, appConfig } from 'config';

// Constants
export const ALLOWED_CORE_NETWORK = appConfig.coreContractChain;

const DeprecatedYieldFarming = ({
    setActiveTab,
}) => {
    const { account, provider } = useAccount();

    //Initializing the Deprecated YieldFarmingDataStore Class
    const [pushToken, setPushToken] = useState(null);
    const [depStaking, setDepStaking] = useState(null);
    const [depYieldFarmLP, setDepYieldFarmLP] = useState(null);
    const [depYieldFarmPUSH, setDepYieldFarmPUSH] = useState(null);
    const [uniswapV2Router02, setUniswapV2Router02] = React.useState(null);

    const [depPoolStats, setDepPoolStats] = useState(null);
    const [depPushPoolStats, setDepPushPoolStats] = useState(null);
    const [depLpPoolStats, setDepLpPoolStats] = useState(null);

    const [depUserDataPUSH, setDepUserDataPUSH] = useState(null);
    const [depUserDataLP, setDepUserDataLP] = useState(null);

    const library = provider?.getSigner(account);

    const getDepPoolStats = React.useCallback(async () => {
        const poolStats = await YieldFarmingDataStore.instance.getPoolStats();

        setDepPoolStats({ ...poolStats });
    }, [pushToken, depStaking, depYieldFarmLP, depYieldFarmPUSH, uniswapV2Router02]);

    const getDepPUSHPoolStats = React.useCallback(async () => {
        const pushPoolStats = await YieldFarmingDataStore.instance.getPUSHPoolStats();

        setDepPushPoolStats({ ...pushPoolStats });
    }, [pushToken, depStaking, depYieldFarmLP, depYieldFarmPUSH, uniswapV2Router02]);

    const getDepLPPoolStats = React.useCallback(
        async (poolStats) => {
            const lpPoolStats = await YieldFarmingDataStore.instance.getLPPoolStats(poolStats);

            setDepLpPoolStats({ ...lpPoolStats });
        }, [pushToken, depStaking, depYieldFarmLP, depYieldFarmPUSH, uniswapV2Router02]);

    const getDepUserDataPUSH = React.useCallback(async () => {
        const userDataPUSH = await YieldFarmingDataStore.instance.getUserData(depYieldFarmPUSH);

        setDepUserDataPUSH({ ...userDataPUSH });
    }, [depYieldFarmPUSH]);

    const getDepUserDataLP = React.useCallback(async () => {
        const userDataLP = await YieldFarmingDataStore.instance.getUserData(depYieldFarmLP);

        setDepUserDataLP({ ...userDataLP });
    }, [depYieldFarmLP]);


    React.useEffect(() => {
        let pushToken = new ethers.Contract(addresses.pushToken, abis.pushToken, library);

        let staking = new ethers.Contract(addresses.staking, abis.staking, library);
        let depYieldFarmPUSH = new ethers.Contract(addresses.depYieldFarmPUSH, abis.yieldFarming, library);
        let depYieldFarmLP = new ethers.Contract(addresses.depYieldFarmLP, abis.yieldFarming, library);
        let uniswapV2Router02Instance = new ethers.Contract(addresses.uniswapV2Router02, abis.uniswapV2Router02, library);

        setPushToken(pushToken);
        setDepStaking(staking);
        setDepYieldFarmPUSH(depYieldFarmPUSH);
        setDepYieldFarmLP(depYieldFarmLP);
        setUniswapV2Router02(uniswapV2Router02Instance);

        if (!!(library && account)) {
            var signer = provider.getSigner(account);

            let pushToken = new ethers.Contract(addresses.pushToken, abis.pushToken, signer);
            let staking = new ethers.Contract(addresses.staking, abis.staking, signer);
            let depYieldFarmPUSH = new ethers.Contract(addresses.depYieldFarmPUSH, abis.yieldFarming, signer);
            let depYieldFarmLP = new ethers.Contract(addresses.depYieldFarmLP, abis.yieldFarming, signer);

            let uniswapV2Router02Instance = new ethers.Contract(addresses.uniswapV2Router02, abis.uniswapV2Router02, signer);

            setPushToken(pushToken);
            setDepStaking(staking);
            setDepYieldFarmPUSH(depYieldFarmPUSH);
            setDepYieldFarmLP(depYieldFarmLP);
            setUniswapV2Router02(uniswapV2Router02Instance);

        }
    }, [account]);

    React.useEffect(() => {
        if (pushToken != null && depStaking != null && depYieldFarmPUSH != null) {
            // Instantiate Data Stores
            YieldFarmingDataStore.instance.init(
                account,
                pushToken,
                depStaking,
                depYieldFarmPUSH,
                depYieldFarmLP,
                uniswapV2Router02
            );

            getDepPoolStats();
        }
    }, [
        getDepPoolStats
    ]);

    React.useEffect(() => {
        if (depPoolStats) {
            syncData(depPoolStats);
        }
    }, [depPoolStats]);

    const syncData = async (poolStats) => {
        getDepPUSHPoolStats();
        getDepLPPoolStats(poolStats);

        getDepUserDataPUSH();
        getDepUserDataLP();
    };

    return (
        <>
            <YieldAnnouncementSection
                logo={"WarningCircle"}
                title={"This reward program (V1) has ended."}
                body={"To continue earning rewards please migrate to new pools."}
                setActiveTab={setActiveTab}
            />
            <V2Container>

                <YieldPoolCard
                    poolName={"PUSH"}
                    userData={depUserDataPUSH}
                    PoolStats={depPushPoolStats}
                    poolAddress={addresses.depYieldFarmPUSH}
                    getUserData={getDepUserDataPUSH}
                    getPoolStats={getDepPUSHPoolStats}
                    tokenAddress={addresses.pushToken}
                    setActiveTab={setActiveTab}
                />

                <YieldPoolCard
                    poolName={"UNI-V2"}
                    userData={depUserDataLP}
                    PoolStats={depLpPoolStats}
                    poolAddress={addresses.depYieldFarmLP}
                    getUserData={getDepUserDataLP}
                    getPoolStats={getDepLPPoolStats}
                    tokenAddress={addresses.uniV2LPToken}
                    setActiveTab={setActiveTab}
                />



            </V2Container>


        </>
    );
};

export default DeprecatedYieldFarming;

const V2Container = styled(ItemHV2)`

  @media (max-width:1300px){
    margin:auto;
    width: 75%;
    flex-direction:column;
  }

  @media (max-width:768px){
    width: 100%;
  }

  @media (max-width:900px){
    width: 100%;
    flex-direction:column;
  }
`