// React + Web3 Essentials
import React, { useContext } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import Calendar from 'assets/space/calendar.svg';
import { ReactComponent as SpaceIcon } from 'assets/space/space.svg';
import { shortenText } from 'helpers/UtilityHelper';
import { Space } from 'types';
import { Button } from 'primaries/SharedStyling';
import { getSpaceStatus, getSpaceTime } from 'helpers/space';
import { SpaceMembersIndicator } from './SpaceMembersIndicator';
import { useNavigate } from 'react-router';
import { SpaceLocalContext } from 'contexts';

interface SpaceCardType {
  isSidebarCard?: boolean;
  spaceData: Space;
  borderRadius: string;
  showActions?: boolean;
  minWidth?: string;
}

const SpaceCard = ({ spaceData, borderRadius, showActions, minWidth, isSidebarCard }: SpaceCardType) => {
  const spaceStatus = getSpaceStatus(spaceData?.scheduleAt, spaceData?.scheduleEnd);
  const theme = useTheme();
  const { setSelectedSpace } = useContext(SpaceLocalContext);

  const navigate = useNavigate();

  const selectSpace = (spaceData: Space) => {
    let spaceid = spaceData.spaceId;
    setSelectedSpace(spaceid);

    // lastly, set navigation for dynamic linking
    navigate(`/space/${spaceid}`);
  };

  const remindMe = () => {
    console.log('Will remind');
  };

  const joinSpace = () => {
    console.log('Joining');
  };

  return (
    <SpaceCardContainer
      borderRadius={borderRadius}
      background={
        spaceStatus === 'live' ? theme.space.liveSpaceCardBackground : theme.space.scheduledSpaceCardBackground
      }
      minWidth={minWidth}
      onClick={() => (isSidebarCard ? selectSpace(spaceData) : null)}
    >
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
          {shortenText(spaceData?.spaceCreator, 6)}
        </SpanV2>
        <HostBadge>Host</HostBadge>
      </SpaceCardHeader>
      {spaceStatus !== 'ended' ? (
        <>
          <SpaceDescription
            fontSize="20px"
            fontWeight="500"
            justifyContent="flex-start"
            margin="24px 0px 0px 0px"
          >
            {spaceStatus === 'scheduled'
              ? spaceData?.spaceName?.length > 45
                ? spaceData?.spaceName?.slice(0, 43) + '...'
                : spaceData?.spaceName
              : `${shortenText(spaceData?.spaceCreator, 6)}'s Space`}
          </SpaceDescription>
          <SpaceCardFooter>
            {spaceStatus === 'live' ? (
              <LiveSpaceData>
                <ItemHV2 justifyContent="flex-start">
                  <SpaceIcon />
                  <SpanV2
                    color="#F5F5F5"
                    fontSize="14px"
                    fontWeight="500"
                  >
                    Live
                  </SpanV2>
                </ItemHV2>
                <SpaceMembersIndicator spaceMembers={spaceData?.members} />
              </LiveSpaceData>
            ) : (
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
                  {spaceData?.scheduleAt ? getSpaceTime({spaceScheduleTime:spaceData?.scheduleAt}) : '30 Apr 4:30PM'}
                </SpanV2>
              </ItemHV2>
            )}

            {showActions && (
              <ItemHV2 margin="10px 0 0 0">
                <ActionButton
                  onClick={() => {
                    spaceStatus === 'live' ? joinSpace() : remindMe();
                  }}
                >
                  {spaceStatus === 'live' ? 'Join this space' : 'Remind Me'}
                </ActionButton>
              </ItemHV2>
            )}
          </SpaceCardFooter>
        </>
      ) : (
        <SpaceDescription
          fontSize="16px"
          fontWeight="500"
          width="285px"
          height="100px"
        >
          The space has ended
        </SpaceDescription>
      )}
    </SpaceCardContainer>
  );
};

const SpaceCardContainer = styled(ItemVV2)`
  // width: 100%;
  min-width: ${(props) => props.minWidth || '100%'};
  box-sizing: border-box;
  justify-content: flex-start;
  padding: 16px;
`;

const SpaceCardHeader = styled(ItemHV2)`
  justify-content: flex-start;
  max-height: 32px;
`;

const HostBadge = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
`;

const SpaceDescription = styled(ItemHV2)`
  color: #fff;
`;

const SpaceCardFooter = styled(ItemVV2)`
  justify-content: flex-start;
  margin-top: 12px;
`;

const LiveSpaceData = styled(ItemHV2)`
  justify-content: space-between;
  max-height: 31px;
  align-items: center;
`;

const ActionButton = styled(Button)`
  border: 1px solid #ffffff;
  border-radius: 8px;
  background: transparent;
  width: 100%;
`;

export default SpaceCard;
