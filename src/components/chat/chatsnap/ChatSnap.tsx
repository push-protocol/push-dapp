// React + Web3 Essentials
import React from "react";

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ButtonV2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { caip10ToWallet } from 'helpers/w2w';
import { useResolveEns } from 'hooks/useResolveEns';

// Internal Configs
import { appConfig } from 'config';
import GLOBALS from "config/Globals";

// Interfaces
export interface ChatSnapMsgI {
  type: string,
  message: string
}

interface ChatSnapPropsI {
  pfp: string,
  username: string,
  chatSnapMsg: ChatSnapMsgI,
  timestamp: number,
  selected: boolean,
  onClick?: Function
}

// Other Information section
const ChatSnap = ({ pfp, username, chatSnapMsg, timestamp, selected, onClick }: ChatSnapPropsI) => {
  // get theme
  const theme = useTheme();

  // get ens name
  const ensName = useResolveEns(username);
  // get reverse name
 

  // get short username
  const shortUsername = caip10ToWallet(username).slice(0, 8) + '...' + caip10ToWallet(username).slice(-7);

  // format message here instead
  const message = chatSnapMsg.type === 'Text' ? (
    <SpanV2 color={theme.default.secondaryColor}>
      {chatSnapMsg.message.length > 25 ? (
        chatSnapMsg.message.slice(0, 25) + '...'
      ) : (
        chatSnapMsg.message
      )}
    </SpanV2>
  ) : chatSnapMsg.type === 'Image' ? (
    <SpanV2 color={theme.default.secondaryColor}>
      <i className="fa fa-picture-o" aria-hidden="true"></i>
      {" "}Image
    </SpanV2>
  ) : chatSnapMsg.type === 'File' ? (
    <SpanV2 color={theme.default.secondaryColor}>
      <i className="fa fa-file" aria-hidden="true"></i>
      {" "}File
    </SpanV2>
  ) : chatSnapMsg.type === 'GIF' ? (
    <SpanV2 color={theme.default.secondaryColor}>
      <i className="fa fa-picture-o" aria-hidden="true"></i>
      {" "}GIF
    </SpanV2>
  ) : null;

  // get date
  let date = null;
  if (timestamp !== null) {
    const time = new Date(timestamp);
    date = time.toLocaleTimeString('en-US').slice(0, -6) + time.toLocaleTimeString('en-US').slice(-2);
  }
  
  // RENDER
  return (
    <ChatSnapContainer
      padding="10px"
      margin="5px 5px 5px 0"
      borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.MID}
      onClick={onClick}
      background={selected ? theme.chat.snapFocusBg : 'transparent'}
      hover={theme.chat.snapFocusBg}
      hoverBackground={selected ? theme.chat.snapFocusBg : 'transparent'}
    >
      <ItemVV2 width="48px" maxWidth="48px" borderRadius="100%" overflow="hidden" margin="0 5px 0 0">
        <ImageV2 alt={`Profile pic of ${username}`} src={pfp} />
      </ItemVV2>

      <ItemVV2 margin="0 0 0 5px">
        
        <ItemHV2 alignItems="flex-start" margin="2px 0 2px 0">
          <SpanV2 
            // color={ensName ? '#d53793' : theme.default.color}
            color={theme.default.color}
            fontWeight={ensName ? "600" : "500"}
            textAlign="start"
            flex="1"
            fontSize="14px"
          >
            {ensName && 
              ensName
            }
            {!ensName && 
              shortUsername
            }
          </SpanV2>
          {date && 
            <SpanV2 
              color={theme.default.secondaryColor}
              fontWeight="500"
              fontSize="12px"
            >
            {date}
          </SpanV2>
          }
        </ItemHV2>

        <ItemHV2 alignItems="flex-end" margin="2px 0 2px 0">
          <SpanV2 
            color={theme.default.secondaryColor}
            flex="1"
            textAlign="start"
            fontWeight="400"
          >
            {message}
          </SpanV2>
        </ItemHV2>

      </ItemVV2>
    </ChatSnapContainer>
  );
}
export default ChatSnap;

const ChatSnapContainer = styled(ButtonV2)`
  flex-direction: row;
  align-self: stretch;
`