// React + Web3 Essentials
import React, { useRef } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { useClickAway } from 'hooks/useClickAway';
import { Image, Item } from '../primaries/SharedStyling';
import Dropdown from './Dropdown';
import { getPublicAssetPath } from 'helpers/RoutesHelper';

type FaucetListType = {
  id: string;
  value: string;
  title: string;
  function: VoidFunction;
  link: string;
};

// Faucet URLs
const Faucets = () => {
  const theme = useTheme();
  const toggleArrowRef = useRef(null);
  const dropdownRef = useRef(null);

  const [showDropdown, setShowDropdown] = React.useState(false);

  useClickAway(toggleArrowRef, dropdownRef, () => {
    setShowDropdown(false);
  });

  const faucetList: FaucetListType[] = [
    {
      id: '11155111',
      value: 'Sepolia',
      title: 'Sepolia Faucet',
      function: () => {},
      link: 'https://sepoliafaucet.com/',
    },
    {
      id: '80002',
      value: 'Polygon',
      title: 'Amoy Faucet',
      function: () => {},
      link: 'https://faucet.polygon.technology/',
    },
    {
      id: '97',
      value: 'BNB',
      title: 'BNB Faucet',
      function: () => {},
      link: 'https://testnet.bnbchain.org/faucet-smart',
    },
    {
      id: '11155420',
      value: 'Optimism',
      title: 'Optimism Sepolia Faucet',
      function: () => {},
      link: 'https://faucet.quicknode.com/optimism/sepolia',
    },
    {
      id: '2442',
      value: 'Polygon zkEVM',
      title: 'Polygon zkEVM Bridge',
      function: () => {},
      link: 'https://faucet.polygon.technology/',
    },
    {
      id: '421614',
      value: 'Arbitrum',
      title: 'Arbitrum Testnet Faucet',
      function: () => {},
      link: 'https://faucet.quicknode.com/arbitrum/sepolia',
    },
    {
      id: '123',
      value: 'Fuse',
      title: 'Fuse Sparknet Faucet',
      function: () => {},
      link: 'https://chaindrop.org/?chainid=123&token=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    },
    {
      id: '111557560',
      value: 'Cyber',
      title: 'Cyber Faucet',
      function: () => {},
      link: 'https://cyber-testnet.testnets.rollbridge.app/',
    },
    {
      id: '84532',
      value: 'Base Sepolia',
      title: 'Base Sepolia Faucet',
      function: () => {},
      link: 'https://www.alchemy.com/faucets/base-sepolia',
    }
  ];

  // render
  return (
    <Container>
      <Faucet
        color={theme.viewChannelSearchText}
        onClick={() => setShowDropdown(!showDropdown)}
        ref={toggleArrowRef}
      >
        <ItemHBar>
          <Image
            src={getPublicAssetPath('svg/gasPump.svg')}
            alt="faucet"
            width="32px"
            height="32px"
          />
        </ItemHBar>
        Testnet Faucets
        <ToggleArrowImg>
          <img
            alt="arrow"
            className={`${showDropdown ? 'down' : 'up'}`}
            src={getPublicAssetPath('svg/arrow.svg')}
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
          padding="7px 14px 7px 14px"
          position="absolute"
          top="0rem"
          zIndex="10"
          right="-0.5rem"
        >
          <Dropdown dropdownValues={faucetList} />
        </Item>
      )}
    </Container>
  );
};

// Export Default
export default Faucets;

// css styles
const Container = styled.button`
  position: relative;
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  outline: 0;
  min-width: 230px;

  @media (max-width: 768px) {
    width: 100%;
    // padding: 0 0px 0px 0px;
  }
`;

const ItemHBar = styled.div`
  padding: 0 20px 0 0px;
`;
const Faucet = styled.div`
  margin: 0px 10px;
  padding: 5px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  border: 1px solid ${(props) => props.theme.faucetBorder};
  font-size: 15px;
  background: ${(props) => props.theme.faucetBg};
  color: ${(props) => props.theme.faucetText};
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

  @media (max-width: 768px) {
    border-radius: 37px;
    flex: 1;
    justify-content: flex-start;
  }
`;
const ToggleArrowImg = styled.div`
  margin-left: auto;
  filter: ${(props) => props.theme.faucetFilter};
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
