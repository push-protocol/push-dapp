import React from 'react'
import './Files.css'
import { FILE_ICON } from '../stickers/stickerHelper'
import { formatFileSize } from '../w2wUtils'

const Files = props => {
  const fileContent = JSON.parse(props.msg.messageContent)
  const name = fileContent.name
  let modifiedName
  if (name.length > 11) {
    modifiedName = name.slice(0, 11) + '...'
  } else {
    modifiedName = name
  }
  const content = fileContent.content
  const size = fileContent.size
  //console.log(fileContent.name, fileContent.size);
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
/*

*/
