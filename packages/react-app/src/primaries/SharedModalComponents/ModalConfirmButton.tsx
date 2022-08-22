import React from 'react';
import styled, {useTheme, ThemeProvider } from "styled-components";

type ModalConfirmButtonType = {
    text:string,
    onClick: ()=>void
}

const ModalConfirmButton = ({text, onClick}:ModalConfirmButtonType)=>{
    const themes = useTheme();
    return(
        <ThemeProvider theme={themes}>
            <ModalButtonContainer>
                <CustomButton onClick={onClick}>{text}</CustomButton>
            </ModalButtonContainer>
        </ThemeProvider>
    )
}

const ModalButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 11%;
`

const CustomButton = styled.button`
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