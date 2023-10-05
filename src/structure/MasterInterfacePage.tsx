// React + Web3 Essentials
import React, { lazy, Suspense } from 'react';

// External Packages
import { VscClose } from 'react-icons/vsc';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import styled from 'styled-components';

// Internal Components
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { Anchor, Item } from '../primaries/SharedStyling';
const AirdropPage = lazy(() => import('pages/AirdropPage'));
const ChannelDashboardPage = lazy(() => import('pages/ChannelDashboardPage'));
const ChannelsPage = lazy(() => import('pages/ChannelsPage'));
const ChatPage = lazy(() => import('pages/ChatPage'));
const ComingSoonPage = lazy(() => import('pages/ComingSoonPage'));
const FAQPage = lazy(() => import('pages/FAQPage'));
const GovPage = lazy(() => import('pages/GovPage'));
const InboxPage = lazy(() => import('pages/InboxPage'));
const InternalDevPage = lazy(() => import('pages/InternalDevPage'));
const NFTPage = lazy(() => import('pages/NFTPage'));
const NotAvailablePage = lazy(() => import('pages/NotAvailablePage'));
const ReceiveNotifsPage = lazy(() => import('pages/ReceiveNotifsPage'));
const NotifSettingsPage = lazy(() => import('pages/NotifSettingsPage'));
const SendNotifsPage = lazy(() => import('pages/SendNotifsPage'));
const SpacePage = lazy(() => import('pages/SpacePage'));
const SpamPage = lazy(() => import('pages/SpamPage'));
const SupportPage = lazy(() => import('pages/SupportPage'));
const TutorialPage = lazy(() => import('pages/TutorialPage'));
// const YieldFarmingPage = lazy(() => import('pages/YieldFarmingPage'));
const YieldFarmingV2Page = lazy(() => import('pages/YieldFarmingPageV2'));
const UserSettingsPage = lazy(() => import('pages/UserSettingsPage'));

// import AirdropPage from 'pages/AirdropPage';
// import ChannelDashboardPage from 'pages/ChannelDashboardPage';
// import ChannelsPage from 'pages/ChannelsPage';
// import ChatPage from 'pages/ChatPage';
// import ComingSoonPage from 'pages/ComingSoonPage';
// import FAQPage from 'pages/FAQPage';
// import GovPage from 'pages/GovPage';
// import InboxPage from 'pages/InboxPage';
// import InternalDevPage from 'pages/InternalDevPage';
// import NFTPage from 'pages/NFTPage';
// import NotAvailablePage from 'pages/NotAvailablePage';
// import ReceiveNotifsPage from 'pages/ReceiveNotifsPage';
// import SendNotifsPage from 'pages/SendNotifsPage';
// import SpamPage from 'pages/SpamPage';
// import SupportPage from 'pages/SupportPage';
// import TutorialPage from 'pages/TutorialPage';
// import YieldFarmingPage from 'pages/YieldFarmingPage';

// Internal Configs
import { ItemVV2 } from 'components/reusables/SharedStylingV2';
import GLOBALS from 'config/Globals';
import { ethers } from 'ethers';
import CryptoHelper from 'helpers/CryptoHelper';
import * as w2wHelper from 'helpers/w2w';
import { ConnectedUser, Feeds, User } from 'types/chat';
import SnapPage from 'pages/SnapPage';
import { AppContext } from 'contexts/AppContext';
import { AppContextType } from 'types/context';
import MetamaskPushSnapModal from 'modules/receiveNotifs/MetamaskPushSnapModal';
import { MODAL_POSITION } from 'hooks/useModalBlur';
import APP_PATHS from 'config/AppPaths';

