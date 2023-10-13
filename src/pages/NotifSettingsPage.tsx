// React + Web3 Essentials
import React from "react";

// External Packages
import styled from 'styled-components';

// Internal Components
import { SectionV2 } from 'components/reusables/SharedStylingV2';
import NotificationSettings from "modules/notifSettings/NotifSettingsModule";

// Page structure
const SendNotifsPage = () => {
  // RENDER
  return (
    <Container>
      <NotificationSettings />
    </Container>
  );
}
export default SendNotifsPage;

// This defines the page settings, toggle align-self to center if not covering entire stuff, align-items to place them at center
// justify content flex start to start from top, height is defined by module as well as amount of margin, padding
const Container = styled(SectionV2)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`;