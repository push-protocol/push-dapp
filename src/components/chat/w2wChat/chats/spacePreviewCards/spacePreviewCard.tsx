// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';

// Internal Components
import { ButtonV2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { shortenText } from 'helpers/UtilityHelper';
import Calendar from 'assets/space/calendar.svg';
import { ReactComponent as Space } from 'assets/space/space.svg';
import { device } from 'config/Globals';

const SpacePreviewCard = ({ borderRadius, background, spaceData, messageFrom, isGroup }) => {
  const remindMe = () => {};

  return (
    <SpacePreviewContainer
      borderRadius={borderRadius}
      background={background}
      width={messageFrom === 'receiver' && isGroup ? '315px' : '342px'}
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
        {messageFrom === 'sender'
          ? spaceData?.spaceName?.length > 45
            ? spaceData?.spaceName?.slice(0, 43) + '...'
            : spaceData?.spaceName
          : `${shortenText(spaceData?.spaceCreator, 6)}'s Space`}
      </Description>
      {messageFrom === 'sender' ? (
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
            {spaceData?.scheduleAt ?? '30 Apr 4:30PM'}
          </SpanV2>
        </ItemHV2>
      ) : (
        <WidgetData>
          <ItemHV2 justifyContent="flex-start">
            <Space />
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
              +190
            </SpanV2>
          </ItemHV2>
        </WidgetData>
      )}

      <RemindButton onClick={() => remindMe()}>
        {messageFrom === 'sender' ? 'Remind Me' : 'Join this space'}
      </RemindButton>
    </SpacePreviewContainer>
  );
};

const Description = styled(ItemHV2)`
  font-size: 20px;
  font-weight: 500;
  margin-top: 24px;
  justify-content: flex-start;
  color: #fff;
`;

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

const HostBadge = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
`;

const RemindButton = styled(ButtonV2)`
  width: 100%;
  height: 36px;
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

const WidgetData = styled(ItemHV2)`
  justify-content: space-between;
  max-height: 31px;
  align-items: center;
`;

export default SpacePreviewCard;
