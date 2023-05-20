// React + Web3 Essentials
import React, { useState } from 'react';

// External Packages
import styled from 'styled-components';

// Internal Compoonents
import { ButtonV2, H2V2, ImageV2, ItemHV2, ItemVV2, SectionV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import InfoLogo from "../../assets/inforWithoutBG.svg";
import { Button, Span } from 'primaries/SharedStyling';
import { MdWarning } from 'react-icons/md';
import { ethers } from 'ethers';
import useToast from 'hooks/useToast';

import { MdCheckCircle, MdError } from 'react-icons/md';
import { useWeb3React } from '@web3-react/core';
import { abis, addresses } from 'config';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';



const YieldPoolCard = ({
    poolName,
    userData,
    PoolStats,
    poolAddress,
    getUserData,
    tokenAddress,
    setActiveTab
}: any) => {
    const { active, error, account, library, chainId } = useWeb3React();

    const [txInProgressWithdraw, setTxInProgressWithdraw] = React.useState(false);
    const [txInProgressClaimRewards, setTxInProgressClaimRewards] = useState(false);
    const [txInProgressMigrate, setTxInProgressMigrate] = useState(false);

    const yieldFarmToast = useToast();

    const massClaimRewardsTokensAll = async () => {
        if (txInProgressClaimRewards) {
            return;
        }

        if (!PoolStats.currentEpochPUSH || PoolStats.currentEpochPUSH == 1) {
            yieldFarmToast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: `Harvest unlocks from Epoch 2!)`,
                toastType: 'ERROR',
                getToastIcon: (size) => <MdError size={size} color="red" />,
            });

            return;
        }
        setTxInProgressClaimRewards(true);

        console.log("Pool Addresses", poolAddress);

        var signer = library.getSigner(account);
        let yieldFarming = new ethers.Contract(
            poolAddress,
            abis.yieldFarming,
            signer
        );
        const tx = yieldFarming.massHarvest();


        tx.then(async (tx) => {
            yieldFarmToast.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });

            try {
                await library.waitForTransaction(tx.hash);

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
        if (txInProgressWithdraw) {
            return;
        }

        setTxInProgressWithdraw(true);
        const withdrawAmount = formatTokens(userData.epochStakeNext);

        console.log("Withdraw amount: ", withdrawAmount);

        if (withdrawAmount == 0) {
            yieldFarmToast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: `Nothing to Withdraw!`,
                toastType: 'ERROR',
                getToastIcon: (size) => <MdError size={size} color="red" />,
            });

            setTxInProgressWithdraw(false);
            return;
        }

        var signer = library.getSigner(account);
        let staking = new ethers.Contract(addresses.staking, abis.staking, signer);

        const amounttowithdraw = await staking.balanceOf(
            account,
            tokenAddress
        )
        console.log("Amount to Withdraw: ", amounttowithdraw, formatTokens(amounttowithdraw));

        const tx = staking.withdraw(
            tokenAddress,
            ethers.BigNumber.from(withdrawAmount).mul(
                ethers.BigNumber.from(10).pow(18)
            )
        );

        tx.then(async (tx) => {
            yieldFarmToast.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });

            try {
                await library.waitForTransaction(tx.hash);
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

                console.log("This running")
                // getLpPoolStats();
                getUserData();
            } catch (e) {
                console.log("Error", e);
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




    const formatTokens = (tokens) => {
        if (tokens) {
            return tokens.div(ethers.BigNumber.from(10).pow(18)).toNumber();
        }
    };

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    const migrateToNewPool = async () => {
        if (txInProgressMigrate) {
            return;
        }
        setTxInProgressMigrate(true);
        //unstake from the staking Contract
        console.log("Migrating to new pool");

        const withdrawAmount = formatTokens(userData.epochStakeNext);
        console.log("Withdraw amount: ", withdrawAmount);

        if (withdrawAmount == 0) {
            yieldFarmToast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: `Nothing to Withdraw!`,
                toastType: 'ERROR',
                getToastIcon: (size) => <MdError size={size} color="red" />,
            });

            setTxInProgressWithdraw(false);
            return;
        }

        var signer = library.getSigner(account);
        let staking = new ethers.Contract(addresses.staking, abis.staking, signer);

        const amounttowithdraw = await staking.balanceOf(
            account,
            tokenAddress
        )
        console.log("Amount to Withdraw: ", amounttowithdraw, formatTokens(amounttowithdraw));

        let tx;

        console.log("Token Address", tokenAddress, staking, withdrawAmount);

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

                try {
                    await library.waitForTransaction(tx.hash);

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
                        console.log("Allowance", TokensApproved, withdrawAmount);

                        if (TokensApproved > withdrawAmount) {
                            console.log("Token Already approved : ", formatTokens(allowance), "Token Needed to deposit: ", withdrawAmount)
                            depositPushToken(tx, withdrawAmount);
                        } else {
                            console.log("Sorry, Need TO Approve", formatTokens(allowance), withdrawAmount);
                            tx = token.approve(
                                addresses.pushCoreV2,
                                ethers.BigNumber.from(withdrawAmount).mul(
                                    ethers.BigNumber.from(10).pow(18)
                                )
                            )

                            tx.then(async (tx) => {
                                yieldFarmToast.showLoaderToast({ loaderMessage: 'Approving! Please Wait...' });

                                try {
                                    await library.waitForTransaction(tx.hash);
                                    console.log("Approved the token amount");

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

                                    depositPushToken(tx, withdrawAmount);

                                } catch (error) {
                                    console.log("Error", error);
                                    yieldFarmToast.showMessageToast({
                                        toastTitle: 'Error',
                                        toastMessage: `Transaction Failed! (" +${error.name}+ ")`,
                                        toastType: 'ERROR',
                                        getToastIcon: (size) => <MdError size={size} color="red" />,
                                    });
                                    setTxInProgressMigrate(false);
                                }
                            }).catch((err) => {
                                console.log("Error in approving", err);
                                yieldFarmToast.showMessageToast({
                                    toastTitle: 'Error',
                                    toastMessage: `Transaction Failed! Could Not Approve`,
                                    toastType: 'ERROR',
                                    getToastIcon: (size) => <MdError size={size} color="red" />,
                                });
                                setTxInProgressMigrate(false);
                            })
                        }


                    } else {
                        // UNI V2 Lp Token is there so we need to simply approve stakingV2 for the token and then deposit

                        var token = new ethers.Contract(tokenAddress, abis.pushToken, signer);
                        let allowance = await token.allowance(account, addresses.stakingV2);
                        let TokensApproved = formatTokens(allowance);
                        console.log("Allowance", TokensApproved, withdrawAmount);

                        if (TokensApproved > withdrawAmount) {
                            console.log("Allowance is way more than the withdraw amount", formatTokens(allowance), withdrawAmount)
                            depositAmount(tx, withdrawAmount);
                        } else {
                            console.log("Sorry amount not large", formatTokens(allowance), withdrawAmount);
                            tx = token.approve(
                                addresses.stakingV2,
                                ethers.BigNumber.from(withdrawAmount).mul(
                                    ethers.BigNumber.from(10).pow(18)
                                )
                            )

                            tx.then(async (tx) => {
                                yieldFarmToast.showLoaderToast({ loaderMessage: 'Approving! Please Wait...' });

                                try {
                                    await library.waitForTransaction(tx.hash);
                                    console.log("Approved the token amount");

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

                                    depositAmount(tx, withdrawAmount);

                                } catch (error) {
                                    console.log("Error", error);
                                    yieldFarmToast.showMessageToast({
                                        toastTitle: 'Error',
                                        toastMessage: `Transaction Failed! (" +${error.name}+ ")`,
                                        toastType: 'ERROR',
                                        getToastIcon: (size) => <MdError size={size} color="red" />,
                                    });
                                    setTxInProgressMigrate(false);
                                }
                            }).catch((err) => {
                                console.log("Error in approving", err);
                                yieldFarmToast.showMessageToast({
                                    toastTitle: 'Error',
                                    toastMessage: `Transaction Failed! Could Not Approve`,
                                    toastType: 'ERROR',
                                    getToastIcon: (size) => <MdError size={size} color="red" />,
                                });
                                setTxInProgressMigrate(false);
                            })
                        }
                    }

                } catch (error) {
                    console.log("Error inside withdraw", error);
                    yieldFarmToast.showMessageToast({
                        toastTitle: 'Error',
                        toastMessage: `Transaction Failed! (" +${error.name}+ ")`,
                        toastType: 'ERROR',
                        getToastIcon: (size) => <MdError size={size} color="red" />,
                    });
                    setTxInProgressMigrate(false);

                }
            })
            .catch((err) => {
                console.log("Error in withdrawl", err);
                yieldFarmToast.showMessageToast({
                    toastTitle: 'Error',
                    toastMessage: `Transaction Failed! Could Not Withdraw!`,
                    toastType: 'ERROR',
                    getToastIcon: (size) => <MdError size={size} color="red" />,
                });
                setTxInProgressMigrate(false);
            })

    }


    const depositAmount = async (tx, withdrawAmount) => {
        var signer = library.getSigner(account);
        var stakingV2 = new ethers.Contract(addresses.stakingV2, abis.stakingV2, signer);

        tx = stakingV2.deposit(
            tokenAddress,
            ethers.BigNumber.from(withdrawAmount).mul(
                ethers.BigNumber.from(10).pow(18)
            )
        )
        tx.then(async (tx) => {
            yieldFarmToast.showLoaderToast({ loaderMessage: 'Depositing to V2 ! Please Wait...' });

            await library.waitForTransaction(tx.hash);

            console.log("Deposited the token amount");

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
            setTxInProgressMigrate(false);
            //this will change the dApp to go to new staking.
            setActiveTab(0);

        }).catch((error) => {
            console.log("Error in depositing", error);
            yieldFarmToast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: `Transaction Failed! Could Not Deposit the Amount`,
                toastType: 'ERROR',
                getToastIcon: (size) => <MdError size={size} color="red" />,
            });
            setTxInProgressMigrate(false);
        })
    }

    const depositPushToken = async (tx, withdrawAmount) => {

        console.log("Deposit amount is called");

        var signer = library.getSigner(account);
        let pushCoreV2 = new ethers.Contract(addresses.pushCoreV2, abis.pushCoreV2, signer);

        tx = pushCoreV2.stake(
            ethers.BigNumber.from(withdrawAmount).mul(
                ethers.BigNumber.from(10).pow(18)
            )
        )

        tx.then(async (tx) => {
            yieldFarmToast.showLoaderToast({ loaderMessage: 'Depositing to V2 ! Please Wait...' });

            await library.waitForTransaction(tx.hash);

            console.log("Deposited Push token amount");

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
            //this will change the dApp to go to new staking.
            setActiveTab(0);

        }).catch((error) => {
            console.log("Error in depositing", error);
            yieldFarmToast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: `Transaction Failed! Could Not Deposit Push Token`,
                toastType: 'ERROR',
                getToastIcon: (size) => <MdError size={size} color="red" />,
            });
            setTxInProgressMigrate(false);
        })
    }

    console.log("Pool Stats", PoolStats, PoolStats.currentEpochPUSH.toString(), PoolStats.totalEpochPUSH.toString(), PoolStats.totalEpochPUSH.toString())


    return (
        <Container>

            <Note>
                <MdWarning color='#E2B71D' />This function has been deprecated. Please migrate to the new pool.
            </Note>

            {/* Top Section */}
            <ItemVV2 margin="14px 0px 20px 0px">
                <Heading>
                    {poolName === 'UNI-V2' ? 'Uniswap V2 Staking Pool' : 'PUSH Staking Pool '}
                    <Deprecated>Deprecated</Deprecated>
                </Heading>
                <SecondaryText>
                    Current APR <SpanV2 color="#D53A94">
                        {Math.max(PoolStats.stakingAPR, 0)}
                        %</SpanV2>
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
                            {numberWithCommas(formatTokens(PoolStats.rewardForCurrentEpoch))} PUSH
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
                            {numberWithCommas(formatTokens(PoolStats.poolBalance))} {poolName == "UNI-V2" ? "UNI-V2" : "PUSH"}
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
                    Current Epoch
                    <Span margin='0 0 0 5px'>
                        {Math.min(PoolStats.currentEpochPUSH, PoolStats.totalEpochPUSH).toString()}
                        /
                        {PoolStats.totalEpochPUSH}
                    </Span>
                </ItemHV2>

                {/* Deposit Cash Data */}
                <ItemVV2 >
                    <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                        <DataTitle>
                            User Deposit
                            <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                        </DataTitle>
                        <DataValue> {formatTokens(userData.epochStakeNext)} {poolName == "UNI-V2" ? "UNI-V2" : "PUSH"}</DataValue>
                    </ItemHV2>
                    <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                        <DataTitle>
                            Rewards Claimed
                            <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                        </DataTitle>
                        <DataValue> {(userData.totalAccumulatedReward - userData.totalAvailableReward).toFixed(2)} PUSH</DataValue>
                    </ItemHV2>
                    <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                        <DataTitle>
                            Current Epoch Reward
                            <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                        </DataTitle>
                        <DataValue>
                            {/* {poolName == "UNI-V2" ? userData.potentialUserReward : 0}  */}
                            {userData.potentialUserReward}PUSH</DataValue>
                    </ItemHV2>
                    <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                        <DataTitle>
                            Available for Claiming
                            <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                        </DataTitle>
                        <DataValue>{userData.totalAvailableReward} PUSH</DataValue>
                    </ItemHV2>

                </ItemVV2>

            </ItemVV2>

            {/* Bottom Section */}
            <ItemVV2 padding=" 0px 14px" margin="24px 0px 0px 0px">
                <ButtonsContainer>
                    <FilledButton onClick={migrateToNewPool} style={{ margin: "0px 10px 0px 0px" }} >

                        {!txInProgressMigrate &&
                            <Span color="#FFF" weight="400" cursor='pointer'>Migrate to {poolName} Pool</Span>
                        }
                        {txInProgressMigrate &&
                            <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={26} spinnerColor="#FFF" />
                        }

                    </FilledButton>
                </ButtonsContainer>

                <ButtonsContainer>
                    <EmptyButton margin='0 10px 0 0' onClick={withdrawTokens}>
                        {txInProgressWithdraw ?
                            (<LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={26} spinnerColor="#D53A94" />) :
                            ` Unstake ${poolName}`
                        }

                    </EmptyButton>
                    <EmptyButton onClick={massClaimRewardsTokensAll}>
                        {!txInProgressClaimRewards &&
                            <Span color="#657795" weight="400">Claim Rewards</Span>
                        }
                        {txInProgressClaimRewards &&
                            <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={26} spinnerColor="#D53A94" />
                        }
                    </EmptyButton>
                </ButtonsContainer>
            </ItemVV2>
        </Container>
    );
};

export default YieldPoolCard;

const Container = styled(SectionV2)`
    border: 1px solid #BAC4D6;
    border-radius: 24px;
    padding:20px;
    margin:10px;
    font-family: 'Strawford';
    font-style: normal;
    font-weight: 500;

`;

const Note = styled(ItemHV2)`
    padding: 8px 4px;
    gap: 4px;
    background: #FFF7DA;
    border-radius: 8px;
    font-size: 14px;
    line-height: 118.5%;
    letter-spacing: -0.03em;
    color: rgba(87, 93, 115, 0.8);
    
`

const Heading = styled(H2V2)`
    font-size: 24px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: #333333;
    display:flex;
    align-items:center;


`

const Deprecated = styled(SpanV2)`
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
