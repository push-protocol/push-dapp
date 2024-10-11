// React + Web3 Essentials
import React, { useContext } from 'react';
import { ethers } from 'ethers';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ButtonV2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { caip10ToWallet } from 'helpers/w2w';
import { useResolveWeb3Name } from 'hooks/useResolveWeb3Name';
import { convertTimestampToDateDayTime } from 'helpers/TimerHelper';
import { AppContext } from 'contexts/AppContext';
import { AppContextType } from 'types/context';

// Internal Configs
import GLOBALS from 'config/Globals';
import { shortenText } from 'helpers/UtilityHelper';

// Interfaces
export interface ChatSnapMsgI {
  type: string;
  message: string;
}

interface ChatSnapPropsI {
  pfp: string;
  username: string;
  chatSnapMsg: ChatSnapMsgI;
  timestamp: number;
  selected: boolean;
  onClick?: Function;
  isGroup: boolean;
}

// Other Information section
const ChatSnap = ({ pfp, username, chatSnapMsg, timestamp, selected, onClick, isGroup }: ChatSnapPropsI) => {
  const { web3NameList }: AppContextType = useContext(AppContext);
  let ensName = '';

  // get theme
  const theme = useTheme();

  // resolve web3 names
  // useResolveWeb3Name(!isGroup ? username : null);

  // get ens name from context
  if (!isGroup) {
    if (username?.includes(':nft')) {
      // to match "eip155:" followed by any chainId and replace it with "eip155:" and split the string at ':nft' and keep the part before it
      username = username.replace(/eip155:\d+:/, 'eip155:').split(':nft')[0];
    }
    const walletLowercase = caip10ToWallet(username)?.toLowerCase();
    const checksumWallet = ethers.utils.getAddress(walletLowercase);
    ensName = web3NameList[checksumWallet];
  }

  // get short username
  const walletAddress = !isGroup ? caip10ToWallet(username) : null;
  const shortUsername = !isGroup ? shortenText(walletAddress, 8, 7) : null;

  const getDisplayName = () => {
    if (ensName) return ensName;
    if (isGroup) {
      if (username?.length > 20) return username.substring(0, 20) + '...';
      else return username;
    }
    return shortUsername;
  };

  // format message here instead
  const message =
    chatSnapMsg.type === 'Text' ? (
      <SpanV2
        color={theme.default.secondaryColor}
        fontSize="15px"
        fontWeight="400"
      >
        {chatSnapMsg.message?.length > 25 ? chatSnapMsg.message?.slice(0, 25) + '...' : chatSnapMsg.message}
      </SpanV2>
    ) : chatSnapMsg.type === 'Image' ? (
      <SpanV2 color={theme.default.secondaryColor}>
        <i
          className="fa fa-picture-o"
          aria-hidden="true"
        ></i>{' '}
        Image
      </SpanV2>
    ) : chatSnapMsg.type === 'File' ? (
      <SpanV2 color={theme.default.secondaryColor}>
        <i
          className="fa fa-file"
          aria-hidden="true"
        ></i>{' '}
        File
      </SpanV2>
    ) : chatSnapMsg.type === 'GIF' || chatSnapMsg.type === 'MediaEmbed' ? (
      <SpanV2 color={theme.default.secondaryColor}>
        <i
          className="fa fa-picture-o"
          aria-hidden="true"
        ></i>{' '}
        Media
      </SpanV2>
    ) : null;

  // get date

  let date = null;
  if (timestamp) {
    if (typeof timestamp === 'string' && timestamp?.includes('Z')) {
      timestamp = timestamp.replace('Z', '');
    }

    date = convertTimestampToDateDayTime(new Date(timestamp));
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
      <ItemVV2
        width="48px"
        height="48px"
        maxWidth="48px"
        borderRadius="100%"
        overflow="hidden"
        margin="0 5px 0 0"
      >
        <ImageV2
          height="100%"
          alt={`Profile pic of ${username}`}
          src={pfp}
          objectFit="cover"
        />
      </ItemVV2>

      <ItemVV2 margin="0 0 0 5px">
        <ItemHV2
          alignItems="flex-start"
          margin="2px 0 2px 0"
        >
          <SpanV2
            // color={ensName ? '#d53793' : theme.default.color}
            color={theme.default.color}
            fontWeight={ensName ? '600' : '500'}
            textAlign="start"
            flex="1"
            fontSize="14px"
          >
            {getDisplayName()}
          </SpanV2>
          {date && (
            <SpanV2
              color={theme.default.secondaryColor}
              fontWeight="500"
              fontSize="12px"
            >
              {date}
            </SpanV2>
          )}
        </ItemHV2>

        <ItemHV2
          alignItems="flex-end"
          margin="2px 0 2px 0"
        >
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
};
export default ChatSnap;

const ChatSnapContainer = styled(ButtonV2)`
  flex-direction: row;
  align-self: stretch;
`;
