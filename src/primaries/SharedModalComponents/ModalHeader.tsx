// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { ThemeProvider, useTheme } from "styled-components";

// Types
type ModalHeaderType = {
    heading:string, subHeading:string
}

const ModalHeader = ({heading, subHeading}:ModalHeaderType)=>{
    const theme = useTheme();
    return(
        <ThemeProvider theme={theme}>
            <ModalHeaderContainer>
                <ModalHeading style={{
                    color:theme.default.color,
                }}>
                    {heading}
                </ModalHeading>
                <ModalSubHeading style={{
                    color:theme.modalMessageColor,
                }}>
                    {subHeading}
                </ModalSubHeading>
            </ModalHeaderContainer>
        </ThemeProvider>
    )
}

const ModalHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4%;
`

const ModalHeading = styled.h1`
    font-family: Strawford;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0em;
    text-align: center;
    margin:0;
    padding:0;
    margin-bottom: 1.5%;
    text-shadow: none;
`

const ModalSubHeading = styled.h4`
    text-shadow: none;
    width: 90%;
    color: ${(props) => props.modalMessageColor || "#657795"};
    font-family: Strawford;
    font-size: 0.95rem;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: center;
    margin:0;
    padding:0;
`

export default ModalHeader;