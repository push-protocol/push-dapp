import React from "react";
import ReactGA from "react-ga";

import styled, {useTheme} from "styled-components";
import { Section, Content, Item, ItemH, Span, H2, B, A, H3 } from "components/SharedStyling";

import Info from "segments/Info";

import GLOBALS from "config/Globals";

// Create Header
function ReceiveNotifsPage() {
  ReactGA.pageview("/receive");

  // get themes
  const themes = useTheme();

  // Render
  return (
    <Container>
      <Content className="contentBox" padding="20px 0px 0px 0px">
        <Item align="stretch" justify="flex-start" margin="0px 20px">

          <Item align="stretch" justify="flex-start" margin="0px 0px 0px 0px">
            <H2 textTransform="uppercase" spacing="0.1em" margin="10px 0px 20px 0px">
              <Span weight="200" color={themes.fontColor}>Receive </Span><Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">Notifications</Span>
            </H2>
            <H3 maxWidth="768px" color={themes.fontColorSecondary}>The following frontends enables receiving push alerts for your wallet. More coming soon!</H3>
          </Item>

          <Item align="stretch" justify="flex-start" margin="0px 0px 20px 0px">
            <Info />
          </Item>

        </Item>
      </Content>
    </Container>
  );
}

// css style
const Container = styled(Section)`
  flex: 1;
  flex-direction: column;
  height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - 52px - ${props => props.theme.interfaceTopPadding});
  background: ${props => props.theme.mainBg};
  align-self: stretch;
`;

// Export Default
export default ReceiveNotifsPage;
