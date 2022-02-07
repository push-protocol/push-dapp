import React from "react";
import ReactGA from "react-ga";

import styled from "styled-components";

import Info from "segments/Info";

import GLOBALS from "config/Globals";

// Create Header
function ReceiveNotifsPage() {
  ReactGA.pageview("/receive");


  // Render
  return (
    <Container>
      <Info />
    </Container>
  );
}

// css style
const Container = styled.div`
  flex: 1;
  flex-direction: column;
  height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - 52px - ${props => props.theme.interfaceTopPadding});
  background: ${props => props.theme.mainBg};
  align-self: stretch;
`;

// Export Default
export default ReceiveNotifsPage;
