// React + Web3 Essentials
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

// External Packages
import styled from 'styled-components';
import { AiFillExclamationCircle } from 'react-icons/ai';

// Internal Components
import { SectionV2 } from 'components/reusables/SharedStylingV2';
import InboxModule from 'modules/inbox/InboxModule';
import { Menu } from 'blocks/menu/Menu';
import { MenuItem } from 'blocks/menu/MenuItem';

// Internal Configs
import GLOBALS from 'config/Globals';

// Other Information section
const InboxPage = () => {
  // RENDER
  const location = useLocation();
  return (
    <Container>
      <Menu>
        <MenuItem
          icon = {() => (<AiFillExclamationCircle
            color="pink"
            size="20"
          />)}
          onClick = {() => {}}
          label = "Archive" 
          />
        <MenuItem
          icon=""
          onClick={() => {}}
          label="New Archive" 
        />
        <MenuItem
          icon=""
          onClick={() => {}}
          label="Delete"
        />
      </Menu>
      <InboxModule isSpam={location.pathname === '/spam' ? true : false} />
    </Container>
  );
};
export default InboxPage;

// This defines the page settings, toggle align-self to center if not covering entire stuff, align-items to place them at center
// justify content flex start to start from top, height is defined by module as well as amount of margin, padding
const Container = styled(SectionV2)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`;
