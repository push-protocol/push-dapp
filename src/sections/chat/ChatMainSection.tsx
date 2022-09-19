// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';

// External Packages
import { ThreeIdConnect } from '@3id/connect';
import { getResolver as threeIDDIDGetResolver } from '@ceramicnetwork/3id-did-resolver';
import { CeramicClient } from '@ceramicnetwork/http-client';
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import { DID } from 'dids';
import { getResolver as keyDIDGetResolver } from 'key-did-resolver';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import * as PushNodeClient from 'api';
import { Feeds, User } from 'api';
import ChatBox from 'components/chat/w2wChat/chatBox/chatBox';
import Sidebar from 'components/chat/w2wChat/sidebar/sidebar';
import LoaderSpinner, { LOADER_OVERLAY, LOADER_TYPE, PROGRESS_POSITIONING } from 'components/reusables/loaders/LoaderSpinner';
import * as w2wHelper from 'helpers/w2w';
import { createCeramic } from 'helpers/w2w/ceramic';
import * as DIDHelper from 'helpers/w2w/did';
import ChatBoxSection from 'sections/chat/ChatBoxSection';
import ChatSidebarSection from 'sections/chat/ChatSidebarSection';

// Internal Configs
import GLOBALS from 'config/Globals';

export interface InboxChat {
  name: string;
  profilePicture: string;
  timestamp: number;
  fromDID: string;
  toDID: string;
  lastMessage: string;
  messageType: string;
  encType: string;
  signature: string;
  signatureType: string;
  encryptedSecret: string;
}

interface BlockedLoadingI {
  enabled: boolean;
  title: string;
  spinnerEnabled?: boolean;
  spinnerSize?: number;
  spinnerCompleted?: boolean;
  progressEnabled?: boolean;
  progress?: number;
  progressNotice?: string;
}

export interface AppContext {
  currentChat: Feeds;
  viewChatBox: boolean;
  did: DID;
  setDID: (did: DID) => void;
  connectAndSetDID: () => Promise<DID>;
  setSearchedUser: (searched: string) => void;
  searchedUser: string;
  setChat: (feed: Feeds) => void;
  connectedUser: User;
  setConnectedUser: (user: User) => void;
  intents: Feeds[];
  setIntents: (intents: Feeds[]) => void;
  inbox: Feeds[];
  setInbox: (inbox: Feeds[]) => void;
  pendingRequests: number;
  setPendingRequests: (pending: number) => void;
  hasUserBeenSearched: boolean;
  setHasUserBeenSearched: (searched: boolean) => void;
  loadingMessage: string;
  setLoadingMessage: (loadingMessage: string) => void;
  setBlockedLoading: (blockedLoading: BlockedLoadingI) => void;
}

export const ToastPosition: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: 0,
};

export const Context = React.createContext<AppContext | null>(null);

