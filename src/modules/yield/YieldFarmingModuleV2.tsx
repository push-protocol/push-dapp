// React + Web3 Essentials
import React, { useState } from 'react';

// External Packages
import ReactGA from 'react-ga';
import styled from 'styled-components';

// Internal Compoonents
import { ItemHV2, ItemVV2, SectionV2 } from 'components/reusables/SharedStylingV2';
import YieldAnnouncementSection from 'sections/yield/YieldAnnouncementSection';
import YieldPushPriceSection from 'sections/yield/YieldPushPriceSection';
import YieldSnapshotSection from 'sections/yield/YieldSnapshotSection';
import YieldStatsSection from 'sections/yield/YieldStatsSection';

// Internal Configs
import { abis, addresses, appConfig } from 'config';
import GLOBALS, { device, globalsMargin } from 'config/Globals';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';
import YieldFarmingDataStoreV2 from 'singletons/YieldFarmingDataStoreV2';
import DeprecatedYieldFarming from 'sections/yield/DeprecatedYieldFarming';
import NewYieldFarming from 'sections/yield/NewYieldFarming';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';

// Constants
export const ALLOWED_CORE_NETWORK = appConfig.coreContractChain;

// Create Inbox Module
const YieldFarmingModuleV2 = () => {
  // React GA Analytics
  ReactGA.pageview('/yield');

  const [activeTab, setActiveTab] = useState(1);
  const [newStaking, setNewStaking] = useState(true);
  const [loading, setLoading] = useState(false);

  // Render
  return (
    <Container>

      <TabContainer >
        <Tabs
          isActive={newStaking}
          onClick={() => {
            setNewStaking(true)
            setActiveTab(0)
          }

          }>Yield Farming V2</Tabs>
        <Tabs
          isActive={!newStaking}
          onClick={() => {
            setNewStaking(false)
            setActiveTab(1)
          }

          }>Yield Farming V1</Tabs>
      </TabContainer>

      {/* {loading && (
        <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={24} />
      )} */}

      {newStaking ? (
        <NewYieldFarming setLoading={setLoading} />
      ) : (
        <DeprecatedYieldFarming setActiveTab={setActiveTab} setLoading={setLoading} />
      )}

    </Container>
  );
};
export default YieldFarmingModuleV2;

// css styles
const Container = styled(SectionV2)`
	align-items: stretch;
	align-self: center;
  flex: 1;
	background: ${(props) => props.theme.default.bg};
	border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
	box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: column;
	flex: initial;
	justify-content: center;
	position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: calc(
    100% - ${globalsMargin.MINI_MODULES.DESKTOP.RIGHT} - ${globalsMargin.MINI_MODULES.DESKTOP.LEFT} -
      ${GLOBALS.ADJUSTMENTS.PADDING.BIG} - ${GLOBALS.ADJUSTMENTS.PADDING.BIG}
  );
  gap: 16px;
  padding: ${GLOBALS.ADJUSTMENTS.PADDING.BIG};

  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  
  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
  }

  @media ${device.tablet} {
    width: calc(
      100% - ${globalsMargin.MINI_MODULES.TABLET.RIGHT} - ${globalsMargin.MINI_MODULES.TABLET.LEFT} -
        ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT}
    );
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
  }

  @media ${device.mobileL} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    border: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
    width: 100%;
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
`;

const TabContainer = styled(ItemHV2)`
  justify-content:flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 80px;
  position: relative;

  :after {
    position: absolute;
    height: 2px;
    left: 0;
    bottom: 13px;
    width: 100%;
    content: '';
    background-color: ${props => props.theme.default.border};
  }
`

const Tabs = styled.div`
  cursor:pointer;
  padding: 0 25px;
  width: 48;
  height: 25px;
  line-height: 141%;
  text-align: center;
  position: relative;
  color: ${(props) => (props.isActive ? '#CF1C84' : props.theme.color)};

  ${(props) =>
    props.isActive &&
    `&:after{
        position: absolute;
        height: 2px;
        left: 0;
        bottom: -15px;
        width: 100%;
        content: '';
        background-color: #CF1C84;
        z-index: 1;
        
    }`}

`