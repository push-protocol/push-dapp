// React + Web3 Essentials
import React from 'react';

// External Packages
import { useTheme } from 'styled-components';

// Internal Compoonents
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import { SpaceBox, WelcomeSpaceContentBox } from 'components/space';
import RequestBox from 'components/space/spaceBox/RequestBox';

// Internal Configs

export const SpaceBoxSection = () => {
  const theme = useTheme();
  // RENDER
  return (
    <ItemVV2 justifyContent="stretch" background={theme.space.spaceBoxBg} borderRadius="24px">
      {/* SpaceBox Section */}

      {/* conditionally Render */}
      {/* <SpaceBox /> */}
      {/* <WelcomeSpaceContentBox /> */}
      <RequestBox/>
    </ItemVV2>
  );
}