// Chat Sections
// Divided into two, left and right
const ChatMainSection = () => {
  const { connector, account, chainId } = useWeb3React<ethers.providers.Web3Provider>();

  const [viewChatBox, setViewChatBox] = useState<boolean>(false);
  const [currentChat, setCurrentChat] = useState<Feeds>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  const [blockedLoading, setBlockedLoading] = useState<BlockedLoadingI>({
    enabled: false,
    title: null
  });
  const [user, setUser] = useState()
  const [did, setDID] = useState<DID>();
  const [searchedUser, setSearchedUser] = useState<string>('');
  const [connectedUser, setConnectedUser] = useState<User>();
  const [intents, setIntents] = useState<Feeds[]>([]);
  const [inbox, setInbox] = useState<Feeds[]>([]);
  const [pendingRequests, setPendingRequests] = useState<number>(0);
  const [hasUserBeenSearched, setHasUserBeenSearched] = useState<boolean>(false);

  const queryClient = new QueryClient({});

  useEffect(() => {
    if (isLoading) {
      connectToCeramic();
    }
  }, []);

  const connectAndSetDID = async (): Promise<DID> => {
    setBlockedLoading({
      enabled: true,
      title: "Step 3/4: Creating DID",
      progressEnabled: true,
      progress: 75,
      progressNotice: "We use Ceramic to enable multichain and multiwallet experience. You will need to sign two transactions when they appear."
    })

    const provider: Promise<any> = await connector.getProvider();
    const threeID: ThreeIdConnect = new ThreeIdConnect();
    const ceramic: CeramicClient = createCeramic();
    const didProvider = await DIDHelper.Get3IDDIDProvider(threeID, provider, account);

    const did: DID = await DIDHelper.CreateDID(keyDIDGetResolver, threeIDDIDGetResolver, ceramic, didProvider);
    setDID(did);
    return did;
  };

  const connectToCeramic = async (): Promise<void> => {
    // Getting User Info
    setBlockedLoading({
      enabled: true,
      title: "Step 1/4: Getting Account Info",
      progressEnabled: true,
      progress: 25,
      progressNotice: "Push Chat is in alpha and might be slow sometimes"
    });

    const caip10: string = w2wHelper.walletToCAIP10({ account, chainId });
    let user: User = await PushNodeClient.getUser({ caip10 });

    // TODO: Change this to do verification on ceramic to validate if did is valid
    if (user?.did.includes('did:3:')) {
      // Getting User Info
      setBlockedLoading({
        enabled: true,
        title: "Step 2/4: Checking for DID",
        progressEnabled: true,
        progress: 50,
        progressNotice: "DID enables you to chat multichain with anyone"
      });

      await connectAndSetDID();
    }

    if (user) {
      if (!user.wallets.includes(caip10)) {
        setBlockedLoading({
          enabled: true,
          title: "Step 3/4: Syncing your Info",
          progressEnabled: true,
          progress: 90,
          progressNotice: "Almost done! Please wait while we sync up your info"
        })
    
        user = await PushNodeClient.updateUser({ did: did.id, caip10 });
      }
    } else {
      user = {
        // We only need to provide this information when it's a new user
        name: 'john-snow',
        profilePicture:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg==',
        wallets: caip10,
        ///
        about: '',
        allowedNumMsg: 0,
        did: '',
        encryptedPrivateKey: '',
        encryptionType: '',
        numMsg: 0,
        publicKey: '',
        sigType: '',
        signature: '',
        linkedListHash: '',
      };
    }

    setBlockedLoading({
      enabled: false,
      title: "Step 4/4: Let's Chat ;)",
      spinnerCompleted: true,
      progressEnabled: true,
      progress: 100,
    })

    setConnectedUser(user);
    setIsLoading(false);
  };

  const setChat = (feed: Feeds): void => {
    setViewChatBox(true);
    setCurrentChat(feed);
  };

  // RENDER
  return (
    <ItemHV2>
      {!isLoading ? (
        <QueryClientProvider client={queryClient}>
          <Context.Provider
            value={{
              currentChat,
              viewChatBox,
              did,
              setDID,
              connectAndSetDID,
              setChat,
              setSearchedUser,
              searchedUser,
              connectedUser,
              setConnectedUser,
              intents,
              setIntents,
              inbox,
              setInbox,
              pendingRequests,
              setPendingRequests,
              hasUserBeenSearched,
              setHasUserBeenSearched,
              loadingMessage,
              setLoadingMessage,
              setBlockedLoading
            }}
          >
            <ItemVV2
              flex="initial"
              width="340px"
              padding="10px 20px"
              boxSizing="content-box"
            >
              <ChatSidebarSection />
            </ItemVV2>
            <ItemVV2
              padding="10px 10px 10px 10px"
            >
              <ChatBoxSection />
            </ItemVV2>
          </Context.Provider>
          {/* The rest of your application */}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      ) : <LoaderSpinner type={LOADER_TYPE.SEAMLESS} />}

      {/* This always needs to be last */}
      {blockedLoading.enabled && 
        <LoaderSpinner
          type={LOADER_TYPE.STANDALONE}
          overlay={LOADER_OVERLAY.ONTOP}
          blur={GLOBALS.ADJUSTMENTS.BLUR.DEFAULT}
          title={blockedLoading.title}
          width="50%"
          spinnerEnabled={blockedLoading.spinnerEnabled}
          spinnerSize={blockedLoading.spinnerSize}
          spinnerCompleted={blockedLoading.spinnerCompleted}
          progressEnabled={blockedLoading.progressEnabled}
          progressPositioning={PROGRESS_POSITIONING.BOTTOM}
          progress={blockedLoading.progress}
          progressNotice={blockedLoading.progressNotice}
        />  
      }
    </ItemHV2>
  );
};
export default ChatMainSection;
