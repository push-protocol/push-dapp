// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';

// Internal Compoonents
import { ButtonV2, H2V2, ImageV2, ItemHV2, ItemVV2,SectionV2,SpanV2 } from 'components/reusables/SharedStylingV2';
import InfoLogo from "../../assets/inforWithoutBG.svg";
import { Button } from 'primaries/SharedStyling';
import { ethers } from 'ethers';
import { addresses } from 'config';
import { useWeb3React } from '@web3-react/core';
import { abis } from 'config';
import YieldFarmingDataStore from 'singletons/YieldFarmingDataStore';

const YieldUniswapV3 = () => {
    const { active, error, account, library, chainId } = useWeb3React();
    const [txInProgressDep, setTxInProgressDep] = React.useState(false);
    const [poolStats, setPoolStats] = React.useState(null);
    const [lpPoolStats, setLpPoolStats] = React.useState(null);
    const [userDataLP, setUserDataLP] = React.useState(null);

    const [epnsToken, setEpnsToken] = React.useState(null);
    const [staking, setStaking] = React.useState(null);
    const [yieldFarmingPUSH, setYieldFarmingPUSH] = React.useState(null);
    const [yieldFarmingLP, setYieldFarmingLP] = React.useState(null);
    const [uniswapV2Router02, setUniswapV2Router02] = React.useState(null);

    console.log("Addresses",addresses,abis);
    const tokenAddress = addresses.epnsLPToken;

    const getPoolStats = React.useCallback(async () => {
        const poolStats = await YieldFarmingDataStore.instance.getPoolStats();
        console.log("pool stats",poolStats)
    
        setPoolStats({ ...poolStats });
    }, [epnsToken, staking, yieldFarmingPUSH, yieldFarmingLP, uniswapV2Router02]);

    const getLPPoolStats = React.useCallback(
        async (poolStats) => {
          const lpPoolStats = await YieldFarmingDataStore.instance.getLPPoolStats(poolStats);
          console.log("LPPool Stats",lpPoolStats);

          setLpPoolStats({ ...lpPoolStats });
        },
        [epnsToken, staking, yieldFarmingPUSH, yieldFarmingLP, uniswapV2Router02]
    );

    const getUserDataLP = React.useCallback(async () => {
        const userDataLP = await YieldFarmingDataStore.instance.getUserData(yieldFarmingLP);
        console.log("User Data LP",userDataLP);

        setUserDataLP({ ...userDataLP });
    }, [yieldFarmingLP]);

    React.useEffect(() => {
        let epnsToken = new ethers.Contract(addresses.epnsToken, abis.epnsToken, library);
    
        //changed the address and abis
        let staking = new ethers.Contract(addresses.staking, abis.stakingV2, library);

        let yieldFarmingPUSH = new ethers.Contract(addresses.yieldFarmPUSH, abis.yieldFarming, library);
        
        //changed the address
        let yieldFarmingLP = new ethers.Contract(addresses.yieldFarmLP, abis.yieldFarming, library);
    
        let uniswapV2Router02Instance = new ethers.Contract(addresses.uniswapV2Router02, abis.uniswapV2Router02, library);

        console.log("UseEffect",staking,yieldFarmingPUSH,yieldFarmingLP)
    
        setEpnsToken(epnsToken);
        setStaking(staking);
        setYieldFarmingPUSH(yieldFarmingPUSH);
        setYieldFarmingLP(yieldFarmingLP);
        setUniswapV2Router02(uniswapV2Router02Instance);
    
        if (!!(library && account)) {
          var signer = library.getSigner(account);
    
          let epnsToken = new ethers.Contract(addresses.epnsToken, abis.epnsToken, signer);
          let staking = new ethers.Contract(addresses.staking, abis.staking, signer);
          let yieldFarmingPUSH = new ethers.Contract(addresses.yieldFarmPUSH, abis.yieldFarming, signer);
          let yieldFarmingLP = new ethers.Contract(addresses.yieldFarmLP, abis.yieldFarming, signer);
    
          let uniswapV2Router02Instance = new ethers.Contract(addresses.uniswapV2Router02, abis.uniswapV2Router02, signer);
    
          setEpnsToken(epnsToken);
          setStaking(staking);
          setYieldFarmingPUSH(yieldFarmingPUSH);
          setYieldFarmingLP(yieldFarmingLP);
          setUniswapV2Router02(uniswapV2Router02Instance);
        }
    }, [account]);

    React.useEffect(() => {
        console.log("This ran",epnsToken,staking,yieldFarmingPUSH);
         
        if (epnsToken != null && staking != null && yieldFarmingPUSH != null) {
          // Instantiate Data Stores
          YieldFarmingDataStore.instance.init(
            account,
            epnsToken,
            staking,
            yieldFarmingPUSH,
            yieldFarmingLP,
            uniswapV2Router02
          );
    
          getPoolStats();
    
          // setpoolStats(YieldFarmingDataStore.instance.state);
        }
    }, [getPoolStats]);   



    return (
        <Container>
            {/* Top Section */}
            <ItemVV2 margin="0px 0px 20px 0px">
                <Heading onClick={getLPPoolStats}>Uniswap V2 LP Staking Pool</Heading>
                <SecondaryText onClick={getUserDataLP}>
                    Current APR <SpanV2 color="#D53A94">9.89%</SpanV2>
                </SecondaryText>
            </ItemVV2>

            {/* Body Section */}
            <ItemVV2

            >
                {/* Reward Section */}
                <ItemHV2
                    border="1px solid #BAC4D6"
                    borderRadius="16px"
                >
                    <ItemVV2 margin="0px 18px 0px 0px" padding="10px">
                        <SecondaryText>Current Reward</SecondaryText>
                        <H2V2
                            fontSize="24px"
                            fontWeight="700"
                            color="#D53A94"
                            letterSpacing="-0.03em"
                        >
                            24,900 PUSH
                        </H2V2>
                    </ItemVV2>

                    <Line width="10px" height="100%"></Line>

                    <ItemVV2 margin="0px 0px 0px 18px" padding="10px">
                        <SecondaryText>Total Staked</SecondaryText>
                        <H2V2
                            fontSize="24px"
                            fontWeight="700"
                            letterSpacing="-0.03em"
                        >
                            12.725 Uni-V3
                        </H2V2>
                    </ItemVV2>
                </ItemHV2>

                {/* Epoch Text */}
                <ItemHV2
                    alignSelf="end"
                    margin="12px 13px 24px 0px"
                    color="#575D73"
                    letterSpacing="-0.03em"
                >
                    Current Epoch 100/100
                </ItemHV2>

                {/* Deposit Cash Data */}
                <ItemVV2 >
                    <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                        <DataTitle>
                            User Deposit
                            <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                        </DataTitle>
                        <DataValue> 0 PUSH</DataValue>
                    </ItemHV2>
                    <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                        <DataTitle>
                            Rewards Claimed
                            <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                        </DataTitle>
                        <DataValue> 0 PUSH</DataValue>
                    </ItemHV2>
                    <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                        <DataTitle>
                            Current Epoch Reward
                            <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                        </DataTitle>
                        <DataValue> 0 PUSH</DataValue>
                    </ItemHV2>
                    <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                        <DataTitle>
                            Available for Claiming
                            <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                        </DataTitle>
                        <DataValue> 0 PUSH</DataValue>
                    </ItemHV2>

                </ItemVV2>

            </ItemVV2>

            {/* Bottom Section */}
            <ItemVV2 padding=" 0px 14px" margin="24px 0px 0px 0px">
                <ItemHV2>
                    <FilledButton>Stake PUSH/WETH LP Tokens</FilledButton>
                </ItemHV2>
                <ButtonsContainer>
                    <EmptyButton style={{ margin: "0px 10px 0px 0px" }}>Unstake PUSH/WETH</EmptyButton>
                    <EmptyButton>Claim Rewards</EmptyButton>
                </ButtonsContainer>
            </ItemVV2>
        </Container>
    );
};

