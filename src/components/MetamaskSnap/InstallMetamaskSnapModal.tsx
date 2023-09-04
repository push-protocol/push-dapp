import { Button } from 'components/SharedStyling';
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Metamask from 'assets/PushSnaps/metamasksnap.svg';
import PushIcon from 'assets/PushSnaps/PushIcon.svg';
import AppStoreQRCode from 'assets/PushSnaps/AppStoreQRCode.svg';
import PlayStoreQRCode from 'assets/PushSnaps/PlayStoreQRCode.svg';
import AppleIcon from 'assets/PushSnaps/AppleIcon.svg';
import PlayStore from 'assets/PushSnaps/PlayStore.svg';
import { A } from 'primaries/SharedStyling';


const InstallMetamaskSnapModal = ({
    setSnapState,
    configure,
    setConfigure
}) => {

    useEffect(() => {
        getInstalledSnaps();
    }, [configure])

    async function getInstalledSnaps() {
        const installedSnaps = await window.ethereum.request({
            method: 'wallet_getSnaps'
        });
        Object.keys(installedSnaps).forEach((snap) => {
            if (snap == 'npm:push-v1') {
                setConfigure(true);
            }
        }
        )
    }

    return (
        <ItemVV2 margin='30px 0 20px 0' gap='8px'>
            <SnapContainer>
                <SnapInner>
                    <Image
                        src={Metamask}
                        alt='Metamask'
                    />
                    <SpanV2
                        fontSize="16px"
                        fontWeight="400"
                    >
                        Push Snaps
                    </SpanV2>
                </SnapInner>
                {
                    configure ? (
                        <InstallButton onClick={() => setSnapState(3)}>
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
                    <Image
                        src={PushIcon}
                        alt="Push Icon"
                    />
                    <SpanV2
                        fontSize="16px"
                        fontWeight="400"
                    >
                        Push Browser Extension
                    </SpanV2>
                </SnapInner>
                <InstallButton>Install</InstallButton>
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

export default InstallMetamaskSnapModal;

const SnapContainer = styled(ItemHV2)`
    border-radius: 14px;
    padding:7px 14px;
    background: #F9F9F9;
    justify-content:space-between;
`

const SnapInner = styled.div`
    display:flex;
    align-items:center;
    gap:8px;
`

const Image = styled.img`

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

const QRCodeContainer = styled(ItemVV2)`
    border-radius: 14px;
    padding:7px 14px;
    background: #F9F9F9;
    padding-bottom:15px;
    &:hover{
        background:
    }
    
`

const DownloadContainer = styled.div`
    display:flex;
    border-radius: 8px;
    background: #1E1E1E;
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