// React + Web3 Essentials
import React from 'react';

// External Packages
import styled,{useTheme } from 'styled-components';

// Internal Components
import { SectionV2 } from 'components/reusables/SharedStylingV2';
import { SpaceModule } from 'modules/space';
import { SpacesUIProvider } from '@pushprotocol/uiweb';
import { lightTheme } from 'config/spaceTheme';
import { useSpaceComponents } from 'hooks/useSpaceComponents';
// import { SpaceLocalContextProvider } from 'contexts';

// Internal Configs

// Space page
const SpacePage = () => {
  const { spaceUI } = useSpaceComponents();
  const theme = useTheme();

  // update spaceid in global space context
  
  // RENDER
  return (
    <SpacesUIProvider spaceUI={spaceUI} theme={lightTheme}>
      <Container>
        <SpaceModule />
      </Container>
    </SpacesUIProvider>
  );
}
export default SpacePage;

// This defines the page settings, toggle align-self to center if not covering entire stuff, align-items to place them at center
// justify content flex start to start from top, height is defined by module as well as amount of margin, padding
const Container = styled(SectionV2)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`;