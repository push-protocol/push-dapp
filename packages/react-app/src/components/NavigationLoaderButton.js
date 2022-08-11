import React from "react";
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

import styled, { useTheme, css } from "styled-components";
import {ItemH, Span, Anchor, RouterLink, Image} from 'primaries/SharedStyling';
import FadeLoader from "react-spinners/FadeLoader";

import { themeDark } from "config/Themization";

// Create Header
function NavigationLoaderButton() {
  const theme = useTheme();
  return (
    <div
    flex="1"
    radius="12px"
    align="stretch"
    padding="10px"
    style={{cursor:'pointer'}}
    >
      <ItemH align="center" style={{marginLeft:'10px',padding:'2px 6px'}}>
          <img src="/loading.gif" style={{margin:"0 5px",width:'20px'}} alt="Loader Button"/>
          <Span 
            flex="1" 
            weight="400"
            spacing="0"
            margin="0 4px"
            color={theme.leftBarFontColor}
          >
            Loading
          </Span>
          
      </ItemH>
    </div>
  );
}


// Export Default
export {NavigationLoaderButton};
