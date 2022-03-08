import React, { useState } from "react";

import styled, { css, useTheme } from 'styled-components';
import {Section, Content, Item, ItemH, ItemBreak, A, B, H1, H2, H3, Para, Image, P, Span, Anchor, Button, Showoff, FormSubmision, Input, TextField} from 'components/SharedStyling';

import { BsChevronExpand } from 'react-icons/bs';

import Loader from 'react-loader-spinner'
import { Waypoint } from "react-waypoint";

import { useWeb3React } from '@web3-react/core'
import { addresses, abis } from "@project/contracts";
import NFTHelper from 'helpers/NFTHelper';
import { ethers } from "ethers";

import DisplayNotice from "components/DisplayNotice";
import ViewNFTItem from "components/ViewNFTItem";
import MyNFTs from "components/MyNFTs";
import AllNFTs from "components/AllNFTs";
import TransferNFT from "components/TransferNFT";

import {ThemeProvider} from "styled-components";

import { themeLight, themeDark } from "config/Themization";


// Create Header
function NFTPage({ epnsReadProvider, epnsWriteProvide }) {
  const { account, library } = useWeb3React();

  const themes = useTheme();
  const [darkMode, setDarkMode] = useState(false);

  const [tokenId, setTokenId] = React.useState(null);
  const [controlAt, setControlAt] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const [showAnswers, setShowAnswers] = React.useState([]);

  const toggleShowAnswer = (id) => {
    let newShowAnswers = [...showAnswers];
    newShowAnswers[id] = !newShowAnswers[id];

    setShowAnswers(newShowAnswers);
  }

  React.useEffect(() => {
    userClickedAt(1);
  }, [account]);

  // handle user action at control center
  const userClickedAt = (controlIndex) => {
    setControlAt(controlIndex);
  }

  return (
    <ThemeProvider theme={themes}>
      <Section>
        <Content padding="20px 20px 0px">
          <Item align="flex-start" margin="0px 20px 0px 20px">
            <H2 textTransform="uppercase" spacing="0.1em">
              <Span bg="#674c9f" color="#fff" weight="600" padding="0px 8px">$ROCKSTAR</Span><Span weight="200" color={themes.color}> of </Span><Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">EPNS</Span>
            </H2>
            <H3 color={themes.greyText}>Thank you <B color={themes.color}>community</B> for all your support. Over the next year, we are excited to continue returning our gratitude!</H3>
          </Item>

          <Item align="stretch" justify="flex-start" margin="0px 20px 0px 20px">

            {/* Question */}
            <Item align="stretch" margin="0px 0px 20px 0px">
              <QnAItem>
                <Question
                  onClick={() => {toggleShowAnswer(1)}}
                  hover="#e20880"
                >
                  <Span color={themes.color}>
                    Does $ROCKSTAR of EPNS NFTs carry something along with NFTs?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"}/>
                </Question>

                {showAnswers[1] &&
                  <Answer>
                    <Span>
                      Yes, Each <B>$ROCKSTAR</B> contains <B>2400 $PUSH</B> tokens that can be claimed instantly!!! <AMod href="https://medium.com/ethereum-push-notification-service/push-token-economics-d7f566c29b1a" target="_blank" title="Read more about $PUSH tokeneconomics">Learn about $PUSH Token Economics.</AMod>
                    </Span>
                  </Answer>
                }
              </QnAItem>

              <QnAItem>
                <Question
                  onClick={() => {toggleShowAnswer(2)}}
                  hover="#e20880"
                >
                  <Span color={themes.color}>
                    How to get $ROCKSTAR of EPNS?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"}/>
                </Question>

                {showAnswers[2] &&
                  <Answer>
                    <Span>
                      We’ll be distributing one NFT a week (every Monday) to one community member who does something to help us push the envelope forward. <AMod href="https://medium.com/ethereum-push-notification-service/kicking-off-the-epns-nft-community-drops-6a5c49808cf" target="_blank" title="Read how to get $ROCKSTAR of EPNS">Here are some ways by which you can get one!</AMod>
                    </Span>
                  </Answer>
                }
              </QnAItem>

            </Item>
          </Item>
        </Content>

        <Content padding="0px 20px 20px" bg="#eee">
          <Item align="flex-start" margin="0px 20px 0px 20px">
            
            <Controls>
              <SubscribeButton index={0} active={controlAt == 0 ? 1 : 0} onClick={() => {userClickedAt(0)}} >
                <ActionTitle >My NFTs</ActionTitle>
              </SubscribeButton>
              <SubscribeButton index={1} active={controlAt == 1 ? 1 : 0} onClick={() => {userClickedAt(1)}}>
                <ActionTitle >All NFTs</ActionTitle>
              </SubscribeButton>
            </Controls>
           

            {controlAt === 0 &&
              <MyNFTs
                controlAt={controlAt}
                setControlAt={setControlAt}
                setTokenId={setTokenId}
              />
            }
            {controlAt === 1 &&
              <AllNFTs
                controlAt={controlAt}
                setControlAt={setControlAt}
                setTokenId={setTokenId}
              />
            }
            {controlAt === 2 && tokenId &&
              <TransferNFT tokenId={tokenId}/>
            }
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

const Controls = styled.div`
  flex: 0;
  display: flex;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const ContainerInfo = styled.div`
  padding: 20px;
`

const Items = styled.div`
  display: block;
  align-self: stretch;
  padding: 10px 20px;
  overflow-y: scroll;
  background: #fafafa;
`

const ChannelActionButton = styled.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: left;
  // align-items: center;
  justify-content: flex-end;
  // justify-content: center;
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
  ${ props => props.disabled && css`
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
`

const SubscribeButton = styled(ChannelActionButton)`
  background: #e20880;
`

const ActionTitle = styled.span`
  ${ props => props.hideit && css`
    visibility: hidden;
  `};
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

// Export Default
export default NFTPage;
