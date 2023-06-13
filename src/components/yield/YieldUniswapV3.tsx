// React + Web3 Essentials
import React, { useState } from 'react';

// External Packages
import styled, { css, useTheme } from 'styled-components';

// Internal Compoonents
import { ButtonV2, H2V2, ImageV2, ItemHV2, ItemVV2, SectionV2, Skeleton, SkeletonLine, SpanV2 } from 'components/reusables/SharedStylingV2';
import InfoLogo from "../../assets/inforWithoutBG.svg";
import { B, Button, Input, Item, ItemH, Span } from 'primaries/SharedStyling';
import { ethers } from 'ethers';
import { addresses } from 'config';
import { useWeb3React } from '@web3-react/core';
import { abis } from 'config';
import YieldFarmingDataStore from 'singletons/YieldFarmingDataStore';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { toast } from 'react-toastify';
import useToast from 'hooks/useToast';
import { MdCheckCircle, MdError } from 'react-icons/md';
import useModalBlur, { MODAL_POSITION } from 'hooks/useModalBlur';
import StakingModalComponent from './StakingModalComponent';
import { formatTokens, numberWithCommas } from 'helpers/StakingHelper';
import Tooltip from 'components/reusables/tooltip/Tooltip';
import StakingToolTipContent from './StakingToolTipContent';


const bn = function (number, defaultValue = null) { if (number == null) { if (defaultValue == null) { return null } number = defaultValue } return ethers.BigNumber.from(number) }
const bnToInt = function (bnAmount) { return bnAmount.div(bn(10).pow(18)) }

