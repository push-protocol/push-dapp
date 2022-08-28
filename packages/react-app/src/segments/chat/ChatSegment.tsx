import React from 'react'
import styled, { useTheme } from 'styled-components'

import { ThemeProvider } from 'styled-components'

import W2wIndex from 'components/chat/w2wIndex'
import { Item, ItemH } from 'components/SharedStyling'

// Create Header
function Chat() {
  const themes = useTheme()
  window.ethereum.on('accountsChanged', account => {
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
  flex: 1;
  flex-direction: column;
  background: ${props => props.theme.mainBg};

  font-weight: 200;
  align-content: center;
  align-items: stretch;
  justify-content: center;
  height: inherit;
`

// Export Default
export default Chat
