import React, { useState } from "react";
import ReactGA from "react-ga";

import styled, { css, useTheme } from 'styled-components';
import { Section, Content, Item, ItemH, A, B, H2, H3, LI, Span, Button, Input, UL } from '../primaries/SharedStyling';
import { Oval } from 'react-loader-spinner'
import { BsChevronExpand } from 'react-icons/bs';
import { toast } from 'react-toastify';
import InfoTooltip from "../primaries/InfoTooltip";
import { useWeb3React } from '@web3-react/core'
import { addresses, abis } from "@project/contracts";
import EPNSCoreHelper from 'helpers/EPNSCoreHelper';
import { ethers } from "ethers";
import { GAS_LIMIT, PUSH_BALANCE_TRESHOLD } from "components/ViewDelegateeItem";
import { toolingPostReq } from "../api/index";
import Blockies from "../primaries/BlockiesIdenticon";

import { ThemeProvider } from "styled-components"

import ViewDelegateeItem from "components/ViewDelegateeItem";

import { createTransactionObject } from '../helpers/GaslessHelper';
import { executeDelegateTx } from '../helpers/WithGasHelper';
import { envConfig } from "@project/contracts";

const delegateesJSON = require("config/delegatees.json")
const VOTING_TRESHOLD = 75000; //the treshold for delegates

