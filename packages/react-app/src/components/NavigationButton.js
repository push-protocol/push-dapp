import React from "react";
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

import styled, { useTheme, css } from "styled-components";
import {ItemH, Span, Anchor, RouterLink, Image} from 'primaries/SharedStyling';

import { themeDark } from "config/Themization";
import GLOBALS from "config/Globals";

// Create Header
function NavigationButton({ item, data, sectionID, active }) {
  const theme = useTheme();

  let SelectedIcon;
  let RouteLogic;
  let definedMargin;

  switch(sectionID) {
    case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.MOBILE:
      SelectedIcon = LeftBarPrimaryItemIcon;
      definedMargin = "5px";
      break;
    case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.SECONDARY:
      SelectedIcon = item.isSection ? LeftBarSecondarySectionIcon : LeftBarSecondaryItemIcon;
      definedMargin = item.isSection ? "0px" : "5px";
      break;
    default:
      SelectedIcon = item.isSection ? LeftBarPrimarySectionIcon : LeftBarPrimaryItemIcon;
      definedMargin = item.isSection ? "0px" : "5px";
  }

  if (data.isRoute) {
    RouteLogic = RouterLink;
  }
  else {
    RouteLogic = Anchor;
  }

  return (
    <RouteLogic
      style={{display: data.name==='Hide'? 'none': 'block'}}
      flex="1"
      title={`${data.title}`}
      to={`${data.href ? data.href : '#'}`}
      href={`${data.href ? data.href : '#'}`}
      alt={`${data.alt}`}
      target={data.isRoute ? null : data.newTab ? "_blank" : "self"}
      disabled={data.disabled}
      hoverBG={theme.leftBarHoverColor}
      radius="12px"
      align="stretch"
      padding="10px"
      margin={definedMargin}
      active={active}
      className={data?.name?.toLowerCase()}
    >
      <ItemH
          align="center"
      >
          <SelectedIcon
            src={`./${data.src}`}
            margin="0 5px"
            alt={`${data.alt}`}
            active={active}
          />
          
          <Span 
            flex="1" 
            weight="400"
            spacing="0"
            margin="0 5px"
            color={theme.leftBarFontColor}
          >
            {data.name}
          </Span>
          
          {item.hasItems && !item.opened &&
            <BiChevronDown
              color={theme.leftBarFontColor}
            />
          }

          {item.hasItems && item.opened &&
            <BiChevronUp
              color={theme.leftBarFontColor}
            />
          }
      </ItemH>
    </RouteLogic>
  );
}

// css styles
const InheritedSectionGroupIcon = styled(Image)`
  height: 32px;
  width: 32px;
  margin: 0 5px;

  filter: ${(props) => props.active ? "brightness(1)" : props.theme === themeDark ? "brightness(0) invert(1)" : "brightness(0)"};
  opacity: ${(props) => props.active ? "1" : props.theme === themeDark ? "0.5" : "0.25"};

  transition: transform .1s ease-out;
  ${ props => props.active && css`
    transform: scale(1.1) translate(0px, 0px);
  `};
`

const InheritedSectionItemIcon = styled(Image)`
  height: 16px;
  width: 16px;
  margin: 0 5px;

  filter: ${(props) => props.active ? "brightness(1)" : props.theme === themeDark ? "brightness(0) invert(1)" : "brightness(0)"};
  opacity: ${(props) => props.active ? "1" : props.theme === themeDark ? "0.5" : "0.25"};

  transition: transform .1s ease-out;
  ${ props => props.active && css`
    transform: scale(1.25) translate(0px, 0px);
  `};

`

const LeftBarPrimarySectionIcon = styled(InheritedSectionGroupIcon)`

`

const LeftBarPrimaryItemIcon = styled(InheritedSectionItemIcon)`

`


const LeftBarSecondarySectionIcon = styled(InheritedSectionGroupIcon)`
  height: 16px;
  width: 16px;
`

const LeftBarSecondaryItemIcon = styled(InheritedSectionItemIcon)`

`

// Export Default
export default NavigationButton;
