import React from "react";
import ReactGA from 'react-ga';

import Loader from 'react-loader-spinner'
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { AbstractConnector } from '@web3-react/abstract-connector'
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector'
import { Web3Provider } from 'ethers/providers'

import { useEagerConnect, useInactiveListener } from 'hooks'
import {
  injected,
  portis,
  network
} from 'connectors'
import { addresses, abis } from "@project/contracts";
import { ethers } from "ethers";

import Home from 'pages/Home';
import Header from 'segments/Header';

import * as dotenv from "dotenv";
dotenv.config();

const connectorsByName: { [name: string]: AbstractConnector } = {
  Injected: injected,
  Network: network,
  Portis: portis
}

function getErrorMessage(error: Error) {
  if (error instanceof NoEthereumProviderError) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network."
  } else if (
    error instanceof UserRejectedRequestErrorInjected
  ) {
    return 'Please authorize this website to access your Ethereum account.'
  } else {
    console.error(error)
    return 'An unknown error occurred. Check the console for more details.'
  }
}

function getLibrary(provider, connector) {
  return new ethers.providers.Web3Provider(provider); // this will vary according to whether you use e.g. ethers or web3.js
}

export default function() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  )
}

function ChainId() {
  const { chainId } = useWeb3React()

  return (
    <>
      <span>Chain Id</span>
      <span role="img" aria-label="chain">
        ⛓
      </span>
      <span>{Number.isInteger(chainId) ? chainId : ''}</span>
    </>
  )
}

