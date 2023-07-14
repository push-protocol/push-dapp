// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';

// Internal Compoonents
import { H2V2, ImageV2, ItemHV2, Skeleton, SkeletonLine } from 'components/reusables/SharedStylingV2';

// Internal Configs
import GLOBALS from 'config/Globals';
import { ethers } from 'ethers';
import { useDeviceWidthCheck } from 'hooks';

const YieldPushPriceSection = ({
  poolStats
}) => {
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const isMobile = useDeviceWidthCheck(600);

  // RENDER
  return (
    <ItemHV2Modified justifyContent="stretch">
      {poolStats ? (
        <>
          <H2V2ThemeColor
            fontSize={isMobile ? "16px" : "18px"}
            textAlign="left"
            fontWeight={600}
          >
            Push Price
          </H2V2ThemeColor>
          <ItemHV2 gap="5px" justifyContent="flex-end">
            <H2V2ThemeColor
              fontSize={ isMobile ? "18px " : "24px"}
              textAlign="left"
              fontWeight={600}
            >
              $
              {/* 0.34 */}
              {numberWithCommas(poolStats?.pushPrice.toFixed(2))}
            </H2V2ThemeColor>
            <ImageV2
              width="25px"
              height={isMobile ? "20px" : "27px"}
              src="svg/uniswapLogo.svg"
              alt="Uniswap Logo"
            />
          </ItemHV2>
        </>
      ) : (
        <SkeletonContainer
        >
          <SkeletonLine height='12px' width='135px' margin='10px 0 10px 0' ></SkeletonLine>
          <SkeletonLine height='12px' width='135px' margin='10px 0 10px 0' ></SkeletonLine>
        </SkeletonContainer>
      )}
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

  @media (max-width:600px){
    padding: 7px 14px;
  }


`;

const H2V2ThemeColor = styled(H2V2)`
  color: ${(props) => props.theme.stakingPrimaryText};
`;

const SkeletonContainer = styled(Skeleton)`
    // width:150px;
    z-index:1;
    align-items:baseline;
    max-width:-webkit-fill-available;
    border-radius: 5px;
    gap:5px;
    flex-direction: row;
    justify-content: inherit;
    flex: 1;
`