// React + Web3 Essentials
// @ts-ignore
import React, { useContext, useState } from 'react';

// External Packages
import styled from 'styled-components';

// Internal Compoonents
import { Feeds } from 'api';
import ChatSnap from "components/chat/chatsnap/ChatSnap";
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import { AppContext, Context } from 'modules/chat/ChatModule';
import './IntentFeed.css';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
};

const IntentFeed = ({isLoading}): JSX.Element => {
  const {
    setChat,
    receivedIntents,
  }: AppContext = useContext<AppContext>(Context);
  const [selectedIntentSnap, setSelectedIntentSnap] = useState<string>();
  

  return (
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
                key={intent.threadhash || i}
              >
                <ChatSnap
                    pfp={intent.profilePicture}
                    username={intent.msg.name}
                    chatSnapMsg={
                      {
                        type: intent.msg.messageType,
                        message: intent.msg.lastMessage,
                      }
                    }
                    timestamp={intent.msg.timestamp}
                    selected={intent.threadhash == selectedIntentSnap ? true : false}
                    onClick={(): void => {
                      setChat(intent);
                      setSelectedIntentSnap(intent.threadhash);
                    }}
                  />
              </ItemVV2>
            ))}
          </UserIntents>
        )}
      </ItemVV2>
    </ItemVV2>
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

const UserProfileContainer = styled.div`
  margin-top: 14px;
  width: 100%;
  max-height: calc(83.6vh - ${(props) => props.height || 238}px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  &&::-webkit-scrollbar {
    width: 4px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #cf1c84;
  }
`;

const UserIntents = styled(ItemVV2)`
  margin-top: 14px;
  display: flex;
  align-items: center;
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
