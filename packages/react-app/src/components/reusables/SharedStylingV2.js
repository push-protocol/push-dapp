import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

// Section covers the entire width and height
export const SectionV2 = styled.section`
  align-items: ${(props) => props.alignItems || 'center'};
  align-self: ${(props) => props.alignSelf || 'stretch'};
  background: ${(props) => props.gradient ? props.gradient : props.background ? props.background : 'transparent' || 'transparent'};
  display: ${(props) => props.display || 'flex'};
  flex: ${(props) => props.flex || '1'};
  flex-direction: ${(props) => props.flexDirection || 'column'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  margin: ${(props) => props.margin || '0px'};
  overflow: ${(props) => props.overflow || 'initial'};
  padding: ${(props) => props.padding || '0px'};
  position: ${(props) => props.position || 'relative'};
`;

export const ItemBreakV2 = styled.div`
  flex-basis: 100%;
`;

// Item comes inside section or components
// ItemH is horizontal
// ItemV is vertical
export const ItemHV2 = styled.div`
  align-items: ${(props) => props.alignItems || 'center'};
  align-self: ${(props) => props.alignSelf || 'stretch'};
  background: ${(props) => props.gradient ? props.gradient : props.background ? props.background : 'transparent' || 'transparent'};
  border: ${(props) => props.border || 'initial'};
  border-radius: ${(props) => props.borderRadius || 'initial'};
  bottom: ${(props) => props.bottom || 'auto'};
  box-shadow: ${(props) => props.boxShadow || 'initial'};
  display: ${(props) => props.display || 'flex'};
  filter: ${(props) => props.filter || 'initial'};
  flex: ${(props) => props.flex || '1'};
  flex-basis: ${(props) => props.flexBasis || 'auto'};
  flex-direction: ${(props) => props.flexDirection || 'column'};
  flex-wrap: ${(props) => props.flexWrap || 'wrap'};
  font-size: ${(props) => props.fontSize || 'initial'};
  height: ${(props) => props.height || 'auto'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  left: ${(props) => props.left || 'auto'};
  margin: ${(props) => props.margin || '0px'};
  max-width: ${(props) => props.maxWidth || 'initial'};
  min-width: ${(props) => props.minWidth || 'auto'};
  overflow: ${(props) => props.overflow || 'initial'};
  padding: ${(props) => props.padding || '0px'};
  position: ${(props) => props.position || 'relative'};
  right: ${(props) => props.right || 'auto'};
  text-align: ${(props) => props.textAlign || 'initial'};
  top: ${(props) => props.top || 'auto'};
  width: ${(props) => props.width || 'auto'};
  z-index: ${(props) => props.zIndex || 'auto'};

  &:hover & {
    filter: ${(props) => (props.filterHover ? props.filterHover : props.hover ? props.hover : 'none') || 'none'};
  }
  
  ${ItemBreakV2} {
    width: 0;
  }
`;

export const ItemVV2 = styled(ItemHV2)`
  flex: ${(props) => props.flex || "1"};
  flex-direction: row;

  ${ItemBreakV2} {
    height: 0;
    width: auto;
  }
`;
