// React + Web3 Essentials
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// External Packages
import { useSelector } from 'react-redux';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import { ChatView, MODAL_POSITION_TYPE } from '@pushprotocol/uiweb';
import UnlockProfile, { UNLOCK_PROFILE_TYPE } from 'components/chat/unlockProfile/UnlockProfile';
import Welcome from 'components/chat/welcome/Welcome';
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import useMediaQuery from 'hooks/useMediaQuery';

// Internal Configs
import { device } from 'config/Globals';

// Assets
import Back from 'assets/chat/backchat.svg?react';
import UnlockProfileWrapper from 'components/chat/unlockProfile/UnlockProfileWrapper';
import { MODAL_POSITION } from 'hooks/useModalBlur';

// Interface
interface IntroContainerProps {
  bg?: string;
  sidelined?: boolean;
}

// Constants

// Chat Sections
const ChatSection = ({ chatId, setChatId, loggedIn }) => {
  // Setup Navigation
  const navigate = useNavigate();

  // Get Push SDK Instance
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });

  // Get Theme
  const theme = useTheme();

  // Use the useMediaQuery hook at the top level of the component
  const isTablet = useMediaQuery(device.tablet);

  // State to control the visibility of the unlock profile modal
  const [visible, setVisible] = useState(true);

  // RENDER
  return (
    // If user is not logged in then show chat and unlock profile
    <ItemVV2
      alignItems="stretch"
      alignSelf="stretch"
      height="100%"
      width="100%"
    >
      {/* If user is not logged in then show chat with welcome message else only show chat or welcome message */}
      <ItemHV2
        alignItems="stretch"
        alignSelf="stretch"
        height="100%"
        width="100%"
      >
        {chatId && (
          // Force redraw of chat view when chatId changes
          <ChatViewContainer key={chatId}>
            <ChatView
              chatId={chatId} // 694c523ca30090225b73b7d04941f48a51312bedbe0fa11136e7f3af3687b277
              limit={10}
              isConnected={false}
              handleReply={true}
              autoConnect={false}
              messageInput={loggedIn ? true : false}
              verificationFailModalPosition={MODAL_POSITION_TYPE.RELATIVE}
              chatProfileLeftHelperComponent={
                isTablet ? (
                  <BackContainer
                    flex="initial"
                    alignItems="flex-start"
                    padding="0px"
                  >
                    <Back
                      onClick={() => {
                        navigate(`/chat`);
                      }}
                    />
                  </BackContainer>
                ) : null
              }
            />

            {/* Render unlock profile here if user is not logged in and chat instance is loaded */}
            {userPushSDKInstance && userPushSDKInstance?.readmode() && chatId && (
              <UnlockProfileWrapper
                type={UNLOCK_PROFILE_TYPE.MODAL}
                showConnectModal={visible}
                onClose={() => setVisible(false)}
                modalType="container"
                description="Unlock your profile to proceed."
              />
            )}
          </ChatViewContainer>
        )}

        {/* Show Intro with Recommended Chats */}
        {((userPushSDKInstance && userPushSDKInstance?.readmode()) || !chatId) && (
          <IntroContainer
            bg={chatId ? 'transparent' : theme.chat.chatBg}
            sidelined={chatId ? true : false}
          >
            <Welcome
              recommendedBg={theme.chat.modulesBg}
              onChatSelected={(chatId) => {
                setChatId(chatId);
              }}
            />

            {/* Render unlock profile here if user is not logged in and chat isntance is not loaded */}
            {userPushSDKInstance && userPushSDKInstance?.readmode() && !chatId && (
              <UnlockProfileWrapper type={UNLOCK_PROFILE_TYPE.BOTTOM_BAR} />
            )}
          </IntroContainer>
        )}
      </ItemHV2>
    </ItemVV2>
  );
};
export default ChatSection;

const ChatViewContainer = styled(ItemVV2)`
  flex: 4;
  height: inherit;
  max-width: 100%;
  width: auto;
  overflow: hidden;
`;

const IntroContainer = styled(ItemVV2) <IntroContainerProps>`
  flex: 1;
  height: inherit;
  background: ${(props) => props.bg || 'transparent'};
  border-radius: 24px;
  width: 100%;

  @media ${device.laptopL} {
    display: ${(props) => (props.sidelined ? 'none' : 'flex')};
  }
`;

const BackContainer = styled(ItemVV2)`
  display: none;

  @media ${device.tablet} {
    width: 25px;
    display: flex;
  }
`;
