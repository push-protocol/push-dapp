import React from 'react';
import styled, {useTheme, ThemeProvider } from "styled-components";

import IconButton from '@mui/material/IconButton';
import { MdHighlightOff } from "react-icons/md";
import { RiNotificationOffLine } from "react-icons/ri";

import { ModalInnerComponentType } from "hooks/useModal";

const ChannelDeactivateModalContent = ({ onConfirm, onClose } : ModalInnerComponentType)=>{
    const themes = useTheme();

    return(
        <ThemeProvider theme={themes}>
            <ModalMessage style={{
                color:themes.modalMessageColor,
            }}>
                Are you sure you want to deactivate the channel? You will no longer be able to send notifications from it.
            </ModalMessage>
            <ButtonContainer>
                <IconButton
                    onClick={onClose}
                    style={{ padding: "0", marginRight: "0.5rem" }}
                    sx={{ "&:hover": { backgroundColor: "transparent" } }}
                    children={
                        <MdHighlightOff size="2.6rem" style={{
                            color:themes.modalIconColor,
                        }} />}
                    />
                <IconButton
                    onClick={()=>{
                        onConfirm();
                        onClose();
                    }}
                    style={{ padding: "0" }}
                    sx={{ "&:hover": { backgroundColor: "transparent" } }}
                    children={
                        <RiNotificationOffLine size="1.4rem" style={{
                            color: "white", background: "red", borderRadius: "50%", padding: "8px"
                        }} />}
                    />
            </ButtonContainer>
        </ThemeProvider>
    )
}

const ModalMessage = styled.div`
    width: 70%;
    font-family: Manrope;
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
`

const ButtonContainer = styled.div`
    display: flex;
`

export default ChannelDeactivateModalContent