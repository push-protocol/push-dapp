// React + Web3 Essentials
import React, { useContext, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';

// External Packages
import ReactGA from 'react-ga';
import styled, { useTheme } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Internal Compoonents
import * as PushNodeClient from 'api';
import { AppContext, BlockedLoadingI, ConnectedUser, Feeds, User } from 'types/chat';
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import LoaderSpinner, {
  LOADER_OVERLAY,
  LOADER_SPINNER_TYPE,
  LOADER_TYPE,
  PROGRESS_POSITIONING,
} from 'components/reusables/loaders/LoaderSpinner';
import { VideoCallContext } from 'contexts/VideoCallContext';
import * as w2wHelper from 'helpers/w2w';
import ChatBoxSection from 'sections/chat/ChatBoxSection';
import ChatSidebarSection from 'sections/chat/ChatSidebarSection';
import VideoCallSection, { VideoCallInfoI } from 'sections/video/VideoCallSection';

// Internal Configs
import GLOBALS, { device, globalsMargin } from 'config/Globals';
import CryptoHelper from 'helpers/CryptoHelper';
import { ChatUserContext } from 'contexts/ChatUserContext';
import ChatQR from 'components/chat/w2wChat/chatQR/chatQR';
import { useClickAway } from 'react-use';
import { useDeviceWidthCheck } from 'hooks';
import MobileView from 'components/chat/w2wChat/chatQR/mobileView';


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
function Chat() {
  const { account, chainId, library } = useWeb3React<ethers.providers.Web3Provider>();

  const { getUser, connectedUser, setConnectedUser, blockedLoading, setBlockedLoading, displayQR, setDisplayQR } = useContext(ChatUserContext);

  const theme = useTheme();

  const [viewChatBox, setViewChatBox] = useState<boolean>(false);
  const [currentChat, setCurrentChat] = useState<Feeds>();
  const [receivedIntents, setReceivedIntents] = useState<Feeds[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  const [searchedUser, setSearchedUser] = useState<string>('');
  const [intents, setIntents] = useState<Feeds[]>([]);
  const [inbox, setInbox] = useState<Feeds[]>([]);
  const [pendingRequests, setPendingRequests] = useState<number>(0);
  const [hasUserBeenSearched, setHasUserBeenSearched] = useState<boolean>(false);
  const [activeTab, setCurrentTab] = useState<number>(0);
  const [userShouldBeSearched, setUserShouldBeSearched] = useState<boolean>(false);
  const isMobile = useDeviceWidthCheck(600);
  const queryClient = new QueryClient({});

  const containerRef = React.useRef(null);

  // For video calling
  const [videoCallInfo, setVideoCallInfo] = useState<VideoCallInfoI>({
    address: null,
    fromPublicKeyArmored: null,
    toPublicKeyArmored: null,
    privateKeyArmored: null,
    establishConnection: 0,
  });

  // React GA Analytics
  ReactGA.pageview('/chat');

  window.ethereum.on('accountsChanged', (account) => {
    window.location.reload();
  });
  window.ethereum.on('networksChanged', () => {
    window.location.reload();
  });

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

  // Rest of the loading logic
  useEffect(() => {
    if (isLoading) {
      setConnectedUser(connectedUser);
      connectUser();
    }
  }, [connectedUser]);

  const closeQRModal = () => {
    setDisplayQR(false);
  }
  useClickAway(containerRef, () => closeQRModal())

  const connectUser = async (): Promise<void> => {
    // Getting User Info
    setBlockedLoading({
      enabled: true,
      title: 'Step 1/4: Getting Account Info',
      progressEnabled: true,
      progress: 25,
      progressNotice: 'Reminder: Push Chat is in alpha, you might need to sign a decrypt transaction to continue',
    });

    if (!connectedUser) {
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
    }
  };

  const setChat = (feed: Feeds): void => {
    if (feed) {
      setViewChatBox(true);
      setCurrentChat(feed);
    } else {
      setViewChatBox(false);
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
                setSearchedUser,
                searchedUser,
                connectedUser,
                setConnectedUser,
                intents,
                setIntents,
                inbox,
                setInbox,
                pendingRequests,
                setPendingRequests,
                hasUserBeenSearched,
                setHasUserBeenSearched,
                loadingMessage,
                setLoadingMessage,
                setBlockedLoading,
                activeTab,
                setActiveTab,
                userShouldBeSearched,
                setUserShouldBeSearched,
              }}
            >
              <ChatSidebarContainer
                flex="1"
                maxWidth="310px"
                minWidth="280px"
                padding="10px 10px 10px 20px"
                boxSizing="content-box"
                background={theme.default.bg}
                chatActive={viewChatBox}
              >
                <ChatSidebarSection />
              </ChatSidebarContainer>
              <ChatContainer
                padding="10px 10px 10px 10px"
                chatActive={viewChatBox}
              >
                <ChatBoxSection setVideoCallInfo={setVideoCallInfo} />
              </ChatContainer>

              {(displayQR && !isMobile) && (
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

            {(displayQR && isMobile) && (
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
  height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.DESKTOP.TOP} - ${globalsMargin.MINI_MODULES.DESKTOP.BOTTOM
  });
  
  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.TABLET.TOP} - ${globalsMargin.MINI_MODULES.TABLET.BOTTOM
  });
  }

  @media ${device.mobileL} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.MOBILE.TOP} - ${globalsMargin.MINI_MODULES.MOBILE.BOTTOM
  });
    border: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
`;

const ChatSidebarContainer = styled(ItemVV2)`
  @media ${device.tablet} {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
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
    width: 100%;
    margin-left: ${(props) => (props.chatActive ? '0%' : '100%')};
    transition: margin-left 0.25s;
    max-width: initial;
    min-width: auto;
    z-index: 2;
  }
`;

// Export Default
export default Chat;
