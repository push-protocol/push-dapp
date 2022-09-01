import React from 'react';
import styled, {useTheme, ThemeProvider } from "styled-components";

import { ShowToastType, UpdateToastType } from './useToast';

import Backdrop from '@mui/material/Backdrop';

export type ModalInnerComponentType = { 
    onConfirm: (value?:any) => any, 
    onClose?: () => void,
    toastObject: {
        showToast: ShowToastType,
        updateToast: UpdateToastType
    } 
};

export type ModalType = {
    InnerComponent:({ onConfirm, onClose } : ModalInnerComponentType ) => JSX.Element,
    onConfirm: (value?:any) => any,
    toastObject: {
        showToast: ShowToastType,
        updateToast: UpdateToastType
    }
}

const useModal = () => {
    const [open, setOpen] = React.useState(false);
    
    // prevent background scroll when modal is open
    React.useEffect(() => {
        if (open) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
      }, [open]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const ModalComponent = ({ InnerComponent, onConfirm, toastObject } : ModalType)=>{
        const themes = useTheme();

        return(
            <ThemeProvider theme={themes}>
                <Backdrop open={open} component="div" sx={{
                    background:themes.modalBackdropBackground,
                    zIndex: themes.modalBackdropZIndex,
                    backdropFilter: "blur(3px)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <ModalBody style={{
                        background:themes.modalContentBackground,
                        border: `1px solid ${themes.modalBorderColor}`,
                    }}>
                        <InnerComponent onConfirm={onConfirm} onClose={handleClose} toastObject={toastObject} />
                    </ModalBody>
                </Backdrop>
            </ThemeProvider>
        )
    
    }

    return { isModalOpen: open, showModal: handleOpen, hideModal: handleClose, ModalComponent }
}

const ModalBody = styled.div`
    width: fit-content;
    height: fit-content;
    border-radius: 1rem;
    padding: 1.2% 2%;
    box-shadow: none;
    backdrop-filter: blur(10px);
`

export default useModal