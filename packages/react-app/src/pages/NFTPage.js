import React from "react";
import ReactGA from "react-ga";

import styled, { css, useTheme } from 'styled-components';
import {Section, Content, Item, A, B, H2, H3, Span, Button} from '../primaries/SharedStyling';

import { BsChevronExpand } from 'react-icons/bs';

import { useWeb3React } from '@web3-react/core'
import MyNFTs from "components/MyNFTs";
import MyNFTsV2 from "components/MyNFTsV2";
import AllNFTs from "components/AllNFTs";
import AllNFTsV2 from "components/AllNFTsV2";
import TransferNFT from "components/TransferNFT";
import TransferNFTv2 from "components/TransferNFTv2";

import {ThemeProvider} from "styled-components";

// Create Header
function NFTPage() {
  // React GA Analytics
  ReactGA.pageview("/rockstars");

  const { account } = useWeb3React();

  const themes = useTheme();

  const [tokenId, setTokenId] = React.useState(null);
  const [controlAt, setControlAt] = React.useState(1);
  const [version, setVersion] = React.useState(2);

  const [showAnswers, setShowAnswers] = React.useState([]);

  const toggleShowAnswer = (id) => {
    let newShowAnswers = [...showAnswers];
    newShowAnswers[id] = !newShowAnswers[id];

    setShowAnswers(newShowAnswers);
  }

  React.useEffect(() => {
    userClickedAt(2);
  }, [account]);

  // handle user action at control center
  const userClickedAt = (controlIndex) => {
    setVersion(controlIndex);
  };

  const handleChange = (e) => {
    if (e.target.checked) {
      setControlAt(0);
    } else {
      setControlAt(1);
    }
  };

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
              <SubscribeButton
                className={version === 2 ? "v2" : "v1"}
                // index={2}
                // active={version == 0 ? 1 : 0}
                onClick={() => {
                  userClickedAt(2);
                }}
              >
                <ActionTitle>ROCKSTAR V2</ActionTitle>
              </SubscribeButton>

              <SubscribeButton
                className={version === 1 ? "v2" : "v1"}
                // index={1}
                // active={version == 1 ? 1 : 0}
                onClick={() => {
                  userClickedAt(1);
                }}
              >
                <ActionTitle>ROCKSTAR V1</ActionTitle>
              </SubscribeButton> 

              <CheckSpace>
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={handleChange}
                />
                {/* <span className=""></span> */}
                Show mine
              </CheckSpace>
            </Controls>
           

            {controlAt === 0 && version === 1 && (
              <MyNFTs
                controlAt={controlAt}
                setControlAt={setControlAt}
                setTokenId={setTokenId}
              />
            )}

            {controlAt === 0 && version === 2 && (
              <MyNFTsV2
                controlAt={controlAt}
                setControlAt={setControlAt}
                setTokenId={setTokenId}
              />
            )}
            
            {/* NFTs version 1 */}
            {controlAt === 1 && version === 1 && (
              <AllNFTs
                controlAt={controlAt}
                setControlAt={setControlAt}
                setTokenId={setTokenId}
              />
            )}

            {/* NFTs version 2 */}
             {controlAt === 1 && version === 2 && (
              <AllNFTsV2
                controlAt={controlAt}
                setControlAt={setControlAt}
                setTokenId={setTokenId}
              />
            )}
            {controlAt === 2 && tokenId && <TransferNFT tokenId={tokenId} />}
            {controlAt === 3 && tokenId && <TransferNFTv2 tokenId={tokenId} />}
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
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const CheckSpace = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  background-color: #adb5bd;
  height: 20px;
  padding: 0px 5px;
  color: white;
  input.checkbox {
    width: 11px;
    height: 11px;
    margin-right: 5px;
    border: 1px solid transparent;
    // -webkit-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    background-color: white;
    &:checked {
      background-color: #E10780;
      border: 1px solid transparent;
    }
  }
`;

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

const ChannelRockstarButton = styled.button`
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
  // border-radius: 5px;
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

const SubscribeButton = styled(ChannelActionButton)`
  &.v1 {
    background-color: #adb5bd;
  }
  &.v2 {
    background-color: #35c5f3;
  }
  border-radius: 0px;
  font-size: 1rem;
  letter-spacing: 0.1rem;
`;

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
  border: 1px solid ${props => props.theme.qnaBgBorder};
  border-radius: 10px;
  box-shadow: 0px 5px 20px -10px rgb(0 0 0 / 0.20);
  overflow: hidden;

  & ${Question} {
    background: ${props => props.theme.qnaBg};
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
