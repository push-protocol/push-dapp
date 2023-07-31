// React + Web3 Essentials
import React from 'react';

// External Packages

// Internal Compoonents
import { AInlineV2, H2V2, ImageV2, ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import GLOBALS from 'config/Globals';

// yield announcement section
const YieldAnnouncementSection = (
  {
    logo,
    title,
    body,
    setActiveTab
  }
) => {
  // RENDER
  return (
    <ItemHV2
      style={{color:logo === "announcement" ? "white" : "#333"}}
      justifyContent="stretch"
      padding="16px"
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
          fontSize="24px"
          textAlign="left"
          fontWeight={500}
        >
          {title}
        </H2V2>
        <H2V2
          color="inherit"
          fontSize="16px"
          textAlign="left"
          fontWeight={500}
        >
          {body} {" "}
          {body.includes("migrate") && <AInlineV2 cursor="pointer" color="#fff" onClick={()=>setActiveTab(1)}>
            Click here to Migrate
          </AInlineV2>}
        </H2V2>
      </ItemVV2>
    </ItemHV2>
  );
}

export default YieldAnnouncementSection;
