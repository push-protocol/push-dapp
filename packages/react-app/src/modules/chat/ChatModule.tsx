import React from 'react';
import ReactGA from 'react-ga';

import styled, { useTheme } from 'styled-components';

import { ThemeProvider } from 'styled-components';

import W2wIndex from 'components/chat/w2wChat/w2wIndex';
import { Item, ItemH } from 'components/SharedStyling';
import GLOBALS, { device, globalsMargin } from "config/Globals";

// Create Header
function Chat() {
  // React GA Analytics
  ReactGA.pageview('/chat')
  
  window.ethereum.on('accountsChanged', (account) => {
    window.location.reload()
  })
  window.ethereum.on('networksChanged', () => {
    window.location.reload()
  })

  return (
    <Container>
      <ItemH>
        <W2wIndex />
      </ItemH>
    </Container>
  )
}

// css styles
const Container = styled.div`
	align-items: stretch;
	align-self: stretch;
  flex: 1;
	background: ${(props) => props.theme.default.bg};
	border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
	box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: column;
	flex: initial;
	justify-content: center;
	position: relative;
  overflow: hidden;
  box-sizing: border-box;

  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.DESKTOP.TOP} - ${globalsMargin.MINI_MODULES.DESKTOP.BOTTOM});
  
  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.TABLET.TOP} - ${globalsMargin.MINI_MODULES.TABLET.BOTTOM});
  }

  @media ${device.mobileM} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.MOBILE.TOP} - ${globalsMargin.MINI_MODULES.MOBILE.BOTTOM});
    border: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
`

// Export Default
export default Chat
