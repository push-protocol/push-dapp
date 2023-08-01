// React + Web3 Essentials
import React from 'react';

// External Packages

// Internal Compoonents
import { AInlineV2, H2V2, ImageV2, ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import GLOBALS from 'config/Globals';
import { useDeviceWidthCheck } from 'hooks';
import styled from 'styled-components';

// yield announcement section
const YieldAnnouncementSection = (
  {
    logo,
    title,
    body,
    setActiveTab
  }
) => {

  const isMobile = useDeviceWidthCheck(600);

  // RENDER
  return (
    <ItemHV2
      style={{ color: logo === "announcement" ? "white" : "#333" }}
      justifyContent="stretch"
      padding={isMobile ? "12px" : "16px"}
      background={logo === "announcement" ? "linear-gradient(90deg, #121315 -2.55%, #2A2A39 32.62%, #8E317A 68.34%, #121315 102.97%)" : "#FFF7DA"}
      borderRadius="16px"
    >
      <ImageV2
        width={logo === "announcement" ? "60px" : "32px"}
        height={logo === "announcement" ? "60px" : "32px"}
        src={`svg/${logo}.svg`}
        alt="Announcement Logo"
      />
      <ItemVV2
        margin={logo === "announcement" ? "0 0 0 16px" : "0 0 0 13px"}
        justifyContent="center" alignItems="flex-start"
        gap={logo === "announcement" ? "4px" : "0px"}
      >
        <H2V2
          color="inherit"
          fontSize={isMobile ? "20px" : "24px"}
          textAlign="left"
          fontWeight={500}
        >
          {title}
        </H2V2>
        <H2V2
          color="inherit"
          fontSize={isMobile ? "12px" : "16px"}
          textAlign="left"
          fontWeight={500}
        >
          {body} {" "}
          {title.includes("New V2") &&
            <>
              <AILine onClick={() => setActiveTab(1)}>
                here
              </AILine>
              {" "} to migrate.
            </>
          }

        </H2V2>
      </ItemVV2>
    </ItemHV2>
  );
}

export default YieldAnnouncementSection;

const AILine = styled(AInlineV2)`
  cursor: pointer;
  color: #fff;

  &:hover{
    text-decoration: underline;
  }

`
