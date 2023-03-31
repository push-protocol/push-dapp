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
const YieldStatsSection = () => {
  // RENDER
  return (
    <ItemHV2>
      {/* Total Value Locked */}
      <ItemVV2 justifyContent="stretch">
        TVL
      </ItemVV2>

      {/* Push Rewards Given */}
      <ItemVV2 justifyContent="stretch">
        PRG
      </ItemVV2>

      {/* Time Left */}
      <ItemVV2 justifyContent="stretch">
        Time Left
      </ItemVV2>
    </ItemHV2>
  );
}
export default YieldStatsSection;
