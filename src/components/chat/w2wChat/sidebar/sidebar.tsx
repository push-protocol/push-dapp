import React, { useContext, useState } from 'react';
import { Context } from 'sections/chat/ChatMainSection';
import IntentBar from '../intentBar/intentBar';
import IntentFeed from '../intentFeed/intentFeed';
import SearchBar from '../searchBar/searchBar';
import './sidebar.css';

import { makeStyles } from '@material-ui/core';
import Box from '@mui/material/Box';
import MuiTab from '@mui/material/Tab';
import MuiTabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

import ProfileHeader from '../profile';
import Profile from '../ProfileSection/Profile';

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
      backgroundColor: '#CF1C84',
    },
    '& .MuiTab-root.Mui-selected': {
      color: '#CF1C84',
    },
  },
});

const Sidebar = () => {
  const { connectedUser, pendingRequests } = useContext(Context);
  const [updateProfileImage, setUserProfileImage] = useState(connectedUser.profilePicture);

  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const updateProfile = (image: string) => {
    setUserProfileImage(image);
  };
  console.log('pending',pendingRequests)

  return (
    <Container>
      <TabContainer>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            className={classes.tabs}
          >
            <Tab label={<span style={{ textTransform: 'capitalize', fontSize: '17px' }}>chats</span>} />
            <Tab
              label={
                <span
                  style={{
                    textTransform: 'capitalize',
                    fontSize: '17px',
                    display: 'flex',
                    gap: '6px',
                  }}
                >
                  Requests{pendingRequests > 0 ? <Badge>{pendingRequests}</Badge> : null}
                </span>
              }
            />
            <Tab
              style={{ display: 'none' }}
              label=""
            />
          </Tabs>
        </Box>
      </TabContainer>
      <TabPanel
        value={value}
        index={0}
      >
        <Box>
          <SearchBar />
        </Box>
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
      >
        {pendingRequests > 0 ? (
          <DisplayText
            color="#6D6B7A"
            size="14px"
            weight="700"
            ml={3}
            mt={2}
          >
            REQUESTS
          </DisplayText>
        ) : null}
        <IntentFeed />
      </TabPanel>
      <TabPanel
        value={value}
        index={2}
      >
        <Box>
          <Profile
            profilePicture={updateProfileImage}
            updateProfile={updateProfile}
            setValue={setValue}
          />
        </Box>
      </TabPanel>
      <BottomBar>
        <ProfileHeader setValue={setValue} />
      </BottomBar>
    </Container>
  );
};

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
const BottomBar = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 26px;
  right: 22px;
  border-top: 2px solid #f4f5fa;
  display: flex;
  padding-top: 10px;
  justify-content: space-between;
  align-items: center;
  displaytext-align: center;
`;

const DisplayText = styled(Typography)`
  && {
    color: ${(props): string => props.color || '#000000'};
    font-size: ${(props): string => props.size || '14px'};
    font-weight: ${(props): string => props.weight || '500'};
  }
`;
const Container = styled(Box)`
  && {
    padding: 0px;
    min-width: 336px;
    max-width: 336px;
    height: inherit;
    position: relative;
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
  displaytext-transform: unset;
`;

const Tab = styled(MuiTab)`
  && {
    displaytext-transform: unset;
    width: 150px;
    font-size: 16px;
    color: #000000;
  }
`;

export default Sidebar;
