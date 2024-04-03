// React + Web3 Essentials
import React from "react";

// External Packages
import { AiFillInfoCircle } from 'react-icons/ai';
import { Tooltip } from "@material-ui/core";

// Faucet URLs
function InfoTooltip({title, Infocolor="white"}) {
  // render
  return (
    <Tooltip style={{marginLeft: "5px"}} title={title}>
        <span>
          <AiFillInfoCircle style={{color: Infocolor}} />
        </span>
    </Tooltip>
  );
}

// Export Default
export default InfoTooltip;