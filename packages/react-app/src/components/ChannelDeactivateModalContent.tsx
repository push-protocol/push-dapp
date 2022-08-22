import React from 'react';
import styled from "styled-components";

import IconButton from '@mui/material/IconButton';
import { MdHighlightOff } from "react-icons/md";
import { RiNotificationOffLine } from "react-icons/ri";

import { ModalInnerComponentType } from "hooks/useModal";

const ChannelDeactivateModalContent = ({modalMessage, onClose, onConfirm}:ModalInnerComponentType)=>{
    return(
        <>
            <ModalMessage>
                {modalMessage}
            </ModalMessage>
            <ButtonContainer>
                <IconButton
                    style={{ padding: "0", marginRight: "0.5rem" }}
                    sx={{ "&:hover": { backgroundColor: "transparent" } }}
                    children={
                        <MdHighlightOff size="2.6rem" style={{
                            color: "#657795",
                        }} />}
                        autoFocus
                    onClick={ onClose}
                    />
                <IconButton
                    style={{ padding: "0" }}
                    sx={{ "&:hover": { backgroundColor: "transparent" } }}
                    children={
                        <RiNotificationOffLine size="1.4rem" style={{
                            color: "white", background: "red", borderRadius: "50%", padding: "8px"
                        }} />}
                        onClick={onConfirm}
                />
            </ButtonContainer>
        </>
    )
}

const ModalMessage = styled.div`
    width: 70%;
    font-family: Manrope;
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    color: #000000;
`

const ButtonContainer = styled.div`
    display: flex;
`

export default ChannelDeactivateModalContent