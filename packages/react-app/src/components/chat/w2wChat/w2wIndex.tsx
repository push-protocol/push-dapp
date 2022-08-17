import React, { useState, useEffect } from 'react'
import Sidebar from './sidebar/sidebar'
import ChatBox from './chatBox/chatBox'
import Loader from 'react-loader-spinner'

// Helper
import { createCeramic } from '../../../helpers/w2w/ceramic'
import { generateKeyPair } from '../../../helpers/w2w/pgp'
import * as DIDHelper from '../../../helpers/w2w/did'
import * as w2wHelper from '../../../helpers/w2w'
import * as PushNodeClient from '../../../api'

// DID and ceramic
import { ThreeIdConnect } from '@3id/connect'
import { DID } from 'dids'
import { getResolver as threeIDDIDGetResolver } from '@ceramicnetwork/3id-did-resolver'
import { getResolver as keyDIDGetResolver } from 'key-did-resolver'

// Web3
import { Web3Provider } from 'ethers/providers'
import { useWeb3React } from '@web3-react/core'
import { CeramicClient } from '@ceramicnetwork/http-client'
// @ts-ignore
import { QueryClient, QueryClientProvider } from 'react-query'
// @ts-ignore
import { ReactQueryDevtools } from 'react-query/devtools'
import { Feeds, User } from '../../../api'

import './w2wIndex.css'
import { toast, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
  setSearchedUser: any
  searchedUser: string
  setChat: (feed: Feeds) => void
  connectedUser: User
  intents: Feeds[]
  setIntents: (intents: Feeds[]) => void
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
  const [did, setDid] = useState<DID>()
  const [searchedUser, setSearchedUser] = useState<string>('')
  const [connectedUser, setConnectedUser] = useState<User>()
  const [intents, setIntents] = useState<Feeds[]>([])

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
    const caip10: string = w2wHelper.walletToCAIP10(account, chainId) // the useState does not update state immediately
    setDid(did)
    let user: User = await PushNodeClient.getUser({ did: did.id, wallet: '' })
    if (!user) {
      const keyPairs = await generateKeyPair()
      const encryptedPrivateKey = await DIDHelper.encrypt(keyPairs.privateKeyArmored, did)
      const createdUser = await PushNodeClient.createUser({
        wallet: caip10,
        did: did.id,
        publicKey: keyPairs.publicKeyArmored,
        encryptedPrivateKey: JSON.stringify(encryptedPrivateKey),
        encryptionType: 'pgp',
        signature: 'xyz',
        sigType: 'a'
      })
      setConnectedUser(createdUser)
    } else {
      if (!user.wallets.includes(caip10)) {
        user = await PushNodeClient.updateUser({ did: did.id, wallet: caip10 })
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
                setIntents
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
            <p>Fetching Did</p>
          </div>
        )}
      </div>
    </>
  )
}
export default App
