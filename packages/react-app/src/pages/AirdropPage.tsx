import React, { useState } from "react";
import ReactGA from "react-ga";

import styled, { css, useTheme } from 'styled-components';
import {Section, Content, Item, ItemH, ItemBreak, Para, A, B, H1, H2, H3, Image, P, Span, Anchor, Button, Showoff, FormSubmision, Input, TextField} from 'components/SharedStyling';

import { AiFillHeart } from 'react-icons/ai';
import { BsChevronExpand } from 'react-icons/bs';

import Loader from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';

import { useWeb3React } from '@web3-react/core'
import { addresses, abis } from "@project/contracts";
import { ethers } from "ethers";

import AirdropHelper from 'helpers/AirdropHelper';

import ViewInfoItem from "components/ViewInfoItem";

import {ThemeProvider} from "styled-components";

import { themeLight, themeDark } from "config/Themization";


import * as dotenv from "dotenv";
import UsersDataStore from "singletons/UsersDataStore";
dotenv.config();

// Other Information section
function AirdropPage() {
  // React GA Analytics
  ReactGA.pageview("/airdrop");

  const themes = useTheme();

  const { account, library } = useWeb3React();

  const [controlAt, setControlAt] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [ txInProgress, setTxInProgress ] = React.useState(false);
  const [distributorContract, setDistributorContract] = React.useState(null);
  const [user, setUser] = React.useState(null);

  const [showAnswers, setShowAnswers] = React.useState([]);

  const toggleShowAnswer = (id) => {
    let newShowAnswers = [...showAnswers];
    newShowAnswers[id] = !newShowAnswers[id];

    setShowAnswers(newShowAnswers);
  }

  React.useEffect(() => {
    if (!!(library && account)) {
      let signer = library.getSigner(account);
      console.log(abis.distributor)
      const signerInstance = new ethers.Contract(addresses.distributor, abis.distributor, signer);
      setDistributorContract(signerInstance);
      // const NFTRewardsInstance = new ethers.Contract(addresses.NFTRewards, abis.NFTRewards, signer);
      // setNFTRewardsContract(NFTRewardsInstance);
    }
  }, [account,library]);

  React.useEffect(() => {
    if(distributorContract){
      checkClaim();
    }
  }, [account, distributorContract]);

  // to check wh
  const checkClaim = async () => {
    let user = await AirdropHelper.verifyAddress(account, distributorContract);
    setUser(user)
    if(user)
    setLoading(false)
  }

  // to claim
  const handleClaim = async (user) => {
    if(distributorContract){
      setTxInProgress(true)
      let sendWithTxPromise
      sendWithTxPromise = await distributorContract.claim(user.index, user.account, user.amount, user.proof)
      const tx = await sendWithTxPromise;
      console.log(tx);
      console.log("waiting for tx to finish");
      let txToast = toast.dark(<LoaderToast msg="Waiting for Confirmation..." color="#35c5f3"/>, {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      try {
        await library.waitForTransaction(tx.hash);

        toast.update(txToast, {
          render: "Transaction Completed!",
          type: toast.TYPE.SUCCESS,
          autoClose: 5000
        });

        setTxInProgress(false);
      }
      catch(e) {
        toast.update(txToast, {
          render: "Transaction Failed! (" + e.name + ")",
          type: toast.TYPE.ERROR,
          autoClose: 5000
        });

        setTxInProgress(false);
      }
      setLoading(false);
    }
  }

  // toast customize
  const LoaderToast = ({ msg, color }) => (
    <Toaster>
      <Loader
       type="Oval"
       color={color}
       height={30}
       width={30}
      />
      <ToasterMsg>{msg}</ToasterMsg>
    </Toaster>
  )

  const [darkMode, setDarkMode] = useState(false);


  return (
    <ThemeProvider theme={themes}>
      <Section margin="20px">
        <Content padding="0px 20px 0px">
          <Item align="flex-start">
            <H2 textTransform="uppercase" spacing="0.1em">
              <Span bg="#35c5f3" color="#fff" weight="600" padding="0px 8px">Gratitude</Span><Span weight="200" color={themes.color}> Drop!</Span>
            </H2>
            <H3 color={themes.color}>We would never be here without you! Thanks for the <b color={themes.color}>#PUSH</b>!!!</H3>
          </Item>
        </Content>

        <Content padding="0px 20px 0px 20px">
          <Item align="flex-start">
            <Para margin="10px 0px 0px 0px" color={themes.color}>Thanks for the ton of support, feedback, encouragement and helping us out in every step! As a small token of our gratitude, we are dropping <B color={themes.color}>1200 $PUSH</B> to anyone who:</Para>

            <Para margin="20px 0px 0px 20px" color={themes.color}>- Donated to us on <B color={themes.color}>Gitcoin grants round 6 or 7</B></Para>
            <Para margin="10px 0px 0px 20px" color={themes.color}>- Used our dApp on or before <B color={themes.color}>20th March, 2021</B>: <AMod href="https://app.epns.io" target="_blank" title="Visit our dApp">EPNS dApp</AMod></Para>
          </Item>

          <Item padding="40px 0px 20px 0px">
            {loading &&
              <Loader
               type="Oval"
               color="#35c5f3"
               height={40}
               width={40}
              />
            }

            {!loading && controlAt == 0 &&
              <>
              {user.verified && user.claimable &&
                <EpicButton
                  onClick={() => {handleClaim(user)}}
                >
                  Claim $PUSH Tokens
                </EpicButton>
              }
              {user.verified && !user.claimable &&

                <EpicButton
                  theme="claimed"
                  disabled={true}
                >
                  $PUSH Tokens Claimed
                </EpicButton>
              }
              {!user.verified &&
                  <EpicButton
                    theme="noteligible"
                    disabled={true}
                  >
                    Not eligible for Gratitude Drop
                  </EpicButton>
              }
              </>
            }
          </Item>

        </Content>
      </Section>

      {/* FAQs */}
      <Section themes={themes.mainBg} padding="0px 0px 0px 0px">
        <Content className="contentBox">
          <Item align="stretch" justify="flex-start" margin="-10px 20px 0px 20px">

            {/* Question */}
            <Item align="stretch" margin="0px 0px 0px 0px">
              <QnAItem>
                <Question
                  onClick={() => {toggleShowAnswer(1)}}
                  hover="#e20880"
                >
                  <Span color={themes.color}>
                    What is $PUSH contract address?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"}/>
                </Question>

                {showAnswers[1] &&
                  <Answer>
                    <Span>$PUSH token contract address is <B>0xf418588522d5dd018b425E472991E52EBBeEEEEE</B></Span>
                  </Answer>
                }
              </QnAItem>

              <QnAItem>
                <Question
                  onClick={() => {toggleShowAnswer(2)}}
                  hover="#e20880"
                >
                  <Span color={themes.color}>
                    What is EPNS?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"}/>
                </Question>

                {showAnswers[2] &&
                  <Answer>
                    <Span>Ethereum Push Notification Service (EPNS) is a decentralized protocol allowing Ethereum users to receive notifications for on-chain or off-chain activity.</Span>

                    <Span>EPNS allows Web3 actors (users, dapps, service providers) to create notifications that are triggered if and when a smart contract reaches certain conditions. Other Web3 participants can search, browse, and subscribe to specific notifications and more confidently interact with dapps.</Span>
                  </Answer>
                }
              </QnAItem>

              <QnAItem>
                <Question
                  onClick={() => {toggleShowAnswer(3)}}
                  hover="#e20880"
                >
                  <Span color={themes.color}>
                    Why are push notifications important for Web3?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"}/>
                </Question>

                {showAnswers[3] &&
                  <Answer>
                    <Span>Push notifications have transformed the Web2 ecosystem. They have enabled applications to have more direct relationships with users and have yielded fundamental strategies about marketing, product fit, user behavior, and more. </Span>

                    <Span>The problem with Web2 notifications, however, is that they are entirely created and prescribed by the applications themselves, and are not always net-useful to the end user. Users rarely have a choice about what kinds of notifications they wish to receive, and more often than not, notifications are purely marketing vehicles to drive revenue for the applications.</Span>

                    <Span><i><B>Decentralized notifications</B></i>, on the other hand, provide the emerging Web3 ecosystem with the benefits of a robust notification ecosystem without the exploitative or centralized drawbacks of Web2 notifications.</Span>

                    <Span>Applications need ways to communicate with users in more immediate and event-initiated ways than through Twitter, Discord, or email. Users deserve to control what notifications they receive, and should benefit from the open source nature of Web3 by requesting notifications about protocol behavior.</Span>
                  </Answer>
                }
              </QnAItem>

              <QnAItem>
                <Question
                  onClick={() => {toggleShowAnswer(4)}}
                  hover="#e20880"
                >
                  <Span color={themes.color}>
                    How can I keep up with EPNS?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"}/>
                </Question>

                {showAnswers[4] &&
                  <Answer>
                    <Span>Join our <AMod href="https://t.me/epnsproject" target="_blank" title="Join our EPNS's Telegram channel">Telegram</AMod>, follow us on <AMod href="https://twitter.com/epnsproject" target="_blank" title="Join our EPNS's Twitter channel">Twitter</AMod>, and sign up for our 5 minute <AMod href="https://epns.substack.com/" target="_blank" title="Join our EPNS's Twitter channel">weekly product updates</AMod>.</Span>
                  </Answer>
                }
              </QnAItem>


            </Item>
          </Item>
        </Content>
      </Section>
    </ThemeProvider>
  );
}

// css styles
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  font-weight: 200;
  align-content: center;
  align-items: center;
  justify-content: center;

  max-height: 80vh;
`

const ContainerInfo = styled.div`
  padding: 20px;
`
const InfoBox = styled.div`
  padding: 10px 20px;
  display: block;
  align-self: stretch;
  background: #fafafa;
`
const Continue = styled.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 20px;
  font-size: 14px;
  background: ${props => props.theme || '#674c9f'};
  margin: 30px 0px 0px 0px;
  border-radius: 8px;
  padding: 16px;
  font-size: 16px;
  font-weight: 400;
`

const ChannelTitleLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: #e20880;
  font-size: 20px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    pointer: hand;
  }
`
const AppLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: #e20880;
  font-size: 20px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    pointer: hand;
  }
`
const AppLinkText = styled.div`
  text-decoration: none;
  font-weight: 600;
  color: #e20880;
  font-size: 20px;
`
const ChannelInfo = styled.div`
  flex: 1;
  margin: 5px 10px;
  min-width: 120px;
  flex-grow: 4;
  flex-direction: column;
  display: flex;
`

const ChannelTitle = styled.div`
  margin-bottom: 5px;
`

const Toaster = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`

const ToasterMsg = styled.div`
  margin: 0px 10px;
`
const Question = styled(Button)`
  align-items: stretch;
  align-self: stretch;
`

const Answer = styled(Item)`
  align-items: stretch;
  align-self: stretch;

`

const QnAItem = styled(Item)`
  align-items: stretch;
  align-self: stretch;
  flex: auto;
  margin: 15px 0px;
  border: 1px solid #fafafa;
  border-radius: 10px;
  box-shadow: 0px 5px 20px -10px rgb(0 0 0 / 0.20);
  overflow: hidden;

  & ${Question} {
    background: transparent;
    justify-content: flex-start;
    text-transform: uppercase;

    & ${Span} {
      font-weight: 400;
      letter-spacing: 0.2em;
      margin-left: 10px;
      flex: 1;
    }

    &:hover {
      & ${Span} {
        color: #fff;
      }
    }
  }

  & ${Answer} {
    border: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px 15px;
    align-items: flex-start;
    background: #fff;

    & ${Span} {
      line-height: 1.5em;
      margin: 10px;
      color: #000 ;
      font-size: 1.05em;
    }
  }
`

const AMod = styled(A)`
  color: #e20880;
  font-weight: 500;
`

const EpicButton = styled(A)`
  padding: 15px 15px;
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
  background: ${prop => prop.theme===('claimed' || 'noteligible') ? '#000' : 'linear-gradient(273deg, #674c9f 0%, rgba(226,8,128,1) 100%)'};
`

// Export Default
export default AirdropPage;
