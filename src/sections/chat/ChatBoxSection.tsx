// React + Web3 Essentials
import React from 'react';

// External Packages
import ChatBox from 'components/chat/w2wChat/chatBox/chatBox';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents

// Internal Configs
import GLOBALS from 'config/Globals';

// Chat Sections
// Divided into two, left and right
const ChatBoxSection = () => {
  // RENDER
  return (
    <ItemVV2 justifyContent="stretch" padding="20px">
      <ChatBox />
    </ItemVV2>
  );
}
export default ChatBoxSection;
