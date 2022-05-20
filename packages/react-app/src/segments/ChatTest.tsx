import React, { useState } from "react";
import styled, { useTheme } from "styled-components";

import Loader from "react-loader-spinner";
import {ThemeProvider} from "styled-components";

import ChatPrimary from "components/chat/ChatPrimary";
import ChatDisplayer from "components/chat/ChatDisplayer";

import {Section, Item, ItemH, Span, Anchor, RouterLink, Image} from 'components/SharedStyling';

// Create Header
function ChatTest() {
    const themes = useTheme();
    
    return (
      <ThemeProvider theme={themes}>
        <Container>
          <ItemH>

          </ItemH>
        </Container>
      </ThemeProvider>
    );
}

// css styles
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: ${props => props.theme.backgroundBGLucid};

  font-weight: 200;
  align-content: center;
  align-items: stretch;
  justify-content: center;
  height: inherit;

`;

const ScrollItem = styled(Item)`
  display: flex;
  align-self: stretch;
  align-items: stretch;
  justify-content: stretch;
  flex-wrap: nowrap;
  
  flex: 1;
  padding: 10px 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.scrollBg};
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    background-color: ${props => props.theme.scrollBg};
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(linear,
                       left top,
                       left bottom,
                       color-stop(0.44, #35c5f3),
                       color-stop(0.72, #35b0f3),
                       color-stop(0.86, #35a1f3));
  }
`;

const ContainerInfo = styled.div`
  padding: 20px;
`;

const CenteredContainerInfo = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterContainer = styled(ContainerInfo)`
  width: fit-content;
  align-self: center;
`;

// Export Default
export default ChatTest;