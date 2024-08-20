// React + Web3 Essentials
import { useContext, useEffect, useMemo, useState } from 'react';

// External Packages

import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled, { css, useTheme } from 'styled-components';

// Internal Compoonents

import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import navigationList from 'config/NavigationList';
import { NavigationContext } from 'contexts/NavigationContext';
import { useAccount } from 'hooks';
import { Item, Span } from 'primaries/SharedStyling';
import { SEND_NOTIFICATION_STATES, setCanSend } from 'redux/slices/sendNotificationSlice';
import { incrementStepIndex, setTutorialContinous } from '../redux/slices/userJourneySlice';

// Internal Configs
import MobileNavButton from 'components/MobileNavButton';
import GLOBALS from 'config/Globals';
import { appConfig } from 'config/index.js';
import useFetchChannelDetails from 'common/hooks/useFetchUsersChannelDetails';
import { convertAddressToAddrCaip } from 'helpers/CaipHelper';
import APP_PATHS from 'config/AppPaths';

// Create Header
function MobileNavigation({ showNavBar, setShowNavBar }) {
  const {
    delegatees,
    aliasDetails: { aliasAddr, aliasEthAddr, isAliasVerified }
  } = useSelector((state: any) => state.admin);
  const [refresh, setRefresh] = useState(false);
  const { processingState } = useSelector((state: any) => state.channelCreation);
  const { run, stepIndex, isCommunicateOpen, isDeveloperOpen } = useSelector((state: any) => state.userJourney);
  const { navigationSetup, setNavigationSetup } = useContext(NavigationContext);

  const CORE_CHAIN_ID = appConfig.coreContractChain;
  const { account, chainId } = useAccount();
  const onCoreNetwork = CORE_CHAIN_ID === chainId;

  const theme = useTheme();
  const location = useLocation();
  const dispatch = useDispatch();

  const { canSend } = useSelector((state: any) => {
    return state.canSend;
  });

  const { channelDetails } = useFetchChannelDetails();
  const filteredAlias = useMemo(() => {
    return channelDetails?.aliases.find((alias) => alias.alias_address === convertAddressToAddrCaip(account, chainId));
  }, [channelDetails, account, chainId]);

  const checkIfAliasIsVerified = filteredAlias && !!filteredAlias?.is_alias_verified ? true : false;
  const onActiveNetwork =
    appConfig.coreContractChain === chainId ||
    (checkIfAliasIsVerified && parseInt(filteredAlias?.alias_blockchain_id as string) === chainId);

  useEffect(() => {
    if (!navigationSetup) return;

    let newNavSetup = navigationSetup;
    if (processingState === null) {
      newNavSetup.developersList[0].data.hidden = true;
      newNavSetup.developersList[1].data.hidden = true;
    } else {
      newNavSetup.developersList[0].data.hidden = true;
      newNavSetup.developersList[1].data.hidden = true;

      if (channelDetails !== 'unfetched' && channelDetails != null && channelDetails?.name !== null) {
        newNavSetup.developersList[0].data.name = channelDetails.name;
        newNavSetup.developersList[0].data.src = channelDetails.iconV2;
        newNavSetup.developersList[0].data.activeSrc = channelDetails.iconV2;
        newNavSetup.developersList[0].data.hidden = false;
        newNavSetup.developersList[0].data.loading = false;
        newNavSetup.developersList[0].data.href = `${APP_PATHS.ChannelDashboard}/${channelDetails.channel}`;
      } else {
        newNavSetup.developersList[0].data.name = 'Create Channel';
        newNavSetup.developersList[0].data.hidden = false;
        newNavSetup.developersList[0].data.loading = false;
        newNavSetup.developersList[0].data.src = 'createChannelIcon';
        newNavSetup.developersList[0].data.activeSrc = 'createChannelIcon';
        newNavSetup.developersList[0].data.href = `${APP_PATHS.CreateChannel}`;
      }

      if (canSend === SEND_NOTIFICATION_STATES.SEND) {
        newNavSetup.developersList[1].data.name = 'Send Notifications';
        newNavSetup.developersList[1].data.hidden = false;
      }
    }

    setNavigationSetup(newNavSetup);
  }, [canSend, channelDetails, navigationSetup, processingState, account]);

  useEffect(() => {
    if (processingState !== 0) {
      dispatch(setCanSend(SEND_NOTIFICATION_STATES.LOADING));
    } else {
      /**
       * If its a delegate
       * If the channel Details is present on the core network
       */
      if (delegatees && delegatees.length > 0) {
        dispatch(setCanSend(SEND_NOTIFICATION_STATES.SEND));
      }

      if (onActiveNetwork && channelDetails && channelDetails?.name !== null) {
        dispatch(setCanSend(SEND_NOTIFICATION_STATES.SEND));
      } else {
        dispatch(setCanSend(SEND_NOTIFICATION_STATES.HIDE));
      }
    }
  }, [channelDetails, delegatees, canSend, processingState, account, onActiveNetwork]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const primaryList = returnTransformedList(navigationList.primary, GLOBALS.CONSTANTS.NAVBAR_SECTIONS.PRIMARY);
    const notificationList = returnTransformedList(
      navigationList.secondary.Notifications,
      GLOBALS.CONSTANTS.NAVBAR_SECTIONS.NOTIFICATION
    );
    const messagingList = returnTransformedList(
      navigationList.secondary.Messsaging,
      GLOBALS.CONSTANTS.NAVBAR_SECTIONS.MESSAGING
    );
    const developersList = returnTransformedList(
      navigationList.secondary.Developers,
      GLOBALS.CONSTANTS.NAVBAR_SECTIONS.DEVELOPERS
    );
    const thirdList = returnTransformedList(navigationList.third, GLOBALS.CONSTANTS.NAVBAR_SECTIONS.THIRD);

    // Set Nav List
    let count = -1;
    let navList = returnNavList(navigationList.primary, count);
    navList = Object.assign(
      navList,
      returnNavList(navigationList.secondary.Notifications, Object.keys(navList).length)
    );
    navList = Object.assign(navList, returnNavList(navigationList.secondary.Messsaging, Object.keys(navList).length));
    navList = Object.assign(navList, returnNavList(navigationList.secondary.Developers, Object.keys(navList).length));
    navList = Object.assign(navList, returnNavList(navigationList.third, Object.keys(navList).length));

    const finalList = {
      primary: primaryList,
      notificationList: notificationList,
      messagingList: messagingList,
      developersList: developersList,
      third: thirdList,
      navigation: navList
    };
    setNavigationSetup(finalList);
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
      transformedList[identifier].hasMenuLogic = value['hasMenuLogic'];

      transformedList[identifier].id = identity + '_' + key;
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
          let item = section.drilldown[drillkey];

          drilldownModified[drillIdentifier] = {};
          drilldownModified[drillIdentifier].active = false;
          drilldownModified[drillIdentifier].isSection = false;
          drilldownModified[drillIdentifier].hasMenuLogic = drillvalue['hasMenuLogic'];

          drilldownModified[drillIdentifier].id = drillkey;
          drilldownModified[drillIdentifier].parent = transformedList[identifier].id;
          transformedList[identifier].hasItems = true;

          // Check and expand it if the pathname matches
          if (location.pathname === item.href) {
            transformedList[identifier].active = true;
            transformedList[identifier].opened = true;

            drilldownModified[drillIdentifier].active = true;
          }

          while (!item?.name) {
            item = item.data;
          }
          drilldownModified[drillIdentifier].data = item;
        });

        transformedList[identifier].data.drilldown = drilldownModified;
      }
    });
    if (identity === 2) console.debug(transformedList);
    return transformedList;
  };

  // Location has changed, reflect it accordingly
  useEffect(() => {
    if (navigationSetup) {
      // loop and find the item in question
      Object.entries(navigationSetup).forEach(([key, value]) => {
        if (
          key === 'primary' ||
          key === 'notificationList' ||
          key === 'messagingList' ||
          key === 'developersList' ||
          key === 'third'
        ) {
          const topSection = navigationSetup[key];

          Object.entries(topSection).forEach(([key, value]) => {
            const section = topSection[key];

            if (section.data.hasOwnProperty('drilldown')) {
              Object.entries(section.data.drilldown).forEach(([drillkey, drillvalue]) => {
                const item = section.data.drilldown[drillkey];

                if (location.pathname === item.data.href) {
                  const transformedList = mutateTransformedList(item);
                  setNavigationSetup(transformedList);
                  setRefresh(!refresh);
                  return;
                }
              });
            } else {
              if (location.pathname === section.data.href) {
                const transformedList = mutateTransformedList(section);
                setNavigationSetup(transformedList);
                setRefresh(!refresh);
                return;
              }
            }
          });
        }
      });
    }
  }, [location, navigationSetup, canSend]);

  const mutateTransformedList = (item, onlyDrilldown?) => {
    // Finally transform the json menulist
    let transformedMenuList = navigationSetup;

    let activeParentId = null;
    let activeDrilldownId = null;

    // check if this requires menu Logic
    if (item.hasMenuLogic) {
      // check if it's a section
      if (item.isSection) {
        activeParentId = item.id;
      } else {
        // item is drilldown, mark both id
        activeDrilldownId = item.id;
        activeParentId = item.parent;
      }
    }

    if (activeParentId == null && activeDrilldownId == null) {
      // nothing to do, return back
      return transformedMenuList;
    }

    // Check and take action on Drop down getting toggled or section doesn't have dropdown menu
    let selectedSectionIsActionable = false;

    if (activeDrilldownId == null) {
      Object.keys(transformedMenuList).forEach((key) => {
        if (
          key === 'primary' ||
          key === 'notificationList' ||
          key === 'messagingList' ||
          key === 'developersList' ||
          key === 'third'
        ) {
          Object.keys(transformedMenuList[key]).forEach((sectionkey) => {
            const section = transformedMenuList[key][sectionkey];

            if (section.id === activeParentId) {
              transformedMenuList[key][sectionkey].opened = !transformedMenuList[key][sectionkey].opened;

              if (section.hasItems) {
                selectedSectionIsActionable = true;
              }
            }
          });
        }
      });
    }

    if (selectedSectionIsActionable || onlyDrilldown) {
      // section had items but activeDrilldownId not set means dropdown toggle
      return transformedMenuList;
    } else {
      // menu item is getting selected
      Object.keys(transformedMenuList).forEach((key) => {
        if (
          key === 'primary' ||
          key === 'notificationList' ||
          key === 'messagingList' ||
          key === 'developersList' ||
          key === 'third'
        ) {
          Object.keys(transformedMenuList[key]).forEach((sectionkey) => {
            const section = transformedMenuList[key][sectionkey];

            if (section.id !== activeParentId) {
              if (section.active) {
                transformedMenuList[key][sectionkey].active = false;

                if (section.hasItems) {
                  // loop and make all false
                  Object.keys(transformedMenuList[key][sectionkey].data.drilldown).forEach((drillkey) => {
                    transformedMenuList[key][sectionkey].data.drilldown[drillkey].active = false;
                  });
                }
              }
            } else {
              transformedMenuList[key][sectionkey].active = true;

              if (section.hasItems) {
                // loop and make all false
                Object.keys(transformedMenuList[key][sectionkey].data.drilldown).forEach((drillkey) => {
                  const item = transformedMenuList[key][sectionkey].data.drilldown[drillkey];

                  if (item.id === activeDrilldownId) {
                    transformedMenuList[key][sectionkey].data.drilldown[drillkey].active = true;
                  } else {
                    transformedMenuList[key][sectionkey].data.drilldown[drillkey].active = false;
                  }
                });
              }
            }
          });
        }
      });
    }

    return transformedMenuList;
  };

  const returnNavList = (lists, count) => {
    let transformedList = [];

    Object.entries(lists).forEach(([key, value]) => {
      const section = lists[key];

      // omit parent if drilldown
      if (section.hasOwnProperty('drilldown')) {
        Object.entries(section.drilldown).forEach(([drillkey, drillvalue]) => {
          count++;
          let identifier = count.toString();

          let item = section.drilldown[drillkey];

          transformedList[identifier] = {};
          transformedList[identifier].active = false;
          transformedList[identifier].isSection = false;
          transformedList[identifier].id = `${key}_${drillkey}`;

          // Check and expand it if the pathname matches
          if (location.pathname === item.href) {
            transformedList[identifier].active = true;
          }
          while (!item?.name) {
            item = item.data;
          }
          transformedList[identifier].data = item;
        });
      } else {
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
  };

  // Render main items
  const renderMainItems = (items, sectionID) => {
    let Section;
    let fontSize;
    let secondaryButton = 0;
    switch (sectionID) {
      case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.NOTIFICATION:
        Section = PrimarySection;
        fontSize = 'small';
        break;
      case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.MESSAGING:
        Section = PrimarySection;
        fontSize = 'small';
        break;
      case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.DEVELOPERS:
        Section = PrimarySection;
        fontSize = 'small';
        break;
      case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.THIRD:
        Section = SecondarySection;
        fontSize = 'small';
        secondaryButton = 1;
        break;
      default:
        Section = PrimarySection;
        fontSize = 'normal';
    }
    let rendered = Object.keys(items).map(function(key) {
      const section = items[key];
      // console.log(section)
      const data = section.data;
      const uid = section.data.uid;
      // if(uid === 2 ){
      //   if(section.opened)
      //   dispatch(setCommunicateOpen(true))
      //   else
      //   dispatch(setCommunicateOpen(false))
      // }
      // else if(uid === 3){
      //   if(section.opened)
      //   dispatch(setDeveloperOpen(true))
      //   else
      //   dispatch(setDeveloperOpen(false))
      // }
      let innerRendered = (
        <Section key={key} flex="1" align="stretch" size={fontSize}>
          {secondaryButton ? (
            <Item padding="5px 0px" flexBasis="100%" align="stretch" direction="row" overflow="hidden">
              {section.hasItems
                ? renderChildItems(data.drilldown, section.opened, GLOBALS.CONSTANTS.NAVBAR_SECTIONS.PRIMARY)
                : null}

              <SectionInnerGroupContainer
                flex="1"
                align="stretch"
                zIndex={2}
                refresh={refresh}
                // margintop="15px"
                onClick={() => {
                  // console.log(`Clicked secondary button`);
                  mutateTransformedList(section, true);
                }}
                id={data.id}
              >
                <MobileNavButton
                  item={section}
                  data={data}
                  sectionID={sectionID}
                  active={section.active}
                  bg="transparent"
                  showNavBar={showNavBar}
                  setShowNavBar={setShowNavBar}
                />
              </SectionInnerGroupContainer>
            </Item>
          ) : (
            <Item padding="5px 0px" flexBasis="100%" align="stretch" direction="row" overflow="hidden">
              <SectionInnerGroupContainer
                flex="1"
                align="stretch"
                margintop="-10px"
                zIndex={2}
                refresh={refresh}
                // id={section.data.name}
                onClick={() => {
                  // const uid = section.data.uid;
                  // if(uid === 2 ){
                  //   if(!section.opened)
                  //   dispatch(setCommunicateOpen(true))
                  //   else
                  //   dispatch(setCommunicateOpen(false))
                  // }
                  // else if(uid === 3){
                  //   if(!section.opened)
                  //   dispatch(setDeveloperOpen(true))
                  //   else
                  //   dispatch(setDeveloperOpen(false))
                  // }
                  // console.log(`Clicked primary button`);
                  mutateTransformedList(section, true);

                  if (run && ((stepIndex === 1 && uid === 2) || (stepIndex === 16 && uid === 3))) {
                    setTimeout(() => {
                      dispatch(incrementStepIndex());
                      // if (stepIndex === 1 && uid === 2)dispatch(setTutorialContinous(true));
                    }, 500);
                  }
                }}
              >
                <MobileNavButton
                  item={section}
                  data={data}
                  sectionID={sectionID}
                  active={section.active}
                  showNavBar={showNavBar}
                  setShowNavBar={setShowNavBar}
                  bg="transparent"
                />
              </SectionInnerGroupContainer>

              {/* { 
                      section.hasItems 
                        ? renderChildItems(
                            data.drilldown, 
                            section.opened,
                            GLOBALS.CONSTANTS.NAVBAR_SECTIONS.PRIMARY
                          )
                        : null
                      } */}
            </Item>
          )}
        </Section>
      );

      return innerRendered;
    });

    return rendered;
  };

  // Render Child Items
  const renderChildItems = (drilldown, opened, sectionID) => {
    let SectionGroup;
    let SectionItem;

    switch (sectionID) {
      case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.NOTIFICATION:
        SectionGroup = PrimarySectionGroup;
        SectionItem = PrimarySectionItem;
        break;
      default:
        SectionGroup = PrimarySectionGroup;
        SectionItem = PrimarySectionItem;
    }

    let rendered = (
      <SectionGroup align="stretch" margin="5px 0px" opened={opened} refresh={refresh}>
        {Object.keys(drilldown).map(function(key) {
          const item = drilldown[key];
          const data = item.data;
          return (
            <SectionItem key={key} flex="1" align="stretch" size="small">
              <SectionInnerItemContainer
                flex="1"
                align="stretch"
                padding="0px 20px"
                zIndex={1}
                refresh={refresh}
                onClick={() => {
                  // console.log();
                  if (
                    run &&
                    ((stepIndex === 2 && data.name === 'Channels') ||
                      (stepIndex === 6 && data.name === 'Inbox') ||
                      (stepIndex === 8 && data.name === 'Spam') ||
                      (stepIndex === 10 && data.name === 'Receive Notifs') ||
                      (stepIndex === 16 && data.name === 'Create Channel') ||
                      (stepIndex === 17 && data.name === "Developer's Guide"))
                  ) {
                    if (stepIndex === 10) dispatch(setTutorialContinous(true));
                    dispatch(incrementStepIndex());
                  }
                  // console.log(`Clicked  button`);
                  // mutateTransformedList(item)
                }}
              >
                <MobileNavButton
                  item={item}
                  data={data}
                  sectionID={sectionID}
                  active={item.active}
                  showNavBar={showNavBar}
                  setShowNavBar={setShowNavBar}
                  bg="transparent"
                />
              </SectionInnerItemContainer>
            </SectionItem>
          );
        })}
      </SectionGroup>
    );

    return rendered;
  };

  return (
    <Item direction="column" align="flex-start">
      {!navigationSetup && (
        <Item padding="20px" justify="flex-start">
          <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={24} />
        </Item>
      )}
      {navigationSetup && Object.keys(navigationSetup).length > 0 && (
        <>
          <Primary>
            {renderMainItems(navigationSetup.primary, GLOBALS.CONSTANTS.NAVBAR_SECTIONS.PRIMARY)}

            <PrimaryInner>
              <TextSpan>Notifications</TextSpan>

              {renderMainItems(navigationSetup.notificationList, GLOBALS.CONSTANTS.NAVBAR_SECTIONS.NOTIFICATION)}
            </PrimaryInner>

            <PrimaryInner>
              <TextSpan>Messaging</TextSpan>

              {renderMainItems(navigationSetup.messagingList, GLOBALS.CONSTANTS.NAVBAR_SECTIONS.MESSAGING)}
            </PrimaryInner>

            <PrimaryInner>
              <TextSpan>Developers</TextSpan>
              {renderMainItems(navigationSetup.developersList, GLOBALS.CONSTANTS.NAVBAR_SECTIONS.DEVELOPERS)}
            </PrimaryInner>
          </Primary>

          <Footer justify="flex-start" align="stretch">
            {renderMainItems(navigationSetup.third, GLOBALS.CONSTANTS.NAVBAR_SECTIONS.THIRD)}
          </Footer>
        </>
      )}
    </Item>
  );
}

// CSS Styles

const Primary = styled(Item)`
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: flex-start;
  background: '#fff';
  flex: none;
  width: 100%;
  gap: 8px;
`;

const PrimaryInner = styled(Primary)`
  align-items: flex-start;
  padding: 3px 0px;
  gap: 5px;
`;

const InheritedSection = styled(Item)`
  flex: initial;
  align-items: 'center';
`;

const PrimarySection = styled(InheritedSection)`
  margin-top: -1px;
`;

const InheritedSectionGroup = styled(Item)`
  align-items: 'stretch';
`;

const InheritedSectionItem = styled(Item)`
  align-items: 'stretch';
  padding: 0px 0px 0px 20px;
`;

const SectionInnerGroupContainer = styled(Item)`
  &:after {
    content: '';
    position: absolute;
    top: ${(props) => props.margintop};
    right: 0;
    left: 0;
    height: 10px;
  }
`;

const TextSpan = styled(Span)`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 10px;
  padding: 0px 5px;
  color: #8c93a0;
  letter-spacing: normal;
`;

const SectionInnerItemContainer = styled(Item)``;

const PrimarySectionGroup = styled(Item)`
  border: 1px solid #e5e8f6;
  border-radius: 16px;
  transition: margin 0.1s ease-out;
  ${(props) =>
    !props.opened &&
    css`
      margin-top: -100%;
    `};
`;

const PrimarySectionItem = styled(Item)``;

const Footer = styled(Item)`
  z-index: 3;
`;

const Secondary = styled(Item)`
  flex: auto;
`;

const SecondarySection = styled(InheritedSection)``;

const Social = styled(Item)``;

// Export Default
export default MobileNavigation;
