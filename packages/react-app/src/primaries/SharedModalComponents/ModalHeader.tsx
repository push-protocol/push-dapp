import React from 'react';
import styled, {useTheme, ThemeProvider } from "styled-components";

type ModalHeaderType = {
    heading:string, subHeading:string
}

const ModalHeader = ({heading, subHeading}:ModalHeaderType)=>{
    const themes = useTheme();
    return(
        <ThemeProvider theme={themes}>
            <ModalHeaderContainer>
                <ModalHeading style={{
                    color:themes.fontColor,
                }}>
                    {heading}
                </ModalHeading>
                <ModalSubHeading style={{
                    color:themes.modalMessageColor,
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