import { Image, Section } from 'components/SharedStyling';
import { ButtonV2, H2V2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import SnapModule from 'modules/snap/SnapModule';
import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import SnapExample from 'assets/PushSnaps/SnapExample.svg';
import { device } from 'config/Globals';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import InfoLogo from 'assets/PushSnaps/spam-icon.svg';
import { useAccount } from 'hooks';
import PushSnapConfigureModal from './PushSnapConfigureModal';
import useModalBlur, { MODAL_POSITION } from 'hooks/useModalBlur';
import AboutSnapModal from 'modules/snap/AboutSnapModal';

const PushSnapSettings = () => {
  const { account, provider } = useAccount();

  const theme = useTheme();
  const [walletConnected, setWalletConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addedAddress, setAddedAddress] = useState(false);

  const [snapInstalled, setSnapInstalled] = useState(false);
  const defaultSnapOrigin = `npm:@pushprotocol/snap`;

  async function getInstalledSnaps() {
    const installedSnaps = await window.ethereum.request({
      method: 'wallet_getSnaps',
    });
    console.debug('Snaps installed', installedSnaps);
    Object.keys(installedSnaps).forEach((snap) => {
      if (snap == 'npm:@pushprotocol/snap') {
        setSnapInstalled(true);
      }
    });
  }
  async function getWalletAddresses() {
    const result = await window.ethereum?.request({
      method: 'wallet_invokeSnap',
      params: {
        snapId: defaultSnapOrigin,
        request: { method: 'pushproto_getaddresses' },
      },
    });

    console.debug(account);
    console.debug(walletConnected);
    if (result.includes(account)) {
      setAddedAddress(true);
    } else {
      setAddedAddress(false);
    }
  }

  useEffect(() => {
    getInstalledSnaps();
    getWalletAddresses();
  }, [account, walletConnected]);

  async function connectSnap() {
    let snapId = defaultSnapOrigin,
      params = {};
    await window.ethereum?.request({
      method: 'wallet_requestSnaps',
      params: {
        [snapId]: params,
      },
    });
    console.info('Snap Installed');
  }

  async function connectToMetaMask() {
    setLoading(true);
    try {
      if (!snapInstalled) {
        await connectSnap();
        setSnapInstalled(true);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error', error);
    }
  }

  console.info('snapInstalled', snapInstalled);

  const InstallSnap = () => {
    const {
      isModalOpen: isMetamaskPushSnapOpen,
      showModal: showPushSnapAbout,
      ModalComponent: AboutPushSnapModalComponent,
    } = useModalBlur();
    return (
      <Container>
        <AboutPushSnapModalComponent
          InnerComponent={AboutSnapModal}
          modalPadding="0px"
          // InnerComponentProps={}
          modalPosition={MODAL_POSITION.ON_ROOT}
        />
        <ItemVV2>
          <Image
            src={SnapExample}
            width="276px"
            height="202px"
          />
        </ItemVV2>

        <ItemVV2 gap="24px">
          <ItemVV2 gap="12px">
            <ItemVV2>
              <H2V2
                fontSize="34px"
                fontWeight="500"
                color={theme.snapPrimaryText}
                letterSpacing="-1.02px"
              >
                Push Snap
              </H2V2>
              <SpanV2
                fontSize="12px"
                fontWeight="400"
                color={theme.modalIconColor}
              >
                powered by MetaMask
              </SpanV2>
            </ItemVV2>

            <ItemVV2>
              <SpanV2
                fontSize="14px"
                fontWeight="400"
                color={theme.snapSecondaryText}
              >
                You’re about to install Push Snap which allows you to receive notifications from Push directly on
                MetaMask!
              </SpanV2>
            </ItemVV2>
          </ItemVV2>

          <ItemVV2>
            {loading ? (
              <LoaderSpinner
                type={LOADER_TYPE.SEAMLESS}
                spinnerSize={44}
              />
            ) : (
              <ConnectButton onClick={() => connectToMetaMask()}>{!snapInstalled && 'Connect Snap'}</ConnectButton>
            )}
          </ItemVV2>

          <InfoDiv
            gap="7px"
            onClick={showPushSnapAbout}
          >
            <Image
              src={InfoLogo}
              width={16}
            />
            <SpanV2
              color={theme.modalIconColor}
              fontSize="14px"
              fontWeight="400"
            >
              About this Snap
            </SpanV2>
          </InfoDiv>
        </ItemVV2>
      </Container>
    );
  };

  return (
    <>
      {!snapInstalled ? (
        <InstallSnap />
      ) : (
        <>
          <SpanV2
            fontWeight="500"
            fontSize="22px"
            color={theme.modalMessageColor}
            flex="1"
            padding="0px 0px 0px 9px"
          >
            Snap Settings
          </SpanV2>
          <PushSnapConfigureModal />
        </>
      )}
    </>
  );
};

export default PushSnapSettings;

const Container = styled(Section)`
  width: 438px;
  height: 423px;
  border-radius: 32px;
  background: #fff;
  background: ${(props) => props.theme.default.bg};
  margin: auto;
  @media ${device.mobileL} {
    width: 330px;
  }
`;

const SnapButton = styled(ButtonV2)`
  height: 44px;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 500;
  line-height: 141%;
  letter-spacing: -0.03em;
  color: #ffffff;
  flex: none;
  cursor: pointer;

  & > div {
    display: block;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ConnectButton = styled(SnapButton)`
  min-width: 230px;
  padding: 16px 24px;
  background: #d53a94;
  border: 1px solid #d53a94;
`;

const InfoDiv = styled(ItemHV2)`
  cursor: pointer;
`;
