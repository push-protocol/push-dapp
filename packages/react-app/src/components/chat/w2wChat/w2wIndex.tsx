import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar/sidebar';
import ChatBox from './chatBox/chatBox';
import Loader from 'react-loader-spinner';

// Helper
import { createCeramic, getDIDFromWallet } from '../../../helpers/w2w/Ceramic';
import { generateKeyPair } from '../../../helpers/w2w/PGP';
import * as DIDHelper from '../../../helpers/w2w/Did';
import * as w2wHelper from '../../../helpers/w2wChatHelper';

// DID and ceramic
import { ThreeIdConnect } from '@3id/connect'
import { DID } from 'dids'
import { getResolver as threeIDDIDGetResolver } from '@ceramicnetwork/3id-did-resolver';
import { getResolver as keyDIDGetResolver } from 'key-did-resolver'

// Web3
import { Web3Provider } from "ethers/providers";
import { useWeb3React } from "@web3-react/core";
import { CeramicClient } from "@ceramicnetwork/http-client";

import './w2wIndex.css';

export interface Feeds {
  msg: any;
  did: string,
  wallets: string,
  name: string | null,
  profile_picture: string | null,
  public_key: string | null,
  about: string | null,
  threadhash: string | null,
  combined_did: string | null,
  intent: string | null,
  intent_sent_by: string | null,
  intent_timestamp: Date
}

interface AppContextInterface {
  currentChat: Feeds, viewChatBox: boolean,
  did: DID,
  renderInboxFeed: Array<{}> | null,
  userProfile: string,
  userWallets: string,
  setChat: (text: Feeds) => void,
  renderInbox: (args: Array<{}>) => void

}

export const Context = React.createContext<AppContextInterface | null>(null)
function App() {
  const [viewChatBox, setViewChatBox] = useState<boolean>(false);
  const [currentChat, setCurrentChat] = useState<Feeds>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { connector, account, chainId } = useWeb3React<Web3Provider>();
  const [did, setDid] = useState<DID>();
  const [caip10Account, setCaip10Account] = useState<string>('');
  const [userProfile, setUserProfile] = useState<string>('');
  const [userWallets, setUserWallets] = useState<string>('');
  const [renderInboxFeed, setRenderInboxFeed] = useState<Array<{}> | null>();
  const [ceramicInstance, setCeramicInstance] = useState<CeramicClient>();
  useEffect(() => {
    if (isLoading) {
      connectToCeramic();
    }
  }, []);

  const connectToCeramic = async () => {
    const provider: Promise<any> = await connector.getProvider()
    const threeID: ThreeIdConnect = new ThreeIdConnect()
    const ceramic: CeramicClient = createCeramic();
    const didProvider = await DIDHelper.Get3IDDIDProvider(threeID, provider, account);
    const did: DID = await DIDHelper.CreateDID(keyDIDGetResolver, threeIDDIDGetResolver, ceramic, didProvider);
    const caip10: string = w2wHelper.walletToCAIP10(account, chainId); // the useState does not update state immediately
    setCaip10Account(caip10);
    setDid(did);
    setCeramicInstance(ceramic);
    const response = await w2wHelper.getUser(did.id, caip10);
    if (response === null) {
      const keyPairs = await generateKeyPair();
      const encryptedPrivateKey = await DIDHelper.encrypt(keyPairs.privateKey, did);
      const userDetails = await w2wHelper.createUser({ wallet: caip10, did: did.id, pgp_pub: keyPairs.publicKey, pgp_priv_enc: JSON.stringify(encryptedPrivateKey), pgp_enc_type: 'pgp', signature: 'xyz', sig_type: 'a' });
      setUserProfile(userDetails.profile_picture);
      setUserWallets(userDetails.wallets);
    }
    else {
      setUserProfile(response.profile_picture);
      setUserWallets(response.wallets);
    }
    setIsLoading(false);
  };

  const setChat = (text: Feeds) => {
    setViewChatBox(true);
    setCurrentChat(text);
  }

  const renderInbox = (args: Array<{}>) => {
    setRenderInboxFeed(args);
  }

  return (
    <>
      <div className="w2wIndex">
        {!isLoading ?
          (
            <Context.Provider value={{ currentChat, viewChatBox, did, renderInboxFeed, userProfile, userWallets, setChat, renderInbox }}>
              <Sidebar />
              <ChatBox />
            </Context.Provider>
          )
          :
          (
            <div className='w2wIndexLoaderContainer'>
              <Loader
                className="w2wLoader"
                type="Oval" />
              <p>Fetching Did</p>
            </div>
          )
        }
      </div>
    </>
  )
}
export default App;