// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';

// Internal Components
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import Calendar from 'assets/space/calendar.svg';
import { shortenText } from 'helpers/UtilityHelper';
import { Space } from 'types';


const SpaceCard = ({spaceData}:{spaceData:Space}) => {
  return (
    <SpaceCardContainer borderRadius="0px 17px 17px 17px">
      <SpaceCardHeader>
        <ItemVV2
          width="32px"
          maxWidth="32px"
          borderRadius="100%"
          overflow="hidden"
          margin="0 5px 0 0"
        >
          <ImageV2
            alt="Profile"
            src={spaceData?.spaceImage}
          />
        </ItemVV2>
        <SpanV2
          margin="0px 11px 0px 0px"
          fontSize="17px"
          fontWeight="500"
          color="#fff"
        >
          {shortenText(spaceData?.spaceCreator,4,4)}
        </SpanV2>
        <HostBadge>Host</HostBadge>
      </SpaceCardHeader>
      <SpanV2
        fontSize="20px"
        fontWeight="500"
        color="#fff"
        textAlign="left"
        margin="24px 0px 0px 0px"
      >
        {spaceData?.spaceName?.length > 45 ? spaceData?.spaceName?.slice(0,43)+'...' : spaceData?.spaceName}
      </SpanV2>
      <SpaceCardFooter>
        <ItemVV2
          width="20px"
          maxWidth="20px"
          borderRadius="100%"
          overflow="hidden"
          margin="0 4px 0 0"
        >
          <ImageV2
            alt="Calendar"
            src={Calendar}
          />
        </ItemVV2>
        <SpanV2
          fontSize="14px"
          fontWeight="500"
          color="#fff"
        >
          {spaceData?.scheduleAt ?? '30 Apr 4:30PM'}
        </SpanV2>
      </SpaceCardFooter>
    </SpaceCardContainer>
  );
};

const HostBadge = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
`;

const SpaceCardFooter = styled(ItemHV2)`
  justify-content: flex-start;
  max-height: 20px;
  margin-top:12px;
`;

const SpaceCardHeader = styled(ItemHV2)`
  justify-content: flex-start;
  max-height: 32px;
`;

const SpaceCardContainer = styled(ItemVV2)`
  width: 100%;
  box-sizing: border-box;
  justify-content: flex-start;
  max-height: 169px;
  background: linear-gradient(87.17deg, #b6a0f5 0%, #f46ef7 57.29%, #ff95d5 100%);
  border-radius: 17px;
  padding: 16px;
  margin-bottom: 10px;
`;

export default SpaceCard;
