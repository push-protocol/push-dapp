// React + Web3 Essentials
import { useEffect, useState } from 'react';

// External Packages
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import styled, { css, useTheme } from 'styled-components';

// Internal Components
import { Anchor, Image, ItemH, RouterLink, Span } from 'primaries/SharedStyling';

// Internal Configs
import GLOBALS from 'config/Globals';
import { themeDark } from 'config/Themization';

// Assets
import { navigationIcons } from 'assets/navigation';

// Interface

// Constants

// Main Component
function NavButton({ item, data, sectionID, active }) {
  const theme = useTheme();
  const [icon, setIcon] = useState(null);
  const [activeIcon, setActiveIcon] = useState(null);

  useEffect(() => {
    setIcon(navigationIcons[data.src]);
    setActiveIcon(navigationIcons[data.activeSrc]);
  }, [data.src, data.activeSrc]);

  let SelectedIcon;
  let RouteLogic;
  let definedMargin;

  switch (sectionID) {
    case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.MOBILE:
      SelectedIcon = LeftBarPrimaryItemIcon;
      definedMargin = '5px';
      break;
    case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.SECONDARY:
      SelectedIcon = item.isSection ? LeftBarSecondarySectionIcon : LeftBarSecondaryItemIcon;
      definedMargin = item.isSection ? '0px' : '5px';
      break;
    case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.THIRD:
      SelectedIcon = item.isSection ? LeftBarSecondarySectionIcon : LeftBarSecondaryItemIcon;
      definedMargin = item.isSection ? '0px' : '5px';
      break;
    default:
      SelectedIcon = item.isSection ? LeftBarPrimarySectionIcon : LeftBarPrimaryItemIcon;
      definedMargin = item.isSection ? '0px' : '5px';
  }

  if (data.isRoute) {
    RouteLogic = RouterLink;
  } else {
    RouteLogic = Anchor;
  }

  return (
    <RouteLogic
      style={{ display: data.name === 'Hide' ? 'none' : 'block' }}
      flex="1"
      title={`${data.title}`}
      to={`${data.href ? data.href : '#'}`}
      href={`${data.href ? data.href : '#'}`}
      alt={`${data.alt}`}
      target={data.isRoute ? null : data.newTab ? '_blank' : 'self'}
      disabled={data.disabled}
      radius="16px"
      align="stretch"
      padding="12px"
      margin={definedMargin}
      //   bg={!active ? "transparent" : "#F9EBF3;"}
      active={active}
      className={data?.name?.toLowerCase()}
    >
      <ItemH align="center">
        {!active ? (
          <SelectedIcon
            src={icon}
            margin="0 5px"
            alt={`${data.alt}`}
            active={active}
          />
        ) : (
          <SelectedIcon
            src={activeIcon}
            margin="0 5px"
            alt={`${data.alt}`}
            active={active}
          />
        )}

        <Span
          flex="1"
          weight={!active ? '300' : '600'}
          spacing="normal"
          margin="0 5px"
          color={theme.nav.color}
          size="14px"
        >
          {data.name}
        </Span>

        {item.hasItems && !item.opened && <BiChevronDown color={theme.nav.color} />}

        {item.hasItems && item.opened && <BiChevronUp color={theme.nav.color} />}
      </ItemH>
    </RouteLogic>
  );
}

// css styles
const InheritedSectionGroupIcon = styled(Image)`
  height: 25px;
  width: 25px;
  margin: 0 5px;

  ${(props) =>
    props.active &&
    css`
      transform: scale(1.1) translate(0px, 0px);
    `};
`;

const InheritedSectionItemIcon = styled(Image)`
  height: 25px;
  width: 25px;
  margin: 0 5px;

  ${(props) =>
    props.active &&
    css`
      transform: scale(1.25) translate(0px, 0px);
    `};
`;

const LeftBarPrimarySectionIcon = styled(InheritedSectionGroupIcon)``;

const LeftBarPrimaryItemIcon = styled(InheritedSectionItemIcon)``;

const LeftBarSecondarySectionIcon = styled(InheritedSectionGroupIcon)`
  height: 25px;
  width: 25px;
`;

const LeftBarSecondaryItemIcon = styled(InheritedSectionItemIcon)``;

// Export Default
export default NavButton;
