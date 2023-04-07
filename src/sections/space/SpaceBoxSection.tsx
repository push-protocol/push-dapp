// React + Web3 Essentials
import React from 'react';

// External Packages

// Internal Compoonents
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import { SpaceBox, WelcomeSpaceContentBox } from 'components/space';

// Internal Configs

export const SpaceBoxSection = () => {
  // RENDER
  return (
    <ItemVV2 justifyContent="stretch" background="#282A2E" borderRadius="24px">
      SpaceBox Section

      {/* conditionally Render */}
      <SpaceBox />
      <WelcomeSpaceContentBox />
    </ItemVV2>
  );
}
