import React, { useState, useEffect } from 'react'
import Sidebar from './sidebar/sidebar'
import ChatBox from './chatBox/chatBox'
import Loader from 'react-loader-spinner'

// Helper
import { createCeramic } from '../../../helpers/w2w/Ceramic'
import { generateKeyPair } from '../../../helpers/w2w/PGP'
import * as DIDHelper from '../../../helpers/w2w/Did'
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

export interface InboxChat {
  name: string
  profile_picture: string
  timestamp: number
  lastMessage: string
  messageType: string
  signature: string
  signatureType: string
}

export interface ConnectedUser extends User {
  privateKey: string
}

export interface AppContext {
  currentChat: Feeds
  viewChatBox: boolean
  did: DID
  setSearchedUser: any
  searchedUser: string
  setChat: (text: Feeds) => void
  connectedUser: ConnectedUser
}

export const Context = React.createContext<AppContext | null>(null)

function App() {
  const [viewChatBox, setViewChatBox] = useState<boolean>(false)
  const [currentChat, setCurrentChat] = useState<Feeds>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { connector, account, chainId } = useWeb3React<Web3Provider>()
  const [did, setDid] = useState<DID>()
  const [searchedUser, setSearchedUser] = useState<string>('')
  const [connectedUser, setConnectedUser] = useState<ConnectedUser>()

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
    const user: User = await PushNodeClient.getUser(did.id)
    if (!user) {
      const keyPairs = await generateKeyPair()
      const encryptedPrivateKey = await DIDHelper.encrypt(keyPairs.privateKey, did)
      const createdUser = await PushNodeClient.createUser({
        wallet: caip10,
        did: did.id,
        pgp_pub: keyPairs.publicKey,
        pgp_priv_enc: JSON.stringify(encryptedPrivateKey),
        pgp_enc_type: 'pgp',
        signature: 'xyz',
        sig_type: 'a'
      })
      const connectedUser: ConnectedUser = { ...createdUser, privateKey: keyPairs.privateKey }
      setConnectedUser(connectedUser)
    } else {
      const privateKey: string = await DIDHelper.decrypt(JSON.parse(user.pgp_priv_enc), did)
      const connectedUser: ConnectedUser = { ...user, privateKey }
      const wallets: string = await PushNodeClient.updateWalletIfNotExist(did.id, caip10)
      user.wallets = wallets
      setConnectedUser(connectedUser)
    }
    setIsLoading(false)
  }

  const setChat = (text: Feeds): void => {
    setViewChatBox(true)
    setCurrentChat(text)
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
                connectedUser
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
