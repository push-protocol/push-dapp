// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

// External Packages
import ReactGA from 'react-ga';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useClickAway } from 'react-use';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import ChatQR from 'components/chat/w2wChat/chatQR/chatQR';
import MobileView from 'components/chat/w2wChat/chatQR/mobileView';
import { CreateGroupModalContent } from 'components/chat/w2wChat/groupChat/createGroup/CreateGroupModalContent';
import { GroupInfoModalContent } from 'components/chat/w2wChat/groupChat/groupInfo/groupInfoModalContent';
import LoaderSpinner, {
  LOADER_OVERLAY,
  LOADER_SPINNER_TYPE,
  LOADER_TYPE,
  PROGRESS_POSITIONING
} from 'components/reusables/loaders/LoaderSpinner';
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import { ChatUserContext } from 'contexts/ChatUserContext';
import { VideoCallContext } from 'contexts/VideoCallContext';
import * as w2wHelper from 'helpers/w2w/';
import { checkIfGroup, rearrangeMembers } from 'helpers/w2w/groupChat';
import { useDeviceWidthCheck, useSDKSocket } from 'hooks';
import { default as useModalBlur } from 'hooks/useModalBlur';
import { default as useToast } from 'hooks/useToast';
import ChatBoxSection from 'sections/chat/ChatBoxSection';
import ChatSidebarSection from 'sections/chat/ChatSidebarSection';
import VideoCallSection, { VideoCallInfoI } from 'sections/video/VideoCallSection';
import { AppContext, Feeds, MessageIPFS, MessageIPFSWithCID, User } from 'types/chat';


// Internal Configs
import { appConfig } from 'config';
import GLOBALS, { device, globalsMargin } from 'config/Globals';
import { fetchIntent } from 'helpers/w2w/user';

export const ToastPosition: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: 0,
};

export const Context = React.createContext<AppContext | null>(null);

