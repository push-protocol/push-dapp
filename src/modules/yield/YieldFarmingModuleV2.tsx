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
  const [loading, setLoading] = useState(false);

  // Render
  return (
    <Container>

      <ItemHV2 justifyContent='flex-start'>
        <Tabs
          style={{ borderColor: activeTab === 0 && '#D53A94' }}
          onClick={() => setActiveTab(0)}>Yield Farming V2</Tabs>
        <Tabs
        style={{ borderColor: activeTab === 1 && '#D53A94' }}
        onClick={() => setActiveTab(1)}>Yield Farming V1</Tabs>
      </ItemHV2>

      {loading && (
        <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={24} />
      )}

      {activeTab === 0 && <NewYieldFarming setLoading={setLoading} />}
      {activeTab === 1 && <DeprecatedYieldFarming setActiveTab={setActiveTab} setLoading={setLoading} />}


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


const Tabs = styled.div`
  cursor:pointer;
  margin:10px;
  border-bottom:2px solid #657795; 
`