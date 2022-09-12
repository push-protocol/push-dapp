import React from 'react'
//import { ReactDOM } from 'react';
import ReactDOM from 'react-dom'
import './Modal.css'
const Modal = props => {
  if (!props.showImageModal) {
    return null
  }
  let time: Date = new Date(props?.time)
  let time1 = time.toLocaleTimeString('en-US')
  let date = time1.slice(0, -6) + time1.slice(-2)
  return ReactDOM.createPortal(
    <div className="modal" onClick={props.onClose}>
      <div className="modal_content" onClick={props.onClose}>
        <div className="modal_close">
          <i className="fa fa-times" aria-hidden="true" onClick={props.onClose}></i>
        </div>
        <div className="modal_img">
          <img src={props.src}></img>
          <span>{date}</span>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default Modal
