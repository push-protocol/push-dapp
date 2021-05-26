import React from "react";
import ReactGA from 'react-ga';

import styled from 'styled-components';
import {Section, Content, Item, ItemH, Span, H2, H3, B, A} from 'components/SharedStyling';

import Loader from 'react-loader-spinner'

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
  walletconnect,
  portis,
  trezor,
  ledger
} from 'connectors'
import { addresses, abis } from "@project/contracts";
import { ethers } from "ethers";

import Home from 'pages/Home';
import Header from 'segments/Header';

import * as dotenv from "dotenv";
dotenv.config();

const web3Connectors = {
  Injected: {obj: injected, logo: './svg/login/metamask.svg', title: 'MetaMask'},
  WalletConnect: {obj: walletconnect, logo: './svg/login/walletconnect.svg', title: 'Wallet Connect'},
  // Trezor: {obj: trezor, logo: './svg/login/trezor.svg', title: 'Trezor'},
  Ledger: {obj: ledger, logo: './svg/login/ledger.svg', title: 'Ledger'},
  Portis: {obj: portis, logo: './svg/login/portis.svg', title: 'Portis'},
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


function App() {
  const context = useWeb3React<Web3Provider>()
  const { connector, library, chainId, account, activate, deactivate, active, error } = context

  const [ badgeCount, setBadgeCount ] = React.useState(0);
  const [ bellPressed, setBellPressed ] = React.useState(0);

  // Initialize GA
  ReactGA.initialize('UA-165415629-5');
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
          <Item>
            <ProviderLogo src="./epnshomelogo.png" srcSet={"./epnshomelogo@2x.png 2x, ./epnshomelogo@2x.png 3x"} />
            <Item
              bg="#fafafa"
              border="1px solid #ddd"
              padding="15px"
              radius="12px"
            >
              <H2 textTransform="uppercase" spacing="0.1em">
                <Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">Connect</Span><Span weight="200"> Your Wallet</Span>
              </H2>

              <ItemH
                maxWidth="800px"
                align="stretch"
              >
                {Object.keys(web3Connectors).map(name => {
                  const currentConnector = web3Connectors[name].obj
                  const activating = currentConnector === activatingConnector
                  const connected = currentConnector === connector
                  const disabled = !triedEager || !!activatingConnector || connected || !!error
                  const image = web3Connectors[name].logo
                  const title = web3Connectors[name].title

                  return (
                    <ProviderButton
                      disabled={disabled}
                      key={name}
                      onClick={() => {
                        setActivatingConnector(currentConnector)
                        activate(currentConnector)
                      }}
                      border="#35c5f3"
                    >
                      <ProviderImage src={image} />

                      <Span
                        spacing="0.1em"
                        textTransform="uppercase"
                        size="12px"
                        weight="600"
                        padding="10px"
                      >
                        {title}
                      </Span>
                    </ProviderButton>
                  )
                })}
              </ItemH>
            </Item>

            <Span margin="10px" size="14px">
              By unlocking your wallet, <B>You agree</B> to our <A href="https://epns.io/tos" target="_blank">Terms of Service</A> and our <A href="https://epns.io/privacy" target="_blank">Privacy Policy</A>.
            </Span>
          </Item>
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
const HeaderContainer = styled.header`
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
  margin: 80px 20px 50px 20px;
  flex: 1;
`

const HomeContainer = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
  width: 100%;
  max-width: 1100px;
`

const ProviderLogo = styled.img`
  width: 15vw;
  align-self: center;
  display: flex;
  margin: 10px 20px 20px 20px;
  min-width: 200px;
`

const ProviderButton = styled.button`
  flex: 1 1 0;
  min-width: 280px;
  background: #fff;
  outline: 0;

  box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: 1px solid rgb(225,225,225);

  margin: 20px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  display: flex;
  flex-direction: row;
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
  width: 32px;
  max-height: 32px;
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
