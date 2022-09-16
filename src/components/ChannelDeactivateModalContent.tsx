// React + Web3 Essentials
import React from 'react';

// External Packages
import IconButton from '@mui/material/IconButton';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { MdError, MdHighlightOff } from "react-icons/md";
import { RiNotificationOffLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useClickAway } from 'react-use';
import styled, { ThemeProvider, useTheme } from "styled-components";

// Internal Compoonents
import { ModalInnerComponentType } from "hooks/useModal";
import { setUserChannelDetails } from "redux/slices/adminSlice";

const ChannelDeactivateModalContent = ({ onConfirm, onClose, toastObject } : ModalInnerComponentType)=>{
    const themes = useTheme();

    const dispatch = useDispatch();
    const { channelDetails } = useSelector((state: any) => state.admin);
    const {
        CHANNNEL_DEACTIVATED_STATE,
      } = useSelector((state: any) => state.channels);

    const [isLoading, setIsLoading] = React.useState(false);

    const handleClose = () => !isLoading && onClose();

    // to close the modal upon a click on backdrop
    const containerRef = React.useRef(null);
    useClickAway(containerRef, () => handleClose())

    const handleConfirm = ()=>{
        setIsLoading(true);

        onConfirm()
        .then(async (tx: any) => {
            console.log(tx);
            console.log("Transaction Sent!");
            
            toastObject.showMessageToast({
                toastTitle:"Channel Deactivated", 
                toastMessage:"Please Activate Channel to Send Notifications from it", 
                toastType:  "ERROR", 
                getToastIcon: (size) => <MdError size={size} color="red" />
            });

            await tx.wait(1);
            console.log("Transaction Mined!");
            dispatch(
                setUserChannelDetails({
                    ...channelDetails,
                    channelState: CHANNNEL_DEACTIVATED_STATE,
                })
                );
                
            setIsLoading(false);
            onClose();
          })
          .catch((err: any) => {
            console.log("!!!Error deactivateChannel() --> %o", err);
            console.log({
              err,
            });

            toastObject.showMessageToast({
                toastTitle:"Transaction Failed", 
                toastMessage: "Channel deactivation failed.", 
                toastType:  "ERROR", 
                getToastIcon: (size) => <MdError size={size} color="red" />
            })

            setIsLoading(false);
          })
    }

    return(
        <ThemeProvider theme={themes}>
            <ModalContainer ref={containerRef}>
                <ModalMessage style={{
                    color:themes.modalMessageColor,
                }}>
                    Are you sure you want to deactivate the channel? You will no longer be able to send notifications from it.
                </ModalMessage>
                <ButtonContainer>
                    <IconButton
                        onClick={handleClose}
                        style={{ padding: "0", marginRight: "0.5rem" }}
                        sx={{ "&:hover": { backgroundColor: "transparent" } }}
                        children={
                            <MdHighlightOff size="2.6rem" style={{
                                color:themes.modalIconColor,
                            }} />}
                    />
                    <IconButton
                        onClick={handleConfirm}
                        style={{ padding: "0" }}
                        sx={{ "&:hover": { backgroundColor: "transparent" } }}
                        children={
                            isLoading 
                            ?
                            <div style={{
                                height:"34px", width:"34px", background: "red", borderRadius:"50%", padding:"3px"
                                }}>
                                <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={34} />
                            </div> 
                            :
                            <RiNotificationOffLine size="2.2rem" style={{
                                color: "white", background: "red", borderRadius: "50%", padding: "8px"
                            }}
                            />
                        }
                    />
                </ButtonContainer>
            </ModalContainer>
        </ThemeProvider>
    )
}

const ModalContainer = styled.div`
    width: 28vw;
    display: flex;
    justify-content: space-between;
`

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