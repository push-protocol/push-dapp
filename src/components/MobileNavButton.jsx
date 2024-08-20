// React + Web3 Essentials
import { useContext, useEffect, useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

// External Packages
import styled, { css, useTheme } from 'styled-components';

// Internal Compoonents
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { Anchor, Image, ItemH, RouterLink, Span } from 'primaries/SharedStyling';
import { ItemVV2, SpanV2 } from './reusables/SharedStylingV2';

// Internal Configs
import GLOBALS from 'config/Globals';
import { AppContext } from 'contexts/AppContext';
import { nothing } from 'immer';

// Assets
import { navigationIcons } from 'assets/navigation';

// Interface

// Constants

// Main Component
function MobileNavButton({ item, data, sectionID, active, bg = 'none', showNavBar, setShowNavBar }) {
  const theme = useTheme();
  const [icon, setIcon] = useState(null);
  const [activeIcon, setActiveIcon] = useState(null);

  const { showMetamaskPushSnap } = useContext(AppContext);

  useEffect(() => {
    setIcon(navigationIcons[data.src] ?? data.src);
    setActiveIcon(navigationIcons[data.activeSrc] ?? data.activeSrc);
  }, [data.src, data.activeSrc]);

  let SelectedIcon;
  let RouteLogic;
  let definedMargin;

  switch (sectionID) {

    case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.MOBILE:
      SelectedIcon = LeftBarPrimaryItemIcon;
      definedMargin = '5px';
      break;
    case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.NOTIFICATION:
      SelectedIcon = item.isSection ? LeftBarSecondarySectionIcon : LeftBarSecondaryItemIcon;
      definedMargin = item.isSection ? '0px' : '5px';
      break;
    case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.MESSAGING:
      SelectedIcon = item.isSection ? LeftBarSecondarySectionIcon : LeftBarSecondaryItemIcon;
      definedMargin = item.isSection ? '0px' : '5px';
      break;
    case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.DEVELOPERS:
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
        <ItemVV2
          alignSelf="flex-start"
          padding="0px 15px"
        >
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
          margin={definedMargin}
          padding="10px 15px 10px 0px"
          bg={bg}
          hover={'transparent'}
          hoverBG={'transparent'}
          onClick={() => {
            if (item.data.drilldown) {
              return nothing;
            } else {
              setShowNavBar(!showNavBar);
            }
          }}
          className={data?.name?.toLowerCase()}
        >
          {data.iconFactory ? (
            <ItemHV2
              justifyContent="flex-start"
              padding="0 0rem"
            >
              {data.iconFactory}
            </ItemHV2>
          ) : (
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
                margin="0 10px"
                color={theme.nav.color}
                onClick={data?.hasOnClickFunction && showMetamaskPushSnap}
                minWidth="100px"
                size="17px"
              >
                {data.name}
              </Span>

              {data?.showNewTag && <NewTag>New</NewTag>}

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

const NewTag = styled(SpanV2)`
  font-weight: 600;
  font-size: 12px;
  letter-spacing: normal;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #d53a94;
  margin-left: 10px;
  padding: 2px 6px;
  background: #f3d7fa;
  border-radius: 6px;
  height: 17px;
  width: fit-content;
`;

// Export Default
export default MobileNavButton;