// Create Header
function MasterInterfacePage() {
  // Master Interface controls settings
  const [playTeaserVideo, setPlayTeaserVideo] = React.useState(false);
  const [loadTeaserVideo, setLoadTeaserVideo] = React.useState(null);
  const location = useLocation();

  const { MetamaskPushSnapModalComponent }:AppContextType = React.useContext(AppContext);

  // Render
  return (
    <Container>
      <Interface location={location.pathname}>
        <Suspense fallback={
          <ItemVV2>
            <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={24} />
          </ItemVV2>
        }
        >
          <Routes>
            <Route path={APP_PATHS.Inbox} element={<InboxPage />} />
            <Route path={APP_PATHS.Spam} element={<InboxPage />} />
            <Route path={`${APP_PATHS.Chat}/:chatid`} element={<ChatPage />} />
            <Route path={APP_PATHS.Chat} element={<ChatPage />} />
            <Route path={`${APP_PATHS.Spaces}/:spaceid`} element={<SpacePage />} />
            <Route path={APP_PATHS.Spaces} element={<SpacePage />} />
            {/* <Route path="chat-new" element={<NewChatPage />} /> */}

            <Route
              path={APP_PATHS.Channels}
              element={<ChannelsPage loadTeaser={setLoadTeaserVideo} playTeaser={setPlayTeaserVideo} />}
            />
            <Route path={APP_PATHS.Dashboard} element={<ChannelDashboardPage />} />
            <Route path={APP_PATHS.Send} element={<SendNotifsPage />} />
            <Route path={APP_PATHS.Receive} element={<ReceiveNotifsPage />} />

            <Route path={APP_PATHS.Govern} element={<GovPage />} />
            <Route path={APP_PATHS.Snap} element={<SnapPage />} />

            {/* <Route path="yield" element={<YieldFarmingPage />} /> */}
            <Route path={APP_PATHS.YieldV2} element={<YieldFarmingV2Page />} />
            <Route path={APP_PATHS.Rockstar} element={<NFTPage />} />
            <Route path={APP_PATHS.Gratitude} element={<AirdropPage />} />
            <Route path={APP_PATHS.LiveWalkthrough} element={<TutorialPage />} />
            <Route path={APP_PATHS.ComingSoon} element={<ComingSoonPage />} />
            <Route path={APP_PATHS.NotAvailable} element={<NotAvailablePage />} />
            <Route path={APP_PATHS.FAQ} element={<FAQPage />} />
            <Route path={APP_PATHS.Internal} element={<InternalDevPage />} />
            <Route path="/" element={<Navigate to={APP_PATHS.Channels} />} />
            <Route path={APP_PATHS.Support} element={<SupportPage />} />
            <Route path={APP_PATHS.UserSettings} element={<UserSettingsPage />} />
            <Route path={APP_PATHS.ChannelSettings} element={<NotifSettingsPage />} />
          </Routes>
        </Suspense>
      </Interface>

      {/* For Channels Opt-in / Opt-out */}
      <StyledToastContainer
        position="top-right"
        autoClose={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />

      <MetamaskPushSnapModalComponent
        InnerComponent={MetamaskPushSnapModal}
        modalPadding='0px'
        // InnerComponentProps={}
        modalPosition={MODAL_POSITION.ON_ROOT}
      />

      {/* To play youtube video from anywhere */}
      {playTeaserVideo && (
        <PreviewOuter>
          <PreviewBG
            href="#"
            bg="transparent"
            onClick={(e) => {
              e.preventDefault();
              setPlayTeaserVideo(!playTeaserVideo);
            }}>
            <PreviewContent className="contentBox">
              <PreviewClose
                href="#"
                bg="transparent"
                hover="transparent"
                hoverBG="transparent"
                onClick={(e) => {
                  e.preventDefault();
                  setPlayTeaserVideo(!playTeaserVideo);
                }}>
                <VscClose size={40} color="#fff" />
              </PreviewClose>
              <Preview>
                <div className="videoWrapper">
                  <iframe
                    src={loadTeaserVideo}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>
              </Preview>
            </PreviewContent>
          </PreviewBG>
        </PreviewOuter>
      )}
    </Container>
  );
}

// css style
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${(props) => props.theme.interfaceTopPadding});
  /* Padding to be handled by Modules individually */
  /* padding: ${(props) => props.theme.interfaceTopPadding} 20px 20px 20px; */
  align-items: stretch;

  background-image: url('./svg/${(props) => (props.theme.scheme === 'dark' ? 'dark' : 'light')}bg.svg');
  background-size: 100% 100%;

  position: relative;
`;

const Interface = styled(Item)`
  flex: 1;
  display: flex;
  align-items: stretch;

  // box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.1);
  // border-radius: 20px;
  // border: 1px solid ${(props) => props.theme.interfaceBorder};

  overflow: visible;
`;

const PreviewOuter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0 0 0 / 0.75);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PreviewBG = styled(Anchor)`
  position: initial;
  flex: 1;
`;

const PreviewContent = styled.div`
  width: 100%;
  align-self: center;
  max-width: 1140px;
  flex: 1 1;
  display: flex;
  flex-direction: column;
`;

const Preview = styled.div`
  display: flex;
  flex: 1;
  margin: 40px 20px;
  border-left: 10px solid #35c4f3;
  border-radius: 10px;
`;

const PreviewClose = styled(Anchor)`
  align-self: flex-end;
  margin-bottom: -40px;
`;

const StyledToastContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container--top-right {
    top: 7vh;
    right: 2vw;
  }
`;

// Export Default
export default MasterInterfacePage;
