import React from 'react';
import styled from "styled-components";

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

export type ModalInnerComponentType = {onClose:()=>void,};

export type ModalType = {
    modalMessage:string,
    onConfirm: () => any,
    InnerComponent:({ onClose }:ModalInnerComponentType)=>JSX.Element,
}

const useModal = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const ModalComponent = ({InnerComponent}:ModalType)=>{
        const handleClose = () => {
            setOpen(false);
        };
        return(
            <CustomDialog
                onClose={handleClose}
                open={open}
                maxWidth="xs"
            >
                <DialogContent style={{ display: "flex", justifyContent: "space-between" }}>
                    <InnerComponent onClose={handleClose}  />
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