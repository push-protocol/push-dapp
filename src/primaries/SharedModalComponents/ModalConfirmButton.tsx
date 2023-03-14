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
    isLoading: boolean,
    color?:string,
    backgroundColor?:string,
    border?:string,
    topMargin?:string,
    loaderTitle?: string,
}

const ModalConfirmButton = ({text, onClick, isLoading,color,backgroundColor,border,topMargin,loaderTitle}:ModalConfirmButtonType)=>{
    const themes = useTheme();
    return(
        <ThemeProvider theme={themes}>
            <ModalButtonContainer
                style={{
                    marginTop: topMargin ? topMargin : "55px"
                }}
            >
                {
                    isLoading 
                    ? 
                    <LoaderContainer>
                      <LoaderSpinner 
                      type={LOADER_TYPE.SEAMLESS} 
                      spinnerSize={26} 
                      spinnerColor="#FFF" 
                      title={loaderTitle??''} 
                      titleColor='#fff'
                    />
                    </LoaderContainer>
                    :
                    <CustomButton 
                    onClick={onClick} 
                    color={color} 
                    backgroundColor={backgroundColor} 
                    border={border}
                    >
                        {text}
                    </CustomButton>
                }
            </ModalButtonContainer>
        </ThemeProvider>
    )
}

const ModalButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // margin-top: 55px;
`

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 50%;
    color: #fff;
    box-sizing: border-box;
    background-color:#CF1C84;
    border-radius:15px;
    // padding: 3% 8%;
    padding: 8px 16px;
`

const CustomButton = styled.button`
    min-width: 50%;
    box-sizing: border-box;
    cursor:pointer;
    color: ${props=> props.color ||'white'};
    font-family: Strawford;
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: 0em;
    background-color:${props => props.backgroundColor || '#CF1C84'};
    border:${props=>props.border || '1px solid transparent'};
    border-radius:15px;
    // padding: 5% 12%;
    padding:16px;
`;

export default ModalConfirmButton