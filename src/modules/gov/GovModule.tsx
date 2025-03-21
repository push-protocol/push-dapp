// React + Web3 Essentials
import { ethers } from 'ethers';
import { useState, useEffect, useContext } from 'react';

// External Packages
import ReactGA from 'react-ga';
import { toast } from 'react-toastify';
import styled, { css, useTheme } from 'styled-components';

// Internal Components
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import EPNSCoreHelper from 'helpers/EPNSCoreHelper';
import Blockies from 'primaries/BlockiesIdenticon';
import { A, B, Button as ButtonSS, H2, H3, Input, Item, ItemH, LI, Section, Span, UL } from 'primaries/SharedStyling';
import { Box, Button } from 'blocks';
import LoaderSpinner from 'components/reusables/loaders/LoaderSpinner';
import { createTransactionObject } from 'helpers/GaslessHelper';
import { executeDelegateTx } from 'helpers/WithGasHelper';
import { useResolveWeb3Name } from 'hooks/useResolveWeb3Name';
import { AppContext } from 'contexts/AppContext';
import { AppContextType } from 'types/context';
import { useAccount } from 'hooks';

// Internal Configs
import { abis, addresses, appConfig } from 'config/index.js';
import GLOBALS, { device, globalsMargin } from 'config/Globals';
import { shortenText } from 'helpers/UtilityHelper';
const delegateesJSON = require('config/delegatees.json');

// Constants
const VOTING_TRESHOLD = 75000; //the treshold for delegates
const PUSH_BALANCE_TRESHOLD = 100; //minimum number of push
const GAS_LIMIT = 50; //dollars limit of gas;

