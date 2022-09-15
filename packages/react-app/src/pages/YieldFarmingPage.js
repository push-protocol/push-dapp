import React from "react";
import styled from 'styled-components';

import { SectionV2 } from 'components/reusables/SharedStylingV2';

import YieldFarmingModule from "modules/yieldfarming/YieldFarmingModule";


// Other Information section
const YieldFarmingPage = () => {
  // RENDER
  return (
    <Container>
      <YieldFarmingModule />
    </Container>
  );
}
export default YieldFarmingPage;

// This defines the page settings, toggle align-self to center if not covering entire stuff, align-items to place them at center
// justify content flex start to start from top, height is defined by module as well as amount of margin, padding
const Container = styled(SectionV2)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: stretch;
    align-items: stretch;
`;