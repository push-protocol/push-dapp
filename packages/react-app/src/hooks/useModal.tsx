import React from 'react';
import styled, {useTheme, ThemeProvider } from "styled-components";

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
        const themes = useTheme();
        const handleClose = () => {
            setOpen(false);
        };
        return(
            <ThemeProvider theme={themes}>
                <Dialog
                    onClose={handleClose}
                    open={open}
                    maxWidth="xs"
                    style={{background:themes.scheme === "dark" ? `rgba(0,0,0,0.6)` :`rgba(255,255,255,0.6)`}}
                    sx={{
                        '& .MuiPaper-root': {
                            background:themes.scheme === "dark" ? `rgb(0,0,0)` :`rgb(255,255,255)`,
                            border: `1px solid ${themes.scheme === "dark" ? "#4A4F67" : "#E5E8F6"}`,
                            borderRadius: "1rem",
                            padding: "0.1% 0.62%",
                            boxShadow: "none"
                        },
                    }}
                >
                    <DialogContent style={{ display: "flex", justifyContent: "space-between" }}>
                        <InnerComponent onClose={handleClose}  />
                    </DialogContent>
                </Dialog>
            </ThemeProvider>
        )
    
    }

    return { showModal: handleOpen, ModalComponent }
}

export default useModal