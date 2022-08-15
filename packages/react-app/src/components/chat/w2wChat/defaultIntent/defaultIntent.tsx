import { Feeds } from 'api'
import React from 'react'
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
    <div className="message_body">
      <div className="message_content">
        <img src={props.inbox.profilePicture} className="message_content_img"></img>

        <div className="message_content_body">
          <div className="message_name">{final}</div>

          <div className="message_lastMsg">{props.inbox.msg.lastMessage}</div>
        </div>

        <div className="message_content_time">{date}</div>
      </div>

      {/* <div className='defaultMessage_1'>
                <div className='defaultMessage_2'>
                    <div className='defaultMessage_img'><img src={props.inbox.profilePicture}></img></div>

                    <div className='defaultMessage_name'>{props.inbox.msg.name.split(':').at(-1).slice(0, 19) + '...'}</div>
                    <div className='defaultMessage_time'>{date}</div>
                </div>
                <div className='defaultMessage_3'>
                    <div className='defaultMessage_lastMsg'>
                        {props.inbox.msg.lastMessage}
                    </div>
                </div>
            </div> */}
    </div>
  )
}

export default DefaultIntent
