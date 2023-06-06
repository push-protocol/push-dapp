// React + Web3 Essentials
import React, { useEffect, useState } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import { ButtonV2, H2V2, ImageV2, ItemHV2, ItemVV2, SectionV2, Skeleton, SkeletonLine, SpanV2 } from 'components/reusables/SharedStylingV2';
import InfoLogo from "../../assets/inforWithoutBG.svg";
import { Button } from 'primaries/SharedStyling';
import useModalBlur, { MODAL_POSITION } from 'hooks/useModalBlur';
import useToast from 'hooks/useToast';
import StakingModalComponent from './StakingModalComponent';
import { ethers } from 'ethers';
import { abis, addresses } from 'config';
import { useWeb3React } from '@web3-react/core';
import YieldFarmingDataStoreV2 from "../../singletons/YieldFarmingDataStoreV2";
import { MdCheckCircle, MdError } from 'react-icons/md';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { formatTokens, numberWithCommas } from 'helpers/StakingHelper';
import { B } from 'components/SharedStyling';
import Tooltip from 'components/reusables/tooltip/Tooltip';
import StakingToolTipContent from './StakingToolTipContent';

const YieldPushFeeV3 = ({
    userDataPush,
    getUserDataPush,
    PUSHPoolstats,
    getPUSHPoolStats
}) => {
    const { active, error, account, library, chainId } = useWeb3React();

    const [txInProgressWithdraw, setTxInProgressWithdraw] = useState(false);
    const [txInProgressClaimRewards, setTxInProgressClaimRewards] = React.useState(false);

    const pushFeeToast = useToast();
    const theme = useTheme();

    const withdrawAmountTokenFarmAutomatic = async () => {
        if (txInProgressWithdraw) {
            return;
        }

        setTxInProgressWithdraw(true);

        const unstakeAmount = formatTokens(userDataPush?.userstakedAmount?.stakedAmount);

        if (unstakeAmount == 0) {
            pushFeeToast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: `Nothing to unstake!`,
                toastType: 'ERROR',
                getToastIcon: (size) => <MdError size={size} color="red" />,
            });

            setTxInProgressWithdraw(false);
            return
        }

        var signer = library.getSigner(account);

        let pushToken = new ethers.Contract(addresses.pushToken, abis.pushToken, signer);
        let pushCoreV2 = new ethers.Contract(addresses.pushCoreV2, abis.pushCoreV2, signer);

        const isAddressDelegated = await pushToken.holderDelegation(
            account,
            pushCoreV2.address
        )

        console.log("IsAddress Delegated", isAddressDelegated)

        //First we will delegate the pushCoreV2 address then we will proceed further
        if (!isAddressDelegated) {
            try {
                const tx = await pushToken.setHolderDelegation(
                    pushCoreV2.address,
                    'true'
                )
                pushFeeToast.showLoaderToast({ loaderMessage: 'Delegating!!Waiting for Confirmation...' });
                await library.waitForTransaction(tx.hash);
                pushFeeToast.showMessageToast({
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
            } catch (error) {

                pushFeeToast.showMessageToast({
                    toastTitle: 'Error',
                    toastMessage: `Transaction failed`,
                    toastType: 'ERROR',
                    getToastIcon: (size) => <MdError size={size} color="red" />,
                });

                setTxInProgressWithdraw(false);
                return;
            }

        }

        const tx = pushCoreV2.unstake();
        tx.then(async (tx) => {
            pushFeeToast.showLoaderToast({ loaderMessage: 'Unstaking!!Waiting for Confirmation...' });

            try {
                await library.waitForTransaction(tx.hash);
                pushFeeToast.showMessageToast({
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

                getPUSHPoolStats();
                getUserDataPush();
                setTxInProgressWithdraw(false);

            } catch (e) {
                pushFeeToast.showMessageToast({
                    toastTitle: 'Error',
                    toastMessage: `Transaction Failed! (" +${e.name}+ ")`,
                    toastType: 'ERROR',
                    getToastIcon: (size) => <MdError size={size} color="red" />,
                });

                setTxInProgressWithdraw(false);
            }
        }).catch((err) => {
            pushFeeToast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: `Could not Perform that transaction!`,
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

        setTxInProgressClaimRewards(true);

        const withdrawAmount = userDataPush?.totalClaimableReward;

        if (withdrawAmount == 0) {
            pushFeeToast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: `Nothing to Claim!`,
                toastType: 'ERROR',
                getToastIcon: (size) => <MdError size={size} color="red" />,
            });

            setTxInProgressClaimRewards(false);
            return;
        }

        var signer = library.getSigner(account);

        let pushToken = new ethers.Contract(addresses.pushToken, abis.pushToken, signer);
        let pushCoreV2 = new ethers.Contract(addresses.pushCoreV2, abis.pushCoreV2, signer);

        const isAddressDelegated = await pushToken.holderDelegation(
            account,
            pushCoreV2.address
        )

        console.log("IsAddress Delegated", isAddressDelegated)

        //First we will delegate the pushCoreV2 address then we will proceed further
        if (!isAddressDelegated) {
            try {
                const tx = await pushToken.setHolderDelegation(
                    pushCoreV2.address,
                    'true'
                )
                pushFeeToast.showLoaderToast({ loaderMessage: 'Delegating!!Waiting for Confirmation...' });
                await library.waitForTransaction(tx.hash);
                pushFeeToast.showMessageToast({
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
            } catch (error) {

                pushFeeToast.showMessageToast({
                    toastTitle: 'Error',
                    toastMessage: `Transaction failed`,
                    toastType: 'ERROR',
                    getToastIcon: (size) => <MdError size={size} color="red" />,
                });

                setTxInProgressWithdraw(false);
                return;
            }

        }

        const tx = pushCoreV2.harvestAll();

        tx.then(async (tx) => {

            try {
                pushFeeToast.showLoaderToast({ loaderMessage: '!Waiting for Confirmation...' });
                await library.waitForTransaction(tx.hash);

                pushFeeToast.showMessageToast({
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

                getUserDataPush();
                setTxInProgressClaimRewards(false);
            } catch (e) {
                pushFeeToast.showMessageToast({
                    toastTitle: 'Error',
                    toastMessage: `Transaction failed`,
                    toastType: 'ERROR',
                    getToastIcon: (size) => <MdError size={size} color="red" />,
                });

                setTxInProgressClaimRewards(false);
            }
        }).catch((err) => {
            pushFeeToast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: `Transaction failed`,
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
                    title: 'PUSH',
                    getUserData: getUserDataPush,
                    getPoolStats: getPUSHPoolStats
                }}
                toastObject={stakingModalToast}
                modalPosition={MODAL_POSITION.ON_PARENT}
            />

            {/* Top Section */}
            <ItemVV2 margin="0px 0px 20px 0px">
                {PUSHPoolstats ? (
                    <>
                        <Heading>PUSH Fee Staking Pool</Heading>
                        <SecondaryText>
                            Current APR <SpanV2 color="#D53A94">{numberWithCommas(PUSHPoolstats?.stakingAPR)}%</SpanV2>
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
                        {/* <SecondaryText>Current Reward</SecondaryText>
                                <H2V2
                                    fontSize="24px"
                                    fontWeight="600"
                                    color="#D53A94"
                                    letterSpacing="-0.03em"
                                >
                                    {formatTokens(PUSHPoolstats?.currentReward)} PUSH
                                </H2V2> */}

                        {PUSHPoolstats ? (
                            <>
                                <SecondaryText>Current Reward</SecondaryText>
                                <H2V2
                                    fontSize="24px"
                                    fontWeight="600"
                                    color="#D53A94"
                                    letterSpacing="-0.03em"
                                >
                                    {formatTokens(PUSHPoolstats?.currentReward)} PUSH
                                </H2V2>
                            </>
                        ) : (
                            // <Skeleton
                            //     padding='0 15px'
                            //     width='100%'
                            //     maxWidth=' -webkit-fill-available'
                            //     borderRadius='5px'
                            //     gap='5px'
                            // >
                            //     <RewardSkeletonLine></RewardSkeletonLine>
                            //     <RewardSkeletonLine></RewardSkeletonLine>
                            // </Skeleton>
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
                        {/* <SecondaryText>Total Staked</SecondaryText>
                                <StakedAmount
                                    fontSize="24px"
                                    fontWeight="600"
                                    letterSpacing="-0.03em"
                                >
                                    {formatTokens(PUSHPoolstats?.totalStakedAmount)} PUSH
                                </StakedAmount> */}

                        {PUSHPoolstats ? (
                            <>
                                <SecondaryText>Total Staked</SecondaryText>
                                <StakedAmount
                                    fontSize="24px"
                                    fontWeight="600"
                                    letterSpacing="-0.03em"
                                >
                                    {formatTokens(PUSHPoolstats?.totalStakedAmount)} PUSH
                                </StakedAmount>
                            </>
                        ) : (
                            // <Skeleton
                            //     padding='0 15px'
                            //     width='100%'
                            //     maxWidth=' -webkit-fill-available'
                            //     borderRadius='5px'
                            //     gap='5px'
                            // >
                            //     <RewardSkeletonLine></RewardSkeletonLine>
                            //     <RewardSkeletonLine></RewardSkeletonLine>
                            // </Skeleton>
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
                    {PUSHPoolstats ? (
                        <>
                            <EpochNo>Current Epoch</EpochNo>
                            <B>
                                {PUSHPoolstats?.currentEpoch.toNumber()}
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

                {userDataPush ? (
                    <ItemVV2>
                        <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                            <DataTitle>
                                User Deposit
                                <InfoSpan>
                                    <StakingToolTip
                                        title={"User Deposited"}
                                        body={"Amount of PUSH Token User Staked"}
                                    />
                                </InfoSpan>
                            </DataTitle>
                            <DataValue> {formatTokens(userDataPush?.userstakedAmount.stakedAmount)} PUSH</DataValue>
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
                            <DataValue> {formatTokens(userDataPush?.claimedReward)} PUSH</DataValue>
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
                            <DataValue> {formatTokens(userDataPush?.potentialUserReward)} PUSH</DataValue>
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
                            <DataValue> {userDataPush?.totalClaimableReward} PUSH</DataValue>
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

                {userDataPush ? (
                    <>
                        <ItemHV2>
                            <FilledButton onClick={showStakingModal}> Stake PUSH</FilledButton>
                        </ItemHV2>
                        <ButtonsContainer>
                            <EmptyButton onClick={withdrawAmountTokenFarmAutomatic} style={{ margin: "0px 10px 0px 0px" }}>
                                {txInProgressWithdraw ?
                                    (<LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={26} spinnerColor="#D53A94" />) :
                                    "Unstake PUSH/WETH"
                                }
                            </EmptyButton>
                            <EmptyButton onClick={massClaimRewardsTokensAll}>
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
        </Container>
    );
};

export default YieldPushFeeV3;

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
const SecondaryText = styled.p`
    margin:0px;
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
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
    & > div{
        display:block;
    }

    &:hover{
        opacity:1;
    }
`

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