// Create Governance Module
const GovModule = () => {
  // React GA Analytics
  ReactGA.pageview('/governance');

  // setup theme (styled components)
  const theme = useTheme();

  const { web3NameList }: AppContextType = useContext(AppContext);
  const { account, provider, chainId } = useAccount();

  const onCoreNetwork = chainId === appConfig.coreContractChain;

  const [dashboardLoading, setDashboardLoading] = useState(true);
  const [txInProgress, setTxInProgress] = useState(false);
  const [epnsToken, setEpnsToken] = useState(null);
  const [tokenBalance, setTokenBalance] = useState(null);
  const [prettyTokenBalance, setPrettyTokenBalance] = useState(null);

  const [showDelegateePrompt, setShowDelegateePrompt] = useState(false);
  const [delegatee, setDelegatee] = useState(null);

  const [selfVotingPower, setSelfVotingPower] = useState(null);
  const [newDelegateeAddress, setNewDelegateeAddress] = useState('0x');
  const [newDelegateeVotingPower, setNewDelegateeVotingPower] = useState(null);
  const [signerObject, setSignerObject] = useState(null);
  const transactionMode = 'withgas';

  // Resolving web3 names
  useResolveWeb3Name(account);
  const web3Name = web3NameList[account];

  useEffect(() => {
    if (!onCoreNetwork) {
      const url = window.location.origin;
      window.location.replace(`${url}/#/notavailable`);
    }
  });

  useEffect(() => {
    console.debug(account);
    if (!!(provider && account)) {
      let signer = provider.getSigner(account);
      setSignerObject(signer);
      const epnsTokenContract = new ethers.Contract(addresses.epnsToken, abis.epnsToken, signer);
      setEpnsToken(epnsTokenContract);
    }
  }, [account]);

  useEffect(() => {
    if (epnsToken) {
      getMyInfo();
    }
  }, [epnsToken, account, provider, prettyTokenBalance, tokenBalance]);

  useEffect(() => {
    setDashboardLoading(false);
  }, [account]);

  const isValidAddress = (address) => {
    if (ethers.utils.isAddress(address)) {
      return true;
    } else {
      toast.dark('Invalid address!', {
        position: 'bottom-right',
        type: toast.TYPE.ERROR,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
  };

  const getVotingPower = async (address) => {
    try {
      const votingPower = await EPNSCoreHelper.getVotingPower(address, epnsToken, true);
      setNewDelegateeVotingPower(votingPower);
    } catch (err) {
      console.error('🚀 ~ file: Delegate.tsx ~ line 86 ~ getVotingPower ~ err', err);
    }
  };

  const getMyInfo = async () => {
    let bal = await epnsToken?.balanceOf(account);
    let decimals = await epnsToken?.decimals();
    let tokenBalance = await Number(bal / Math.pow(10, decimals));
    let newBal = tokenBalance.toString();
    let delegatee = await epnsToken?.delegates(account);
    let votes = await epnsToken?.getCurrentVotes(account);
    let votingPower = await Number(votes / Math.pow(10, decimals));
    let prettyVotingPower = votingPower.toLocaleString();
    setTokenBalance(tokenBalance);
    setPrettyTokenBalance(newBal);
    setDelegatee(delegatee);
    setSelfVotingPower(prettyVotingPower);
  };

  //execute delegate tx wth gas when tokenbalance < PUSH_BALANCE_TRESHOLD
  const delegateAction = async (newDelegatee) => {
    setTxInProgress(true);

    const isAddress = isValidAddress(newDelegatee);
    const delegateeAddress = await newDelegatee;
    console.debug(isAddress);
    if (!isAddress) {
      setTxInProgress(false);
      return;
    }
    console.debug('balance', tokenBalance);
    console.debug('transaction mode', transactionMode);

    if (tokenBalance == 0) {
      toast.dark('No PUSH to Delegate!', {
        position: 'bottom-right',
        type: toast.TYPE.ERROR,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTxInProgress(false);
      return;
    }

    if (transactionMode === 'withgas') {
      executeDelegateTx({ delegateeAddress, epnsToken, toast, setTxInProgress, provider, LoaderToast });
      return;
    }
    if (tokenBalance < PUSH_BALANCE_TRESHOLD) {
      toast.dark('Atleast ' + PUSH_BALANCE_TRESHOLD + ' PUSH required for gasless delegation!', {
        position: 'bottom-right',
        type: toast.TYPE.ERROR,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTxInProgress(false);
      return;
    }
    console.debug(newDelegatee, 'lets see');
    await createTransactionObject({
      delegateeAddress,
      account,
      epnsToken,
      addresses,
      signerObject,
      provider,
      setTxLoading: setTxInProgress,
    });
  };

  // toast customize
  const LoaderToast = ({ msg, color }) => (
    <Toaster>
      <LoaderSpinner />
      <ToasterMsg>{msg}</ToasterMsg>
    </Toaster>
  );

  return (
    <Container>
      <ItemVV2 alignItems="stretch">
        <Item
          align="stretch"
          justify="flex-start"
          margin="0px 15px 15px 15px"
        >
          {(dashboardLoading || !prettyTokenBalance || !selfVotingPower) && (
            <Item padding="20px">
              <LoaderSpinner />
            </Item>
          )}

          <ItemVV2 margin="0px 0px 0px 0px">
            <H2>
              <Span
                weight="400"
                size="32px"
                color={theme.color}
              >
                Governance Dashboard
              </Span>
            </H2>
          </ItemVV2>

          {!dashboardLoading && prettyTokenBalance && selfVotingPower && (
            <Item
              margin="10px 0px 0px 0px"
              self="stretch"
              items="stretch"
            >
              <StatsCard
                align="stretch"
                justify="flex-start"
                self="stretch"
                bg={theme.default.secondaryBg}
                op="1"
              >
                <StatsHeading bg="#e20880">Governance Dashboard</StatsHeading>
                <StatsContent>
                  <ItemH
                    align="stretch"
                    self="stretch"
                  >
                    <Item
                      align="center"
                      self="center"
                      flex="initial"
                      padding="10px"
                    >
                      <Blocky>
                        <BlockyInner>
                          <Blockies
                            seed={account.toLowerCase()}
                            opts={{ seed: account.toLowerCase(), size: 10, scale: 10 }}
                          />
                        </BlockyInner>
                      </Blocky>
                      <Wallet>
                        {web3Name === null ? (
                          <LoaderSpinner />
                        ) : web3Name ? (
                          <>{web3Name}</>
                        ) : (
                          <>{shortenText(account, 6)}</>
                        )}
                      </Wallet>
                    </Item>

                    <Item
                      align="flex-start"
                      self="stretch"
                      padding="10px"
                      size="16px"
                    >
                      <ItemH
                        flex="initial"
                        padding="5px"
                      >
                        <Span
                          weight="500"
                          padding="0px 8px 0px 0px"
                          color={theme.color}
                        >
                          $PUSH Balance:{' '}
                        </Span>
                        <CurvedSpan
                          bg="#e20880"
                          color="#fff"
                          weight="600"
                          padding="4px 8px"
                          textTransform="uppercase"
                        >
                          {prettyTokenBalance}
                        </CurvedSpan>
                      </ItemH>

                      <ItemH
                        flex="initial"
                        padding="5px"
                      >
                        <Span
                          weight="500"
                          padding="0px 8px 0px 0px"
                          color={theme.color}
                        >
                          Voting Power:{' '}
                        </Span>
                        <CurvedSpan
                          bg="#35c5f3"
                          color="#fff"
                          weight="600"
                          padding="4px 8px"
                          textTransform="uppercase"
                        >
                          {selfVotingPower}
                        </CurvedSpan>
                      </ItemH>
                      {delegatee !== '0x0000000000000000000000000000000000000000' && (
                        <ItemH
                          flex="initial"
                          padding="5px"
                        >
                          <Span padding="0px 8px 0px 0px">Delegated To: </Span>
                          <Span weight="600">{delegatee}</Span>
                        </ItemH>
                      )}
                    </Item>
                  </ItemH>

                  {showDelegateePrompt && (
                    <Item
                      bg="#eeeeeeee"
                      position="absolute"
                      top="0"
                      bottom="0"
                      left="0"
                      right="0"
                    >
                      <Item
                        align="stretch"
                        self="stretch"
                        margin="0px 20px 40px 20px"
                      >
                        <Span
                          color="#000"
                          weight="400"
                        >
                          Enter delegatee address
                        </Span>
                        <br></br>
                        <Input
                          placeholder="Enter delegatee address"
                          radius="4px"
                          padding="12px"
                          self="stretch"
                          bg="#fff"
                          value={newDelegateeAddress}
                          onChange={async (e) => {
                            setNewDelegateeAddress(e.target.value);
                            setNewDelegateeVotingPower(null);
                          }}
                        />
                        {newDelegateeVotingPower && newDelegateeAddress && (
                          <StatsInnerTitle>Voting Power: {newDelegateeVotingPower}</StatsInnerTitle>
                        )}
                      </Item>
                    </Item>
                  )}

                  <Item
                    self="stretch"
                    align="flex-end"
                  >
                    <ItemH>
                      <Box
                        gap="s2"
                        display="flex"
                        flexDirection="row"
                      >
                        {!txInProgress && (
                          <Button
                            variant="primary"
                            size="small"
                            disabled={txInProgress}
                            onClick={() => {
                              if (showDelegateePrompt) {
                                delegateAction(newDelegateeAddress);
                              } else {
                                setShowDelegateePrompt(true);
                              }
                            }}
                          >
                            <Span
                              color="#fff"
                              weight="400"
                            >
                              Delegate to Others
                            </Span>
                          </Button>
                        )}
                        {!showDelegateePrompt && !txInProgress && (
                          <Button
                            variant="outline"
                            size="small"
                            disabled={txInProgress}
                            onClick={() => {
                              delegateAction(account);
                            }}
                          >
                            Delegate to Myself
                          </Button>
                        )}

                        <Button
                          variant="tertiary"
                          size="small"
                          onClick={() => {
                            if (showDelegateePrompt) {
                              getVotingPower(newDelegateeAddress);
                            } else {
                              setShowDelegateePrompt(true);
                            }
                          }}
                        >
                          {txInProgress ? (
                            <ActionTitle>
                              <LoaderSpinner />
                            </ActionTitle>
                          ) : (
                            <Span
                              color="#fff"
                              weight="400"
                            >
                              Query Voting Power
                            </Span>
                          )}
                        </Button>

                        {showDelegateePrompt && (
                          <Button
                            variant="tertiary"
                            size="small"
                            onClick={() => {
                              setShowDelegateePrompt(false);
                            }}
                          >
                            Close
                          </Button>
                        )}
                      </Box>
                    </ItemH>
                  </Item>
                </StatsContent>
              </StatsCard>
            </Item>
          )}
        </Item>
      </ItemVV2>
    </Container>
  );
};
export default GovModule;

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

// css styles
const Question = styled(ButtonSS)`
  align-items: stretch;
  align-self: stretch;
  background: #fff;
`;

const ActionTitle = styled.span`
  ${(props) =>
    props.hideit &&
    css`
      visibility: hidden;
    `};
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
const StatsCard = styled(Item)`
  overflow: hidden;
  min-width: 180px;

  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.default.border};

  &:hover {
    opacity: ${(props) => (props.op ? '0.9' : props.op)};
  }
`;

const StatsHeading = styled(Item)`
  flex: 0;
  align-self: stretch;
  color: #fff;
  top: 0px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: normal;
  font-size: 15px;
  text-align: center;
  padding: 10px 5px;
  right: 0;
  left: 0;
`;

const StatsContent = styled(Item)`
  padding: 20px 20px;
`;

const StatsInnerTitle = styled.span`
  // font-weight: bold;
  font-size: 15px;
  letter-spacing: normal;
  align-items: left;
  margin-top: 10px;
`;

const CurvedSpan = styled(Span)`
  font-size: 14px;
`;

// css styles
const Blocky = styled.div`
  position: relative;
  width: 96px;
  height: 96px;
  border-radius: 100%;
  overflow: hidden;
  transform: scale(0.85);
  outline-width: 2px;
  outline-color: rgba(225, 225, 225, 1);
`;

const BlockyInner = styled.div``;

const Wallet = styled.span`
  margin: 10px 10px;
  padding: 8px 15px;
  height: 16px;
  display: none;
  align-items: baseline;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  border-radius: 15px;
  background: #333;
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
`;
