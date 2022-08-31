import React, { useContext, useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import ChatBox from './chatBox/chatBox';
import Sidebar from './sidebar/sidebar';

// Helper
import * as PushNodeClient from 'api';
import { UserContext } from "contexts/UserContext";
import * as w2wHelper from 'helpers/w2w';
import { createCeramic } from 'helpers/w2w/ceramic';
import * as DIDHelper from 'helpers/w2w/did';
import { generateKeyPair } from 'helpers/w2w/pgp';

// DID and ceramic
import { ThreeIdConnect } from '@3id/connect';
import { getResolver as threeIDDIDGetResolver } from '@ceramicnetwork/3id-did-resolver';
import { DID } from 'dids';
import { getResolver as keyDIDGetResolver } from 'key-did-resolver';

// Web3
import { CeramicClient } from '@ceramicnetwork/http-client';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from 'ethers/providers';
// @ts-ignore
import { QueryClient, QueryClientProvider } from 'react-query';
// @ts-ignore
import { Feeds, User } from 'api';
import { ReactQueryDevtools } from 'react-query/devtools';

import { ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './w2wIndex.css';

export interface AppContext {
  currentChat: Feeds
  viewChatBox: boolean
  did: DID
  setSearchedUser: (searched: string) => void
  searchedUser: string
  setChat: (feed: Feeds) => void
  connectedUser: User
  intents: Feeds[]
  setIntents: (intents: Feeds[]) => void
  inbox: Feeds[]
  setInbox: (inbox: Feeds[]) => void
}

export const ToastPosition: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: 0,
}

export const Context = React.createContext<AppContext | null>(null)


function App() {

  const { did, setDid } = useContext(UserContext);

  const [viewChatBox, setViewChatBox] = useState<boolean>(false)
  const [currentChat, setCurrentChat] = useState<Feeds>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { connector, account, chainId } = useWeb3React<Web3Provider>()
  const [searchedUser, setSearchedUser] = useState<string>('')
  const [connectedUser, setConnectedUser] = useState<User>()
  const [intents, setIntents] = useState<Feeds[]>([])
  const [inbox, setInbox] = useState<Feeds[]>([])

  const queryClient = new QueryClient({})

  useEffect(() => {
    if (isLoading) {
      connectToCeramic()
    }
  }, [])

  const connectToCeramic = async (): Promise<void> => {
    const provider: Promise<any> = await connector.getProvider()
    const threeID: ThreeIdConnect = new ThreeIdConnect()
    const ceramic: CeramicClient = createCeramic()
    const didProvider = await DIDHelper.Get3IDDIDProvider(threeID, provider, account)
    const did: DID = await DIDHelper.CreateDID(keyDIDGetResolver, threeIDDIDGetResolver, ceramic, didProvider)
    const caip10: string = w2wHelper.walletToCAIP10({ account, chainId }) // the useState does not update state immediately
    setDid(did)
    let user: User = await PushNodeClient.getUser({ did: did.id })
    if (!user) {
      const keyPairs = await generateKeyPair()
      const encryptedPrivateKey = await DIDHelper.encrypt(keyPairs.privateKeyArmored, did)
      const createdUser = await PushNodeClient.createUser({
        caip10,
        did: did.id,
        publicKey: keyPairs.publicKeyArmored,
        encryptedPrivateKey: JSON.stringify(encryptedPrivateKey),
        encryptionType: 'pgp',
        signature: 'xyz',
        sigType: 'a',
      })
      setConnectedUser(createdUser)
    } else {
      if (!user.wallets.includes(caip10)) {
        user = await PushNodeClient.updateUser({ did: did.id, caip10 })
        // @@@ GET PROFILE PICTURE FROM HERE
        // @@@ GET PROFILE PICTURE FROM HERE
        // @@@ GET PROFILE PICTURE FROM HERE
        // @@@ GET PROFILE PICTURE FROM HERE
      }
      setConnectedUser(user)
    }
    setIsLoading(false)
  }

  const setChat = (feed: Feeds): void => {
    setViewChatBox(true)
    setCurrentChat(feed)
  }

  return (
    <>
      <div className="w2wIndex">
        {!isLoading ? (
          <QueryClientProvider client={queryClient}>
            <Context.Provider
              value={{
                currentChat,
                viewChatBox,
                did,
                setChat,
                setSearchedUser,
                searchedUser,
                connectedUser,
                intents,
                setIntents,
                inbox,
                setInbox,
              }}
            >
              <Sidebar />
              <ChatBox />
            </Context.Provider>
            {/* The rest of your application */}
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        ) : (
          <div className="w2wIndexLoaderContainer">
            <Loader className="w2wLoader" type="Oval" />
          </div>
        )}
      </div>
    </>
  )
}
export default App
