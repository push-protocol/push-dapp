// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { SectionV2 } from 'components/reusables/SharedStylingV2';
import YieldFarmingModuleV2 from 'modules/yield/YieldFarmingModuleV2';

// Internal Configs
import GLOBALS from 'config/Globals';

// Chat page
const YieldFarmingPageV2 = () => {
  // RENDER
  return (
    <Container>
      <YieldFarmingModuleV2 />
    </Container>
  );
}
export default YieldFarmingPageV2;

// This defines the page settings, toggle align-self to center if not covering entire stuff, align-items to place them at center
// justify content flex start to start from top, height is defined by module as well as amount of margin, padding
const Container = styled(SectionV2)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`;