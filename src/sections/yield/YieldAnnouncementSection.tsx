// React + Web3 Essentials
import React from 'react';

// External Packages

// Internal Compoonents
import { AInlineV2, H2V2, ImageV2, ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import GLOBALS from 'config/Globals';

// yield announcement section
const YieldAnnouncementSection = () => {
  // RENDER
  return (
    <ItemHV2 justifyContent="stretch" padding="16px" background="linear-gradient(90deg, #121315 -2.55%, #2A2A39 32.62%, #8E317A 68.34%, #121315 102.97%)" borderRadius="16px">
      <ImageV2
        width="60px"
        height="60px"
        src="svg/announcement.svg"
        alt="Sender Profile"
      />
      <ItemVV2 margin="0 0 0 16px" justifyContent="center" alignItems="flex-start">
        <H2V2
          color="#fff"
          fontSize="28px"
          textAlign="left"
          fontWeight={500}
        >
          Rewards Program will be extended by 84 weeks !!
        </H2V2>
        <H2V2
          color="#fff"
          fontSize="18px"
          textAlign="left"
          fontWeight={500}  
        >
          The Push DAO has approved the extension of the Rewards Program for 84 more weeks! More info {" "}
          <AInlineV2 href="https://medium.com/push-protocol/push-dao-extends-liquidity-rewards-program-26008926b05a" target='_blank'>
            here
          </AInlineV2>
        </H2V2>
      </ItemVV2>
    </ItemHV2>
  );
}
export default YieldAnnouncementSection;
