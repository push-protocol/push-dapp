import React from "react";
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector'

import styled, { css } from 'styled-components';

import Profile from 'components/Profile';
import Bell from 'components/Bell';


// Create Header
function Header({ badgeCount, bellPressedCB }) {
  const { active, error, account, chainId } = useWeb3React();
  const randseed = new Array(4);

  React.useEffect(() => {
    if (account && account != '') {

    }
  }, [account]);

  function getErrorMessage(error: Error) {
    if (error instanceof NoEthereumProviderError) {
      return 'Web3 not enabled, install MetaMask on desktop or visit from a dApp browser on mobile'
    } else if (error instanceof UnsupportedChainIdError) {
      return "Unsupported Network, please connect to Ropsten"
    } else if (
      error instanceof UserRejectedRequestErrorInjected
    ) {
      return 'Please authorize this website to access the dApp'
    } else {
      console.error(error)
      return 'An unknown error occurred. Check the console for more details'
    }
  }

  // to create blockies

  return (
    <HeaderStyle>
      <ProfileContainer>
      {active && !error &&
        <Profile />
      }
      {!active &&
        <Logo src="epns.png" />
      }
      </ProfileContainer>
      <UserControls>
        {active && !error &&
          <Bell
            badgeCount={badgeCount}
            bellPressedCB={bellPressedCB}
            width={40}
            height={40}
          />
        }
      </UserControls>
      <NetworkDisplayer>
        {!!error &&
          <PrimaryTheme>{getErrorMessage(error)}</PrimaryTheme>
        }
        {!active && !error &&
          <ThirdTheme>Please connect to a Web3 Network</ThirdTheme>
        }
        <Connection phase={active ? 'active' : error ? 'error' : 'waiting'} />
      </NetworkDisplayer>

    </HeaderStyle>
  );
}

// CSS Styles
const HeaderStyle = styled.div`
  height: 100%;
  padding: 10px 15px;
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 21%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const ProfileContainer = styled.div`
  display: flex;
  flex: 1;
  justfy-content: flex-start;
`

const Logo = styled.img`
  height: 45px;
`

const UserControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageButton = styled.button`

`

const NetworkDisplayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Notice = styled.span`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  margin: 10px;
  color: #fff;
  border-radius: 20px;
  font-size: 14px;
`

const PrimaryTheme = styled(Notice)`
  background: #e20880;
`

const ThirdTheme = styled(Notice)`
  background: #674c9f;
`

const Connection = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 100%;
  flex-shrink: 0;

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