const YieldUniswapV3 = ({
    lpPoolStats,
    userDataLP,
    getLpPoolStats,
    getUserDataLP
}) => {
    const { active, error, account, library, chainId } = useWeb3React();

    const [txInProgressWithdraw, setTxInProgressWithdraw] = React.useState(false);
    const [txInProgressClaimRewards, setTxInProgressClaimRewards] = React.useState(false);

    const uniswapV2Toast = useToast();
    const theme = useTheme();

    const withdrawAmountTokenFarmAutomatic = async () => {
        if (txInProgressWithdraw) {
            return;
        }

        setTxInProgressWithdraw(true);
        const withdrawAmount = formatTokens(userDataLP.epochStakeNext);

        console.log("Withdraw amount: ", withdrawAmount);

        if (withdrawAmount == 0) {
            uniswapV2Toast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: `Nothing to Withdraw!`,
                toastType: 'ERROR',
                getToastIcon: (size) => <MdError size={size} color="red" />,
            });

            setTxInProgressWithdraw(false);
            return;
        }

        var signer = library.getSigner(account);
        let staking = new ethers.Contract(addresses.stakingV2, abis.stakingV2, signer);

        const amounttowithdraw = await staking.balanceOf(
            account,
            addresses.uniV2LPToken
        )

        const tx = staking.withdraw(
            addresses.uniV2LPToken,
            ethers.BigNumber.from(withdrawAmount).mul(
                ethers.BigNumber.from(10).pow(18)
            )
        );

        tx.then(async (tx) => {
            uniswapV2Toast.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });

            try {
                await library.waitForTransaction(tx.hash);
                uniswapV2Toast.showMessageToast({
                    toastTitle: 'Success',
                    toastMessage: 'Transaction Completed!',
                    toastType: 'SUCCESS',
                    getToastIcon: (size) => (
                        <MdCheckCircle
                            size={size}
                            color="green"
                        />
                    ),
                });

                setTxInProgressWithdraw(false);

                getLpPoolStats();
                getUserDataLP();
            } catch (e) {
                console.log("Error", e);
                uniswapV2Toast.showMessageToast({
                    toastTitle: 'Error',
                    toastMessage: `Transaction Failed! (" +${e.name}+ ")`,
                    toastType: 'ERROR',
                    getToastIcon: (size) => <MdError size={size} color="red" />,
                });

                setTxInProgressWithdraw(false);
            }
        }).catch((err) => {
            uniswapV2Toast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: `Transaction Cancelled!`,
                toastType: 'ERROR',
                getToastIcon: (size) => <MdError size={size} color="red" />,
            });

            setTxInProgressWithdraw(false);
        });
    };

    const massClaimRewardsTokensAll = async () => {
        if (txInProgressClaimRewards) {
            return;
        }

        if (!lpPoolStats.currentEpochPUSH || lpPoolStats.currentEpochPUSH == 1) {
            uniswapV2Toast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: `Harvest unlocks from Epoch 2!)`,
                toastType: 'ERROR',
                getToastIcon: (size) => <MdError size={size} color="red" />,
            });

            return;
        }
        setTxInProgressClaimRewards(true);

        var signer = library.getSigner(account);
        let yieldFarmingLP = new ethers.Contract(
            addresses.yieldFarmLP,
            abis.yieldFarming,
            signer
        );
        const tx = yieldFarmingLP.massHarvest();

        tx.then(async (tx) => {
            uniswapV2Toast.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });

            try {
                await library.waitForTransaction(tx.hash);

                uniswapV2Toast.showMessageToast({
                    toastTitle: 'Success',
                    toastMessage: 'Transaction Completed!',
                    toastType: 'SUCCESS',
                    getToastIcon: (size) => (
                        <MdCheckCircle
                            size={size}
                            color="green"
                        />
                    ),
                });

                getUserDataLP();
                setTxInProgressClaimRewards(false);
            } catch (e) {
                uniswapV2Toast.showMessageToast({
                    toastTitle: 'Error',
                    toastMessage: `Transaction Failed! (" +${e.name}+ ")`,
                    toastType: 'ERROR',
                    getToastIcon: (size) => <MdError size={size} color="red" />,
                });

                setTxInProgressClaimRewards(false);
            }
        }).catch((err) => {
            uniswapV2Toast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: `Transaction Cancelled!`,
                toastType: 'ERROR',
                getToastIcon: (size) => <MdError size={size} color="red" />,
            });

            setTxInProgressClaimRewards(false);
        });
    };

    const {
        isModalOpen: isStakingModalOpen,
        showModal: showStakingModal,
        ModalComponent: StakingComponent,
    } = useModalBlur();

    const stakingModalToast = useToast();

    return (
        <Container>

            <StakingComponent
                InnerComponent={StakingModalComponent}
                InnerComponentProps={{
                    title: 'Uni-V2',
                    getUserData: getUserDataLP,
                    getPoolStats: getLpPoolStats
                }}
                toastObject={stakingModalToast}
                modalPosition={MODAL_POSITION.ON_PARENT}
            />

            {/* Top Section */}
            <ItemVV2 margin="0px 0px 20px 0px">
                {lpPoolStats ? (
                    <>
                        <Heading >Uniswap V2 LP Staking Pool</Heading>
                        <SecondaryText>
                            Current APR <SpanV2 color="#D53A94">{numberWithCommas(lpPoolStats?.stakingAPR)}%</SpanV2>
                        </SecondaryText>
                    </>
                ) : (
                    <SkeletonContainer
                        padding='5px 15px 0 15px'
                    >
                        <SkeletonLine height='12px' width='234px' margin='0 0 10px 0'></SkeletonLine>
                        <SkeletonLine height='12px' width='112px'></SkeletonLine>
                    </SkeletonContainer>
                )}
            </ItemVV2>

            {/* Body Section */}
            <ItemVV2
                flex='5'
            >
                {/* Reward Section */}
                <RewardContainer
                    border={`1px solid ${theme.stakingBorder}`}
                    borderRadius="16px"
                >
                    <ItemVV2 margin="0px 18px 0px 0px" padding="10px">

                        {lpPoolStats ? (
                            <>
                                <SecondaryText>Current Reward</SecondaryText>
                                <H2V2
                                    fontSize="24px"
                                    fontWeight="600"
                                    color="#D53A94"
                                    letterSpacing="-0.03em"
                                >
                                    {numberWithCommas(formatTokens(lpPoolStats?.rewardForCurrentEpoch))} PUSH
                                </H2V2>
                            </>
                        ) : (
                            <SkeletonContainer
                                padding='5px 15px 0 15px'
                            >
                                <SkeletonLine height='12px' width='135px' margin='0 0 8px 0'></SkeletonLine>
                                <SkeletonLine height='12px' width='100px'></SkeletonLine>
                            </SkeletonContainer>
                        )}
                    </ItemVV2>


                    <Line width="10px" height="100%"></Line>

                    <ItemVV2 margin="0px 0px 0px 18px" padding="10px">

                        {lpPoolStats ? (
                            <>
                                <SecondaryText>Total Staked</SecondaryText>

                                <StakedAmount
                                    fontSize="24px"
                                    fontWeight="600"
                                    letterSpacing="-0.03em"
                                >
                                    {numberWithCommas(formatTokens(lpPoolStats?.poolBalance))} UNI-V2
                                </StakedAmount>
                            </>
                        ) : (
                            <SkeletonContainer
                                padding='5px 15px 0 15px'
                            >
                                <SkeletonLine height='12px' width='135px' margin='0 0 8px 0'></SkeletonLine>
                                <SkeletonLine height='12px' width='100px'></SkeletonLine>
                            </SkeletonContainer>
                        )}

                    </ItemVV2>
                </RewardContainer>

                {/* Epoch Text */}
                <ItemHV2
                    alignSelf="end"
                    margin="12px 13px 24px 0px"
                    color="#575D73"
                    letterSpacing="-0.03em"
                >

                    {lpPoolStats ? (
                        <>
                            <EpochNo>Current Epoch</EpochNo>
                            <B>
                                {Math.min(lpPoolStats?.currentEpochPUSH, lpPoolStats?.totalEpochPUSH).toString()}
                                /
                                {(lpPoolStats?.totalEpochPUSH).toString()}
                            </B>
                        </>
                    ) : (
                        <SkeletonContainer
                            padding='5px 0px 0 15px'
                        >
                            <SkeletonLine height='12px' width='124px' ></SkeletonLine>
                        </SkeletonContainer>
                    )}

                </ItemHV2>

                {/* Deposit Cash Data */}

                {userDataLP ? (
                    <ItemVV2

                    // padding={loadingUserData ? "60px " : "0px"}
                    >
                        <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                            <DataTitle>
                                User Deposit
                                <InfoSpan>
                                    <StakingToolTip
                                        title={"User Deposited"}
                                        body={"Amount of Uni-V2 Token User Staked"}
                                    />
                                </InfoSpan>
                            </DataTitle>
                            <DataValue>{formatTokens(userDataLP?.epochStakeNext)} UNI-V2</DataValue>
                        </ItemHV2>
                        <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                            <DataTitle>
                                Rewards Claimed
                                <InfoSpan>

                                    <StakingToolTip
                                        title={"Rewards Claimed"}
                                        body={"Amount of Push Claimed by User"}
                                    />
                                </InfoSpan>
                            </DataTitle>
                            <DataValue> {(userDataLP?.totalAccumulatedReward - userDataLP?.totalAvailableReward).toFixed(2)} PUSH</DataValue>
                        </ItemHV2>
                        <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                            <DataTitle>
                                Current Epoch Reward
                                <InfoSpan>
                                    <StakingToolTip
                                        title={"Current Epoch Reward"}
                                        body={"Amount of Push Token Claimable in this EPOCH"}
                                    />
                                </InfoSpan>
                            </DataTitle>
                            <DataValue> {userDataLP?.potentialUserReward} PUSH</DataValue>
                        </ItemHV2>
                        <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                            <DataTitle>
                                Available for Claiming
                                <InfoSpan>
                                    <StakingToolTip
                                        title={"Available for Claiming"}
                                        body={"Amount of Push Token Available to claim"}
                                    />
                                </InfoSpan>
                            </DataTitle>
                            <DataValue> {userDataLP?.totalAvailableReward} PUSH</DataValue>
                        </ItemHV2>



                    </ItemVV2>

                ) : (
                    <Skeleton
                        padding='0 15px 15px 15px'
                        width='100%'
                        maxWidth=' -webkit-fill-available'
                        borderRadius='5px'
                    >
                        <ItemHV2 justifyContent='space-between' margin='0 0 23px 0'>
                            <SkeletonLine height='12px' width='164px' ></SkeletonLine>
                            <SkeletonLine height='12px' width='72px'></SkeletonLine>
                        </ItemHV2>
                        <ItemHV2 justifyContent='space-between' margin='0 0 23px 0'>
                            <SkeletonLine height='12px' width='164px' ></SkeletonLine>
                            <SkeletonLine height='12px' width='72px'></SkeletonLine>
                        </ItemHV2>
                        <ItemHV2 justifyContent='space-between' margin='0 0 23px 0'>
                            <SkeletonLine height='12px' width='164px' ></SkeletonLine>
                            <SkeletonLine height='12px' width='72px'></SkeletonLine>
                        </ItemHV2>
                        <ItemHV2 justifyContent='space-between'>
                            <SkeletonLine height='12px' width='164px' ></SkeletonLine>
                            <SkeletonLine height='12px' width='72px'></SkeletonLine>
                        </ItemHV2>

                    </Skeleton>
                )}



            </ItemVV2>

            {/* Bottom Section */}
            <ItemVV2 padding=" 0px 14px" margin="24px 0px 24px 0px">


                {userDataLP ? (
                    <>
                        <ItemHV2>
                            <FilledButton onClick={() => {
                                showStakingModal();
                            }}>Stake PUSH/WETH LP Tokens</FilledButton>
                        </ItemHV2>
                        <ButtonsContainer>
                            <EmptyButton style={{ margin: "0px 10px 0px 0px" }} onClick={() => withdrawAmountTokenFarmAutomatic()}>

                                {txInProgressWithdraw ?
                                    (<LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={26} spinnerColor="#D53A94" />) :
                                    "Unstake PUSH/WETH"
                                }

                            </EmptyButton>
                            <EmptyButton onClick={() => massClaimRewardsTokensAll()}>

                                {txInProgressClaimRewards ?
                                    (<LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={26} spinnerColor="#D53A94" />) :
                                    "Claim Rewards"
                                }

                            </EmptyButton>
                        </ButtonsContainer>

                    </>
                ) : (

                    <SkeletonContainer
                        width='100%'
                    >
                        <SkeletonLine height='49px' width='100%' margin='0 0 8px 0'></SkeletonLine>
                        <SkeletonLine height='49px' width='100%'></SkeletonLine>
                    </SkeletonContainer>


                )}




            </ItemVV2>

        </Container >

    );
};

