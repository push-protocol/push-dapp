// React + Web3 Essentials
import { lazy, Suspense, useState, useEffect, useContext } from 'react';

// External Packages
import useToast from 'hooks/useToast';
import { MdWarning } from 'react-icons/md';
import { VscClose } from 'react-icons/vsc';
import { Navigate, Route, Routes, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import styled from 'styled-components';

// Internal Components
import LoaderSpinner, {
  LOADER_OVERLAY,
  LOADER_TYPE,
  PROGRESS_POSITIONING,
} from 'components/reusables/loaders/LoaderSpinner';
import { Anchor, Item } from '../primaries/SharedStyling';
const AirdropPage = lazy(() => import('pages/AirdropPage'));
const ChannelDashboardPage = lazy(() => import('pages/ChannelDashboardPage'));
const ChannelDashboardPageV2 = lazy(() => import('pages/ChannelDashboardPageV2'));
const CreateChannelPage = lazy(() => import('pages/CreateChannelPage'));
const ChannelsPage = lazy(() => import('pages/ChannelsPage'));
const ChatPage = lazy(() => import('pages/ChatPage'));
const ComingSoonPage = lazy(() => import('pages/ComingSoonPage'));
const FAQPage = lazy(() => import('pages/FAQPage'));
const GovPage = lazy(() => import('pages/GovPage'));
const InboxPage = lazy(() => import('pages/InboxPage'));
const InternalDevPage = lazy(() => import('pages/InternalDevPage'));
const NFTPage = lazy(() => import('pages/NFTPage'));
const NotAvailablePage = lazy(() => import('pages/NotAvailablePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const ReceiveNotifsPage = lazy(() => import('pages/ReceiveNotifsPage'));
const NotifSettingsPage = lazy(() => import('pages/NotifSettingsPage'));
const SendNotifsPage = lazy(() => import('pages/SendNotifsPage'));
const SpacePage = lazy(() => import('pages/SpacePage'));
const SupportPage = lazy(() => import('pages/SupportPage'));
const TutorialPage = lazy(() => import('pages/TutorialPage'));
// const YieldFarmingPage = lazy(() => import('pages/YieldFarmingPage'));
const YieldFarmingV2Page = lazy(() => import('pages/YieldFarmingPageV2'));
const UserSettingsPage = lazy(() => import('pages/UserSettingsPage'));
const ClaimGalxePage = lazy(() => import('pages/ClaimGalxePage'));
const WelcomDashboardPage = lazy(() => import('pages/WelcomeDashboardPage'));
const RewardPointsPage = lazy(() => import('pages/RewardPointsPage'));
const PointsVaultPage = lazy(() => import('pages/PointsVaultPage'));
const AddNewChainPage = lazy(() => import('pages/AddNewChain'));

const DiscordVerificationPage = lazy(() => import('pages/DiscordVerificationPage'));

const SendNotificationPage = lazy(() => import('pages/SendNotificationPage'));
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
import APP_PATHS from 'config/AppPaths';
import GLOBALS from 'config/Globals';
import { AppContext } from 'contexts/AppContext';
import { MODAL_POSITION } from 'hooks/useModalBlur';
import MetamaskPushSnapModal from 'modules/receiveNotifs/MetamaskPushSnapModal';
import SnapPage from 'pages/SnapPage';
import { AppContextType } from 'types/context';
import { useBlocksTheme } from 'blocks/Blocks.hooks';
import { ModeProp } from 'blocks';

const rewardsPointsPagePaths = [APP_PATHS.Rewards, APP_PATHS.RewardsActivities, APP_PATHS.RewardsLeaderboard];

// Create Header
function MasterInterfacePage() {
  // Get search params
  const [searchParams] = useSearchParams();

  // get location
  const location = useLocation();

  // Master Interface controls settings
  const [playTeaserVideo, setPlayTeaserVideo] = useState(false);
  const [loadTeaserVideo, setLoadTeaserVideo] = useState(null);

  const { MetamaskPushSnapModalComponent, blockedLoading }: AppContextType = useContext(AppContext);

  const { showMetamaskPushSnap } = useContext(AppContext);
  const { mode } = useBlocksTheme();

  useEffect(() => {
    if (location.hash == '#receive-notifications') {
      showMetamaskPushSnap();
    }
  }, [location]);

  // Check location and change it if search param is present
  // Get nativage from useNavigate
  const navigate = useNavigate();

  // if (searchParams.get('channel')) {
  //   if (channelid !== searchParams.get('channel')) {
  //     channelid = searchParams.get('channel');
  //     console.log('channel search', searchParams.get('channel'));
  //     navigate(`/chek`, { replace: true, relative: true });
  //   }
  // }

  // // For redirecting if required
  //  useEffect(() => {
  //   const checkAndRedirect = () => {
  //     if (location.pathname === APP_PATHS.Channels && searchParams.get('channel')) {
  //       const navigate = useNavigate();

  //       const channelId = searchParams.get('channel');
  //       console.log('redirecting to channel', `${APP_PATHS.Channels}/${channelId}`);
  //       navigate({ pathname: `${APP_PATHS.Channels}/${channelId}` });
  //     }
  //   }

  //   checkAndRedirect();
  // }, []);

  const ChannelsProfilePage = () => {
    const channelid = searchParams.get('channel');

    if (channelid) {
      navigate(`${APP_PATHS.Channels}/${channelid}`);
    }

    return (
      <ChannelsPage
        loadTeaser={setLoadTeaserVideo}
        playTeaser={setPlayTeaserVideo}
        channelID={channelid}
      />
    );
  };

  // For toast
  const blockedLoadingToast = useToast();

  // Render
  return (
    <Container mode={mode}>
      <Interface location={location.pathname}>
        <Suspense
          fallback={
            <ItemVV2>
              <LoaderSpinner
                type={LOADER_TYPE.SEAMLESS}
                spinnerSize={24}
              />
            </ItemVV2>
          }
        >
          <Routes>
            <Route
              path={APP_PATHS.AddNewChain}
              element={<AddNewChainPage />}
            />
            <Route
              path={APP_PATHS.WelcomeDashboard}
              element={<WelcomDashboardPage />}
            />
            {rewardsPointsPagePaths.map((path, index) => (
              <Route
                path={path}
                key={index}
                element={<RewardPointsPage />}
              />
            ))}

            <Route
              path={APP_PATHS.DiscordVerification}
              element={<DiscordVerificationPage />}
            />

            <Route
              path={APP_PATHS.PointsVault}
              element={<PointsVaultPage />}
            />

            <Route
              path={APP_PATHS.Inbox}
              element={<InboxPage />}
            />

            <Route
              path={APP_PATHS.Spam}
              element={<InboxPage />}
            />

            {/* <Route element={<ConnectedWalletRoute />}> */}
            <Route
              path={`${APP_PATHS.Chat}/:chatid`}
              element={<ChatPage />}
            />
            <Route
              path={APP_PATHS.Chat}
              element={<ChatPage />}
            />
            <Route
              path={`${APP_PATHS.Spaces}/:spaceid`}
              element={<SpacePage />}
            />
            <Route
              path={APP_PATHS.Spaces}
              element={<SpacePage />}
            />
            {/* <Route path="chat-new" element={<NewChatPage />} /> */}
            {/* </Route> */}

            {/* Enable Channel specific routes */}
            <Route
              path={`${APP_PATHS.Channels}/:channelid`}
              element={
                <ChannelsPage
                  loadTeaser={setLoadTeaserVideo}
                  playTeaser={setPlayTeaserVideo}
                  channelID={null}
                />
              }
            />

            <Route
              path={APP_PATHS.Channels}
              element={<ChannelsProfilePage />}
            />

            <Route
              path={APP_PATHS.Dashboard}
              element={<ChannelDashboardPage />}
            />

            <Route
              path={APP_PATHS.CreateChannel}
              element={<CreateChannelPage />}
            />

            <Route
              path={`${APP_PATHS.ChannelDashboard}/:channelId`}
              element={<ChannelDashboardPageV2 />}
            />

            <Route
              path={APP_PATHS.Send}
              element={<SendNotificationPage />}
            />
            <Route
              path={APP_PATHS.Receive}
              element={<ReceiveNotifsPage />}
            />

            <Route
              path={APP_PATHS.Govern}
              element={<GovPage />}
            />

            {/* Instead of 3 pages for Snap. It will only be 1. */}

            <Route
              path={APP_PATHS.Snap}
              element={<SnapPage />}
            />

            <Route
              path={`${APP_PATHS.Snap}/:route`}
              element={<SnapPage />}
            />

            {/* <Route path="yield" element={<YieldFarmingPage />} /> */}
            <Route
              path={APP_PATHS.YieldV2}
              element={<YieldFarmingV2Page />}
            />
            <Route
              path={APP_PATHS.Rockstar}
              element={<NFTPage />}
            />
            <Route
              path={APP_PATHS.Gratitude}
              element={<AirdropPage />}
            />
            <Route
              path={APP_PATHS.LiveWalkthrough}
              element={<TutorialPage />}
            />
            <Route
              path={APP_PATHS.ComingSoon}
              element={<ComingSoonPage />}
            />
            <Route
              path={APP_PATHS.NotAvailable}
              element={<NotAvailablePage />}
            />
            <Route
              path={APP_PATHS.FAQ}
              element={<FAQPage />}
            />
            <Route
              path={APP_PATHS.Internal}
              element={<InternalDevPage />}
            />
            <Route
              path="/"
              element={<Navigate to={APP_PATHS.WelcomeDashboard} />}
            />
            <Route
              path={APP_PATHS.Support}
              element={<SupportPage />}
            />
            <Route
              path={APP_PATHS.ClaimGalxe}
              element={<ClaimGalxePage />}
            />
            <Route
              path={APP_PATHS.UserSettings}
              element={<UserSettingsPage />}
            />
            <Route
              path={APP_PATHS.ChannelSettings}
              element={<NotifSettingsPage />}
            />
            <Route
              path="*"
              element={<NotFoundPage />}
            />
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

      {/* Modal displaying ReceiveNotifications */}
      <MetamaskPushSnapModalComponent
        id="receive-notifications"
        InnerComponent={MetamaskPushSnapModal}
        modalPadding="0px"
        modalPosition={MODAL_POSITION.ON_ROOT}
      />

      {blockedLoading.errorMessage &&
        blockedLoadingToast.showMessageToast({
          toastTitle: blockedLoading.title,
          toastMessage: blockedLoading.errorMessage,
          toastType: 'WARNING',
          getToastIcon: (size) => (
            <MdWarning
              size={size}
              color="#E2B71D"
            />
          ),
        })}

      {blockedLoading.enabled && (
        <LoaderSpinner
          type={LOADER_TYPE.STANDALONE}
          overlay={LOADER_OVERLAY.ONTOP}
          blur={GLOBALS.ADJUSTMENTS.BLUR.DEFAULT}
          title={blockedLoading.title}
          width="50%"
          spinnerEnabled={blockedLoading.spinnerEnabled}
          spinnerSize={blockedLoading.spinnerSize}
          spinnerType={blockedLoading.spinnerType}
          progressEnabled={blockedLoading.progressEnabled}
          progressPositioning={PROGRESS_POSITIONING.BOTTOM}
          progress={blockedLoading.progress}
          progressNotice={blockedLoading.progressNotice}
        />
      )}

      {/* To play youtube video from anywhere */}
      {playTeaserVideo && (
        <PreviewOuter>
          <PreviewBG
            href="#"
            bg="transparent"
            onClick={(e) => {
              e.preventDefault();
              setPlayTeaserVideo(!playTeaserVideo);
            }}
          >
            <PreviewContent className="contentBox">
              <PreviewClose
                href="#"
                bg="transparent"
                hover="transparent"
                hoverBG="transparent"
                onClick={(e) => {
                  e.preventDefault();
                  setPlayTeaserVideo(!playTeaserVideo);
                }}
              >
                <VscClose
                  size={40}
                  color="#fff"
                />
              </PreviewClose>
              <Preview>
                <div className="videoWrapper">
                  <iframe
                    src={loadTeaserVideo}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
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
const Container = styled.div<ModeProp>`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: calc(100dvh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${(props) => props.theme.interfaceTopPadding});
  max-height: calc(100dvh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${(props) => props.theme.interfaceTopPadding});
  /* Padding to be handled by Modules individually */
  /* padding: ${(props) => props.theme.interfaceTopPadding} 20px 20px 20px; */
  align-items: stretch;

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
