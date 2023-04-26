// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ButtonV2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { shortenText } from 'helpers/UtilityHelper';
import Calendar from 'assets/space/calendar.svg';
import { ReactComponent as SpaceIcon } from 'assets/space/space.svg';
import { device } from 'config/Globals';
import { Space } from 'types';
import { getSpaceTime, isSpaceActive } from 'helpers/space';

interface SpacePreviewCardType {
  borderRadius: string;
  spaceData: Space;
  messageFrom: string;
  isGroup: boolean;
}

export const SpacePreviewCard = ({ borderRadius, spaceData, messageFrom, isGroup }: SpacePreviewCardType) => {
  const activeSpace = isSpaceActive(spaceData?.scheduleAt, spaceData?.scheduleEnd);

  const theme = useTheme();

  const remindMe = () => {
    console.log('Will remind');
  };

  const joinSpace = () => {
    console.log('Joining');
  };

  return (
    <SpacePreviewContainer
      borderRadius={borderRadius}
      background={activeSpace ? theme.space.liveSpaceCardBackground : theme.space.scheduledSpaceCardBackground}
      // width={messageFrom === 'receiver' && isGroup ? '315px' : '342px'} 
    >
      <SpacePreviewHeader>
        <ItemVV2
          width="32px"
          height="32px"
          maxWidth="32px"
          borderRadius="50%"
          overflow="hidden"
          margin="0px 5px 0px 0px"
        >
          <ImageV2
            height="100%"
            objectFit="cover"
            src={spaceData.spaceImage}
            alt="Space Image"
          />
        </ItemVV2>
        <SpanV2
          margin="0px 11px 0px 0px"
          fontSize="17px"
          fontWeight="500"
          color="#fff"
        >
          {shortenText(spaceData?.spaceCreator, 6, 6)}
        </SpanV2>
        <HostBadge>Host</HostBadge>
      </SpacePreviewHeader>
      <Description>
        {!activeSpace
          ? spaceData?.spaceName?.length > 45
            ? spaceData?.spaceName?.slice(0, 43) + '...'
            : spaceData?.spaceName
          : `${shortenText(spaceData?.spaceCreator, 6)}'s Space`}
      </Description>
      {!activeSpace ? (
        <ItemHV2
          justifyContent="flex-start"
          margin="4px 0px 0px"
        >
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
            {spaceData?.scheduleAt ? getSpaceTime({spaceScheduleTime:spaceData?.scheduleAt}) : '30 Apr 4:30PM'}
          </SpanV2>
        </ItemHV2>
      ) : (
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
          <ItemHV2
            justifyContent="flex-end"
            alignItems="center"
          >
            {spaceData?.members?.slice(0, 3).map((member, index) => {
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
              +{spaceData?.members?.length - 3}
            </SpanV2>
          </ItemHV2>
        </LiveSpaceData>
      )}

      <ActionButton
        onClick={() => {
          activeSpace ? joinSpace() : remindMe();
        }}
      >
        {activeSpace ? 'Join this space' : 'Remind Me'}
      </ActionButton>
    </SpacePreviewContainer>
  );
};

const SpacePreviewContainer = styled(ItemVV2)`
  min-height: 211px;
  width: 342px;
  box-sizing: border-box;
  padding: 16px;
  @media (${device.mobileL}) {
    width: ${(props) => props.width || '342px'};
  }
`;

const SpacePreviewHeader = styled(ItemHV2)`
  width: 100%;
  justify-content: flex-start;
  max-height: 32px;
`;

const Description = styled(ItemHV2)`
  font-size: 20px;
  font-weight: 500;
  margin-top: 24px;
  justify-content: flex-start;
  color: #fff;
`;

const HostBadge = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
`;

const ActionButton = styled(ButtonV2)`
  width: 100%;
  max-height: 36px;
  box-sizing: border-box;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #ffffff;
  font-size: 14px;
  font-weight: 500;
  background: transparent;
  color: #ffffff;
  margin-top: 16px;
`;

const LiveSpaceData = styled(ItemHV2)`
  justify-content: space-between;
  max-height: 31px;
  align-items: center;
`;
