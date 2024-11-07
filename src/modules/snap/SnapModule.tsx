// React + Web3 Essentials
import { useEffect, useState, useContext } from 'react';

// External Packages
import { useNavigate } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';

// Internal Components
import SnapFAQModal from 'components/PushSnap/SnapFAQModal';
import SnapKnowledgeModal from 'components/PushSnap/SnapKnowledgeModal';
import { ButtonV2, H2V2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { AppContext } from 'contexts/AppContext';
import { useAccount } from 'hooks';
import useModalBlur, { MODAL_POSITION } from 'hooks/useModalBlur';
import { Image, Section } from '../../primaries/SharedStyling';
import { Alert, Box, Button } from 'blocks';

// Internal Configs
import ActiveIcon from 'assets/snap/ActiveIcon.svg';
import BellRinging from 'assets/snap/BellRinging.svg';
import GasPump from 'assets/snap/GasPump.svg';
import GearIcon from 'assets/snap/GearIcon.svg?react';
import NotificationLogo from 'assets/snap/Notification.svg';
import PushMetamaskLogo from 'assets/snap/PushMetamaskLogo.svg';
import SnapExample from 'assets/snap/SnapExample.svg';
import InfoLogo from 'assets/snap/spam-icon.svg';
import GLOBALS, { device, globalsMargin } from 'config/Globals';
import AboutSnapModal from './AboutSnapModal';
import Metamask from 'assets/snap/metamasksnap.svg?react';

const SnapModule = ({ route }) => {
  const [loading, setLoading] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [addedAddress, setAddedAddress] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { showMetamaskPushSnap, setSnapState, setSnapInstalled, snapInstalled, connectWallet } = useContext(AppContext);

  const { account, provider, isWalletConnected } = useAccount();

  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    getInstalledSnaps();
    getWalletAddresses();
  }, [account, walletConnected, snapInstalled]);

  async function getInstalledSnaps() {
    if (!isWalletConnected) return
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

    console.debug(account);
    console.debug(walletConnected);
    if (result.includes(account)) {
      setAddedAddress(true);
      setWalletConnected(true);
    } else {
      setAddedAddress(false);
    }
  }

  async function connectSnap() {
    if (!window.ethereum) return;
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
    if (!isWalletConnected) {
      setErrorMessage('Connect your metamask wallet to install Snap');
      return;
    }
    setErrorMessage('')
    setLoading(true);
    try {
      if (!snapInstalled) {
        await connectSnap();
        getInstalledSnaps();
      } else {
        await addwalletAddress();
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error', error);
    }
  }

  async function getSignature(account: string) {
    const signer = provider.getSigner(account);
    const signature = await signer.signMessage(`Add address ${account} to receive notifications through Push Snap`);
    return signature;
  }

  async function addwalletAddress() {
    try {
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
          console.debug('Added', account);
          setWalletConnected(true);
        }
      } else {
        console.error('Signature Validation Failed');
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  }

  //About Snap Info Modal
  const {
    isModalOpen: isMetamaskPushSnapOpen,
    showModal: showPushSnapAbout,
    ModalComponent: AboutPushSnapModalComponent,
  } = useModalBlur();

  const {
    isModalOpen: isSnapFAQModalOpen,
    showModal: showSnapFAQModal,
    ModalComponent: PushSnapFAQModalComponent,
  } = useModalBlur();

  const {
    isModalOpen: isSnapKnowledgeModalOpen,
    showModal: showSnapKnowledgeModal,
    ModalComponent: SnapKnowledgeModalComponent,
  } = useModalBlur();

  const handleSettingsClick = () => {
    setSnapState(3);
    showMetamaskPushSnap();
  };

  useEffect(() => {
    if (route == 'faq') {
      showSnapFAQModal();
    }

    if (route == 'knowledge') {
      showSnapKnowledgeModal();
    }
  }, [route]);

  return (
    <>
      <Container>
        <AboutPushSnapModalComponent
          InnerComponent={AboutSnapModal}
          modalPadding="0px"
          // InnerComponentProps={}
          modalPosition={MODAL_POSITION.ON_PARENT}
        />

        <PushSnapFAQModalComponent
          InnerComponent={SnapFAQModal}
          modalPadding="0px"
          // InnerComponentProps={}
          modalPosition={MODAL_POSITION.ON_PARENT}
        />

        <SnapKnowledgeModalComponent
          InnerComponent={SnapKnowledgeModal}
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
                {walletConnected || addedAddress ? (
                  <>
                    <ItemVV2
                      gap="24px"
                      margin="12px 0"
                    >
                      <ItemHV2 alignItems="baseline">
                        <Image
                          src={BellRinging}
                          height="32px"
                          width="auto"
                        />
                        <ItemVV2 margin="0 0 0 16px">
                          <PrimaryText>Subscribe for Notifications</PrimaryText>
                          <SecondaryText>
                            Subscribe to protocols that you want notification from. You can see all{' '}
                            <ChannelSpan onClick={() => navigate('/channels')}>
                              protocol channels and subscribe to them from here.
                            </ChannelSpan>
                          </SecondaryText>
                        </ItemVV2>
                      </ItemHV2>

                      <ItemHV2 alignItems="baseline">
                        <Image
                          src={GasPump}
                          height="32px"
                          width="auto"
                        />
                        <ItemVV2 margin="0 0 0 16px">
                          <PrimaryText>Gasless Opt-ins</PrimaryText>
                          <SecondaryText>
                            Subscribing / Opting-in to a channel is gasless and completely free.
                          </SecondaryText>
                        </ItemVV2>
                      </ItemHV2>

                      <ItemHV2 alignItems="baseline">
                        <Image
                          src={NotificationLogo}
                          height="32px"
                          width="auto"
                        />
                        <ItemVV2 margin="0 0 0 16px">
                          <PrimaryText>Notifications directly in MetaMask</PrimaryText>
                          <SecondaryText>
                            Once subscribed, the channels can send you notifications directly in your MetaMask.
                          </SecondaryText>
                        </ItemVV2>
                      </ItemHV2>
                    </ItemVV2>
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

            {errorMessage && (
              <Alert
                variant="error"
                heading={errorMessage}
                showIcon
              />
            )}

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
              <Box
                gap="spacing-sm"
                display="flex"
                flexDirection="column"
                width='-webkit-fill-available'
              >
                {loading && !snapInstalled ? (
                  <LoaderSpinner
                    type={LOADER_TYPE.SEAMLESS}
                    spinnerSize={44}
                  />
                ) : (
                  <Button
                    disabled={!snapInstalled ? false : true}
                    onClick={() => connectToMetaMask()}
                    variant="primary"
                  >
                    {!snapInstalled ? 'Step 1: Install Snap' : 'Step 1: Completed'}
                  </Button>
                )}
                {loading && snapInstalled ? (
                  <LoaderSpinner
                    type={LOADER_TYPE.SEAMLESS}
                    spinnerSize={44}
                  />
                ) : (
                  <Button
                    disabled={snapInstalled ? false : true}
                    onClick={() => connectToMetaMask()}
                    trailingIcon={<Metamask />}
                  >
                    Step 2: Sign In with Metamask
                  </Button>
                )}
              </Box>
            )}

            {walletConnected || addedAddress ? (
              <ButtonContainer gap="12px">
                <Button
                  onClick={handleSettingsClick}
                  variant="outline"
                  leadingIcon={<GearIcon />}
                >
                  Settings
                </Button>
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
        <ItemVV2 flex="none">
          <SpanV2
            fontSize="14px"
            fontWeight="400"
            color="#657795"
          >
            Have a question? Check out our{' '}
            <SpanV2
              fontWeight="500"
              cursor="pointer"
              onClick={() => navigate('/snap/faq')}
            >
              FAQs{' '}
            </SpanV2>
            or{' '}
            <SpanV2
              fontWeight="500"
              cursor="pointer"
              onClick={() => navigate('/snap/knowledge')}
            >
              Knowledgebase.
            </SpanV2>
          </SpanV2>
        </ItemVV2>
      </Container>
    </>
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
    width: calc(
      100% - ${globalsMargin.MINI_MODULES.TABLET.RIGHT} - ${globalsMargin.MINI_MODULES.TABLET.LEFT} -
        ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }

  @media ${device.mobileL} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${globalsMargin.MINI_MODULES.MOBILE.RIGHT} - ${globalsMargin.MINI_MODULES.MOBILE.LEFT} -
        ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
    );
  }
`;

const SubContainer = styled(Section)`
  width: 438px;
  height: 423px;
  padding: 24px;
  border-radius: 32px;
  background: #fff;
  background: ${(props) => props.theme.default.bg};
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  margin: 24px auto;
  @media ${device.mobileL} {
    width: 330px;
  }
`;

const PrimaryText = styled.p`
  margin: 0px;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  align-self: baseline;
  color: ${(props) => props.theme.snapPrimaryText};
`;

const SecondaryText = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${(props) => props.theme.snapSecondaryText};
  text-align: left;
`;

const ChannelSpan = styled(SpanV2)`
  font-weight: 500;
  color: #d53a94;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const InfoDiv = styled(ItemHV2)`
  cursor: pointer;
`;

const ButtonContainer = styled(ItemHV2)`
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;
