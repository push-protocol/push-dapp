import React, { Components, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector'
import { Web3Provider } from 'ethers/providers'

import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

import styled, { useTheme, css } from "styled-components";
import {Section, Item, ItemH, Span, Anchor, RouterLink, Image} from 'components/SharedStyling';

import NavigationButton from 'components/NavigationButton';
import NavigationList from "config/NavigationList";

import { themeLight, themeDark } from "config/Themization";
import GLOBALS from "config/Globals";

// Create Header
function Navigation() {
    const [sectionOverride, setSectionOverride] = useState([])
    const [menuList, setMenuList] = useState([])
    const [loading, setLoading] = useState(false);

    const theme = useTheme();
    const location = useLocation();

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      if (!loading) {
          setLoading(true);

          // Set Primary List
          const primaryList = returnTransformedList(NavigationList.primary, GLOBALS.CONSTANTS.NAVBAR_SECTIONS.PRIMARY);
          
          // Set Secondary List
          const secondaryList = returnTransformedList(NavigationList.secondary, GLOBALS.CONSTANTS.NAVBAR_SECTIONS.SECONDARY);

          // Set Social List
          const socialList = returnTransformedList(NavigationList.social, GLOBALS.CONSTANTS.NAVBAR_SECTIONS.SOCIAL);
          
          // Set Nav List
          let count = -1;
          let mobList = returnNavList(NavigationList.primary, count);
          mobList = Object.assign(mobList, returnNavList(NavigationList.secondary, Object.keys(mobList).length));
          
          const finalList = {
            primary: primaryList,
            secondary: secondaryList,
            social: socialList,
            mobile: mobList
          };
          
          setMenuList(finalList);
      }
        
    }, []);

    const returnTransformedList = (lists, identity) => {
      let transformedList = [];
      let count = -1;
      Object.entries(lists).forEach(([key, value]) => {
          count++;
          let identifier = count.toString();

          const section = lists[key];

          transformedList[identifier] = {};
          transformedList[identifier].active = false;
          transformedList[identifier].isSection = true;
          transformedList[identifier].hasMenuLogic = value.hasMenuLogic;

          transformedList[identifier].id = identity + "_" + key;
          transformedList[identifier].parent = null;
          transformedList[identifier].hasItems = false;
          transformedList[identifier].opened = false;

          if (location.pathname === section.href) {
              transformedList[identifier].active = true;
          }
          transformedList[identifier].data = value;

          if (section.hasOwnProperty('drilldown')) {
            let drillcount = -1;
            let drilldownModified = {};

            Object.entries(section.drilldown).forEach(([drillkey, drillvalue]) => {
              drillcount++;
              let drillIdentifier = drillcount.toString();
              const item = section.drilldown[drillkey];

              drilldownModified[drillIdentifier] = {};
              drilldownModified[drillIdentifier].active = false;
              drilldownModified[drillIdentifier].isSection = false;
              drilldownModified[drillIdentifier].hasMenuLogic = drillvalue.hasMenuLogic;

              drilldownModified[drillIdentifier].id = drillkey;
              drilldownModified[drillIdentifier].parent = transformedList[identifier].id;
              transformedList[identifier].hasItems = true;

              // Check and expand it if the pathname matches
              if (location.pathname === item.href) {
                  transformedList[identifier].active = true;
                  transformedList[identifier].opened = true;

                  drilldownModified[drillIdentifier].active = true;
              }

              drilldownModified[drillIdentifier].data = drillvalue;
            })

            transformedList[identifier].data.drilldown = drilldownModified;
          }
      });

      return transformedList;
    }

    const mutateTransformedList = (item, sectionID) => {
      let activeParentId = null;
      let activeDrilldownId = null; 

      // check if this requires menu Logic
      if (item.hasMenuLogic) {
        // check if it's a section
        if (item.isSection) {
          activeParentId = item.id;
        }
        else {
          // item is drilldown, mark both id 
          activeDrilldownId = item.id;
          activeParentId = item.parent;
        }
      }
      
      if (activeParentId == null && activeDrilldownId == null) {
        // nothing to do, return back
        return;
      }

      // Finally transform the json menulist
      let transformedMenuList = menuList; 

      // Check and take action on Drop down getting toggled or section doesn't have dropdown menu
      let selectedSectionIsActionable = false;

      if (activeDrilldownId == null) {
        Object.keys(transformedMenuList).forEach(key => {
          if (key === 'primary' || key === 'secondary') {
            Object.keys(transformedMenuList[key]).forEach(sectionkey => {
              const section = transformedMenuList[key][sectionkey];
              
              if (section.id === activeParentId) {
                section.opened = !section.opened;

                if (section.hasItems) {
                  selectedSectionIsActionable = true;
                }
              }
            })
          }
        })
      }

      if (selectedSectionIsActionable) {
        // section had items but activeDrilldownId not set means dropdown toggle
        return;
      }

      // menu item is getting selected
      Object.keys(transformedMenuList).forEach(key => {
        if (key === 'primary' || key === 'secondary') {
          Object.keys(transformedMenuList[key]).forEach(sectionkey => {
            const section = transformedMenuList[key][sectionkey];

            if (section.id !== activeParentId) {
              if (section.active) {
                transformedMenuList[key][sectionkey].active = false;
                
                if (section.hasItems) {
                  // loop and make all false
                  Object.keys(transformedMenuList[key][sectionkey].data.drilldown).forEach(drillkey => {
                    transformedMenuList[key][sectionkey].data.drilldown[drillkey].active = false;
                  })
                }
              }
            }
            else {
              transformedMenuList[key][sectionkey].active = true;
              
              if (section.hasItems) {
                // loop and make all false
                Object.keys(transformedMenuList[key][sectionkey].data.drilldown).forEach(drillkey => {
                  const item = transformedMenuList[key][sectionkey].data.drilldown[drillkey];

                  if (item.id === activeDrilldownId) {
                    item.active = true;
                  }
                  else {
                    item.active = false;
                  }
                })
              }
            }
          })
        }
      })
    }

    const returnNavList = (lists, count) => {
      let transformedList = [];
      
      Object.entries(lists).forEach(([key, value]) => {
        const section = lists[key];

        // omit parent if drilldown
        if (section.hasOwnProperty('drilldown')) {
          Object.entries(section.drilldown).forEach(([drillkey, drillvalue]) => {
            count++;
            let identifier = count.toString();

            const item = section.drilldown[drillkey];

            transformedList[identifier] = {};
            transformedList[identifier].active = false;
            transformedList[identifier].isSection = false;
            transformedList[identifier].id = `${key}_${drillkey}`;

            // Check and expand it if the pathname matches
            if (location.pathname === item.href) {
                transformedList[identifier].active = true;
            }
            transformedList[identifier].data = drillvalue;
          })
        }
        else {
          count++;
          let identifier = count.toString();

          transformedList[identifier] = {};
          transformedList[identifier].active = false;
          transformedList[identifier].isSection = true;
          transformedList[identifier].hasItems = false;
          transformedList[identifier].id = key;

          if (location.pathname === section.href) {
              transformedList[identifier].active = true;
          }
          transformedList[identifier].data = value;
        }
      });

      return transformedList;
    }

    // Render main items
    const renderMainItems = (items, sectionID) => {
      let Section;
      let fontSize;

      switch(sectionID) {
        case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.SECONDARY:
          Section = SecondarySection;
          fontSize = "small";
          break;
        default:
          Section = PrimarySection;
          fontSize = "normal";
      }

      let rendered = (
        Object.keys(items).map(function(key) {
          const section = items[key];
          const data = section.data;
          
          let innerRendered = (
            <Section 
                key={key}
                flex="1"
                align="stretch"
                size={fontSize}
            >
              <Item
                padding="10px"
                flexBasis="100%"
                align="stretch"
                direction="row"
                overflow="hidden"
              >
                <SectionInnerGroupContainer
                  flex="1"
                  align="stretch"
                  bg={theme.leftBarButtonBg}
                  zIndex={2}
                  onClick={() => mutateTransformedList(section, sectionID)}
                >
                  <NavigationButton
                    item={section}
                    data={data}
                    sectionID={sectionID}
                    active={section.active}
                  />
                </SectionInnerGroupContainer>
                
                { 
                section.hasItems 
                  ? renderChildItems(
                      data.drilldown, 
                      section.opened,
                      GLOBALS.CONSTANTS.NAVBAR_SECTIONS.PRIMARY
                    )
                  : null
                }
              </Item>
                

            </Section>
          )

          return innerRendered;
        })
      )

      return rendered;
    }

    // Render Child Items
    const renderChildItems = (drilldown, opened, sectionID) => {
      let SectionGroup;
      let SectionItem;

      switch(sectionID) {
        case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.SECONDARY:
          SectionGroup = PrimarySectionGroup;
          SectionItem = PrimarySectionItem;
          break;
        default:
          SectionGroup = PrimarySectionGroup;
          SectionItem = PrimarySectionItem;
      }

      let rendered = (
        <SectionGroup
          align="stretch"
          opened={opened}
        >
          {Object.keys(drilldown).map(function(key) {
            const item = drilldown[key];
            const data = item.data;
            
            return (
              <SectionItem
                  key={key}
                  flex="1"
                  align="stretch"
                  size="small" 
              >
                <SectionInnerItemContainer
                  flex="1"
                  align="stretch"
                  bg={theme.leftBarButtonBg}
                  zIndex={1}
                  onClick={() => mutateTransformedList(item, sectionID)}
                >
                  <NavigationButton
                    item={item}
                    data={data}
                    sectionID={sectionID}
                    active={item.active}
                  />
                </SectionInnerItemContainer>
              </SectionItem>
            )
          })}
        </SectionGroup>
      );

      return rendered;
    }
    
    return (
        <Container direction="column" headerHeight={GLOBALS.CONSTANTS.HEADER_HEIGHT}>
            {Object.keys(menuList).length > 0 &&
              <>
                <Primary>
                  {
                    renderMainItems(
                      menuList.primary,
                      GLOBALS.CONSTANTS.NAVBAR_SECTIONS.PRIMARY
                    )
                  }
                </Primary>
                <Footer
                  justify="flex-end"
                  align="strecth"
                >
                  <Secondary
                    align="stretch"
                    justify="flex-end"
                  >
                    {
                      renderMainItems(
                        menuList.secondary,
                        GLOBALS.CONSTANTS.NAVBAR_SECTIONS.SECONDARY
                      )
                    }
                  </Secondary>
                </Footer>
          </>
            }
        </Container>
    );
}

