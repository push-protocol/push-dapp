import React, { useState, SyntheticEvent } from 'react'
import styled from 'styled-components'
import { Content } from 'components/SharedStyling'
import MuiTabs from '@mui/material/Tabs'
import MuiTab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { children, value, index, ...other } = props

  return (
    <div role="tabpanel" hidden={value !== index} id={`${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const ChatSidebar = (): JSX.Element => {
  const [value, setValue] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number): void => {
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <Container>
      <TabContainer>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Chats" inputColor="#CF1C84" />
            <Tab label="Requests" inputColor="purple" />
          </Tabs>
        </Box>
      </TabContainer>

      <TabPanel value={value} index={0}>
        Chats
      </TabPanel>
      <TabPanel value={value} index={1}>
        Requests
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

const WalletDetailsContainer = styled(Stack)`
  display: flex;
  align-items: center;
  text-align: center;
  height: 100%;
`

const Container = styled(Content)`
  padding: 0px;
  width: 450px;
  height: inherit;
  margin-right: 25px;
  padding-right: 25px;
  position: relative;
`

const TabContainer = styled(Box)`
  && {
    width: 100%;
    border-bottom: 2px;
    border-color: divider;
  }
`

const Tabs = styled(MuiTabs)`
  text-transform: unset;
`
const Tab = styled(MuiTab)`
  && {
    text-transform: unset;
    width: 50%;
    font-size: 16px;
    color: #657795;
  }
`

const BottomBar = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 2px solid #f4f5fa;
  display: flex;
  padding-top: 10px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`

export default ChatSidebar
