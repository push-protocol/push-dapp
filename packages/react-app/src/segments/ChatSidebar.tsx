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
    <Input type="text" rows="1" onChange={(e): void => handleSearch(e)} placeholder="Search name.eth or 0x123..." />
  )
}

const Requests = (): JSX.Element => {
  return (
    <UserProfileContainer width={'388px'}>
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
    </UserProfileContainer>
  )
}

const UserProfiles = (): JSX.Element => {
  const [unread, setUnread] = React.useState(true)
  return (
    <UserProfileContainer width={'302px'}>
      <ProfileCard selected={true}>
        <AvatarContainer>
          <Avatar alt="Remy Sharp" src="/svg/chats/user.svg" />
        </AvatarContainer>
        <UserData>
          <DisplayText color="#1E1E1E" weight="600" size="16px">
            Adam.eth
          </DisplayText>
          <DisplayText color={unread ? '#D53A94' : '#657795'}>Are you there?</DisplayText>
        </UserData>
        <MessageData>
          <MessageTime color={unread ? '#D53A94' : '#657795'}>12.34</MessageTime>
          <Badge>3</Badge>
        </MessageData>
      </ProfileCard>
      <ProfileCard selected={false}>
        <AvatarContainer>
          <Avatar alt="Remy Sharp" src="/svg/chats/user.svg" />
        </AvatarContainer>
        <UserData>
          <DisplayText color="#1E1E1E" weight="600" size="16px">
            Adam.eth
          </DisplayText>
          <DisplayText color="#657795">Are you there?</DisplayText>
        </UserData>
        <MessageData>
          <MessageTime>12.34</MessageTime>
        </MessageData>
      </ProfileCard>
      <ProfileCard selected={false}>
        <AvatarContainer>
          <Avatar alt="Remy Sharp" src="/svg/chats/user.svg" />
        </AvatarContainer>
        <UserData>
          <DisplayText color="#1E1E1E" weight="600" size="16px">
            Adam.eth
          </DisplayText>
          <DisplayText color="#657795">Are you there?</DisplayText>
        </UserData>
        <MessageData>
          <MessageTime>12.34</MessageTime>
        </MessageData>
      </ProfileCard>
      <ProfileCard selected={false}>
        <AvatarContainer>
          <Avatar alt="Remy Sharp" src="/svg/chats/user.svg" />
        </AvatarContainer>
        <UserData>
          <DisplayText color="#1E1E1E" weight="600" size="16px">
            Adam.eth
          </DisplayText>
          <DisplayText color="#657795">Are you there?</DisplayText>
        </UserData>
        <MessageData>
          <MessageTime>12.34</MessageTime>
        </MessageData>
      </ProfileCard>
      <ProfileCard selected={false}>
        <AvatarContainer>
          <Avatar alt="Remy Sharp" src="/svg/chats/user.svg" />
        </AvatarContainer>
        <UserData>
          <DisplayText color="#1E1E1E" weight="600" size="16px">
            Adam.eth
          </DisplayText>
          <DisplayText color="#657795">Are you there?</DisplayText>
        </UserData>
        <MessageData>
          <MessageTime>12.34</MessageTime>
        </MessageData>
      </ProfileCard>
      <ProfileCard selected={false}>
        <AvatarContainer>
          <Avatar alt="Remy Sharp" src="/svg/chats/user.svg" />
        </AvatarContainer>
        <UserData>
          <DisplayText color="#1E1E1E" weight="600" size="16px">
            Adam.eth
          </DisplayText>
          <DisplayText color="#657795">Are you there?</DisplayText>
        </UserData>
        <MessageData>
          <MessageTime>12.34</MessageTime>
        </MessageData>
      </ProfileCard>
    </UserProfileContainer>
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
            <Tab label={<span style={{ textTransform: 'capitalize', fontSize: '17px' }}>chats</span>} />
            <Tab
              label={
                <span
                  style={{
                    textTransform: 'capitalize',
                    fontSize: '17px',
                    display: 'flex',
                    gap: '6px'
                  }}
                >
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
          <Image src="/svg/chats/search.svg" />
        </SearchBarContainer>
        <Typography variant="subtitle1" ml={2}>
          CHAT
        </Typography>
        <UserProfiles />
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

// background: url('/svg/chats/search.svg') no-repeat;
//   background-position: 258px 13px;
//   background-size: 20px;
// &:focus {
//   outline: none;
//   border-width: 1px;
//   border-style: solid;
//   border-image: linear-gradient(to right, #cf1c84 0%, #8ed6ff 50%);
//   border-image-slice: 1;
// }
// outline: none;
// background-image: linear-gradient(white, white), linear-gradient(to right, #cf1c84 0%, #8ed6ff 100%);
// background-origin: border-box;
// background-clip: content-box, border-box;
// padding: 11px 74px 13px 21px;
// box-sizing: border-box;
//   border-radius: 99px;
//   width: 294px;
//   height: 48px;
//   background-color: #f4f5fa;
//   margin: 37px 0px 17px 0px;
//   resize: none;
//   border: 1px solid transparent;

const Image = styled.img`
  position: absolute;
  top: 48px;
  right: 35px;
  height: 25px;
  width: 20px;
`

const Input = styled.input`
  box-sizing: border-box;
  width: 294px;
  height: 48px;
  resize: none;
  margin: 37px 0px 17px 0px;
  background-color: #f4f5fa;
  border: 2px solid transparent;
  border-radius: 99px;
  &:focus {
    outline: none;
    background-image: linear-gradient(#f4f5fa, #f4f5fa), linear-gradient(to right, #cf1c84 0%, #8ed6ff 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
`

const DisplayText = styled(Typography)`
  && {
    color: ${(props): string => props.color || '#000000'};
    font-size: ${(props): string => props.size || '14px'};
    font-weight: ${(props): string => props.weight || '500'};
  }
`

const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`

const AvatarContainer = styled.div`
  width: 48px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 18px;
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
`

const RequestTime = styled.div`
  position: absolute;
  right: 15px;
  bottom: 38px;
  font-size: 14px;
`

const MessageTime = styled.div`
  font-size: 14px;
  color: ${(props): string => props.color || '#657795'};
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
  min-height: 73px;
  background:${(props): string => (props.selected ? '#f4f5fa' : 'transparent')};
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
  height: ${(props): string => props.width || '302px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  &&::-webkit-scrollbar {
    width: 4px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #cf1c84;
  }
`

const WalletDetailsContainer = styled(Stack)`
  display: flex;
  align-items: center;
  displaytext-align: center;
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
  displaytext-transform: unset;
`
const Tab = styled(MuiTab)`
  && {
    displaytext-transform: unset;
    width: 150px;
    font-size: 16px;
    color: #000000;
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
  displaytext-align: center;
`

export default ChatSidebar
