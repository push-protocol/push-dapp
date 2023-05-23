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
import useModalBlur, { MODAL_POSITION } from 'hooks/useModalBlur';
import StakingModalComponent from './StakingModalComponent';
import { formatTokens, numberWithCommas } from 'helpers/StakingHelper';


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

            {(userDataLP && lpPoolStats) ? (
                <>
                    {/* Top Section */}
                    <ItemVV2 margin="0px 0px 20px 0px">
                        <Heading >Uniswap V2 LP Staking Pool</Heading>
                        <SecondaryText>
                            Current APR <SpanV2 color="#D53A94">{lpPoolStats?.stakingAPR}%</SpanV2>
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
                                    {numberWithCommas(formatTokens(lpPoolStats?.rewardForCurrentEpoch))} PUSH
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
                                    {numberWithCommas(formatTokens(lpPoolStats?.poolBalance))} UNI-V2
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
                            <Span padding="0px 5px 0px 0px">Current Epoch</Span>
                            <B>
                                {Math.min(lpPoolStats?.currentEpochPUSH, lpPoolStats?.totalEpochPUSH).toString()}
                                /
                                {lpPoolStats?.totalEpochPUSH}
                            </B>
                        </ItemHV2>

                        {/* Deposit Cash Data */}
                        <ItemVV2

                        // padding={loadingUserData ? "60px " : "0px"}
                        >
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



                        </ItemVV2>

                    </ItemVV2>

                    {/* Bottom Section */}
                    <ItemVV2 padding=" 0px 14px" margin="24px 0px 24px 0px">
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
                    </ItemVV2>


                </>
            ) : (
                <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={50} spinnerColor="#D53A94" />
            )}





        </Container>

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