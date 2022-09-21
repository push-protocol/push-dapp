// React + Web3 Essentials
import React, { useEffect, useState } from 'react'

// External Packages
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { CID } from 'ipfs-http-client'
import styled from 'styled-components'

// Internal Packages
import { Feeds } from 'api'
import ChatSnap, { ChatSnapMsgI } from 'components/chat/chatsnap/ChatSnap'
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2'
import { appConfig } from "config"
import { caip10ToWallet } from 'helpers/w2w'
import './defaultMessage.css'


// Internal Configs


const INFURA_URL = appConfig.infuraApiUrl

const DefaultMessage = (props: { inbox: Feeds, isSelected: boolean }): JSX.Element => {
  // printing default message props
  let date = null
  const [imageSource, setImageSource] = useState<string>('')
  const [unread, setUnread] = useState<boolean>(false)
  if (props.inbox?.msg.timestamp !== null) {
    const time = new Date(props.inbox?.msg?.timestamp)
    date = time.toLocaleTimeString('en-US').slice(0, -6) + time.toLocaleTimeString('en-US').slice(-2)
  }

  useEffect(() => {
    try {
      CID.parse(props.inbox.profilePicture)
      setImageSource(INFURA_URL + `${props.inbox.profilePicture}`)
    } catch (err) {
      setImageSource(props.inbox.profilePicture)
    }
  }, [])

  console.log(props.inbox.msg);
  
  const username = caip10ToWallet(props.inbox.msg.name).slice(0, 8) + '...' + caip10ToWallet(props.inbox.msg.name).slice(-7);
  const chatSnapMsg: ChatSnapMsgI = {
    type: props.inbox.msg.messageType,
    message: props.inbox.msg.lastMessage,
  }
  
  const message = props.inbox.msg.messageType === 'Text' ? (
      props.inbox.msg.lastMessage.length > 25 ? (
        props.inbox.msg.lastMessage.slice(0, 25) + '...'
      ) : (
        props.inbox.msg.lastMessage
      )
    ) : props.inbox.msg.messageType === 'Image' ? (
      <div>
        <i className="fa fa-picture-o" aria-hidden="true"></i>
        Image
      </div>
    ) : props.inbox.msg.messageType === 'File' ? (
      <div>
        <i className="fa fa-file" aria-hidden="true"></i>
        File
      </div>
    ) : props.inbox.msg.messageType === 'GIF' ? (
      <div>
        <i className="fa fa-picture-o" aria-hidden="true"></i>
        GIF
      </div>
    ) : null;

  return (
    <ProfileCard
      padding="10px"
    >
      <AvatarContainer>
        <Avatar alt="Remy Sharp" src={imageSource} />
      </AvatarContainer>
      <UserData>
        <DisplayText color="#1E1E1E" weight="600" size="16px">
          {caip10ToWallet(props.inbox.msg.name).slice(0, 8) + '...' + caip10ToWallet(props.inbox.msg.name).slice(-7)}
        </DisplayText>
        <DisplayText color={unread ? '#D53A94' : '#657795'}>
          {props.inbox.msg.messageType === 'Text' ? (
            props.inbox.msg.lastMessage.length > 25 ? (
              props.inbox.msg.lastMessage.slice(0, 25) + '...'
            ) : (
              props.inbox.msg.lastMessage
            )
          ) : props.inbox.msg.messageType === 'Image' ? (
            <div>
              <i className="fa fa-picture-o" aria-hidden="true"></i>
              Image
            </div>
          ) : props.inbox.msg.messageType === 'File' ? (
            <div>
              <i className="fa fa-file" aria-hidden="true"></i>
              File
            </div>
          ) : props.inbox.msg.messageType === 'GIF' ? (
            <div>
              <i className="fa fa-picture-o" aria-hidden="true"></i>
              GIF
            </div>
          ) : null}
        </DisplayText>
      </UserData>
      <MessageData >
        {unread ? <Badge>3</Badge> : null}
        <ReceivedTime color={unread ? '#D53A94' : '#657795'}>{date}</ReceivedTime>
      </MessageData>
    </ProfileCard>
  )
}

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

const ReceivedTime = styled.div`
  font-size: 14px;
  color: ${(props): string => props.color || '#657795'};
  display: flex;
  align-items: end;
  margin-top: 10px;
`

const MessageData = styled.div`
  position: absolute;
  right: 15px;
  height: 73px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 5px;
`

const ProfileCard = styled(ItemHV2)`
  min-height: 73px;
  flex: initial;
  justify-content: flex-start;
  background:${(props): string => (props.selected ? '#f4f5fa' : 'transparent')};
  position: relative;
  left:0;
  right:0;
  &:hover{
    background-color:#f4f5fa;
    cursor:pointer;
  }
`
const AvatarContainer = styled.div`
  width: 48px;
  min-height: 73px;
  display: flex;
  align-items: center;
  justify-content: center;
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
const DisplayText = styled(Typography)`
  && {
    color: ${(props): string => props.color || '#000000'};
    font-size: ${(props): string => props.size || '14px'};
    font-weight: ${(props): string => props.weight || '500'};
  }
`

export default DefaultMessage
