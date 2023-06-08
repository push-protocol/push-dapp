// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import React, { useRef } from 'react';
import { ethers } from 'ethers';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import Dropdown, { DropdownValueType } from './Dropdown';
import { H3, Image, Item, ItemH } from './SharedStyling.js';
import { LOGO_FROM_CHAIN_ID, networkName } from 'helpers/UtilityHelper';
import { appConfig } from 'config/index.js';
import { useClickAway } from 'hooks/useClickAway';

// Internal Configs
import { SpanV2 } from './reusables/SharedStylingV2';
import { handleChangeNetwork } from 'helpers/ChainHelper';

const ChainIndicator = ({ isDarkMode }) => {
  const toggleArrowRef = useRef(null);
  const dropdownRef = useRef(null);
  const { error, account, library, chainId:currentChainId } = useWeb3React<ethers.providers.Web3Provider>();
  const theme = useTheme();

  const [showDropdown, setShowDropdown] = React.useState<boolean>(false);
  const [dropdownValues, setDropdownValues] = React.useState<DropdownValueType[]>([]);

  React.useEffect(() => {
    const dropdown: DropdownValueType[] = [];
    appConfig.allowedNetworks.map((chainId) => {
      const chainName = networkName[chainId];
      dropdown.push({
        id: chainId,
        value: chainName,
        title: chainName,
        icon: `./svg/${LOGO_FROM_CHAIN_ID[chainId]}`,
        function: () => {
          handleChangeNetwork(chainId, library.provider);
          setShowDropdown(false);
        },
      });
    });
    setDropdownValues(dropdown);
  }, [appConfig]);

  useClickAway(toggleArrowRef, dropdownRef, () => {
    setShowDropdown(false);
  });

  return (
    <>
      {account && account !== '' && !error && (
        <Container>
          <CurrentChain
            bg={theme.chainIndicatorBG}
            borderColor={theme.chainIndicatorBorderColor}
            isDarkMode={isDarkMode}
            onClick={() => setShowDropdown(!showDropdown)}
            ref={toggleArrowRef}
          >
            <CurrentChainInfo>
              <Image
                src={`./svg/${networkName[currentChainId].split(' ')[0]}.svg`}
                width="28px"
              />
              {/* will be shown only on mob devices */}
              <ChainName color={theme.chainIndicatorHeadingMobile}>{networkName[currentChainId]}</ChainName>
            </CurrentChainInfo>
            <ToggleArrowImg filter={theme.chainIndicatorBorderColor}>
              <img
                alt="arrow"
                className={`${showDropdown ? 'down' : 'up'}`}
                src="/svg/arrow.svg"
              />
            </ToggleArrowImg>
          </CurrentChain>
          {showDropdown && (
            <DropdownItem
              ref={dropdownRef}
              bg={theme.chainIndicatorDropdownBG}
              border={`1px solid ${theme.chainIndicatorBorderColor}`}
              radius="24px"
              align="flex-start"
              position="absolute"
              top="4.1rem"
              right="-0.5rem"
            >
              <H3
                color={theme.chainIndicatorHeading}
                margin="0px 1px 6px 0"
                textTransform="none"
                family="Strawford"
                spacing="0.01rem"
                weight="400"
                size="15px"
              >
                Select Network
              </H3>
              <Dropdown
                dropdownValues={dropdownValues}
                hoverBGColor={theme.chainIndicatorHoverBG}
                textColor={theme.chainIndicatorText}
                iconFilter={theme.chainIndicatorBorderColor}
              />
            </DropdownItem>
          )}
        </Container>
      )}
    </>
  );
};

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
  @media (max-width: 992px) {
    width: 100%;
    margin-right: 20px;
  }
`;
const CurrentChain = styled(SpanV2)`
  margin: 0px 1px;
  padding: 6px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.bg};
  border: ${(props) => `1px solid ${props.borderColor}`};
  border-radius: 19px;
  ${({ isDarkMode, bg }) =>
    isDarkMode &&
    `
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

  @media (max-width: 992px) {
    width: 100%;
    justify-content: space-between;
    border: none;
    background: none;
    margin: 10px 16px 25px 5px;
    padding: 4px 0;
  }
`;

const CurrentChainInfo = styled(ItemH)`
  justify-content: flex-start;
  flex-wrap: nowrap;
  padding: 2px;
`;

const ChainName = styled(H3)`
  display: none;
  font-family: 'Strawford';
  text-transform: none;
  margin: 10px 0 10px 15px;
  font-weight: 400;
  size: 18px;
  letter-spacing: -0.01em;
  cursor: pointer;

  @media (max-width: 992px) {
    display: flex;
  }
`;

const ToggleArrowImg = styled.div`
  margin-left: 0.3rem;
  margin-right: 0.2rem;
  filter: ${(props) => props.filter};
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
  img {
    width: 12px;
  }
`;

const DropdownItem = styled(Item)`
  background: ${(props) => props.bg};
  border: 1px solid ${(props) => props.border};
  border-radius: 16px;
  align-items: flex-start;
  padding: 1rem 0.9rem;
  position: absolute;
  top: 3rem;
  right: 0rem;
  z-index: 10;

  @media (max-width: 992px) {
    right: 0.9rem;
    top: 3.5rem;
  }
`;

export default ChainIndicator;
