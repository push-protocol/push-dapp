import React from 'react'
import styled, { css } from 'styled-components'

import { Section } from 'components/SharedStyling'

// Create Chat Primary
function ChatPrimaryTopBar() {
  React.useEffect(() => {})

  // to create blockies
  return <Container>What's my purpose!</Container>
}

// css styles
const Container = styled(Section)`
  display: flex;
  background: ${props => props.theme.mainBg};
  align-self: stretch;
`

// Export Default
export default ChatPrimaryTopBar
