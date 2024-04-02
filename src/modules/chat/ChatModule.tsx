// React + Web3 Essentials
import { ethers } from 'ethers';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// External Packages
import * as PushAPI from '@pushprotocol/restapi';
import ReactGA from 'react-ga';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useSelector } from 'react-redux';
import { ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useClickAway } from 'react-use';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import ChatQR from 'components/chat/w2wChat/chatQR/chatQR';
import MobileView from 'components/chat/w2wChat/chatQR/mobileView';
import { CreateGroupModalContent } from 'components/chat/w2wChat/groupChat/createGroup/CreateGroupModalContent';
import { GroupInfoModalContent } from 'components/chat/w2wChat/groupChat/groupInfo/groupInfoModalContent';
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import LoaderSpinner, {
  LOADER_OVERLAY,
  LOADER_SPINNER_TYPE,
  LOADER_TYPE,
  PROGRESS_POSITIONING,
} from 'components/reusables/loaders/LoaderSpinner';
import { AppContext } from 'contexts/AppContext';
import { VideoCallContext } from 'contexts/VideoCallContext';
import { caip10ToWallet } from 'helpers/w2w';
import * as w2wHelper from 'helpers/w2w/';
import { checkIfGroup, rearrangeMembers } from 'helpers/w2w/groupChat';
import { checkIfIntent, getUpdatedChatAndIntent, getUpdatedGroupInfo } from 'helpers/w2w/user';
import { useAccount, useDeviceWidthCheck, useSDKSocket } from 'hooks';
import useModalBlur, { MODAL_POSITION } from 'hooks/useModalBlur';
import useToast from 'hooks/useToast';
import ChatBoxSection from 'sections/chat/ChatBoxSection';
import ChatSidebarSection from 'sections/chat/ChatSidebarSection';
import VideoCallSection from 'sections/video/VideoCallSection';
import { ChatUserAppContext, Feeds, MessageIPFS, MessageIPFSWithCID, User, VideoCallInfoI } from 'types/chat';

// Internal Configs
import { ChatUIProvider,darkChatTheme, UserProfile } from '@pushprotocol/uiweb';
import { appConfig } from 'config';
import GLOBALS, { device, globalsMargin } from 'config/Globals';
import { GlobalContext } from 'contexts/GlobalContext';
import UnlockProfile from 'components/chat/unlockProfile/UnlockProfile';

export const ToastPosition: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: 0,
};

export const Context = React.createContext<ChatUserAppContext | null>(null);

