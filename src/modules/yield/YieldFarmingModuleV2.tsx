// React + Web3 Essentials
import React, { useEffect, useState } from 'react';

// External Packages
import ReactGA from 'react-ga';
import styled from 'styled-components';

// Internal Compoonents
import { ItemHV2, ItemVV2, SectionV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import DeprecatedYieldFarming from 'sections/yield/DeprecatedYieldFarming';
import NewYieldFarming from 'sections/yield/NewYieldFarming';
import { useAccount } from 'hooks';

// Internal Configs
import { abis, addresses, appConfig } from 'config';
import GLOBALS, { device, globalsMargin } from 'config/Globals';
import { ethers } from 'ethers';
import useModalBlur, { MODAL_POSITION } from 'hooks/useModalBlur';
import YieldFarmChainError from 'components/YieldFarmChainError';

// Constants
export const ALLOWED_CORE_NETWORK = appConfig.coreContractChain;


// Create Inbox Module
const YieldFarmingModuleV2 = () => {
  // React GA Analytics
  ReactGA.pageview('/yield');

  const [activeTab, setActiveTab] = useState(0);
  const [newStaking, setNewStaking] = useState(false);

  const { account, chainId, switchChain} = useAccount();


  const handleChainChange = () => {

    const chainIdToPass = appConfig.allowedNetworks[0];

    if(chainId !== 1 && chainId !== 5){
      switchChain(chainIdToPass);
    }

  }

  useEffect(() => {

    if (chainId !== 1 && chainId !== 11155111) {
      displayNonEthChainModal();
      handleChainChange();
    }

  }, [chainId])

  const {
    isModalOpen: isNonEthChainModalOpen,
    showModal: displayNonEthChainModal,
    ModalComponent: NonEthChainModal,
  } = useModalBlur();

  // Render
  return (
    <Container>

      <NonEthChainModal
        InnerComponent={YieldFarmChainError}
        onConfirm={() => { }}
        modalPadding="0px"
        modalPosition={MODAL_POSITION.ON_PARENT}

      />

      <TabContainer >
        <Tabs
          isActive={!activeTab}
          onClick={() => {
            setNewStaking(true)
            setActiveTab(0)
          }

          }>Yield Farming V2</Tabs>
        <Tabs
          isActive={activeTab}
          onClick={() => {
            setNewStaking(false)
            setActiveTab(1)
          }

          }>Yield Farming V1 <Deprecated>Deprecated</Deprecated>
        </Tabs>
      </TabContainer>

      {activeTab === 0 && <NewYieldFarming setActiveTab={setActiveTab} />}
      {activeTab === 1 && <DeprecatedYieldFarming setActiveTab={setActiveTab} />}

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
  padding: 24px;

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
    padding:16px;
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
  min-height: 51px;
  position: relative;

  :after {
    position: absolute;
    height: 2px;
    left: 0;
    bottom: 0px;
    width: 100%;
    content: '';
    background-color: ${props => props.theme.default.border};
  }
`

const Tabs = styled.div`
  cursor:pointer;
  // padding: 0 25px;
  width: 250px;
  justify-content: center;
  display:flex;
  height: 25px;
  line-height: 141%;
  text-align: center;
  position: relative;
  color: ${(props) => (props.isActive ? '#CF1C84' : props.theme.color)};

  @media (max-width:638px){
    width:150px;
    flex:1;
    flex-direction:column;
    align-items: baseline;
  }

  ${(props) =>
    props.isActive &&
    `&:after{
        position: absolute;
        height: 2px;
        left: 0;
        bottom: -13px;
        width: 100%;
        content: '';
        background-color: #CF1C84;
        z-index: 1;
        
    }`
  }
  
 

`

const Deprecated = styled(SpanV2)`
  font-weight: 600;
  font-size: 12px;
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
`