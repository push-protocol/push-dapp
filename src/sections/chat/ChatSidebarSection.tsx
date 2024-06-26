// React + Web3 Essentials
import { useContext, useState, useRef } from 'react';

// External Packages
import { AiOutlineQrcode } from 'react-icons/ai';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import { ChatPreviewList, ChatPreviewSearchList, UserProfile } from '@pushprotocol/uiweb';
import BlankChat from 'assets/chat/BlankChat.svg?react';
import CreateGroupIcon from 'assets/chat/group-chat/creategroup.svg?react';
import CreateGroupFillIcon from 'assets/chat/group-chat/creategroupfill.svg?react';
import NewTag from 'components/NewTag';
import SearchBar from 'components/chat/w2wChat/searchBar/SearchBar';
import { ButtonV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import StyleHelper from 'helpers/StyleHelper';
import { getIsNewTagVisible } from 'helpers/TimerHelper';
import { Context } from 'modules/chat/ChatModule';

// Internal Configs
import GLOBALS, { device } from 'config/Globals';
import { GlobalContext } from 'contexts/GlobalContext';
import { useAccount } from 'hooks';
import { appConfig } from '../../config/index.js';
import RecommendedChatLists from 'config/RecommendedChatsList';

const createGroupOnMouseEnter = [
  {
    name: 'create-group-fill-icon',
    property: 'display',
    value: 'inline-block',
  },
  {
    name: 'create-group-icon',
    property: 'display',
    value: 'none',
  },
];

const createGroupOnMouseLeave = [
  {
    name: 'create-group-fill-icon',
    property: 'display',
    value: 'none',
  },
  {
    name: 'create-group-icon',
    property: 'display',
    value: 'inline-block',
  },
];

type loadingData = { loading: boolean; preload: boolean; paging: boolean; finished: boolean };

// Chat Sections
// Divided into two, left and right
const ChatSidebarSection = ({ showCreateGroupModal, chatId, selectedChatId, setSelectedChatId }) => {
  // theme context
  const theme = useTheme();

  const isNewTagVisible = getIsNewTagVisible(new Date('2023-02-22T00:00:00.000'), 90);

  // For searching user
  const [searchedUser, setSearchedUser] = useState<string>('');

  // For keeping active tab
  const { activeTab, setActiveTab } = useContext(Context);

  // For storing number of request chat count, -1 is uninitialized
  const [numberOfChatReqs, setNumberOfChatReqs] = useState<number>(-1);
  const [requestLoadingData, setRequestLoadingData] = useState<loadingData | null>(null);

  const containerRef = useRef(null);

  // Manage refresh and chats tab
  const [primaryChatLoading, setPrimaryChatLoading] = useState({
    showConvoPrompt: false,
    showRefreshPrompt: true,
    chatRenderKey: [...Array(24)].map(() => ((Math.random() * 36) | 0).toString(36)).join(''),
  });

  // const handleCreateGroup = async () => {
  //   if (!userPushSDKInstance.readmode()) {
  //     showCreateGroupModal();
  //   } else {
  //     if (userPushSDKInstance.account === readOnlyWallet) {
  //       handleConnectWallet();
  //     } else {
  //       if (userPushSDKInstance.signer === undefined) {
  //         await initializePushSDK();
  //         return null;
  //       }
  //     }
  //   }
  // };

  // RENDER
  return (
    <ItemVV2
      ref={containerRef}
      justifyContent="flex-start"
      width="100%"
    >
      {/* Header */}
      <ItemVV2
        justifyContent="flex-start"
        padding="20px 10px 0px 20px"
        width="100%"
        flex="0"
        zIndex="1"
      >
        {/* Render Chats and Requests */}
        {activeTab !== 3 && (
          <ItemVV2
            flex="initial"
            width="100%"
            padding="0px 0px 10px 0px"
            minHeight="72px"
          >
            <ItemHV2>
              {/* Set active and onCLick to customize tab */}
              <TabButton
                active={activeTab == 0 ? true : false}
                background="transparent"
                hoverBackground="transparent"
                color={theme.default.color}
                flex="1"
                zIndex="1"
                padding="10px 10px 20px 10px"
                onClick={() => {
                  setActiveTab(0);
                }}
              >
                <SpanV2
                  fontSize="16px"
                  fontWeight="400"
                  color={activeTab === 0 ? GLOBALS.COLORS.PRIMARY_PINK : 'inherit'}
                  minHeight="20px"
                >
                  Chats
                </SpanV2>
              </TabButton>

              <TabButton
                active={activeTab == 1 ? true : false}
                background="transparent"
                hoverBackground="transparent"
                color={theme.default.color}
                zIndex="1"
                flex="1"
                padding="10px 10px 20px 10px"
                onClick={() => {
                  setActiveTab(1);
                }}
              >
                <ItemHV2
                  alignItems="center"
                  // ref={containerRef}
                >
                  <SpanV2
                    flex="initial"
                    fontSize="16px"
                    fontWeight="400"
                    color={activeTab === 1 ? GLOBALS.COLORS.PRIMARY_PINK : 'inherit'}
                    margin="0px 4px"
                    minHeight="20px"
                  >
                    Requests
                  </SpanV2>
                  {numberOfChatReqs < 0 || requestLoadingData?.loading ? (
                    <LoaderSpinner
                      type={LOADER_TYPE.SEAMLESS}
                      width="auto"
                      spinnerSize={20}
                      spinnerColor={GLOBALS.COLORS.PRIMARY_PINK}
                    />
                  ) : numberOfChatReqs > 0 ? (
                    <SpanV2
                      background={GLOBALS.COLORS.PRIMARY_PINK}
                      color={GLOBALS.COLORS.WHITE}
                      padding="2px 8px"
                      margin="0px 4px"
                      fontSize="12px"
                      borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.SMALL}
                    >
                      {numberOfChatReqs}
                    </SpanV2>
                  ) : null}
                </ItemHV2>
              </TabButton>
            </ItemHV2>
          </ItemVV2>
        )}

        {/* Or Render Search or adding of dm / group */}
        {/* TODO: Add Proper Types */}
        {activeTab == 0 && (
          <SearchBar
            autofilled={undefined}
            searchedUser={searchedUser}
            setSearchedUser={setSearchedUser}
          />
        )}

        {/* TODO: Add Proper Types */}
        {activeTab == 3 && (
          <>
            <SearchBar
              autofilled={null}
              searchedUser={searchedUser}
              setSearchedUser={setSearchedUser}
            />

            {!searchedUser && (
              <CreateGroupContainer
                // justifyContent="flex-start"
                flex="none"
                padding="20px 10px 24px 10px"
                zIndex="1"
                borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.MID}
                onClick={() => {
                  showCreateGroupModal();
                }}
                background="transparent"
                hover={theme.chat.snapFocusBg}
                hoverBackground="transparent"
                onMouseEnter={() => StyleHelper.changeStyle(createGroupOnMouseEnter)}
                onMouseLeave={() => StyleHelper.changeStyle(createGroupOnMouseLeave)}
              >
                <CreateGroupIcon id="create-group-icon" />
                <CreateGroupFillIcon id="create-group-fill-icon" />
                <SpanV2
                  margin="0 8px"
                  fontSize="16px"
                  fontWeight="500"
                  letterSpacing="-0.019em"
                  color={theme.default.secondaryColor}
                >
                  Create Group
                </SpanV2>
                {isNewTagVisible && <NewTag />}
              </CreateGroupContainer>
            )}
          </>
        )}
      </ItemVV2>

      {/* Main Content */}
      <MainContent
        justifyContent="flex-start"
        alignItems="stretch"
      >
        {/* Set Chats */}
        <ItemVV2
          flexWrap="nowrap"
          width="100%"
          height="100%"
          flex="1 1 1px"
          style={{ display: activeTab == 0 ? 'flex' : 'none' }}
          overflow="hidden auto"
          justifyContent="center"
        >
          {/* Only show convo prompt if there are no chats */}
          {primaryChatLoading.showConvoPrompt && (
            <ItemVV2
              flex="initial"
              gap="10px"
            >
              <BlankChat />

              <ItemHV2>
                <SpanV2
                  fontSize="17px"
                  color={theme.default.color}
                  fontWeight="500"
                  lineHeight="150%"
                >
                  No conversations, yet.
                </SpanV2>
                <SpanV2
                  fontSize="15px"
                  color={theme.default.secondaryColor}
                  fontWeight="400"
                  lineHeight="130%"
                  padding="0px 25px 10px 25px"
                >
                  Get started by searching for an address or group name.
                </SpanV2>

                {/* // Only show refresh prompt if there are no chats */}
                {primaryChatLoading.showRefreshPrompt && (
                  <ButtonV2
                    flex="initial"
                    padding="8px 12px"
                    background="#D53A94"
                    color="#fff"
                    borderRadius="16px"
                    onClick={() => {
                      setPrimaryChatLoading({
                        ...primaryChatLoading,
                        showConvoPrompt: false,
                        chatRenderKey: [...Array(24)].map(() => ((Math.random() * 36) | 0).toString(36)).join(''),
                      });
                    }}
                  >
                    Refresh
                  </ButtonV2>
                )}
              </ItemHV2>
            </ItemVV2>
          )}

          {/* Show no conversations if no chats are loaded */}
          <ChatPreviewListOuter
            justifyContent="flex-start"
            style={{ display: primaryChatLoading.showConvoPrompt ? 'none' : 'flex' }}
            height="100%"
            overflow="hidden auto"
          >
            <ChatPreviewList
              key={primaryChatLoading.chatRenderKey}
              listType="CHATS"
              onChatSelected={(chatid) => setSelectedChatId(chatid)}
              onUnreadCountChange={(count) => {
                // console.debug('Count is: ', count);
              }}
              onLoading={(status) => {
                console.debug(
                  `src::sections::chat::ChatSidebarSection::onLoading::chats: loading ${new Date().toISOString()}`,
                  status
                );

                if (status.loading && !status.paging) {
                  setPrimaryChatLoading({ ...primaryChatLoading, showConvoPrompt: false });
                }
              }}
              onPreload={(chats) => {
                if (chats.length > 0) {
                  setPrimaryChatLoading({ ...primaryChatLoading, showConvoPrompt: false });
                } else if (chats.length === 0) {
                  setPrimaryChatLoading({ ...primaryChatLoading, showConvoPrompt: true });
                }
              }}
            />
          </ChatPreviewListOuter>
        </ItemVV2>

        {/* Set Requests */}
        <ChatPreviewListOuter
          justifyContent="flex-start"
          flexWrap="nowrap"
          width="100%"
          height="100%"
          overflow="hidden auto"
          style={{ display: activeTab == 1 ? 'flex' : 'none' }}
        >
          <ChatPreviewList
            listType="REQUESTS"
            onChatSelected={(chatid) => setSelectedChatId(chatid)}
            onUnreadCountChange={(count) => {
              // if we want to tap all unread messages
            }}
            onChatsCountChange={(count) => {
              console.debug('src::sections::chat::ChatSidebarSection::onChatsCountChage::requests: count is: ', count);
              // remove request badge update when chatId is Push Bot or actively opened
              if (chatId == RecommendedChatLists[0]?.payload?.chatId || chatId?.split('chatid:')[1] == selectedChatId) {
                setNumberOfChatReqs(null);
              } else {
                setNumberOfChatReqs(count);
              }
            }}
            onLoading={(loadingData) => {
              console.debug(
                `src::sections::chat::ChatSidebarSection::onLoading::requests: loading ${new Date().toISOString()}`,
                loadingData
              );
              setRequestLoadingData(loadingData);
            }}
          />
        </ChatPreviewListOuter>

        {/* Set Search */}
        {searchedUser && activeTab == 3 && (
          <ChatPreviewListOuter
            justifyContent="flex-start"
            flexWrap="nowrap"
            width="100%"
            overflow="hidden auto"
            style={{ display: activeTab == 3 ? 'flex' : 'none' }}
          >
            <ChatPreviewSearchList
              searchParamter={searchedUser || ''}
              onChatSelected={(chatid) => setSelectedChatId(chatid)}
            />
          </ChatPreviewListOuter>
        )}
      </MainContent>

      {/* Footer */}
      <ProfileContainer
        padding="0px 0px 0px 10px"
        zIndex="1"
        borderTop={`1px solid ${theme.default.secondaryBg}`}
      >
        <UserProfile
          onUserProfileUpdateModalOpen={(open: boolean) => {
            console.log(
              'src::sections::chat::ChatSidebarSection::onUserProfileUpdateModalOpen::profile: open is: ',
              open
            );
          }}
          // onUserProfileUpdate={(profile: any) => {
          //   console.log('src::sections::chat::ChatSidebarSection::onUserProfileUpdate::profile: profile is: ', profile);
          // }}
        />
      </ProfileContainer>
    </ItemVV2>
  );
};
export default ChatSidebarSection;

