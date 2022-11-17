// React + Web3 Essentials
import React, { useState } from "react";

// External Packages
import styled from 'styled-components';

// Internal Components
import { SectionV2 } from 'components/reusables/SharedStylingV2';
import InboxModule from "modules/inbox/InboxModule";

// Internal Configs
import GLOBALS from "config/Globals";

// Other Information section
const InboxPage = () => {
  // RENDER
  return (
    <Container>
      <InboxModule />
    </Container>
  );
}
export default InboxPage;

// This defines the page settings, toggle align-self to center if not covering entire stuff, align-items to place them at center
// justify content flex start to start from top, height is defined by module as well as amount of margin, padding
const Container = styled(SectionV2)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`;