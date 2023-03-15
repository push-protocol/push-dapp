// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';

// Internal Components
import { SectionV2 } from 'components/reusables/SharedStylingV2';
import { ChatModuleNew } from 'modules/chat/ChatModuleNew';

// Internal Configs

// Chat page
export const ChatPageNew = () => {
  // RENDER
  return (
    <Container>
      <ChatModuleNew />
    </Container>
  );
}

// This defines the page settings, toggle align-self to center if not covering entire stuff, align-items to place them at center
// justify content flex start to start from top, height is defined by module as well as amount of margin, padding
const Container = styled(SectionV2)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`;