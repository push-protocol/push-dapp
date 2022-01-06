import React from "react";

import styled, { css } from "styled-components";
import {Section, Item, ItemH, Button} from 'components/SharedStyling';

import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector'
import { Web3Provider } from 'ethers/providers'

import Profile from 'components/Profile';
import Bell from 'components/Bell';


// Create Header
function Header() {
  const context = useWeb3React<Web3Provider>()

  const { active, error } = useWeb3React();
  const { deactivate } = context

  const [showLoginControls, setShowLoginControls] = React.useState(false);

  function getErrorMessage(error: Error) {
    if (error instanceof NoEthereumProviderError) {
      return 'Web3 not enabled, install MetaMask on desktop or visit from a dApp browser on mobile'
    } else if (error instanceof UnsupportedChainIdError) {
      return "Unsupported Network, please connect to the Kovan or Polygon(Mumbai) network"
    } else if (
      error instanceof UserRejectedRequestErrorInjected
    ) {
      return 'Please authorize this website to access the dApp'
    } else {
      console.error(error)
      return 'An unknown error occurred. Check the console for more details'
    }
  }

  const bellPressed = () => {
    setShowLoginControls(!showLoginControls);
  }

  const disconnect = () => {
    setShowLoginControls(false);
    deactivate();
  }

  return (
    <HeaderContainer
      direction="row"
      padding="10px 15px"
    >
      <ItemH
        justify="flex-start"
        flex="0"
      >
        {active && !error &&
          <Profile />
        }
        {!active &&
          <Logo src="epns.png" />
        }
      </ItemH>

      <ItemH
        justify="flex-end"
      >
        {active && !error &&
          <Bell
            badgeCount={0}
            bellPressedCB={bellPressed}
            width={32}
            height={32}
          />
        }

        {showLoginControls &&
          <Item
            position="absolute"
          >
            <Button
              bg="#000"
              size="12px"
              spacing="0.2em"
              textTransform="uppercase"
              weight="600"
              radius="20px"
              onClick={() => disconnect()}
            >
              Disconnect
            </Button>
          </Item>
        }

        <ItemH
          justify="flex-end"
          flex="initial"
        >
          {!!error &&
            <PrimaryTheme>{getErrorMessage(error)}</PrimaryTheme>
          }
          {!active && !error &&
            <ThirdTheme>Please connect to a Web3 Network</ThirdTheme>
          }
          <Connection phase={active ? 'active' : error ? 'error' : 'waiting'} />
        </ItemH>
      </ItemH>
    </HeaderContainer>
  );
}

// CSS Styles
const HeaderContainer = styled(Section)`
  @media (max-width: 1440px) {
    background: rgb(255,255,255);
  }
`

const Logo = styled.img`
  height: 40px;
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
