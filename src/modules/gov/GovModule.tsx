// React + Web3 Essentials
import { ethers } from 'ethers';
import { useState, useEffect, useContext } from 'react';

// External Packages
import ReactGA from 'react-ga';
import { BsChevronExpand } from 'react-icons/bs';
import { toast } from 'react-toastify';
import styled, { css, useTheme } from 'styled-components';

// Internal Components
import { toolingPostReq } from 'api/index';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import { GAS_LIMIT, PUSH_BALANCE_TRESHOLD } from 'components/ViewDelegateeItem';
import EPNSCoreHelper from 'helpers/EPNSCoreHelper';
import Blockies from 'primaries/BlockiesIdenticon';
import InfoTooltip from 'primaries/InfoTooltip';
import { A, B, Button as ButtonSS, H2, H3, Input, Item, ItemH, LI, Section, Span, UL } from 'primaries/SharedStyling';
import { Box, Button } from 'blocks';
import LoaderSpinner from 'components/reusables/loaders/LoaderSpinner';
import ViewDelegateeItem from 'components/ViewDelegateeItem';
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
  const [delegateesLoading, setDelegateesLoading] = useState(true);
  const [txInProgress, setTxInProgress] = useState(false);
  const [controlAt, setControlAt] = useState(0);
  const [delegateesObject, setDelegateesObject] = useState({});
  const [pushDelegatees, setPushDelegatees] = useState([]);
  const [pushNominees, setPushNominees] = useState([]);
  const [epnsToken, setEpnsToken] = useState(null);
  const [tokenBalance, setTokenBalance] = useState(null);
  const [prettyTokenBalance, setPrettyTokenBalance] = useState(null);

  const [showDelegateePrompt, setShowDelegateePrompt] = useState(false);
  const [delegatee, setDelegatee] = useState(null);

  const [showAnswers, setShowAnswers] = useState([]);
  const [selfVotingPower, setSelfVotingPower] = useState(null);
  const [newDelegateeAddress, setNewDelegateeAddress] = useState('0x');
  const [newDelegateeVotingPower, setNewDelegateeVotingPower] = useState(null);
  const [signerObject, setSignerObject] = useState(null);
  const [gaslessInfo, setGaslessInfo] = useState(null);
  const [transactionMode, setTransactionMode] = useState('gasless');

  // Resolving web3 names
  useResolveWeb3Name(account);
  const web3Name = web3NameList[account];

  const toggleShowAnswer = (id) => {
    let newShowAnswers = [...showAnswers];
    newShowAnswers[id] = !newShowAnswers[id];
    setShowAnswers(newShowAnswers);
  };

  useEffect(() => {
    if (!onCoreNetwork) {
      const url = window.location.origin;
      window.location.replace(`${url}/#/notavailable`);
    }
  });

  useEffect(() => {
    toolingPostReq('/gov/prev_delegation', { walletAddress: account }).then((res) => {
      console.debug('result', res.data.user);
      setGaslessInfo(res.data.user);
    });
  }, []);

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

  useEffect(() => {
    if (!epnsToken) return;
    const delegateesList = Object.values(delegateesJSON);
    // write helper function to sort by voting power
    const votingPowerSorter = (a, b) => {
      return b.votingPower - a.votingPower;
    };

    // go through all the delegates json and get their voting power
    const allDelegateesPromise = delegateesList.map(async (oneDelegate: any) => {
      const { wallet } = oneDelegate;
      const votingPower = await EPNSCoreHelper.getVotingPower(wallet, epnsToken);
      return { ...oneDelegate, votingPower: Number(votingPower) };
    });

    Promise.all(allDelegateesPromise).then((allDelegatees) => {
      // filter for delegates (i.e) Those who have above 75000 power,
      // use the parameter votingPowerSimulate parameter to simulate voting power above the treshold
      const delegateesAbove75k = allDelegatees.filter(({ votingPower, votingPowerSimulate }) => {
        return votingPower >= VOTING_TRESHOLD;
      });

      // sort by voting power
      const sortedDelegatees = [...delegateesAbove75k].sort(votingPowerSorter);
      setPushDelegatees(sortedDelegatees);

      // calculate for  the nominees (i.e peoplw who have voting power less than 75k)
      const delegateesBelow75k = allDelegatees.filter(({ votingPower }) => {
        return votingPower < VOTING_TRESHOLD;
      });

      const sortedNominees = [...delegateesBelow75k].sort(votingPowerSorter);

      // sort by voting power
      setPushNominees(sortedNominees);

      setDelegateesLoading(false);
    });
    setDelegateesObject(delegateesJSON);
    // in order to
  }, [epnsToken]);

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
    let bal = await epnsToken.balanceOf(account);
    let decimals = await epnsToken.decimals();
    let tokenBalance = await Number(bal / Math.pow(10, decimals));
    let newBal = tokenBalance.toString();
    let delegatee = await epnsToken.delegates(account);
    let votes = await epnsToken.getCurrentVotes(account);
    let votingPower = await Number(votes / Math.pow(10, decimals));
    let prettyVotingPower = votingPower.toLocaleString();
    setTokenBalance(tokenBalance);
    setPrettyTokenBalance(newBal);
    setDelegatee(delegatee);
    setSelfVotingPower(prettyVotingPower);
  };

  const checkForDelegateError = async (gasEstimate) => {
    // return false if no error
    // otherwise return error message

    // get gas price
    const gasPrice = await EPNSCoreHelper.getGasPriceInDollars(provider);
    const totalCost = gasPrice * gasEstimate;
    if (totalCost > GAS_LIMIT) {
      return 'Gas Price is too high, Please try again in a while.';
    }
    return false;
  };

  //execute delegate tx wth gas when tokenbalance < PUSH_BALANCE_TRESHOLD

  const delegateAction = async (newDelegatee) => {
    setTxInProgress(true);

    const isAddress = await isValidAddress(newDelegatee);
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
    toolingPostReq('/gov/prev_delegation', { walletAddress: account })
      .then((res) => {
        console.debug('result', res.data.user);
        setGaslessInfo(res.data.user);
        // toast.dark("Successfully Fetched Prev Delegation Data", {
        //   position: "bottom-right",
        //   type: toast.TYPE.SUCCESS,
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
      })
      .catch((e) => {
        toast.dark(e, {
          position: 'bottom-right',
          type: toast.TYPE.ERROR,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  // handle user action at control center
  const userClickedAt = (controlIndex) => {
    setControlAt(controlIndex);
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

                      {gaslessInfo ? (
                        // <Item align="flex-start" self="stretch" padding="10px" size="16px">
                        <>
                          <ItemH
                            flex="initial"
                            padding="5px"
                          >
                            <Span
                              weight="500"
                              padding="0px 8px 0px 0px"
                            >
                              Last Gasless Delegation On:{' '}
                            </Span>
                            <CurvedSpan
                              bg="#e20880"
                              color="#fff"
                              weight="600"
                              padding="4px 8px"
                              textTransform="uppercase"
                            >
                              {new Date(gaslessInfo.timestamp).toLocaleDateString()}
                            </CurvedSpan>
                          </ItemH>
                          <ItemH
                            flex="initial"
                            padding="5px"
                          >
                            <Span
                              weight="500"
                              padding="0px 8px 0px 0px"
                            >
                              Last Gasless Delegation To:{' '}
                            </Span>
                            <CurvedSpan
                              bg="#35c5f3"
                              color="#fff"
                              weight="600"
                              padding="4px 8px"
                              textTransform="uppercase"
                            >
                              {gaslessInfo.delegatee}
                            </CurvedSpan>
                          </ItemH>
                        </>
                      ) : (
                        <p>No recent Gasless Delegation </p>
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
                      <RadioGroup>
                        <div style={{ marginRight: '0px' }}>
                          <input
                            type="radio"
                            id="gasless"
                            checked={transactionMode == 'gasless'}
                            name="gasless"
                            value="gasless"
                            onChange={(e) => setTransactionMode(e.target.value)}
                          />{' '}
                          <br />
                          <Label>
                            <div>
                              {' '}
                              Gasless{' '}
                              <InfoTooltip
                                Infocolor={'gray'}
                                title={
                                  'Delegate your PUSH votes without paying gas fee.   ' +
                                  'Conditions: ' +
                                  'Wallet address must hold at least 100 PUSH.' +
                                  'Gasless delegation is enabled only when the gas fee is less than $50' +
                                  'Once delegated, the same wallet address could do gasless delegation again only after 7 days'
                                }
                              />{' '}
                            </div>
                          </Label>
                          <br />
                        </div>
                        <div style={{ width: '8rem' }}>
                          <input
                            type="radio"
                            id="withgas"
                            checked={transactionMode == 'withgas'}
                            name="gas"
                            value="withgas"
                            onChange={(e) => setTransactionMode(e.target.value)}
                          />
                          <Label>
                            {' '}
                            <div style={{ width: '5rem' }}>
                              {' '}
                              With Gas{' '}
                              <InfoTooltip
                                Infocolor={'gray'}
                                title={'Delegate you PUSH votes by paying gas fee'}
                              />{' '}
                            </div>
                          </Label>
                          <br />
                        </div>
                      </RadioGroup>
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
                <StatsPreview color="#e20880">MY INFO</StatsPreview>
              </StatsCard>
            </Item>
          )}
        </Item>

        <Item
          align="stretch"
          justify="flex-start"
          margin="15px 15px 0px 15px"
        >
          <StatsCard
            align="stretch"
            justify="flex-start"
            self="stretch"
            bg={theme.default.secondaryBg}
          >
            <StatsHeading bg="#35c5f3">Meet the PUSH Nominees</StatsHeading>
            <NomineeContainer>
              {delegateesLoading ? (
                <ContainerInfo>
                  <LoaderSpinner />
                </ContainerInfo>
              ) : (
                <AbsoluteWrapper>
                  {pushNominees.map((onePushNominee) => {
                    return (
                      <ViewDelegateeItem
                        key={onePushNominee.wallet}
                        delegateeObject={onePushNominee}
                        epnsToken={epnsToken}
                        pushBalance={tokenBalance}
                        signerObject={signerObject}
                        setGaslessInfo={setGaslessInfo}
                        theme="nominee"
                      />
                    );
                  })}
                </AbsoluteWrapper>
              )}
            </NomineeContainer>
          </StatsCard>
        </Item>
      </ItemVV2>

      <ItemVV2
        alignItems="stretch"
        padding="40px 0 20px 0"
      >
        <Item
          align="flex-start"
          margin="0px 15px 0px 15px"
        >
          <H2
            textTransform="uppercase"
            spacing="normal"
          >
            <Span
              weight="200"
              color={theme.color}
            >
              PUSH{' '}
            </Span>
            <Span
              bg="#35c5f3"
              color="#fff"
              weight="600"
              padding="0px 8px"
            >
              DELEGATEES
            </Span>
          </H2>
          <H3 color={theme.color}>
            Let's start <B>governing!!</B>{' '}
          </H3>
        </Item>

        <Item>
          {dashboardLoading && (
            <ContainerInfo>
              <LoaderSpinner />
            </ContainerInfo>
          )}

          {!dashboardLoading && controlAt == 0 && (
            <ItemH
              padding="0px 20px 20px 20px"
              self="stretch"
            >
              {pushDelegatees.length == 0 && (
                <Item
                  align="flex-start"
                  self="stretch"
                >
                  <Span
                    padding="10px 10px"
                    margin="10px 0px"
                    bg="#666"
                    color="#fff"
                    weight="600"
                  >
                    🤷 Awkward!!
                  </Span>
                  <Span
                    padding="10px 10px"
                    margin="10px 0px"
                    bg="#666"
                    color="#fff"
                    weight="600"
                  >
                    Show some 💕 to Nominees to kickstart Governance!
                  </Span>
                </Item>
              )}
              {pushDelegatees.length > 0 &&
                pushDelegatees.map((oneDelegatee) => {
                  return (
                    <>
                      <ViewDelegateeItem
                        key={oneDelegatee.wallet}
                        delegateeObject={oneDelegatee}
                        epnsToken={epnsToken}
                        signerObject={signerObject}
                        pushBalance={tokenBalance}
                        setGaslessInfo={setGaslessInfo}
                        theme="delegate"
                      />
                    </>
                  );
                })}
            </ItemH>
          )}
        </Item>
      </ItemVV2>

      {/* FAQs */}
      <ItemVV2
        alignItems="stretch"
        padding="20px 0 35px 0"
      >
        <Item
          align="stretch"
          justify="flex-start"
          margin="-10px 20px 0px 20px"
        >
          {/* Question */}
          <Item
            align="stretch"
            margin="0px 0px 0px 0px"
          >
            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(0);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}>What are PUSH Delegatees?</Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[0] && (
                <Answer>
                  <Span>
                    Active community members who have at least <b>75,000 $PUSH</b> delegated to them. They will be able
                    to create proposals on Snapshot that are approved on the{' '}
                    <AMod href="https://gov.epns.io/"> forum </AMod>
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(1);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}>What are PUSH Nominees</Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[1] && (
                <Answer>
                  <Span>
                    Active community members who can be delegated $PUSH to vote for proposals Snapshot. If you wish to
                    be PUSH Nominee, submit your nomination
                    <AMod href="https://gov.epns.io/t/epns-push-delegatee-nominations/21"> here. </AMod>
                    Once they get at least <b>75,000 $PUSH </b> delegated to them, they become a PUSH Delegatee.
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(2);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}>How can I become a PUSH Nominee?</Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[2] && (
                <Answer>
                  <Span>Step-by-step process:</Span>
                  <UL>
                    <LI>
                      <Span>
                        Sign up on:-{' '}
                        <AMod
                          href="https://gov.epns.io/"
                          target="_blank"
                          title="Join our Push (EPNS)'s Telegram channel"
                        >
                          Push (EPNS) Governance Portal
                        </AMod>
                      </Span>
                    </LI>
                    <LI>
                      <Span>
                        Go to:-{' '}
                        <AMod
                          href="https://gov.epns.io/t/epns-push-delegatee-nominations/21"
                          target="_blank"
                          title="Join our Push (EPNS)'s Telegram channel"
                        >
                          https://gov.epns.io/t/epns-push-delegatee-nominations/21
                        </AMod>
                      </Span>
                    </LI>
                    <LI>
                      <Span>Submit your nomination by replying to the above post in the PROPOSED TEMPLATE.</Span>
                    </LI>
                  </UL>
                  <Span>
                    Now, once your nomination receives minimum of 10 likes, We will be adding your wallet address on our
                    Governance Front end within 5-7 days. And later community members can start delegating votes to you.
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(3);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}>What if I don't wish to be a PUSH Nominee?</Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[3] && (
                <Answer>
                  <Span>
                    No problem! You can show support to your favourite PUSH Nominees by liking their nominations{' '}
                    <AMod href="https://gov.epns.io/t/epns-push-delegatee-nominations/21">here</AMod>.
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(4);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}>Where should I start?</Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[4] && (
                <Answer>
                  <Span>
                    Visit{' '}
                    <AMod
                      href="https://gov.epns.io/"
                      target="_blank"
                      title="Join our Push (EPNS)'s Telegram channel"
                    >
                      Push (EPNS) Governance Portal
                    </AMod>{' '}
                    and introduce yoursef on the platform in the suggested format.
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(5);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}>What happens to the delegated voting power when I sell my PUSH tokens?</Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[5] && (
                <Answer>
                  <Span>
                    If you delegate your voting power to someone/yourself and later you sell your PUSH tokens, then the
                    voting power of those tokens gets revoked. Now the new owner gets to decide whom to delegate to.{' '}
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(6);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}>How can I cast my vote?</Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[6] && (
                <Answer>
                  <Span>
                    Please visit{' '}
                    <AMod
                      href="https://snapshot.org/#/epns.eth"
                      target="_blank"
                      title="Push (EPNS) Governance - Snapshot Portal"
                    >
                      Push (EPNS) Governance - Snapshot Portal
                    </AMod>{' '}
                    to view the ongoing on-chain proposals and cast your vote.
                  </Span>
                </Answer>
              )}
            </QnAItem>

            <QnAItem>
              <Question
                onClick={() => {
                  toggleShowAnswer(7);
                }}
                hover="#e20880"
              >
                <Span color={theme.color}>How can I keep up with Push (EPNS) Governance?</Span>
                <BsChevronExpand
                  size={20}
                  color={'#ddd'}
                />
              </Question>

              {showAnswers[7] && (
                <Answer>
                  <Span>
                    Join our{' '}
                    <AMod
                      href="https://t.me/epnsproject"
                      target="_blank"
                      title="Join our EPNS's Telegram channel"
                    >
                      Telegram
                    </AMod>
                    , follow us on{' '}
                    <AMod
                      href="https://twitter.com/epnsproject"
                      target="_blank"
                      title="Join our Push (EPNS)'s Twitter channel"
                    >
                      Twitter
                    </AMod>
                    , and sign up for our 5 minute{' '}
                    <AMod
                      href="https://epns.substack.com/"
                      target="_blank"
                      title="Join our Push (EPNS)'s Twitter channel"
                    >
                      weekly product updates
                    </AMod>
                    .
                  </Span>
                </Answer>
              )}
            </QnAItem>
          </Item>
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
const RadioGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  margin: 0px 20px;
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100px;
  }
`;

const ContainerInfo = styled.div`
  padding: 20px;
`;

const Question = styled(ButtonSS)`
  align-items: stretch;
  align-self: stretch;
  background: #fff;
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
      letter-spacing: normal;
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

const ActionTitle = styled.span`
  ${(props) =>
    props.hideit &&
    css`
      visibility: hidden;
    `};
`;
const Label = styled.label`
  margin: '10px';
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

const NomineeContainer = styled.div`
  padding: 0px 20px 0px 20px;
  position: relative;
  height: 420px;
  overflow-y: hidden;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width */

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;

const StatsContent = styled(Item)`
  padding: 20px 20px;
`;

const AbsoluteWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: max-content;
  overflow: scroll;
  display: flex;
`;

const StatsPreview = styled(Span)`
  position: absolute;
  bottom: 5px;
  right: 10px;
  font-weight: 600;
  font-size: 12px;
  opacity: 0.25;
  letter-spacing: normal;
  text-transform: uppercase;
  color: ${(props) => props.color || '#000'};
  z-index: -1;
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