export default YieldUniswapV3;

const Container = styled(SectionV2)`
    border: 1px solid #BAC4D6;
    border-radius: 24px;
    padding:20px;
    margin:10px;
    font-family: 'Strawford';
    font-style: normal;
    font-weight: 500;

`;

const Heading = styled(H2V2)`
   
   
    font-size: 24px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: #333333;

`
const SecondaryText = styled.p`
    margin:0px;
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: #333333;
`

const Line = styled.div`
    width: 1px;
    height: 100%;
    background:#BAC4D6;
`
const DataTitle = styled.div`
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: rgba(87, 93, 115, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;

`

const DataValue = styled(H2V2)`
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: #333333;
`

const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    margin:15px 0px 0px 0px;
`

const FilledButton = styled(ButtonV2)`
    width:100%;
    background: #D53A94;
    border: 1px solid #D53A94;
    border-radius: 8px;
    padding: 12px;
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: #FFFFFF;
    cursor:pointer;
    & > div{
        display:block;
    }
    
`;

const EmptyButton = styled(Button)`
    border: 1px solid #D53A94;
    border-radius: 8px;
    padding: 12px;
    background:#ffffff;
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: #D53A94;
    flex:1;
    cursor:pointer;
    & > div{
        display:block;
    }

    &:hover{
        background: #D53A94;
        opacity:1;
        color: #FFFFFF;
    }
`
