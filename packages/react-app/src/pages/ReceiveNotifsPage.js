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
  display: block;
  flex-direction: column;
  min-height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - 72px);
  background: ${props => props.theme.mainBg};
`;

// Export Default
export default ReceiveNotifsPage;
