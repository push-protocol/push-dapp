// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';

// Internal Compoonents
import ChatBox from 'components/chat/w2wChat/chatBox/ChatBox';
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import YieldUniswapV3 from 'components/yield/YieldUniswapV3';
import YieldPushFeeV3 from 'components/yield/YieldPushFeeV3';
import YieldUniswapV2 from 'components/yield/YieldUniswapV2';
import YieldPushFeeV2 from 'components/yield/YieldPushFeeV2';

// Internal Configs
import GLOBALS from 'config/Globals';


// Chat Sections
// Divided into two, left and right
const YieldSnapshotSection = () => {
  // RENDER
  return (
    <>
      <ItemHV2>
        {/* UNI V3 Liquidity */}
        
        {/* <YieldStakingPoolComponent isV2={false}/> */}

        <YieldUniswapV3/>
        {/* <YieldStakingPoolComponent/> */}

        {/* Push Fee Accrual Staking */}
        {/* <ItemVV2 justifyContent="stretch">
          Push Fee Accrual Staking
          
        </ItemVV2> */}

        <YieldPushFeeV3/>
      </ItemHV2>

      <ItemHV2>
        {/* UNI V2 Liquidity - Deprecated */}
        {/* <ItemVV2 justifyContent="stretch">
          Uni V2
        </ItemVV2> */}

        <YieldUniswapV2/>

        {/* Push Staking - Deprecated */}
        {/* <ItemVV2 justifyContent="stretch">
          Push Staking
        </ItemVV2> */}

        <YieldPushFeeV2/>
      </ItemHV2>
    </>
  );
}
export default YieldSnapshotSection;

// const Container = styled.div`
//   overflow: scroll;
//   height: 1000px;
// `
