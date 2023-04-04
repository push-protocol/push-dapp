// React + Web3 Essentials
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';

// External Packages
import moment from 'moment';
import IconButton from '@mui/material/IconButton';
import { MdCheckCircle, MdClose, MdError } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useClickAway } from 'react-use';
import styled, { ThemeProvider, useTheme } from 'styled-components';

// Internal Compoonents
import { ModalInnerComponentType } from 'hooks/useModalBlur';
import { setUserChannelDetails } from 'redux/slices/adminSlice';
import { LOADER_SPINNER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { H2V2, ItemHV2, ItemVV2 } from './reusables/SharedStylingV2';
import { addresses, appConfig } from 'config';
import { useDeviceWidthCheck } from 'hooks';
import Globals, { device } from 'config/Globals';
import FaucetInfo from './FaucetInfo';
import { approvePushToken, getPushTokenApprovalAmount, mintPushToken } from 'helpers';
import { Button } from './SharedStyling';
import Spinner from './reusables/spinners/SpinnerUnit';
import VerifyLogo from '../assets/Vector.svg';

const DATE_FORMAT = 'DD MMM, YYYY';

const ChannelReactivateModalContent = ({ onConfirm, onClose, toastObject }: ModalInnerComponentType) => {
  const themes = useTheme();

  const { chainId, account, library } = useWeb3React();
  const dispatch = useDispatch();

  const {
    channelDetails,
    canVerify,
    aliasDetails: { isAliasVerified, aliasAddrFromContract },
  } = useSelector((state: any) => state.admin);
  const { CHANNEL_ACTIVE_STATE, CHANNNEL_DEACTIVATED_STATE } = useSelector((state: any) => state.channels);
  const [creationDate, setCreationDate] = React.useState('');
  let { channelState } = channelDetails;
  if (!channelState) channelState = channelDetails['activation_status'];
  const channelIsActive = channelState === CHANNEL_ACTIVE_STATE;
  const channelIsDeactivated = channelState === CHANNNEL_DEACTIVATED_STATE;

  const [isLoading, setIsLoading] = React.useState(false);
  const [pushDeposited, setPushDeposited] = useState(false);
  const [pushApprovalAmount, setPushApprovalAmount] = useState(0);

  const handleClose = () => !isLoading && onClose();

  // to close the modal upon a click on backdrop
  const containerRef = React.useRef(null);
  useClickAway(containerRef, () => handleClose());

  const CORE_CHAIN_ID = appConfig.coreContractChain;
  const onCoreNetwork = CORE_CHAIN_ID === chainId;
  const isMobile = useDeviceWidthCheck(600);

  useEffect(() => {
    if (!channelDetails || !onCoreNetwork) return;
    (async function () {
      const bn = channelDetails.channelStartBlock.toString();

      // using ethers jsonRpcProvider instead of library bcz channels are created on only core chain, that's why block can be fetched from that only
      const block = await new ethers.providers.JsonRpcProvider(appConfig.coreRPC).getBlock(+bn);
      const date = moment(block.timestamp * 1000); //convert from millisecs
      setCreationDate(date.format(DATE_FORMAT));
    })();
  }, [channelDetails]);

  useEffect(() => {
    if (!account || !library) return;

    (async function () {
      const pushTokenApprovalAmount = await getPushTokenApprovalAmount({
        address: account,
        provider: library,
        contractAddress: addresses.epnscore,
      });
      setPushApprovalAmount(parseInt(pushTokenApprovalAmount));
      const amountToBeDeposit = parseInt(pushTokenApprovalAmount);

      if (amountToBeDeposit >= 50 && amountToBeDeposit != 0) {
        setPushDeposited(true);
      } else {
        setPushDeposited(false);
      }
    })();
  }, [account, library]);

  // mint PUSH token
  const mintPushTokenHandler = async (noOfTokens: number) => {
    await mintPushToken({ noOfTokens, library, account });
  };

  const depositPush = async () => {
    setIsLoading(true);
    if (!library) return;
    const signer = library.getSigner(account);
    toastObject.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });
    try {
      const response = await approvePushToken({
        signer,
        contractAddress: addresses.epnscore,
        amount: 50 - pushApprovalAmount,
      });
      console.log('response', response);
      if (response) {
        setPushApprovalAmount(50);
        setPushDeposited(true);
        toastObject.showMessageToast({
          toastTitle: 'Success',
          toastMessage: 'Successfully approved Push!',
          toastType: 'SUCCESS',
          getToastIcon: (size) => (
            <MdCheckCircle
              size={size}
              color="green"
            />
          ),
        });
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      if (err.code == 'ACTION_REJECTED') {
        // EIP-1193 userRejectedRequest error
        toastObject.showMessageToast({
          toastTitle: 'Error',
          toastMessage: `User denied message signature.`,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
      } else {
        toastObject.showMessageToast({
          toastTitle: 'Error',
          toastMessage: `There was an error in approving PUSH Token`,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });

        console.log('Error --> %o', err);
        console.log({ err });
      }
    }
    setIsLoading(false);
  };

  const handleReactivateChannel = async () => {
    setIsLoading(true);
    try {
      const parsedFees = ethers.utils.parseUnits('50', 18);
      const tx = await onConfirm(parsedFees); // calling epnsWriteProvider.reactivateChannel()

      toastObject.showMessageToast({
        toastTitle: 'Reactivating channel',
        toastMessage: 'Reactivate channel.',
        toastType: 'SUCCESS',
        getToastIcon: (size) => (
          <MdCheckCircle
            size={size}
            color="green"
          />
        ),
      });
      await tx.wait();

      console.log('Transaction Mined!');
      toastObject.showMessageToast({
        toastTitle: 'Channel Reactivated',
        toastMessage: 'Channel has been reactivated. You can now send notifications from it',
        toastType: 'SUCCESS',
        getToastIcon: (size) => (
          <MdCheckCircle
            size={size}
            color="green"
          />
        ),
      });

      dispatch(
        setUserChannelDetails({
          ...channelDetails,
          channelState: CHANNEL_ACTIVE_STATE,
        })
      );

      onClose();
      setIsLoading(false);
    } catch (err: any) {
      console.log('Error reactivateChannel', { err });
      toastObject.showMessageToast({
        toastTitle: 'Transaction Failed',
        toastMessage: 'Channel reactivation failed.',
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider theme={themes}>
        <ModalContainer ref={containerRef}>
          <Header>
            <HeaderHeading>Reactivate Channel</HeaderHeading>
            <IconButton
              onClick={handleClose}
              style={{ padding: '0', marginRight: '0.5rem' }}
              sx={{ '&:hover': { backgroundColor: 'transparent' } }}
              children={
                <MdClose
                  size="1.5rem"
                  style={{
                    color: themes.modalIconColor,
                  }}
                />
              }
            />
          </Header>

          <AdaptiveMobileItemHV22
            justifyContent="flex-start"
            alignSelf="stretch"
          >
            <ImageSection src={channelDetails.icon}></ImageSection>

            <AdaptiveMobileItemVV2
              alignItems="flex-start"
              padding="5px 0px"
            >
              <ChannelName>
                {channelDetails.name}
                {canVerify && <VerifyImage src="/verify.png"></VerifyImage>}
              </ChannelName>

              <AdaptiveMobileItemVV2
                alignItems="flex-start"
                flex="initial"
                padding="5px 0px"
              >
                {(onCoreNetwork && aliasAddrFromContract && !isAliasVerified) ||
                (!onCoreNetwork && !isAliasVerified) ? (
                  <AliasStateText>Alias Network Setup Pending</AliasStateText>
                ) : (
                  <AdaptiveMobileItemHV2 justifyContent="flex-start">
                    <Subscribers>
                      <img
                        style={{ width: '15px' }}
                        src="/subcount.svg"
                        alt="subscount"
                      ></img>
                      <SubscribersCount>{channelDetails.subscriber_count}</SubscribersCount>
                    </Subscribers>
                    <ChanneStateText active={channelIsActive}>
                      {channelIsActive ? 'Active' : channelIsDeactivated ? 'Deactivated' : 'Blocked'}
                    </ChanneStateText>
                  </AdaptiveMobileItemHV2>
                )}

                {creationDate && <Date>Created {creationDate}</Date>}
              </AdaptiveMobileItemVV2>
            </AdaptiveMobileItemVV2>
          </AdaptiveMobileItemHV22>

          <Footer>
            <FooterPrimaryText>Channel reactivation fee</FooterPrimaryText>
            <ItemHV2 flex="0">
              {pushDeposited ? <TickImage src={VerifyLogo} /> : null}
              <ReactivateFee>{50} PUSH</ReactivateFee>
            </ItemHV2>
          </Footer>
          <FaucetInfo
            noOfPushTokensToCheck={50}
            containerProps={{ width: '100%' }}
            onMintPushToken={mintPushTokenHandler}
          />

          {isLoading ? (
            <VerifyingContainer>
              <Spinner
                size={42}
                color={Globals.COLORS.PRIMARY_PINK}
                type={LOADER_SPINNER_TYPE.PROCESSING}
              />
              <TransactionText>Verifying Transaction</TransactionText>
            </VerifyingContainer>
          ) : (
            <ButtonContainer>
              {pushApprovalAmount >= 50 ? (
                <ConfirmButton onClick={handleReactivateChannel}>Reactivate</ConfirmButton>
              ) : (
                <ConfirmButton onClick={depositPush}>Approve PUSH</ConfirmButton>
              )}
            </ButtonContainer>
          )}
        </ModalContainer>
    </ThemeProvider>
  );
};

const ModalContainer = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media ${device.mobileL} {
    padding: 0.5rem;
  }
  @media (${device.laptop}) {
    width: 50vw;
  }
  @media (${device.mobileL}) {
    width: 95vw;
  }
`;

const Header = styled(ItemHV2)`
  margin: 0.6rem 0rem 1.4rem 0rem;
  @media ${device.laptop} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  }
  /* @media ${device.mobileS} {
    margin: 0.5rem 0rem 1.2rem 0rem;
  } */
`;

const HeaderHeading = styled(H2V2)`
  color: ${(props) => props.theme.tooltipTopHeading};
  width: 90%;
  text-align: center;
  font-weight: 500;
  font-size: 1.5rem;

  @media ${device.laptop} {
    font-size: 1.2rem;
  }
  @media ${device.mobileL} {
    width: 85%;
  }
`;

const AdaptiveMobileItemVV2 = styled(ItemVV2)`
  @media (max-width: 767px) {
    align-items: center;
  }
`;

const AdaptiveMobileItemHV2 = styled(ItemHV2)`
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const AdaptiveMobileItemHV22 = styled(ItemHV2)`
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const ImageSection = styled.img`
  width: 128px;
  height: 128px;
  margin-right: 20px;
  border-radius: 32px;
  @media ${device.laptop} {
    width: 100px;
    height: 100px;
  }
  @media ${device.mobileL} {
    width: 90px;
    height: 90px;
    margin-right: 0px;
    border-radius: 20px;
  }
`;

const VerifyImage = styled.img`
  width: 20px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
`;

const Subscribers = styled.div`
  width: 58px;
  height: 26px;
  margin-bottom: 10px;
  background: #ffdbf0;
  color: #cf1c84;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 2px;
  @media ${device.laptop} {
    width: 52px;
    height: 22px;
  }
`;

const StateText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2px 8px;
  border-radius: 25px;
  height: 26px;
  background-color: pink;
  font-family: Strawford, Source Sans Pro;
  @media ${device.laptop} {
    padding: 1px 8px;
  }
`;

const ChanneStateText = styled(StateText)`
  color: #2dbd81;
  color: ${(props) => (props.active ? '#2DBD81' : 'red')};
  background-color: #c6efd1;
  margin-left: 10px;
  margin-bottom: 10px;
  ${(props) =>
    props.active &&
    `
        &::before {
            width:16px;
            height:16px;
            background: #2DBD81;
            border-radius: 50%;
            content: "";
            display: inline-flex;
            align-items: center;
            margin-right: 6px;
        }
    `}
`;

const AliasStateText = styled(StateText)`
  color: #e3b61c;
  background-color: #e9eec4;
  &::before {
    width: 16px;
    height: 16px;
    background: #e3b61c;
    border-radius: 50%;
    content: '';
    display: inline-flex;
    align-items: center;
    margin-right: 6px;
  }
`;

const SubscribersCount = styled.span`
  font-weight: 400;
  font-size: 14px;
`;

const Date = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 340px;
  color: #657795;
  margin: 10px 0;
  text-transform: none;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  @media ${device.laptop} {
    margin: 5px 0;
  }
  @media (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`;

const ChannelName = styled.div`
  display: flex;
  font-family: Strawford, Source Sans Pro;
  flex-direction: row;
  margin-right: 8px;
  font-weight: 500;
  font-size: 30px;
  line-height: 141%;
  color: ${(props) => props.theme.color};
  @media ${device.laptop} {
    font-size: 26px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 10px;
    font-size: 26px;
    margin-right: 0px;
    text-align: center;
  }
`;

const Footer = styled(ItemHV2)`
  background: ${(props) => props.theme.editFooterBg};
  border-radius: 20px;
  padding: 23px 32px;
  align-content: space-between;
  justify-content: space-between;
  grid-gap: 40px;
  transform: translateY(40px);

  @media (max-width: 600px) {
    padding: 16px;
  }
  @media ${device.mobileL} {
    flex-direction: column;
    justify-content: center;
    grid-gap: 10px;
    width: 90%;
  }
`;

const FooterPrimaryText = styled.p`
  margin: 0px;
  color: ${(props) => props.theme.editChannelPrimaryText};
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  @media ${device.mobileL} {
    width: 100%;
    text-align: center;
  }
`;

const TickImage = styled.img``;

const ReactivateFee = styled.p`
  margin: 0px 0px 0px 5px;
  color: #d53893;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  @media ${device.mobileL} {
    width: 100%;
    text-align: center;
  }
`;

const ButtonContainer = styled(ItemHV2)`
  justify-content: end;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`;

const ConfirmButton = styled(Button)`
  margin: 0 auto;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  border-radius: 15px;
  align-items: center;
  text-align: center;
  background: #cf1c84;
  color: #fff;
  padding: 16px 27px;
  width: 12rem;

  @media (min-width: 425px) and (max-width: 600px) {
    font-size: 15px;
    padding: 12px 12px;
    width: 8rem;
  }

  @media ${device.mobileL} {
    width: 80%;
  }
`;

const VerifyingContainer = styled(ItemVV2)`
  flex-direction: row;
  margin-top: 4.8rem;
  margin-bottom: 0.8rem;
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

export default ChannelReactivateModalContent;
