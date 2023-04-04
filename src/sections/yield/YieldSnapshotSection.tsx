// React + Web3 Essentials
import React from 'react';

// External Packages

// Internal Compoonents
import ChatBox from 'components/chat/w2wChat/chatBox/ChatBox';
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import GLOBALS from 'config/Globals';
import YieldStakingPoolComponent from 'components/yield/YieldStakingPoolComponent';
import styled from 'styled-components';

// Chat Sections
// Divided into two, left and right
const YieldSnapshotSection = () => {
  // RENDER
  return (
    <Container>
      <ItemHV2>
        {/* UNI V3 Liquidity */}
        
        <YieldStakingPoolComponent isV2={false}/>
        {/* <YieldStakingPoolComponent/> */}

        {/* Push Fee Accrual Staking */}
        {/* <ItemVV2 justifyContent="stretch">
          Push Fee Accrual Staking
          
        </ItemVV2> */}

        <YieldStakingPoolComponent  isV2={false}/>
      </ItemHV2>

      <ItemHV2>
        {/* UNI V2 Liquidity - Deprecated */}
        {/* <ItemVV2 justifyContent="stretch">
          Uni V2
        </ItemVV2> */}

        <YieldStakingPoolComponent isV2={true}/>

        {/* Push Staking - Deprecated */}
        {/* <ItemVV2 justifyContent="stretch">
          Push Staking
        </ItemVV2> */}

        <YieldStakingPoolComponent isV2={true}/>
      </ItemHV2>
    </Container>
  );
}
export default YieldSnapshotSection;

const Container = styled.div`
  overflow: scroll;
  height: 1000px;
`
