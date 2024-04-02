// React + Web3 Essentials
import React from "react";

// External Packages
import styled from 'styled-components';

// Internal Components
import { A, Item, ItemH, Span } from '../primaries/SharedStyling';
import { Device } from "assets/Device";

interface MetaInfoDisplayProps {
  externalIcon?: React.ReactNode; // Optional because it's checked before usage
  internalIcon?: React.ReactNode; // Optional for the same reason
  text: string;
  bgColor: string;
  color: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>; // Optional based on conditional use
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>; // Optional based on conditional use
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>; // Optional based on conditional use
  padding: string;
}

// Faucet URLs
function MetaInfoDisplay({ 
  externalIcon = null, 
  internalIcon = null, 
  text, 
  bgColor, 
  onClick = () => {}, 
  onMouseEnter =  () => {}, 
  onMouseLeave =  () => {}, 
  padding, 
  color 
}) {

  // render
  return (
    <MetaContentConatiner bg={bgColor} 
     margin="0 8px"
     radius="25px"
     maxWidth="fit-content"
     onMouseEnter={onMouseEnter}
     onMouseLeave={onMouseLeave}
     padding={padding}>
     
      <MetaContent
        hoverBG="transparent"
        onClick={onClick}
       
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
    </MetaContentConatiner>
  );
}

// const MetaContainer = styled(ItemH)`
//   flex-wrap: initial;
//   flex: initial;
//   & > ItemH {
   
//   }
// `

const MetaContentConatiner = styled(ItemH)`
  white-space: pre;
  margin: 0.3rem 0.4rem;
`;

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
    cursor:${props => props.onClick? "pointer":"default"};

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
