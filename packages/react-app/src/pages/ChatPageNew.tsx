import React from 'react'
import ReactGA from 'react-ga'

import styled, { useTheme, ThemeProvider } from 'styled-components'
import ChatSidebar from 'segments/ChatSidebar'
import ChatMainSection from 'segments/ChatMainSection'

import GLOBALS from 'config/Globals'
//

function ChatPage(): JSX.Element {
  // React GA Analytics
  ReactGA.pageview('/chat')

  const themes = useTheme()

  return (
    <ThemeProvider theme={themes}>
      <Container>
        <ChatSidebar />
        <ChatMainSection />
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: 'fixed';
  height: calc(
    100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - 150px -
      ${(props: { theme }): void => props.theme.interfaceTopPadding}
  );
  align-items: stretch;
  align-self: stretch;
  justify-content: unset;
  background: #fff;
  padding: 20px 20px 20px 0px;
  height: 83.6vh;
`

// Export Default
export default ChatPage
