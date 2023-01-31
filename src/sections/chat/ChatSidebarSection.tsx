// React + Web3 Essentials
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';
import Box from '@mui/material/Box';
import MuiTab from '@mui/material/Tab';
import MuiTabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

// Internal Compoonents
import IntentFeed from 'components/chat/w2wChat/intentFeed/IntentFeed';
import ProfileHeader from 'components/chat/w2wChat/profile';
import Profile from 'components/chat/w2wChat/ProfileSection/Profile';
import SearchBar from 'components/chat/w2wChat/searchBar/SearchBar';
import { checkConnectedUser } from 'helpers/w2w/user';
import { Feeds } from 'types/chat';
import { intitializeDb } from 'components/chat/w2wChat/w2wIndexeddb';
import { fetchIntent } from 'helpers/w2w/ipfs';
import { ButtonV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import * as w2wHelper from 'helpers/w2w/';
import { Context } from 'modules/chat/ChatModule';

// Internal Configs
import GLOBALS from 'config/Globals';
import { ChatUserContext } from 'contexts/ChatUserContext';
import { AiOutlineQrcode } from 'react-icons/ai';
import { useClickAway } from 'react-use';



// Chat Sections
// Divided into two, left and right
const ChatSidebarSection = () => {
  // theme context
  const theme = useTheme();

  const {  pendingRequests, setPendingRequests, receivedIntents, setReceivedIntents } = useContext(Context);

  const {connectedUser, displayQR, setDisplayQR} = useContext(ChatUserContext);

  const { activeTab, setActiveTab } = useContext(Context);
  const [updateProfileImage, setUserProfileImage] = useState(connectedUser.profilePicture);

  const { chainId, account } = useWeb3React<Web3Provider>();
  const [loadingRequests, setLoadingRequests] = useState(true);
  const [showQR, setShowQR] = useState<boolean>(false);
  const containerRef = React.useRef(null);

  const updateProfile = (image: string) => {
    setUserProfileImage(image);
  };

  // See if there are pending requests and update requests tab and intent feed box
  useEffect(() => {
    // This will run when the page first loads
    resolveThreadhash();
  }, []);

  const closeQRDropdown = ()=>{
    setShowQR(false);
}
useClickAway(containerRef, () => closeQRDropdown())

  async function resolveThreadhash(): Promise<void> {
    let getIntent;
    if (checkConnectedUser(connectedUser)) {
      getIntent = await intitializeDb<string>('Read', 'Intent', w2wHelper.walletToCAIP10({ account, chainId }), '', 'did');
    }
    if (getIntent!== undefined) {
      let intents: Feeds[] = getIntent.body;
      intents = await w2wHelper.decryptFeeds({ feeds: intents, connectedUser });
      setPendingRequests(intents?.length);
      setReceivedIntents(intents);
      setLoadingRequests(false);
    } else {
      await fetchIntentApi();
    }
  }

  const fetchIntentApi = async (): Promise<Feeds[]> => {
    // If the user is not registered in the protocol yet, his did will be his wallet address
    const didOrWallet: string = connectedUser.wallets.split(',')[0];
    let intents = await fetchIntent({ userId: didOrWallet, intentStatus: 'Pending' });
    await intitializeDb<Feeds[]>('Insert', 'Intent', w2wHelper.walletToCAIP10({ account, chainId }),intents, 'did');
    intents = await w2wHelper.decryptFeeds({ feeds: intents, connectedUser });
    if(JSON.stringify(intents) != JSON.stringify(receivedIntents)) {
      setPendingRequests(intents?.length);
      setReceivedIntents(intents);
    }
    setLoadingRequests(false);
    return intents;
  };

  // Keep on updating after every few seconds
  useEffect(() => {
    if (!loadingRequests) {
      //setup timer
      const delay = 5;
      let timer = setInterval(() => fetchIntentApi(), delay * 1000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer);
      };
    }
  }, [loadingRequests]);

  // RENDER
  return (
    <ItemVV2 ref={containerRef}>
      {/* Header */}
      {activeTab == 0 || activeTab == 1 ? (
        <ItemVV2 flex="initial" ref={containerRef}>
          <ItemHV2 ref={containerRef}>
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
              <ItemHV2 alignItems="center" ref={containerRef}>
                <SpanV2
                  flex="initial"
                  fontSize="16px"
                  fontWeight="400"
                  color={activeTab === 1 ? GLOBALS.COLORS.PRIMARY_PINK : 'inherit'}
                  margin="0px 4px"
                >
                  Requests
                </SpanV2>

                {/* {loadingRequests && (
                  <LoaderSpinner
                    type={LOADER_TYPE.SEAMLESS}
                    spinnerSize={12}
                    spinnerColor={theme.default.secondaryColor}
                  />
                )} */}

                {!loadingRequests && pendingRequests > 0 && (
                  <SpanV2
                    background={GLOBALS.COLORS.PRIMARY_PINK}
                    color={GLOBALS.COLORS.WHITE}
                    padding="2px 8px"
                    margin="0px 4px"
                    fontSize="12px"
                    borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.SMALL}

                  >
                    {pendingRequests}
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
        onClick={()=>setShowQR(false)}
      >
        {activeTab == 0 && <SearchBar />}
        {activeTab == 1 && (
          <>
            <SpanV2
              fontWeight="700"
              fontSize="12px"
              textAlign="start"
              margin="10px 0 0 0"
              color={theme.default.secondaryColor}
              // ref={containerRef}
            >
              REQUESTS
            </SpanV2>
            <IntentFeed isLoading={loadingRequests} />
          </>
        )}
        {activeTab == 2 && (
          <>
            <Profile
              profilePicture={updateProfileImage}
              updateProfile={updateProfile}
              setActiveTab={setActiveTab}
            />
          </>
        )}
        {activeTab == 3 && <SearchBar/>}
      </ItemVV2>

      {/* Footer */}

      {showQR ? (
        <QRCodeContainer 
        onClick={()=>setDisplayQR(!displayQR)}
        style={{
          background:theme.default.bg,
          borderColor: theme.LinkMobileAppBorder,
          // color:theme.chat.sendMessageFontColor
          color:theme.textcolor
        }}
        >
          <QROutline />
          <TextQR >Link Mobile App</TextQR>
        </QRCodeContainer>
      ) : null}

      <ItemVV2 flex="initial">
        <ItemVV2
          position="absolute"
          top="0"
          left="0"
          right="0"
          height="1px"
          background={theme.default.secondaryBg}
        ></ItemVV2>
        <ItemHV2
          justifyContent="space-between"
          margin="15px 0px 5px 0px"
          padding="0px 10px"
          
        >
          <ProfileHeader setActiveTab={setActiveTab} setShowQR={setShowQR} showQR={showQR} />
        </ItemHV2>
      </ItemVV2>
    </ItemVV2>
  );
};
export default ChatSidebarSection;

const TabButton = styled(ButtonV2)`
  border-bottom: 2px solid ${(props) => (props.active ? GLOBALS.COLORS.PRIMARY_PINK : props.theme.default.secondaryBg)};
  pointer: hand;
`;

const Badge = styled.div`
  box-sizing: border-box;
  width: 30px;
  height: 23px;
  background: #cf1c84;
  color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

const DisplayText = styled(Typography)`
  && {
    color: ${(props): string => props.color || '#000000'};
    font-size: ${(props): string => props.size || '14px'};
    font-weight: ${(props): string => props.weight || '500'};
  }
`;

const TabContainer = styled(Box)`
  && {
    width: 100%;
    border-bottom: 2px;
    border-color: divider;
    display: flex;
    justify-content: center;
  }
`;

const Tabs = styled(MuiTabs)`
  text-transform: unset;
`;

const Tab = styled(MuiTab)`
  && {
    text-transform: unset;
    width: 150px;
    font-size: 16px;
    color: #000000;
  }
`;

const QRCodeContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 8px;
gap: 9px;
width: 200px;
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