const TabButton = styled(ButtonV2)`
  border-bottom: 2px solid ${(props) => (props.active ? GLOBALS.COLORS.PRIMARY_PINK : props.theme.default.secondaryBg)};
  overflow: hidden;
  height: 52px;
  pointer: hand;
`;

const ProfileContainer = styled(ItemHV2)`
  flex: initial;
  justify-content: space-between;
  // padding: 14px 10px 0px 10px;
  border-top: ${(props) => props.borderTop};
`;

const QRCodeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 9px;
  width: 200px;
  z-index: 100;
  height: 48px;
  background: #ffffff;
  border: 1px solid #bac4d6;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  cursor: pointer;
  position: absolute;
  z-index: 100;
  bottom: 45px;

  @media (max-width: 768px) {
    right: 30px;
  }

  @media (min-width: 768px) {
    left: 85px;
  }
`;

const QROutline = styled(AiOutlineQrcode)`
  width: 35px;
  height: 30px;
`;

const TextQR = styled.p`
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  // color: #657795;
`;

const CreateGroupContainer = styled(ButtonV2)`
  flex-direction: row;
  align-self: stretch;
  justify-content: flex-start;
`;

const MainContent = styled(ItemVV2)`
  width: 100%;
  padding: 0px 0px 0px 10px;
  margin: 0px 0px 0px 10px;
  flex: 1;

  @media ${device.tablet} {
    margin: 0px;
  }
`;

// Target first div to change style
const ChatPreviewListOuter = styled(ItemVV2)`
  > div:first-child {
    padding-right: 20px;
  }
`;
