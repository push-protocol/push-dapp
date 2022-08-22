import React from 'react';
import styled from "styled-components";

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

export type ModalInnerComponentType = {modalMessage: string, onClose:()=>void, onConfirm:()=>void};

export type ModalType = {
    modalMessage:string,
    onConfirm: () => any,
    InnerComponent:({modalMessage, onClose, onConfirm}:ModalInnerComponentType)=>JSX.Element,
}

const useModal = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const ModalComponent = ({modalMessage, onConfirm, InnerComponent}:ModalType)=>{
        const handleClose = () => {
            setOpen(false);
        };
        const handleConfirm = () => {
            handleClose();
            onConfirm();
        }
        return(
            <CustomDialog
                onClose={handleClose}
                open={open}
                maxWidth="xs"
            >
                <DialogContent style={{ display: "flex", justifyContent: "space-between" }}>
                    <InnerComponent modalMessage={modalMessage} onClose={handleClose} onConfirm={handleConfirm}  />
                </DialogContent>
            </CustomDialog>
        )
    
    }

    return { showModal: handleOpen, ModalComponent }
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
        background: "rgba(255,255,255,0.7)",
    },
}));

export default useModal