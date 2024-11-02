// React + Web3 Essentials
import { useEffect } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import AppStoreQRCode from 'assets/snap/AppStoreQRCode.svg';
import AppleIcon from 'assets/snap/AppleIcon.svg';
import PlayStore from 'assets/snap/PlayStore.svg';
import PlayStoreQRCode from 'assets/snap/PlayStoreQRCode.svg';
import PushIcon from 'assets/snap/PushIcon.svg';
import UDIcon from 'assets/snap/UDIcon.svg';
import VersoIcon from 'assets/snap/VersoIcon.svg';
import Metamask from 'assets/snap/metamasksnap.svg';
import { Button } from 'blocks';
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { A } from 'primaries/SharedStyling';
import { useAccount } from 'hooks';

const InstallPushSnapModal = ({ setSnapState, configure, setConfigure }) => {
  const theme = useTheme();
  const { isWalletConnected } = useAccount();

  useEffect(() => {
    getInstalledSnaps();
  }, [configure]);

  async function getInstalledSnaps() {
    if (!isWalletConnected) return
    const installedSnaps = await window.ethereum.request({
      method: 'wallet_getSnaps',
    });
    Object.keys(installedSnaps).forEach((snap) => {
      if (snap == 'npm:@pushprotocol/snap') {
        setConfigure(true);
      }
    });
  }

  return (
    <ItemVV2
      margin="30px 0 20px 0"
      gap="14px"
    >
      <SnapContainer>
        <SnapInner>
          <Logo
            src={Metamask}
            alt="Metamask"
          />
          <SpanV2
            fontSize="16px"
            fontWeight="400"
            color={theme.modalMessageColor}
          >
            Push Snaps
          </SpanV2>
        </SnapInner>
        {configure ? (
          <Button
            size="small"
            onClick={() => {
              setSnapState(3);
              // navigate('/snap')
            }}
          >
            Configure
          </Button>
        ) : (
          <Button
            onClick={() => setSnapState(2)}
            size="small"
          >
            Install
          </Button>
        )}
      </SnapContainer>
      <SnapContainer>
        <SnapInner>
          <Logo
            src={PushIcon}
            alt="Push Icon"
          />
          <SpanV2
            fontSize="16px"
            fontWeight="400"
            color={theme.modalMessageColor}
          >
            Push Browser Extension
          </SpanV2>
        </SnapInner>
        <a
          href="https://chromewebstore.google.com/detail/push-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg"
          target="_blank"
        >
          <Button size="small">Install</Button>
        </a>
      </SnapContainer>
      <SnapContainer>
        <SnapInner>
          <Logo
            src={VersoIcon}
            alt="Verso Icon"
          />
          <SpanV2
            fontSize="16px"
            fontWeight="400"
            color={theme.modalMessageColor}
          >
            Verso Wallet
          </SpanV2>
        </SnapInner>
        <SnapInner>
          <a
            href="https://apps.apple.com/ng/app/verso-wallet-crypto-nft/id1539304605"
            target="_blank"
          >
            <Button
              iconOnly
              variant="tertiary"
              size="small"
              trailingIcon={
                <Image
                  src={AppleIcon}
                  alt="App store"
                />
              }
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.btuprotocol.btu_wallet"
            target="_blank"
          >
            <Button
              iconOnly
              variant="tertiary"
              size="small"
              trailingIcon={
                <Image
                  src={PlayStore}
                  alt="Play store"
                />
              }
            />
          </a>
        </SnapInner>
      </SnapContainer>
      <SnapContainer>
        <SnapInner>
          <Logo
            src={UDIcon}
            alt="UD Icon"
          />
          <SpanV2
            fontSize="16px"
            fontWeight="400"
            color={theme.modalMessageColor}
          >
            Unstoppable Domains
          </SpanV2>
        </SnapInner>
        <SnapInner>
          <a
            href="https://apps.apple.com/nz/app/unstoppable-domains/id1544748602"
            target="_blank"
          >
            <Button
              iconOnly
              variant="tertiary"
              size="small"
              trailingIcon={
                <Image
                  src={AppleIcon}
                  alt="App store"
                />
              }
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.unstoppabledomains.manager&hl=en&gl=US"
            target="_blank"
          >
            <Button
              iconOnly
              variant="tertiary"
              size="small"
              trailingIcon={
                <Image
                  src={PlayStore}
                  alt="Play store"
                />
              }
            />
          </a>
        </SnapInner>
      </SnapContainer>

      <ItemHV2 gap="14px">
        <QRCodeContainer>
          <Image
            src={AppStoreQRCode}
            alt="App Store QR Code"
            width="106px"
          />
          <a
            href="https://apps.apple.com/app/ethereum-push-service-epns/id1528614910"
            target="_blank"
          >
            <DownloadContainer>
              <Image
                src={AppleIcon}
                alt="App store"
              />
              <DownloadInner>
                <SpanV2
                  fontSize="8px"
                  fontWeight="500"
                  color="#FFF"
                >
                  Download on the
                </SpanV2>
                <SpanV2
                  fontSize="14px"
                  fontWeight="500"
                  color="#FFF"
                >
                  App Store
                </SpanV2>
              </DownloadInner>
            </DownloadContainer>
          </a>
        </QRCodeContainer>

        <QRCodeContainer>
          <Image
            src={PlayStoreQRCode}
            alt="App Store QR Code"
            width="106px"
          />

          <A
            href="https://play.google.com/store/apps/details?id=io.epns.epns"
            target="_blank"
          >
            <DownloadContainer>
              <Image
                src={PlayStore}
                alt="App store"
              />
              <DownloadInner>
                <SpanV2
                  fontSize="8px"
                  fontWeight="500"
                  color="#FFF"
                  textAlign="left"
                >
                  Get it on
                </SpanV2>
                <SpanV2
                  fontSize="14px"
                  fontWeight="500"
                  color="#FFF"
                >
                  Google Play
                </SpanV2>
              </DownloadInner>
            </DownloadContainer>
          </A>
        </QRCodeContainer>
      </ItemHV2>
    </ItemVV2>
  );
};

export default InstallPushSnapModal;

const SnapContainer = styled(ItemHV2)`
  border-radius: 14px;
  padding: 7px 14px;
  background: ${(props) => props.theme.snapUIBackground};
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.default.border};
`;

const SnapInner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Logo = styled.img``;

const Image = styled.img`
  border-radius: 14px;
`;

const QRCodeContainer = styled(ItemVV2)`
  border-radius: 14px;
  padding: 7px 14px;
  background: ${(props) => props.theme.snapUIBackground};
  border: 1px solid ${(props) => props.theme.default.border};
  padding-bottom: 15px;
  gap: 4px;
  &:hover {
    background: ;
  }
`;

const DownloadContainer = styled.div`
  display: flex;
  border-radius: 8px;
  background: ${(props) => props.theme.snapButtonBackground};
  padding: 4px 11px;
  gap: 8px;
  height: 36px;
  max-height: 36px;
  align-items: center;
  cursor: pointer;
`;

const DownloadInner = styled.div`
  display: flex;
  flex-direction: column;
`;