export default YieldUniswapV3;

const StakingToolTip = ({
    title,
    body
}) => {
    return (
        <Tooltip
            wrapperProps={{
                width: 'fit-content',
                maxWidth: 'fit-content',
                minWidth: 'fit-content',
                // zIndex: "10",
            }}
            placementProps={{
                background: 'none',
                bottom: '25px',
                // top: "20px",
                left: "0px",

            }}
            tooltipContent={
                <StakingToolTipContent
                    title={title}
                    body={body} />
            }
        >
            <ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" style={{ cursor: 'pointer' }} />
        </Tooltip>
    )

}


const Container = styled(SectionV2)`
    border: 1px solid  ${(props) => props.theme.stakingBorder};
    border-radius: 24px;
    padding:20px;
    margin:10px;
    font-family: 'Strawford';
    
    font-style: normal;
    font-weight: 500;
    min-height: 587px;
    color: ${(props) => props.theme.stakingPrimaryText};

`;

const Heading = styled(H2V2)`
    font-size: 24px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.stakingPrimaryText};

`
const SecondaryText = styled.div`
    margin:0px;
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    // color: #333333;
`

const RewardContainer = styled(ItemHV2)`
    min-height:110px;
`

const Line = styled.div`
    width: 1px;
    height: 100%;
    background:${(props) => props.theme.stakingBorder};
`
const DataTitle = styled.div`
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    // color: rgba(87, 93, 115, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.stakingUserDetails};

`

