import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import styled from "styled-components";
import { Item, Anchor } from "../primaries/SharedStyling";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { VscClose } from 'react-icons/vsc';

import InboxPage from "pages/InboxPage";
import SpamPage from "pages/SpamPage";
import ViewChannelsPage from "pages/ViewChannelsPage";
import ChannelDashboardPage from "pages/ChannelDashboardPage";
import SendNotifs from "pages/SendNotifs";
import ReceiveNotifsPage from "pages/ReceiveNotifsPage";

import GovernancePage from "pages/GovernancePage";

import YieldFarmingPage from "pages/YieldFarmingPage";
import NFTPage from "pages/NFTPage";
import AirdropPage from "pages/AirdropPage";
import ComingSoonPage from "pages/ComingSoonPage";
import NotAvailablePage from "./NotAvailablePage";
import TutorialPage from "pages/TutorialPage";
import FAQPage from "pages/FAQPage";

import { SupportPage } from "pages/SupportPage";

import GLOBALS from "config/Globals";

// Create Header
function MasterInterfacePage() {
  // Master Interface controls settings
  const [playTeaserVideo, setPlayTeaserVideo] = React.useState(false);
  const [loadTeaserVideo, setLoadTeaserVideo] = React.useState(null);

  // Render
  return (
    <Container>
      <Interface>
        <Routes>
          <Route path="channels" element={
            <ViewChannelsPage
              loadTeaser={setLoadTeaserVideo}
              playTeaser={setPlayTeaserVideo}
            />
          }
          />
          <Route path="inbox" element={<InboxPage />} />
          <Route path="dashboard" element={<ChannelDashboardPage />} />
          <Route path="send" element={<SendNotifs />} />
          <Route path="spam" element={<SpamPage />} />
          <Route path="receive" element={<ReceiveNotifsPage />} />

          <Route path="govern" element={<GovernancePage />} />

          <Route path="yield" element={<YieldFarmingPage />} />
          <Route path="rockstar" element={<NFTPage />} />
          <Route path="gratitude" element={<AirdropPage />} />
          <Route path="live_walkthrough" element={<TutorialPage />} />
          <Route path="comingsoon" element={<ComingSoonPage />} />
          <Route path="notavailable" element={<NotAvailablePage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route
            path="/"
            element={<Navigate to="/channels" />}
          />
          <Route path="support" element={<SupportPage />} />
        </Routes>
      </Interface>

      {/* For Channels Opt-in / Opt-out */}
      <ToastContainer
        position="bottom-right"
        autoClose={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />

      {/* To play youtube video from anywhere */}
      {playTeaserVideo &&
        <PreviewOuter>
          <PreviewBG
            href="#"
            bg="transparent"
            onClick={(e) => { e.preventDefault(); setPlayTeaserVideo(!playTeaserVideo) }}
          >
            <PreviewContent className="contentBox">
              <PreviewClose
                href="#"
                bg="transparent"
                hover="transparent"
                hoverBG="transparent"
                onClick={(e) => { e.preventDefault(); setPlayTeaserVideo(!playTeaserVideo) }}
              >
                <VscClose size={40} color="#fff" />
              </PreviewClose>
              <Preview>
                <div className='videoWrapper'><iframe src={loadTeaserVideo} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
              </Preview>
            </PreviewContent>
          </PreviewBG>
        </PreviewOuter>
      }
    </Container>
  );
}

// css style
const Container = styled.div`
  flex: 1;
  flex-direction: column;
  min-height: calc(100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - 20px - ${props => props.theme.interfaceTopPadding});
  padding: ${props => props.theme.interfaceTopPadding} 20px 20px 20px;
  align-items: stretch;

`;

const Interface = styled(Item)`
  flex: 1;
  display: flex;
  align-items: stretch;

  box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border: 1px solid ${props => props.theme.interfaceBorder};

  margin: 15px 15px 15px 0px;
  overflow: hidden;


  @media (max-width: 992px) {
    margin: 15px 0px;
  }
`

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
`

const PreviewBG = styled(Anchor)`
  position: initial;
  flex: 1;
`

const PreviewContent = styled.div`
  width: 100%;
  align-self: center;
  max-width: 1140px;
  flex: 1 1;
  display: flex;
  flex-direction: column;
`

const Preview = styled.div`
  display: flex;
  flex: 1;
  margin: 40px 20px;
  border-left: 10px solid #35c4f3;
  border-radius: 10px;
`

const PreviewClose = styled(Anchor)`
  align-self: flex-end;
  margin-bottom: -40px;
`

// Export Default
export default MasterInterfacePage;
