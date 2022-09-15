// React + Web3 Essentials
import React from "react";

// External Packages
import { Skeleton } from "@mui/material";
import styled, { useTheme } from "styled-components";

// Internal Compoonents
import LoaderSpinner, { LOADER_TYPE } from "components/reusables/loaders/LoaderSpinner";
import { ItemHV2 } from "components/reusables/SharedStylingV2";

const ChannelLoading = () => {
    const theme = useTheme();
    return (
      <ItemHV2>
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
            }} 
          />
        </SkeletonContainerOuter>

        <ItemHV2 padding="40px 0 40px 0">
          <LoaderSpinner 
            type={LOADER_TYPE.SEAMLESS}
            title="Loading Channel Details. Please wait..."
          />
        </ItemHV2>
      </ItemHV2>
    )
}

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

export default ChannelLoading;