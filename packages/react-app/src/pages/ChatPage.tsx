import React from "react";

import styled, { useTheme } from 'styled-components';
import { Section } from 'components/SharedStyling';

import Chat from "segments/Chat";

import GLOBALS from "config/Globals";

function ChatPage(props) {
  const themes = useTheme();

  // Render
  return (
    <Container>
        <Chat />    
    </Container>
  );
}

const Container = styled(Section)`
    display: block;
    flex-direction: column;
    background: ${props => props.theme.mainBg};
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - 52px - ${props => props.theme.interfaceTopPadding});
    align-items: stretch;
    align-self: stretch;
`;


// Export Default
export default ChatPage;