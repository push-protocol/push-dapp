import React from 'react'
import ReactDOM from 'react-dom'

import styled from 'styled-components';

import { ImageV2, ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';

const Modal = props => {
  if (!props.showImageModal) {
    return null
  }

  let time = new Date(props?.time).toLocaleTimeString('en-US');
  let date = time.slice(0, -6) + time.slice(-2);

  // image click handler wont close the modal
  const preventModalClose = (e:React.MouseEvent<HTMLDivElement, MouseEvent> | React.MouseEvent<HTMLImageElement, MouseEvent>)=>{
    e.stopPropagation();
  }

  return ReactDOM.createPortal(
    <ModalContainer>
      <ModalContent onClick={props.onClose}>
        <ModalClose>
          <ModalCloseIcon className="fa fa-times" aria-hidden="true" onClick={props.onClose}/>
        </ModalClose>
        <ModalImageContainer>
          <ModalImage src={props.src} onClick={preventModalClose}/>
          <ModalDate onClick={preventModalClose}>{date}</ModalDate>
        </ModalImageContainer>
      </ModalContent>
    </ModalContainer>,
    document.getElementById('portal')
  )
}

const ModalContainer = styled(ItemVV2)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(37, 37, 37, 0.5);
  /* z-index of header is 99999 */
  z-index: 100000;
`

const ModalContent = styled(ItemHV2)`
  align-items: flex-start;
  width:100vw;
  height: 100vh;
`

const ModalClose = styled.div`
  display: flex;
  align-items: flex-start;
  padding-right: 20px;
  margin-top: 30px; 
`

const ModalCloseIcon = styled.i`
  font-size: 2rem;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  background-color: black;
  padding: 10px;
  &:hover{
    transform: rotate(25deg);
  }
`

const ModalImageContainer = styled.div`
  width: 80%;
  z-index: 3000;
  height: 100%;
  display: flex;
  justify-content: center;
  object-fit: cover;
  flex-direction: column-reverse;
  align-items: center;
`

const ModalImage = styled(ImageV2)`
  width: 100%;
  z-index: 3000;
  height: 80%;
  object-fit: contain;
`

const ModalDate = styled.span`
  font-size: 1.2rem;
  color: white;
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: black;
`

export default Modal
