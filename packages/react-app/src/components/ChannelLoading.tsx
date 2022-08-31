import React from "react";
import styled,{ ThemeProvider, useTheme } from "styled-components";
import { Skeleton } from "@mui/material"

import LoaderSpinner from "primaries/LoaderSpinner";

const ChannelLoading = () => {
    const themes = useTheme();
    return (
        <ThemeProvider theme={themes}>
            <ChannelLoadingContainer>
                <SkeletonContainerOuter>
                    <SkeletonContainerUpperRow>
                        <Skeleton
                            variant="rectangular"
                            sx={{ bgcolor: '#F4F5FA' }}
                            style={{
                                width: "8rem",
                                height: "8rem",
                                borderRadius: "32px",
                                marginRight: "2%"
                            }} />

                        <SkeletonContainerUpperCol>
                            <Skeleton
                                variant="rectangular"
                                sx={{ bgcolor: '#F4F5FA' }}
                                style={{
                                    width: "40%",
                                    height: "2.2rem",
                                    borderRadius: "5px",
                                    marginTop: "3%"
                                }} />
                            <Skeleton
                                variant="rectangular"
                                sx={{ bgcolor: '#F4F5FA' }}
                                style={{
                                    width: "20%",
                                    height: "1.1rem",
                                    borderRadius: "5px",
                                    marginTop: "2%"
                                }} />
                        </SkeletonContainerUpperCol>
                    </SkeletonContainerUpperRow>
                    <Skeleton
                        variant="rectangular"
                        sx={{ bgcolor: '#F4F5FA' }}
                        style={{
                            width: "100%",
                            height: "2.7rem",
                            borderRadius: "9px",
                            marginTop: "4%"
                        }} />
                </SkeletonContainerOuter>

                <LoaderContainer>
                    <LoaderSpinner />
                    <LoaderText style={{
                        color: themes.fontColor
                    }}>
                        Loading Channel Details. Please wait...
                    </LoaderText>
                </LoaderContainer>
            </ChannelLoadingContainer>
        </ThemeProvider>
    )
}

const ChannelLoadingContainer = styled.div`
    width:100%;
    padding: 4.6rem;
    height: 60vh;
    border-radius: 20px;
`

const SkeletonContainerOuter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    `

const SkeletonContainerUpperRow = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    `

const SkeletonContainerUpperCol = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
`

const LoaderContainer = styled.div`
    height: 35vh;
    display:flex;
    align-items:center;
    justify-content: center;
`

const LoaderText = styled.div`
//   margin-left: 3%;
  font-family: Manrope;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.3rem;
  letter-spacing: 0em;
  text-align: left;
`;

export default ChannelLoading;