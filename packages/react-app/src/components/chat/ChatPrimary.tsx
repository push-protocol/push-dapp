import React from "react";
import styled, { css } from 'styled-components';

import { Section } from 'components/SharedStyling';

import ChatPrimaryTopBar from 'components/chat/ChatPrimaryTopBar';
import ChatPrimaryContent from 'components/chat/ChatPrimaryContent';
import ChatPrimaryBottomBar from 'components/chat/ChatPrimaryBottomBar';

// Create Chat Primary
function ChatPrimary() {
  React.useEffect(() => {

  });

  // to create blockies

  return (
    <Container>
      <ChatPrimaryTopBar />
      <ChatPrimaryContent />
      <ChatPrimaryBottomBar />
    </Container>
  );
}

// css styles
const Container = styled(Section)`
    display: flex;
    flex: initial;
    background: ${props => props.theme.mainBg};
    min-width: 300px;
    align-self: stretch;
    justify-content: flex-start;
`

// Export Default
export default ChatPrimary;
