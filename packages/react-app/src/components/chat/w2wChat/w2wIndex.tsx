import React, { useEffect, useState } from 'react'
import ChatBox from './chatBox/chatBox'
import Sidebar from './sidebar/sidebar'
// @ts-ignore
import { Oval as Loader } from 'react-loader-spinner'

// Helper
import * as PushNodeClient from '../../../api'
import * as w2wHelper from '../../../helpers/w2w'
import { createCeramic } from '../../../helpers/w2w/ceramic'
import * as DIDHelper from '../../../helpers/w2w/did'

// DID and ceramic
import { ThreeIdConnect } from '@3id/connect'
import { getResolver as threeIDDIDGetResolver } from '@ceramicnetwork/3id-did-resolver'
import { DID } from 'dids'
import { getResolver as keyDIDGetResolver } from 'key-did-resolver'

// Web3
import { CeramicClient } from '@ceramicnetwork/http-client'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from 'ethers/providers'
import { QueryClient, QueryClientProvider } from 'react-query'
// @ts-ignore
import { ReactQueryDevtools } from 'react-query/devtools'
import { Feeds, User } from '../../../api'

import { ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './w2wIndex.css'

export interface InboxChat {
  name: string
  profilePicture: string
  timestamp: number
  fromDID: string
  toDID: string
  lastMessage: string
  messageType: string
  encType: string
  signature: string
  signatureType: string
  encryptedSecret: string
}

export interface AppContext {
  currentChat: Feeds
  viewChatBox: boolean
  did: DID
  setDID: (did: DID) => void
  connectAndSetDID: () => Promise<DID>
  setSearchedUser: (searched: string) => void
  searchedUser: string
  setChat: (feed: Feeds) => void
  connectedUser: User
  setConnectedUser: (user: User) => void
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
  progress: 0
}

export const Context = React.createContext<AppContext | null>(null)

function App() {
  const [viewChatBox, setViewChatBox] = useState<boolean>(false)
  const [currentChat, setCurrentChat] = useState<Feeds>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { connector, account, chainId } = useWeb3React<Web3Provider>()
  const [did, setDID] = useState<DID>()
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

  const connectAndSetDID = async (): Promise<DID> => {
    const provider: Promise<any> = await connector.getProvider()
    const threeID: ThreeIdConnect = new ThreeIdConnect()
    const ceramic: CeramicClient = createCeramic()
    const didProvider = await DIDHelper.Get3IDDIDProvider(threeID, provider, account)
    const did: DID = await DIDHelper.CreateDID(keyDIDGetResolver, threeIDDIDGetResolver, ceramic, didProvider)
    setDID(did)
    return did
  }

  const connectToCeramic = async (): Promise<void> => {
    const caip10: string = w2wHelper.walletToCAIP10({ account, chainId })
    let user: User = await PushNodeClient.getUser({ caip10 })
    // TODO: Change this to do verification on ceramic to validate if did is valid
    if (user?.did.includes('did:3:')) {
      await connectAndSetDID()
    }
    if (user) {
      if (!user.wallets.includes(caip10)) {
        user = await PushNodeClient.updateUser({ did: did.id, caip10 })
      }
    } else {
      user = {
        // We only need to provide this information when it's a new user
        name: 'john-snow',
        profilePicture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg==',
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
        linkedListHash: ''
      }
    }
    setConnectedUser(user)
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
                setInbox
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
