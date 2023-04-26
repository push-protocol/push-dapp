// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';
import moment from 'moment';

// Internal Components
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import { Space } from 'types';
import SpaceCard from './spaceCard/SpaceCard';
import { useDeviceWidthCheck } from 'hooks';

const RequestBody = ({
  filteredUserData
}: { filteredUserData: Space }) => {
  const isMobile = useDeviceWidthCheck(480);
  return (
    <Container>

      <MessageTime>Today</MessageTime>

      <MessageBox>
        <ItemVV2>
          <ReceivedMessageWrapper
            align="row"
          >
            <ReceivedMessage left='34px'>
              <TextMessage>Hey! You’re invited to my space. Set a reminder for when the space goes live</TextMessage>
              <TimeStamp>{filteredUserData?.scheduleAt ? moment(filteredUserData?.scheduleAt).format('h:mma') : '4:30PM'}</TimeStamp>
            </ReceivedMessage>
          </ReceivedMessageWrapper>

          <ReceivedMessageWrapper
            align="row"
          >
            <ReceivedMessage left='34px'>
              <TextMessage>Hey! You’re invited to my space. Set a reminder for when the space goes live</TextMessage>
              <TimeStamp>{filteredUserData?.scheduleAt ? moment(filteredUserData?.scheduleAt).format('h:mma') : '4:30PM'}</TimeStamp>
            </ReceivedMessage>
          </ReceivedMessageWrapper>

          <ReceivedMessageWrapper
            align="row"
          >
            <ReceivedMessageSpace left='34px'>
              <SpaceCard spaceData={filteredUserData} borderRadius='0px 17px 17px 17px' showActions={true} minWidth={isMobile ? '358px' : '342px'}/>
            </ReceivedMessageSpace>
          </ReceivedMessageWrapper>

        </ItemVV2>

      </MessageBox>

    </Container>
  );
};

export default RequestBody;


const Container = styled(ItemVV2)`
  align-items: unset;
  display: block;
  justify-content: flex-start;
  position: absolute;
  top: 65px;
  bottom: 66px;
  left: 0;
  right: 0;
  margin: 0;
  width: 100%;
  height: calc(100% - 140px);
  overflow-x: none;
  overflow-y: scroll;
  // background: red;

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollBg};
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    background-color: ${(props) => props.theme.scrollBg};
    width: 5px;
  }

  @media (max-width: 768px) {
    padding: 0px 0px 0px 0px;

    &::-webkit-scrollbar-track {
      background-color: none;
      border-radius: 9px;
    }

    &::-webkit-scrollbar {
      background-color: none;
      width: 4px;
    }
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0.44, #cf1c84),
      color-stop(0.72, #cf1c84),
      color-stop(0.86, #cf1c84)
    );
  }
`

const MessageTime = styled(ItemHV2)`
  width: 100%;
  font-size: 11px;
  color: ${(props) => props.theme.default.secondaryColor};
  position: absolute;
  top: 35px;
`;

const MessageBox = styled(ItemVV2)`
  // position: absolute;
  // top: 65px;
  padding-top:65px;
`

const TimeStamp = styled(ItemHV2)`
  min-width: 44px;
  font-size: 11px;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 5px 0px 0px 5px;
  position: absolute;
  right: 10px;
  bottom: 5px;
`;

const TextMessage = styled.p`
  max-width: 300px;
  padding: 7px 44px 10px 0px;
  font-size: 14px;
  word-wrap: break-word;
  text-align: left;
  font-weight: 400;
  margin: 0px;
`;

const ReceivedMessageWrapper = styled.div`
  width: 100%;
  min-height: ${(props: any): string => props.height || '48px'};
  padding: 0;
  margin-bottom: 5px;
  display: flex;
  flex-direction: ${(props: any): string => props.align || 'row'};
`

const ReceivedMessage = styled.div`
  box-sizing: border-box;
  position: relative;
  margin-left: ${(props) => props.left || '34px'};
  max-width: 419px;
  padding: ${(props: any): string => props.padding || '5px 11px 10px 15px'};
  background: ${(props: any): string => props.color || '#ffffff'};
  text-align: left;
  border-radius: 2px 16px 16px 16px;
  display: flex;
  justify-content: flex-start;
  color: #000000;
  flex-direction: column;
  align-items: center;
  padding: 9px 17px;
`;

const ReceivedMessageSpace = styled(ReceivedMessage)`
  background:transparent;
  max-width: 350px;
  padding:0px 17px 9px 0px;
`