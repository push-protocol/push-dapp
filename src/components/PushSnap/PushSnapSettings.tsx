import { useState, useEffect } from 'react';
import SnapExample from 'assets/snap/SnapExample.svg';
import InfoLogo from 'assets/snap/spam-icon.svg';
import { Image, Section } from 'components/SharedStyling';
import { H2V2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { device } from 'config/Globals';
import { useAccount } from 'hooks';
import useModalBlur, { MODAL_POSITION } from 'hooks/useModalBlur';
import AboutSnapModal from 'modules/snap/AboutSnapModal';
import styled, { useTheme } from 'styled-components';
import PushSnapConfigureModal from './PushSnapConfigureModal';
import { Alert, Box, Button, Text } from 'blocks';
import { SnoozeDurationType } from 'types';

const PushSnapSettings = () => {
  const { account, isWalletConnected, connect } = useAccount();

  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [addedAddress, setAddedAddress] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [snoozeDuration, setSnoozeDuration] = useState<SnoozeDurationType>({
    enabled: false,
    hrsLeft: 0,
  });

  const [snapInstalled, setSnapInstalled] = useState(false);
  const defaultSnapOrigin = `npm:@pushprotocol/snap`;

  async function getInstalledSnaps() {
    if (!isWalletConnected) {
      setErrorMessage("Connect your metamask wallet to install Snap");
      setSnapInstalled(false);
      return
    }
    setErrorMessage('')
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
    if (result.includes(account)) {
      setAddedAddress(true);
    } else {
      setAddedAddress(false);
    }
  }

  useEffect(() => {
    getInstalledSnaps();
    getWalletAddresses();
  }, [account, isWalletConnected, snapInstalled]);

  async function connectSnap() {
    if (!isWalletConnected) return;
    let snapId = defaultSnapOrigin,
      params = {};
    await window.ethereum?.request({
      method: 'wallet_requestSnaps',
      params: {
        [snapId]: params,
      },
    });
    console.info('Snap Installed');
    setSnapInstalled(true);
  }

  async function connectToMetaMask() {
    if (!isWalletConnected) {
      setErrorMessage('Connect your metamask wallet to install Snap');
      return;
    }
    setErrorMessage('')
    setLoading(true);
    try {
      if (!isWalletConnected) await connect();
      if (!snapInstalled) {
        await connectSnap();
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error', error);
    }
  }

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
                letterSpacing="normal"
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

          {errorMessage && (
            <Alert
              variant="error"
              heading={errorMessage}
              showIcon
            />
          )}

          <ItemVV2>
            {loading ? (
              <LoaderSpinner
                type={LOADER_TYPE.SEAMLESS}
                spinnerSize={44}
              />
            ) : (
              <Button onClick={() => connectToMetaMask()}>{!snapInstalled && 'Connect Snap'}</Button>
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
          <Box
            display='flex'
            flexDirection='column'
            padding='spacing-none spacing-none spacing-none spacing-xxs'
          >
            <Text variant='h4-semibold'>Push Snap Settings</Text>
            <PushSnapConfigureModal
              snoozeDuration={snoozeDuration}
              setSnoozeDuration={setSnoozeDuration}
            />
          </Box>

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

const InfoDiv = styled(ItemHV2)`
  cursor: pointer;
`;