// Create Header
function Chat({ chatid }) {
  const { account, chainId, library } = useWeb3React<ethers.providers.Web3Provider>();
  const { getUser, connectedUser, setConnectedUser, blockedLoading, setBlockedLoading, displayQR, setDisplayQR } =
    useContext(ChatUserContext);

  const theme = useTheme();

  const [viewChatBox, setViewChatBox] = useState<boolean>(false);
  const [currentChat, setCurrentChat] = useState<Feeds>();
  const [messages, setMessages] = useState<MessageIPFSWithCID[]>([]);
  const [receivedIntents, setReceivedIntents] = useState<Feeds[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  const [intents, setIntents] = useState<Feeds[]>([]);
  const [inbox, setInbox] = useState<Feeds[]>([]);
  const [hasUserBeenSearched, setHasUserBeenSearched] = useState<boolean>(false);
  const [activeTab, setCurrentTab] = useState<number>(0);
  const [userShouldBeSearched, setUserShouldBeSearched] = useState<boolean>(false);
  const [filteredUserData, setFilteredUserData] = useState<User[]>([]);

  const isMobile = useDeviceWidthCheck(600);
  const queryClient = new QueryClient({});

  const containerRef = React.useRef(null);
  // For video calling

  const socketData = useSDKSocket({ account, chainId, env: appConfig.appEnv,socketType: 'chat' });

  useEffect(()=>{
    if(connectedUser && socketData.messagesSinceLastConnection){
      if(currentChat)
        getUpdatedChats(socketData.messagesSinceLastConnection);
      getUpdatedInbox(socketData.messagesSinceLastConnection)
    }
  },[socketData.messagesSinceLastConnection])

  useEffect(()=>{
    if(connectedUser && socketData.groupInformationSinceLastConnection) {
      getUpdatedGroup(socketData.groupInformationSinceLastConnection);
    }
  },[socketData.groupInformationSinceLastConnection])

  const getUpdatedChats = async(chat) => {
    if((currentChat.did === chat.fromCAIP10) || currentChat?.groupInformation?.chatId === chat.toCAIP10){
    const decryptedChat:MessageIPFS = await w2wHelper.decryptMessages({
      savedMsg: chat,
      connectedUser,
      account,
      currentChat,
      inbox
    });
    setMessages([...messages,{...decryptedChat,cid:socketData.messagesSinceLastConnection.cid}]);
    }
  }

  const getUpdatedInbox = async(message) => {
    let isInInbox = false;
    let decryptedChat:MessageIPFS;

    //change to common decryption for getUpdatedInbox and getUpdatedChats using filter
    const updatedFeed = inbox.filter(feed=>(feed.did === message.fromCAIP10) || (feed?.groupInformation?.chatId === message.toCAIP10));
   if(updatedFeed.length){
     decryptedChat = await w2wHelper.decryptMessages({
      savedMsg: message,
      connectedUser,
      account,
      currentChat:updatedFeed[0],
      inbox
    });

  }
    const updatedInbox = inbox.map(feed => {
      if((feed.did === message.fromCAIP10) || feed?.groupInformation?.chatId === message.toCAIP10){
        feed.msg = decryptedChat;
        isInInbox = true;
      }
      return feed;
    });
    if(isInInbox){

    setInbox(updatedInbox);
    }
    else {
      //update msg for already received intents
      const intents = await fetchIntent(connectedUser);
      setReceivedIntents(intents);
    }
  }

  const getUpdatedGroup = async(groupInfo) => {
    let isInInbox = false;
    const updatedInbox = inbox.map(feed => {
      if(feed?.groupInformation?.chatId === groupInfo.chatId){
        feed.groupInformation = groupInfo;
        isInInbox = true;
      }
      return feed;
    });
    if(isInInbox){
    setInbox(updatedInbox);
    }
    else {
      const intents = await fetchIntent(connectedUser);
      setReceivedIntents(intents);
    }
  }

  const [videoCallInfo, setVideoCallInfo] = useState<VideoCallInfoI>({
    address: null,
    fromPublicKeyArmored: null,
    toPublicKeyArmored: null,
    privateKeyArmored: null,
    establishConnection: 0,
  });

  // React GA Analytics
  ReactGA.pageview('/chat');

  // window.ethereum.on('accountsChanged', (account) => {
  //   window.location.reload();
  // });
  // window.ethereum.on('networksChanged', () => {
  //   window.location.reload();
  // });

  useEffect(() => {
    if (videoCallInfo) {
      console.log(videoCallInfo);
    }
  }, [videoCallInfo]);

  const { call, callAccepted } = useContext(VideoCallContext);
  useEffect(() => {
    if (Object.keys(call).length > 0) {
      setVideoCallInfo({
        address: call.from,
        fromPublicKeyArmored: connectedUser.publicKey,
        toPublicKeyArmored: currentChat ? currentChat.publicKey : null,
        privateKeyArmored: connectedUser.privateKey,
        establishConnection: 2,
      });
    }
  }, [call]);

  useEffect(() => {
    if (callAccepted && videoCallInfo.establishConnection == 2) {
      setVideoCallInfo({
        address: call.from,
        fromPublicKeyArmored: connectedUser.publicKey,
        toPublicKeyArmored: currentChat ? currentChat.publicKey : null,
        privateKeyArmored: connectedUser.privateKey,
        establishConnection: 3,
      });
    }
  }, [callAccepted]);

  useEffect(()=>{
    setChat(null);
    setActiveTab(0);
    setViewChatBox(false);
    setIsLoading(true);
    connectUser();
  },[account])

  // Rest of the loading logic
  useEffect(() => {
    console.log("Connected user is changed",connectedUser)
    if (isLoading) {
      console.log("Connected user is  called")
      setConnectedUser(connectedUser);
      connectUser();
    }
  }, [connectedUser]);

  const closeQRModal = () => {
    setDisplayQR(false);
  };
  useClickAway(containerRef, () => closeQRModal());

  const groupInfoToast = useToast();

  const {
    isModalOpen: isGroupInfoModalOpen,
    showModal: showGroupInfoModal,
    ModalComponent: GroupInfoModalComponent,
  } = useModalBlur({padding:"0px"});

  const createGroupToast = useToast();

  const {
    isModalOpen: isCreateGroupModalOpen,
    showModal: showCreateGroupModal,
    ModalComponent: CreateGroupModalComponent,
  } = useModalBlur({padding:'0px'});


  const connectUser = async (): Promise<void> => {
    // Getting User Info
    setBlockedLoading({
      enabled: true,
      title: 'Step 1/4: Getting Account Info',
      progressEnabled: true,
      progress: 25,
      progressNotice: 'Important: Push Chat encryption standard is updated, you might need to sign 3-4 transactions to upgrade (required once).',
    });

    const caip10:string = w2wHelper.walletToCAIP10({account});

    console.log("Account",account,connectedUser,caip10);
    
    if(connectedUser?.wallets !== caip10){
      console.log("Get User is called")
      await getUser();
    }

    setBlockedLoading({
      enabled: false,
      title: "Step 4/4: Let's Chat ;)",
      spinnerType: LOADER_SPINNER_TYPE.COMPLETED,
      progressEnabled: true,
      progress: 100,
    });

    setIsLoading(false);

    if (chatid) {
      // reformat chatid first
      chatid = reformatChatId(chatid);

      // dynamic url
      setCurrentTab(4);
    }
  };

  const setActiveTab = (tab: number): void => {
    if (tab === 1) {
      if (intents.length) setChat(intents[0]);
      else setChat(null);
      setCurrentTab(tab);
    } else if (tab === 0) {
      setCurrentTab(tab);
    } else if (tab === 3) {
      setChat(null);
      setCurrentTab(tab);
    } else if (tab === 4) {
      setCurrentTab(tab);
    }
  };

  const reformatChatId = (chatid: string): string => {
    let isWallet = false;

    // check if chatid: is appened, then skip anything else
    if (chatid.startsWith('chatid:')) {
      return chatid;
    }

    // check if .eth is at the end, then skip anything else
    if (chatid.endsWith('.eth')) {
      return chatid;
    }

    // check if this is eip155: which is considered default and therefore remove it
    if (chatid.startsWith('eip155:')) {
      chatid = chatid.replace('eip155:', '');
      isWallet = true;
    }

    // check if this is eip155: which is considered default and therefore remove it
    if (chatid.startsWith('eip155:')) {
      chatid = chatid.replace('eip155:', '');
      isWallet = true;
    }

    // check if this is an account address or not and based on that take appropriate action
    if (!isWallet && ethers.utils.isAddress(chatid)) {
      isWallet = true;
    }

    // if all checks fail then this is probably a chat id
    // WARNING: THIS WILL FAIL WITH NON-EVMS, NEED NODES TO INDICATE CHATID:
    if (!isWallet) {
      // append chatid:
      chatid = `chatid:${chatid}`;
    }

    return chatid;
  }

  let navigate = useNavigate();
  const setChat = (feed: Feeds): void => {
    if (feed) {
      setViewChatBox(true);
      if(checkIfGroup(feed))
      {
        rearrangeMembers(feed,connectedUser);
      }

      // check and set to wallet or chat id
      let chatid = feed.did;
      if (!chatid) {
        // check group information
        if (feed.groupInformation) {
          chatid = feed.groupInformation.chatId;
        }
      }
      chatid = reformatChatId(chatid);
      // console.log(feed);
      setCurrentChat(feed);

      // lastly, set navigation for dynamic linking
      navigate(`/chat/${chatid}`);
    } else {
      setViewChatBox(false);
      navigate(`/chat`);
    }
  };

  return (
    <Container>
      <ItemHV2 ref={containerRef}>
        {!isLoading ? (
          <QueryClientProvider client={queryClient}>
            <Context.Provider
              value={{
                currentChat,
                receivedIntents,
                setReceivedIntents,
                viewChatBox,
                setChat,
                intents,
                messages,
                setMessages,
                setIntents,
                inbox,
                setInbox,
                hasUserBeenSearched,
                setHasUserBeenSearched,
                loadingMessage,
                setLoadingMessage,
                setBlockedLoading,
                activeTab,
                setActiveTab,
                userShouldBeSearched,
                setUserShouldBeSearched,
                filteredUserData,
                setFilteredUserData
              }}
            >
              <ChatSidebarContainer
                flex="1"
                maxWidth="310px"
                minWidth="280px"
                padding="10px 10px 10px 20px"
                boxSizing="border-box"
                background={theme.default.bg}
                chatActive={viewChatBox}
              >
                <ChatSidebarSection showCreateGroupModal={showCreateGroupModal} autofilledSearch={chatid} />
              </ChatSidebarContainer>
              <ChatContainer
                padding="10px 10px 10px 10px"
                chatActive={viewChatBox}
              >
                <ChatBoxSection setVideoCallInfo={setVideoCallInfo} showGroupInfoModal={showGroupInfoModal}/>
              </ChatContainer>
              <GroupInfoModalComponent
                InnerComponent={GroupInfoModalContent}
                onConfirm={() => {}}
                toastObject={groupInfoToast}
                />
              <CreateGroupModalComponent
                InnerComponent={CreateGroupModalContent}
                toastObject={createGroupToast}
              />

              {displayQR && !isMobile && (
                <>
                  <ChatQR
                    type={LOADER_TYPE.STANDALONE}
                    overlay={LOADER_OVERLAY.ONTOP}
                    blur={GLOBALS.ADJUSTMENTS.BLUR.DEFAULT}
                    width="75%"
                  />

                  {/* <MobileView
                    type={LOADER_TYPE.STANDALONE}
                    overlay={LOADER_OVERLAY.ONTOP}
                    blur={GLOBALS.ADJUSTMENTS.BLUR.DEFAULT}
                    width="75%"
                  /> */}
                </>
              )}

              {displayQR && isMobile && (
                <>
                  <MobileView
                    type={LOADER_TYPE.STANDALONE}
                    overlay={LOADER_OVERLAY.ONTOP}
                    blur={GLOBALS.ADJUSTMENTS.BLUR.DEFAULT}
                    width="75%"
                  />
                </>
              )}
            </Context.Provider>
            {/* The rest of your application */}
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        ) : (
          <LoaderSpinner type={LOADER_TYPE.SEAMLESS} />
        )}

        {/* This always needs to be last */}
        {blockedLoading.enabled && (
          <LoaderSpinner
            type={LOADER_TYPE.STANDALONE}
            overlay={LOADER_OVERLAY.ONTOP}
            blur={GLOBALS.ADJUSTMENTS.BLUR.DEFAULT}
            title={blockedLoading.title}
            width="50%"
            spinnerEnabled={blockedLoading.spinnerEnabled}
            spinnerSize={blockedLoading.spinnerSize}
            spinnerType={blockedLoading.spinnerType}
            progressEnabled={blockedLoading.progressEnabled}
            progressPositioning={PROGRESS_POSITIONING.BOTTOM}
            progress={blockedLoading.progress}
            progressNotice={blockedLoading.progressNotice}
          />
        )}

        {/* But video chat trumps this now!!! */}
        {videoCallInfo.establishConnection > 0 && (
          <VideoCallSection
            videoCallInfo={videoCallInfo}
            setVideoCallInfo={setVideoCallInfo}
            endVideoCallHook={() => {
              setVideoCallInfo({
                address: null,
                fromPublicKeyArmored: null,
                toPublicKeyArmored: null,
                privateKeyArmored: null,
                establishConnection: 0,
              });
            }}
          />
        )}
      </ItemHV2>
    </Container>
  );
}

// css styles
const Container = styled.div`
	align-items: stretch;
	align-self: stretch;
  flex: 1;
	background: ${(props) => props.theme.default.bg};
	border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
	box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: column;
	flex: initial;
	justify-content: center;
	position: relative;
  overflow: hidden;
  box-sizing: border-box;

  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.DESKTOP.TOP} - ${
  globalsMargin.MINI_MODULES.DESKTOP.BOTTOM
});
  
  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.TABLET.TOP} - ${
  globalsMargin.MINI_MODULES.TABLET.BOTTOM
});
  }

  @media ${device.mobileL} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.MOBILE.TOP} - ${
  globalsMargin.MINI_MODULES.MOBILE.BOTTOM
});
    border: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
`;

const ChatSidebarContainer = styled(ItemVV2)`
  @media ${device.tablet} {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 95%;
    margin-right: ${(props) => (props.chatActive ? '20%' : '0%')};
    opacity: ${(props) => (props.chatActive ? '0' : '1')};
    transition: margin-right 0.25s;
    max-width: initial;
    min-width: auto;
    z-index: 1;
  }
`;

const ChatContainer = styled(ItemVV2)`
  @media ${device.tablet} {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 95%;
    margin-left: ${(props) => (props.chatActive ? '0%' : '100%')};
    transition: margin-left 0.25s;
    max-width: initial;
    min-width: auto;
    z-index: 2;
  }
`;

// Export Default
export default Chat;
