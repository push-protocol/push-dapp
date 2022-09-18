import { makeStyles } from '@material-ui/core'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import MuiTab from '@mui/material/Tab'
import MuiTabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import { ItemVV2 } from 'components/reusables/SharedStylingV2'
import React from 'react'
import styled from 'styled-components'

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
  return <Input type="text" onChange={(e): void => handleSearch(e)} placeholder="Search name.eth or 0x123..." />
}

const Requests = (): JSX.Element => {
  return (
    <UserProfileContainer width={'388px'}>
      <ProfileCard>
        <AvatarContainer>
          <Avatar alt="Remy Sharp" src="/svg/chats/user.svg" />
        </AvatarContainer>
        <UserData>
          <DisplayText color="#1E1E1E" weight="600" size="16px">
            Adam.eth
          </DisplayText>
          <DisplayText color="#657795">Are you there?</DisplayText>
        </UserData>
        <RequestTime>12.34</RequestTime>
      </ProfileCard>
      <ProfileCard>
        <AvatarContainer>
          <Avatar alt="Remy Sharp" src="/svg/chats/user.svg" />
        </AvatarContainer>
        <UserData>
          <DisplayText color="#1E1E1E" weight="600" size="16px">
            Adam.eth
          </DisplayText>
          <DisplayText color="#657795">Are you there?</DisplayText>
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
          <ReceivedTime color={unread ? '#D53A94' : '#657795'}>12.34</ReceivedTime>
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
          <ReceivedTime>12.34</ReceivedTime>
        </MessageData>
      </ProfileCard>
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
          <ReceivedTime color={unread ? '#D53A94' : '#657795'}>12.34</ReceivedTime>
          <Badge>4</Badge>
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
          <ReceivedTime>12.34</ReceivedTime>
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
          <ReceivedTime>12.34</ReceivedTime>
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
          <ReceivedTime>12.34</ReceivedTime>
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
  const requests = 1
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
        <DisplayText color="#6D6B7A" size="14px" weight="700" ml={2}>
          CHAT
        </DisplayText>
        <UserProfiles />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DisplayText color="#6D6B7A" size="14px" weight="700" ml={2} mt={2}>
          REQUESTS
        </DisplayText>
        <Requests />
      </TabPanel>
      <BottomBar>
        <WalletDetailsContainer direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src="/svg/chats/user.svg" />
          <DisplayText color="#1E1E1E" size="16px" weight="600">
            0xF2B2...2Ec34E
          </DisplayText>
        </WalletDetailsContainer>

        <IconButton aria-label="more">
          <MoreVertIcon />
        </IconButton>
      </BottomBar>
    </Container>
  )
}

const Image = styled.img`
  position: absolute;
  top: 48px;
  right: 35px;
  height: 25px;
  width: 20px;
  &:hover {
    cursor: pointer;
  }
`

const Input = styled.input`
  box-sizing: border-box;
  width: 294px;
  height: 48px;
  padding: 13px 74px 13px 21px;
  margin: 37px 0px 17px 0px;
  border-radius: 99px;
  border: 1px solid transparent !important;
  background-color: #f4f5fa;
  &:focus {
    outline: none;
    background-image: linear-gradient(#f4f5fa, #f4f5fa), linear-gradient(to right, #cf1c84, #8ed6ff);
    background-origin: border;
    border: 1px solid transparent !important;
    background-clip: padding-box, border-box;
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
  bottom: 42px;
  font-size: 14px;
  color: ${(props): string => props.color || '#657795'};
`

const ReceivedTime = styled.div`
  font-size: 14px;
  color: ${(props): string => props.color || '#657795'};
`

const MessageData = styled.div`
  position: absolute;
  right: 15px;
  height: 73px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
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
