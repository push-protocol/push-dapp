import React from "react";

import styled from 'styled-components';
import { Item, ItemH, Span, A} from '../primaries/SharedStyling';

// Faucet URLs
function MetaInfoDisplay({ externalIcon, internalIcon, text, bgColor, onClick, onMouseEnter, onMouseLeave, padding, color }) {

  // render
  return (
    <ItemH bg={bgColor} 
     margin="0 8px"
     radius="10px"
     maxWidth="fit-content"
     padding={padding}>
     
      <MetaContent
        hoverBG="transparent"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
          {externalIcon &&
            <ItemH
            >
              {externalIcon}
            </ItemH>
          }

          {internalIcon &&
            <IconContainer>
              {internalIcon}
            </IconContainer>
          }
          <ItemH>
            {text}
          </ItemH>
      </MetaContent>
    </ItemH>
  );
}

// const MetaContainer = styled(ItemH)`
//   flex-wrap: initial;
//   flex: initial;
//   & > ItemH {
   
//   }
// `

const MetaContent = styled(A)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  max-width: fit-content;
  
  & > Span {
    gap: 3px;
    font-weight: 600;
    display: flex;
    font-size: 11px;
    transition: 300ms;
  }
`

const IconContainer = styled(Span)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 4px 0px 0px;
  color: inherit;
`

// Export Default
export default MetaInfoDisplay;
