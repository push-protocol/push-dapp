// React + Web3 Essentials
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import React, { useEffect, useState } from 'react';

// External Packages
import { useDispatch , useSelector} from 'react-redux';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import Box from '@mui/material/Box';
import MuiTab from '@mui/material/Tab';
import MuiTabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { setReceivedIntents } from 'redux/slices/chatSlice';
import IntentFeed from 'components/chat/w2wChat/intentFeed/IntentFeed';
import NewUser from 'components/chat/w2wChat/newusers/NewUser';
import ProfileHeader from 'components/chat/w2wChat/profile';
// import Profile from 'components/chat/w2wChat/ProfileSection/Profile';
import SearchBar from 'components/chat/w2wChat/searchBar/SearchBar';
import { setPendingRequests } from 'redux/slices/chatSlice';
import { checkConnectedUser } from 'helpers/w2w/user';
import { setActiveTab } from 'redux/slices/chatSlice';
import { Feeds } from 'api';
import { intitializeDb } from 'components/chat/w2wChat/w2wIndexeddb';
import { fetchIntent } from 'helpers/w2w/ipfs';
import { ButtonV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import * as w2wHelper from 'helpers/w2w/';

// Internal Configs
import GLOBALS from 'config/Globals';


// Chat Sections
// Divided into two, left and right
const ChatSidebarSection = () => {
  // theme context
  const theme = useTheme();
  // redux variables
  const { pendingRequests, connectedUser, receivedIntents,activeTab } = useSelector((state:any) => state.chat);
  
  const dispatch = useDispatch();

  const [updateProfileImage, setUserProfileImage] = useState(connectedUser.profilePicture);

  const { chainId, account } = useWeb3React<Web3Provider>();
  const [loadingRequests, setLoadingRequests] = useState(true);

   

  // const updateProfile = (image: string) => {
  //   setUserProfileImage(image);
  // };
    
  // See if there are pending requests and update requests tab and intent feed box
  useEffect(() => {
    // This will run when the page first loads
    resolveThreadhash();
  }, []);

  async function resolveThreadhash(): Promise<void> {
    let getIntent;
    if (checkConnectedUser(connectedUser)) {
      getIntent = await intitializeDb<string>('Read', 'Intent', w2wHelper.walletToCAIP10({ account, chainId }), '', 'did');
    }
    if (getIntent!== undefined) {
      let intents: Feeds[] = getIntent.body;
      intents = await w2wHelper.decryptFeeds({ feeds: intents, connectedUser });
      dispatch(setPendingRequests(intents?.length));
      dispatch(setReceivedIntents(intents));
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
      dispatch(setPendingRequests(intents?.length));
      dispatch(setReceivedIntents(intents));
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
    <ItemVV2>
      {/* Header */}
      {activeTab == 0 || activeTab == 1 ? (
        <ItemVV2 flex="initial">
          <ItemHV2>
            {/* Set active and onCLick to customize tab */}
            <TabButton
              active={activeTab == 0 ? true : false}
              background="transparent"
              hoverBackground="transparent"
              color={theme.default.color}
              flex="1"
              padding="10px 10px 20px 10px"
              onClick={() => {
                dispatch(setActiveTab(0));
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
                dispatch(setActiveTab(1));
              }}
            >
              <ItemHV2 alignItems="center">
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
            >
              REQUESTS
            </SpanV2>
            <IntentFeed isLoading={loadingRequests} />
          </>
        )}
        {/* {activeTab == 2 && (
          <>
            <Profile
              profilePicture={updateProfileImage}
              updateProfile={updateProfile}
              setActiveTab={setActiveTab}
            />
          </>
        )} */}
        {activeTab == 3 && <NewUser />}
      </ItemVV2>

      {/* Footer */}
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
          justifyContent="flext-start"
          margin="15px 0px 5px 0px"
          padding="0px 10px"
        >
          <ProfileHeader setActiveTab={setActiveTab} />
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
