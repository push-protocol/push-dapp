import { Image, Section } from 'components/SharedStyling';
import React, { useState } from 'react';
import styled from 'styled-components';
import SnapExample from 'assets/PushSnaps/SnapExample.svg'
import { ButtonV2, H2V2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import InfoLogo from 'assets/PushSnaps/spam-icon.svg';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';

const PushSnapModal = () => {

    const [loading, setLoading] = useState(false);
    const [walletConnected,setWalletConnected] = useState(false);

    const connectToMetamask = () => {
        setLoading(!loading);
    }


    return (
        <Container>

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
                        <SpanV2 fontSize='14px' fontWeight='400' color='#000'>
                            You’re about to install Push Snap which allows you to receive notifications from Push directly on MetaMask!
                        </SpanV2>
                    </ItemVV2>
                </ItemVV2>


                <ItemVV2 onClick={connectToMetamask}>
                    {loading ? (
                        <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={44} />
                    ) : (
                        <FilledButton onClick={connectToMetamask}>Connect Using MetaMask</FilledButton>
                    )}
                </ItemVV2>

                <ItemHV2 gap='7px'>
                    <Image src={InfoLogo} width={16} />
                    <SpanV2>About this Snap</SpanV2>
                </ItemHV2>
            </ItemVV2>


        </Container>
    );
};

export default PushSnapModal;

const Container = styled(Section)`
    width:438px;
    height:423px;
    padding:48px 24px;
`

const FilledButton = styled(ButtonV2)`
    min-width:230px;
    height:44px;
    padding: 16px 24px;
    background: #D53A94;
    border: 1px solid #D53A94;
    border-radius: 8px;
    font-size: 16px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: #FFFFFF;
    flex:none;
    cursor:pointer;
    border-radius: 15px;
    & > div{
        display:block;
    }

    @media(max-width:600px){
        font-size: 14px;
    }
    
`;