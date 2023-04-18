// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { css } from 'styled-components';

// Internal Compoonents
import { ButtonV2, H2V2, ImageV2, ItemHV2, ItemVV2, SectionV2, SpanV2 } from 'components/reusables/SharedStylingV2';
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


const bn = function (number, defaultValue = null) { if (number == null) { if (defaultValue == null) { return null } number = defaultValue } return ethers.BigNumber.from(number) }

// const tokens = function (amount) { return (bn(amount).mul(bn(10).pow(18))).toString() }
// const tokensBN = function (amount) { return (bn(amount).mul(bn(10).pow(18))) }
const bnToInt = function (bnAmount) { return bnAmount.div(bn(10).pow(18)) }

const YieldUniswapV3 = () => {
    const { active, error, account, library, chainId } = useWeb3React();
    const [txInProgressDep, setTxInProgressDep] = React.useState(false);
    const [lpPoolStats, setLpPoolStats] = React.useState(null);
    const [userDataLP, setUserDataLP] = React.useState(null);

    const [depositAmountToken, setDepositAmountToken] = React.useState(0);
    const [depositApproved, setDepositApprove] = React.useState(false);
    const [showDepSlip, setShowDepSlip] = React.useState(null);
    const [showDepositItem, setShowDepositItem] = React.useState(false);
    const [txInProgress, setTxInProgress] = React.useState(false);

    const [txInProgressWithdraw, setTxInProgressWithdraw] = React.useState(false);

    const [txInProgressClaimRewards, setTxInProgressClaimRewards] = React.useState(false);

    const [epnsToken, setEpnsToken] = React.useState(null);
    const [staking, setStaking] = React.useState(null);
    const [yieldFarmingPUSH, setYieldFarmingPUSH] = React.useState(null);
    const [yieldFarmingLP, setYieldFarmingLP] = React.useState(null);
    const [uniswapV2Router02, setUniswapV2Router02] = React.useState(null);


    const [txInProgressApprDep, setTxInProgressApprDep] = React.useState(false);

    const [loading, setLoading] = React.useState<boolean>(false);
    const [loadingUserData, setLoadingUserData] = React.useState<boolean>(false);

    const uniswapV2Toast = useToast();


    console.log("Addresses", addresses, abis);
    const tokenAddress = addresses.epnsLPToken;

    const getLPPoolStats = React.useCallback(
        async () => {
            setLoading(true);
            const lpPoolStats = await YieldFarmingDataStore.instance.getLPPoolStats();
            console.log("LPPool Stats", lpPoolStats);

            setLpPoolStats({ ...lpPoolStats });
            setLoading(false);
        },
        [epnsToken, staking, yieldFarmingLP, uniswapV2Router02]
    );

    const getUserDataLP = React.useCallback(async (yieldFarmingLP) => {
        setLoadingUserData(true);
        const userDataLP = await YieldFarmingDataStore.instance.getUserData(yieldFarmingLP);
        console.log("User Data LP", userDataLP);
        setUserDataLP({ ...userDataLP });
        setLoadingUserData(false);
    }, [yieldFarmingLP]);


    React.useEffect(() => {
        let epnsToken = new ethers.Contract(addresses.epnsToken, abis.epnsToken, library);

        //changed the address and abis
        let staking = new ethers.Contract(addresses.staking, abis.stakingV2, library);

        let yieldFarmingPUSH = new ethers.Contract(addresses.yieldFarmPUSH, abis.yieldFarming, library);

        //changed the address
        let yieldFarmingLP = new ethers.Contract(addresses.yieldFarmLP, abis.yieldFarming, library);

        let uniswapV2Router02Instance = new ethers.Contract(addresses.uniswapV2Router02, abis.uniswapV2Router02, library);

        console.log("UseEffect", staking, yieldFarmingPUSH, yieldFarmingLP)

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

        YieldFarmingDataStore.instance.init(
            account,
            epnsToken,
            staking,
            yieldFarmingPUSH,
            yieldFarmingLP,
            uniswapV2Router02
        );

        getLPPoolStats();
        getUserDataLP(yieldFarmingLP);


    }, [account]);

    React.useEffect(() => {
        // Check if the account has approved deposit
        checkApprDeposit();

    }, [depositAmountToken]);

    const fillMax = async () => {
        var signer = library.getSigner(account);
        const tokenAddr = addresses.uniV2LPToken;
        let token = new ethers.Contract(tokenAddr, abis.epnsToken, signer);

        let balance = bnToInt(await token.balanceOf(account));
        console.log("balance", balance)
        setDepositAmountToken(parseInt(balance.toString().replace(/\D/, '')) || 0)
    }

    const checkApprDeposit = async () => {
        if (depositAmountToken <= 0) {
            setDepositApprove(false);
            return;
        }
        setTxInProgressApprDep(true);

        var signer = library.getSigner(account);
        const tokenAddr = addresses.uniV2LPToken;
        let token = new ethers.Contract(tokenAddr, abis.uniV2LpToken, signer);

        const allowance = await token.allowance(account, addresses.staking);
        console.log("Allowance", formatTokens(allowance), allowance.gte(bn(depositAmountToken)), depositAmountToken);


        // if(formatTokens(allowance) >= depositAmountToken){
        //     setDepositApprove(true);
        // }else{
        //     console.log("Small")
        //     setDepositApprove(false);
        // }


        if (allowance.gte(bn(depositAmountToken))) {
            setDepositApprove(true);
        }
        else {
            setDepositApprove(false);
        }

        setTxInProgressApprDep(false);
    }

    const approveDeposit = async () => {
        if (depositApproved || txInProgressApprDep) {
            return
        }

        setTxInProgressApprDep(true);

        var signer = library.getSigner(account);
        let uniV2LPToken = new ethers.Contract(addresses.uniV2LPToken, abis.uniV2LpToken, signer);
        let staking = new ethers.Contract(addresses.staking, abis.staking, signer);

        const uintMax = bn(2).pow(bn(256)).sub(1)

        console.log("Approve", uniV2LPToken, staking, uintMax);

        const tx = uniV2LPToken.approve(
            staking.address,
            uintMax
        );

        console.log("Approve TX", tx);


        tx.then(async (tx) => {
            uniswapV2Toast.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });


            try {
                await library.waitForTransaction(tx.hash);
                uniswapV2Toast.showMessageToast({
                    toastTitle: 'Success',
                    toastMessage: 'Successfully approved LP Tokens!',
                    toastType: 'SUCCESS',
                    getToastIcon: (size) => (
                        <MdCheckCircle
                            size={size}
                            color="green"
                        />
                    ),
                });

                setTxInProgressApprDep(false);
                setDepositApprove(true);

            } catch (e) {
                uniswapV2Toast.showMessageToast({
                    toastTitle: 'Error',
                    toastMessage: `User denied message signature.`,
                    toastType: 'ERROR',
                    getToastIcon: (size) => <MdError size={size} color="red" />,
                });

                setTxInProgressApprDep(false);
            }
        }).catch((err) => {

            uniswapV2Toast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: `User denied message signature`,
                toastType: 'ERROR',
                getToastIcon: (size) => <MdError size={size} color="red" />,
            });

            setTxInProgressApprDep(false);
        });
    }

    const depositAmountTokenFarmSingleTx = async () => {
        if (txInProgressDep || !approveDeposit) {
            return
        }

        setTxInProgressDep(true)

        var signer = library.getSigner(account);
        let uniV2LPToken = new ethers.Contract(addresses.uniV2LPToken, abis.uniV2LpToken, signer);
        let staking = new ethers.Contract(addresses.staking, abis.staking, signer);
        console.log("Depositing amount", depositAmountToken);

        const tx2 = staking.deposit(
            addresses.uniV2LPToken,
            ethers.BigNumber.from(depositAmountToken).mul(
                ethers.BigNumber.from(10).pow(18)
            )
        );

        tx2
            .then(async (tx) => {
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

                    //   getPoolStats();
                    getLPPoolStats();
                    getUserDataLP(yieldFarmingLP);

                    setTxInProgressDep(false);
                    setShowDepSlip(true);
                    // window.location.reload();
                } catch (e) {
                    uniswapV2Toast.showMessageToast({
                        toastTitle: 'Error',
                        toastMessage: `Transaction Failed! (" +${e.name}+ ")`,
                        toastType: 'ERROR',
                        getToastIcon: (size) => <MdError size={size} color="red" />,
                    });

                    setTxInProgressDep(false);
                }
            })
            .catch((err) => {
                uniswapV2Toast.showMessageToast({
                    toastTitle: 'Error',
                    toastMessage: `Transaction Cancelled!`,
                    toastType: 'ERROR',
                    getToastIcon: (size) => <MdError size={size} color="red" />,
                });

                setTxInProgressDep(false);
            });
    };

    const withdrawAmountTokenFarmAutomatic = async () => {
        if (txInProgressWithdraw) {
            return;
        }

        setTxInProgressWithdraw(true);
        const withdrawAmount = formatTokens(userDataLP.epochStakeNext);

        console.log("Withdraw amount", withdrawAmount, ethers.BigNumber.from(withdrawAmount).mul(
            ethers.BigNumber.from(10).pow(18)
        ), userDataLP.epochStakeNext);

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
        let staking = new ethers.Contract(addresses.staking, abis.staking, signer);

        const amounttowithdraw = await staking.balanceOf(
            account,
            addresses.uniV2LPToken
        )

        // console.log("Amount to be taken out", formatTokens(amounttowithdraw), formatTokens(ethers.BigNumber.from(withdrawAmount).mul(
        //     ethers.BigNumber.from(10).pow(18)
        // )));

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

                getLPPoolStats();
                getUserDataLP(yieldFarmingLP);
            } catch (e) {
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
            toast.dark("Harvest unlocks from Epoch 2!", {
                position: "bottom-right",
                type: toast.TYPE.ERROR,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            return;
        }
        setTxInProgressClaimRewards(true);

        console.log(addresses.yieldFarmLP);

        var signer = library.getSigner(account);
        let yieldFarmingPUSH = new ethers.Contract(
            addresses.yieldFarmLP,
            abis.yieldFarming,
            signer
        );
        const tx = yieldFarmingPUSH.massHarvest();


        tx.then(async (tx) => {
            let txToast = toast.dark(
                <LoaderToast msg="Waiting for Confirmation..." color="#35c5f3" />,
                {
                    position: "bottom-right",
                    autoClose: false,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }
            );

            try {
                await library.waitForTransaction(tx.hash);

                toast.update(txToast, {
                    render: "Transaction Completed!",
                    type: toast.TYPE.SUCCESS,
                    autoClose: 5000,
                });

                setTxInProgressClaimRewards(false);
            } catch (e) {
                toast.update(txToast, {
                    render: "Transaction Failed! (" + e.name + ")",
                    type: toast.TYPE.ERROR,
                    autoClose: 5000,
                });

                setTxInProgressClaimRewards(false);
            }
        }).catch((err) => {
            toast.dark("Transaction Cancelled!", {
                position: "bottom-right",
                type: toast.TYPE.ERROR,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setTxInProgressClaimRewards(false);
        });
    };

    const formatTokens = (tokens) => {
        if (tokens) {
            return tokens.div(ethers.BigNumber.from(10).pow(18)).toString();
        }
    };

    function numberWithCommas(x) {
        return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }





    return (
        // <Container>
        //     {!loading ? (
        //         <div>
        //             <LoaderSpinner type={LOADER_TYPE.SEAMLESS} />
        //         </div>
        //     ) : (
        <Container>


            {/* Top Section */}
            <ItemVV2 margin="0px 0px 20px 0px">
                <Heading >Uniswap V2 LP Staking Pool</Heading>
                <SecondaryText>
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

                        {loading ? (
                            <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={16} />
                        ) :
                            <H2V2
                                fontSize="24px"
                                fontWeight="700"
                                color="#D53A94"
                                letterSpacing="-0.03em"
                            >
                                {numberWithCommas(formatTokens(lpPoolStats?.rewardForCurrentEpoch))} PUSH
                            </H2V2>
                        }
                    </ItemVV2>

                    <Line width="10px" height="100%"></Line>

                    <ItemVV2 margin="0px 0px 0px 18px" padding="10px">
                        <SecondaryText>Total Staked</SecondaryText>

                        {loading ? (
                            <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={16} />
                        ) :
                            <H2V2
                                fontSize="24px"
                                fontWeight="700"
                                letterSpacing="-0.03em"
                            >
                                {/* 12.725 Uni-V3 */}
                                {numberWithCommas(formatTokens(lpPoolStats?.poolBalance))} UNI-V2
                            </H2V2>
                        }
                    </ItemVV2>
                </ItemHV2>

                {/* Epoch Text */}
                <ItemHV2
                    alignSelf="end"
                    margin="12px 13px 24px 0px"
                    color="#575D73"
                    letterSpacing="-0.03em"
                >
                    <Span padding="0px 5px 0px 0px">Current Epoch</Span>
                    <B>
                        {Math.min(lpPoolStats?.currentEpochPUSH, lpPoolStats?.totalEpochPUSH).toString()}
                        /
                        {lpPoolStats?.totalEpochPUSH}
                    </B>
                </ItemHV2>

                {/* Deposit Cash Data */}
                <ItemVV2
                    padding={loadingUserData ? "60px " : "0px"}
                >
                    {loadingUserData ? (<LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={75} />) : (
                        <>
                            <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                                <DataTitle>
                                    User Deposit
                                    <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                                </DataTitle>
                                <DataValue>{formatTokens(userDataLP?.epochStakeNext)} UNI-V2</DataValue>
                            </ItemHV2>
                            <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                                <DataTitle>
                                    Rewards Claimed
                                    <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                                </DataTitle>
                                <DataValue> {(userDataLP?.totalAccumulatedReward - userDataLP?.totalAvailableReward).toFixed(2)} PUSH</DataValue>
                            </ItemHV2>
                            <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                                <DataTitle>
                                    Current Epoch Reward
                                    <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                                </DataTitle>
                                <DataValue> {userDataLP?.potentialUserReward} PUSH</DataValue>
                            </ItemHV2>
                            <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                                <DataTitle>
                                    Available for Claiming
                                    <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                                </DataTitle>
                                <DataValue> {userDataLP?.totalAvailableReward} PUSH</DataValue>
                            </ItemHV2>

                        </>
                    )}


                </ItemVV2>

            </ItemVV2>

            {showDepositItem && (
                <Item bg="#f1f1f1" radius="0px" margin="20px 0px -10px 0px" padding="10px 20px" align="stretch" self="stretch">
                    <ItemHV2
                    >
                        <MaxButton
                            bg="#000"
                            onClick={fillMax}
                            position="absolute"
                        >
                            Max
                        </MaxButton>

                        <Input
                            placeholder="Number of Tokens"
                            radius="4px"
                            padding="12px"
                            self="stretch"
                            bg="#fff"
                            height='20px'
                            value={depositAmountToken}
                            onChange={(e) => {
                                setDepositAmountToken(parseInt(e.target.value.replace(/\D/, '')) || 0)
                            }}
                        />
                    </ItemHV2>

                    <ItemH padding="10px 0 0 0" margin='10px 0 0 0'>
                        <ButtonAlt
                            bg={depositApproved ? "#999" : "#e20880"}
                            onClick={approveDeposit}
                            disabled={depositApproved ? true : false}
                        >
                            {!depositApproved && !txInProgressApprDep &&
                                <Span color="#fff" weight="400">Approve</Span>
                            }
                            {txInProgressApprDep && !depositApproved &&
                                <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={16} spinnerColor="#fff" />
                            }
                            {!txInProgress && depositApproved &&
                                <Span color="#fff" weight="600">Approved</Span>
                            }
                        </ButtonAlt>

                        <ButtonAlt
                            bg={!depositApproved ? "#999" : "#e20880"}
                            disabled={!depositApproved ? true : false}
                            onClick={depositAmountTokenFarmSingleTx}
                        >
                            {!txInProgressDep &&
                                <Span color="#fff" weight="400">Deposit</Span>
                            }
                            {txInProgressDep &&
                                <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={16} spinnerColor="#fff" />
                            }
                        </ButtonAlt>
                    </ItemH>
                </Item>
            )}




            {/* Bottom Section */}
            <ItemVV2 padding=" 0px 14px" margin="24px 0px 0px 0px">
                <ItemHV2>
                    <FilledButton onClick={() => setShowDepositItem(!showDepositItem)}>Stake PUSH/WETH LP Tokens</FilledButton>
                </ItemHV2>
                <ButtonsContainer>
                    <EmptyButton style={{ margin: "0px 10px 0px 0px" }} onClick={() => withdrawAmountTokenFarmAutomatic()}>

                        {txInProgressWithdraw ?
                            (<LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={16} spinnerColor="#D53A94" />) :
                            "Unstake PUSH/WETH"
                        }

                    </EmptyButton>
                    <EmptyButton onClick={() => massClaimRewardsTokensAll()}>

                        {txInProgressClaimRewards ?
                            (<LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={16} spinnerColor="#D53A94" />) :
                            "Claim Rewards"
                        }

                    </EmptyButton>
                </ButtonsContainer>
            </ItemVV2>
        </Container>
        //     )}





        // </Container>


    );
};

export default YieldUniswapV3;

const LoaderToast = ({ msg, color }) => (
    <Toaster>
        <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={30} spinnerColor={color} />
        <ToasterMsg>{msg}</ToasterMsg>
    </Toaster>
);

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

const MaxButton = styled(Button)`
  position: absolute;
  right: 0;
  padding: 4px 8px;
  margin: 5px;
  border-radius: 4px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.1em;
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

const ButtonAlt = styled(Button)`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  margin: 10px;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
  ${(props) =>
        props.disabled &&
        css`
      &:hover {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
      &:active {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
    `}
`;