// Create Header
function Chat({ chatid }) {
  const { account, chainId, provider, wallet } = useAccount();
  const { videoCallData } = useContext(VideoCallContext);

  const {
    blockedLoading,
    setBlockedLoading,
    getUser,
    pgpPvtKey,
    connectedUser,
    setConnectedUser,
    displayQR,
    setDisplayQR,
    handleConnectWallet,
  } = useContext(AppContext);

  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });

  const theme = useTheme();

  const [viewChatBox, setViewChatBox] = useState<boolean>(false);
  const [currentChat, setCurrentChat] = useState<Feeds>();
  const [selectedChatId, setSelectedChatId] = useState<string>();

  const [receivedIntents, setReceivedIntents] = useState<Feeds[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  const [intents, setIntents] = useState<Feeds[]>([]);
  const [inbox, setInbox] = useState<Feeds[]>([]);
  const [hasUserBeenSearched, setHasUserBeenSearched] = useState<boolean>(false);
  const [activeTab, setCurrentTab] = useState<number>(0);
  const [userShouldBeSearched, setUserShouldBeSearched] = useState<boolean>(false);
  const [filteredUserData, setFilteredUserData] = useState<User[]>([]);
  const [signerData, setSignerData] = useState();
  const { readOnlyWallet } = React.useContext(GlobalContext);

  const isMobile = useDeviceWidthCheck(600);
  const queryClient = new QueryClient({});

  const containerRef = React.useRef(null);

  const socketData = useSDKSocket({ account, chainId, env: appConfig.appEnv, socketType: 'chat' });

  // trigger chat participant open
  const triggerChatParticipant = async (chatParticipant: string, chatId: string) => {
    let formattedChatParticipant = chatParticipant;
    let userPushInstance = userPushSDKInstance;

    if (!formattedChatParticipant.includes('.')) {
      if (!(await ethers.utils.isAddress(caip10ToWallet(formattedChatParticipant)))) formattedChatParticipant = chatId;
    }
    let formattedchatId = reformatChatId(formattedChatParticipant);

    //If no PGP keys then connect the wallet.
    if (!userPushInstance.readmode()) {
      if (userPushInstance && !userPushInstance.readmode()) {
        navigate(`/chat/${formattedchatId}`);
        return formattedChatParticipant;
      }
    } else {
      navigate(`/chat/${formattedchatId}`);
      return formattedChatParticipant;
    }
  };

  useEffect(() => {
    if (
      connectedUser &&
      socketData.messagesSinceLastConnection &&
      w2wHelper.caip10ToWallet(socketData.messagesSinceLastConnection.fromCAIP10).toLowerCase() !==
        account.toLowerCase()
    ) {
      if (currentChat) getUpdatedInbox(socketData.messagesSinceLastConnection);
    }
  }, [socketData.messagesSinceLastConnection]);

  useEffect(() => {
    if (connectedUser && socketData.groupInformationSinceLastConnection) {
      getUpdatedGroup(socketData.groupInformationSinceLastConnection);
    }
  }, [socketData.groupInformationSinceLastConnection]);

  const getUpdatedInbox = async (message) => {
    let isListUpdated = false;
    const { updatedInbox, isInboxUpdated } = await getUpdatedChatAndIntent({
      chatList: inbox,
      message,
      connectedUser,
      account,
      checkInbox: true,
    });
    if (isInboxUpdated) {
      isListUpdated = true;
      setInbox(updatedInbox);
    } else {
      const { updatedIntents, isIntentsUpdated } = await getUpdatedChatAndIntent({
        chatList: receivedIntents,
        message,
        connectedUser,
        account,
        checkInbox: false,
      });
      if (isIntentsUpdated) {
        isListUpdated = true;
        setReceivedIntents(updatedIntents);
      }
    }
    if (!isListUpdated) {
      const fetchedChat = await PushAPI.chat.chat({
        account: account,
        toDecrypt: true,
        pgpPrivateKey: connectedUser?.privateKey,
        recipient: caip10ToWallet(message?.fromCAIP10),
        env: appConfig.appEnv,
      });
      if (checkIfIntent({ chat: fetchedChat, account })) {
        setReceivedIntents((prev) => [fetchedChat, ...prev]);
      } else {
        setInbox((prev) => [fetchedChat, ...prev]);
      }
    }
  };

  const getUpdatedGroup = async (groupInfo) => {
    let isGroupUpdated = false;
    const { updatedInbox, isInboxUpdated } = await getUpdatedGroupInfo({
      chatList: inbox,
      groupInfo,
      checkInbox: true,
    });
    if (isInboxUpdated) {
      setInbox(updatedInbox);
      isGroupUpdated = true;
    } else {
      const { updatedIntents, isIntentsUpdated } = await getUpdatedGroupInfo({
        chatList: intents,
        groupInfo,
        checkInbox: false,
      });
      if (isIntentsUpdated) {
        setReceivedIntents(updatedIntents);
        isGroupUpdated = true;
      }
    }
    if (!isGroupUpdated) {
      const fetchedChat = await PushAPI.chat.chat({
        account: account,
        toDecrypt: true,
        pgpPrivateKey: connectedUser?.privateKey,
        recipient: groupInfo?.chatId,
        env: appConfig.appEnv,
      });
      if (checkIfIntent({ chat: fetchedChat, account })) {
        setReceivedIntents((prev) => [fetchedChat, ...prev]);
      } else {
        setInbox((prev) => [fetchedChat, ...prev]);
      }
    }
  };

  // React GA Analytics
  ReactGA.pageview('/chat');

  useEffect(() => {
    setChat(null);
    setInbox([]);
    setReceivedIntents([]);
    setActiveTab(0);
    setViewChatBox(false);
    setIsLoading(true);
    setConnectedUser(null);
  }, [account]);

  // Rest of the loading logic
  useEffect(() => {
    if (isLoading) {
      setConnectedUser(connectedUser);
      connectUser();
    }
  }, [connectedUser, userPushSDKInstance]);

  useEffect(() => {
    if (currentChat?.threadhash == null) {
      for (let i = 0; i < inbox?.length; i++) {
        if (inbox[i]?.wallets === currentChat?.wallets) {
          setChat(inbox[i]);
        }
      }
    }
  }, [inbox]);

  const closeQRModal = () => {
    setDisplayQR(false);
  };
  useClickAway(containerRef, () => closeQRModal());

  const groupInfoToast = useToast();

  const {
    isModalOpen: isGroupInfoModalOpen,
    showModal: showGroupInfoModal,
    ModalComponent: GroupInfoModalComponent,
  } = useModalBlur();

  const {
    isModalOpen: isUnlockProfileOpen,
    showModal: showModal,
    ModalComponent: UnlockProfileModalComponent,
  } = useModalBlur();
  const createGroupToast = useToast();

  const {
    isModalOpen: isCreateGroupModalOpen,
    showModal: showCreateGroupModal,
    ModalComponent: CreateGroupModalComponent,
  } = useModalBlur();

  const connectUser = async (): Promise<void> => {
    const caip10: string = w2wHelper.walletToCAIP10({ account });
    const signer = await provider.getSigner();
    setSignerData(signer);

    if (connectedUser?.wallets?.toLowerCase() !== caip10?.toLowerCase()) {
      await getUser();
    }

    setBlockedLoading({
      enabled: false,
      title: 'Push Profile Setup Complete',
      spinnerType: LOADER_SPINNER_TYPE.COMPLETED,
      progressEnabled: false,
      progress: 100,
    });

    setIsLoading(false);

    if (chatid) {
      // reformat chatid first
      chatid = reformatChatId(chatid);

      if (connectedUser?.wallets?.toLowerCase() === caip10?.toLowerCase()) {
        // dynamic url
        setCurrentTab(4);
      }

      // dynamic url
      // setCurrentTab(4);
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

    // check if .wallet is at the end, then skip anything else
    if (chatid.endsWith('.wallet')) {
      return chatid;
    }
    // check if this is eip155: which is considered default and therefore remove it
    if (chatid.startsWith('eip155:') && !chatid.includes(':nft')) {
      chatid = chatid.replace('eip155:', '');
      isWallet = true;
    }

    if (chatid.includes(':nft')) {
      chatid = chatid.replace(/eip155:\d+:/, 'eip155:').split(':nft')[0];
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
  };

  let navigate = useNavigate();
  const setChat = (feed: Feeds): void => {
    if (feed) {
      setViewChatBox(true);
      if (checkIfGroup(feed)) {
        rearrangeMembers(feed, connectedUser);
      }

      // check and set to wallet or chat id
      let chatid = feed.did;
      if (!chatid) {
        // check group information
        if (feed.groupInformation) {
          chatid = feed.groupInformation.chatId;
        }
      }
      // chatid = reformatChatId(chatid);
      // setCurrentChat(feed);

      // lastly, set navigation for dynamic linking
      // navigate(`/chat/${chatid}`);
    } else {
      setViewChatBox(false);
      // navigate(`/chat`);
    }
  };
  useEffect(() => {
    if (userPushSDKInstance?.readmode()) showModal();
  }, [userPushSDKInstance]);

  useEffect(() => {
    let formattedchatId = selectedChatId || chatid;

    if (formattedchatId) {
      formattedchatId = reformatChatId(formattedchatId);
      // navigate(`/chat/${formattedchatId}`);
      setViewChatBox(true);
    } else {
      setViewChatBox(false);
      navigate(`/chat`);
    }
  }, [selectedChatId]);

  useEffect(() => {}, [account, connectedUser?.privateKey]);

  return (
    <Container>
      <ChatUIProvider
        theme={theme.scheme === 'dark' && darkChatTheme}
        // signer={signerData}
        env={appConfig?.appEnv}
        account={account}
        pgpPrivateKey={pgpPvtKey}
        user={userPushSDKInstance}
      >
        <ItemHV2 ref={containerRef}>
          {!isLoading ? (
            <QueryClientProvider client={queryClient}>
              <Context.Provider
                value={{
                  currentChat,
                  selectedChatId,
                  setSelectedChatId,
                  receivedIntents,
                  setReceivedIntents,
                  viewChatBox,
                  setViewChatBox,
                  setChat,
                  intents,
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
                  setFilteredUserData,
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
                  <ChatSidebarSection
                    showCreateGroupModal={showCreateGroupModal}
                    autofilledSearch={chatid}
                    triggerChatParticipant={triggerChatParticipant}
                  />
                </ChatSidebarContainer>
                <ChatContainer
                  padding="10px 10px 10px 10px"
                  chatActive={viewChatBox}
                >
                  <ChatBoxSection
                    showGroupInfoModal={showGroupInfoModal}
                    triggerChatParticipant={triggerChatParticipant}
                  />
                </ChatContainer>
                {userPushSDKInstance && userPushSDKInstance?.readmode() && (
                  <UnlockProfileModalComponent
                    InnerComponent={UnlockProfile}
                    onConfirm={() => {}}
                    toastObject={groupInfoToast}
                    modalPadding="0px"
                    modalPosition={MODAL_POSITION.ON_PARENT}
                  />
                )}
                <GroupInfoModalComponent
                  InnerComponent={GroupInfoModalContent}
                  onConfirm={() => {}}
                  toastObject={groupInfoToast}
                  modalPadding="0px"
                  modalPosition={MODAL_POSITION.ON_PARENT}
                />
                <CreateGroupModalComponent
                  InnerComponent={CreateGroupModalContent}
                  toastObject={createGroupToast}
                  modalPadding="0px"
                  modalPosition={MODAL_POSITION.ON_PARENT}
                />

                {/* Video Call Section */}
                {videoCallData.incoming[0].status > 0 && <VideoCallSection />}

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
        </ItemHV2>
      </ChatUIProvider>
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
