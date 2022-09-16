import React from 'react';

import { SectionV2 } from 'components/reusables/SharedStylingV2';
import ChatModule from 'modules/chat/ChatModule';
import styled, { useTheme } from 'styled-components';

import GLOBALS from 'config/Globals';

// Chat page
const ChatPage = () => {
  // RENDER
  return (
    <Container>
      <ChatModule />
    </Container>
  );
}
export default ChatPage;

// This defines the page settings, toggle align-self to center if not covering entire stuff, align-items to place them at center
// justify content flex start to start from top, height is defined by module as well as amount of margin, padding
const Container = styled(SectionV2)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`;