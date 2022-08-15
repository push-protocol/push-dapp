import React from 'react'
import styled from 'styled-components'
import MuiTabs from '@mui/material/Tabs'
import MuiTab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { makeStyles } from '@material-ui/core'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
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
})

const Search = (): JSX.Element => {
  const handleSearch = (event: React.SyntheticEvent): void => {
    console.log(event.target)
  }
  return (
    <SearchBar>
      <input type="text" id="search" onChange={(e): void => handleSearch(e)} placeholder="Search name.eth or 0x123" />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </SearchBar>
  )
}

const Requests = (): JSX.Element => {
  return (
    <ProfileCard>
      <AvatarContainer>
        <Avatar alt="Remy Sharp" src="/svg/chats/user.svg" />
      </AvatarContainer>
      <UserData>
        <Typography variant="subtitle2">Adam.eth</Typography>
        <Typography variant="caption">Are you there?</Typography>
      </UserData>
      <RequestTime>12.34</RequestTime>
    </ProfileCard>
  )
}

const UserProfiles = (): JSX.Element => {
  return (
    <>
      <ProfileCard>
        <AvatarContainer>
          <Avatar alt="Remy Sharp" src="/svg/chats/user.svg" />
        </AvatarContainer>
        <UserData>
          <Typography variant="subtitle2">Adam.eth</Typography>
          <Typography variant="caption">Are you there?</Typography>
        </UserData>
        <MessageData>
          <MessageTime>12.34</MessageTime>
          <Badge>3</Badge>
        </MessageData>
      </ProfileCard>
      <ProfileCard>
        <AvatarContainer>
          <Avatar alt="Remy Sharp" src="/svg/chats/user.svg" />
        </AvatarContainer>
        <UserData>
          <Typography variant="subtitle2">Adam.eth</Typography>
          <Typography variant="caption">Are you there?</Typography>
        </UserData>
        <MessageData>
          <MessageTime>12.34</MessageTime>
        </MessageData>
      </ProfileCard>
    </>
  )
}

const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { children, value, index, ...other } = props

  return (
    <div role="tabpanel" hidden={value !== index} id={`${index}`} {...other}>
      {value === index && <Box sx={{ p: 3, padding: '0px' }}>{children}</Box>}
    </div>
  )
}

const ChatSidebar = (): JSX.Element => {
  const requests = 2
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number): void => {
    setValue(newValue)
  }

  return (
    <Container>
      <TabContainer>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} className={classes.tabs}>
            <Tab label="Chats" />
            <Tab
              label={
                <span style={{ fontSize: '17px', display: 'flex', gap: '6px' }}>
                  Requests<Badge>{requests}</Badge>
                </span>
              }
            />
          </Tabs>
        </Box>
      </TabContainer>
      <TabPanel value={value} index={0}>
        <SearchBarContainer>
          <Search />
        </SearchBarContainer>
        <Typography variant="subtitle1" ml={2}>
          CHAT
        </Typography>
        <UserProfileContainer>
          <UserProfiles />
        </UserProfileContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="subtitle1" ml={2} mt={2}>
          REQUESTS
        </Typography>
        <Requests />
      </TabPanel>
      <BottomBar>
        <WalletDetailsContainer direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src="/svg/chats/user.svg" />
          <Typography>0xF2B2...2Ec34E</Typography>
        </WalletDetailsContainer>

        <IconButton aria-label="more">
          <MoreVertIcon />
        </IconButton>
      </BottomBar>
    </Container>
  )
}

const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const SearchButton = styled.button`
  border: none;
  background-color: transparent;
`

const SearchBar = styled.div`
  box-sizing: border-box;
  border-radius: 99px;
  width: 300px;
  height: 48px;
  background: #f4f5fa;
  padding: 5px 11px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 37px 0px 17px 0px;
`

const AvatarContainer = styled.div`
  width: 48px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 18px;
`

const Badge = styled.div`
  width: 26px;
  height: 21px;
  background: #cf1c84;
  color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RequestTime = styled.div`
  position: absolute;
  right: 15px;
  bottom: 38px;
  font-size: 14px;
`

const MessageTime = styled.div`
  font-size: 14px;
`

const MessageData = styled.div`
  position: absolute;
  right: 15px;
  height: 73px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const UserData = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  position: absolute;
  left: 80px;
`

const ProfileCard = styled.div`
  width: 336px;
  height: 73px;
  // background: #f4f5fa;
  position: relative;
  left:0;
  right:0;
  display:flex;
  align-items-center;
  padding:0;
  margin:0;
`

const UserProfileContainer = styled.div`
  margin-top: 14px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const WalletDetailsContainer = styled(Stack)`
  display: flex;
  align-items: center;
  text-align: center;
  height: 100%;
`

const Container = styled(Box)`
  padding: 0px;
  width: 336px;
  height: inherit;
  position: relative;
`

const TabContainer = styled(Box)`
  && {
    width: 100%;
    border-bottom: 2px;
    border-color: divider;
    display: flex;
    justify-content: center;
  }
`

const Tabs = styled(MuiTabs)`
  text-transform: unset;
`
const Tab = styled(MuiTab)`
  && {
    text-transform: unset;
    width: 150px;
    font-size: 16px;
    color: #657795;
  }
`

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
  text-align: center;
`

export default ChatSidebar
