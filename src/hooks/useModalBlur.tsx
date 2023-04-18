// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { ThemeProvider, useTheme } from 'styled-components';

// Internal Components
import { ShowLoaderToastType, ShowMessageToastType } from './useToast';
import BlurBG from '../components/reusables/blurs/BlurBG';
import { ItemHV2, ItemVV2 } from '../components/reusables/SharedStylingV2';

export type ModalInnerComponentType = {
  onConfirm?: (value?: any) => any;
  onClose?: () => void;
  toastObject?: {
    showLoaderToast: ShowLoaderToastType;
    showMessageToast: ShowMessageToastType;
  };
  InnerComponentProps?: any;
};

export type ModalType = {
  InnerComponent?: ({ onConfirm, onClose }: ModalInnerComponentType) => JSX.Element;
  onConfirm?: (value1?: any, value2?: any) => any;
  modalPadding?: string;
  modalMargin?: string;
  toastObject?: {
    showLoaderToast: ShowLoaderToastType;
    showMessageToast: ShowMessageToastType;
  };
  InnerComponentProps?: any;
  modalPosition?:number;
};

export const MODAL_POSITION={
  ON_ROOT: 1,
  ON_PARENT: 2
}

const useModalBlur = () => {
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
  };

  const ModalComponent = ({
    InnerComponent,
    onConfirm,
    toastObject,
    InnerComponentProps,
    modalPadding,
    modalMargin,
    modalPosition,
  }: ModalType) => {
    const themes = useTheme();
    
    return (
      <ThemeProvider theme={themes}>
        {open && (
          <ItemHV2
            position={modalPosition==MODAL_POSITION.ON_ROOT ? 'fixed' : 'absolute'}
            alignSelf="stretch"
            alignItems="flex-start"
            flex="initial"
            top="0"
            right="0"
            bottom="0"
            left="0"
            zIndex="1001"
          >
            <BlurBG
              blur={8}
              zIndex={2}
            />
            <ItemHV2
              display="flex"
              position="relative"
              zIndex={10}
              width="fit-content"
              height="fit-content"
              background={themes.blurModalContentBackground}
              alignSelf="center"
              flex="initial"
              padding={modalPadding ? modalPadding : '1.2% 2%'}
              borderRadius="16px"
              boxShadow="0px 4px 16px rgba(0, 0, 0, 0.02)"
              border={`1px solid ${themes.modalBorderColor}`}
              margin={modalMargin ? modalMargin : '0px'}
            >
              <InnerComponent
                onConfirm={onConfirm}
                onClose={handleClose}
                toastObject={toastObject}
                InnerComponentProps={InnerComponentProps}
              />
            </ItemHV2>
          </ItemHV2>
        )}
      </ThemeProvider>
    );
  };

  return { isModalOpen: open, showModal: handleOpen, ModalComponent };
};

export default useModalBlur;
