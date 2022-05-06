import React, { useContext } from "react";
import { useLocation } from 'react-router-dom';

import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector'
import { Web3Provider } from 'ethers/providers'
import { hexlify } from "ethers/utils";

import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import styled, { css, useTheme } from "styled-components";
import {Section, Item, ItemH, Button, Span} from 'components/SharedStyling';

import Profile from 'components/Profile';
import Bell from 'components/Bell';
import NavigationButton from 'components/NavigationButton';

import { NavigationContext } from "contexts/NavigationContext";

import GLOBALS from "config/Globals";
import { envConfig } from "@project/contracts";


// Create Header
function Header({ isDarkMode, darkModeToggle }) {
  // Get theme
  const theme = useTheme();

  // Get Web3 Context
  const context = useWeb3React<Web3Provider>()

  const { navigationSetup } = useContext(NavigationContext)

  const { active, error } = useWeb3React();
  const { deactivate } = context

  const [showLoginControls, setShowLoginControls] = React.useState(false);

  // Handle Nav Bar
  const [showNavBar, setShowNavBar] = React.useState(false);

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
      Object.entries(navigationSetup.navigation).forEach(([key, value]) => {
        const item = navigationSetup.navigation[key];
        if (location.pathname === item.data.href) {
          setHeaderTag(item.data.headerTag);
        }
      })
    }
  }

async function handleChangeNetwork(){
const chainIds = envConfig.allowedNetworks;
  if (!chainIds.includes(window.ethereum.networkVersion)) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: hexlify(envConfig.coreContractChain) }]
          });
        } catch (err) {
          console.error(err);
        }
      }
}

  // handle error functions
  function getErrorMessage(error: Error) {
    if (error instanceof NoEthereumProviderError) {
      return 'Web3 not enabled, install MetaMask on desktop or visit from a dApp browser on mobile'
    } else if (error instanceof UnsupportedChainIdError) {
      handleChangeNetwork();
      if(envConfig.coreContractChain === 42)
      return "Unsupported Network, please connect to the Ethereum Kovan network or Polygon Mumbai network"
      else 
      return "Unsupported Network, please connect to the Ethereum Mainnet network"
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
    <Container
      direction="row"
      padding="0px 15px"
    >
      
      <ItemH
        justify="flex-start"
        flex="0"
      >
        <RightBarContainer
          justify="flex-start"
          flex="0"
        >
          <RightBarDesktop
            justify="flex-start"
            flex="0"
          >
            {active && !error &&
              <Profile />
            }
            {!active &&
              <Logo src="epns.png" />
            }
          </RightBarDesktop>
          
          {active && !error &&
            <RightBarMobile>
              <Button
                bg="transparent"
                padding="5px"
                radius="4px"
                onClick={() => {setShowNavBar(!showNavBar)}}
              >
                <AiOutlineMenu size={30} color={theme.headerIconsBg}/>
              </Button>
            </RightBarMobile>
          }
        </RightBarContainer>
        
        {navigationSetup && showNavBar && active && !error &&
          <NavMenuContainer
            tabletAlign="flex-start"
          >
            <NavMenu>
              <Profile />

              <NavMenuInner
                tabletAlign="flex-start"
              >
                {Object.keys(navigationSetup.navigation).map(function(key) {
                  return (
                    <Item
                      onClick={() => {setShowNavBar(!showNavBar)}}
                    >
                      <NavigationButton
                        item={navigationSetup.navigation[key]}
                        data={navigationSetup.navigation[key].data}
                        sectionID={GLOBALS.CONSTANTS.NAVBAR_SECTIONS.MOBILE}
                        active={navigationSetup.navigation[key].active}
                      />
                    </Item>
                  );
                })}
              </NavMenuInner>
            </NavMenu>

            <Item
              position="absolute"
              top="15px"
              right="5px"
            >
              <Button
                bg="transparent"
                padding="5px"
                radius="4px"
                onClick={() => {setShowNavBar(!showNavBar)}}
              >
                <AiOutlineClose size={30} color={theme.headerIconsBg}/>
              </Button>
            </Item>

          </NavMenuContainer>
        }
      </ItemH>

      <ItemH
        justify="flex-end"
      >
        {headerTag && active && !error &&
          <HeaderTag
            align="flex-start"
            overflow="hidden"
            margin="0px 5px"
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
         <DarkModeSwitch
              style={{ margin: '0 1rem' }}
              checked={isDarkMode}
              onChange={darkModeToggle}
              size={24}
              sunColor="#ddd"
            />

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
  height: ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px;
`

const Logo = styled.img`
  height: 40px;
`

const RightBarContainer = styled(ItemH)`

`

const RightBarDesktop = styled(ItemH)`
  @media (max-width: 992px) {
    display: none;
  }
`

const RightBarMobile = styled(ItemH)`
  margin: 5px 5px 5px -5px;
  
  @media (min-width: 993px) {
    display: none;
  }
`

const NavMenuContainer = styled(Item)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  align-items: flex-start;

  background: ${props => props.theme.navMenuBg};
  backdrop-filter: blur(30px);
  z-index: 11;
`

const NavMenu = styled(Item)`
  align-items: stretch;
  justify-content: flex-start;
  padding: 10px 10px;
`

const NavMenuInner = styled(Item)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: scroll;
  height: calc(100vh - 70px);
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
  flex: 1;
  margin="5px 15px 5px 15px"

  @media (min-width: 993px) {
    margin: "5px 10px";
  }
`

const DarkMode = styled(Item)`
  @media (max-width: 768px) {
    display: none;
  }
`

// Export Default
export default Header;
