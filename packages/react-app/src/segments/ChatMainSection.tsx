import React from 'react'
import styled, { ThemeProvider, useTheme } from 'styled-components'
import { Content } from 'components/SharedStyling'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const ChatMainSection = (): JSX.Element => {
  const themes = useTheme()

  return (
    <ThemeProvider theme={themes}>
      <Container>
        <Box>
          <HelloBox>
            <Typography>Say Hello to Push Chat</Typography>
          </HelloBox>

          <HelloText>You haven’t started a conversation yet.</HelloText>
          <HelloText>Begin by searching name.eth or 0x123...</HelloText>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

const Container = styled(Content)`
  padding: 20px;
  width: 100%;
  background: linear-gradient(179.97deg, #eef5ff 0.02%, rgba(236, 239, 255, 0) 123.25%);
  border-radius: 13px;
  height: inherit;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`

const HelloBox = styled(Box)`
  width: 333px;
  height: 75px;
  background: #ffffff;
  border-radius: 2px 16px 16px 16px;
  color: #000000;
  font-size: 24px;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 10px;
`

const HelloText = styled(Typography)`
  color: #657795;
  font-size: 14px;
  margin-bottom: 5px;
`

export default ChatMainSection