// CSS Styles
const Container = styled(Section)`
  background: ${props => props.theme.leftBarBg};
  flex: 1;
  height: calc(100% - ${props => props.headerHeight}px);
  margin: ${props => props.headerHeight}px 0px 0px 0px;
  border-right: 1px solid ${props => props.theme.sectionBorderBg};
`

const Primary = styled(Item)`
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: flex-start;
  background: '#fff';
  overflow-y: scroll;
  padding: 0px 0px 20px 0px;
`

const InheritedSection = styled(Item)`
  flex: initial;
  align-items: 'center';
`

const PrimarySection = styled(InheritedSection)`
  border-bottom: 1px solid ${props => props.theme.sectionBorderBg};
  border-top: 1px solid ${props => props.theme.sectionBorderBg};
  margin-top: -1px;
`

const InheritedSectionGroup = styled(Item)`
  align-items: 'stretch';
`

const InheritedSectionItem = styled(Item)`
  align-items: 'stretch';
  padding: 0px 0px 0px 20px;
`

const SectionInnerGroupContainer = styled(Item)`
  &:after {
    content: '';
    position: absolute;
    top: -10px;
    right: 0;
    left: 0;
    background: ${props => props.theme.leftBarButtonBg};
    height: 10px;
  } 
`

const SectionInnerItemContainer = styled(Item)`

`

const PrimarySectionGroup = styled(InheritedSectionGroup)`
  transition: margin .1s ease-out;
  ${ props => !props.opened && css`
    margin-top: -100%;
  `};
`

const PrimarySectionItem = styled(InheritedSectionItem)`
  
`

const Footer = styled(Item)`
  z-index: 3;
`

const Secondary = styled(Item)`
  flex: auto;
`

const SecondarySection = styled(InheritedSection)`

`

const Social = styled(Item)`

`

// Export Default
export default Navigation;
