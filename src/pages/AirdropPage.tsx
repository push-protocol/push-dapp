import React, { useState } from "react";
import ReactGA from "react-ga";

import { SectionV2 } from 'components/reusables/SharedStylingV2';
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

// This defines the page settings, toggle align-self to center if not covering entire stuff, align-items to place them at center, justify content flex start to start from top
const Container = styled(SectionV2)`
    display: flex;
    flex-direction: column;
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - 52px - ${props => props.theme.interfaceTopPadding});
    justify-content: flex-start;
`;