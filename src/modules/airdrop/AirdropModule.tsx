// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { useState } from 'react';

// External Packages
import ReactGA from 'react-ga';
import { BsChevronExpand } from 'react-icons/bs';
import { toast } from 'react-toastify';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import AirdropHelper from 'helpers/AirdropHelper';
import { A, B, Button, Content, H2, H3, Item, Para, Section, Span } from 'primaries/SharedStyling';

// Internal Configs
import { abis, addresses, appConfig } from 'config';
import GLOBALS, { device, globalsMargin } from 'config/Globals';

// Other Information section
const AirdropModule = () => {
  const theme = useTheme();

  const { account, library, chainId } = useWeb3React();
  const onCoreNetwork = chainId === appConfig.coreContractChain;

  const [controlAt, setControlAt] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [txInProgress, setTxInProgress] = React.useState(false);
  const [distributorContract, setDistributorContract] = React.useState(null);
  const [user, setUser] = React.useState(null);

  const [showAnswers, setShowAnswers] = React.useState([]);

  const toggleShowAnswer = (id) => {
    let newShowAnswers = [...showAnswers];
    newShowAnswers[id] = !newShowAnswers[id];

    setShowAnswers(newShowAnswers);
  };

  React.useEffect(() => {
    if (!onCoreNetwork) {
      const url = window.location.origin;
      window.location.replace(`${url}/#/notavailable`);
    }
  });

  React.useEffect(() => {
    if (!!(library && account)) {
      let signer = library.getSigner(account);
      console.log(abis.distributor);
      const signerInstance = new ethers.Contract(addresses.distributor, abis.distributor, signer);
      setDistributorContract(signerInstance);
      // const NFTRewardsInstance = new ethers.Contract(addresses.NFTRewards, abis.NFTRewards, signer);
      // setNFTRewardsContract(NFTRewardsInstance);
    }
  }, [account, library]);

  React.useEffect(() => {
    if (distributorContract) {
      checkClaim();
    }
  }, [account, distributorContract]);

  // to check wh
  const checkClaim = async () => {
    let user = await AirdropHelper.verifyAddress(account, distributorContract);
    setUser(user);
    if (user) setLoading(false);
  };

  // to claim
  const handleClaim = async (user) => {
    if (distributorContract) {
      setTxInProgress(true);
      let sendWithTxPromise;
      sendWithTxPromise = await distributorContract.claim(user.index, user.account, user.amount, user.proof);
      const tx = await sendWithTxPromise;
      console.log(tx);
      console.log('waiting for tx to finish');
      let txToast = toast.dark(<LoaderToast msg="Waiting for Confirmation..." color="#35c5f3" />, {
        position: 'bottom-right',
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
          render: 'Transaction Completed!',
          type: toast.TYPE.SUCCESS,
          autoClose: 5000,
        });

        setTxInProgress(false);
      } catch (e) {
        toast.update(txToast, {
          render: 'Transaction Failed! (' + e.name + ')',
          type: toast.TYPE.ERROR,
          autoClose: 5000,
        });

        setTxInProgress(false);
      }
      setLoading(false);
    }
  };

  // toast customize
  const LoaderToast = ({ msg, color }) => (
    <Toaster>
      <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={30} spinnerColor={color} />
      <ToasterMsg>{msg}</ToasterMsg>
    </Toaster>
  );

  const [darkMode, setDarkMode] = useState(false);

  return (
    <Container>
      <ItemVV2 alignSelf="stretch" justifyContent="flex-start" margin="0 0 40px 0">
        <H2>
          <Span weight="400" size="32px" color={theme.color}>
            Gratitude Drop
          </Span>
        </H2>
        <Span
          color={theme.default.secondaryColor}
          weight="400"
          size="16px"
          textTransform="none"
          textAlign="center"
          spacing="0.03em"
          margin="0px 0px">
          We would never be here without you! Thanks for the PUSH!!!
        </Span>
      </ItemVV2>

      <Item align="flex-start" padding="20px 0px">
        <Para margin="10px 0px 0px 0px" color={theme.color}>
          Thanks for the ton of support, feedback, encouragement and helping us out in every step! As a small token of
          our gratitude, we are dropping <B color={theme.color}>1200 $PUSH</B> to anyone who:
        </Para>

        <Para margin="20px 0px 0px 20px" color={theme.color}>
          - Donated to us on <B color={theme.color}>Gitcoin grants round 6 or 7</B>
        </Para>
        <Para margin="10px 0px 0px 20px" color={theme.color}>
          - Used our dApp on or before <B color={theme.color}>20th March, 2021</B>:{' '}
          <AMod href="https://app.epns.io" target="_blank" title="Visit our dApp">
            Push (EPNS) dApp
          </AMod>
        </Para>
      </Item>

      <Item padding="40px 0px 20px 0px">
        {loading && <LoaderSpinner type={LOADER_TYPE.SEAMLESS} />}

        {!loading && controlAt == 0 && (
          <>
            {user.verified && user.claimable && (
              <EpicButton
                onClick={() => {
                  handleClaim(user);
                }}>
                Claim $PUSH Tokens
              </EpicButton>
            )}
            {user.verified && !user.claimable && (
              <EpicButton theme="claimed" disabled={true}>
                $PUSH Tokens Claimed
              </EpicButton>
            )}
            {!user.verified && (
              <EpicButton theme="noteligible" disabled={true}>
                Not eligible for Gratitude Drop
              </EpicButton>
            )}
          </>
        )}
      </Item>

      {/* FAQs */}
      <Item self="stretch" align="stretch" justify="flex-start" margin="40px 0px 20px 0px">
        {/* Question */}
        <Item align="stretch" margin="0px 0px 0px 0px">
          <QnAItem>
            <Question
              onClick={() => {
                toggleShowAnswer(1);
              }}
              hover="#e20880">
              <Span color={theme.color}>What is $PUSH contract address?</Span>
              <BsChevronExpand size={20} color={'#ddd'} />
            </Question>

            {showAnswers[1] && (
              <Answer>
                <Span>
                  $PUSH token contract address is <B>0xf418588522d5dd018b425E472991E52EBBeEEEEE</B>
                </Span>
              </Answer>
            )}
          </QnAItem>

          <QnAItem>
            <Question
              onClick={() => {
                toggleShowAnswer(2);
              }}
              hover="#e20880">
              <Span color={theme.color}>What is Push (EPNS)?</Span>
              <BsChevronExpand size={20} color={'#ddd'} />
            </Question>

            {showAnswers[2] && (
              <Answer>
                <Span>
                  Ethereum Push Notification Service (EPNS) is a decentralized protocol allowing Ethereum users to
                  receive notifications for on-chain or off-chain activity.
                </Span>

                <Span>
                  Push (EPNS) allows Web3 actors (users, dapps, service providers) to create notifications that are
                  triggered if and when a smart contract reaches certain conditions. Other Web3 participants can search,
                  browse, and subscribe to specific notifications and more confidently interact with dapps.
                </Span>
              </Answer>
            )}
          </QnAItem>

          <QnAItem>
            <Question
              onClick={() => {
                toggleShowAnswer(3);
              }}
              hover="#e20880">
              <Span color={theme.color}>Why are push notifications important for Web3?</Span>
              <BsChevronExpand size={20} color={'#ddd'} />
            </Question>

            {showAnswers[3] && (
              <Answer>
                <Span>
                  Push notifications have transformed the Web2 ecosystem. They have enabled applications to have more
                  direct relationships with users and have yielded fundamental strategies about marketing, product fit,
                  user behavior, and more.{' '}
                </Span>

                <Span>
                  The problem with Web2 notifications, however, is that they are entirely created and prescribed by the
                  applications themselves, and are not always net-useful to the end user. Users rarely have a choice
                  about what kinds of notifications they wish to receive, and more often than not, notifications are
                  purely marketing vehicles to drive revenue for the applications.
                </Span>

                <Span>
                  <i>
                    <B>Decentralized notifications</B>
                  </i>
                  , on the other hand, provide the emerging Web3 ecosystem with the benefits of a robust notification
                  ecosystem without the exploitative or centralized drawbacks of Web2 notifications.
                </Span>

                <Span>
                  Applications need ways to communicate with users in more immediate and event-initiated ways than
                  through Twitter, Discord, or email. Users deserve to control what notifications they receive, and
                  should benefit from the open source nature of Web3 by requesting notifications about protocol
                  behavior.
                </Span>
              </Answer>
            )}
          </QnAItem>

          <QnAItem>
            <Question
              onClick={() => {
                toggleShowAnswer(4);
              }}
              hover="#e20880">
              <Span color={theme.color}>How can I keep up with Push (EPNS)?</Span>
              <BsChevronExpand size={20} color={'#ddd'} />
            </Question>

            {showAnswers[4] && (
              <Answer>
                <Span>
                  Join our{' '}
                  <AMod
                    href="https://discord.com/invite/YVPB99F9W5"
                    target="_blank"
                    title="Join our Push (EPNS)'s Telegram channel">
                    Discord
                  </AMod>
                  , follow us on{' '}
                  <AMod href="https://twitter.com/epnsproject" target="_blank" title="Join our Push (EPNS)'s Twitter channel">
                    Twitter
                  </AMod>
                  , and sign up for our 5 minute{' '}
                  <AMod href="https://epns.substack.com/" target="_blank" title="Join our Push (EPNS)'s Twitter channel">
                    weekly product updates
                  </AMod>
                  .
                </Span>
              </Answer>
            )}
          </QnAItem>
        </Item>
      </Item>
    </Container>
  );
};
export default AirdropModule;

