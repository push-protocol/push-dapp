import React from 'react'
import styled, { useTheme } from 'styled-components'

import { ThemeProvider } from 'styled-components'

import W2wIndex from 'components/chat/w2wChat/w2wIndex.deprecated'
import { Item, ItemH } from 'components/SharedStyling'
import GLOBALS from 'config/Globals'

// Create Header
function Chat() {
  const themes = useTheme()
  window.ethereum.on('accountsChanged', (account) => {
    window.location.reload()
  })
  window.ethereum.on('networksChanged', () => {
    window.location.reload()
  })

  return (
    <ThemeProvider theme={themes}>
      <Container>
        <ItemH>
          <W2wIndex />
        </ItemH>
      </Container>
    </ThemeProvider>
  )
}

// css styles
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
export default Chat
