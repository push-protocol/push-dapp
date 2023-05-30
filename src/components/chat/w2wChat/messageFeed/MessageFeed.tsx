// React + Web3 Essentials
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import { MdError } from 'react-icons/md';
import styled, { useTheme } from 'styled-components';


// Internal Components
import { useWeb3React } from '@web3-react/core';
import ChatSnap from 'components/chat/chatsnap/ChatSnap';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { ChatUserContext } from 'contexts/ChatUserContext';
import { decryptFeeds, walletToCAIP10 } from 'helpers/w2w';
import { fetchInbox, getDefaultGroupFeed } from 'helpers/w2w/user';
import useToast from 'hooks/useToast';
import { Context } from 'modules/chat/ChatModule';
import { AppContext, Feeds, IGroup, User } from 'types/chat';
import { checkIfGroup, getChatsnapMessage, getGroupImage, getName } from '../../../../helpers/w2w/groupChat';
import { getDefaultFeed } from '../../../../helpers/w2w/user';
import { intitializeDb } from '../w2wIndexeddb';

// Internal Configs


interface MessageFeedPropsI {
  filteredUserData: User[] | IGroup;
  hasUserBeenSearched: boolean;
  isInvalidAddress: boolean;
  automatedSearch: boolean;
}

const MessageFeed = (props: MessageFeedPropsI): JSX.Element => {
  const theme = useTheme();

  const { setChat, setInbox, currentChat, receivedIntents, setActiveTab, activeTab, inbox, setHasUserBeenSearched, filteredUserData, setFilteredUserData }: AppContext = useContext<AppContext>(Context);

  const { connectedUser } = useContext(ChatUserContext);

  const [feeds, setFeeds] = useState<Feeds[]>([]);
  const [messagesLoading, setMessagesLoading] = useState<boolean>(true);
  const [stopApi, setStopApi] = useState<boolean>(true);
  const [selectedChatSnap, setSelectedChatSnap] = useState<number>();
  const { chainId, account } = useWeb3React<ethers.providers.Web3Provider>();
  const [showError, setShowError] = useState<boolean>(false);
  const messageFeedToast = useToast();

  const onFeedClick = (feed:Feeds,i:number):void => {
    if((receivedIntents?.filter((userExist) => userExist.did && props?.filteredUserData[0]?.did && userExist.did?.toLowerCase() === props?.filteredUserData[0]?.did?.toLowerCase()))
.length)
    {
      setActiveTab(1);
    }
    setChat(feed);
    setSelectedChatSnap(i);
    setHasUserBeenSearched(false);
    filteredUserData.length>0 ? setFilteredUserData([]):null;
  }
  const getInbox = async (): Promise<Feeds[]> => {
      const getInbox = await intitializeDb<string>('Read', 'Inbox', walletToCAIP10({ account }), '', 'did');
      if (getInbox !== undefined && !inbox.length) {
        let inboxes: Feeds[] = getInbox.body;
        inboxes = await decryptFeeds({ feeds: inboxes, connectedUser });
        if (JSON.stringify(feeds) !== JSON.stringify(inboxes))
        {
         setFeeds(inboxes)
         setInbox(inboxes);
        }
        return inboxes;
    }
  };
  
  const fetchInboxApi = async (): Promise<Feeds[]> => {
    try {
      const inboxes:Feeds[] = await fetchInbox(connectedUser);
      if (JSON.stringify(inbox) !== JSON.stringify(inboxes)){
        setFeeds(inboxes);
        setInbox(inboxes);
        intitializeDb<Feeds[]>('Insert', 'Inbox', walletToCAIP10({ account }), inboxes, 'did');
        if(checkIfGroup(currentChat)){
       
          if(currentChat && inboxes[selectedChatSnap] && currentChat?.groupInformation?.members?.length !== inboxes[selectedChatSnap]?.groupInformation?.members?.length)
          {
            setChat(inboxes[selectedChatSnap]);
          }
       
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

  const updateInbox = async (): Promise<void> => {
      await getInbox();
      fetchInboxApi();

    setMessagesLoading(false);
  };

  useEffect(() => {
    setFeeds(inbox);  
  },[inbox]);

  useEffect(() => {
    if(feeds && feeds.length > 0 && props.automatedSearch) {
      onFeedClick(feeds[0], 0);
      setActiveTab(0);
    }
  }, [feeds]);

  useEffect(() => {
    if(!props.hasUserBeenSearched)
      updateInbox();
  },[]);

  useEffect(() => {
    if (!props.hasUserBeenSearched) {
      updateInbox();
    } else {
      const searchFn = async (): Promise<void> => {
        if (props.filteredUserData.length) {
          if (Object(props.filteredUserData[0]).wallets?.toLowerCase() === walletToCAIP10({ account })?.toLowerCase()) {
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
            const searchedData: User | IGroup = props.filteredUserData[0];
            let feed: Feeds,isNew:boolean;
            if((searchedData as IGroup)?.groupName) {
              ({feed,isNew} = await getDefaultGroupFeed({groupData:searchedData as IGroup,inbox,intents:receivedIntents}));
            }
            else {
              feed = await getDefaultFeed({userData:searchedData as User,inbox,intents:receivedIntents});
            }
            if(isNew && !feed?.groupInformation?.isPublic)
            {
              messageFeedToast.showMessageToast({
                toastTitle: 'Error',
                toastMessage: 'Cannot search for private groups now',
                toastType: 'ERROR',
                getToastIcon: (size) => (
                  <MdError
                    size={size}
                    color="red"
                  />
                ),
              });
              setFilteredUserData([]);
              setActiveTab(0);
            }
            else{
              setFeeds([feed]);
            }
            
          }
       
        } else {
          if (props.isInvalidAddress) {
            messageFeedToast.showMessageToast({
              toastTitle: 'Error',
              toastMessage: 'Invalid Search',
              toastType: 'ERROR',
              getToastIcon: (size) => (
                <MdError
                  size={size}
                  color="red"
                />
              ),
            });
          }

          // reset if active tab is 4
          if (activeTab == 4) {
            setActiveTab(0);
          }
          else {
            setFeeds([]);
          }
        }
        setMessagesLoading(false);
      };
      searchFn();
    }

    return ()=>{
      setMessagesLoading(false);
    }
  }, [props.hasUserBeenSearched, props.filteredUserData]);
  return (
    <ItemVV2
      flex={6}
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      {/* hey there */}
      {activeTab !== 3 && activeTab !== 4 && (
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
            {!feeds?.length && !messagesLoading && activeTab!==3 && activeTab!==4 ? (
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
