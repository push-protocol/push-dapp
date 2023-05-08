// React + Web3 Essentials
import React from 'react';

// Internal Components
import { ImageV2, ItemVV2 } from './reusables/SharedStylingV2';

interface ProfileImageType{
  dimension:string;
  imageSrc:string;
  borderRadius:string;
  margin:string;
}

export const ProfileImage = ({ dimension, imageSrc, borderRadius, margin }:ProfileImageType) => {
  return (
    <ItemVV2
      width={dimension}
      height={dimension}
      maxWidth={dimension}
      borderRadius={borderRadius}
      overflow="hidden"
      margin={margin}
    >
      <ImageV2
        height="100%"
        objectFit="cover"
        src={imageSrc}
        alt="Profile Image"
      />
    </ItemVV2>
  );
};
