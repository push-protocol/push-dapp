// React + Web3 Essentials
import React from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

// External Packages
import styled, { css, useTheme } from 'styled-components';

// Internal Compoonents
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { Anchor, Image, ItemH, RouterLink, Span } from 'primaries/SharedStyling';
import { ItemVV2 } from './reusables/SharedStylingV2';

// Internal Configs
import GLOBALS from 'config/Globals';
import { nothing } from 'immer';

// Create Header
function MobileNavButton({ item, data, sectionID, active, bg = 'none',showNavBar, setShowNavBar }) {
  const theme = useTheme();

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
    <>
      {data.loading && (
        <ItemVV2 alignSelf="flex-start" padding="0px 15px">
          <LoaderSpinner
            type={LOADER_TYPE.SEAMLESS}
            completed={false}
            spinnerSize={20}
            spinnerColor={(props) => props.theme.nav.color}
          />
        </ItemVV2>
      )}

      {!data.loading && !data.hidden && (
        <RouteLogic
          style={{ display: data.name === 'Hide' ? 'none' : 'block' }}
          flex='1'
          title={`${data.title}`}
          to={`${data.href ? data.href : '#'}`}
          href={`${data.href ? data.href : '#'}`}
          alt={`${data.alt}`}
          target={data.isRoute ? null : data.newTab ? '_blank' : 'self'}
          disabled={data.disabled}
          radius="16px"
          align="stretch"
          margin={definedMargin}
          padding='10px 15px 10px 0px'
          bg={bg}
          hover={'transparent'}
          hoverBG={'transparent'}
          onClick={() => {
            if(item.data.drilldown){
                return nothing;
            }
            else {
                setShowNavBar(!showNavBar);
            }
          }}
          className={data?.name?.toLowerCase()}>
          {data.iconFactory ? (
            <ItemHV2 justifyContent="flex-start" padding="0 0rem">
              {data.iconFactory}
            </ItemHV2>
          ) : (
            <ItemH align="center">
              {!active ? (
                <SelectedIcon
                  src={require(`../assets/${data.src}`)}
                  margin="0 5px"
                  alt={`${data.alt}`}
                  active={active}
                />
              ) : (
                <SelectedIcon
                  src={require(`../assets/${data.activeSrc}`)}
                  margin="0 5px"
                  alt={`${data.alt}`}
                  active={active}
                />
              )}

              <Span
                flex="1"
                weight={!active ? '300' : '600'}
                spacing="0"
                margin="0 10px"
                color={theme.nav.color}
                minWidth='100px'
                size="17px">
                {data.name}
              </Span>

              {item.hasItems && !item.opened && <BiChevronDown color={theme.nav.color} />}

              {item.hasItems && item.opened && <BiChevronUp color={theme.nav.color} />}
            </ItemH>
          )}
        </RouteLogic>
      )}
    </>
  );
}

// css styles
const InheritedSectionGroupIcon = styled(Image)`
  height: 25px;
  width: 25px;
  margin: 0 5px;

  @media (max-width: 992px) {
      margin: 0px 0px;
  }

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

  @media (max-width: 992px) {
    margin: 0px 0px;
}

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
export default MobileNavButton;
