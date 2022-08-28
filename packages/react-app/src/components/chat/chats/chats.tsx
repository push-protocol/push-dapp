import React, { useState } from 'react'
import './w2wchats.css'
import { MessageIPFS } from 'helpers/ipfs'
import cn from 'classnames'
import { DID } from 'dids'
import Modal from '../Modal/Modal'
import Files, { FileMessageContent } from '../Files/Files'
// @ts-ignore
import { envConfig } from '@project/contracts'

const infura_URL = envConfig.infuraApiUrl
interface chatProps {
  msg: MessageIPFS
  did: DID
  noTail: boolean
}
interface TextProps {
  content: string
}

const URL_REGEX = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm

const Text = ({ content }: TextProps) => {
  const words = content.split(' ')
  return (
    <p>
      {words.map((word: string) => {
        return word.match(URL_REGEX) ? (
          <>
            <a href={word} target="_blank" rel="noreferrer">
              {word}
            </a>{' '}
          </>
        ) : (
          word + ' '
        )
      })}
    </p>
  )
}
export default function Chats({ msg, did, noTail }: chatProps) {
  const [showImageModal, setShowImageModal] = useState<boolean>(false)
  const [imageUrl, setImageUrl] = useState<string>('')
  const time: Date = new Date(msg?.timestamp)
  const time1 = time.toLocaleTimeString('en-US')
  const date = time1.slice(0, -6) + time1.slice(-2)

  return (
    <>
      {msg.messageType === 'Text' ? (
        <div
          key={msg.link}
          className={cn(
            'w2wmsgshared',
            msg.fromDID === did.id ? 'w2wmsgsent' : 'w2wmsgreceived',
            noTail && 'w2wnoTail'
          )}
        >
          <div className="chat">
            <div className="chatText">
              <Text content={msg.messageContent} />
              <span>{date}</span>
            </div>
          </div>
        </div>
      ) : msg.messageType === 'Image' ? (
        <>
          <div
            key={msg.link}
            className={cn(
              'w2wmsgshared',
              msg.fromDID === did.id ? 'w2wImgsent' : 'w2wImgreceived',
              noTail && 'w2wnoTail'
            )}
          >
            <img
              src={(JSON.parse(msg.messageContent) as FileMessageContent).content}
              onClick={() => {
                setShowImageModal(true)
                setImageUrl((JSON.parse(msg.messageContent) as FileMessageContent).content)
              }}
            />
          </div>

          {showImageModal && (
            <Modal
              showImageModal={showImageModal}
              onClose={() => setShowImageModal(false)}
              src={imageUrl}
              time={msg.timestamp}
            />
          )}
        </>
      ) : msg.messageType === 'GIF' ? (
        <>
          <div
            key={msg.link}
            className={cn(
              'w2wmsgshared',
              msg.fromDID === did.id ? 'w2wImgsent' : 'w2wImgreceived',
              noTail && 'w2wnoTail'
            )}
          >
            <img
              src={msg.messageContent}
              onClick={() => {
                setShowImageModal(true)
                setImageUrl(msg.messageContent)
              }}
            />
          </div>
          {showImageModal && (
            <Modal
              showImageModal={showImageModal}
              onClose={() => setShowImageModal(false)}
              src={imageUrl}
              time={msg.timestamp}
            />
          )}
        </>
      ) : msg.messageType === 'File' ? (
        <>
          <div
            key={msg.link}
            className={cn(
              'w2wmsgshared',
              msg.fromDID === did.id ? 'w2wImgsent' : 'w2wImgreceived',
              noTail && 'w2wnoTail'
            )}
          >
            <Files msg={msg} />
          </div>
        </>
      ) : null}
    </>
  )
}
