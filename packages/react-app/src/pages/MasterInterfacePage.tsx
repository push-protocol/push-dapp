import React from "react";
import ReactGA from "react-ga";
import { Navigate, Routes, Route, Link } from "react-router-dom";

import styled from "styled-components";
import { Item, ItemH, Span, H2, B, A } from "components/SharedStyling";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import InboxPage from "pages/InboxPage";
import SpamPage from "pages/SpamPage";
import ViewChannelsPage from "pages/ViewChannelsPage";
import ChannelDashboardPage from "pages/ChannelDashboardPage";
import ReceiveNotifsPage from "pages/ReceiveNotifsPage";

import GovernancePage from "pages/GovernancePage";

import YieldFarmingPage from "pages/YieldFarmingPage";
import NFTPage from "pages/NFTPage";
import AirdropPage from "pages/AirdropPage";

import {SupportPage} from "pages/SupportPage";

import GLOBALS from "config/Globals";

// Create Header
function MasterInterfacePage() {
  // Render
  return (
    <Container>
      <Interface>
        <Routes>
          <Route path="inbox" element={<InboxPage />} />
          <Route path="channels" element={<ViewChannelsPage />} />
          <Route path="dashboard" element={<ChannelDashboardPage />} />
          <Route path="spam" element={<SpamPage />} />
          <Route path="receive" element={<ReceiveNotifsPage />} />

          <Route path="govern" element={<GovernancePage />} />

          <Route path="yield" element={<YieldFarmingPage />} />
          <Route path="rockstar" element={<NFTPage />} />
          <Route path="gratitude" element={<AirdropPage />} />
          <Route
              path="/"
              element={<Navigate to="/channels" />}
          />
          <Route path="support" element={<SupportPage/>}/>
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

// Export Default
export default MasterInterfacePage;
