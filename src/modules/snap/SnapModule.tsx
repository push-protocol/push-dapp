// React + Web3 Essentials
import React, { useState } from "react";

// External Packages
import ReactGA from "react-ga";
import styled, { useTheme } from "styled-components";

// Internal Components
import { ButtonV2, H2V2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { H2, Image, Item, Section, Span } from "../../primaries/SharedStyling";
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import Info from "segments/Info";

// Internal Configs
import GLOBALS, { device, globalsMargin } from "config/Globals";
import useModalBlur, { MODAL_POSITION } from "hooks/useModalBlur";
import SnapExample from 'assets/PushSnaps/SnapExample.svg'
import InfoLogo from 'assets/PushSnaps/spam-icon.svg';
import PushMetamaskLogo from 'assets/PushSnaps/PushMetamaskLogo.svg';
import ActiveIcon from 'assets/PushSnaps/ActiveIcon.svg';
import { ReactComponent as Gear } from 'assets/PushSnaps/Gear.svg';

import PushSnapModal from "./PushSnapModal";
import AboutSnapModal from "./AboutSnapModal";

const SnapModule = () => {

    const [loading, setLoading] = useState(false);
    const [walletConnected, setWalletConnected] = useState(false);
    const [snapInstalled,setSnapInstalled] = useState(false);

    const connectToMetamask = () => {
        setLoading(!loading);
    }

    //About Snap Info Modal
    const {
        isModalOpen: isMetamaskPushSnapOpen,
        showModal: showPushSnapAbout,
        ModalComponent: AboutPushSnapModalComponent,
    } = useModalBlur();

    

    return (
        <Container>

            <AboutPushSnapModalComponent
                InnerComponent={AboutSnapModal}
                modalPadding='0px'
                // InnerComponentProps={}
                modalPosition={MODAL_POSITION.ON_PARENT}
            />


            <Image src={PushMetamaskLogo} width='152px' height='55px' />

            <SubContainer margin='24px 0 0 0'>

                <ItemVV2>
                    <Image src={SnapExample} width='276px' height='202px' />
                </ItemVV2>

                <ItemVV2 gap='24px'>
                    <ItemVV2 gap='12px'>
                        <ItemVV2>
                            <H2V2 fontSize='34px' fontWeight='500' color='#1E1E1E' letterSpacing='-1.02px'>
                                Push Snap
                            </H2V2>
                            <SpanV2 fontSize='12px' fontWeight='400' color='#657795'>powered by MetaMask</SpanV2>
                        </ItemVV2>

                        <ItemVV2>
                            {walletConnected ? (
                                <>
                                    <SpanV2 fontSize='14px' fontWeight='400' color='#000'>Get started by opting in to channels on Push. </SpanV2>
                                    <SpanV2 fontSize='14px' fontWeight='400' color='#000'>Once you opt-in you will receive notifications on MetaMask.</SpanV2>
                                </>
                            ) : (
                                <SpanV2 fontSize='14px' fontWeight='400' color='#000'>
                                    You’re about to install Push Snap which allows you to receive notifications from Push directly on MetaMask!
                                </SpanV2>
                            )}
                        </ItemVV2>

                    </ItemVV2>


                    {walletConnected ? (
                        <ItemHV2 gap='8px'>
                            <Image src={ActiveIcon} width='10px' height='10px' />
                            <SpanV2 color='#657795' fontSize='14px' fontWeight='400'>Connected to Push Snap</SpanV2>
                        </ItemHV2>
                    ) : (
                        <ItemVV2>
                            {loading ? (
                                <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={44} />
                            ) : (
                                <ConnectButton onClick={connectToMetamask}>
                                    {snapInstalled ? 'Install Snap' : 'Connect Using MetaMask '}
                                </ConnectButton>
                            )}
                        </ItemVV2>
                    )}

                    {walletConnected ? (
                        <ItemHV2 gap='12px'>
                            <SettingsButton>
                                <Gear height='20px' width='20px' />
                                Settings
                            </SettingsButton>
                            <FilledButton>Get Started</FilledButton>
                        </ItemHV2>
                    ) : (
                        <InfoDiv gap='7px' onClick={showPushSnapAbout}>
                            <Image src={InfoLogo} width={16} />
                            <SpanV2 color='#657795' fontSize='14px' fontWeight='400'>About this Snap</SpanV2>
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
	// background: ${(props) => props.theme.default.bg};
    background:#F4F5FA;
	border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
	box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: column;
	flex: initial;
	justify-content: center;
  max-width: 1200px;
  width: calc(100% - ${globalsMargin.MINI_MODULES.DESKTOP.RIGHT} - ${globalsMargin.MINI_MODULES.DESKTOP.LEFT} - ${GLOBALS.ADJUSTMENTS.PADDING.BIG} - ${GLOBALS.ADJUSTMENTS.PADDING.BIG});
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
    width:438px;
    height:423px;
    padding:48px 24px;
    border-radius: 32px;
    background: #FFF;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
    margin:auto;
`

const SnapButton = styled(ButtonV2)`
    height:44px;
    border-radius: 15px;
    font-size: 16px;
    font-weight:500;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: #FFFFFF;
    flex:none;
    cursor:pointer;

    & > div{
        display:block;
    }

    @media(max-width:600px){
        font-size: 14px;
    }

`

const ConnectButton = styled(SnapButton)`
    min-width:230px;
    padding: 16px 24px;
    background: #D53A94;
    border: 1px solid #D53A94;
`;

const SettingsButton = styled(SnapButton)`
    flex-direction:row;
    color: #657795;
    text-align: center;
    width:135px;    
    padding: 16px 24px;
    border: 1px solid #BAC4D6;
    background: #FFF;
    gap:4px;
`

const FilledButton = styled(SnapButton)`
    width:135px;
    padding: 16px 24px;
    background: #D53A94;
`

const InfoDiv = styled(ItemHV2)`
    cursor:pointer;
`

const ButtonContainer = styled(ItemHV2)`

`