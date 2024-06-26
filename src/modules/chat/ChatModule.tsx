// React + Web3 Essentials
import { ethers } from 'ethers';
import { useContext, useEffect, useState, useRef, createContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// External Packages
import { CONSTANTS } from '@pushprotocol/restapi';
import ReactGA from 'react-ga';
import { useSelector } from 'react-redux';
import { ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import ChatQR from 'components/chat/w2wChat/chatQR/chatQR';
import MobileView from 'components/chat/w2wChat/chatQR/mobileView';
import { CreateGroupModalContent } from 'components/chat/w2wChat/groupChat/createGroup/CreateGroupModalContent';
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import LoaderSpinner, { LOADER_OVERLAY, LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { AppContext } from 'contexts/AppContext';
import { VideoCallContext } from 'contexts/VideoCallContext';
import * as w2wHelper from 'helpers/w2w/';
import { useAccount, useDeviceWidthCheck } from 'hooks';
import useModalBlur, { MODAL_POSITION } from 'hooks/useModalBlur';
import useToast from 'hooks/useToast';
import ChatSection from 'sections/chat/ChatSection';
import ChatSidebarSection from 'sections/chat/ChatSidebarSection';
import VideoCallSection from 'sections/video/VideoCallSection';
import { ChatUserAppContext, Feeds, User } from 'types/chat';

// Internal Configs
import GLOBALS, { device, globalsMargin } from 'config/Globals';

export const ToastPosition: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: 0,
};

export const Context = createContext<ChatUserAppContext | null>(null);

// Create Header
function Chat({ chatid }) {
  // React GA Analytics
  useEffect(() => {
    ReactGA.pageview('/chat');
  }, []);

  // determine if chat is active
  const location = useLocation();
  const pathname = location.pathname;

  // Check if the URL ends with '/chat' and does not include a chat ID
  const isUserChatting = pathname.endsWith('/chat') && !pathname.includes('::chatid');
  const { account, provider } = useAccount();

  const { videoCallData } = useContext(VideoCallContext);

  const { setBlockedLoading, getUser, connectedUser, setConnectedUser, displayQR } = useContext(AppContext);

  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });

  const theme = useTheme();

  const [viewChatBox, setViewChatBox] = useState<boolean>(false);
  const [currentChat] = useState<Feeds>();
  const [selectedChatId, setSelectedChatId] = useState<string>();

  const [receivedIntents, setReceivedIntents] = useState<Feeds[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  const [intents, setIntents] = useState<Feeds[]>([]);
  const [inbox, setInbox] = useState<Feeds[]>([]);
  const [hasUserBeenSearched, setHasUserBeenSearched] = useState<boolean>(false);
  // TODO: Add proper types and lean the logic
  const [activeTab, setCurrentTab] = useState<number>(0);
  const [userShouldBeSearched, setUserShouldBeSearched] = useState<boolean>(false);
  const [filteredUserData, setFilteredUserData] = useState<User[]>([]);
  const [signerData, setSignerData] = useState();

  const isMobile = useDeviceWidthCheck(600);

  const containerRef = useRef(null);

  useEffect(() => {
    setActiveTab(0);
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

  const { showModal: showModal } = useModalBlur();
  const createGroupToast = useToast();

  const { showModal: showCreateGroupModal, ModalComponent: CreateGroupModalComponent } = useModalBlur();

  const connectUser = async (): Promise<void> => {
    const caip10: string = w2wHelper.walletToCAIP10({ account });
    const signer = await provider.getSigner();
    setSignerData(signer);

    if (connectedUser?.wallets?.toLowerCase() !== caip10?.toLowerCase()) {
      await getUser();
    }

    // This is probably not needed anymore
    // setBlockedLoading({
    //   enabled: false,
    //   title: 'Push Profile Setup Complete',
    //   spinnerType: LOADER_SPINNER_TYPE.COMPLETED,
    //   progressEnabled: false,
    //   progress: 100,
    // });

    setIsLoading(false);
  };

  const setActiveTab = (tab: number): void => {
    if (tab === 1) {
      setCurrentTab(tab);
    } else if (tab === 0) {
      setCurrentTab(tab);
    } else if (tab === 3) {
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

  // For setting Push SDK
  useEffect(() => {
    if (userPushSDKInstance?.readmode()) showModal();
  }, [userPushSDKInstance]);

  // For setting selected chat id to empty string when none of the chat is open
  useEffect(() => {
    setSelectedChatId('');
  }, [pathname]);

  // For setting selected chat id
  useEffect(() => {
    let formattedchatId = selectedChatId || chatid;

    if (formattedchatId) {
      formattedchatId = reformatChatId(formattedchatId);
      navigate(`/chat/${formattedchatId}`);
    } else {
      navigate(`/chat`);
    }
  }, [selectedChatId]);

  // Handle chat accept and group creation stream
  if (userPushSDKInstance && !userPushSDKInstance.readmode() && userPushSDKInstance.stream) {
    userPushSDKInstance.stream?.on(CONSTANTS.STREAM.CHAT, (chat: any) => {
      if (chat.event === 'chat.accept') {
        // Change Tab to 0 aka Chats
        setActiveTab(0);
      }
    });

    userPushSDKInstance.stream?.on(CONSTANTS.STREAM.CHAT_OPS, (chatops: any) => {
      if (chatops.event === 'chat.group.create') {
        // Change Tab to 0 aka Chats
        setActiveTab(0);

        // Set selected chat id to the group created
        setSelectedChatId(chatops.chatId);
      }
    });
  }

  return (
    <Container>
      <ItemHV2
        ref={containerRef}
        height="inherit"
      >
        {isLoading && <LoaderSpinner type={LOADER_TYPE.SEAMLESS} />}

        {!isLoading && (
          <Context.Provider
            value={{
              currentChat,
              selectedChatId,
              setSelectedChatId,
              receivedIntents,
              setReceivedIntents,
              viewChatBox,
              setViewChatBox,
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
            {userPushSDKInstance && !userPushSDKInstance?.readmode() && (
              <ChatSidebarContainer
                flex="1"
                maxWidth="310px"
                minWidth="280px"
                padding="0px"
                boxSizing="border-box"
                background={theme.default.bg}
                chatActive={isUserChatting && userPushSDKInstance && !userPushSDKInstance?.readmode()}
                zIndex="0"
              >
                <ChatSidebarSection
                  key={userPushSDKInstance.uid}
                  showCreateGroupModal={showCreateGroupModal}
                  chatId={chatid}
                  selectedChatId={selectedChatId}
                  setSelectedChatId={setSelectedChatId}
                />
              </ChatSidebarContainer>
            )}

            <ChatContainer
              padding="10px 10px 10px 10px"
              chatActive={isUserChatting && userPushSDKInstance && !userPushSDKInstance?.readmode()}
              height="inherit"
            >
              <ChatSection
                chatId={chatid}
                setChatId={setSelectedChatId}
                loggedIn={userPushSDKInstance && !userPushSDKInstance?.readmode()}
              />
            </ChatContainer>

            <CreateGroupModalComponent
              InnerComponent={CreateGroupModalContent}
              toastObject={createGroupToast}
              modalPadding="0px"
              modalPosition={MODAL_POSITION.ON_PARENT}
            />

            {/* Video Call Section */}
            {videoCallData.incoming[0].status > 0 && <VideoCallSection />}

            {/* Very Important to not move this, this becomes push profile sign in in the future */}
            {displayQR && !isMobile && (
              <>
                <ChatQR
                  type={LOADER_TYPE.STANDALONE}
                  overlay={LOADER_OVERLAY.ONTOP}
                  blur={GLOBALS.ADJUSTMENTS.BLUR.DEFAULT}
                  width="75%"
                />
              </>
            )}

            {/* Very Important to not move this, this becomes push profile sign in in the future */}
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
        )}

        {/* This always needs to be last, is not required as login handled by the dapp */}
        {/* {blockedLoading.enabled && (
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
        )} */}
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
    height: calc(100dvh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.MOBILE.TOP} - ${
  globalsMargin.MINI_MODULES.MOBILE.BOTTOM
});
    border: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
`;

const ChatSidebarContainer = styled(ItemVV2)`
  @media ${device.tablet} {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-right: ${(props) => (props.chatActive ? '0%' : '100%')};
    opacity: ${(props) => (props.chatActive ? '1' : '0')};
    transition: margin-right 0.25s;
    max-width: initial;
    min-width: auto;
    z-index: 1;
  }
`;

const ChatContainer = styled(ItemVV2)`
  @media ${device.tablet} {
    position: absolute;
    background: ${(props) => props.theme.default.bg || 'transparent'};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: ${(props) => (props.chatActive ? '100%' : '0%')};
    transition: margin-left 0.25s;
    max-width: initial;
    min-width: auto;
    z-index: 2;
  }
`;

// Export Default
export default Chat;
