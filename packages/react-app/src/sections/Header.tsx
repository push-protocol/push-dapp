import React, { useContext } from "react";
import { useLocation } from 'react-router-dom';

import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector'
import { Web3Provider } from 'ethers/providers'

import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { SwitchTransition, CSSTransition } from "react-transition-group";

import styled, { css } from "styled-components";
import {Section, Item, ItemH, Button, Span} from 'components/SharedStyling';

import Profile from 'components/Profile';
import Bell from 'components/Bell';

import { NavigationContext } from "contexts/NavigationContext";

// Create Header
function Header({ isDarkMode, darkModeToggle }) {
  // Get Web3 Context
  const context = useWeb3React<Web3Provider>()

  const { navigationSetup } = useContext(NavigationContext)

  const { active, error } = useWeb3React();
  const { deactivate } = context

  const [showLoginControls, setShowLoginControls] = React.useState(false);

  // Handle Header Tag
  const [ headerTag, setHeaderTag ] = React.useState(null);

  // Get Location
  const location = useLocation();

  React.useEffect(() => {
    // runs when navigation setup is updated, will run on init
    updateHeaderTag(location)
  }, [navigationSetup])

  // Change text based on change of location
  React.useEffect(() => {
    // runs on location, i.e. route, change
    updateHeaderTag(location)
  }, [location])

  // handle header tag update
  const updateHeaderTag = (location) => {
    if (navigationSetup) {
      Object.entries(navigationSetup).forEach(([key, value]) => {
        const item = navigationSetup[key];
        if (location.pathname === item.data.href) {
          setHeaderTag(item.data.headerTag);
        }
      })
    }
    
  }

  // handle error functions
  function getErrorMessage(error: Error) {
    if (error instanceof NoEthereumProviderError) {
      return 'Web3 not enabled, install MetaMask on desktop or visit from a dApp browser on mobile'
    } else if (error instanceof UnsupportedChainIdError) {
      return "Unsupported Network, please connect to the Ethereum mainnet or Polygon network"
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
    // setShowLoginControls(!showLoginControls);
    console.log(navigationSetup);
  }

  const disconnect = () => {
    setShowLoginControls(false);
    deactivate();
  }

  return (
    <Container
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
        {headerTag && 
          <HeaderTag
            align="flex-start"
            margin="5px 15px"
            overflow="hidden"
          >
            <Span
              textTransform="uppercase"
              spacing="0.1em"
              weight="normal"
              padding="8px 15px"
              bg={!isDarkMode ? headerTag.light.bg : headerTag.dark.bg}
              color={!isDarkMode ? headerTag.light.fg : headerTag.dark.fg}
            >
              {headerTag.title}
            </Span>
          </HeaderTag>
        }
        
        {active && !error &&
          <Bell
            badgeCount={0}
            bellPressedCB={bellPressed}
            width={32}
            height={32}
          />
        }
      
      <DarkMode
        flex="initial"
        justify="flex-end"
        padding="16px"
        margin="0px 10px 0px 0px"
        position="relative"
        border-radius="100%"
      >
        <Item
          position="absolute"
          top="4px"
        >
          <DarkModeSwitch
            style={{ marginBottom: '2rem' }}
            checked={isDarkMode}
            onChange={darkModeToggle}
            size={24}
            sunColor="#ddd"
          />
        </Item>
      </DarkMode>

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
              onClick={disconnect}
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
    </Container>
  );
}

// CSS Styles
const Container = styled(Section)`
  background: ${props => props.theme.headerBg};
  border-bottom: 1px solid ${props => props.theme.sectionBorderBg};
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

const HeaderTag = styled(Item)`
  @media (max-width: 768px) {
    display: none;
  }
`

const DarkMode = styled(Item)`
  @media (max-width: 768px) {
    display: none;
  }
`

// Export Default
export default Header;
