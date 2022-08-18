import React from 'react';
import styled from "styled-components";

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import { MdHighlightOff } from "react-icons/md";
import { RiNotificationOffLine } from "react-icons/ri";


const usePopup = (popupMessage: string, onConfirm: () => any) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        console.log("open triggered");
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleConfirm = () => {
        handleClose();
        onConfirm();
    }

    const PopupComponent = (
        <CustomDialog
            onClose={handleClose}
            open={open}
            maxWidth="xs"
        >
            <DialogContent style={{ display: "flex", justifyContent: "space-between" }}>
                <PopupMessage>
                    {popupMessage}
                </PopupMessage>
                <ButtonContainer>
                    <IconButton
                        style={{ padding: "0", marginRight: "0.5rem" }}
                        sx={{ "&:hover": { backgroundColor: "transparent" } }}
                        children={
                            <MdHighlightOff size="2.6rem" style={{
                                color: "#657795",
                            }} />}
                        autoFocus
                        onClick={handleClose}
                    />
                    <IconButton
                        style={{ padding: "0" }}
                        sx={{ "&:hover": { backgroundColor: "transparent" } }}
                        children={
                            <RiNotificationOffLine size="1.4rem" style={{
                                color: "white", background: "red", borderRadius: "50%", padding: "8px"
                            }} />}
                        onClick={handleConfirm}
                    />
                </ButtonContainer>
            </DialogContent>
        </CustomDialog>
    );

    return { showPopup: handleOpen, PopupComponent }
}

const CustomDialog = styled(Dialog)(() => ({
    '& .MuiPaper-root': {
        background: "#FFFFFF",
        border: "1px solid #E5E8F6",
        borderRadius: "1rem",
        padding: "0.1% 0.62%",
        boxShadow: "none"
    },
    '& .MuiBackdrop-root': {
        background: "rgba(255,255,255,0.5)",
    },
}));

const PopupMessage = styled.div`
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

export default usePopup