import React, { useState } from "react";
import ReactGA from "react-ga";

import { SectionV2 } from 'components/reusables/SharedStylingV2';
import GovModule from "modules/gov/GovModule";
import styled from 'styled-components';

import GLOBALS from "config/Globals";

// Other Information section
const GovPage = () => {
  // RENDER
  return (
    <Container>
      <GovModule />
    </Container>
  );
}
export default GovPage;

// This defines the page settings, toggle align-self to center if not covering entire stuff, align-items to place them at center, justify content flex start to start from top
const Container = styled(SectionV2)`
    display: flex;
    flex-direction: column;
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - 52px - ${props => props.theme.interfaceTopPadding});
    justify-content: flex-start;
    align-self: center;
    align-items: center;
`;