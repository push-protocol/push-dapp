// React + Web3 Essentials
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import styled from 'styled-components';

// Internal Components
// import { SpaceBoxSection, SpaceSidebarSection } from 'sections/space';
// import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import GLOBALS, { device, globalsMargin } from '../../config/Globals';
import * as w2wHelper from 'helpers/w2w/';
// import { SpaceGlobalContext, SpaceLocalContext, SpaceLocalContextProvider } from 'contexts';
// import { getSpaceRequests, getSpaces } from 'services/space';
// import { getSpaceRequestsFromIndexedDB, getSpacesFromIndexedDB } from 'helpers/space';
// import { SpaceInfoModalContent } from 'components/space/spaceModals/spaceInfoModal';
// import useToast from 'hooks/useToast';
// import MemberMenuModal from 'components/space/spaceModals/MemberMenu/MemberMenuModal';
// import useModalBlur, { MODAL_POSITION } from 'hooks/useModalBlur';
// import CreateSpaceModal from 'components/space/spaceModals/createSpaceModals/CreateSpaceModal';
// import SpaceNotification from 'components/space/spaceNotification/SpaceNotification';
// import { useDeviceWidthCheck } from 'hooks/useDeviceWidthCheck';

import SpaceFeedSection from 'sections/space/SpaceFeedSection';
import { appConfig } from 'config';
import * as PushAPI from '@pushprotocol/restapi';
import { ConnectedUser, User } from 'types/chat';
import LoaderSpinner from 'primaries/LoaderSpinner';
import { LOADER_OVERLAY, LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { Item } from 'primaries/SharedStyling';
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import { useAccount, useSDKSocket } from 'hooks';
import { SpaceContext } from 'contexts/SpaceContext';
import { AppContext } from 'contexts/AppContext';

export const SpaceModule = ({ spaceid }) => {
  const { account, chainId } = useAccount();

  const [isLoading, setIsLoading] = useState(true);

  const { getUser, connectedUser, setConnectedUser, pgpPvtKey, setPgpPvtKey, createUserIfNecessary } = useContext(AppContext);

  useSDKSocket({ account, chainId, env: appConfig.appEnv });

  useEffect(() => {
    setIsLoading(true);
    setConnectedUser(null);
  }, [account])

  useEffect(() => {
    if (isLoading) {
      setConnectedUser(connectedUser);
      connectUser();
    }
  }, [connectedUser]);

  const connectUser = async (): Promise<void> => {
    const caip10: string = w2wHelper.walletToCAIP10({ account });

    if (connectedUser?.wallets?.toLowerCase() !== caip10?.toLowerCase()) {
      await getUser();
    }

    setIsLoading(false);

  };

  // RENDER
  return (
    <Container>

      {isLoading ?
        <CenterContainer>
          <ItemVV2>
            <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={24} />
          </ItemVV2>
        </CenterContainer>
        : <SpaceFeedSection spaceid={spaceid} />}
    </Container>
  );
};

// This defines the page settings, toggle align-self to center if not covering entire stuff, align-items to place them at center
// justify content flex start to start from top, height is defined by module as well as amount of margin, padding
// css styles
const Container = styled.div`
  align-items: stretch;
  align-self: stretch;
  flex: 1;
  // background: ${(props) => props.theme.default.bg};
  // border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
  // box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  // flex: initial;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  // padding: 13px 13px 13px 0px;
  margin: 0px 0px 17px 14px;

  // margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  max-height: calc(
    100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.DESKTOP.TOP} -
      ${globalsMargin.MINI_MODULES.DESKTOP.BOTTOM}
  );



  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    height: calc(
      100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.TABLET.TOP} -
        ${globalsMargin.MINI_MODULES.TABLET.BOTTOM}
    );
  }

  @media ${device.mobileL} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    height: calc(
      100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.BIG_MODULES.MOBILE.TOP} -
        ${globalsMargin.BIG_MODULES.MOBILE.BOTTOM}
    );
  }
`;

const ContainerInfo = styled.div`
  padding: 20px;
`;

const CenterContainer = styled(ContainerInfo)`
  width: 100%;
  height: 100%;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//   const SpaceSidebarContainer = styled(ItemVV2)`
//   @media ${device.tablet} {
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     right: 0;
//     width: 95%;
//     margin-right: ${(props) => (props.spaceActive ? '20%' : '0%')};
//     opacity: ${(props) => (props.spaceActive ? '0' : '1')};
//     transition: margin-right 0.25s;
//     max-width: initial;
//     min-width: auto;
//     z-index: 1;
//   }
// `;

//   const SpaceContainer = styled(ItemVV2)`
//   @media ${device.tablet} {
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     margin-left: ${(props) => (props.spaceActive ? '0%' : '100%')};
//     transition: margin-left 0.25s;
//     max-width: initial;
//     min-width: auto;
//     z-index: 2;
//     background: white;
//   }
// `;
