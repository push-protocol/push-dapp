// React + Web3 Essentials
import React, { useState } from 'react';

// External Packages
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { VscClose } from 'react-icons/vsc';

// Internal Components
import { Anchor, Item } from '../primaries/SharedStyling';
import AirdropPage from 'pages/AirdropPage';
import ChannelDashboardPage from 'pages/ChannelDashboardPage';
import ChannelsPage from 'pages/ChannelsPage';
import ChatPage from 'pages/ChatPage';
import ComingSoonPage from 'pages/ComingSoonPage';
import FAQPage from 'pages/FAQPage';
import GovPage from 'pages/GovPage';
import InboxPage from 'pages/InboxPage';
import InternalDevPage from 'pages/InternalDevPage';
import NFTPage from 'pages/NFTPage';
import NotAvailablePage from 'pages/NotAvailablePage';
import ReceiveNotifsPage from 'pages/ReceiveNotifsPage';
import SendNotifsPage from 'pages/SendNotifsPage';
import SpamPage from 'pages/SpamPage';
import SupportPage from 'pages/SupportPage';
import TutorialPage from 'pages/TutorialPage';
import YieldFarmingPage from 'pages/YieldFarmingPage';

// Internal Configs
import GLOBALS from 'config/Globals';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import CryptoHelper from 'helpers/CryptoHelper';
import * as PushNodeClient from 'api';
import * as w2wHelper from 'helpers/w2w';
import { User } from 'types/chat';
import { ConnectedUser, Feeds } from 'types/chat';

// Create Header
function MasterInterfacePage() {
  // Master Interface controls settings
  const [playTeaserVideo, setPlayTeaserVideo] = React.useState(false);
  const [loadTeaserVideo, setLoadTeaserVideo] = React.useState(null);
  const location = useLocation();

  const [newUser,setNewUser] = useState<ConnectedUser>();


  const { account, chainId, library } = useWeb3React<ethers.providers.Web3Provider>();
  const getUser = async() =>{
    const caip10: string = w2wHelper.walletToCAIP10({ account, chainId });
    const user: User = await PushNodeClient.getUser({ caip10 });
    let connectedUser: ConnectedUser;

    // TODO: Change this to do verification on ceramic to validate if did is valid
    if (user?.did.includes('did:3:')) {
      throw Error('Invalid DID');
    }

    // new user might not have a private key
    if (user && user.encryptedPrivateKey) {
      if (user.wallets.includes(',') || !user.wallets.includes(caip10)) {
        throw Error('Invalid user');
      }

      const privateKeyArmored: string = await CryptoHelper.decryptWithWalletRPCMethod(
        library.provider,
        user.encryptedPrivateKey,
        account
      );
      connectedUser = { ...user, privateKey: privateKeyArmored };
    } else {
      connectedUser = {
        // We only need to provide this information when it's a new user
        name: 'john-snow',
        profilePicture:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg==',
        wallets: caip10,
        about: '',
        allowedNumMsg: 0,
        did: caip10,
        encryptedPrivateKey: '',
        encryptionType: '',
        numMsg: 0,
        publicKey: '',
        sigType: '',
        signature: '',
        linkedListHash: '',
        privateKey: '',
      };
    }

    setNewUser(connectedUser);
  }



  // Render
  return (
    <Container>
      <Interface location={location.pathname}>
        <Routes>
          <Route path="inbox" element={<InboxPage />} />
          <Route path="chat" element={<ChatPage getUser={getUser} newUser={newUser}/>} />
          {/* <Route path="chat-new" element={<NewChatPage />} /> */}

          <Route
            path="channels"
            element={<ChannelsPage loadTeaser={setLoadTeaserVideo} playTeaser={setPlayTeaserVideo} />}
          />
          <Route path="dashboard" element={<ChannelDashboardPage />} />
          <Route path="send" element={<SendNotifsPage />} />
          <Route path="spam" element={<SpamPage />} />
          <Route path="receive" element={<ReceiveNotifsPage />} />

          <Route path="govern" element={<GovPage />} />

          <Route path="yield" element={<YieldFarmingPage />} />
          <Route path="rockstar" element={<NFTPage />} />
          <Route path="gratitude" element={<AirdropPage />} />
          <Route path="live_walkthrough" element={<TutorialPage />} />
          <Route path="comingsoon" element={<ComingSoonPage />} />
          <Route path="notavailable" element={<NotAvailablePage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="internal" element={<InternalDevPage />} />
          <Route path="/" element={<Navigate to="/channels" />} />
          <Route path="support" element={<SupportPage />} />
        </Routes>
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
