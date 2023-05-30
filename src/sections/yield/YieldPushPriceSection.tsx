// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';

// Internal Compoonents
import { H2V2, ImageV2, ItemHV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import GLOBALS from 'config/Globals';
import { ethers } from 'ethers';

const YieldPushPriceSection = ({
  poolStats
}) => {
    function numberWithCommas(x) {
      return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

  // RENDER
  return (
    <ItemHV2Modified justifyContent="stretch">
      <H2V2ThemeColor
        fontSize="18px"
        textAlign="left"
        fontWeight={600}
      >
        Push Price
      </H2V2ThemeColor>
      <ItemHV2 gap="5px" justifyContent="flex-end">
        <H2V2ThemeColor
          fontSize="24px"
          textAlign="left"
          fontWeight={600}
        >
          $ 
          {/* 0.34 */}
          {numberWithCommas(poolStats?.pushPrice.toFixed(2))}
        </H2V2ThemeColor>
        <ImageV2
          width="25px"
          height="27px"
          src="svg/uniswapLogo.svg"
          alt="Uniswap Logo"
        />
      </ItemHV2>
    </ItemHV2Modified>
  );
}

export default YieldPushPriceSection;

// css styles
const ItemHV2Modified = styled(ItemHV2)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;

  border: 1px solid #BAC4D6;
  border-color: ${(props) => props.theme.default.borderColor};
  border-radius: 14px;
`;

const H2V2ThemeColor = styled(H2V2)`
  color: ${(props) => props.theme.stakingPrimaryText};
`;