import React from 'react';
import { ReactComponent as Close } from 'assets/chat/group-chat/close.svg';
import { ButtonV2, ItemHV2, ItemVV2 } from './reusables/SharedStylingV2';
import styled from 'styled-components';
import { ethers } from 'ethers';
import { appConfig } from 'config';
import { useAccount } from 'hooks';

const YieldFarmChainError = () => {

    const { account, chainId: currentChainId, switchChain } = useAccount();

    const handleChainChange = () => {

        const chainIdToPass = appConfig.allowedNetworks[0];

        if (currentChainId !== 1 && currentChainId !== 11155111) {
            console.debug("Current Chain ID ", currentChainId);
            console.debug("Chain Id to pass", chainIdToPass);
            switchChain(appConfig.coreContractChain);
        }

    }


    return (
        <Container>

            <Close
                style={{ cursor: 'pointer', alignSelf: 'end' }}
            />

            <BodyContainer>
                <PrimaryText>Unsupported Network</PrimaryText>
                <SecondaryText>
                    Push Yield Farm V2 is only live on Ethereum Chain.<br />
                    Kindly switch to Ethereum


                </SecondaryText>
            </BodyContainer>


            <ButtonContainer>
                <FilledButton
                    onClick={handleChainChange}

                >Switch Network</FilledButton>
            </ButtonContainer>

        </Container>
    );
};

export default YieldFarmChainError;

const Container = styled(ItemVV2)`
    padding:32px 36px;
    width:445px;
`;

const BodyContainer = styled(ItemVV2)`
    font-family: Strawford;
    font-style: normal;
    line-height: 141%; /* 39.48px */
    letter-spacing: -0.84px;

`

const PrimaryText = styled.div`
    font-size: 28px;
    font-weight: 500;
`

const SecondaryText = styled.div`
    color: #657795;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    margin:10px 0 24px 0;

`;
const ButtonContainer = styled.div``

const FilledButton = styled(ButtonV2)`
    // width:100%;
    background: #D53A94;
    border: 1px solid #D53A94;
    border-radius: 8px;
    padding: 16px;
    width: 165px;
    font-size: 16px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: #FFFFFF;
    cursor:pointer;
    & > div{
        display:block;
    }

    @media(max-width:600px){
        font-size: 14px;
    }
    
`;