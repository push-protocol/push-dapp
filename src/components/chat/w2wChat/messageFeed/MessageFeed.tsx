// React + Web3 Essentials
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import { MdError } from 'react-icons/md';
import styled, { useTheme } from 'styled-components';
import { Waypoint } from 'react-waypoint';

// Internal Components
import ChatSnap from 'components/chat/chatsnap/ChatSnap';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { decryptFeeds, walletToCAIP10 } from 'helpers/w2w';
import { fetchInbox, getDefaultGroupFeed } from 'helpers/w2w/user';
import useToast from 'hooks/useToast';
import { Context } from 'modules/chat/ChatModule';
import { ChatUserAppContext, Feeds, IGroup, User } from 'types/chat';
import { checkIfGroup, getChatsnapMessage, getGroupImage, getName } from '../../../../helpers/w2w/groupChat';
import { getDefaultFeed } from '../../../../helpers/w2w/user';
import { useAccount } from 'hooks';
import { AppContext } from 'contexts/AppContext';

// Internal Configs

interface MessageFeedPropsI {
  filteredUserData: User[] | IGroup;
  hasUserBeenSearched: boolean;
  isInvalidAddress: boolean;
  automatedSearch: boolean;
}

const MessageFeed = (props: MessageFeedPropsI): JSX.Element => {
  const theme = useTheme();

  const { setChat, setInbox, currentChat, receivedIntents, setActiveTab, activeTab, inbox, setHasUserBeenSearched, filteredUserData, setFilteredUserData }: ChatUserAppContext = useContext<ChatUserAppContext>(Context);

  const { connectedUser } = useContext(AppContext);

  const [feeds, setFeeds] = useState<Feeds[]>([]);
  const [messagesLoading, setMessagesLoading] = useState<boolean>(true);
  const [stopApi, setStopApi] = useState<boolean>(true);
  const [selectedChatSnap, setSelectedChatSnap] = useState<number>();
  const [page, setPage] = useState<number>(1);
  const { chainId, account } = useAccount();
  const [showError, setShowError] = useState<boolean>(false);
  const [bgUpdateLoading,setBgUpdateLoading]=useState<boolean>(false);
  const [limit, setLimit] = React.useState(10);
  const [isFetchingDone,setIsFetchingDone]=useState<boolean>(false)
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
  
  const fetchInboxApi = async ({limit, page}): Promise<Feeds[]> => {
    try {
      const inboxes:Feeds[] = await fetchInbox({connectedUser, limit, page});
      if(inboxes?.length>10 && inboxes?.length===feeds?.length){
        setIsFetchingDone(true);
      }
      else if(inboxes.length<10){
        setIsFetchingDone(true);
      }
      if (JSON.stringify(inbox) !== JSON.stringify(inboxes)){
        setInbox(inboxes);
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
    finally{
      setMessagesLoading(false);
    }
  };

  const updateInbox = async ({chatLimit, page}:{chatLimit?:number, page?: number}): Promise<void> => {
    await fetchInboxApi({limit: chatLimit,page});
  };

  useEffect(() => {
    setFeeds(prevInbox=>[...prevInbox,...inbox]);
  },[inbox]);

  useEffect(() => {
    if(feeds && feeds.length > 0 && props.automatedSearch) {
      onFeedClick(feeds[0], 0);
      setActiveTab(0);
    }
  }, [feeds]);

  useEffect(() => {
    if(!props.hasUserBeenSearched)
      updateInbox({chatLimit:limit});
  },[]);

  useEffect(() => {
    if (!props.hasUserBeenSearched) {
      // need to see what it was being used for
      // updateInbox({chatLimit:limit});
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

  const handlePagination = async () => {
    setPage(prevPage=>prevPage+1);
    // setLimit(prevLimit=>prevLimit+10);
    setBgUpdateLoading(true);
    await updateInbox({page});
    setBgUpdateLoading(false);
  };

  const showWayPoint = (index: any) => {
    return Number(index) === feeds?.length - 1 && !messagesLoading && !bgUpdateLoading;
  };

  return (
    <ItemVV2
      flex={6}
      alignItems="flex-start"
      justifyContent="flex-start"
    >
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
        {messagesLoading && !bgUpdateLoading ? (
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
            ) : (
              feeds.map((feed: Feeds, i) => (
                <ItemVV2
                  alignSelf="stretch"
                  flex="initial"
                  key={`${feed.threadhash}${i}`}
                >
                  {showWayPoint(i) && !isFetchingDone && <Waypoint onEnter={handlePagination} />}
                  {
                    feed?.groupInformation?.groupType !== 'spaces' && (
                      <ChatSnap
                      pfp={getGroupImage(feed)}
                      username={getName(feed)}
                      isGroup = {checkIfGroup(feed)}
                      chatSnapMsg={getChatsnapMessage(feed,account!,false)}
                      timestamp={feed.msg.timestamp??feed.intentTimestamp}
                      selected={i == selectedChatSnap ? true : false}
                      onClick={(): void => onFeedClick(feed,i)}
                    />
                    )
                  }
                </ItemVV2>
              ))
            ) }
          </>
        )}
        {
        bgUpdateLoading && (
          <LoaderSpinner
            type={LOADER_TYPE.SEAMLESS}
            spinnerSize={40}
          />
        )
      }
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
