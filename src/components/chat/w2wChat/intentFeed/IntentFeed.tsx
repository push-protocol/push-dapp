// React + Web3 Essentials
// @ts-ignore
import React, { useContext, useState } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import ChatSnap from "components/chat/chatsnap/ChatSnap";
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { Context } from 'modules/chat/ChatModule';
import { AppContext, Feeds } from 'types/chat';
import { checkIfGroup, getChatsnapMessage, getGroupImage,getName,  } from 'helpers/w2w/groupChat';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';


const IntentFeed = ({isLoading}): JSX.Element => {
  const theme = useTheme();
  const {
    setChat,
    receivedIntents,
  }: AppContext = useContext<AppContext>(Context);
  const [selectedIntentSnap, setSelectedIntentSnap] = useState<number>();

  const { chainId, account } = useWeb3React<ethers.providers.Web3Provider>();

  return (
    <>
      <SpanV2
        fontWeight="700"
        fontSize="12px"
        textAlign="start"
        margin="10px 0 0 0"
        color={theme.default.secondaryColor}
        // ref={containerRef}
      >
        REQUESTS
      </SpanV2>
      <ItemVV2
        alignSelf="stretch"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        {/* Load the Intents */}
        <ItemVV2 justifyContent="flex-start">
          {isLoading && (
            <LoaderSpinner
              type={LOADER_TYPE.SEAMLESS}
              spinnerSize={40}
            />
          )}

          {!isLoading && receivedIntents?.length == 0 && (
            <NoIntentMessage>You don't have any request yet Start a conversation by using the + button</NoIntentMessage>
          )}

        {!isLoading && receivedIntents?.length > 0 && (
          <UserIntents>
            {receivedIntents.map((intent: Feeds, i) => (
              <ItemVV2
                alignSelf="stretch"
                flex="initial"
                key={`${intent.threadhash}${i}`}
              >
                <ChatSnap
                    pfp ={getGroupImage(intent)}
                    username={getName(intent)}
                    isGroup={checkIfGroup(intent)}
                    chatSnapMsg={getChatsnapMessage(intent,account,true)}
                    timestamp={intent.msg.timestamp}
                    selected={i == selectedIntentSnap ? true : false}
                    onClick={(): void => {
                      setChat(intent);
                      setSelectedIntentSnap(i);
                    }}
                  />
                </ItemVV2>
              ))}
            </UserIntents>
          )}
        </ItemVV2>
      </ItemVV2>
    </>
  );
};

const NoIntentMessage = styled.div`
  position: relative;
  width: 80%;
  text-align: justify;
  text-align-last: center;
  color: #657795;
  font-size: 15px;
  margin-top:25px;
`;

const UserIntents = styled(ItemVV2)`
  margin-top: 14px;
  justify-content: flex-start;
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
  height: 0px;
  flex-flow: column;

  &&::-webkit-scrollbar {
    width: 4px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #cf1c84;
  }
`;

export default IntentFeed;
