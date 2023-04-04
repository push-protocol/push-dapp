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
      <V3Container>
        <YieldUniswapV3/>
        <YieldPushFeeV3/>
      </V3Container>

      <V2Container>
        <YieldUniswapV2/>
        <YieldPushFeeV2/>
      </V2Container>
    </>
  );
}
export default YieldSnapshotSection;

const V3Container = styled(ItemHV2)`
  @media (max-width:900px){
    flex-direction:column;
  }
`
const V2Container = styled(ItemHV2)`
  @media (max-width:900px){
    flex-direction:column;
  }
`