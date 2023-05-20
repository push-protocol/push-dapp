// React + Web3 Essentials
import React, { useEffect, useState } from 'react';

// External Packages
import styled from 'styled-components';

// Internal Compoonents
import { ButtonV2, H2V2, ImageV2, ItemHV2, ItemVV2, SectionV2, SpanV2 } from 'components/reusables/SharedStylingV2';
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

const YieldPushFeeV3 = ({
    userDataPush,
    getUserDataPush,
    PUSHPoolstats,
    loadingPushComponent,
    getPUSHPoolStats
}) => {
    const { active, error, account, library, chainId } = useWeb3React();

    const [txInProgressWithdraw, setTxInProgressWithdraw] = useState(false);
    const [txInProgressClaimRewards, setTxInProgressClaimRewards] = React.useState(false);

    const {
        isModalOpen: isStakingModalOpen,
        showModal: showStakingModal,
        ModalComponent: StakingComponent,
    } = useModalBlur();

    const stakingModalToast = useToast();


    const formatTokens = (tokens) => {
        if (tokens) {
            return tokens.div(ethers.BigNumber.from(10).pow(18)).toString();
        }
    };

    const pushFeeToast = useToast();

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

    function numberWithCommas(x) {
        return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return (
        <Container>
            <StakingComponent
                InnerComponent={StakingModalComponent}
                InnerComponentProps={{
                    title: 'PUSH',
                    getUserData: getUserDataPush,
                    getLpPoolStats: getPUSHPoolStats
                }}
                toastObject={stakingModalToast}
                modalPosition={MODAL_POSITION.ON_PARENT}
            />

            {loadingPushComponent ? (
                <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={50} spinnerColor="#D53A94" />
            ) : (
                <>


                    {/* Top Section */}
                    <ItemVV2 margin="0px 0px 20px 0px">
                        <Heading>PUSH Fee Staking Pool</Heading>
                        <SecondaryText>
                            Current APR <SpanV2 color="#D53A94">{numberWithCommas(PUSHPoolstats?.stakingAPR)}%</SpanV2>
                        </SecondaryText>
                    </ItemVV2>

                    {/* Body Section */}
                    <ItemVV2
                        flex='5'
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
                                    {formatTokens(PUSHPoolstats?.currentReward)} PUSH
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
                                    {formatTokens(PUSHPoolstats?.totalStakedAmount)} PUSH
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
                            Current Epoch  {PUSHPoolstats?.currentEpoch.toNumber()}
                        </ItemHV2>

                        {/* Deposit Cash Data */}
                        <ItemVV2>
                            <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                                <DataTitle>
                                    User Deposit
                                    <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                                </DataTitle>
                                <DataValue> {formatTokens(userDataPush?.userstakedAmount.stakedAmount)} PUSH</DataValue>
                            </ItemHV2>
                            <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                                <DataTitle>
                                    Rewards Claimed
                                    <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                                </DataTitle>
                                <DataValue> {userDataPush ? formatTokens(userDataPush?.claimedReward) : '0'} PUSH</DataValue>
                            </ItemHV2>
                            <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                                <DataTitle>
                                    Current Epoch Reward
                                    <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                                </DataTitle>
                                <DataValue> {userDataPush ? formatTokens(userDataPush?.potentialUserReward) : '0'} PUSH</DataValue>
                            </ItemHV2>
                            <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                                <DataTitle>
                                    Available for Claiming
                                    <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                                </DataTitle>
                                <DataValue> {userDataPush ? userDataPush?.totalClaimableReward : '0'} PUSH</DataValue>
                            </ItemHV2>
                        </ItemVV2>

                    </ItemVV2>

                    {/* Bottom Section */}
                    <ItemVV2 padding=" 0px 14px" margin="24px 0px 24px 0px">

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
                    </ItemVV2>

                </>
            )}


        </Container>
    );
};

export default YieldPushFeeV3;

const Container = styled(SectionV2)`
    border: 1px solid #BAC4D6;
    border-radius: 24px;
    padding:20px;
    margin:10px;
    font-family: 'Strawford';
    font-style: normal;
    font-weight: 500;
    min-height: 587px;

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
    border: 1px solid #657795;
    border-radius: 8px;
    padding: 12px;
    background:#ffffff;
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: #657795;
    flex:1;
    cursor:pointer;
    & > div{
        display:block;
    }

    &:hover{
        background: #e3e3e3;
        opacity:1;
    }
`
