// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Internal Compoonents
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { Button } from 'components/SharedStyling';
import PushLogoLight from 'assets/pushLight.svg';
import PushLogoDark from 'assets/pushDark.svg';
import HandTap from 'assets/PushSnaps/HandTap.svg';
import WalletLogo from 'assets/PushSnaps/Wallet.svg';
import NotificationLogo from 'assets/PushSnaps/Notification.svg';
import Metamask from 'assets/PushSnaps/metamasksnap.svg';

const SnapInformationModal = ({
  handleCloseModal
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const defaultSnapOrigin = 'npm:@pushprotocol/snap';

  const connectSnap = async (snapId = defaultSnapOrigin, params = {}) => {
    await window.ethereum?.request({
      method: 'wallet_requestSnaps',
      params: {
        [snapId]: params,
      },
    });
  };

  const installSnap = async () => {

    handleCloseModal();
    navigate('/snap');

    // await connectSnap();
    // const res = await window.ethereum?.request({
    //   method: 'wallet_invokeSnap',
    //   params: {
    //     snapId: defaultSnapOrigin,
    //     request: { method: 'pushproto_welcome' },
    //   },
    // });

    // if (res) {
    //     window.open("/snap", '_self');
    // }
  };

  return (
    <Container>
      <ItemHV2 margin="0 0 23px 0">
        <Image
          src={theme.scheme == 'light' ? PushLogoLight : PushLogoDark}
          alt="PushIcon"
          height="37px"
          width="95px"
        />
      </ItemHV2>

      <SpanV2
        fontSize="22px"
        fontWeight="500"
        letterSpacing="-0.44px"
        color={theme.snapPrimaryText}
      >
        Connect to Metamask Push Snap
      </SpanV2>

      <ItemVV2
        gap="24px"
        margin="32px 0"
      >
        <ItemHV2 alignItems="baseline">
          <Image
            src={NotificationLogo}
            height="32px"
          />
          <ItemVV2 margin="0 0 0 16px">
            <PrimaryText>Notifications</PrimaryText>
            <SecondaryText>Get notified by your favourite channels using Push Snap.</SecondaryText>
          </ItemVV2>
        </ItemHV2>

        <ItemHV2 alignItems="baseline">
          <Image
            src={WalletLogo}
            height="32px"
          />
          <ItemVV2 margin="0 0 0 16px">
            <PrimaryText>Address Selection</PrimaryText>
            <SecondaryText>Add or remove your wallet preferred wallet addresses for notifications.</SecondaryText>
          </ItemVV2>
        </ItemHV2>

        <ItemHV2 alignItems="baseline">
          <Image
            src={HandTap}
            height="32px"
          />
          <ItemVV2 margin="0 0 0 16px">
            <PrimaryText>Customize Notification Pop-ups</PrimaryText>
            <SecondaryText>Snooze popup notifications as per your convenience.</SecondaryText>
          </ItemVV2>
        </ItemHV2>
      </ItemVV2>

      <ItemVV2>
        <InstallButton onClick={()=>installSnap()}>
          <Image
            src={Metamask}
            width="15px"
            alt="Metamask"
          />
          <SpanV2
            margin="0 0 0 5px"
            fontSize="14px"
            fontWeight="500"
          >
            Install Snap
          </SpanV2>
        </InstallButton>
      </ItemVV2>
    </Container>
  );
};

export default SnapInformationModal;

const Container = styled(ItemVV2)`
  padding: 0px 9px 12px 9px;
`;
const Image = styled.img`
  // height:100px;
  // width:100px;
`;

const PrimaryText = styled.p`
  margin: 0px;
  font-size: 18px;
  font-weight: 500;
  align-self: baseline;
  color:${(props)=>props.theme.snapPrimaryText};
`;

const SecondaryText = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color:${(props)=>props.theme.snapSecondaryText};
  text-align: left;
`;

const InstallButton = styled(Button)`
  width: fit-content;
  min-width: 102px;
  background: #d53a94;
  color: #fff;
  z-index: 0;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: normal;
  border-radius: 8px;
  padding: 14px;
`;
