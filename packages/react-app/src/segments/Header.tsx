import React from "react";
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector'

import styled, { css } from 'styled-components';

import Profile from 'components/Profile';


// Create Header
function Header() {
  const { active, error, account, chainId } = useWeb3React();
  const randseed = new Array(4);

  React.useEffect(() => {
    if (account && account != '') {

    }
  }, [account]);

  function getErrorMessage(error: Error) {
    if (error instanceof NoEthereumProviderError) {
      return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
    } else if (error instanceof UnsupportedChainIdError) {
      return "Unsupported Network, please connect to Ropsten"
    } else if (
      error instanceof UserRejectedRequestErrorInjected
    ) {
      return 'Please authorize this website to access your Ethereum account.'
    } else {
      console.error(error)
      return 'An unknown error occurred. Check the console for more details.'
    }
  }

  // to create blockies

  return (
    <HeaderStyle>
      {active && !error &&
        <Profile />
      }
      <UserControls>

      </UserControls>
      <NetworkDisplayer>
        {!!error &&
          <PrimaryTheme>{getErrorMessage(error)}</PrimaryTheme>
        }
        <Connection phase={active ? 'active' : error ? 'error' : 'waiting'} />
      </NetworkDisplayer>

    </HeaderStyle>
  );
}

// CSS Styles
const HeaderStyle = styled.div`
  height: 100%;
  border-color: rgba(240,240,240,1);
  border-style: solid;
  border-width: 0 0 1px 0;
  padding: 5px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const UserControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const NetworkDisplayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PrimaryTheme = styled.span`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  margin: 10px;
  background: #e20880;
  color: #fff;
  border-radius: 20px;
  font-size: 14px;
`

const Connection = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 100%;

  ${props => props.phase === 'active' && css`
    background: #77DD77;
  `};

  ${props => props.phase === 'waiting' && css`
    background: #FFAE42;
  `};

  ${props => props.phase === 'error' && css`
    background: #DC143C;
  `};
`

// Export Default
export default Header;
