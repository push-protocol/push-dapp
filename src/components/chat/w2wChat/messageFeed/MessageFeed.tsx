// React + Web3 Essentials
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import { useQuery } from 'react-query';
import styled, { useTheme } from 'styled-components';
import { MdError } from 'react-icons/md';
import { ethers } from 'ethers';


// Internal Components
import { useWeb3React } from '@web3-react/core';
import { AppContext, Feeds, User } from 'types/chat';
import ChatSnap from 'components/chat/chatsnap/ChatSnap';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { decryptFeeds, walletToCAIP10 } from 'helpers/w2w';
import useToast from 'hooks/useToast';
import { checkConnectedUser, fetchInbox } from 'helpers/w2w/user';
import { Context } from 'modules/chat/ChatModule';
import { intitializeDb } from '../w2wIndexeddb';
import { ChatUserContext } from 'contexts/ChatUserContext';
import { checkIfGroup, getChatsnapMessage, getGroupImage, getName } from '../../../../helpers/w2w/groupChat';
import { getDefaultFeed } from '../../../../helpers/w2w/user';

// Internal Configs


interface MessageFeedProps {
  filteredUserData: User[];
  hasUserBeenSearched: boolean;
  isInvalidAddress: boolean;
}

const MessageFeed = (props: MessageFeedProps): JSX.Element => {
  const theme = useTheme();

  const { setChat, setInbox,currentChat,receivedIntents,setActiveTab, activeTab, inbox, setHasUserBeenSearched, filteredUserData, setFilteredUserData }: AppContext = useContext<AppContext>(Context);

  const {connectedUser} = useContext(ChatUserContext);

  const [feeds, setFeeds] = useState<Feeds[]>([]);
  const [messagesLoading, setMessagesLoading] = useState<boolean>(true);
  const [stopApi, setStopApi] = useState<boolean>(true);
  const [selectedChatSnap, setSelectedChatSnap] = useState<number>();
  const { chainId, account } = useWeb3React<ethers.providers.Web3Provider>();
  const [showError, setShowError] = useState<boolean>(false);
  const messageFeedToast = useToast();

  const onFeedClick = (feed:Feeds,i:number):void => {
    if((receivedIntents?.filter((userExist) => userExist.did === props?.filteredUserData[0]?.did)).length)
    {
      setActiveTab(1);
    }
    setChat(feed);
    setSelectedChatSnap(i);
    setHasUserBeenSearched(false);
    filteredUserData.length>0 ? setFilteredUserData([]):null;
  }

  const getInbox = async (): Promise<Feeds[]> => {
    if (checkConnectedUser(connectedUser)) {
      const getInbox = await intitializeDb<string>('Read', 'Inbox', walletToCAIP10({ account }), '', 'did');
      if (getInbox !== undefined) {
        let inboxes: Feeds[] = getInbox.body;
        inboxes = await decryptFeeds({ feeds: inboxes, connectedUser });
        if (JSON.stringify(feeds) !== JSON.stringify(inboxes))
        {
         setFeeds(inboxes)
         setInbox(inboxes);
        }
        return inboxes;
      } else {
        let inboxes: Feeds[] = await fetchInboxApi();
        return inboxes;
      }
    }
  };
  const fetchInboxApi = async (): Promise<Feeds[]> => {
    try {
      const inboxes:Feeds[] = await fetchInbox(connectedUser);
      if (JSON.stringify(feeds) !== JSON.stringify(inboxes)) {
        setFeeds(inboxes);
        setInbox(inboxes);
        if(checkIfGroup(currentChat)){
          if(JSON.stringify(currentChat?.groupInformation?.members) !== JSON.stringify(inboxes[selectedChatSnap]?.groupInformation?.members))
           setChat(inboxes[selectedChatSnap]);
        }
      }
      setShowError(false);
      return inboxes;
    } catch (e) {
      if (!showError) {
        messageFeedToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: 'An Error Occurred!...Please Reload the Page',
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
      }
      setShowError(true);
    }
  };
  useQuery('inbox', getInbox, {
    enabled: !props.hasUserBeenSearched && stopApi,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    suspense: false,
    onError: () => {
      setStopApi(false);
    },
    retry: 3,
    refetchInterval: 1000 * 5,
    retryDelay: 1000 * 5,
  });

  useQuery('fetchInboxApi', fetchInboxApi, {
    enabled: !props.hasUserBeenSearched && stopApi,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    suspense: false,
    onError: () => {
      setStopApi(false);
    },
    retry: 3,
    refetchInterval: 1000 * 5,
    retryDelay: 1000 * 5,
  });

  const updateInbox = async (): Promise<void> => {
    if (checkConnectedUser(connectedUser)) {
      await getInbox();
    }
    setMessagesLoading(false);
  };
  useEffect(() => {
    if (!props.hasUserBeenSearched) {
      updateInbox();
    } else {
      const searchFn = async (): Promise<void> => {
        if (props.filteredUserData.length) {
          if (Object(props.filteredUserData[0]).wallets === walletToCAIP10({ account })) {
            messageFeedToast.showMessageToast({
              toastTitle: 'Error',
              toastMessage: "You can't send intent to yourself",
              toastType: 'ERROR',
              getToastIcon: (size) => (
                <MdError
                  size={size}
                  color="red"
                />
              ),
            });
            setFeeds([]);
          } else {
            // When searching as of now the search will always result in only one user being displayed.
            // There is no multiple users appearing on the sidebar when a search is done. The wallets must match exactly.
            const user: User = props.filteredUserData[0];
            let feed: Feeds;
                feed = await getDefaultFeed({userData:user,inbox,intents:receivedIntents});
            setFeeds([feed]);
          }
        } else {
          if (props.isInvalidAddress) {
            messageFeedToast.showMessageToast({
              toastTitle: 'Error',
              toastMessage: 'Invalid Address',
              toastType: 'ERROR',
              getToastIcon: (size) => (
                <MdError
                  size={size}
                  color="red"
                />
              ),
            });
          }

          setFeeds([]);
        }
        setMessagesLoading(false);
      };
      searchFn();
    }
  }, [props.hasUserBeenSearched, props.filteredUserData]);

  return (
    <ItemVV2
      flex={6}
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      {/* hey there */}
      {activeTab !== 3 && (
        <SpanV2
          fontWeight="700"
          fontSize="12px"
          textAlign="start"
          margin="10px 0 0 0"
          color={theme.default.secondaryColor}
        >
          CHATS
        </SpanV2>
      )}
      <UserChats flexFlow="column">
        {messagesLoading ? (
          <LoaderSpinner
            type={LOADER_TYPE.SEAMLESS}
            spinnerSize={40}
          />
        ) : (
          <>
            {!feeds?.length && !messagesLoading && activeTab!==3 ? (
              <EmptyConnection>
                Start a new chat by using the + button <ArrowBend src="/svg/chats/arrowbendup.svg" />
              </EmptyConnection>
            ) : !messagesLoading ? (
              feeds.map((feed: Feeds, i) => (

                <ItemVV2
                  alignSelf="stretch"
                  flex="initial"
                  key={`${feed.threadhash}${i}`}
                >
                  <ChatSnap
                    pfp={getGroupImage(feed)}
                    username={getName(feed)}
                    isGroup = {checkIfGroup(feed)}
                    chatSnapMsg={getChatsnapMessage(feed,account!,false)}
                    timestamp={feed.msg.timestamp??feed.intentTimestamp}
                    selected={i == selectedChatSnap ? true : false}
                    onClick={(): void => onFeedClick(feed,i)}
                  />
                </ItemVV2>
              ))
            ) : null}
          </>
        )}
      </UserChats>
    </ItemVV2>
  );
};

const ArrowBend = styled.img`
  position: absolute;
  right: -23px;
  top: -30px;
`;

const EmptyConnection = styled.div`
  position: relative;
  width: 80%;
  text-align: center;
  color: #657795;
  font-size: 15px;
  margin-top: 25px;
`;

const UserChats = styled(ItemVV2)`
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
  height: 80px;
  flex-flow: column;

  &&::-webkit-scrollbar {
    width: 4px;
  }
  &&::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.default.secondaryBg || '#000000'};
  }
`;

export default MessageFeed;
