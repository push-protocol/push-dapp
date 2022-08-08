import React, { useState, SyntheticEvent } from 'react'
import styled from 'styled-components'
import { Content } from 'components/SharedStyling'
import MuiTabs from '@mui/material/Tabs'
import MuiTab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

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
            <Tab label="Intents" inputColor="purple" />
          </Tabs>
        </Box>
      </TabContainer>

      <TabPanel value={value} index={0}>
        Chats
      </TabPanel>
      <TabPanel value={value} index={1}>
        Requests
      </TabPanel>
    </Container>
  )
}

const Container = styled(Content)`
  padding: 0px;
  width: 450px;
  height: inherit;
  margin-right: 25px;
  padding-right: 25px;
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

export default ChatSidebar
