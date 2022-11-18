// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { ThemeProvider, useTheme } from "styled-components";

// Internal Components
import { Input } from "../SharedStyling";

// Types
type ModalInputType = {
    title:string
}

const ModalInput = React.forwardRef<HTMLInputElement,  ModalInputType>(({title}, ref)=>{
    const themes = useTheme();
    return(
        <ThemeProvider theme={themes}>
            <ModalInputContainer>
                <InputTitle style={{
                    color:themes.modalMessageColor,
                }}>
                    {title}
                </InputTitle>
                <CustomInput
                    ref={ref}
                    radius="12px"
                    padding="0.8rem"
                    border="1px solid #BAC4D6"
                    style={{
                        color:themes.modalMessageColor,
                    }}
                />
            </ModalInputContainer>
        </ThemeProvider>
    )
})

const ModalInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3% 0%;
`

const InputTitle =  styled.h4`
    font-family: Strawford;
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0em;
    margin:0;
    padding:0;
    margin-bottom: 3%;
`

const CustomInput = styled(Input)`
    box-sizing: border-box;
    width: 100%;
`;

export default ModalInput