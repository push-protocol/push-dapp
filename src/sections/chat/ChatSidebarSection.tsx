// React + Web3 Essentials
import React, { useContext, useState } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import { makeStyles } from '@material-ui/core';
import Box from '@mui/material/Box';
import MuiTab from '@mui/material/Tab';
import MuiTabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import IntentBar from 'components/chat/w2wChat/intentBar/intentBar';
import IntentFeed from 'components/chat/w2wChat/intentFeed/intentFeed';
import SearchBar from 'components/chat/w2wChat/searchBar/searchBar';
import 'components/chat/w2wChat/sidebar/sidebar.css';
import { Context } from 'sections/chat/ChatMainSection';

import ProfileHeader from 'components/chat/w2wChat/profile';
import Profile from 'components/chat/w2wChat/ProfileSection/Profile';
import Sidebar from 'components/chat/w2wChat/sidebar/sidebar';
import { ButtonV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import GLOBALS from 'config/Globals';

function TabPanel({ children, value, index, ...other }): JSX.Element {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </Box>
  );
}

const useStyles = makeStyles({
  tabs: {
    '& .MuiTabs-indicator': {
      backgroundColor: '#CF1C84'
    },
    '& .MuiTab-root.Mui-selected': {
      color: '#CF1C84'
    }
  }
});

// Chat Sections
// Divided into two, left and right
const ChatSidebarSection = () => {
  // theme context
  const theme = useTheme();

  const { connectedUser, pendingRequests } = useContext(Context);
  const [updateProfileImage, setUserProfileImage] = useState(connectedUser.profilePicture);

  const [value, setValue] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const updateProfile = (image: string) => {
    setUserProfileImage(image);
  };

  // RENDER
  return (
    <ItemVV2>

      {/* Header */}
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
              setActiveTab(0);
            }}
          >
            <SpanV2 fontSize="16px" color={activeTab === 0 ? GLOBALS.COLORS.PRIMARY_PINK : "inherit"}>Chats</SpanV2>
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
            <ItemHV2 alignItems="center">
              <SpanV2 flex="initial" fontSize="16px" color={activeTab === 1 ? GLOBALS.COLORS.PRIMARY_PINK : "inherit"} margin="0px 4px">
                Requests
              </SpanV2>

              {pendingRequests > 0 && 
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
              } 
            </ItemHV2>
          </TabButton>
        </ItemHV2>
      </ItemVV2>

      {/* Main Content */}
      <ItemVV2 justifyContent="flex-start" alignItems="stretch">
        {activeTab == 0 &&
          <SearchBar />
        }
        {activeTab == 1 &&
          <>
            <DisplayText color="#6D6B7A" size="14px" weight="700" ml={3} mt={2}>
              REQUESTS
            </DisplayText>
            <IntentFeed />
          </>
        }
        {activeTab == 2 &&
          <>
            <Profile profilePicture={updateProfileImage} updateProfile={updateProfile} setActiveTab={setActiveTab} />
          </>
        }
      </ItemVV2>

      {/* Footer */}
      <ItemVV2 flex="initial">
        <ProfileHeader setActiveTab={setActiveTab} />
      </ItemVV2>
    </ItemVV2>
  );
}
export default ChatSidebarSection;

const TabButton = styled(ButtonV2)`
  border-bottom: 2px solid ${(props) => props.active ? GLOBALS.COLORS.PRIMARY_PINK : props.theme.default.secondaryBg};
  pointer: hand;
`

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