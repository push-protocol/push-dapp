import React from 'react';
import {useTheme, ThemeProvider } from "styled-components";

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

export type ModalInnerComponentType = { onConfirm: (value:any)=>any};

export type ModalType = {
    onConfirm: (value:any) => any,
    InnerComponent:({ onConfirm }:ModalInnerComponentType)=>JSX.Element,
}

const useModal = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const ModalComponent = ({onConfirm, InnerComponent}:ModalType)=>{
        const themes = useTheme();

        const handleClose = () => {
            setOpen(false);
        };

        const handleConfirm = (value) => {
            handleClose();
            onConfirm(value);
        };
        return(
            <ThemeProvider theme={themes}>
                <Dialog
                    onClose={handleClose}
                    open={open}
                    maxWidth="xs"
                    style={{background:themes.modalBackdropBackground}}
                    sx={{
                        '& .MuiPaper-root': {
                            background:themes.modalContentBackground,
                            border: `1px solid ${themes.modalBorderColor}`,
                            borderRadius: "1rem",
                            padding: "0.1% 0.62%",
                            boxShadow: "none"
                        },
                    }}
                >
                    <DialogContent style={{ display: "flex", justifyContent: "space-between" }}>
                        <InnerComponent onConfirm={handleConfirm}  />
                    </DialogContent>
                </Dialog>
            </ThemeProvider>
        )
    
    }

    return { showModal: handleOpen, ModalComponent }
}

export default useModal