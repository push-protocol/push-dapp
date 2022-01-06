import React from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";

import styled, { css } from "styled-components";
import { addresses, abis } from "@project/contracts";
import { ToastContainer, toast } from "react-toastify";

import Loader from "react-loader-spinner";
import Blockies from "components/BlockiesIdenticon";
//   <Blockies opts={{seed: "foo", color: "#dfe", bgcolor: "#a71", size: 15, scale: 3, spotcolor: "#000"}}/>
const ethers = require("ethers");

// Create Header
export default function PoolCard({
  poolName,
  poolAddress,
  tokenAddress,
  getPoolStats,
  getPUSHPoolStats,
  getUserData,
  pushPoolStats,
  userData,
}) {
  const { active, error, account, library, chainId } = useWeb3React();
  const [depositAmountToken, setDepositAmountToken] = React.useState(0);
  const [withdrawAmountToken, setWithdrawAmountToken] = React.useState(0);
  const [harvestEpochValue, setHarvestEpochValue] = React.useState(0);
  const [txInProgress, setTxInProgress] = React.useState(false);

  const depositAmountTokenFarm = async () => {
    var signer = library.getSigner(account);
    let epnsToken = new ethers.Contract(tokenAddress, abis.epnsToken, signer);
    let staking = new ethers.Contract(addresses.staking, abis.staking, signer);
    console.log(depositAmountToken);
    const tx = epnsToken.approve(
      staking.address,
      ethers.BigNumber.from(depositAmountToken).mul(
        ethers.BigNumber.from(10).pow(18)
      )
    );

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

        const tx2 = staking.deposit(
          tokenAddress,
          ethers.BigNumber.from(depositAmountToken).mul(
            ethers.BigNumber.from(10).pow(18)
          )
        );

        tx2
          .then(async (tx) => {
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

              getPoolStats();
              getPUSHPoolStats();
              getUserData();

              setTxInProgress(false);
            } catch (e) {
              toast.update(txToast, {
                render: "Transaction Failed! (" + e.name + ")",
                type: toast.TYPE.ERROR,
                autoClose: 5000,
              });

              setTxInProgress(false);
            }
          })
          .catch((err) => {
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

            setTxInProgress(false);
          });

        setTxInProgress(false);
      } catch (e) {
        toast.update(txToast, {
          render: "Transaction Failed! (" + e.name + ")",
          type: toast.TYPE.ERROR,
          autoClose: 5000,
        });

        setTxInProgress(false);
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

      setTxInProgress(false);
    });
  };

  const withdrawAmountTokenFarm = async () => {
    var signer = library.getSigner(account);
    let staking = new ethers.Contract(addresses.staking, abis.staking, signer);

    const tx = staking.withdraw(
      tokenAddress,
      ethers.BigNumber.from(withdrawAmountToken).mul(
        ethers.BigNumber.from(10).pow(18)
      )
    );

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

        setTxInProgress(false);
      } catch (e) {
        toast.update(txToast, {
          render: "Transaction Failed! (" + e.name + ")",
          type: toast.TYPE.ERROR,
          autoClose: 5000,
        });

        setTxInProgress(false);
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

      setTxInProgress(false);
    });

    getPoolStats();
    getPUSHPoolStats();
    getUserData();
  };

  const harvestTokens = async () => {
    var signer = library.getSigner(account);
    let yieldFarmingPUSH = new ethers.Contract(
      poolAddress,
      abis.yieldFarming,
      signer
    );
    if (harvestEpochValue) {
      const tx = yieldFarmingPUSH.harvest(harvestEpochValue);
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

          setTxInProgress(false);
        } catch (e) {
          toast.update(txToast, {
            render: "Transaction Failed! (" + e.name + ")",
            type: toast.TYPE.ERROR,
            autoClose: 5000,
          });

          setTxInProgress(false);
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

        setTxInProgress(false);
      });
    }
  };

  const massHarvestTokens = async () => {
    var signer = library.getSigner(account);
    let yieldFarmingPUSH = new ethers.Contract(
      poolAddress,
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

        setTxInProgress(false);
      } catch (e) {
        toast.update(txToast, {
          render: "Transaction Failed! (" + e.name + ")",
          type: toast.TYPE.ERROR,
          autoClose: 5000,
        });

        setTxInProgress(false);
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

      setTxInProgress(false);
    });
  };

  const formatTokens = (tokens) => {
    if (tokens) {
      return tokens.div(ethers.BigNumber.from(10).pow(18)).toString();
    }
  };

  return (
    <Container>
      <MainTitle>{poolName} POOL</MainTitle>
      {/* <SubHeading>Your Stake Balance - {formatTokens(details.userPUSHStakeBalance)}</SubHeading> */}
      {pushPoolStats ? (
        <>
          <Heading>
            EPOCH {pushPoolStats.currentEpochPUSH.toString()}/
            {pushPoolStats.totalEpochPUSH}
          </Heading>
          <Heading>
            Current EPOCH Reward{" "}
            <span>
              {formatTokens(pushPoolStats.rewardForCurrentEpoch)} PUSH
            </span>
          </Heading>
        </>
      ) : null}

      {userData ? (
        <>
          <Heading>
            User Expected Reward{" "}
            <span>{formatTokens(userData.potentialUserReward)} PUSH</span>
          </Heading>
          <Heading>
            User Pool Balance{" "}
            <span>{`${formatTokens(
              userData.epochStakeNext
            )} ${poolName}`}</span>
          </Heading>
        </>
      ) : null}

      <input
        placeholder="Amount"
        onChange={(e) => setDepositAmountToken(e.target.value)}
      />
      <Button onClick={depositAmountTokenFarm}>Deposit</Button>
      <input
        placeholder="Amount"
        onChange={(e) => setWithdrawAmountToken(e.target.value)}
      />
      <Button onClick={withdrawAmountTokenFarm}>Withdraw</Button>
      <input
        placeholder="Enter Epoch Id"
        onChange={(e) => setHarvestEpochValue(e.target.value)}
      />
      <Button onClick={harvestTokens}>Harvest</Button>

      <Button onClick={massHarvestTokens}>Mass Harvest</Button>
    </Container>
  );
}

// toast customize
const LoaderToast = ({ msg, color }) => (
  <Toaster>
    <Loader type="Oval" color={color} height={30} width={30} />
    <ToasterMsg>{msg}</ToasterMsg>
  </Toaster>
);

const Container = styled.div`
  padding: 18px;
  background: #fff;
  flex: 1;

  box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: 1px solid rgb(225, 225, 225);

  margin: 10px;

  &:hover {
    opacity: 0.9;
  }
`;

const MainTitle = styled.h2`
  text-transform: uppercase;
`;

const Heading = styled.h5`
  font-weight: 600;
  color: #e20880;
  text-transform: uppercase;
`;

const Button = styled.button`
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
  background: #e20880;
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

const Toaster = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`;

const ToasterMsg = styled.div`
  margin: 0px 10px;
`;
