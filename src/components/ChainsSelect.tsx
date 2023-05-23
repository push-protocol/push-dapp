// React + Web3 Essentials
import React, { useEffect, useRef, useState } from "react";

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { Image, Item, ItemH } from '../primaries/SharedStyling';
import { useClickAway } from "hooks/useClickAway";
import Dropdown from "./Dropdown";

// Internal Configs
import { appConfig, CHAIN_DETAILS } from "config";
import { LOGO_FROM_CHAIN_ID } from "helpers/UtilityHelper";

// Faucet URLs
const ChainsSelect = ({channelsNetworkId, setChannelsNetworkId}) => {
  const theme = useTheme();
  const toggleArrowRef = useRef(null);
  const dropdownRef = useRef(null);

  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownValues, setDropdownValues] = useState([]);

  useClickAway(toggleArrowRef,dropdownRef, () => {
    setShowDropdown(false);
  });

  useEffect(() => {
    const dropdown = [];
    appConfig.allowedNetworks.map((chainId: number) => {
        dropdown.push({
            id: chainId,
            value: CHAIN_DETAILS[chainId].label,
            title: CHAIN_DETAILS[chainId].label,
            icon: `./svg/${LOGO_FROM_CHAIN_ID[chainId]}`,
            function: () => {
              setChannelsNetworkId(chainId);
              setShowDropdown(false);
            }
        })
    });
    setDropdownValues(dropdown);
  }, [appConfig]);

  // render
  return (
    <Container>
      <Faucet color={theme.viewChannelSearchText} onClick={() => setShowDropdown(!showDropdown)} ref={toggleArrowRef}>
        <ItemH padding="0 8px 0 0">
          <Image src={`./svg/${LOGO_FROM_CHAIN_ID[channelsNetworkId]}`} alt="active chain" width="32px" height="32px" />
        </ItemH>
         <Item width="max-content" className="text">{CHAIN_DETAILS[channelsNetworkId].label}</Item>
        <ToggleArrowImg>
          <img
            alt="arrow"
            className={`${showDropdown ? "down" : "up"}`}
            src="/svg/arrow.svg"
          />
        </ToggleArrowImg>
      </Faucet>
      {showDropdown && (
        <DropdownContainer
          ref={dropdownRef}
          bg={theme.default.secondaryBg}
          border={`1px solid ${theme.snackbarBorderColor}`}
          radius="24px"
          align="flex-start"
          padding="7px 20px 7px 14px"
          position="absolute"
          top="0rem"
          zIndex="10"
          right="-0.5rem"
        >
          <Dropdown dropdownValues={dropdownValues} />
        </DropdownContainer>
      )}
    </Container>
  );
}

// Export Default
export default ChainsSelect;

// css styles
const Container = styled.button`
  position:relative;
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  outline: 0;
  justify-content: flex-start;
  flex: 1;
  flex-direction: row;
  align-items: center;
  display: flex;
`

const DropdownContainer = styled(Item)`
background: ${(props)=>props.theme.default.secondaryBg};
border:1px solid;
border-color:${(props)=>props.theme.snackbarBorderColor};
border-radius:24px;
align-items:flex-start;
padding:7px 20px 7px 14px;
position:absoltue;
top:0rem;
z-index:10;
right:-0.5rem;

@media (max-width:768px){
  right:0px;
}


`

const Faucet = styled.span`
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  border: 1px solid ${props => props.theme.faucetBorder};
  font-size: 15px;
  background: ${props => props.theme.faucetBg};
  color: ${props => props.theme.faucetText};
  border-radius: 20px;
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
  @media (max-width: 768px){
    border-radius: 37px;
    height: 45px;
    padding: 2px 10px;
  }
  .text{
    display: flex;
    color: ${props => props.theme.faucetText};
    @media (max-width: 600px){
      display: none;
    }
  }
`
const ToggleArrowImg = styled.div`
  margin-left: 1rem;
  filter: ${props => props.theme.faucetFilter};

  @media (max-width: 600px){
    margin-left:0rem;
  }

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
