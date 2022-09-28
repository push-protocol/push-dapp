import React, { useState } from "react";

import styled from 'styled-components';

import { SectionV2 } from 'components/reusables/SharedStylingV2';
import GLOBALS from "config/Globals";
import ChannelsModule from "modules/channels/ChannelsModule";

// Other Information section
const ChannelsPage = ({ loadTeaser, playTeaser }) => {
  // RENDER
  return (
    <Container>
      <ChannelsModule loadTeaser={loadTeaser} playTeaser={playTeaser} />
    </Container>
  );
}
export default ChannelsPage;

// This defines the page settings, toggle align-self to center if not covering entire stuff, align-items to place them at center
// justify content flex start to start from top, height is defined by module as well as amount of margin, padding
const Container = styled(SectionV2)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`;