const StakedAmount = styled(H2V2)`
    color: ${(props) => props.theme.stakingSecondaryText};
`

const EpochNo = styled(B)`
    font-weight: 500;
    text-align: right;
    letter-spacing: -0.03em;
    font-size: 16px;
    line-height: 141%;
    margin-right:5px;
    color: ${(props) => props.theme.stakingUserDetails};
`

const InfoSpan = styled(SpanV2)`
    margin:0px 0px 0px 6px;
    cursor:pointer;
`

const DataValue = styled(H2V2)`
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.stakingPrimaryText};
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
    border: 1px solid ${(props) => props.theme.emptyButtonText};
    border-radius: 8px;
    padding: 12px;
    background:transparent;
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.emptyButtonText};
    flex:1;
    cursor:pointer;
    opacity:1;
    & > div{
        display:block;
    }
    &:after{
        background:transparent;
    }

    &:hover{
        opacity:1;
    }
`

const Toaster = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`;

const ToasterMsg = styled.div`
  margin: 0px 10px;
`;

// const Skeleton = styled.div`
//     padding:15px;
//     max-width: -webkit-fill-available;
//     width: 100%;
//     background: transparent;
//     border-radius: 5px;
//     display: flex;
//     flex-direction:column;
//     justify-content: center;
//     align-items: center;
//     margin-bottom: 0px;
//     padding-bottom: 0px;
//     padding-top: 0px;
// `

const SkeletonContainer = styled(Skeleton)`
    // width:150px;
    max-width:-webkit-fill-available;
    border-radius: 5px;
    gap:5px;
`

const UserSkeletonLine = styled(SkeletonLine)`
    height: 25px;
    width:100%;
    border-radius: 2px;
`

const RewardSkeletonLine = styled(SkeletonLine)`
    height: 20px;
    width:100%;
    border-radius: 2px;
`

