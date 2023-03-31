// React + Web3 Essentials
import React from 'react';

// External Packages

// Internal Compoonents
import ChatBox from 'components/chat/w2wChat/chatBox/ChatBox';
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';

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
        <ItemVV2 justifyContent="stretch">
          Uni V3
        </ItemVV2>

        {/* Push Fee Accrual Staking */}
        <ItemVV2 justifyContent="stretch">
          Push Fee Accrual Staking
        </ItemVV2>
      </ItemHV2>

      <ItemHV2>
        {/* UNI V2 Liquidity - Deprecated */}
        <ItemVV2 justifyContent="stretch">
          Uni V2
        </ItemVV2>

        {/* Push Staking - Deprecated */}
        <ItemVV2 justifyContent="stretch">
          Push Staking
        </ItemVV2>
      </ItemHV2>
    </>
  );
}
export default YieldSnapshotSection;
