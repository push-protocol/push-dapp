import React, { useEffect, useState } from 'react'
import ReactGA from 'react-ga'

import styled, { useTheme, ThemeProvider } from 'styled-components'
import { Section } from 'components/SharedStyling'
import Chat from 'segments/Chat'

import GLOBALS from 'config/Globals'
//

function ChatPage(props): JSX.Element {
  // React GA Analytics
  ReactGA.pageview('/chat')

  const themes = useTheme()
  return <Chat />
}

// const Container = styled(Section)`
//   display: block;
//   flex-direction: column;
//   position: 'fixed';
//   height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - 52px - ${(props) => props.theme.interfaceTopPadding});
//   align-items: stretch;
//   align-self: stretch;
// `

// Export Default
export default ChatPage
