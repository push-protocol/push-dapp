// React + Web3 Essentials
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { Fragment } from "react";

// External Packages
import styled, { useTheme } from "styled-components";
import { Content, Section } from "./SharedStyling";

// Internal Components
import UtilityHelper from 'helpers/UtilityHelper';
import { Button, Item, Span } from "primaries/SharedStyling";

// Internal Configs
import { abis, addresses, appConfig } from "config";

const StakingInfo = ({channelStakeFees, setStakeFeesChoosen, setStepFlow,setProcessingInfo}) => {
  const { chainId, library, account } = useWeb3React();

  const theme = useTheme();
  
  //mint Dai
  const mintPushToken = async () => {
    try {
      var signer = library.getSigner(account);
      let pushTokenContract = new ethers.Contract(addresses.pushToken, abis.pushToken, signer);
      console.log({
        pushTokenContract,
      });
      console.log(1);
      let pushTokenAmount = 100;
      const amount = ethers.utils.parseUnits(pushTokenAmount.toString(), 18);
      console.log(amount);
      var mintTransactionPromise = pushTokenContract.mint(amount);
      console.log(3);
      const tx = await mintTransactionPromise;
      console.log(tx);
      await library.waitForTransaction(tx.hash);
      console.log(4);
      setProcessingInfo("100 Push Tokens minted successfully!");
      console.log("Transaction Completed");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      {/* <Content padding="0px 0px 0px 0px"> */}
        <ItemContent>
          <Item self="center" maxWidth="800px" width="100%">
            <TabSpace>
              <p>
                Amount for Staking
              </p>

              <b>
              {channelStakeFees} $PUSH
              </b>
            </TabSpace>


            <TextSpace>
                <Span color={theme.default.secondaryColor} size="15px" weight="500" spacing="-0.011em" line="30px">Make sure you have sufficient balance before moving to the next steps.</Span>

                {appConfig.appEnv !== 'prod' && 
                  <>
                    <AnchorLink href='https://faucet.paradigm.xyz/' target="_blank">ETH Faucet</AnchorLink>
                    
                    <Minter
                      onClick={() => {
                        mintPushToken();
                      }}
                    >
                        <PoolShare>Get Free PUSH for Channel</PoolShare>
                    </Minter>
                  </>
                }
            </TextSpace>
          </Item>

        <Item width="12.2em" self="stretch" align="stretch" margin="100px auto 50px auto">
          <Button
            bg="#e20880"
            color="#fff"
            flex="1"
            radius="15px"
            padding="20px 10px"
            onClick={() => {
              setStakeFeesChoosen(true);
              setStepFlow(1);
            }}
          >
            <Span
              color="#fff"
              weight="600"
              textTransform="none"
              line="22px"
              size="16px"
            >
              Next
            </Span>
          </Button>
        </Item>
      </ItemContent>
      {/* </Content> */}
    </Fragment>
  );
};
const TabSpace = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100px;
  border-radius: 20px;
  background-color: #f4f5fa;
  margin-top: 20px;
  align-items: center;
  p {
    text-align: center;
    color: #1E1E1E;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: -0.011em;
    margin-left:50px;
    @media (max-width: 768px) {
    margin-left:20px;
    font-size: 18px;
    }
  }
  b {
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 150%;
    text-align: right;
    letter-spacing: -0.019em;
    color: #CF1C84;
    margin-right:50px;
    @media (max-width: 758px) {
    margin-right:20px;
    font-size: 26px;
    }
  }
`;

const ItemContent = styled(Item)`
    padding: 40px 0 0 0;
    self: stretch;
    align: flex-start;
    justify: center;

    @media (max-width: 768px){
      padding: 10px 0 0 0;
    }
`

const TextSpace = styled.div`
  width: 97%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 40px;
  align-items: flex-start;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
  @media (max-width: 1224px) {
    width: 100%; 
  }

  @media (max-width: 768px) {
    width: 100%; 
    margin-top: 20px;
  }
`;

const AnchorLink = styled.a`
  text-decoration: none;
  text-transform: none;
  color: #cf1c84;
  line-height: 24px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  margin: 0 2em;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 600px) {
    margin-top:1em;
  }
`;

const Body = styled.div`
  margin: 0px auto;
`

const Minter = styled.div`
  display: flex;
`;

const Pool = styled.div`
  margin: 0px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ChannelMetaBox = styled.label`
  color: #fff;
`;

const PoolShare = styled(ChannelMetaBox)`
  text-decoration: none;
  text-transform: none;
  color: #cf1c84;
  line-height: 24px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 0 2em;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 600px) {
    margin-top:1em;
  }
`;

export default StakingInfo;