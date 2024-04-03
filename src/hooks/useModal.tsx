// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { ThemeProvider, useTheme } from "styled-components";
import Backdrop from '@mui/material/Backdrop';

// Internal Components
import { ShowLoaderToastType, ShowMessageToastType } from './useToast';

export type ModalInnerComponentType = { 
    onConfirm ?: (value?:any) => any, 
    onClose?: () => void,
    toastObject ?: {
        showLoaderToast: ShowLoaderToastType, showMessageToast: ShowMessageToastType
    },
    InnerComponentProps ?: any,
};

export type ModalType = {
    InnerComponent:({} : ModalInnerComponentType ) => JSX.Element,
    onConfirm ?: (value?:any) => any,
    extraOuterPadding?: string,
    placementMargin?: string,
    toastObject ?: {
        showLoaderToast: ShowLoaderToastType, showMessageToast: ShowMessageToastType
    },
    InnerComponentProps ?: any,
}

const useModal = () => {
    const [open, setOpen] = React.useState(false);
    
    // hacky fix to prevent background scroll when modal is open
    React.useEffect(() => {
        if (open) {
          document.body.style.overflow = 'hidden';
          document.body.style.paddingRight = '1rem';
        } else {
          document.body.style.overflow = 'unset';
          document.body.style.paddingRight = '0px';
        }
      }, [open]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const ModalComponent = ({ InnerComponent, onConfirm, toastObject, InnerComponentProps, extraOuterPadding, placementMargin } : ModalType)=>{
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
                    <ModalBody 
                      style={{
                        background:themes.modalContentBackground,
                        border: `1px solid ${themes.modalBorderColor}`,
                      }}
                      margin={placementMargin}
                      padding={extraOuterPadding}
                    >
                        <InnerComponent onConfirm={onConfirm} onClose={handleClose} toastObject={toastObject} InnerComponentProps={InnerComponentProps}/>
                    </ModalBody>
                </Backdrop>
            </ThemeProvider>
        )
    
    }

    return { isModalOpen: open, showModal: handleOpen, ModalComponent }
}

const ModalBody = styled.div`
  // width: fit-content;
  // height: fit-content;
  border-radius: 1rem;
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "1.2% 2%"};
  box-shadow: none;
  backdrop-filter: blur(10px);
`

export default useModal