// React + Web3 Essentials
import React from 'react'

// External Packages
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import styled, { ThemeProvider, useTheme } from 'styled-components'

// Internal Components
import { ImageV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2'
import { Content } from 'components/SharedStyling'
import HandwaveIcon from "../assets/chat/handwave.svg"

const ChatMainSection = (): JSX.Element => {
  const [showOption, setShowOption] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const themes = useTheme()
  const msgcount = 2
  const count = 2

  const TypeBar = (): JSX.Element => {
    return (
      <TypeBarContainer>
        <Icon>
          <img src="/svg/chats/smiley.svg" height="24px" width="24px" />
        </Icon>
        <TextInput
          type="text"
          placeholder="Type your message"
        />
        <Icon>
          <img src="/svg/chats/gif.svg" height="18px" width="22px" />
        </Icon>
        <Icon>
          <img src="/svg/chats/attachment.svg" height="24px" width="20px" />
        </Icon>
        <Icon>
          <img src="/svg/chats/send.svg" height="27px" width="27px" />
        </Icon>
      </TypeBarContainer>
    )
  }

  return (
    <ThemeProvider theme={themes}>
      <Container>
        {count === 2 ? (
          <Box>
            <ChatHeader>
              <UserInfo>
                <Avatar alt="Remy Sharp" src="/svg/chats/user.svg" />
                <Typography variant="body1" ml={1}>
                  {' '}
                  Adam.eth
                </Typography>
              </UserInfo>
              <MoreOptions>
                <IconButton aria-label="more" onClick={(): void => setShowOption((option) => !option)}>
                  <MoreVertIcon />
                </IconButton>
                {showOption && (
                  <OptionContainer>
                    <Option>
                      <Icon>
                        <img src="/svg/chats/nickname.svg" height="24px" width="24px" />
                      </Icon>
                      <Typography ml={1} variant="subtitle2">
                        Give Nickname
                      </Typography>
                    </Option>
                    <Option>
                      <Icon>
                        <img src="/svg/chats/block.svg" height="24px" width="24px" />
                      </Icon>
                      <Typography ml={1} variant="subtitle2">
                        Block User
                      </Typography>
                    </Option>
                  </OptionContainer>
                )}
              </MoreOptions>
            </ChatHeader>
            <MessageContainer>
              {msgcount !== 2 ? (
                <FirstConversation>
                  This is your first conversation with the receipent, you will be able to continue the conversation once
                  the receipent accepts the chat request
                </FirstConversation>
              ) : (
                <>
                  <MessageTime>July 26, 2022</MessageTime>
                  <MessageWrapper>
                    <ReceivedMessage>
                      <Message>Hi, Good Morning</Message>
                      <TimeStamp>12.44</TimeStamp>
                    </ReceivedMessage>
                  </MessageWrapper>
                  <MessageWrapper>
                    <SenderMessage>
                      <Message>Hello how are you, what are you doing?</Message>
                      <TimeStamp>12.44</TimeStamp>
                    </SenderMessage>
                  </MessageWrapper>
                  <MessageTime>Today</MessageTime>
                  <MessageWrapper>
                    <ReceivedMessage>
                      <Message>Hi, Good Morning</Message>
                      <TimeStamp>12.44</TimeStamp>
                    </ReceivedMessage>
                  </MessageWrapper>
                  <MessageWrapper>
                    <SenderMessage>
                      <Message>Hello how are you</Message>
                      <TimeStamp>12.44</TimeStamp>
                    </SenderMessage>
                  </MessageWrapper>
                  <MessageWrapper>
                    <ReceivedMessage>
                      <Message>Hi, Good Morning</Message>
                      <TimeStamp>12.44</TimeStamp>
                    </ReceivedMessage>
                  </MessageWrapper>
                  <MessageWrapper>
                    <ReceivedMessage>
                      <Message>
                        This is your first conversation with the sender, please accept to continue the chat
                      </Message>
                      <DecisionContainer>
                        <Icon>
                          <img src="/svg/chats/cancel.svg" height="39px" width="39px" />
                        </Icon>
                        <Icon>
                          <img src="/svg/chats/accept.svg" height="39px" width="39px" />
                        </Icon>
                      </DecisionContainer>
                    </ReceivedMessage>
                  </MessageWrapper>
                </>
              )}
            </MessageContainer>
            <TypeBar />
          </Box>
        ) : (
          <ItemVV2 gap="25px">
          <WelcomeMainText 
          theme={themes}>
            <ImageV2 src={HandwaveIcon} 
            alt="wave"
            display="inline" 
            width="auto"
            verticalAlign="middle"
            margin="0 13px"/>
          </WelcomeMainText>
          <WelcomeSubText 
           theme={themes}>
            You haven’t started a conversation yet. Start a new chat by using the + button
          </WelcomeSubText>
         </ItemVV2>
        )}
      </Container>
    </ThemeProvider>
  )
}

const Option = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const OptionContainer = styled.div`
  position: absolute;
  top: 55px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 19px;
  width: 193px;
  background: #ffffff;
  border-radius: 16px;
  z-index: 100;
`

const MoreOptions = styled.div`
  position: relative;
`

const Icon = styled(IconButton)`
  && {
    padding: 0px;
  }
`

const DecisionContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FirstConversation = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #657795;
  margin: 59px 0px 0px 0px;
`

const TimeStamp = styled.span`
  min-width: 44px;
  min-height: 32px;
  font-size: 13px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-left: 15px;
`

const Message = styled.span`
  height: 100%;
  padding-bottom: 10px;
  font-size: 14px;
`

const MessageTime = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #000000;
  margin: 15px 0px;
`

const MessageContainer = styled.div`
  position: absolute;
  top: 65px;
  left: 0;
  right: 0;
  margin: 0;
  width: 100%;
  height: 420px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-around;
  gap: 10px;
  &&::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`

const MessageWrapper = styled.div`
  width: 100%;
  min-height: 43px;
  padding: 0;
  margin: 0px 0px 10px 0px;
  color: black;
`

const ReceivedMessage = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 34px;
  max-width: 419px;
  min-height: 32px;
  padding: 11px 11px 5px 24px;
  background: #ffffff;
  text-align: left;
  border-radius: 2px 16px 16px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000;
`

const SenderMessage = styled.div`
  box-sizing: border-box;
  position: absolute;
  right: 34px;
  max-width: 419px;
  min-height: 32px;
  text-align: left;
  padding: 11px 11px 5px 24px;
  background: #ca599b;
  border-radius: 16px 2px 16px 16px;
  display: flex;
  justify-content: flex-strt;
  align-items: center;
  color: #ffffff;
`

const UserInfo = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
`

const ChatHeader = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 9px;
  left: 9px;
  right: 9px;
  height: 55px;
  border-radius: 29px;
  color: black;
  background: #ffffff;
  padding: 6px;
`

const TextInput = styled.textarea`
  font-size: 16px;
  width: 75%;
  height: 25px;
  outline: none;
  border: none;
  resize: none;
  background: transparent;
`

const TypeBarContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:10px;
  bottom: 9px;
  left: 9px;
  right: 9px;
  height: 55px;
  padding: 16px;
  border-radius: 13px;
  color: black;
  background: #ffffff;
`

const Container = styled(Content)`
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(179.97deg, #eef5ff 0.02%, rgba(236, 239, 255, 0) 123.25%);
  border-radius: 13px;
  height: inherit;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: relative;
`

const WelcomeMainText = styled(SpanV2)`
  background:${props => props.theme.default.bg};
  padding:20px 55px;
  border-radius:2px 28px 28px 28px;
  font-size:28px;
  font-weight:500;
  text-align:center;
  color:${props => props.theme.default.color};
  letter-spacing:-0.03em;
  margin:0 4rem;
  @media only screen and (max-width: 1115px) and (min-width: 991px) {
    font-size:26px;
    padding: 16px 33px;
    & img {
      width:2rem;
    }
  }
  @media only screen and (max-width: 771px) and (min-width: 711px) {
    font-size:23px;
    padding: 16px 30px;
    & img {
      width:1.8rem;
    }
  }
`;

const WelcomeSubText = styled(SpanV2)`
font-size:15px;
font-weight:400;
line-height:19px;
max-width:17rem;
color:${props => props.theme.default.seconddaryColor};
@media only screen and (max-width: 1115px) and (min-width: 991px) {
  font-size:13px;
  max-width:15rem;
}
@media only screen and (max-width: 780px) and (min-width: 711px) {
  font-size:13px;
  max-width:14rem;
}
`;

export default ChatMainSection