function BlockNumber() {
  const { chainId, library } = useWeb3React()

  const [blockNumber, setBlockNumber] = React.useState<number>()
  React.useEffect((): any => {
    if (!!library) {
      let stale = false

      library
        .getBlockNumber()
        .then((blockNumber: number) => {
          if (!stale) {
            setBlockNumber(blockNumber)
          }
        })
        .catch(() => {
          if (!stale) {
            setBlockNumber(null)
          }
        })

      const updateBlockNumber = (blockNumber: number) => {
        setBlockNumber(blockNumber)
      }
      library.on('block', updateBlockNumber)

      return () => {
        stale = true
        library.removeListener('block', updateBlockNumber)
        setBlockNumber(undefined)
      }
    }
  }, [library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

  return (
    <>
      <span>Block Number</span>
      <span role="img" aria-label="numbers">
        🔢
      </span>
      <span>
        {Number.isInteger(blockNumber)
          ? blockNumber.toLocaleString()
          : blockNumber === null
          ? 'Error'
          : !!library
          ? '...'
          : ''}
      </span>
    </>
  )
}

function Account() {
  const { account } = useWeb3React()

  return (
    <>
      <span>Account</span>
      <span role="img" aria-label="robot">
        🤖
      </span>
      <span>
        {account === undefined
          ? ''
          : account === null
          ? '-'
          : `${account.substring(0, 6)}...${account.substring(account.length - 4)}`}
      </span>
    </>
  )
}

function Balance() {
  const { account, library, chainId } = useWeb3React()

  const [balance, setBalance] = React.useState()
  React.useEffect((): any => {
    if (!!account && !!library) {
      let stale = false

      library
        .getBalance(account)
        .then((balance: any) => {
          if (!stale) {
            setBalance(balance)
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(null)
          }
        })

      return () => {
        stale = true
        setBalance(undefined)
      }
    }
  }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

  return (
    <>
      <span>Balance</span>
      <span role="img" aria-label="gold">
        💰
      </span>
      <span>
        {!!balance
          ? `Ξ${parseFloat(balance).toPrecision(4)}`
          : balance === null
          ? 'Error'
          : account === null
          ? '-'
          : !!account && !!library
          ? '...'
          : ''}
      </span>
    </>
  )
}

function initializeGA() {
  ReactGA.initialize('231212683');
  ReactGA.pageview('/homepage');
}

function App() {
  const context = useWeb3React<Web3Provider>()
  const { connector, library, chainId, account, activate, deactivate, active, error } = context

  const [ badgeCount, setBadgeCount ] = React.useState(0);
  const [ bellPressed, setBellPressed ] = React.useState(0);

  // Initialize GA
  ReactGA.initialize('UA-165415629-1');
  ReactGA.pageview('/login');

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState<AbstractConnector>()
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect()

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector)

  return (
      <>
        <HeaderContainer>
          <Header
            badgeCount={badgeCount}
            bellPressedCB={() => {setBellPressed(bellPressed + 1)}}
          />
        </HeaderContainer>

        <ParentContainer>
        {(active) && !error && (
          <HomeContainer>
            <Home
              setBadgeCount={setBadgeCount}
              bellPressed={bellPressed}
            />
          </HomeContainer>

        )}

        {!active &&
          <ProviderUpperContainer>
            <ProviderLogo src="./epnshomelogo.png" srcSet={"./epnshomelogo@2x.png 2x, ./epnshomelogo@2x.png 3x"} />
            <ProviderContainer>
              {Object.keys(connectorsByName).map(name => {
                const currentConnector = connectorsByName[name]
                const activating = currentConnector === activatingConnector
                const connected = currentConnector === connector
                const disabled = !triedEager || !!activatingConnector || connected || !!error
                const image = name === 'Injected' ? './metamask.png' : name === 'Portis' ? './portis.png' : './ninja.png';

                return (
                  <ProviderButton
                    disabled={disabled}
                    key={name}
                    onClick={() => {
                      setActivatingConnector(currentConnector)
                      activate(connectorsByName[name])
                    }}
                    border={name === 'Injected' ? '#e20880' : name === 'Portis' ? '#35c5f3' : '#674c9f'}
                  >
                    <ProviderImage src={image} />

                    <ProviderLabel>
                      {activating &&
                        <Loader
                           type="Oval"
                           color="#35c5f3"
                           height={20}
                           width={20}
                        />
                      }
                      {!activating &&
                        <>
                        {name === 'Injected' ? 'Connect with MetaMask' : name === 'Portis' ? 'Connect with Portis' : 'Login as Ninja'}
                        </>
                      }

                    </ProviderLabel>

                  </ProviderButton>
                )
              })}
            </ProviderContainer>
          </ProviderUpperContainer>
        }

        {active &&
          <div
            style={{
              display: 'grid',
              gridGap: '1rem',
              gridTemplateColumns: 'fit-content',
              maxWidth: '20rem',
              margin: 'auto',
              marginTop: '1200px'
            }}
          >
            {(active || error) && (
              <button
                style={{
                  height: '3rem',
                  marginTop: '2rem',
                  borderRadius: '1rem',
                  borderColor: 'red',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  deactivate()
                }}
              >
                Deactivate
              </button>
            )}

            {!!(library && account) && (
              <button
                style={{
                  height: '3rem',
                  borderRadius: '1rem',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  library
                    .getSigner(account)
                    .signMessage('👋')
                    .then((signature: any) => {
                      window.alert(`Success!\n\n${signature}`)
                    })
                    .catch((error: any) => {
                      window.alert('Failure!' + (error && error.message ? `\n\n${error.message}` : ''))
                    })
                }}
              >
                Sign Message
              </button>
            )}
            {!!(connector === network && chainId) && (
              <button
                style={{
                  height: '3rem',
                  borderRadius: '1rem',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  ;(connector as any).changeChainId(chainId === 1 ? 3 : 1)
                }}
              >
                Switch Networks
              </button>
            )}
            {connector === portis && (
              <>
                {chainId !== undefined && (
                  <button
                    style={{
                      height: '3rem',
                      borderRadius: '1rem',
                      cursor: 'pointer'
                    }}
                    onClick={() => {
                      ;(connector as any).changeNetwork(chainId === 1 ? 100 : 1)
                    }}
                  >
                    Switch Networks
                  </button>
                )}
                <button
                  style={{
                    height: '3rem',
                    borderRadius: '1rem',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    ;(connector as any).close()
                  }}
                >
                  Kill Portis Session
                </button>
              </>
            )}
          </div>
        }
        </ParentContainer>

        <ToastContainer
          position="bottom-right"
          autoClose={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
      </>
  );
}


// CSS STYLES
const HeaderContainer = styled.div`
  height: 55px;
  left: 0;
  right: 0;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
`

const ParentContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 80px 20px 20px 20px;
  flex: 1;
`

const HomeContainer = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
  width: 100%;
  max-width: 1100px;
`

const ProviderUpperContainer = styled.div`
  display: flex;
  flex: 1,
  align-self: center;
  flex-direction: column;
`

const ProviderLogo = styled.img`
  width: 15vw;
  align-self: center;
  display: flex;
  margin: 20px;
  min-width: 200px;
`

const ProviderContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProviderButton = styled.button`
  flex: 1 1 0;
  min-width: 200px;
  background: #fff;
  outline: 0;
  max-width: 200px;

  box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: 1px solid rgb(225,225,225);

  margin: 20px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  display: flex;
  flex-direction: column;
  padding: 10px;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
    border: 1px solid ${props => props.border}
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
    border: 1px solid ${props => props.border}
  }
`

const ProviderImage = styled.img`
  height: 60px;
  padding: 10px;
`

const ProviderLabel = styled.span`
  font-size: 12px;
  margin: 5px;
`

const StyledContainer = styled(ToastContainer).attrs({
  // custom props
})`
  .Toastify__toast-container {}
  .Toastify__toast {}
  .Toastify__toast--error {}
  .Toastify__toast--warning {}
  .Toastify__toast--success {}
  .Toastify__toast-body {
    font-size: 12px;
  }
  .Toastify__progress-bar {}
`;
