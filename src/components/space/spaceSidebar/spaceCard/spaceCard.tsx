// React + Web3 Essentials
import React, { useContext } from 'react';

// External Packages
import styled from 'styled-components';

// Internal Components
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import Calendar from 'assets/space/calendar.svg';
import { shortenText } from 'helpers/UtilityHelper';
import { Space } from 'types';
import { Button } from 'primaries/SharedStyling';

import { useNavigate } from 'react-router';
import { SpaceLocalContext } from 'contexts';



const SpaceCard = ({
  spaceData,
  borderRadius,
  showReminder
}: { spaceData: Space, borderRadius: string,showReminder?:boolean }) => {

 const {selectedSpace, setSelectedSpace} = useContext(SpaceLocalContext);
  const navigate = useNavigate();

  const selectSpace = (spaceData: Space) => {
    let spaceid = spaceData?.spaceInformation?.spaceId;
    setSelectedSpace(spaceid);

    // lastly, set navigation for dynamic linking
    navigate(`/space/${spaceid}`);
  };
  
  return (
    <SpaceCardContainer borderRadius={borderRadius} onClick={()=>selectSpace(spaceData)}>
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
            src={spaceData?.spaceInformation?.spaceImage}
          />
        </ItemVV2>
        <SpanV2
          margin="0px 11px 0px 0px"
          fontSize="17px"
          fontWeight="500"
          color="#fff"
        >
          {shortenText(spaceData?.spaceInformation?.spaceCreator, 4, 4)}
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
        {spaceData?.spaceInformation?.spaceName?.length > 45 ? spaceData?.spaceInformation?.spaceName?.slice(0, 43) + '...' : spaceData?.spaceInformation?.spaceName}
      </SpanV2>
      <SpaceCardFooter>
        <ItemHV2 alignSelf="baseline">
          <ImageV2
            width="20px"
            maxWidth="20px"
            borderRadius="100%"
            overflow="hidden"
            margin="0 4px 0 0"
            alt="Calendar"
            src={Calendar}
          />
          <SpanV2
            fontSize="14px"
            fontWeight="500"
            color="#fff"
          >
            {spaceData?.spaceInformation?.scheduleAt ?? '30 Apr 4:30PM'}
          </SpanV2>
        </ItemHV2>

       {showReminder &&  <ItemHV2 margin="10px 0 0 0">
          <EmptyButton>Remind Me</EmptyButton>
        </ItemHV2>}




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

const SpaceCardFooter = styled(ItemVV2)`
  justify-content: flex-start;
  // max-height: 20px;
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
  // max-height: 169px;
  background: linear-gradient(87.17deg, #b6a0f5 0%, #f46ef7 57.29%, #ff95d5 100%);
  // border-radius: 17px;
  padding: 16px;
  margin-bottom: 10px;
`;

const EmptyButton = styled(Button)`
  border: 1px solid #FFFFFF;
  border-radius: 8px;
  background:transparent;
  width:100%;

`


export default SpaceCard;
