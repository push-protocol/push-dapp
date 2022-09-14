import React, { useState } from "react";
import ReactGA from "react-ga";

import { SectionV2 } from 'components/reusables/SharedStylingV2';
import ChannelDashboardModule from "modules/channelDashboard/channelDashboardModule";
import styled from 'styled-components';

import GLOBALS from "config/Globals";

// Other Information section
const ChannelDashboardPage = () => {
  // RENDER
  return (
    <Container>
      <ChannelDashboardModule />
    </Container>
  );
}
export default ChannelDashboardPage;

// This defines the page settings, toggle align-self to center if not covering entire stuff, align-items to place them at center
// justify content flex start to start from top, height is defined by module as well as amount of margin, padding
const Container = styled(SectionV2)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content:flex-start;
`;