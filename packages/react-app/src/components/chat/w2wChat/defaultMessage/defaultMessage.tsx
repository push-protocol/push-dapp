import React, { useEffect, useState } from 'react'
import { Feeds } from '../w2wIndex'
import './defaultMessage.css'
import { CID } from 'ipfs-http-client'
import { envConfig } from '@project/contracts'
import { caip10ToWallet } from 'helpers/w2w'
const infura_URL = envConfig.infuraApiUrl

const DefaultMessage = (props: { inbox: Feeds }) => {
  // printing default message props
  let date = null
  const [imageSource, setImageSource] = useState<string>('')
  if (props.inbox?.msg.timestamp !== null) {
    let time = new Date(props.inbox?.msg?.timestamp)
    date = time.toLocaleTimeString('en-US').slice(0, -6) + time.toLocaleTimeString('en-US').slice(-2)
  }
  useEffect(() => {
    try {
      const cid = CID.parse(props.inbox.profile_picture)
      console.log(props.inbox.profile_picture)
      setImageSource(infura_URL + `${props.inbox.profile_picture}`)
    } catch (err) {
      setImageSource(props.inbox.profile_picture)
    }
  }, [])

  return (
    <div className="defaultMessage_body">
      <div className="defaultMessage_1">
        <div className="defaultMessage_2">
          <div className="defaultMessage_img">
            <img src={imageSource}></img>
          </div>
          <div className="defaultMessage_name">
            {caip10ToWallet(props.inbox.msg.name).slice(0, 8) + '...' + caip10ToWallet(props.inbox.msg.name).slice(-7)}
          </div>
          <div className="defaultMessage_time">{date}</div>
        </div>
        <div className="defaultMessage_3">
          <div className="defaultMessage_lastMsg">
            {props.inbox.msg.messageType === 'Text' ? (
              props.inbox.msg.lastMessage
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
            ) : props.inbox.msg.messageType === 'Gif' ? (
              <div>
                <i className="fa fa-picture-o" aria-hidden="true"></i>
                Gif
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DefaultMessage
