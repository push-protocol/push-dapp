import React, { useEffect, useState } from 'react'
import './defaultMessage.css'
import { CID } from 'ipfs-http-client'
// @ts-ignore
import { envConfig } from '@project/contracts'
import { caip10ToWallet } from 'helpers/w2w'
import { Feeds } from 'api'
const INFURA_URL = envConfig.infuraApiUrl

const DefaultMessage = (props: { inbox: Feeds }): JSX.Element => {
  // printing default message props
  let date = null
  const [imageSource, setImageSource] = useState<string>('')
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default DefaultMessage
