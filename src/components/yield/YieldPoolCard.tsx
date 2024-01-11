// React + Web3 Essentials
import React, { useContext, useState } from 'react';
import { ethers } from 'ethers';

// External Packages
import styled, { useTheme } from 'styled-components';
import { MdCheckCircle, MdError, MdWarning } from 'react-icons/md';
import { useSelector } from 'react-redux';

// Internal Compoonents
import useToast from 'hooks/useToast';
import { B } from 'components/SharedStyling';
import StakingToolTip from './StakingToolTip';
import InfoLogo from "../../assets/inforWithoutBG.svg";
import ErrorLogo from "../../assets/errorLogo.svg"
import { Button, Span } from 'primaries/SharedStyling';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { formatTokens, numberWithCommas } from 'helpers/StakingHelper';
import { ButtonV2, H2V2, ImageV2, ItemHV2, ItemVV2, SectionV2, Skeleton, SkeletonLine, SpanV2 } from 'components/reusables/SharedStylingV2';
import { AppContext } from 'contexts/AppContext';

// Internal Configs
import { abis, addresses } from 'config';
import { useAccount, useDeviceWidthCheck } from 'hooks';

const YieldPoolCard = ({
    poolName,
    userData,
    PoolStats,
    poolAddress,
    getUserData,
    tokenAddress,
    setActiveTab
}: any) => {
    const { account, provider } = useAccount();

    const [txInProgressWithdraw, setTxInProgressWithdraw] = React.useState(false);
    const [txInProgressClaimRewards, setTxInProgressClaimRewards] = useState(false);

    const [txInProgressMigrate, setTxInProgressMigrate] = useState(false);
    const [MigrateMessage, setMigrateMessage] = useState(null);

    const [unstakeErrorMessage, setUnstakeErrorMessage] = useState(null);
    const [withdrawErrorMessage, setWithdrawErrorMessage] = useState(null);

    const { userPushSDKInstance } = useSelector((state: any) => {
        return state.user;
    });
    const { handleConnectWallet } = useContext(AppContext);

    const [filled, setFilled] = useState(0);

    const yieldFarmToast = useToast();

    const theme = useTheme();

    const massClaimRewardsTokensAll = async () => {
        if(!userPushSDKInstance.signer) {
            handleConnectWallet();
            return;
        }

        if (txInProgressClaimRewards) {
            return;
        }

        const rewardsClaimable = userData?.totalAvailableReward;

        if (rewardsClaimable == 0) {
            setWithdrawErrorMessage("No Rewards to Claim")
            setTxInProgressClaimRewards(false);
            return;
        }

        //No use here because the currentEpochPush will definitely be more than 1
        // if (!PoolStats.currentEpochPUSH || PoolStats.currentEpochPUSH == 1) {
        //     yieldFarmToast.showMessageToast({
        //         toastTitle: 'Error',
        //         toastMessage: `Harvest unlocks from Epoch 2!)`,
        //         toastType: 'ERROR',
        //         getToastIcon: (size) => <MdError size={size} color="red" />,
        //     });

        //     return;
        // }

        setTxInProgressClaimRewards(true);

        var signer = provider.getSigner(account);
        let yieldFarming = new ethers.Contract(
            poolAddress,
            abis.yieldFarming,
            signer
        );
        const tx = yieldFarming.massHarvest();


        tx.then(async (tx) => {
            yieldFarmToast.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });

            try {
                await provider.waitForTransaction(tx.hash);

                yieldFarmToast.showMessageToast({
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

                getUserData();
                setTxInProgressClaimRewards(false);
            } catch (e) {
                yieldFarmToast.showMessageToast({
                    toastTitle: 'Error',
                    toastMessage: `Transaction Failed! (" +${e.name}+ ")`,
                    toastType: 'ERROR',
                    getToastIcon: (size) => <MdError size={size} color="red" />,
                });

                setTxInProgressClaimRewards(false);
            }
        }).catch((err) => {
            yieldFarmToast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: `Transaction Cancelled!`,
                toastType: 'ERROR',
                getToastIcon: (size) => <MdError size={size} color="red" />,
            });

            setTxInProgressClaimRewards(false);
        });
    };

    const withdrawTokens = async () => {
        if(!userPushSDKInstance.signer) {
            handleConnectWallet();
            return;
        }

        if (txInProgressWithdraw) {
            return;
        }

        setTxInProgressWithdraw(true);
        const withdrawAmount = formatTokens(userData.epochStakeNext);

        if (withdrawAmount == 0) {
            setUnstakeErrorMessage("Nothing to unstake, Stake Now in new reward program.");
            setTxInProgressWithdraw(false);
            return;
        }

        var signer = provider.getSigner(account);
        let staking = new ethers.Contract(addresses.staking, abis.staking, signer);

        const amounttowithdraw = await staking.balanceOf(
            account,
            tokenAddress
        )
        const tx = staking.withdraw(
            tokenAddress,
            ethers.BigNumber.from(withdrawAmount).mul(
                ethers.BigNumber.from(10).pow(18)
            )
        );

        tx.then(async (tx) => {
            yieldFarmToast.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });

            try {
                await provider.waitForTransaction(tx.hash);
                yieldFarmToast.showMessageToast({
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

                getUserData();
            } catch (e) {
                console.error("Error", e);
                yieldFarmToast.showMessageToast({
                    toastTitle: 'Error',
                    toastMessage: `Transaction Failed! (" +${e.name}+ ")`,
                    toastType: 'ERROR',
                    getToastIcon: (size) => <MdError size={size} color="red" />,
                });

                setTxInProgressWithdraw(false);
            }
        }).catch((err) => {
            yieldFarmToast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: `Transaction Cancelled!`,
                toastType: 'ERROR',
                getToastIcon: (size) => <MdError size={size} color="red" />,
            });

            setTxInProgressWithdraw(false);
        });
    };

    const migrateToNewPool = async () => {
        if(!userPushSDKInstance.signer) {
            handleConnectWallet();
            return;
        }

        if (txInProgressMigrate) {
            return;
        }

        let totalTxnSteps = 3;

        //unstake from the staking Contract
        const withdrawAmount = formatTokens(userData.epochStakeNext);

        if (withdrawAmount == 0) {
            yieldFarmToast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: `Nothing to Withdraw!`,
                toastType: 'ERROR',
                getToastIcon: (size) => <MdError size={size} color="red" />,
            });

            setTxInProgressMigrate(false);
            setMigrateMessage(null);
            return;
        }

        //Now checking if the token is approved by respective staking address or not
        // 1. For Uni V2 migration the Uni V2 token has been approved for uni v2 staking contract
        // 2. For Push migration, the pushCoreV2 has been approved for Push Fee staking Pool 

        var signer = provider.getSigner(account);
        let staking = new ethers.Contract(addresses.staking, abis.staking, signer);


        // Checking for the tokenAddress and allowance for staking
        const contractThatNeedApproval = tokenAddress === addresses.pushToken ? addresses.pushCoreV2 : addresses.stakingV2;
        var token = new ethers.Contract(tokenAddress, abis.pushToken, signer);
        let allowance = await token.allowance(account, contractThatNeedApproval);
        let tokensApprovedAmount = formatTokens(allowance);

        if (parseInt(tokensApprovedAmount) >= parseInt(withdrawAmount)) {
            totalTxnSteps = 2;
            setFilled(50)

        } else {
            totalTxnSteps = 3;
            setFilled(33)
        }


        setTxInProgressMigrate(true);
        setMigrateMessage(`Withdrawing 1/${totalTxnSteps}`)


        let tx;

        // 1. First unstake the amount from the old(deprecated) staking Contract
        // 2. Now need to approve the contract addresses for deposit
        // 2.1 Check if the tokenAddress is of Push Or UNI V2 
        // 2.2 If the approved Amount is greater than the withdraw amount directly call the deposit function
        // 2.3 else call the approve function from the respective tokenAddress.
        // 3. Deposit the amount respectively
        // 3.1 If the tokenAddress is PUSH token than call the stake function of the PushCoreV2
        // 3.2 If the tokenAddress is UNI V2 then call the deposit function of the old staking

        tx = staking.withdraw(
            tokenAddress,
            ethers.BigNumber.from(withdrawAmount).mul(
                ethers.BigNumber.from(10).pow(18)
            )
        );


        tx
            .then(async (tx) => {
                yieldFarmToast.showLoaderToast({ loaderMessage: 'Withdrawing! Please Wait...' });

                await provider.waitForTransaction(tx.hash);

                yieldFarmToast.showMessageToast({
                    toastTitle: 'Success',
                    toastMessage: 'Successfully withdrawn!',
                    toastType: 'SUCCESS',
                    getToastIcon: (size) => (
                        <MdCheckCircle
                            size={size}
                            color="green"
                        />
                    ),
                });



                // 2. Then check if the token address is UNI V2 LP or Push
                // First check if the approved Amount is greater than the withdraw amount
                // 2.1 If the token approved is PUSH then you need to approve the PushCoreV2 for the Push Token
                // 2.1.1 Deposit the amount to the stake function of the pushCore V2 Contract
                // 2.2 If the token approved is Uni V2 LP then you need to approve the staking V2 for the LP token
                // 2.2.1 Deposit the amount to the deposit function of the staking V2


                if (tokenAddress === addresses.pushToken) {
                    //so we need to approve push token for the V2 contract
                    var token = new ethers.Contract(tokenAddress, abis.pushToken, signer);
                    let allowance = await token.allowance(account, addresses.pushCoreV2);
                    let TokensApproved = formatTokens(allowance);

                    if (parseInt(TokensApproved) >= parseInt(withdrawAmount)) {
                        depositPushToken(tx, withdrawAmount, totalTxnSteps);
                    } else {
                        tx = token.approve(
                            addresses.pushCoreV2,
                            ethers.BigNumber.from(withdrawAmount).mul(
                                ethers.BigNumber.from(10).pow(18)
                            )
                        )

                        setMigrateMessage(`Approving 2/${totalTxnSteps}`)
                        setFilled(66)

                        tx.then(async (tx) => {
                            yieldFarmToast.showLoaderToast({ loaderMessage: 'Approving! Please Wait...' });

                            await provider.waitForTransaction(tx.hash);

                            yieldFarmToast.showMessageToast({
                                toastTitle: 'Success',
                                toastMessage: 'Successfully Approved!',
                                toastType: 'SUCCESS',
                                getToastIcon: (size) => (
                                    <MdCheckCircle
                                        size={size}
                                        color="green"
                                    />
                                ),
                            });

                            depositPushToken(tx, withdrawAmount, totalTxnSteps);

                        }).catch((err) => {
                            console.error("Error in approving 2", err);
                            yieldFarmToast.showMessageToast({
                                toastTitle: 'Error',
                                toastMessage: `Transaction Failed! Could Not Approve`,
                                toastType: 'ERROR',
                                getToastIcon: (size) => <MdError size={size} color="red" />,
                            });
                            setTxInProgressMigrate(false);
                            setMigrateMessage(null);
                            getUserData();
                            setFilled(0);
                        })
                    }


                } else {
                    // UNI V2 Lp Token is there so we need to simply approve stakingV2 for the token and then deposit

                    var token = new ethers.Contract(tokenAddress, abis.pushToken, signer);
                    let allowance = await token.allowance(account, addresses.stakingV2);
                    let TokensApproved = formatTokens(allowance);

                    if (parseInt(TokensApproved) >= parseInt(withdrawAmount)) {
                        depositLpToken(tx, withdrawAmount, totalTxnSteps);
                    } else {
                        tx = token.approve(
                            addresses.stakingV2,
                            ethers.BigNumber.from(withdrawAmount).mul(
                                ethers.BigNumber.from(10).pow(18)
                            )
                        )

                        setMigrateMessage(`Approving 2/${totalTxnSteps}`)
                        setFilled(66)

                        tx.then(async (tx) => {
                            yieldFarmToast.showLoaderToast({ loaderMessage: 'Approving! Please Wait...' });

                            await provider.waitForTransaction(tx.hash);

                            yieldFarmToast.showMessageToast({
                                toastTitle: 'Success',
                                toastMessage: 'Successfully Approved!',
                                toastType: 'SUCCESS',
                                getToastIcon: (size) => (
                                    <MdCheckCircle
                                        size={size}
                                        color="green"
                                    />
                                ),
                            });

                            depositLpToken(tx, withdrawAmount, totalTxnSteps);


                        }).catch((err) => {
                            console.error("Error in approving", err);
                            yieldFarmToast.showMessageToast({
                                toastTitle: 'Error',
                                toastMessage: `Transaction Failed! Could Not Approve`,
                                toastType: 'ERROR',
                                getToastIcon: (size) => <MdError size={size} color="red" />,
                            });
                            setTxInProgressMigrate(false);
                            setMigrateMessage(null);
                            getUserData();
                            setFilled(0);
                        })
                    }
                }
            })
            .catch((err) => {
                console.error("Error in withdrawing: ", err);
                yieldFarmToast.showMessageToast({
                    toastTitle: 'Error',
                    toastMessage: `Transaction Failed! Could Not Withdraw!`,
                    toastType: 'ERROR',
                    getToastIcon: (size) => <MdError size={size} color="red" />,
                });
                setTxInProgressMigrate(false);
                setMigrateMessage(null);
                setFilled(0);
            })

    }


    const depositLpToken = async (tx, withdrawAmount, totalTxnSteps) => {
        if(!userPushSDKInstance.signer) {
            handleConnectWallet();
            return;
        }

        var signer = provider.getSigner(account);
        var stakingV2 = new ethers.Contract(addresses.stakingV2, abis.stakingV2, signer);

        setMigrateMessage(`Staking ${totalTxnSteps}/${totalTxnSteps}`)
        setFilled(100);

        tx = stakingV2.deposit(
            tokenAddress,
            ethers.BigNumber.from(withdrawAmount).mul(
                ethers.BigNumber.from(10).pow(18)
            )
        )
        tx.then(async (tx) => {
            yieldFarmToast.showLoaderToast({ loaderMessage: 'Depositing to V2 ! Please Wait...' });

            await provider.waitForTransaction(tx.hash);


            yieldFarmToast.showMessageToast({
                toastTitle: 'Success',
                toastMessage: 'Transaction Completed!Successfully Deposited the UNI-V2 Token to V2 ',
                toastType: 'SUCCESS',
                getToastIcon: (size) => (
                    <MdCheckCircle
                        size={size}
                        color="green"
                    />
                ),
            });
            setTxInProgressMigrate(false);
            getUserData();
            setMigrateMessage(null);
            setActiveTab(0);

        }).catch((error) => {
            console.error("Error in depositing: ", error);
            yieldFarmToast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: `Transaction Failed! Could Not Deposit the Amount`,
                toastType: 'ERROR',
                getToastIcon: (size) => <MdError size={size} color="red" />,
            });
            setTxInProgressMigrate(false);
            getUserData();
            setMigrateMessage(null);
            setFilled(0);
        })
    }

    const depositPushToken = async (tx, withdrawAmount, totalTxnSteps) => {
        if(!userPushSDKInstance.signer) {
            handleConnectWallet();
            return;
        }

        var signer = provider.getSigner(account);
        let pushCoreV2 = new ethers.Contract(addresses.pushCoreV2, abis.pushCoreV2, signer);

        setMigrateMessage(`Staking ${totalTxnSteps}/${totalTxnSteps}`)
        setFilled(100);

        tx = pushCoreV2.stake(
            ethers.BigNumber.from(withdrawAmount).mul(
                ethers.BigNumber.from(10).pow(18)
            )
        )

        tx.then(async (tx) => {
            yieldFarmToast.showLoaderToast({ loaderMessage: 'Depositing to V2 ! Please Wait...' });

            await provider.waitForTransaction(tx.hash);
            yieldFarmToast.showMessageToast({
                toastTitle: 'Success',
                toastMessage: 'Transaction Completed! Successfully Deposited the Push Token to V2 ',
                toastType: 'SUCCESS',
                getToastIcon: (size) => (
                    <MdCheckCircle
                        size={size}
                        color="green"
                    />
                ),
            });
            setTxInProgressMigrate(false);
            getUserData();
            setMigrateMessage(null)
            setActiveTab(0);//This moves back the UI to YieldFarming V2

        }).catch((error) => {
            console.error("Error in depositing: ", error);
            yieldFarmToast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: `Transaction Failed! Could Not Deposit Push Token`,
                toastType: 'ERROR',
                getToastIcon: (size) => <MdError size={size} color="red" />,
            });
            setTxInProgressMigrate(false);
            getUserData();
            setMigrateMessage(null)
            setFilled(0);
        })


    }

    React.useEffect(() => {
        setWithdrawErrorMessage(null);
        setUnstakeErrorMessage(null);
    }, [account])

    const isMobile = useDeviceWidthCheck(600);

    return (
        <Container
            margin={poolName === 'UNI-V2' ? " 10px 0 10px 10px " : "  10px 10px 10px 0"}
        >

            {/* Top Section */}
            <ItemVV2 margin="0px 0px 20px 0">
                {PoolStats ? (
                    <>
                        <Heading>
                            {poolName === 'UNI-V2' ? 'Uniswap V2 Staking Pool' : 'PUSH Staking Pool '}
                            <Deprecated>Deprecated</Deprecated>
                        </Heading>
                        <SecondaryText>
                            Current APR <SpanV2 color="#D53A94" fontWeight="600">0%</SpanV2>
                        </SecondaryText>
                    </>
                ) : (
                    <SkeletonContainer
                        padding='15px 15px 0 15px'
                    >
                        <SkeletonLine height='15px' width='234px' margin='0 0 10px 0'></SkeletonLine>
                        <SkeletonLine height='15px' width='112px'></SkeletonLine>
                    </SkeletonContainer>
                )}

            </ItemVV2>

            {/* Body Section */}
            <ItemVV2>
                {/* Reward Section */}
                <RewardContainer
                    border={`1px solid ${theme.stakingBorder}`}
                    borderRadius="16px"
                >
                    <ItemVV2 margin={isMobile ?"0px 6px 0 0 " :"0px 18px 0px 0px"} padding={isMobile  ? " 7px" : "10px"} padding="10px">

                        {PoolStats ? (
                            <>
                                <SecondaryText>Current Reward</SecondaryText>
                                <H2V2
                                   fontSize={isMobile ? "18px" : "24px"}
                                    fontWeight="600"
                                    color="#D53A94"
                                    letterSpacing="-0.03em"
                                >

                                    0 PUSH
                                </H2V2>
                            </>
                        ) : (
                            <SkeletonContainer
                                padding={isMobile ? '0px' : '5px 15px 0 15px'}
                            >
                                <SkeletonLine height='12px' width={isMobile ? '100px' : '135px'} margin='0 0 8px 0'></SkeletonLine>
                                <SkeletonLine height='12px' width={isMobile ? '65px' : '100px}'}></SkeletonLine>
                            </SkeletonContainer>
                        )}


                    </ItemVV2>

                    <Line width="10px" height="100%"></Line>

                    <ItemVV2 margin={isMobile ?"0px 6px 0 0 " :"0px 18px 0px 0px"} padding={isMobile  ? " 7px" : "10px"} padding="10px">

                        {PoolStats ? (
                            <>
                                <SecondaryText>Total Staked</SecondaryText>
                                <StakedAmount
                                    fontSize={isMobile ? "18px" : "24px"}
                                    fontWeight="600"
                                    letterSpacing="-0.03em"
                                >
                                    {numberWithCommas(formatTokens(PoolStats?.poolBalance))} {poolName == "UNI-V2" ? "UNI-V2" : "PUSH"}
                                </StakedAmount>
                            </>
                        ) : (
                            <SkeletonContainer
                                padding={isMobile ? '0px' : '5px 15px 0 15px'}
                            >
                                <SkeletonLine height='12px' width={isMobile ? '100px' : '135px'} margin='0 0 8px 0'></SkeletonLine>
                                <SkeletonLine height='12px' width={isMobile ? '65px' : '100px}'}></SkeletonLine>
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
                    {PoolStats ? (
                        <>
                            <EpochNo padding="0px 5px 0px 0px">Current Epoch</EpochNo>
                            <EpochNo margin='0 0 0 5px'>
                                100 / 100
                            </EpochNo>
                        </>
                    ) : (
                        <SkeletonContainer padding='6px 0px 0 15px'>
                            <SkeletonLine height='17px' width='124px' ></SkeletonLine>
                        </SkeletonContainer>
                    )}

                </ItemHV2>


                {/* Deposit Cash Data */}
                <DepositContainer>
                    {userData ? (
                        <ItemVV2 >
                            <ItemHV2 justifyContent="space-between" margin={ isMobile ? "0px 0px 12px 0px" : "0px 13px 12px 13px"}>
                                <DataTitle>
                                    User Deposit
                                    <InfoSpan>
                                        <StakingToolTip
                                            ToolTipTitle={"User Deposited"}
                                            ToolTipBody={`Amount of ${poolName} Token User Staked`}
                                        >
                                            <ImageV2 src={InfoLogo} alt="Info-Logo" width="16px" style={{ cursor: 'pointer' }} />
                                        </StakingToolTip>
                                    </InfoSpan>
                                </DataTitle>
                                <DataValue> {formatTokens(userData?.epochStakeNext)} {poolName == "UNI-V2" ? "UNI-V2" : "PUSH"}</DataValue>
                            </ItemHV2>
                            <ItemHV2 justifyContent="space-between" margin={ isMobile ? "0px 0px 12px 0px" : "0px 13px 12px 13px"}>
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
                                <DataValue> {numberWithCommas((userData?.totalAccumulatedReward - userData?.totalAvailableReward).toFixed(2))} PUSH</DataValue>
                            </ItemHV2>
                            <ItemHV2 justifyContent="space-between" margin={ isMobile ? "0px 0px 12px 0px" : "0px 13px 12px 13px"}>
                                <DataTitle>
                                    Current Epoch Reward
                                    <InfoSpan>
                                        <StakingToolTip
                                            ToolTipTitle={"Current Epoch Reward"}
                                            ToolTipBody={"Displays the approximate latest reward amount for current epoch"}
                                        >
                                            <ImageV2 src={InfoLogo} alt="Info-Logo" width="16px" style={{ cursor: 'pointer' }} />
                                        </StakingToolTip>
                                    </InfoSpan>

                                </DataTitle>
                                <DataValue>0 PUSH</DataValue>
                            </ItemHV2>
                            <ItemHV2 justifyContent="space-between" margin={ isMobile ? "0px 0px 12px 0px" : "0px 13px 12px 13px"}>
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
                                <DataValue>{numberWithCommas(userData?.totalAvailableReward)} PUSH</DataValue>
                            </ItemHV2>

                        </ItemVV2>
                    ) : (
                        <Skeleton
                            padding='16px 15px 16px 15px'
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

                </DepositContainer>




            </ItemVV2>

            {/* Bottom Section */}
            <Buttons padding={ isMobile ? "0px " : "0px 14px"} margin="24px 0px 0px 0px">

                {userData ? (
                    <>
                        <ButtonsContainer >

                            {formatTokens(userData?.epochStakeNext) === "0" ?
                                <StakingToolTip
                                    error={true}
                                    ToolTipTitle={"Nothing to Withdraw, so you cannot Migrate."}
                                    ToolTipWidth={"16rem"}
                                    bottom={'-50px'}
                                    margin="0 0 15px 0"
                                >
                                    <EmptyButton
                                        border="none"
                                        cursor='default'
                                        background={theme.disableButtonBg}
                                        color={theme.disabledButtonText}
                                    >
                                        <Text>
                                            {!txInProgressMigrate && (MigrateMessage == null) &&
                                                <Span color={theme.disabledButtonText} weight="400" cursor='default'>Migrate to {poolName === "UNI-V2" ? "UNI-V2 " : "PUSH Fee"} Pool</Span>
                                            }
                                        </Text>
                                    </EmptyButton>
                                </StakingToolTip>

                                :


                                <MigrateButton onClick={migrateToNewPool} >
                                    <ProgressBar style={{ width: `${filled}%` }}></ProgressBar>
                                    <Text>
                                        {!txInProgressMigrate && (MigrateMessage == null) &&
                                            <Span color="#FFF" weight="400" cursor='pointer'>Migrate to {poolName === "UNI-V2" ? "UNI-V2 " : "PUSH Fee"} Pool</Span>
                                        }

                                        {txInProgressMigrate && (MigrateMessage != null) &&
                                            <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={26} spinnerColor="#FFF" title={MigrateMessage} titleColor="#FFF" />
                                        }
                                    </Text>
                                </MigrateButton>


                            }

                        </ButtonsContainer>

                        <ButtonsContainer>

                            {formatTokens(userData?.epochStakeNext) === "0" ?
                                <StakingToolTip
                                    error={true}
                                    ToolTipTitle={unstakeErrorMessage ? unstakeErrorMessage : "Nothing to unstake, Stake First"}
                                    ToolTipWidth={"16rem"}
                                    margin={'0 10px 0 0'}
                                    bottom={'-30px'}
                                >
                                    <EmptyButton
                                        border="none"
                                        cursor='default'
                                        background={theme.disableButtonBg}
                                        color={theme.disabledButtonText}
                                    >
                                        {txInProgressWithdraw ?
                                            (<LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={26} spinnerColor={theme.activeButtonText} title='Claiming' titleColor={theme.activeButtonText} />) :
                                            ` Unstake ${poolName}`
                                        }
                                    </EmptyButton>
                                </StakingToolTip>
                                :
                                <EmptyButton
                                    border={`1px solid ${theme.activeButtonText}`}
                                    background={'transparent'}
                                    color={theme.activeButtonText}
                                    cursor='pointer'
                                    margin='0 10px 0 0'
                                    onClick={withdrawTokens}
                                >
                                    {txInProgressWithdraw ?
                                        (<LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={26} spinnerColor={theme.activeButtonText} title="Unstaking" titleColor={theme.activeButtonText} />) :
                                        ` Unstake ${poolName}`
                                    }
                                </EmptyButton>
                            }

                            {userData?.totalAvailableReward === "0.00" ?
                                <StakingToolTip
                                    bottom={'-30px'}
                                    ToolTipTitle={"No Rewards to Claim"}
                                    error={true}
                                    ToolTipWidth={"10rem"}
                                >
                                    <EmptyButton
                                        border="none"
                                        cursor='default'
                                        background={theme.disableButtonBg}
                                        color={theme.disabledButtonText}
                                    >
                                        {txInProgressClaimRewards ?
                                            (<LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={26} spinnerColor={theme.activeButtonText} title='Claiming' titleColor={theme.activeButtonText} />) :
                                            ` Claim Rewards`
                                        }
                                    </EmptyButton>
                                </StakingToolTip>
                                :
                                <EmptyButton
                                    border={`1px solid ${theme.activeButtonText}`}
                                    background={'transparent'}
                                    color={theme.activeButtonText}
                                    cursor='pointer'
                                    onClick={massClaimRewardsTokensAll}
                                >
                                    {txInProgressClaimRewards ?
                                        (<LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={26} spinnerColor={theme.activeButtonText} title='Claiming' titleColor={theme.activeButtonText} />) :
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
                        <SkeletonLine height='49px' width='100%' margin='0 0 11px 0'></SkeletonLine>
                        <SkeletonLine height='49px' width='100%'></SkeletonLine>
                    </SkeletonContainer>
                )}

            </Buttons>


        </Container>
    );
};

export default YieldPoolCard;

const Container = styled(SectionV2)`
    border: 1px solid  ${(props) => props.theme.stakingBorder};
    border-radius: 24px;
    padding:24px 19px;
    font-family: 'Strawford';
    font-style: normal;
    font-weight: 500;
    // min-height: 587px;
    color: ${(props) => props.theme.stakingPrimaryText};
`;

const Heading = styled(H2V2)`
    font-size: 24px;
    line-height: 141%;
    letter-spacing: -0.03em;
    display:flex;
    align-items:center;
    color: ${(props) => props.theme.stakingPrimaryText};

    @media (max-width:600px){
        font-size: 20px;
    }

    @media(max-width:470px){
        flex-direction: column;
    }

`

const Deprecated = styled(SpanV2)`
    font-weight: 600;
    font-size: 12px;
    line-height: 140%;
    display: flex;
    align-items: center;
    color: #D53A94;
    margin-left:10px;
    padding: 2px 6px;
    background: #F3D7FA;
    border-radius: 6px;
    height: 17px;
`

const SecondaryText = styled.p`
    margin:0px;
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;

    @media (max-width:600px){
        font-size: 16px;
    }
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

    @media (max-width:600px){
        font-size: 16px;
    }

`
const StakedAmount = styled(H2V2)`
    color: ${(props) => props.theme.stakingSecondaryText};
`

const EpochNo = styled(B)`
    font-weight: 600;
    text-align: right;
    letter-spacing: -0.03em;
    font-size: 16px;
    margin-left:5px;
    line-height: 141%;
    color: ${(props) => props.theme.stakingUserDetails};

    @media (max-width:600px){
        font-size: 14px;
    }
`

const InfoSpan = styled(SpanV2)`
    margin:0px 0px 0px 6px;
    cursor:pointer;
`

const RewardContainer = styled(ItemHV2)`
    max-height:108px;
    min-height:108px;
    @media(min-width:600px) and (max-width:992px){
        margin:0px 13px;
    }
`

const DataValue = styled(H2V2)`
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.stakingPrimaryText};

    @media (max-width:600px){
        font-size: 16px;
    }
`

const DepositContainer = styled(ItemVV2)`
    min-height:150px;
`

const Buttons = styled(ItemVV2)`
    // min-height:132px;
`

const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    // margin:15px 0px 0px 0px;
`

const FilledButton = styled(ButtonV2)`
    width:100%;
    background: #D53A94;
    border: 1px solid #D53A94;
    border-radius: 8px;
    padding: 12px;
    font-size: 16px;
    line-height: 141%;
    flex-direction:row;
    letter-spacing: -0.03em;
    color: #FFFFFF;
    cursor:pointer;
    & > div{
        display:block;
    }
    
`;


const MigrateButton = styled(ButtonV2)`
    width:100%;
    background: #D53A94;
    border: 1px solid #D53A94;
    border-radius: 8px;
    padding: 12px;
    font-size: 16px;
    line-height: 141%;
    flex-direction:row;
    letter-spacing: -0.03em;
    color: #FFFFFF;
    cursor:pointer;
    justify-content:flex-start;
    margin:0px 0px 15px 0px;
    min-height: 49px;
    position:relative;

    &:after{
        background:transparent;
    }


    & > div{
        display:block;
    }

    &:hover{
        opacity:1;
    }

    @media(max-width:600px){
        font-size: 14px;
    }


`;

const ProgressBar = styled.div`
    min-height: 37px;
    background-color: rgb(183, 46, 126);
    transition: width 0.5s ease 0s;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

const Text = styled.div`
    width:100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: #eee;
`

const EmptyButton = styled(ButtonV2)`
    font-size: 16px;
    line-height: 19px;
    flex-direction:row;
    flex:1;
    // width: 145px;
    height: 49px;
    padding:12px;
    border-radius: 8px;
    & > div{
        display:block;
    }
    &:after{
        background:transparent;
    }

    &:hover{
        opacity:1;
    }

    @media(max-width:600px){
        font-size: 14px;
    }
`

const SkeletonContainer = styled(Skeleton)`
    // width:150px;
    max-width:-webkit-fill-available;
    border-radius: 5px;
    gap:5px;
`
