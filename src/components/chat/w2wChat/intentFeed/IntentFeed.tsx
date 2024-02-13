// React + Web3 Essentials
// @ts-ignore
import React, { useContext, useState } from 'react';
import { ethers } from 'ethers';

// External Packages
import styled, { useTheme } from 'styled-components';
import { Waypoint } from 'react-waypoint';

// Internal Components
import ChatSnap from "components/chat/chatsnap/ChatSnap";
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { Context } from 'modules/chat/ChatModule';
import { ChatUserAppContext, Feeds } from 'types/chat';
import { checkIfGroup, getChatsnapMessage, getGroupImage,getName,  } from 'helpers/w2w/groupChat';
import { fetchIntent } from 'helpers/w2w/user';
import { useAccount } from 'hooks';
import { AppContext } from 'contexts/AppContext';



const IntentFeed = ({isLoading}): JSX.Element => {
  const theme = useTheme();
  const {
    setChat,
    receivedIntents,
    setReceivedIntents
  }: ChatUserAppContext = useContext<ChatUserAppContext>(Context);
  const { connectedUser} = useContext(AppContext);
  const [selectedIntentSnap, setSelectedIntentSnap] = useState<number>();
  const { chainId, account } = useAccount();
  const [limit, setLimit] = useState<number>(10);
  const [bgUpdateLoading,setBgUpdateLoading] = useState<boolean>(false);
  const [isFetchingDone,setIsFetchingDone] = useState<boolean>(false)
  const [intentLoading,setIntentLoading] = useState<boolean>(false);

  const updateIntents=async({chatLimit}:{chatLimit?:number})=>{
    try{
    setIntentLoading(true)
    const intents=await fetchIntent({connectedUser, limit})
    if(intents?.length>10 && receivedIntents?.length === intents?.length){
      setIsFetchingDone(true);
    }
    else if(intents.length<10){
      setIsFetchingDone(true);
    }
    setReceivedIntents(intents);
    setIntentLoading(false);
    }
    catch(e){
      console.error("Error occured",e.message);
      setIntentLoading(false)
    }
  }

  const handlePagination = async () => {
    setLimit(prevLimit=>prevLimit+10);
    setBgUpdateLoading(true);
    await updateIntents({chatLimit:limit+10});
    setBgUpdateLoading(false);
  };

  const showWayPoint = (index: any) => {
    return Number(index) === receivedIntents?.length - 1 && !intentLoading && !bgUpdateLoading;
  };

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
          {(isLoading || intentLoading) && !bgUpdateLoading && (
            <LoaderSpinner
              type={LOADER_TYPE.SEAMLESS}
              spinnerSize={40}
            />
          )}

          {(!isLoading || !intentLoading) && receivedIntents?.length == 0 && (
            <NoIntentMessage>You don't have any request yet Start a conversation by using the + button</NoIntentMessage>
          )}

        {(!isLoading || !intentLoading) && receivedIntents?.length > 0 && (
          <UserIntents>
            {receivedIntents.map((intent: Feeds, i) => (
              <ItemVV2
                alignSelf="stretch"
                flex="initial"
                key={`${intent.threadhash}${i}`}
              >
                 {showWayPoint(i) && !isFetchingDone && <Waypoint onEnter={handlePagination} />}
                {
                  intent?.groupInformation?.groupType !== 'spaces' && (
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
                  )
                }
                </ItemVV2>
              ))}
              {
          (isLoading || intentLoading) && bgUpdateLoading && ( 
          <LoaderSpinner
            type={LOADER_TYPE.SEAMLESS}
            spinnerSize={40}
          />
        )
      }
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
