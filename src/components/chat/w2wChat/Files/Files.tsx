import React from 'react'
import './Files.css'
import { FILE_ICON } from '../stickers/stickerHelper'
import { MessageIPFS } from 'helpers/w2w/ipfs'
import { formatFileSize } from 'helpers/w2w'

interface FileProps {
  msg: MessageIPFS
}

export interface FileMessageContent {
  content: string
  name: string
  type: string
  size: number
}

const Files = (props: FileProps) => {
  const fileContent: FileMessageContent = JSON.parse(props.msg.messageContent)
  const name = fileContent.name
  let modifiedName: string
  if (name.length > 11) {
    modifiedName = name.slice(0, 11) + '...'
  } else {
    modifiedName = name
  }
  const content = fileContent.content as string
  const size = fileContent.size
  return (
    <div className="w2w_FilesUpload_Container">
      <div className="w2w_FilesUpload_extention">
        <img src={FILE_ICON(name.split('.').slice(-1)[0])}></img>
      </div>
      <div className="w2w_FilesUpload_details">
        <span>{modifiedName}</span>
        <p>{formatFileSize(size)}</p>
      </div>
      <div className="w2w_FilesUpload_download">
        <a href={content} target="_blank" rel="noopener noreferrer" download>
          <i className="fa fa-download" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  )
}
export default Files
