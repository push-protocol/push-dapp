
import { useState } from 'react';
import ReactGA from "react-ga";

import { Section } from 'components/SharedStyling';
import ChatModule from "modules/chat/ChatModule";
import styled from 'styled-components';

import GLOBALS from "config/Globals";

const ChatPage = (props) => {
  // React GA Analytics
  ReactGA.pageview("/chat");

  // SET LOADING
  const [loading, setLoading] = useState(true);

  // RENDER
  return (
    <Container>
      {/* {loading && 
        <ChatSignInModule />
      }
      {!loading &&  */}
        <ChatModule />
      {/* } */}
    </Container>
  );
}
export default ChatPage;

// This defines the page settings, toggle align-self to center if not covering entire stuff
const Container = styled(Section)`
    display: flex;
    flex-direction: column;
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - 52px - ${props => props.theme.interfaceTopPadding});
    align-items: center;
    align-self: stretch; 
`;