// Create Header
function GovernancePage() {
  // React GA Analytics
  ReactGA.pageview("/governance");

  // setup themes (styled components)
  const themes = useTheme();

  const { account, library, chainId } = useWeb3React();
  const onCoreNetwork = chainId === envConfig.coreContractChain;

  const [address, setAddress] = React.useState('');
  const [ens, setENS] = React.useState('');
  const [ensFetched, setENSFetched] = React.useState(false);

  const [dashboardLoading, setDashboardLoading] = React.useState(true);
  const [delegateesLoading, setDelegateesLoading] = React.useState(true);

  const [txInProgress, setTxInProgress] = React.useState(false);
  const [controlAt, setControlAt] = React.useState(0);
  const [delegateesObject, setDelegateesObject] = React.useState({});
  const [pushDelegatees, setPushDelegatees] = React.useState([]);
  const [pushNominees, setPushNominees] = React.useState([]);
  const [epnsToken, setEpnsToken] = React.useState(null);
  const [tokenBalance, setTokenBalance] = React.useState(null);
  const [prettyTokenBalance, setPrettyTokenBalance] = React.useState(null);

  const [showDelegateePrompt, setShowDelegateePrompt] = React.useState(false);
  const [delegatee, setDelegatee] = React.useState(null);

  const [showAnswers, setShowAnswers] = React.useState([]);
  const [selfVotingPower, setSelfVotingPower] = React.useState(null);
  const [newDelegateeAddress, setNewDelegateeAddress] = React.useState("0x");
  const [newDelegateeVotingPower, setNewDelegateeVotingPower] = React.useState(null);
  const [signerObject, setSignerObject] = React.useState(null);
  const [gaslessInfo, setGaslessInfo] = useState(null);
  const [transactionMode, setTransactionMode] = React.useState('gasless');

  const toggleShowAnswer = (id) => {
    let newShowAnswers = [...showAnswers];
    newShowAnswers[id] = !newShowAnswers[id];
    setShowAnswers(newShowAnswers);
  }

  React.useEffect(() => {
    if (!onCoreNetwork) {
      const url = window.location.origin;
      window.location.replace(`${url}/#/notavailable`);
    }
  })

  React.useEffect(() => {
    toolingPostReq('/gov/prev_delegation', { "walletAddress": account }).then(res => {
      console.log("result", res.data.user)
      setGaslessInfo(res.data.user);
    }
    )
  }, []);
  React.useEffect(() => {
    if (account && account != '') {
      // Check if the address is the same
      if (address !== account) {
        setENS('');
        setENSFetched(false);

        // get ens
        library
          .lookupAddress(account).then(function (name) {
            setENS(name);
            setENSFetched(true);
            setAddress(account);
          })
          .catch(() => {
            setENSFetched(true);
            setAddress(account);
          })
      }

    }
  }, [account]);

  React.useEffect(() => {
    console.log(account)
    if (!!(library && account)) {
      let signer = library.getSigner(account);
      setSignerObject(signer)
      const epnsTokenContract = new ethers.Contract(addresses.epnsToken, abis.epnsToken, signer);
      setEpnsToken(epnsTokenContract);
    }
  }, [account, library]);

  React.useEffect(() => {
    if (epnsToken) {
      getMyInfo()
    }
  }, [epnsToken, account, library, prettyTokenBalance, tokenBalance]);

  React.useEffect(() => {
    setDashboardLoading(false);
  }, [account]);

  React.useEffect(() => {
    if (!epnsToken) return;
    const delegateesList = Object.values(delegateesJSON);
    // write helper function to sort by voting power
    const votingPowerSorter = (a, b) => {
      return b.votingPower - a.votingPower
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
        return (votingPower >= VOTING_TRESHOLD)
      });

      // sort by voting power
      const sortedDelegatees = [...delegateesAbove75k].sort(votingPowerSorter);
      setPushDelegatees(sortedDelegatees);

      // calculate for  the nominees (i.e peoplw who have voting power less than 75k)
      const delegateesBelow75k = allDelegatees.filter(({ votingPower }) => {
        return votingPower < VOTING_TRESHOLD
      });

      const sortedNominees = [...delegateesBelow75k].sort(votingPowerSorter);

      // sort by voting power
      setPushNominees(sortedNominees);

      setDelegateesLoading(false);
    })
    setDelegateesObject(delegateesJSON)
    // in order to
  }, [epnsToken])

  const isValidAddress = (address) => {
    if (ethers.utils.isAddress(address)) {
      return true
    }
    else {
      toast.dark("Invalid address!", {
        position: "bottom-right",
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
  }

  const getVotingPower = async (address) => {
    try {
      const votingPower = await EPNSCoreHelper.getVotingPower(address, epnsToken, true)
      setNewDelegateeVotingPower(votingPower)
    }
    catch (err) {
      console.log("🚀 ~ file: Delegate.tsx ~ line 86 ~ getVotingPower ~ err", err)
    }
  }

  const getMyInfo = async () => {
    let bal = await epnsToken.balanceOf(account)
    let decimals = await epnsToken.decimals()
    let tokenBalance = await Number(bal / Math.pow(10, decimals))
    let newBal = tokenBalance.toString();
    let delegatee = await epnsToken.delegates(account)
    let votes = await epnsToken.getCurrentVotes(account)
    let votingPower = await Number(votes / Math.pow(10, decimals))
    let prettyVotingPower = votingPower.toLocaleString();
    setTokenBalance(tokenBalance)
    setPrettyTokenBalance(newBal)
    setDelegatee(delegatee)
    setSelfVotingPower(prettyVotingPower)
  }

  const checkForDelegateError = async (gasEstimate) => {
    // return false if no error
    // otherwise return error message

    // get gas price
    const gasPrice = await EPNSCoreHelper.getGasPriceInDollars(library);
    const totalCost = gasPrice * gasEstimate;
    if (totalCost > GAS_LIMIT) {
      return "Gas Price is too high, Please try again in a while."
    }
    return false
  }


  //execute delegate tx wth gas when tokenbalance < PUSH_BALANCE_TRESHOLD


  const delegateAction = async (newDelegatee) => {
    setTxInProgress(true);

    const isAddress = await isValidAddress(newDelegatee)
    console.log(isAddress)
    if (!isAddress) {
      setTxInProgress(false);
      return;
    }
    console.log("balance", tokenBalance);
    console.log("transaction mode", transactionMode)

    if (tokenBalance == 0) {
      toast.dark("No PUSH to Delegate!", {
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
      return;
    }

    if (transactionMode === 'withgas') {
      executeDelegateTx(newDelegatee, epnsToken, toast, setTxInProgress, library, LoaderToast)
      return;
    }
    if (tokenBalance < PUSH_BALANCE_TRESHOLD) {
      toast.dark("Atleast " + PUSH_BALANCE_TRESHOLD + " PUSH required for gasless delegation!", {
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
      return;
    }
    await createTransactionObject(newDelegatee, account, epnsToken, addresses, signerObject, library, setTxInProgress);
    toolingPostReq('/gov/prev_delegation', { "walletAddress": account }).then(res => {
      console.log("result", res.data.user)
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
    }
    ).catch(e => {
      toast.dark(e, {
        position: "bottom-right",
        type: toast.TYPE.ERROR,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
  }



  // handle user action at control center
  const userClickedAt = (controlIndex) => {
    setControlAt(controlIndex);
  }

  // toast customize
  const LoaderToast = ({ msg, color }) => (
    <Toaster>
      <Oval
        color={color}
        height={30}
        width={30}
      />
      <ToasterMsg>{msg}</ToasterMsg>
    </Toaster>
  )

  return (
    <ThemeProvider theme={themes}>
      <Section>
        <Content themes={themes.mainBg} padding="20px 20px 30px 20px">
          <Item align="stretch" justify="flex-start" margin="0px 15px 15px 15px">
            {(dashboardLoading || !prettyTokenBalance || !selfVotingPower) &&
              <Item padding="20px">
                <Oval color="#e20880" height={40} width={40} />
              </Item>
            }

            {!dashboardLoading && prettyTokenBalance && selfVotingPower &&
              <Item margin="10px 0px 0px 0px" self="stretch" items="stretch">
                <StatsCard
                  align="stretch"
                  justify="flex-start"
                  self="stretch"
                  bg={themes.mainBg}
                  op="1"
                >
                  <StatsHeading bg="#e20880">Governance Dashboard</StatsHeading>
                  <StatsContent>
                    <ItemH align="stretch" self="stretch">
                      <Item align="center" self="center" flex="initial" padding="10px">
                        <Blocky>
                          <BlockyInner>
                            <Blockies seed={account.toLowerCase()} opts={{ seed: account.toLowerCase(), size: 10, scale: 10 }} />
                          </BlockyInner>
                        </Blocky>
                        <Wallet>
                          {!ensFetched &&
                            <Oval
                              color="#FFF"
                              height={16}
                              width={16}
                            />
                          }
                          {ensFetched && ens &&
                            <>{ens}</>
                          }
                          {ensFetched && !ens &&
                            <>{account.substring(0, 6)}.....{account.substring(account.length - 6)}</>
                          }
                        </Wallet>
                      </Item>

                      <Item align="flex-start" self="stretch" padding="10px" size="16px">
                        <ItemH flex="initial" padding="5px">
                          <Span weight="500" padding="0px 8px 0px 0px" color={themes.color}>$PUSH Balance: </Span>
                          <CurvedSpan bg="#e20880" color="#fff" weight="600" padding="4px 8px" textTransform="uppercase">{prettyTokenBalance}</CurvedSpan>
                        </ItemH>

                        <ItemH flex="initial" padding="5px">
                          <Span weight="500" padding="0px 8px 0px 0px" color={themes.color}>Voting Power: </Span>
                          <CurvedSpan bg="#35c5f3" color="#fff" weight="600" padding="4px 8px" textTransform="uppercase">{selfVotingPower}</CurvedSpan>
                        </ItemH>
                        {delegatee !== "0x0000000000000000000000000000000000000000" &&
                          <ItemH flex="initial" padding="5px">
                            <Span padding="0px 8px 0px 0px">Delegated To: </Span>
                            <Span weight="600">{delegatee}</Span>
                          </ItemH>
                        }

                        {
                          (gaslessInfo) ?
                            // <Item align="flex-start" self="stretch" padding="10px" size="16px">
                            <>
                              <ItemH flex="initial" padding="5px">
                                <Span weight="500" padding="0px 8px 0px 0px">Last Gasless Delegation On: </Span>
                                <CurvedSpan bg="#e20880" color="#fff" weight="600" padding="4px 8px" textTransform="uppercase">{new Date(gaslessInfo.timestamp).toLocaleDateString()}</CurvedSpan>
                              </ItemH>
                              <ItemH flex="initial" padding="5px">
                                <Span weight="500" padding="0px 8px 0px 0px">Last Gasless Delegation To: </Span>
                                <CurvedSpan bg="#35c5f3" color="#fff" weight="600" padding="4px 8px" textTransform="uppercase">{gaslessInfo.delegatee}</CurvedSpan>
                              </ItemH>
                            </>
                            :
                            <p>No recent Gasless Delegation </p>
                        }

                      </Item>
                    </ItemH>

                    {showDelegateePrompt &&
                      <Item
                        bg="#eeeeeeee"
                        position="absolute"
                        top="0"
                        bottom="0"
                        left="0"
                        right="0"
                      >
                        <Item align="stretch" self="stretch" margin="0px 20px 40px 20px">
                          <Span color="#000" weight="400">Enter delegatee address</Span><br></br>
                          <Input
                            placeholder="Enter delegatee address"
                            radius="4px"
                            padding="12px"
                            self="stretch"
                            bg="#fff"
                            value={newDelegateeAddress}
                            onChange={async (e) => {
                              setNewDelegateeAddress(e.target.value)
                              setNewDelegateeVotingPower(null)
                            }}
                          />
                          {newDelegateeVotingPower && newDelegateeAddress &&
                            <StatsInnerTitle>Voting Power: {newDelegateeVotingPower}</StatsInnerTitle>
                          }
                        </Item>

                      </Item>
                    }

                    <Item self="stretch" align="flex-end" >
                      <ItemH >
                        <RadioGroup >
                          <div style={{ marginRight: "0px" }}>
                            <input type="radio" id="gasless" checked={transactionMode == "gasless"} name="gasless" value="gasless" onChange={e => setTransactionMode(e.target.value)} /> <br />
                            <Label><div style={{ width: "2rem" }}>  Gasless  <InfoTooltip Infocolor={"gray"}
                              title={"Delegate your PUSH votes without paying gas fee.   " + "Conditions: " + "Wallet address must hold at least 100 PUSH." + "Gasless delegation is enabled only when the gas fee is less than $50" + "Once delegated, the same wallet address could do gasless delegation again only after 7 days"} /> </div>
                            </Label><br />
                          </div>
                          <div style={{ width: "8rem" }}>
                            <input type="radio" id="withgas"
                              checked={transactionMode == "withgas"}
                              name="gas" value="withgas" onChange={e => setTransactionMode(e.target.value)} />
                            <Label > <div style={{ width: "5rem" }}> With Gas   <InfoTooltip Infocolor={"gray"} title={"Delegate you PUSH votes by paying gas fee"} /> </div>
                            </Label><br />
                          </div>
                        </RadioGroup>
                        {!txInProgress &&
                          <ButtonAlt
                            bg={txInProgress ? "#999" : "#e20880"}
                            disabled={txInProgress ? true : false}
                            onClick={() => {
                              if (showDelegateePrompt) {
                                delegateAction(newDelegateeAddress)
                              }
                              else {
                                setShowDelegateePrompt(true)
                              }
                            }}
                          >

                            <Span color="#fff" weight="400">Delegate to Others</Span>

                          </ButtonAlt>
                        }
                        {!showDelegateePrompt && !txInProgress &&
                          <ButtonAlt
                            bg={txInProgress ? "#999" : "#51CAF3"}
                            disabled={txInProgress ? true : false}
                            onClick={() => { delegateAction(account) }}
                          >
                            <Span color="#fff" weight="400">Delegate to Myself</Span>

                          </ButtonAlt>
                        }

                        <ButtonAlt
                          bg={"#000"}
                          onClick={
                            () => {
                              if (showDelegateePrompt) {
                                getVotingPower(newDelegateeAddress)
                              }
                              else {
                                setShowDelegateePrompt(true)
                              }
                            }
                          }
                        >{
                            txInProgress ? (
                              <ActionTitle>
                                <Oval
                                  color="#35c5f3"
                                  height={20}
                                  width={20}
                                />
                              </ActionTitle>
                            ) :


                              <Span color="#fff" weight="400">Query Voting Power</Span>
                          }
                        </ButtonAlt>

                        {showDelegateePrompt &&
                          <ButtonAlt
                            bg="#000"
                            onClick={() => { setShowDelegateePrompt(false) }}
                          >
                            <Span color="#fff" weight="400">Close</Span>
                          </ButtonAlt>
                        }
                      </ItemH>

                    </Item>
                  </StatsContent>
                  <StatsPreview color="#e20880">MY INFO</StatsPreview>
                </StatsCard>
              </Item>
            }
          </Item>

          <Item align="stretch" justify="flex-start" margin="15px 15px 0px 15px">
            <StatsCard
              align="stretch"
              justify="flex-start"
              self="stretch"
              bg={themes.mainBg}
            >
              <StatsHeading bg="#35c5f3">Meet the PUSH Nominees</StatsHeading>
              <NomineeContainer>
                {delegateesLoading ? (
                  <ContainerInfo>
                    <Oval
                      color="#35c5f3"
                      height={40}
                      width={40}
                    />
                  </ContainerInfo>
                ) : (
                  <AbsoluteWrapper>
                    {
                      pushNominees.map((onePushNominee) => {
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
                        )
                      })
                    }
                  </AbsoluteWrapper>
                )
                }
              </NomineeContainer>
            </StatsCard>
          </Item>
        </Content>

        <Content padding="20px 20px 0px">
          <Item align="flex-start" margin="0px 15px 0px 15px">
            <H2 textTransform="uppercase" spacing="0.1em">
              <Span weight="200" color={themes.color}>PUSH </Span>
              <Span bg="#35c5f3" color="#fff" weight="600" padding="0px 8px">DELEGATEES</Span>
            </H2>
            <H3 color={themes.color}>Let's start <B>governing!!</B> </H3>
          </Item>

          <Item>
            {dashboardLoading &&
              <ContainerInfo>
                <Oval
                  color="#35c5f3"
                  height={40}
                  width={40}
                />
              </ContainerInfo>
            }

            {!dashboardLoading && controlAt == 0 &&
              <ItemH
                padding="0px 20px 20px 20px"
                self="stretch"
              >
                {pushDelegatees.length == 0 &&
                  <Item align="flex-start" self="stretch">
                    <Span padding="10px 10px" margin="10px 0px" bg="#666" color="#fff" weight="600">🤷 Awkward!!</Span>
                    <Span padding="10px 10px" margin="10px 0px" bg="#666" color="#fff" weight="600">Show some 💕 to Nominees to kickstart Governance!</Span>
                  </Item>
                }
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
                  })
                }
              </ItemH>
            }
          </Item>
        </Content>

        {/* FAQs */}
        <Content padding="20px 20px 35px">
          <Item align="stretch" justify="flex-start" margin="-10px 20px 0px 20px">

            {/* Question */}
            <Item align="stretch" margin="0px 0px 0px 0px">
              <QnAItem>
                <Question
                  onClick={() => { toggleShowAnswer(0) }}
                  hover="#e20880"
                >
                  <Span color={themes.color}>
                    What are PUSH Delegatees?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"} />
                </Question>

                {showAnswers[0] &&
                  <Answer>
                    <Span>
                      Active community members who have at least <b>75,000 $PUSH</b> delegated to them.
                      They will be able to create proposals on Snapshot that are approved on the <AMod href="https://gov.epns.io/"> forum </AMod>
                    </Span>
                  </Answer>
                }
              </QnAItem>

              <QnAItem>
                <Question
                  onClick={() => { toggleShowAnswer(1) }}
                  hover="#e20880"
                >
                  <Span color={themes.color}>
                    What are PUSH Nominees
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"} />
                </Question>

                {showAnswers[1] &&
                  <Answer>
                    <Span>
                      Active community members who can be delegated $PUSH to vote for proposals Snapshot. If you wish to be PUSH Nominee, submit your nomination
                      <AMod href="https://gov.epns.io/t/epns-push-delegatee-nominations/21"> here. </AMod>
                      Once they get at least <b>75,000 $PUSH </b> delegated to them, they become a PUSH Delegatee.
                    </Span>
                  </Answer>
                }
              </QnAItem>

              <QnAItem>
                <Question
                  onClick={() => { toggleShowAnswer(2) }}
                  hover="#e20880"
                >
                  <Span color={themes.color}>
                    How can I become a PUSH Nominee?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"} />
                </Question>

                {showAnswers[2] &&
                  <Answer>
                    <Span>Step-by-step process:</Span>
                    <UL>
                      <LI>
                        <Span>Sign up on:- <AMod href="https://gov.epns.io/" target="_blank" title="Join our EPNS's Telegram channel">EPNS Governance Portal</AMod></Span>
                      </LI>
                      <LI>
                        <Span>Go to:- <AMod href="https://gov.epns.io/t/epns-push-delegatee-nominations/21" target="_blank" title="Join our EPNS's Telegram channel">https://gov.epns.io/t/epns-push-delegatee-nominations/21</AMod></Span>
                      </LI>
                      <LI>
                        <Span>Submit your nomination by replying to the above post in the PROPOSED TEMPLATE.</Span>
                      </LI>
                    </UL>
                    <Span>
                      Now, once your nomination receives minimum of 10 likes,
                      We will be adding your wallet address on our Governance Front end within 5-7 days.
                      And later community members can start delegating votes to you.
                    </Span>
                  </Answer>
                }
              </QnAItem>

              <QnAItem>
                <Question
                  onClick={() => { toggleShowAnswer(3) }}
                  hover="#e20880"
                >
                  <Span color={themes.color}>
                    What if I don't wish to be a PUSH Nominee?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"} />
                </Question>

                {showAnswers[3] &&
                  <Answer>
                    <Span>
                      No problem! You can show support to your favourite PUSH Nominees by liking their nominations <AMod href="https://gov.epns.io/t/epns-push-delegatee-nominations/21">here</AMod>.
                    </Span>
                  </Answer>
                }
              </QnAItem>

              <QnAItem>
                <Question
                  onClick={() => { toggleShowAnswer(4) }}
                  hover="#e20880"
                >
                  <Span color={themes.color}>
                    Where should I start?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"} />
                </Question>

                {showAnswers[4] &&
                  <Answer>
                    <Span>Visit <AMod href="https://gov.epns.io/" target="_blank" title="Join our EPNS's Telegram channel">EPNS Governance Portal</AMod> and introduce yoursef on the platform in the suggested format.</Span>

                  </Answer>
                }
              </QnAItem>

              <QnAItem>
                <Question
                  onClick={() => { toggleShowAnswer(5) }}
                  hover="#e20880"
                >
                  <Span color={themes.color}>
                    What happens to the delegated voting power when I sell my PUSH tokens?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"} />
                </Question>

                {showAnswers[5] &&
                  <Answer>
                    <Span>If you delegate your voting power to someone/yourself and later you sell your
                      PUSH tokens, then the voting power of those tokens gets revoked. Now the new owner gets to decide whom to delegate to. </Span>

                  </Answer>
                }
              </QnAItem>

              <QnAItem>
                <Question
                  onClick={() => { toggleShowAnswer(6) }}
                  hover="#e20880"
                >
                  <Span color={themes.color}>
                    How can I cast my vote?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"} />
                </Question>

                {showAnswers[6] &&
                  <Answer>
                    <Span>Please visit <AMod href="https://snapshot.org/#/epns.eth" target="_blank" title="EPNS Governance - Snapshot Portal">EPNS Governance - Snapshot Portal</AMod> to view the ongoing on-chain proposals and cast your vote.</Span>
                  </Answer>
                }
              </QnAItem>

              <QnAItem>
                <Question
                  onClick={() => { toggleShowAnswer(7) }}
                  hover="#e20880"
                >
                  <Span color={themes.color}>
                    How can I keep up with EPNS Governance?
                  </Span>
                  <BsChevronExpand size={20} color={"#ddd"} />
                </Question>

                {showAnswers[7] &&
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
const RadioGroup = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:300px;
  margin:0px 20px;
  div{
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:100px;
  }
`;

const ContainerInfo = styled.div`
  padding: 20px;
`

const Question = styled(Button)`
  align-items: stretch;
  align-self: stretch;
  background: #fff;
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

const ActionTitle = styled.span`
  ${props => props.hideit && css`
    visibility: hidden;
  `};
`
const Label = styled.label`
    margin:"10px";
`;
const Toaster = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px;
`

const ToasterMsg = styled.div`
  margin: 0px 10px;
`
const StatsCard = styled(Item)`
  overflow: hidden;
  min-width: 180px;

  border-radius: 12px;
  border: 1px solid rgb(225, 225, 225);

  &:hover {
    opacity: ${props => props.op ? "0.9" : props.op}
  }
`;

const StatsHeading = styled(Item)`
  flex: 0;
  align-self: stretch;
  color: #fff;
  top: 0px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 15px;
  text-align: center;
  padding: 10px 5px;
  right: 0;
  left: 0;
`

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
`

const AbsoluteWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: max-content;
  overflow: scroll;
  display: flex;
`

const StatsPreview = styled(Span)`
  position: absolute;
  bottom: 5px;
  right: 10px;
  font-weight: 600;
  font-size: 12px;
  opacity: 0.25;
  letter-spacing:0.1em;
  text-transform: uppercase;
  color: ${props => props.color || '#000'};
  z-index: -1;
`

const StatsInnerTitle = styled.span`
  // font-weight: bold;
  font-size: 15px;
  letter-spacing: 0.1em;
  align-items: left;
  margin-top: 10px;
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
  outline-color: rgba(225,225,225,1);
`

const BlockyInner = styled.div``

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
`

// Export Default
export default GovernancePage;
