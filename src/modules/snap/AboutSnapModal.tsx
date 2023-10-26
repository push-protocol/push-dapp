import React from 'react';
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import { H2V2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import styled, { useTheme } from 'styled-components';


const AboutSnapModal = ({
    onClose
}) => {

    const theme = useTheme();

    const InfoDetails = [
        {
            title: 'Step 1',
            info: 'Install MetaMask Snaps by going to app.push.org/snap'
        },
        {
            title: 'Step 2',
            info: 'Connect your wallet using MetaMask to receive notifications'
        },
        {
            title: 'Step 3',
            info: 'Opt-in channels on app.push.org/channels and you’re all set.'
        },
        {
            title: 'Step 4 (optional)',
            info: 'You can visit app.push.org/snap, click on Settings and Add Wallets, Show All to remove wallets, and Snooze Notification Pop-ups.'
        }
    ]



    return (
        <Container>

            <Close
                onClick={() => onClose()}
                style={{ cursor: 'pointer' }}
            />

            <ItemVV2 gap='24px'>

                <ItemVV2>
                    <H2V2 fontSize='22px' fontWeight='500' letterSpacing='-0.44px' color={theme.snapPrimaryText}>Installing Push Snap</H2V2>
                </ItemVV2>

                {InfoDetails.map((detail) => (
                    <ItemVV2 alignItems='baseline'>
                        <H2V2 fontSize='18px' fontWeight='500' color={theme.snapPrimaryText}>{detail.title}</H2V2>
                        <SpanV2 textAlign='left' fontSize='16px' fontWeight='400'  color={theme.snapSecondaryText}>{detail.info}</SpanV2>
                    </ItemVV2>
                ))}

            </ItemVV2>



        </Container>
    );
};

export default AboutSnapModal;

const Container = styled(ItemVV2)`
    width: 375px;
    padding: 32px 24px;
    border-radius: 16px;
    align-items: end;
    background: ${(props) => props.theme.default.bg};
`