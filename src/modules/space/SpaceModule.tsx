// React + Web3 Essentials
import React, { useContext, useEffect } from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { SpaceBoxSection, SpaceSidebarSection } from 'sections/space';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import GLOBALS, { device, globalsMargin } from 'config/Globals';
import { SpaceGlobalContext, SpaceLocalContext, SpaceLocalContextProvider } from 'contexts';
import { useWeb3React } from '@web3-react/core';
import { ChatUserContext } from 'contexts/ChatUserContext';
import { getSpaceRequests, getSpaces } from 'services/space';
import { getSpaceRequestsFromIndexedDB, getSpacesFromIndexedDB } from 'helpers/space';
import useModalBlur, { MODAL_POSITION } from 'hooks/useModalBlur';
import useToast from 'hooks/useToast';
import CreateSpaceModal from 'components/space/spaceModals/CreateSpaceModal';

export const SpaceModule = ({ }) => {
  const theme = useTheme();
  const { account, library } = useWeb3React();
  //shift getUser to app context and add type 
  const { connectedUser,getUser } = useContext(ChatUserContext);
  const { userSpaces,setSpaceRequests,setSpaces } = useContext(SpaceGlobalContext);
  const { selectedSpace,activeTab } = useContext(SpaceLocalContext);


  useEffect(() => {
    if(connectedUser || !account || !library) return;
    
    (async function () {
      try {
        const signer = await library.getSigner();
        await getUser(account, signer);
      } catch (err) {
        console.log(err);
      }
    })()
  },[account,library]);

  useEffect(() => {
    if(!connectedUser) return;
    (async function () {
      try {
        if(!userSpaces[account]?.spaces){
        const spaces = await getSpacesFromIndexedDB(connectedUser);
        //add decryption method call
        getSpaces(account);
        setSpaces(spaces,account);
        }
        if(!userSpaces[account]?.spaceRequests){
        const spaceRequests = await getSpaceRequestsFromIndexedDB(connectedUser);
        //add decryption method call
        getSpaceRequests(account);
        setSpaceRequests(spaceRequests,account);
        }
      } catch (err) {
        console.log(err);
      }
    })()
  },[connectedUser]);

  const spaceModalToast = useToast();

  const {
    isModalOpen: isCreateSpaceModalOpen,
    showModal: showCreateSpaceModal,
    ModalComponent: CreateSpaceModalComponent,
  } = useModalBlur();
console.log(selectedSpace)
console.log(activeTab)
useEffect(()=>{console.log("in heree")},[selectedSpace])
  // RENDER
  return (
    <SpaceLocalContextProvider>
    <Container>
    
        <SpaceSidebarSection showCreateSpaceModal={showCreateSpaceModal}/>
     
        <SpaceBoxSection />


      <CreateSpaceModalComponent
       InnerComponent={CreateSpaceModal}
       onConfirm={() => {}}
       toastObject={spaceModalToast}
       modalPadding="0px"
       modalPosition={MODAL_POSITION.ON_PARENT}
      />


    </Container>
  </SpaceLocalContextProvider>
  );
}

// This defines the page settings, toggle align-self to center if not covering entire stuff, align-items to place them at center
// justify content flex start to start from top, height is defined by module as well as amount of margin, padding
// css styles
const Container = styled.div`
	align-items: stretch;
	align-self: stretch;
  flex: 1;
	background: ${(props) => props.theme.default.bg};
	border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
	box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: row;
	flex: initial;
	justify-content: center;
	position: relative;
  overflow: hidden;
  box-sizing: border-box;

  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.DESKTOP.TOP} - ${
  globalsMargin.MINI_MODULES.DESKTOP.BOTTOM
});
  
  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.TABLET.TOP} - ${
  globalsMargin.MINI_MODULES.TABLET.BOTTOM
});
  }

  @media ${device.mobileL} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.MOBILE.TOP} - ${
  globalsMargin.MINI_MODULES.MOBILE.BOTTOM
});
    border: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
`;


