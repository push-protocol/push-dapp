import React, { useState } from "react";
import ReactGA from "react-ga";

import { Section } from 'components/SharedStyling';
import AirdropModule from "modules/airdrop/AirdropModule";
import styled from 'styled-components';

import GLOBALS from "config/Globals";

// Other Information section
const AirdropPage = () => {
  // React GA Analytics
  ReactGA.pageview("/airdrop");

  // RENDER
  return (
    <Container>
      <AirdropModule />
    </Container>
  );
}
export default AirdropPage;

// This defines the page settings, toggle align-self to center if not covering entire stuff
const Container = styled(Section)`
    display: flex;
    flex-direction: column;
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - 52px - ${props => props.theme.interfaceTopPadding});
    align-items: center;
    align-self: stretch; 
`;