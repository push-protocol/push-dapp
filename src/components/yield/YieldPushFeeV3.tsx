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
import ErrorLogo from "../../assets/errorLogo.svg"

const YieldPushFeeV3 = ({
    userDataPush,
    getUserDataPush,
    PUSHPoolstats,
    getPUSHPoolStats
}) => {
    const { active, error, account, library, chainId } = useWeb3React();

    const [txInProgressWithdraw, setTxInProgressWithdraw] = useState(false);
    const [txInProgressClaimRewards, setTxInProgressClaimRewards] = React.useState(false);

    const [unstakeErrorMessage, setUnstakeErrorMessage] = useState(null);
    const [withdrawErrorMessage, setWithdrawErrorMessage] = useState(null);

    const pushFeeToast = useToast();
    const theme = useTheme();

    const withdrawAmountTokenFarmAutomatic = async () => {
        if (txInProgressWithdraw) {
            return;
        }

        setTxInProgressWithdraw(true);

        const unstakeAmount = formatTokens(userDataPush?.userstakedAmount?.stakedAmount);
        console.log("Unstake amount", unstakeAmount)

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
                pushFeeToast.showLoaderToast({ loaderMessage: 'Delegating! Please wait..' });
                const tx = await pushToken.setHolderDelegation(
                    pushCoreV2.address,
                    'true'
                )
                await library.waitForTransaction(tx.hash);
                pushFeeToast.showMessageToast({
                    toastTitle: 'Success',
                    toastMessage: 'Transaction Completed! Address Delegated',
                    toastType: 'SUCCESS',
                    getToastIcon: (size) => (
                        <MdCheckCircle
                            size={size}
                            color="green"
                        />
                    ),
                });
            } catch (error) {
                console.log("Error in delegating",error)
                pushFeeToast.showMessageToast({
                    toastTitle: 'Error',
                    toastMessage: `Transaction failed! ${error.reason}`,
                    toastType: 'ERROR',
                    getToastIcon: (size) => <MdError size={size} color="red" />,
                });
                setTxInProgressWithdraw(false);
                return;
            }

        }

        const tx = pushCoreV2.unstake();
        tx.then(async (tx) => {
            pushFeeToast.showLoaderToast({ loaderMessage: 'Unstaking! Waiting for Confirmation...' });

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
                console.log("Error", e)
                pushFeeToast.showMessageToast({
                    toastTitle: 'Error',
                    toastMessage: `Transaction Failed! (" +${e.name}+ ")`,
                    toastType: 'ERROR',
                    getToastIcon: (size) => <MdError size={size} color="red" />,
                });

                setTxInProgressWithdraw(false);
            }
        }).catch((err) => {
            console.log("Error: ", err)
            const message = err.reason.includes(" PushCoreV2::unstake:");
            if (message) {
                setUnstakeErrorMessage("PUSH cannot be unstaked until  current epoch is over.");
            }
            let errorMessage = err.reason.slice(err.reason.indexOf('::') + 1);
            errorMessage = errorMessage.replace('unstake:', '');
            pushFeeToast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: `${errorMessage}`,
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
            setWithdrawErrorMessage("No Rewards to Claim")
            pushFeeToast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: `No Rewards to Claim`,
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


    React.useEffect(()=>{
        setWithdrawErrorMessage(null);
        setUnstakeErrorMessage(null);
    },[account])

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
                                        ToolTipTitle={"User Deposited"}
                                        ToolTipBody={"Amount of PUSH Token User Staked"}
                                    >
                                        <ImageV2 src={InfoLogo} alt="Info-Logo" width="16px" style={{ cursor: 'pointer' }} />
                                    </StakingToolTip>
                                </InfoSpan>
                            </DataTitle>
                            <DataValue> {formatTokens(userDataPush?.userstakedAmount.stakedAmount)} PUSH</DataValue>
                        </ItemHV2>
                        <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                            <DataTitle>
                                Rewards Claimed
                                <InfoSpan>
                                    <StakingToolTip
                                        ToolTipTitle={"Rewards Claimed"}
                                        ToolTipBody={"Amount of Push Claimed by User"}
                                    >
                                        <ImageV2 src={InfoLogo} alt="Info-Logo" width="16px" style={{ cursor: 'pointer' }} />
                                    </StakingToolTip>
                                </InfoSpan>

                            </DataTitle>
                            <DataValue> {formatTokens(userDataPush?.claimedReward)} PUSH</DataValue>
                        </ItemHV2>
                        <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                            <DataTitle>
                                Current Epoch Reward
                                <InfoSpan>
                                    <StakingToolTip
                                        ToolTipTitle={"Current Epoch Reward"}
                                        ToolTipBody={"Amount of Push Token Claimable in this EPOCH"}
                                    >
                                        <ImageV2 src={InfoLogo} alt="Info-Logo" width="16px" style={{ cursor: 'pointer' }} />
                                    </StakingToolTip>
                                </InfoSpan>

                            </DataTitle>
                            <DataValue> {formatTokens(userDataPush?.potentialUserReward)} PUSH</DataValue>
                        </ItemHV2>
                        <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                            <DataTitle>
                                Available for Claiming
                                <InfoSpan>
                                    <StakingToolTip
                                        ToolTipTitle={"Available for Claiming"}
                                        ToolTipBody={"Amount of Push Token Available to claim"}
                                    >
                                        <ImageV2 src={InfoLogo} alt="Info-Logo" width="16px" style={{ cursor: 'pointer' }} />
                                    </StakingToolTip>
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

                            {unstakeErrorMessage != null ?
                                <StakingToolTip
                                    bottom={'-50px'}
                                    left={"40px"}
                                    ToolTipTitle={"PUSH cannot be unstaked until  current epoch is over."}
                                    error={true}
                                    ToolTipWidth={"16rem"}
                                    margin={'0 10px 0 0'}
                                >
                                    <ToolTipButton
                                        style={{ borderColor: unstakeErrorMessage != null ? "#ED5858" : theme.emptyButtonText }}>
                                        {unstakeErrorMessage != null && <ImageV2 src={ErrorLogo} width="19px" padding="0px 26px 4px 0px" />}
                                        {txInProgressWithdraw ?
                                            (<LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={26} spinnerColor="#D53A94" />) :
                                            "Unstake PUSH"
                                        }
                                    </ToolTipButton>
                                </StakingToolTip>

                                :

                                <EmptyButton
                                    onClick={withdrawAmountTokenFarmAutomatic}
                                    style={{ margin: "0px 10px 0px 0px" }}>
                                    {txInProgressWithdraw ?
                                        (<LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={26} spinnerColor="#D53A94" />) :
                                        "Unstake PUSH"
                                    }
                                </EmptyButton>

                            }

                            {withdrawErrorMessage != null ?
                                <StakingToolTip
                                    bottom={'-30px'}
                                    left={"40px"}
                                    ToolTipTitle={"No Rewards to Claim"}
                                    error={true}
                                    ToolTipWidth={"10rem"}
                                >
                                    <ToolTipButton
                                        style={{ borderColor: withdrawErrorMessage != null ? "#ED5858" : theme.emptyButtonText }}>
                                        {withdrawErrorMessage != null && <ImageV2 src={ErrorLogo} width="19px" padding="0px 26px 4px 0px" />}
                                        {txInProgressClaimRewards ?
                                            (<LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={26} spinnerColor="#D53A94" />) :
                                            "Claim Rewards"
                                        }
                                    </ToolTipButton>
                                </StakingToolTip>

                                :

                                <EmptyButton onClick={massClaimRewardsTokensAll}>
                                    {txInProgressClaimRewards ?
                                        (<LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={26} spinnerColor="#D53A94" />) :
                                        "Claim Rewards"
                                    }
                                </EmptyButton>

                            }
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

const ErrorToolTipContent = (props) => {
    return (
        <ItemVV2
            width={props.width}
            background='#131313'
            justifyContent='flex-start'
            border='1px solid rgba(173, 176, 190, 0.2)'
            alignItems='flex-start'
            padding='0.75rem 0.75rem 0.75rem 1rem'
            boxShadow='0px 4px 20px rgba(0, 0, 0, 0.05)'
            color='#FFF'
            borderRadius='2px 12px 12px 12px'

        >
            <H2V2 color='inherit'>{props.title}</H2V2>
        </ItemVV2>
    )
}

const StakingToolTip = (
    props
) => {
    return (
        <Tooltip
            wrapperProps={{
                width: '100%',
                maxWidth: 'none',
                minWidth: 'auto',
                display: 'flex',
                flex: '1',
                margin: props.margin ? props.margin : '0'
            }}
            placementProps={{
                background: 'none',
                bottom: props.bottom ? props.bottom : '25px',
                left: props.left ? props.left : "0px",

            }}
            tooltipContent={
                props.error ? (
                    <ErrorToolTipContent
                        title={props.ToolTipTitle}
                        width={props.ToolTipWidth}
                    />
                ) : (
                    <StakingToolTipContent
                        title={props.ToolTipTitle}
                        body={props.ToolTipBody}
                    />
                )
            }
        >
            {props.children}
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

const EpochText = styled(ItemHV2)`
    align-self:end;
    margin:12px 13px 24px 0px;
    letter-spacing:-0.03em;
    color: ${(props) => props.theme.modalDescriptionTextColor};
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

const ToolTipButton = styled.button`
    margin:0 10px 0 0;
    align-items: center;
    align-self: auto
    background: tranparent;
    display: flex;
    flex: initial;
    justify-content: center;
    letter-spacing: initial;
    margin: 0;
    overflow: hidden;
    padding: 10px 15px;
    border: 1px solid ${(props) => props.theme.emptyButtonText};
    border-radius: 8px;
    flex-direction:row;
    color: ${(props) => props.theme.emptyButtonText};
    padding: 12px;
    background:transparent;
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    cursor: not-allowed;
    width:inherit;
`

const EmptyButton = styled(ButtonV2)`
    border: 1px solid ${(props) => props.theme.emptyButtonText};
    border-radius: 8px;
    flex-direction:row;
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
