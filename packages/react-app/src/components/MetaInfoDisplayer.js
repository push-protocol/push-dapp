import React from "react";

import styled, { useTheme } from 'styled-components';
import { Item, ItemH, Span, A} from 'components/SharedStyling';

// Faucet URLs
function MetaInfoDisplay({ externalIcon, internalIcon, text, bgColor, onClick, onMouseEnter, onMouseLeave }) {
  const themes = useTheme();

  // render
  return (
    <MetaContainer>
      {externalIcon &&
        <Item
          margin="0px 4px 0px 0px"
        >
          {externalIcon}
        </Item>
      }
      <MetaContent
        hoverBG="transparent"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Span
          bg={bgColor}
        >
          {internalIcon && 
            <IconContainer>
              {internalIcon}
            </IconContainer>
          }
          {text}
        </Span>
      </MetaContent>
    </MetaContainer>
  );
}

const MetaContainer = styled(ItemH)`
  flex-wrap: initial;
  flex: initial;
  padding: 5px;
`

const MetaContent = styled(A)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  
  & > Span {
    background: ${props => props.bgColor};
    margin: 0px 5px;
    color: #fff;
    font-weight: 600;
    padding: 5px 10px;
    display: flex;
    border-radius: 10px;
    font-size: 11px;
    gap: 3px;
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
