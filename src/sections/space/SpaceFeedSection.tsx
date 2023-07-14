// React + Web3 Essentials
import React, { useState } from 'react';

// Internal Compoonents
import { useSpaceComponents } from 'hooks/useSpaceComponents';

export const SpaceFeedSection = () => {
  const { SpaceFeedComponent } = useSpaceComponents();
  return (
      <SpaceFeedComponent
        showTabs={true}
        orientation="vertical"
        width={550}
        height={300}
        onBannerClickHandler={(spaceId: string) => {
          console.log('spaceId: ', spaceId);
        }}
      />
  );
};
