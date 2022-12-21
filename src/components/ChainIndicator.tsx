// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import React, { useRef } from "react";
import { ethers } from 'ethers';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import Dropdown from './Dropdown';
import { Item } from "../primaries/SharedStyling.js";
import { networkName, PolygonNetworks } from 'helpers/UtilityHelper';
import { appConfig } from 'config/index.js';
import { useClickAway } from 'hooks/useClickAway';

const ChainIndicator = ({isDarkMode}) => {
  const toggleArrowRef = useRef(null);
  const dropdownRef = useRef(null);
  const { error, account } = useWeb3React();
  const theme = useTheme();
  
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [dropdownValues, setDropdownValues] = React.useState([]);
  const [currentChainId, setCurrentChainId] = React.useState("");
  
  // fetches the current chain Id and sets the current chain Id state
  const fetchCurrentChainId = async ()=>{
    const currentChainId = await window.ethereum.request({
      method: 'eth_chainId',
    });
    setCurrentChainId(currentChainId);
  }

  // handles network change request
  async function handleChangeNetwork(chainId) {
    const chainIds = appConfig.allowedNetworks;
    if(chainIds.includes(chainId)){
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: ethers.utils.hexValue(chainId) }],
        });
        // await fetchCurrentChainId();
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          const networkDetails = {... PolygonNetworks[chainId === 137 ? "POLYGON_MAINNET" : "MUMBAI_TESTNET"]}
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [ networkDetails ],
            });
            // await fetchCurrentChainId();
          } catch (addError) {
            console.error(addError);
          }
        }
        console.log(switchError);
      }
    }
  }

  React.useEffect(() => {
    fetchCurrentChainId();
  }, []);
  
  React.useEffect(() => {
    const dropdown = [];
    appConfig.allowedNetworks.map((chainId) => {
        const chainName = networkName[chainId];
        dropdown.push({
            id: chainId,
            value: chainName,
            title: chainName,
            icon: `./svg/${networkName[chainId].split(' ')[0]}.svg`,
            function: () => {
              handleChangeNetwork(chainId);
              setShowDropdown(false);
            }
        })
    });
    setDropdownValues(dropdown);
  }, [appConfig]);
  
  useClickAway(toggleArrowRef,dropdownRef, () => {
    setShowDropdown(false);
  });
  
  return (
    <>
      {account && account !== "" && !error && (
        <Container>
          <CurrentChain
            bg={theme.profileBG} 
            color={theme.profileText} 
            isDarkMode={isDarkMode}
            onClick={() => setShowDropdown(!showDropdown)} 
            ref={toggleArrowRef}>
            {currentChainId === "" ? (
              <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={20} spinnerColor="#FFF" />
            ):(
              <>
                {networkName[+currentChainId]}
              </>
            )}
            <ToggleArrowImg 
              filter={isDarkMode?theme.snackbarBorderIcon:"brightness(0) invert(1)"}>
              <img
                alt="arrow"
                className={`${showDropdown ? "down" : "up"}`}
                src="/svg/arrow.svg"
              />
            </ToggleArrowImg>
          </CurrentChain>
          {showDropdown && (
            <DropdownItem
              ref={dropdownRef}
              bg={theme.header.bg}
              border={`1px solid ${theme.snackbarBorderColor}`}
              radius="24px"
              align="flex-start"
              padding="1.3rem"
              position="absolute"
              top="4.1rem"
              right="-0.5rem"
            >
              <Dropdown dropdownValues={dropdownValues} />
            </DropdownItem>
          )}
        </Container>
      )}
    </>
  );
}

// css styles
const Container = styled.button`
  position: relative;
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  outline: 0;
  justify-content: flex-start;
  flex: 1,
  flex-direction: row;
  align-items: center;
  display: flex;
`
const CurrentChain = styled.span`
  margin: 0px 10px;
  padding: 4px 16px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  color: ${props => props.color};
  border-radius:17px;
  background: ${props => props.bg};
  ${({ isDarkMode,bg }) => isDarkMode && `
    border: solid 3px transparent;
    background-image: linear-gradient(107deg, rgba(226,8,128,1) 30%, rgba(103,76,159,1) 70%, rgba(53,197,243,1) 100%), linear-gradient(107deg, rgba(226,8,128,1) 30%, rgba(103,76,159,1) 70%, rgba(53,197,243,1) 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px ${bg} inset;
  `}
 
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
const ToggleArrowImg = styled.div`
  margin-left: 2rem;
  filter:  ${props => props.filter};
  &:hover {
    cursor: pointer;
  }
  .down {
    transform: rotate(-180deg);
    transition: transform 0.25s;
  }

  .up {
    transform: rotate(-360deg);
    transition: transform 0.25s;
  }
`;

const DropdownItem= styled(Item)`
  background: ${props => props.bg};
  border:1px solid ${props => props.border};
  border-radius:24px;
  align-items:flex-start;
  padding:1.3rem;
  position:absolute;
  top:3.6rem;
  right:-0.5rem;
  z-index:10;
  @media (max-width: 992px) {
    right: unset;
    align-items:flex-start;
  }
`

// Export Default
export default ChainIndicator;
