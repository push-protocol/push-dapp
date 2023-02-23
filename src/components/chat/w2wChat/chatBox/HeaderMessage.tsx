// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';

// Internal Components
import Lock from 'assets/Lock.png';
import LockSlash from 'assets/LockSlash.png';
import { Item } from 'primaries/SharedStyling';
import { ItemHV2 } from 'components/reusables/SharedStylingV2';
import { AppContext, MessageIPFSWithCID } from 'types/chat';
import { Context } from 'modules/chat/ChatModule';

type HeaderMessageType = {
  time?: string;
  isGroup?: boolean;
  index?: number;
  messages?: MessageIPFSWithCID[];
};

export const HeaderMessage = ({ time, isGroup, index, messages }: HeaderMessageType) => {
  const { currentChat }: AppContext = React.useContext<AppContext>(Context);

  let intents = currentChat?.intent?.split('+');
  return (
    <>
      <Item>
        <MessageTime>{time}</MessageTime>

        {!isGroup && index === 0 && (
          <>
            {intents?.length === 2 && (
              <ItemText>
                <Image src={Lock} />
                Messages are end-to-end encrypted. Only users in this chat can view or listen to them.
                <ItemLink
                  href="https://docs.push.org/developers/concepts/push-chat-for-web3#encryption"
                  target={'_blank'}
                >
                  {' '}
                  Click to learn more.
                </ItemLink>
              </ItemText>
            )}
            {intents?.length === 1 && (
              <ItemText>
                <Image src={LockSlash} />
                Messages are not encrypted till the user accepts the chat request.
              </ItemText>
            )}
          </>
        )}

        {isGroup && (index === 0 || (messages && messages?.length === 0)) && (
          <ItemText>
            <Image src={currentChat?.groupInformation?.isPublic ? Lock : LockSlash} />
            {currentChat?.groupInformation?.isPublic
              ? 'Messages are not encrypted.'
              : 'Messages are end-to-end encrypted. Only users in this chat can view or listen to them.'}
            <ItemLink
              href="https://docs.push.org/developers/concepts/push-chat-for-web3#encryption"
              target={'_blank'}
            >
              {' '}
              Click to learn more.
            </ItemLink>
          </ItemText>
        )}
      </Item>

      {!isGroup && messages && messages?.length === 0 && (
        <Item margin="30px 0px">
          <ItemText>
            <Image src={LockSlash} />
            Messages are not encrypted till the user accepts the chat request.
          </ItemText>

          <FirstTime>
            This is your first conversation with recipient.<br></br> Start the conversation by sending a message.
          </FirstTime>
        </Item>
      )}
    </>
  );
};

const ItemText = styled.div`
  color: ${(props) => props.theme.default.secondaryColor};
  max-width: 556px;
  font-weight: 400;
  font-size: 13px;
  line-height: 130%;
  background-color: ${(props) => props.theme.default.bg};
  padding: 10px;
  border-radius: 14px;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 1250px) {
    width: 70%;
  }

  @media (max-width: 771px) {
    width: 80%;
  }
`;

const MessageTime = styled(ItemHV2)`
  width: 100%;
  font-size: 11px;
  color: ${(props) => props.theme.default.secondaryColor};
  margin: 15px 0px;
`;

const FirstTime = styled(ItemHV2)`
  width: 100%;
  font-size: 13px;
  color: ${(props) => props.theme.default.secondaryColor};
  margin: 15px 0px;
`;

const ItemLink = styled.a`
  color: ${(props) => props.theme.default.secondaryColor};
  text-decoration: none;
  cursor: pointer;
`;

const Image = styled.img`
  width: 10px;
  margin-right: 5px;
  position: relative;
  bottom: -2px;
`;
