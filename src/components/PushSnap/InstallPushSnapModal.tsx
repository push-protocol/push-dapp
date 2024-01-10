// React + Web3 Essentials
import React, { useEffect } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';


// Internal Compoonents
import { A } from 'primaries/SharedStyling';
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { Button } from 'components/SharedStyling';
import Metamask from 'assets/PushSnaps/metamasksnap.svg';
import PushIcon from 'assets/PushSnaps/PushIcon.svg';
import VersoIcon from 'assets/PushSnaps/VersoIcon.svg';
import UDIcon from 'assets/PushSnaps/UDIcon.svg';
import AppStoreQRCode from 'assets/PushSnaps/AppStoreQRCode.svg';
import PlayStoreQRCode from 'assets/PushSnaps/PlayStoreQRCode.svg';
import AppleIcon from 'assets/PushSnaps/AppleIcon.svg';
import PlayStore from 'assets/PushSnaps/PlayStore.svg';


const InstallPushSnapModal = ({
    setSnapState,
    configure,
    setConfigure
}) => {

    const theme = useTheme();

    useEffect(() => {
        getInstalledSnaps();
    }, [configure])

    async function getInstalledSnaps() {
        const installedSnaps = await window.ethereum.request({
            method: 'wallet_getSnaps'
        });
        Object.keys(installedSnaps).forEach((snap) => {
            if (snap == 'npm:@pushprotocol/snap') {
                setConfigure(true);
            }
        }
        )
    }

    const navigate = useNavigate();

    return (
        <ItemVV2 margin='30px 0 20px 0' gap='14px'>
            <SnapContainer>
                <SnapInner>
                    <Logo
                        src={Metamask}
                        alt='Metamask'
                    />
                    <SpanV2
                        fontSize="16px"
                        fontWeight="400"
                        color={theme.modalMessageColor}
                    >
                        Push Snaps
                    </SpanV2>
                </SnapInner>
                {
                    configure ? (
                        <InstallButton onClick={() => {
                            setSnapState(3)
                            // navigate('/snap')
                        }}>
                            Configure
                        </InstallButton>
                    ) : (
                        <InstallButton onClick={() => setSnapState(2)}>
                            Install
                        </InstallButton>
                    )
                }

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
                <a href='https://chromewebstore.google.com/detail/push-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg' target='_blank'>
                    <InstallButton>Install</InstallButton>
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
                    <a href="https://apps.apple.com/ng/app/verso-wallet-crypto-nft/id1539304605" target="_blank">
                        <AppstoreInstallBtn><Image src={AppleIcon} width="16px" height="20px" alt='App store' /></AppstoreInstallBtn>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.btuprotocol.btu_wallet" target="_blank">
                        <AppstoreInstallBtn><Image src={PlayStore} width="16px" height="20px" alt='Play store' /></AppstoreInstallBtn>
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
                    <a href="https://apps.apple.com/nz/app/unstoppable-domains/id1544748602" target="_blank">
                        <AppstoreInstallBtn><Image src={AppleIcon} width="16px" height="20px" alt='App store' /></AppstoreInstallBtn>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.unstoppabledomains.manager&hl=en&gl=US" target="_blank">
                        <AppstoreInstallBtn><Image src={PlayStore} width="16px" height="20px" alt='Play store' /></AppstoreInstallBtn>
                    </a>
                </SnapInner>
            </SnapContainer>

            <ItemHV2 gap='14px'>

                <QRCodeContainer>
                    <Image
                        src={AppStoreQRCode}
                        alt='App Store QR Code'
                        width='106px'
                    />
                    <a href="https://apps.apple.com/app/ethereum-push-service-epns/id1528614910" target="_blank">

                        <DownloadContainer>
                            <Image src={AppleIcon} alt='App store' />
                            <DownloadInner>
                                <SpanV2
                                    fontSize='8px'
                                    fontWeight='500'
                                    color='#FFF'
                                >Download on the</SpanV2>
                                <SpanV2
                                    fontSize='14px'
                                    fontWeight='500'
                                    color='#FFF'
                                >App Store</SpanV2>
                            </DownloadInner>
                        </DownloadContainer>
                    </a>

                </QRCodeContainer>


                <QRCodeContainer>
                    <Image
                        src={PlayStoreQRCode}
                        alt='App Store QR Code'
                        width='106px'
                    />

                    <A href="https://play.google.com/store/apps/details?id=io.epns.epns" target="_blank">
                        <DownloadContainer>
                            <Image src={PlayStore} alt='App store' />
                            <DownloadInner>
                                <SpanV2
                                    fontSize='8px'
                                    fontWeight='500'
                                    color='#FFF'
                                    textAlign='left'
                                >Get it on</SpanV2>
                                <SpanV2
                                    fontSize='14px'
                                    fontWeight='500'
                                    color='#FFF'
                                >Google Play</SpanV2>
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
    padding:7px 14px;
    background:${(props) => props.theme.snapUIBackground};
    justify-content:space-between;
    border: 1px solid ${(props) => props.theme.default.border};
`

const SnapInner = styled.div`
    display:flex;
    align-items:center;
    gap:8px;
`

const Logo = styled.img``

const Image = styled.img`
    border-radius: 14px;

`

const InstallButton = styled(Button)`
    width: fit-content;
    min-width:102px;
    background: #D53A94;
    color: #fff;
    z-Index:0;
    font-family: 'Strawford';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: normal;
    border-radius: 8px;
    padding: 14px 16px;
`;

const AppstoreInstallBtn = styled(InstallButton)`
    background: #000;
    min-width: 0;
    margin-left: 6px;
    height: 36px;
    width: 36px;
`;

const QRCodeContainer = styled(ItemVV2)`
    border-radius: 14px;
    padding:7px 14px;
    background:${(props) => props.theme.snapUIBackground};
    border: 1px solid ${(props) => props.theme.default.border};
    padding-bottom:15px;
    gap:4px;
    &:hover{
        background:
    }
    
`

const DownloadContainer = styled.div`
    display:flex;
    border-radius: 8px;
    background: ${(props) => props.theme.snapButtonBackground};
    padding: 4px 11px;
    gap: 8px;
    height:36px;
    max-height: 36px;
    align-items: center;
    cursor:pointer;
`

const DownloadInner = styled.div`
    display:flex;
    flex-direction: column;
`