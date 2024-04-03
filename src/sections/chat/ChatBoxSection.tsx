// React + Web3 Essentials
import React from 'react';

// External Packages

// Internal Compoonents
import ChatBox from 'components/chat/w2wChat/chatBox/ChatBox';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import GLOBALS from 'config/Globals';

// Chat Sections
// Divided into two, left and right
const ChatBoxSection = ({ showGroupInfoModal, triggerChatParticipant }) => {
  // RENDER
  return (
    <ItemVV2 justifyContent="center" >
      <ChatBox
        showGroupInfoModal={showGroupInfoModal}
        triggerChatParticipant={triggerChatParticipant}
      />
    </ItemVV2>
  );
}
export default ChatBoxSection;
