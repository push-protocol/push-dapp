import React from "react";
import styled, { css } from 'styled-components';

import { useWeb3React } from '@web3-react/core'
import { addresses, abis } from "@project/contracts";
import EPNSCoreHelper from 'helpers/EPNSCoreHelper';
import { ethers } from "ethers";
import { BigNumber, bigNumberify, formatEther } from 'ethers/utils'

// Create Header
function Feedbox({ epnsReadProvider }) {
  const { account, library } = useWeb3React();

  const [userInterestInfo, setUserInterestInfo] = React.useState(null);

  React.useEffect(() => {

    if (!!account && !!library) {
      initUserInterest();
    }

  }, [account, library]);

  // Create Interest Calculation
  const attachInterestCalculation = () => {
    library.on('block', (blockNumber) => {
      calculateUserInterest(blockNumber);
    });
  }

  const initUserInterest = () => {
    library.getBlockNumber().then((blockNumber) => {
      calculateUserInterest(blockNumber);

      attachInterestCalculation();
    });
  }

  const calculateUserInterest = async (blockNumber) => {
    // get all details
    const contractInstance = new ethers.Contract(addresses.epnscore, abis.epnscore, library);

    const divisor = 10000000;
    const ratio = await EPNSCoreHelper.getFairShareOfUserAtBlock(account, blockNumber, contractInstance);
    const poolFunds = await EPNSCoreHelper.getPoolFunds(contractInstance);
    const userInfo = await EPNSCoreHelper.getUserInfo(account, contractInstance);
    const interestClaimed = userInfo.interestClaimed;

    const adaiERC20 = new ethers.Contract(addresses.aDai, abis.erc20, library);
    const availableFunds = await adaiERC20.balanceOf(addresses.epnscore);

    const totalProfit = availableFunds.sub(poolFunds);
    const userProfit = (ratio.mul(totalProfit)).div(divisor);

    // console.log(ratio.toNumber() / divisor);
    // console.log(formatEther(poolFunds));
    // console.log(formatEther(availableFunds));
    // console.log(formatEther(totalProfit));
    // console.log(formatEther(userProfit));
    // console.log(formatEther(interestClaimed));

    const obj = {
      block: blockNumber,
      pool: Number(formatEther(poolFunds)).toFixed(8),
      available: Number(formatEther(availableFunds)).toFixed(8),
      profit: Number(formatEther(totalProfit)).toFixed(8),
      ratio: ((ratio.toNumber() / divisor) * 100).toFixed(8),
      userProfit: Number(formatEther(userProfit)).toFixed(8),
      interestClaimed: interestClaimed ? Number(formatEther(interestClaimed)).toFixed(8) + " DAI" : "---"
    }

    setUserInterestInfo(obj);

  }

  // Render
  return (
    <Container>
      {userInterestInfo &&
        <InterestInfo>
          <InterestRow>
            <Msg theme="block">Block Number: {userInterestInfo.block}</Msg>
          </InterestRow>
          <InterestRow>
            <Title>Interest Pool:</Title>
            <Msg theme="primary">{userInterestInfo.pool} DAI</Msg>
          </InterestRow>
          <InterestRow>
            <Title>Pool + Interest Generated:</Title>
            <Msg theme="primary">{userInterestInfo.available} DAI</Msg>
          </InterestRow>
          <InterestRow>
            <Title>Entire Pool Profit:</Title>
            <Msg theme="primary">{userInterestInfo.profit} DAI</Msg>
          </InterestRow>
          { userInterestInfo.ratio !=0 &&
            <>
              <InterestRow>
                <Title>User Fair Share Percentage:</Title>
                <Msg theme="secondary">{userInterestInfo.ratio}%</Msg>
              </InterestRow>
              <InterestRow>
                <Title>User Profit:</Title>
                <Msg theme="secondary">{userInterestInfo.userProfit} DAI</Msg>
              </InterestRow>
            </>
          }
          <InterestRow>
            <Title>Interest Claimed:</Title>
            <Msg theme="third">{userInterestInfo.interestClaimed}</Msg>
          </InterestRow>
        </InterestInfo>
      }
      {!userInterestInfo &&
      <>
        Loading Interest Stats...
      </>
      }
    </Container>
  );
}

// css styles
const Container = styled.div`
  padding: 20px;
  font-size: 16px;
  display: flex;
  font-weight: 200;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 40vh;
`

const InterestInfo = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
`

const InterestRow = styled.div`
  margin: 5px;
  padding: 5px;
  border-bottom: 1px solid #eee;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`

const Title = styled.span`
  font-weight: 600;
`

const Msg = styled.span`
  padding: 2px 10px;
  margin: 0px 10px;
  font-size: 12px;
  border-radius: 10px;
  color: #000;

  ${props => props.theme === 'block' && css`
    background: #e20880;
    color: #FFF;
    font-size: 14px;
    margin: 10px 0px;
    font-weight: 600;
  `};

  ${props => props.theme === 'primary' && css`
    background: #e2088011;
  `};

  ${props => props.theme === 'secondary' && css`
    background: #35c5f311;
  `};

  ${props => props.theme === 'third' && css`
    background: #674c9f11;
  `};
`


// Export Default
export default Feedbox;