// Define how the module is fitted, define it align-self to strect to fill entire bounds
// Define height: inherit to cover entire height
const Container = styled(Section)`
  align-items: center;
  align-self: center;
  background: ${(props) => props.theme.default.bg};
  border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${globalsMargin.MINI_MODULES.DESKTOP.RIGHT} - ${globalsMargin.MINI_MODULES.DESKTOP.LEFT} -
      ${GLOBALS.ADJUSTMENTS.PADDING.BIG} - ${GLOBALS.ADJUSTMENTS.PADDING.BIG}
  );
  padding: ${GLOBALS.ADJUSTMENTS.PADDING.BIG};
  position: relative;
  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${globalsMargin.MINI_MODULES.TABLET.RIGHT} - ${globalsMargin.MINI_MODULES.TABLET.LEFT} -
        ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }

  @media ${device.mobileM} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${globalsMargin.MINI_MODULES.MOBILE.RIGHT} - ${globalsMargin.MINI_MODULES.MOBILE.LEFT} -
        ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }
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
const Question = styled(Button)`
  align-items: stretch;
  align-self: stretch;
`;

const Answer = styled(Item)`
  align-items: stretch;
  align-self: stretch;
`;
const QnAItem = styled(Item)`
  align-items: stretch;
  align-self: stretch;
  flex: auto;
  margin: 15px 0px;
  border: 1px solid ${(props) => props.theme.default.border};
  border-radius: 10px;
  box-shadow: 0px 5px 20px -10px rgb(0 0 0 / 0.2);
  overflow: hidden;
  & ${Question} {
    background: ${(props) => props.theme.qnaBg};
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
    border: 1px solid ${(props) => props.theme.default.border};
    border-top: 1px solid ${(props) => props.theme.default.border};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px 15px;
    margin: -1px;
    margin-top: 0px;
    align-items: flex-start;
    background: ${(props) => props.theme.qnaBg};
    & ${Span} {
      line-height: 1.5em;
      margin: 10px;
      color: ${(props) => props.theme.default.color};
      font-size: 1.05em;
    }
  }
`;

const AMod = styled(A)`
  color: #e20880;
  font-weight: 500;
`;

const EpicButton = styled(A)`
  padding: 15px 15px;
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
  background: ${(prop) =>
    prop.theme === ('claimed' || 'noteligible')
      ? '#000'
      : 'linear-gradient(273deg, #674c9f 0%, rgba(226,8,128,1) 100%)'};
`;
