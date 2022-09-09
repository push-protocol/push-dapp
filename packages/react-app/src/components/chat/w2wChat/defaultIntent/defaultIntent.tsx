import { Feeds } from 'api'
import React from 'react'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import styled from 'styled-components'
import './defaultIntent.css'

interface DefaultIntentProps {
  inbox: Feeds
}

const DefaultIntent = (props: DefaultIntentProps): JSX.Element => {
  let date = null

  if (props.inbox?.intentTimestamp !== null) {
    const time = new Date(props.inbox?.intentTimestamp)
    date = time.toLocaleTimeString('en-US').slice(0, -6) + time.toLocaleTimeString('en-US').slice(-2)
  }

  const walletAddress = props.inbox.msg.name
    .split(':')
    .at(-1)
    .slice(0, 19)
  const fh = walletAddress.slice(0, 6)
  const sh = walletAddress.slice(-6)
  const final = fh + '....' + sh

  return (
    <ProfileCard>
      <AvatarContainer>
        <Avatar alt="Profile" src={props.inbox.profilePicture} />
      </AvatarContainer>
      <UserData>
        <DisplayText color="#1E1E1E" weight="600" size="16px">
          {final}
        </DisplayText>
        <DisplayText color="#657795">{props.inbox.msg.lastMessage}</DisplayText>
      </UserData>
      <RequestTime>{date}</RequestTime>
    </ProfileCard>
    // <div className="message_body">
    //   <div className="message_content">
    //     <img src={props.inbox.profilePicture} className="message_content_img"></img>

    //     <div className="message_content_body">
    //       <div className="message_name">{final}</div>

    //       <div className="message_lastMsg">{props.inbox.msg.lastMessage}</div>
    //     </div>

    //     <div className="message_content_time">{date}</div>
    //   </div>

    //   {/* <div className='defaultMessage_1'>
    //             <div className='defaultMessage_2'>
    //                 <div className='defaultMessage_img'><img src={props.inbox.profilePicture}></img></div>

    //                 <div className='defaultMessage_name'>{props.inbox.msg.name.split(':').at(-1).slice(0, 19) + '...'}</div>
    //                 <div className='defaultMessage_time'>{date}</div>
    //             </div>
    //             <div className='defaultMessage_3'>
    //                 <div className='defaultMessage_lastMsg'>
    //                     {props.inbox.msg.lastMessage}
    //                 </div>
    //             </div>
    //         </div> */}
    // </div>
  )
}

const RequestTime = styled.div`
  position: absolute;
  right: 15px;
  bottom: 42px;
  font-size: 14px;
  color: ${(props): string => props.color || '#657795'};
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
  margin-left: 18px;
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
    // white-space: nowrap;
    // overflow: hidden;
    // text-overflow: ellipsis;
  }
`

export default DefaultIntent
