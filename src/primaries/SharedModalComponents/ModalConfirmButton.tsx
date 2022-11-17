// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { ThemeProvider, useTheme } from "styled-components";

// Internal Compoonents
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';

// Types
type ModalConfirmButtonType = {
    text:string,
    onClick: ()=>void,
    isLoading: boolean
}

const ModalConfirmButton = ({text, onClick, isLoading}:ModalConfirmButtonType)=>{
    const themes = useTheme();
    return(
        <ThemeProvider theme={themes}>
            <ModalButtonContainer>
                {
                    isLoading 
                    ? 
                    <LoaderContainer>
                      <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={32} spinnerColor="#FFF" />
                    </LoaderContainer>
                    :
                    <CustomButton onClick={onClick}>{text}</CustomButton>
                }
            </ModalButtonContainer>
        </ThemeProvider>
    )
}

const ModalButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 9%;
`

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 50%;
    box-sizing: border-box;
    background-color:#CF1C84;
    border-radius:15px;
    padding: 3% 8%;
`

const CustomButton = styled.button`
    min-width: 50%;
    box-sizing: border-box;
    cursor:pointer;
    color: white;
    font-family: Strawford;
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: 0em;
    background-color:#CF1C84;
    border-radius:15px;
    padding: 5% 12%;
`;

export default ModalConfirmButton