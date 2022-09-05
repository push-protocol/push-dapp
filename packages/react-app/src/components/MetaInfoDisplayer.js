import React from "react";

import styled from 'styled-components';
import { Item, ItemH, Span, A} from '../primaries/SharedStyling';

// Faucet URLs
function MetaInfoDisplay({ externalIcon, internalIcon, text, bgColor, onClick, onMouseEnter, onMouseLeave }) {

  // render
  return (
    <ItemH bg={bgColor} 
     margin="0 20px"
     radius="10px"
     padding="6px 0"
     maxWidth="8rem">
     
      <MetaContent
        hoverBG="transparent"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {externalIcon &&
          <Item
            margin="0px 4px 0px 0px"
          >
            {externalIcon}
          </Item>
        }
        <Span
         
        >
          {internalIcon && 
            <IconContainer>
              {internalIcon}
            </IconContainer>
          }
          {text}
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
  
  & > Span {
    gap: 3px;
    color: #D53893;
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
