import React, { useState, useContext } from 'react'
import SearchBar from '../searchBar/searchBar'
import IntentBar from '../intentBar/intentBar'
import './sidebar.css'
import { Context } from '../w2wIndex'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import PendingIcon from '@mui/icons-material/Pending'
import ChatIcon from '@mui/icons-material/Chat'

import ProfileHeader from '../profile'
import Profile from '../ProfileSection/Profile'

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
  )
}

const Sidebar = () => {
  const { connectedUser } = useContext(Context)
  const [updateProfileImage, setUserProfileImage] = useState(connectedUser.profilePicture)

  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const updateProfile = (image: string) => {
    setUserProfileImage(image)
  }

  return (
    <Box className="sidebar_body">
      <Box sx={{ position: 'relative' }}>
        <ProfileHeader setValue={setValue} />

        <TabPanel value={value} index={0}>
          <Box>
            <div className="sidebar_search">
              <SearchBar />
            </div>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Box>
            <div className="sidebar_search">
              <IntentBar />
            </div>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Box>
            <div className="sidebar_profile">
              <Profile profilePicture={updateProfileImage} updateProfile={updateProfile} setValue={setValue} />
            </div>
          </Box>
        </TabPanel>
      </Box>

      <Box className="sidebar_bottom">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab
            label="Chats"
            icon={<ChatIcon fontSize="small" />}
            iconPosition="start"
            className="sidebar_bottom_button"
            sx={{ fontSize: '12px' }}
          />
          <Tab
            label="Intents"
            icon={<PendingIcon fontSize="small" />}
            iconPosition="start"
            className="sidebar_bottom_button"
            sx={{ fontSize: '12px' }}
          />
        </Tabs>
      </Box>
    </Box>
  )
}

export default Sidebar
