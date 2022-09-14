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
        <Span color={color}>
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
           <ItemH
            >
            {text}
            </ItemH>
          </Span>
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
    gap: 5px;
    font-weight: 500;
    display: flex;
    font-size: 14px;
    transition: 300ms;
  }
  & > Span:hover {
    white-space: pre;
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
