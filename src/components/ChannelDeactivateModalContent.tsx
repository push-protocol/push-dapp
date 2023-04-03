// React + Web3 Essentials
import React from 'react';

// External Packages
import IconButton from '@mui/material/IconButton';
import { MdError, MdHighlightOff } from 'react-icons/md';
import { RiNotificationOffLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useClickAway } from 'react-use';
import styled, { ThemeProvider, useTheme } from 'styled-components';

// Internal Compoonents
import { ModalInnerComponentType } from 'hooks/useModalBlur';
import { setUserChannelDetails } from 'redux/slices/adminSlice';
import LoaderSpinner, { LOADER_SPINNER_TYPE, LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import CloseButtonSvg from '../assets/XCircle.svg';
import BellIconSvg from '../assets/BellIcon.svg';
import { ItemVV2 } from './reusables/SharedStylingV2';

//Internal Configs
import GLOBALS from 'config/Globals';
import Spinner from './reusables/spinners/SpinnerUnit';

const ChannelDeactivateModalContent = ({ onConfirm, onClose, toastObject }: ModalInnerComponentType) => {
  const themes = useTheme();

  const dispatch = useDispatch();
  const { channelDetails } = useSelector((state: any) => state.admin);
  const { CHANNNEL_DEACTIVATED_STATE } = useSelector((state: any) => state.channels);

  const [isLoading, setIsLoading] = React.useState(false);

  const handleClose = () => !isLoading && onClose();

  // to close the modal upon a click on backdrop
  const containerRef = React.useRef(null);
  useClickAway(containerRef, () => handleClose());

  const handleConfirm = () => {
    setIsLoading(true);

    onConfirm()
      .then(async (tx: any) => {
        console.log(tx);
        console.log('Transaction Sent!');

        toastObject.showMessageToast({
          toastTitle: 'Channel Deactivated',
          toastMessage: 'Please Activate Channel to Send Notifications from it',
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });

        await tx.wait(1);
        console.log('Transaction Mined!');
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
        console.log('!!!Error deactivateChannel() --> %o', err);
        console.log({
          err,
        });

        toastObject.showMessageToast({
          toastTitle: 'Transaction Failed',
          toastMessage: 'Channel deactivation failed.',
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });

        setIsLoading(false);
      });
  };

  return (
    <ThemeProvider theme={themes}>
        <ModalContainer ref={containerRef}>
          {isLoading ? (
            <VerifyingContainer>
              <Spinner
                size={42}
                color={GLOBALS.COLORS.PRIMARY_PINK}
                type={LOADER_SPINNER_TYPE.PROCESSING}
              />
              <TransactionText>Verifying</TransactionText>
            </VerifyingContainer>
          ) : (
            <>
              <ModalMessage
                style={{
                  color: themes.modalMessageColor,
                }}
              >
                Are you sure you want to deactivate the channel? You will no longer be able to send notifications from
                it.
              </ModalMessage>
              <ButtonContainer>
                <CloseButtonSVG
                  src={CloseButtonSvg}
                  onClick={handleClose}
                />

                <BellIconContainer onClick={handleConfirm}>
                  <BellIconImage src={BellIconSvg} />
                </BellIconContainer>
              </ButtonContainer>
            </>
          )}
        </ModalContainer>
    </ThemeProvider>
  );
};

const ModalContainer = styled.div`
  width: 446px;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${(props) => props.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;

  @media (max-width: 500px) {
    width: 350px;
  }
  @media (max-width: 400px) {
    width: 300px;
    flex-direction: column;
  }
`;

const VerifyingContainer = styled(ItemVV2)`
  flex-direction: row;
  //   margin-top:33px;
`;
const TransactionText = styled.p`
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${(props) => props.theme.editChannelPrimaryText};
`;

const ModalMessage = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  margin-right: 40px;
  @media (max-width: 500px) {
    margin-right: 20px;
  }
  @media (max-width: 400px) {
    margin: 14px 6px 24px 6px;
  }
`;

const CloseButtonSVG = styled.img`
  cursor: pointer;
  width: 36px;
  height: 36px;
  margin-right: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 400px) {
    align-self: end;
  }
`;

const BellIconContainer = styled.div`
  width: 36px;
  height: 36px;
  background: #e93636;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;

const BellIconImage = styled.img`
  height: 36px;
  width: 17px;
`;

export default ChannelDeactivateModalContent;
