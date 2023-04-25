// React + Web3 Essentials
import React from 'react';

// Internal Components
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { SpaceMember } from 'types';

export const SpaceMembersIndicator = ({ spaceMembers }: { spaceMembers: SpaceMember[] }) => {
  return (
    <ItemHV2
      justifyContent="flex-end"
      alignItems="center"
    >
      {spaceMembers?.slice(0, 3).map((member, index) => {
        return (
          <ItemVV2
            width="31px"
            height="31px"
            maxWidth="31px"
            borderRadius="100%"
            overflow="hidden"
            margin="0px 0px 0px -18px"
            zIndex={4 - index}
            key={index}
          >
            <ImageV2
              height="100%"
              objectFit="cover"
              src={member?.image}
              alt="Member Image"
            />
          </ItemVV2>
        );
      })}
      <SpanV2
        color="#FFFFFF"
        fontSize="14px"
        fontWeight="500"
        margin="0px 0px 0px 3px"
      >
        +{spaceMembers?.length - 3}
      </SpanV2>
    </ItemHV2>
  );
};
