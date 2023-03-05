// React + Web3 Essentials
import React from 'react';

// External Packages
import IconButton from '@mui/material/IconButton';
import { MdError, MdHighlightOff } from "react-icons/md";
import { RiNotificationOffLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useClickAway } from 'react-use';
import styled, { ThemeProvider, useTheme } from "styled-components";

// Internal Compoonents
import { ModalInnerComponentType } from "hooks/useModal";
import { setUserChannelDetails } from "redux/slices/adminSlice";
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import CloseButtonSvg from "../assets/XCircle.svg";
import BellIconSvg from "../assets/BellIcon.svg";

const ChannelDeactivateModalContent = ({ onConfirm, onClose, toastObject }: ModalInnerComponentType) => {
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

    const handleConfirm = () => {
        setIsLoading(true);

        onConfirm()
            .then(async (tx: any) => {
                console.log(tx);
                console.log("Transaction Sent!");

                toastObject.showMessageToast({
                    toastTitle: "Channel Deactivated",
                    toastMessage: "Please Activate Channel to Send Notifications from it",
                    toastType: "ERROR",
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
                    toastTitle: "Transaction Failed",
                    toastMessage: "Channel deactivation failed.",
                    toastType: "ERROR",
                    getToastIcon: (size) => <MdError size={size} color="red" />
                })

                setIsLoading(false);
            })
    }

    return (
        <ThemeProvider theme={themes}>
            <ModalContainer ref={containerRef}>
                <ModalMessage style={{
                    color: themes.modalMessageColor,
                }}>
                    Are you sure you want to deactivate the channel? You will no longer be able to send notifications from it.
                </ModalMessage>
                <ButtonContainer>
                    {/* <IconButton
                        onClick={handleClose}
                        style={{ padding: "0", marginRight: "0.5rem" }}
                        sx={{ "&:hover": { backgroundColor: "transparent" } }}
                        children={
                            <MdHighlightOff size="2.6rem" style={{
                                color: themes.modalIconColor,
                            }} />}
                    /> */}


                    <CloseButtonSVG src={CloseButtonSvg} onClick={handleClose} />

                    {/* <IconButton
                        onClick={handleConfirm}
                        style={{ padding: "0" }}
                        sx={{ "&:hover": { backgroundColor: "#E93636" } }}
                        children={
                            isLoading
                                ?
                                <div style={{
                                    height: "34px", width: "34px", background: "red", borderRadius: "50%", padding: "3px"
                                }}>
                                    <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={34} />
                                </div>
                                :
                                // <RiNotificationOffLine size="2.2rem" style={{
                                //     color: "white", background: "red", borderRadius: "50%", padding: "8px"
                                // }}
                                // />
                                <BellIconImage src={BellIconSvg} />
                        }
                    /> */}

                    <BellIconContainer onClick={handleConfirm}>
                        {isLoading ? (
                            <>
                                <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={30} spinnerColor={"#ffff"} />
                            </>
                        ) : (
                        <BellIconImage src={BellIconSvg} />

                        )}
                    </BellIconContainer>


                </ButtonContainer>
            </ModalContainer>
        </ThemeProvider>
    )
}

const ModalContainer = styled.div`
    // width: 28vw;
    width:446px;
    display: flex;
    justify-content: space-between;
    padding:5px 10px;

    @media (max-width:500px){
        width:350px;
    }

`

const ModalMessage = styled.div`
    font-size: 15px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;
    margin-right:40px;
    @media (max-width:500px){
        margin-right:20px;
    }
`

const CloseButtonSVG = styled.img`
    cursor:pointer;
    width:36px;
    height:36px;
    margin-right:5px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const BellIconContainer = styled.div`
    width: 36px;
    height: 36px;
    background: #E93636;
    display: flex;
    justify-content: center;
    border-radius:50%;
    cursor:pointer;
`

const BellIconImage = styled.img`
    height: 36px;
    width: 17px;
   
`;

export default ChannelDeactivateModalContent
