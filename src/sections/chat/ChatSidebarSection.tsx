// React + Web3 Essentials
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import { AiOutlineQrcode } from 'react-icons/ai';
import { useClickAway } from 'react-use';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import * as PushAPI from "@pushprotocol/restapi";
import { ReactComponent as CreateGroupIcon } from 'assets/chat/group-chat/creategroup.svg';
import { ReactComponent as CreateGroupFillIcon } from 'assets/chat/group-chat/creategroupfill.svg';
import IntentFeed from 'components/chat/w2wChat/intentFeed/IntentFeed';
import MessageFeed from 'components/chat/w2wChat/messageFeed/MessageFeed';
import ProfileHeader from 'components/chat/w2wChat/profile';
import SearchBar from 'components/chat/w2wChat/searchBar/SearchBar';
import { fetchIntent } from 'helpers/w2w/user';

import { intitializeDb } from 'components/chat/w2wChat/w2wIndexeddb';
import { ButtonV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { ChatUserContext } from 'contexts/ChatUserContext';
import StyleHelper from 'helpers/StyleHelper';
import { getIsNewTagVisible } from 'helpers/TimerHelper';
import * as w2wHelper from 'helpers/w2w/';
import { checkConnectedUser } from 'helpers/w2w/user';
import { Context } from 'modules/chat/ChatModule';
import { Feeds } from 'types/chat';


// Internal Configs
import NewTag from 'components/NewTag';
import GLOBALS from 'config/Globals';
import { appConfig } from '../../config';




const createGroupOnMouseEnter = [{
  name: 'create-group-fill-icon',
  property: 'display',
  value: 'inline-block'
},
{
  name: 'create-group-icon',
  property: 'display',
  value: 'none'
},
];

const createGroupOnMouseLeave = [{
  name: 'create-group-fill-icon',
  property: 'display',
  value: 'none'
},
{
  name: 'create-group-icon',
  property: 'display',
  value: 'inline-block'
},
];


// Chat Sections
// Divided into two, left and right
const ChatSidebarSection = ({ showCreateGroupModal, autofilledSearch }) => {
  // theme context
  const theme = useTheme();

  const { receivedIntents, setReceivedIntents, filteredUserData } = useContext(Context);

  const isNewTagVisible = getIsNewTagVisible(new Date("2023-02-22T00:00:00.000"), 90);

  const { connectedUser, displayQR, setDisplayQR } = useContext(ChatUserContext);

  const { activeTab, setActiveTab } = useContext(Context);
  const [updateProfileImage, setUserProfileImage] = useState(connectedUser?.profilePicture);

  const { chainId, account } = useWeb3React<Web3Provider>();
  const [loadingRequests, setLoadingRequests] = useState(true);
  const [showQR, setShowQR] = useState<boolean>(false);
  const containerRef = React.useRef(null);

  const updateProfile = (image: string) => {
    setUserProfileImage(image);
  };

  const getRequests = async (): Promise<void> => {
    await resolveThreadhash();
    fetchIntentApi();
  };
  useEffect(() => {
    // This will run when the page first loads
    getRequests();
  }, []);

  const closeQRDropdown = () => {
    setShowQR(false);
  }
  useClickAway(containerRef, () => closeQRDropdown())

  async function resolveThreadhash(): Promise<void> {
    let getIntent;
    getIntent = await intitializeDb<string>('Read', 'Intent', w2wHelper.walletToCAIP10({ account }), '', 'did');

    if (getIntent !== undefined && !receivedIntents.length) {

      let intents: Feeds[] = getIntent.body;
      intents = await w2wHelper.decryptFeeds({ feeds: intents, connectedUser });
      setReceivedIntents(intents);
      setLoadingRequests(false);
    }
    setLoadingRequests(false);
  }
  const fetchIntentApi = async (): Promise<Feeds[]> => {
    const intents = await fetchIntent(connectedUser);
    if (JSON.stringify(intents) != JSON.stringify(receivedIntents)) {
      setReceivedIntents(intents);
      setLoadingRequests(false);
    }
    setLoadingRequests(false);
    return intents;
  };



  // RENDER
  return (
    <ItemVV2 ref={containerRef} >
      {/* Header */}
      {activeTab == 0 || activeTab == 1 ? (
        <ItemVV2
          flex="initial"
        >
          <ItemHV2 >
            {/* Set active and onCLick to customize tab */}
            <TabButton
              active={activeTab == 0 ? true : false}
              background="transparent"
              hoverBackground="transparent"
              color={theme.default.color}
              flex="1"
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
                >
                  Requests
                </SpanV2>
                {!loadingRequests && receivedIntents.length > 0 && (
                  <SpanV2
                    background={GLOBALS.COLORS.PRIMARY_PINK}
                    color={GLOBALS.COLORS.WHITE}
                    padding="2px 8px"
                    margin="0px 4px"
                    fontSize="12px"
                    borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.SMALL}
                  >
                    {receivedIntents.length}
                  </SpanV2>
                )}
              </ItemHV2>
            </TabButton>
          </ItemHV2>
        </ItemVV2>
      ) : null}

      {/* Main Content */}
      <ItemVV2
        justifyContent="flex-start"
        alignItems="stretch"
        // ref={containerRef}
        onClick={closeQRDropdown}
      >
        {activeTab == 0 && <SearchBar />}
        {activeTab == 0 && filteredUserData.length == 0 && (
          <CreateGroupContainer
            // justifyContent="flex-start"
            flex="none"
            padding="20px 10px 24px 10px"
            borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.MID}
            onClick={() => showCreateGroupModal()}
            background="transparent"
            hover={theme.chat.snapFocusBg}
            hoverBackground="transparent"
            onMouseEnter={() =>
              StyleHelper.changeStyle(createGroupOnMouseEnter)
            }
            onMouseLeave={() =>
              StyleHelper.changeStyle(createGroupOnMouseLeave)
            }
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

        {activeTab == 0 && filteredUserData.length == 0 && (
          <MessageFeed
            hasUserBeenSearched={false}
            filteredUserData={[]}
            isInvalidAddress={false}
            automatedSearch={false}
          />

        )}
        {activeTab == 1 && (
          <>
            <IntentFeed isLoading={loadingRequests} />
          </>
        )}
        {activeTab == 3 && <SearchBar autofilled={null} />}
        {activeTab == 4 && <SearchBar autofilled={autofilledSearch} />}
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
          <TextQR >Link Mobile App</TextQR>
        </QRCodeContainer>
      ) : null}

      <ProfileContainer borderTop={`1px solid ${theme.default.secondaryBg}`}>
        <ProfileHeader
          setActiveTab={setActiveTab}
          setShowQR={setShowQR}
          showQR={showQR}
        />
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
   margin: 15px 0px 5px 0px;
   padding: 14px 10px 0px 10px;
   border-top: ${props => props.borderTop};
`;

const QRCodeContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 8px;
gap: 9px;
width: 200px;
z-index:100;
height: 48px;
background: #FFFFFF;
border: 1px solid #BAC4D6;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
border-radius: 12px;
cursor:pointer;
position: absolute;
z-index: 100;
bottom: 45px;

@media (max-width:768px){
right:30px;
}

@media(min-width:768px){
  left:85px;
}

`;

const QROutline = styled(AiOutlineQrcode)`
width: 35px;
height: 30px;
`

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
  justify-content:flex-start
`;
