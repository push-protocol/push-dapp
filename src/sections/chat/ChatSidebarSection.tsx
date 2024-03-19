// React + Web3 Essentials
import { Web3Provider } from '@ethersproject/providers';
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import { ethers } from 'ethers';
import { AiOutlineQrcode } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useClickAway } from 'react-use';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import { ChatPreview, ChatPreviewList, UserProfile } from '@pushprotocol/uiweb';
import { ReactComponent as CreateGroupIcon } from 'assets/chat/group-chat/creategroup.svg';
import { ReactComponent as CreateGroupFillIcon } from 'assets/chat/group-chat/creategroupfill.svg';
import NewTag from 'components/NewTag';
import Recommended from 'components/chat/recommended/Recommended';
import ProfileHeader from 'components/chat/w2wChat/profile';
import SearchBar from 'components/chat/w2wChat/searchBar/SearchBar';
import { ButtonV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { AppContext } from 'contexts/AppContext';
import StyleHelper from 'helpers/StyleHelper';
import { getIsNewTagVisible } from 'helpers/TimerHelper';
import { caip10ToWallet, reformatChatId } from 'helpers/w2w';
import { fetchIntent } from 'helpers/w2w/user';
import { Context } from 'modules/chat/ChatModule';
import { Feeds } from 'types/chat';

// Internal Configs
import GLOBALS from 'config/Globals';
import { GlobalContext } from 'contexts/GlobalContext';
import { useAccount } from 'hooks';
import { appConfig } from '../../config';

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
const ChatSidebarSection = ({ showCreateGroupModal, autofilledSearch, triggerChatParticipant }) => {
  // theme context
  const theme = useTheme();
  const { wallet } = useAccount();

  const { readOnlyWallet } = useContext(GlobalContext);
  const { setSelectedChatId } = useContext(Context);
  const { setMode } = useContext(GlobalContext);

  const isNewTagVisible = getIsNewTagVisible(new Date('2023-02-22T00:00:00.000'), 90);

  const { connectedUser, displayQR, setDisplayQR, initializePushSDK, handleConnectWallet, connectWallet } =
    useContext(AppContext);
  const [searchedUser, setSearchedUser] = useState<string>('');

  const { activeTab, setActiveTab } = useContext(Context);
  const [requestChatList, setRequestChatList] = useState<ChatPreviewList>([]);
  const [requestLoadingData, setRequestLoadingData] = useState<loadingData>();

  const [loadingRequests, setLoadingRequests] = useState(true);
  const [showQR, setShowQR] = useState<boolean>(false);
  const containerRef = React.useRef(null);

  // set recommended chats
  const [showRecommended, setShowRecommended] = useState(false);

  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });

  const closeQRDropdown = () => {
    setShowQR(false);
  };
  useClickAway(containerRef, () => closeQRDropdown());

  let navigate = useNavigate();

  const handleCreateGroup = async () => {
    if (!userPushSDKInstance.readmode()) {
      showCreateGroupModal();
    } else {
      if (userPushSDKInstance.account === readOnlyWallet) {
        handleConnectWallet();
      } else {
        if (userPushSDKInstance.signer === undefined) {
          await initializePushSDK();
          return null;
        }
      }
    }
  };

  // RENDER
  return (
    <ItemVV2
      ref={containerRef}
      justifyContent="flex-start"
      width="100%"
    >
      {/* Header */}
      {activeTab !== 3 && activeTab !== 4 && (
        <ItemVV2
          flex="initial"
          width="100%"
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
              padding="10px 10px 8px 10px"
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
                >
                  Requests
                </SpanV2>
                {requestLoadingData && requestLoadingData?.loading && (
                  <LoaderSpinner
                    type={LOADER_TYPE.SEAMLESS}
                    width="auto"
                    spinnerSize={20}
                    spinnerColor={GLOBALS.COLORS.PRIMARY_PINK}
                  />
                )}

                {requestLoadingData && !requestLoadingData?.loading && requestChatList.length > 0 && (
                  <SpanV2
                    background={GLOBALS.COLORS.PRIMARY_PINK}
                    color={GLOBALS.COLORS.WHITE}
                    padding="2px 8px"
                    margin="0px 4px"
                    fontSize="12px"
                    borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.SMALL}
                  >
                    {requestChatList.length}
                  </SpanV2>
                )}
              </ItemHV2>
            </TabButton>
          </ItemHV2>
        </ItemVV2>
      )}

      {/* Main Content */}
      <ItemVV2
        justifyContent="flex-start"
        alignItems="stretch"
        // ref={containerRef}
        onClick={closeQRDropdown}
        width="100%"
      >
        {activeTab == 0 && (
          <SearchBar
            autofilled={undefined}
            searchedUser={searchedUser}
            setSearchedUser={setSearchedUser}
          />
        )}

        {/* Set Chats */}
        <ItemVV2
          justifyContent="flex-start"
          flexWrap="nowrap"
          width="100%"
          height="100%"
          flex="1 1 1px"
          style={{ display: activeTab == 0 ? 'flex' : 'none' }}
          overflow="scroll"
        >
          {/* Only show recommended chats if there are no chats */}
          {showRecommended && (
            <Recommended
              bg="#f5f5f5"
              onChatSelected={async (chatid, chatParticipant) => {
                setSelectedChatId(await triggerChatParticipant(chatParticipant, chatid));
              }}
            />
          )}

          {/* Only show recommended chats if there are no chats */}
          {!showRecommended && (
            <ChatPreviewList
              listType="CHATS"
              onChatSelected={async (chatid, chatParticipant) => {
                setSelectedChatId(await triggerChatParticipant(chatParticipant, chatid));
              }}
              onUnreadCountChange={(count) => {
                // console.log('Count is: ', count);
              }}
              onPreload={(chats) => {
                if (chats.length == 0) {
                  setShowRecommended(true);
                }
              }}
            />
          )}
        </ItemVV2>

        {/* Set Requests */}
        <ItemVV2
          justifyContent="flex-start"
          flexWrap="nowrap"
          width="100%"
          height="100%"
          style={{ display: activeTab == 1 ? 'flex' : 'none' }}
        >
          <ChatPreviewList
            listType="REQUESTS"
            onChatSelected={async (chatid, chatParticipant) => {
              setSelectedChatId(await triggerChatParticipant(chatParticipant, chatid));
            }}
            onUnreadCountChange={(count) => {
              // console.log('Count is: ', count);
            }}
            onLoading={(loadingData) => setRequestLoadingData(loadingData)}
            onPaging={(chats) => setRequestChatList(chats)}
            onPreload={(chats) => setRequestChatList(chats)}
          />
        </ItemVV2>

        {activeTab == 3 && (
          <SearchBar
            autofilled={null}
            searchedUser={searchedUser}
            setSearchedUser={setSearchedUser}
          />
        )}
        {activeTab == 4 && (
          <SearchBar
            autofilled={autofilledSearch}
            searchedUser={searchedUser}
            setSearchedUser={setSearchedUser}
          />
        )}
        {/* Set Search */}
        {searchedUser && (activeTab === 3 || activeTab === 4) && (
          <ItemVV2
            justifyContent="flex-start"
            flexWrap="nowrap"
            width="100%"
            style={{ display: activeTab == 3 || activeTab == 4 ? 'flex' : 'none' }}
          >
            <ChatPreviewList
              listType="SEARCH"
              searchParamter={searchedUser || ''}
              onChatSelected={async (chatid, chatParticipant) =>
                setSelectedChatId(await triggerChatParticipant(chatParticipant, chatid))
              }
              onUnreadCountChange={(count) => {
                // console.log('Count is: ', count);
              }}
            />
          </ItemVV2>
        )}
        {activeTab == 3 && (
          <CreateGroupContainer
            // justifyContent="flex-start"
            flex="none"
            padding="20px 10px 24px 10px"
            zIndex="1"
            borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.MID}
            onClick={handleCreateGroup}
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
      </ItemVV2>

      {/* Footer */}
      {showQR ? (
        <QRCodeContainer
          onClick={() => setDisplayQR(!displayQR)}
          style={{
            background: theme.default.bg,
            borderColor: theme.LinkMobileAppBorder,
            // color:theme.chat.sendMessageFontColor
            color: theme.textcolor,
          }}
        >
          <QROutline />
          <TextQR>Link Mobile App</TextQR>
        </QRCodeContainer>
      ) : null}

      <ProfileContainer
        zIndex="1"
        borderTop={`1px solid ${theme.default.secondaryBg}`}
      >
        {/* <ProfileHeader
          setActiveTab={setActiveTab}
          setShowQR={setShowQR}
          showQR={showQR}
        /> */}
        <UserProfile />
      </ProfileContainer>
    </ItemVV2>
  );
};
export default ChatSidebarSection;

const TabButton = styled(ButtonV2)`
  border-bottom: 2px solid ${(props) => (props.active ? GLOBALS.COLORS.PRIMARY_PINK : props.theme.default.secondaryBg)};
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
  font-family: 'Strawford';
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
