// React + Web3 Essentials
import React, { useEffect, useState } from 'react';

// External Packages
import ReactGA from 'react-ga';
import styled, { useTheme } from 'styled-components';

// Internal Components
import { ButtonV2, H2V2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { H2, Image, Item, Section, Span } from '../../primaries/SharedStyling';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import Info from 'segments/Info';
import { useAccount } from 'hooks';

// Internal Configs
import GLOBALS, { device, globalsMargin } from 'config/Globals';
import useModalBlur, { MODAL_POSITION } from 'hooks/useModalBlur';
import SnapExample from 'assets/PushSnaps/SnapExample.svg';
import InfoLogo from 'assets/PushSnaps/spam-icon.svg';
import PushMetamaskLogo from 'assets/PushSnaps/PushMetamaskLogo.svg';
import ActiveIcon from 'assets/PushSnaps/ActiveIcon.svg';
import { ReactComponent as Gear } from 'assets/PushSnaps/Gear.svg';

import PushSnapModal from './PushSnapModal';
import AboutSnapModal from './AboutSnapModal';
import { AppContext } from 'contexts/AppContext';

const SnapModule = () => {
  const [loading, setLoading] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [snapInstalled, setSnapInstalled] = useState(false);
  const [addedAddress, setAddedAddress] = useState(false);

  const { showMetamaskPushSnap, setSnapState } = React.useContext(AppContext);

  const { account, provider } = useAccount();

  useEffect(() => {
    getInstalledSnaps();
    getWalletAddresses();
  }, [account, walletConnected]);

  async function getInstalledSnaps() {
    const installedSnaps = await window.ethereum.request({
      method: 'wallet_getSnaps',
    });
    Object.keys(installedSnaps).forEach((snap) => {
      if (snap == 'npm:@pushprotocol/snap') {
        setSnapInstalled(true);
      }
    });
  }

  const defaultSnapOrigin = `npm:@pushprotocol/snap`;

  async function getWalletAddresses() {
    const result = await window.ethereum?.request({
      method: 'wallet_invokeSnap',
      params: {
        snapId: defaultSnapOrigin,
        request: { method: 'pushproto_getaddresses' },
      },
    });

    console.log(account);
    console.log(walletConnected);
    if (result.includes(account)) {
      setAddedAddress(true);
    } else {
      setAddedAddress(false);
    }
  }

  async function connectSnap() {
    let snapId = defaultSnapOrigin,
      params = {};
    await window.ethereum?.request({
      method: 'wallet_requestSnaps',
      params: {
        [snapId]: params,
      },
    });
    console.log('Snap Installed');
  }

  async function connectToMetaMask() {
    setLoading(true);
    try {
      if (!snapInstalled) {
        await connectSnap();
        setSnapInstalled(true);
      } else {
        await addwalletAddress();
        setWalletConnected(true);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('Error', error);
    }
  }

  async function getSignature(account: string) {
    const signer = provider.getSigner(account);
    const signature = await signer.signMessage(`Add address ${account} to receive notifications through Push Snap`);
    return signature;
  }

  async function addwalletAddress() {
    const signatureResult = await getSignature(account);
    if (signatureResult) {
      if (account) {
        await window.ethereum?.request({
          method: 'wallet_invokeSnap',
          params: {
            snapId: defaultSnapOrigin,
            request: {
              method: 'pushproto_addaddress',
              params: { address: account },
            },
          },
        });
        console.log('Added', account);
      }
    } else {
      console.log('Signature Validation Failed');
    }
  }

  //About Snap Info Modal
  const {
    isModalOpen: isMetamaskPushSnapOpen,
    showModal: showPushSnapAbout,
    ModalComponent: AboutPushSnapModalComponent,
  } = useModalBlur();

  const handleSettingsClick = () => {
    setSnapState(3);
    showMetamaskPushSnap();
  };

  const theme = useTheme();

  return (
    <Container>
      <AboutPushSnapModalComponent
        InnerComponent={AboutSnapModal}
        modalPadding="0px"
        // InnerComponentProps={}
        modalPosition={MODAL_POSITION.ON_PARENT}
      />

      <Image
        src={PushMetamaskLogo}
        width="152px"
        height="55px"
      />

      <SubContainer>
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
              {walletConnected ? (
                <>
                  <SpanV2
                    fontSize="14px"
                    fontWeight="400"
                    color={theme.snapSecondaryText}
                  >
                    Get started by opting in to channels on Push.{' '}
                  </SpanV2>
                  <SpanV2
                    fontSize="14px"
                    fontWeight="400"
                    color={theme.snapSecondaryText}
                  >
                    Once you opt-in you will receive notifications on MetaMask.
                  </SpanV2>
                </>
              ) : (
                <SpanV2
                  fontSize="14px"
                  fontWeight="400"
                  color={theme.snapSecondaryText}
                >
                  You’re about to install Push Snap which allows you to receive notifications from Push directly on
                  MetaMask!
                </SpanV2>
              )}
            </ItemVV2>
          </ItemVV2>

          {walletConnected || addedAddress ? (
            <ItemHV2 gap="8px">
              <Image
                src={ActiveIcon}
                width="10px"
                height="10px"
              />
              <SpanV2
                color="#657795"
                fontSize="14px"
                fontWeight="400"
              >
                Connected to Push Snap
              </SpanV2>
            </ItemHV2>
          ) : (
            <ItemVV2>
              {loading ? (
                <LoaderSpinner
                  type={LOADER_TYPE.SEAMLESS}
                  spinnerSize={44}
                />
              ) : (
                <ConnectButton onClick={() => connectToMetaMask()}>
                  {!snapInstalled ? 'Connect Snap' : 'Connect Using MetaMask '}
                </ConnectButton>
              )}
            </ItemVV2>
          )}

          {walletConnected || addedAddress ? (
            <ButtonContainer gap="12px" >

              <SettingsButton onClick={handleSettingsClick}>
                <Gear
                  height="20px"
                  width="20px"
                />
                Settings
              </SettingsButton>
              <FilledButton onClick={() => (window.location.href = '/channels')}>Get Started</FilledButton>
            </ButtonContainer>
          ) : (
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
          )}
        </ItemVV2>
      </SubContainer>
    </Container>
  );
};

export default SnapModule;

const Container = styled(Section)`
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${globalsMargin.MINI_MODULES.DESKTOP.RIGHT} - ${globalsMargin.MINI_MODULES.DESKTOP.LEFT} -
      ${GLOBALS.ADJUSTMENTS.PADDING.BIG} - ${GLOBALS.ADJUSTMENTS.PADDING.BIG}
  );
  padding: ${GLOBALS.ADJUSTMENTS.PADDING.BIG};
  position: relative;
  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(100% - ${globalsMargin.MINI_MODULES.TABLET.RIGHT} - ${globalsMargin.MINI_MODULES.TABLET.LEFT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT});
  }
    
  @media ${device.mobileL} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(100% - ${globalsMargin.MINI_MODULES.MOBILE.RIGHT} - ${globalsMargin.MINI_MODULES.MOBILE.LEFT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT});
  }
`;

const SubContainer = styled(Section)`
  width: 438px;
  height: 423px;
  padding: 48px 24px;
  border-radius: 32px;
  background: #fff;
  background: ${(props) => props.theme.default.bg};
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  margin: 24px auto;
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

const SettingsButton = styled(SnapButton)`
  flex-direction: row;
  color: ${(props) => props.theme.default.secondaryColor};
  text-align: center;
  width: 135px;
  padding: 16px 24px;
  border: 1px solid ${(props)=>props.theme.snapBorderColor};
  background: ${(props) => props.theme.default.bg};
  gap: 4px;

  @media ${device.mobileL} {
    min-width: 246px;
  }
`;

const FilledButton = styled(SnapButton)`
  width: 135px;
  padding: 16px 24px;
  background: #d53a94;

  @media ${device.mobileL} {
   min-width: 246px;
  }
`;

const InfoDiv = styled(ItemHV2)`
  cursor: pointer;
`;

const ButtonContainer = styled(ItemHV2)`
@media ${device.mobileL} {
  flex-direction:column;
}
`;
