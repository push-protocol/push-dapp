import React from "react";

import styled, { css } from 'styled-components';
import {Section, Content, Item, ItemH, Span, Anchor} from 'components/SharedStyling';

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