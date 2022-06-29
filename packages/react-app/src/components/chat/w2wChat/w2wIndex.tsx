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
  currentChat: Feeds, viewChatBox: boolean, getLinkWallets: (account: string) => Promise<string>, did: DID,
  renderInboxFeed: Array<{}> | null
}

export const Context = React.createContext<AppContextInterface | null>(null)

function App() {
  const [viewChatBox, setViewChatBox] = useState<boolean>(false);
  const [currentChat, setCurrentChat] = useState<Feeds>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { connector, account, chainId } = useWeb3React<Web3Provider>();
  const [did, setDid] = useState<DID>();
  const [renderInboxFeed, setRenderInboxFeed] = useState<Array<{}> | null>();
  const [ceramicInstance, setCeramicInstance] = useState<CeramicClient>();

  useEffect(() => {
    if (isLoading) {
      connectToCeramic();
    }
  }, []);

  // Render
  const connectToCeramic = async () => {
    const provider: Promise<any> = await connector.getProvider()
    const threeID: ThreeIdConnect = new ThreeIdConnect()
    const ceramic: CeramicClient = createCeramic();
    const didProvider = await DIDHelper.Get3IDDIDProvider(threeID, provider, account);
    const did: DID = await DIDHelper.CreateDID(keyDIDGetResolver, threeIDDIDGetResolver, ceramic, didProvider);
    setDid(did);
    setCeramicInstance(ceramic);
    const response = await w2wHelper.getUser(did.id, w2wHelper.walletToCAIP10(account, chainId));
    if (response === null) {
      const keyPairs = await generateKeyPair();
      const encryptedPrivateKey = await DIDHelper.encrypt(keyPairs.privateKey, did);
      const userDetails = await w2wHelper.createUser(account, did.id, keyPairs.publicKey, encryptedPrivateKey.toString(), 'pgp', 'xyz', 'a');
      console.log(userDetails);
      //await updateKeys(did.id,keyPairs.privateKey,keyPairs.publicKey);
    }
    setIsLoading(false);
  };

  const getLinkWallets = async (account: string): Promise<string> => {
    try {
      // Using the Ceramic client instance, we can load the link for a given CAIP-10 account
      const link = await getDIDFromWallet(ceramicInstance, account, 1);
      console.log(link, 'link');
      // The `did` property of the loaded link will contain the DID string value if set
      return link;
    }
    catch (e) {
      console.log(e);
    }
  };

  const setChat = (text: Feeds) => {
    console.log(text);
    setViewChatBox(true);
    setCurrentChat(text);
  }

  const renderInbox = (args: any) => {
    setRenderInboxFeed(args);

  }

  return (
    <div className="w2wIndex">
      {!isLoading &&
        <Context.Provider value={{ currentChat, viewChatBox, getLinkWallets, did, renderInboxFeed }}>
          <Sidebar setChat={setChat} renderInbox={renderInbox} />
          <ChatBox renderInbox={renderInbox} />
        </Context.Provider>
      }
      {
        isLoading &&
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
  )
}
export default App;