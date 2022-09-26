// React + Web3 Essentials
import React, { useEffect, useRef, useState } from "react";

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { Image, Item, ItemH } from '../primaries/SharedStyling';
import { useClickAway } from "hooks/useClickAway";
import Dropdown from "./Dropdown";
import { networkName } from "helpers/UtilityHelper";

// Internal Configs
import { appConfig } from "config";

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
    appConfig.allowedNetworks.map((chainId) => {
        dropdown.push({
            id: chainId,
            value: networkName[chainId].split(' ')[0],
            title: networkName[chainId].split(' ')[0],
            icon: `./svg/${networkName[chainId].split(' ')[0]}.svg`,
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
          <Image src={`./svg/${networkName[channelsNetworkId].split(' ')[0]}.svg`} alt="active chain" width="32px" height="32px" />
        </ItemH>
        {networkName[channelsNetworkId].split(' ')[0]}
        <ToggleArrowImg>
          <img
            alt="arrow"
            className={`${showDropdown ? "down" : "up"}`}
            src="/svg/arrow.svg"
          />
        </ToggleArrowImg>
      </Faucet>
      {showDropdown && (
        <Item
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
        </Item>
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
  flex: 1,
  flex-direction: row;
  align-items: center;
  display: flex;
`
const Faucet = styled.span`
  margin: 0px 5px;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  border: 1px solid ${props => props.theme.faucetBorder};
  font-size: 15px;
  background: ${props => props.theme.faucetBg};
  color: ${props => props.theme.faucetText};
  border-radius:20px;
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
  margin-left: 1rem;
  filter: ${props => props.theme.faucetFilter};
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
