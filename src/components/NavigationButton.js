// React + Web3 Essentials
import React from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

// External Packages
import styled, { css, useTheme } from 'styled-components';
import { MdError } from 'react-icons/md';

// Internal Compoonents
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { Anchor, Image, ItemH, RouterLink, Span } from 'primaries/SharedStyling';
import { ItemHV2, ItemVV2, SpanV2 } from './reusables/SharedStylingV2';
import useToast from 'hooks/useToast';

// Internal Configs
import GLOBALS from 'config/Globals';
import { AppContext } from 'contexts/AppContext';
import { GlobalContext } from 'contexts/GlobalContext';

// Create Header
function NavigationButton({ item, data, sectionID, active, bg = 'none' }) {
  const theme = useTheme();

  const { showMetamaskPushSnap, handleConnectWallet } = React.useContext(AppContext);
  const { readOnlyWallet, mode, sidebarCollapsed } = React.useContext(GlobalContext);

  const navigationToast = useToast(5000);

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
  // Don't navigate to these routes if user is using a read-only wallet
  const disallowNavigation = readOnlyWallet && (data.allowReadOnly !== undefined && data.allowReadOnly === false);
  if (disallowNavigation) {
    RouteLogic = ProtectedRoute;
  }

  const handleDisallowedNav = () => {
    handleConnectWallet();
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
            flex="1"
            title={`${data.title}`}
            to={`${data.href ? data.href : '#'}`}
            href={`${data.href ? data.href : '#'}`}
            alt={`${data.alt}`}
            target={data.isRoute ? null : data.newTab ? '_blank' : 'self'}
            disabled={data.disabled}
            radius="16px"
            align="stretch"
            padding="10px"
            margin={definedMargin}
            bg={bg}
            active={active ? 1 : 0}
            // onClick={disallowNavigation && handleDisallowedNav}
            className={data?.name?.toLowerCase()}
          >
            {data.iconFactory ? (
              <ItemHV2 justifyContent="flex-start" padding="0 2rem">
                {data.iconFactory}
              </ItemHV2>
            ) : (
              <ItemH align="center">
                {!active ? (
                  <SelectedIcon
                    src={require(`../assets/${data.src}`)}
                    margin="0 5px"
                    alt={`${data.alt}`}
                    active={active ? 1 : 0}
                  />
                ) : (
                  <SelectedIcon
                    src={require(`../assets/${data.activeSrc}`)}
                    margin="0 5px"
                    alt={`${data.alt}`}
                    active={active ? 1 : 0}
                  />
                )}

                {!sidebarCollapsed && <Span
                  flex="1"
                  cursor="pointer"
                  weight={!active ? '300' : '600'}
                  spacing="0"
                  margin="0 5px"
                  color={theme.nav.color}
                  onClick={data?.hasOnClickFunction && showMetamaskPushSnap}
                  size="16px"
                >
                  {data.name}
                </Span>}

                {data?.showNewTag && !sidebarCollapsed && (
                  <NewTag>New</NewTag>
                )}

              </ItemH>
            )}
          </RouteLogic>
      )}
    </>
  );
}

// filter: ${(props) =>
//   props.active
//     ? "brightness(1)"
//     : props.theme === themeDark
//     ? "brightness(0) invert(1)"
//     : "brightness(0)"};
// opacity: ${(props) =>
//   props.active ? "1" : props.theme === themeDark ? "0.5" : "0.25"};

// transition: transform 0.1s ease-out;

// filter: ${(props) =>
//   props.active
//     ? "brightness(1)"
//     : props.theme === themeDark
//     ? "brightness(0) invert(1)"
//     : "brightness(0)"};
// opacity: ${(props) =>
//   props.active ? "1" : props.theme === themeDark ? "0.5" : "0.25"};

// transition: transform 0.1s ease-out;

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

const NewTag = styled(SpanV2)`
  font-weight: 600;
  font-size: 12px;
  letter-spacing:0;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #D53A94;
  margin-left:10px;
  padding: 2px 6px;
  background: #F3D7FA;
  border-radius: 6px;
  height: 17px;
  width:fit-content;
`;

const ProtectedRoute = styled(SpanV2)``;

// Export Default
export default NavigationButton;
