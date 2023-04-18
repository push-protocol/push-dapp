// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';

// Internal Components
import { ButtonV2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { spaces } from 'services/space/spaceList';
import { shortenText } from 'helpers/UtilityHelper';
import { ReactComponent as Space } from 'assets/space/space.svg';

// Internal Configs
import { device } from 'config/Globals';

const SpaceNotification = () => {
  const selectedSpace = spaces[0];

  const joinSpace = () => {};

  return (
    <NotificationContainer>
      <NotificationHeader>
        <ItemHV2 justifyContent="flex-start">
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
              src={selectedSpace?.spaceImage}
              alt=" Image"
            />
          </ItemVV2>
          <SpanV2
            color="#F5F5F5"
            fontSize="17px"
            fontWeight="500"
            margin="0px 5px 0px 0px"
          >
            {shortenText(selectedSpace?.spaceCreator, 6)}
          </SpanV2>
          <SpanV2
            padding="4px 8px"
            borderRadius="8px"
            background="rgba(255, 255, 255, 0.2)"
            fontSize="12px"
            fontWeight="500"
            color="#FFFFFF"
          >
            Host
          </SpanV2>
        </ItemHV2>
        <ItemHV2 justifyContent="flex-end">
          <Space />
          <SpanV2
            fontSize="14px"
            fontWeight="500"
            color="#FFFFFF"
            margin="0px 0px 0px 3px"
          >
            Live
          </SpanV2>
        </ItemHV2>
      </NotificationHeader>
      <SpanV2
        fontSize="20px"
        fontWeight="500"
        color="#F5F5F5"
        alignSelf="flex-start"
        margin="0px 0px 12px 0px"
      >
        {`${shortenText(selectedSpace?.spaceCreator, 6)}'s Space`}
      </SpanV2>
      <JoinButton onClick={() => joinSpace()}>Join this space</JoinButton>
    </NotificationContainer>
  );
};

const NotificationHeader = styled(ItemHV2)`
  align-items: center;
  justify-content: space-between;
  max-height: 32px;
  width: 100%;
  margin-bottom: 14px;
`;

const NotificationContainer = styled(ItemVV2)`
  position: fixed;
  right: 51px;
  bottom: 84px;
  max-height: 152px;
  min-width: 343px;
  background: linear-gradient(87.17deg, #b6a0f5 0%, #f46ef7 57.29%, #ff95d5 100%);
  border-radius: 17px;
  padding: 16px;
  justify-content: flex-start;
  @media (${device.mobileL}) {
    right: 10px;
  }
`;

const JoinButton = styled(ItemHV2)`
  height: 36px;
  border-radius: 8px;
  font-size: 14px;
  color: #ffffff;
  background: transparent;
  border: 1px solid #ffffff;
  cursor: pointer;
`;

export default SpaceNotification;
