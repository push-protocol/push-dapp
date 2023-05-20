// React + Web3 Essentials
import React, { useState } from 'react';

// External Packages
import ReactGA from 'react-ga';
import styled from 'styled-components';

// Internal Compoonents
import { ItemVV2, SectionV2 } from 'components/reusables/SharedStylingV2';
import YieldAnnouncementSection from 'sections/yield/YieldAnnouncementSection';
import YieldPushPriceSection from 'sections/yield/YieldPushPriceSection';
import YieldSnapshotSection from 'sections/yield/YieldSnapshotSection';
import YieldStatsSection from 'sections/yield/YieldStatsSection';

// Internal Configs
import { abis, addresses, appConfig } from 'config';
import GLOBALS, { device, globalsMargin } from 'config/Globals';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';
import YieldFarmingDataStoreV2 from 'singletons/YieldFarmingDataStoreV2';
import DeprecatedYieldFarming from 'sections/yield/DeprecatedYieldFarming';

const NewYieldFarming = ({
    setLoading
}) => {

    const { account, library } = useWeb3React();

    const [loadingComponent, setLoadingComponent] = useState(false);
    const [loadingPushComponent, setLoadingPushComponent] = useState(false);

    const [pushToken, setPushToken] = useState(null);
    const [staking, setStaking] = useState(null);
    const [yieldFarmingLP, setYieldFarmingLP] = useState(null);
    const [pushCoreV2, setPushCoreV2] = useState(null);
    const [uniswapV2Router02Instance, setUniswapV2Router02Instance] = useState(null);

    const [poolStats, setPoolStats] = useState(null);
    const [lpPoolStats, setLpPoolStats] = useState(null);
    const [userDataLP, setUserDataLP] = useState(null);
    const [userDataPush, setUserDataPush] = useState(null);
    const [PUSHPoolstats, setPUSHPoolStats] = useState(null);

    const getLpPoolStats = React.useCallback(async () => {
        setLoadingComponent(true);
        const poolStats = await YieldFarmingDataStoreV2.instance.getPoolStats();
        const lpPoolStats = await YieldFarmingDataStoreV2.instance.getLPPoolStats(poolStats);

        setPoolStats({ ...poolStats });
        setLpPoolStats({ ...lpPoolStats });
        setLoadingComponent(false);
    }, [staking, pushToken, pushCoreV2, yieldFarmingLP, uniswapV2Router02Instance]);

    const getPUSHPoolStats = React.useCallback(async () => {
        const pushPoolStats = await YieldFarmingDataStoreV2.instance.getPUSHPoolStats(library);
        console.log("Push Pool Stats", pushPoolStats);

        setPUSHPoolStats({ ...pushPoolStats });
    }, [staking, pushToken, pushCoreV2, yieldFarmingLP, uniswapV2Router02Instance]);

    const getUserDataLP = React.useCallback(async () => {
        setLoadingComponent(true);
        const userDataLP = await YieldFarmingDataStoreV2.instance.getUserDataLP();
        console.log("user Data LP", userDataLP);

        setUserDataLP({ ...userDataLP });
        setLoadingComponent(false);
    }, [yieldFarmingLP]);

    const getUserDataPush = React.useCallback(async () => {
        setLoadingPushComponent(true);
        const userDataPush = await YieldFarmingDataStoreV2.instance.getUserDataPUSH(library);
        console.log("userData Push", userDataPush);

        setUserDataPush({ ...userDataPush });
        setLoadingPushComponent(false);
    }, [staking, pushToken, pushCoreV2, yieldFarmingLP, uniswapV2Router02Instance]);

    //initiate the YieldFarmV2 data store here
    React.useEffect(() => {
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
            var signer = library.getSigner(account);

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

        YieldFarmingDataStoreV2.instance.init(
            account,
            staking,
            pushToken,
            pushCoreV2,
            yieldFarmingLP,
            uniswapV2Router02Instance
        );

        getLpPoolStats();
        getUserDataLP();
        getUserDataPush();
        getPUSHPoolStats();

    }, [account]);

    return (
        <>
            <YieldAnnouncementSection />
            <YieldStatsSection />
            <YieldPushPriceSection
                poolStats={poolStats}
            />
            <YieldSnapshotSection
                lpPoolStats={lpPoolStats}
                userDataLP={userDataLP}
                userDataPush={userDataPush}
                PUSHPoolstats={PUSHPoolstats}
                getUserDataPush={getUserDataPush}
                getPUSHPoolStats={getPUSHPoolStats}
                getLpPoolStats={getLpPoolStats}
                getUserDataLP={getUserDataLP}
                loadingComponent={loadingComponent}
                loadingPushComponent={loadingPushComponent}
            />
        </>
    );
};

export default NewYieldFarming;