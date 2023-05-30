import { useWeb3React } from '@web3-react/core';
import { Item } from 'components/SharedStyling';
import { ItemHV2 } from 'components/reusables/SharedStylingV2';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import YieldPoolCard from 'components/yield/YieldPoolCard';
import YieldPushFeeV2 from 'components/yield/YieldPushFeeV2';
import { abis, addresses } from 'config';
import { ethers } from 'ethers';
import React, { useState } from 'react';
import YieldFarmingDataStore from 'singletons/YieldFarmingDataStore';
import styled from 'styled-components';

const DeprecatedYieldFarming = ({
    setActiveTab,
    setLoading
}) => {
    const { account, library, chainId } = useWeb3React();

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

    const getDepPoolStats = React.useCallback(async () => {
        setLoading(true);
        const poolStats = await YieldFarmingDataStore.instance.getPoolStats();
        // console.log("PoolStats", poolStats);

        setDepPoolStats({ ...poolStats });
        setLoading(false);
    }, [pushToken, depStaking, depYieldFarmLP, depYieldFarmPUSH, uniswapV2Router02]);

    const getDepPUSHPoolStats = React.useCallback(async () => {
        setLoading(true);
        const pushPoolStats = await YieldFarmingDataStore.instance.getPUSHPoolStats();
        console.log("PUSH Pool Stats: ", pushPoolStats);

        setDepPushPoolStats({ ...pushPoolStats });
        setLoading(false);
    }, [pushToken, depStaking, depYieldFarmLP, depYieldFarmPUSH, uniswapV2Router02]);

    const getDepLPPoolStats = React.useCallback(
        async (poolStats) => {
            setLoading(true);
            const lpPoolStats = await YieldFarmingDataStore.instance.getLPPoolStats(poolStats);
            console.log("Lp Pool Stats: ", lpPoolStats);

            setDepLpPoolStats({ ...lpPoolStats });
            setLoading(false);
        }, [pushToken, depStaking, depYieldFarmLP, depYieldFarmPUSH, uniswapV2Router02]);

    const getDepUserDataPUSH = React.useCallback(async () => {
        setLoading(true);
        const userDataPUSH = await YieldFarmingDataStore.instance.getUserData(depYieldFarmPUSH);
        console.log("UserData PUSh", userDataPUSH);
        setDepUserDataPUSH({ ...userDataPUSH });
        setLoading(false);
    }, [depYieldFarmPUSH]);

    const getDepUserDataLP = React.useCallback(async () => {
        setLoading(true);
        const userDataLP = await YieldFarmingDataStore.instance.getUserData(depYieldFarmLP);
        console.log("UserData LP", userDataLP);

        setDepUserDataLP({ ...userDataLP });
        setLoading(false);
    }, [depYieldFarmLP]);


    React.useEffect(() => {
        let pushToken = new ethers.Contract(addresses.pushToken, abis.pushToken, library);

        let staking = new ethers.Contract(addresses.staking, abis.staking, library);
        let depYieldFarmPUSH = new ethers.Contract(addresses.depYieldFarmPUSH, abis.yieldFarming, signer);
        let depYieldFarmLP = new ethers.Contract(addresses.depYieldFarmLP, abis.yieldFarming, signer);
        let uniswapV2Router02Instance = new ethers.Contract(addresses.uniswapV2Router02, abis.uniswapV2Router02, library);

        setPushToken(pushToken);
        setDepStaking(staking);
        setDepYieldFarmPUSH(depYieldFarmPUSH);
        setDepYieldFarmLP(depYieldFarmLP);
        setUniswapV2Router02(uniswapV2Router02Instance);

        if (!!(library && account)) {
            var signer = library.getSigner(account);

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
            // getLPPoolStats();
            // getDepUserDataLP();
            // setpoolStats(YieldFarmingDataStore.instance.state);
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
            <V2Container>

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


                {/* {(depUserDataLP && depLpPoolStats) && (
                    
                )}

                {(depUserDataPUSH && depPushPoolStats) && (
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
                )} */}


                {/* <YieldUniswapV2 /> */}
                {/* <YieldPushFeeV2 /> */}
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