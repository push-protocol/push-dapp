import React, { useState, useEffect} from 'react';
import Sidebar from './sidebar/sidebar';
import ChatBox from './chatBox/chatBox';
import Loader from 'react-loader-spinner';
//Helper
import { createCeramic, getDIDFromWallet } from '../../../helpers/w2w/Ceramic';
import { encrypt, decrypt } from '../../../helpers/w2w/Did';
import { generateKeyPair, encryptMessage, decryptMessage } from '../../../helpers/w2w/PGP';
import * as DIDHelpers from '../../../helpers/w2w/Did';
import { getKeys, randomString, createUser, getUser } from '../../../helpers/w2wChatHelper';
//DID and ceramic
import { ThreeIdConnect } from '@3id/connect'
import { DID } from 'dids'
import { getResolver as threeIDDIDGetResolver } from '@ceramicnetwork/3id-did-resolver';
import { getResolver as keyDIDGetResolver } from 'key-did-resolver'
import { Caip10Link } from '@ceramicnetwork/stream-caip10-link';

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
  currentChat: Feeds, viewChatBox: boolean, did: DID,
  renderInboxFeed:Array<{}> | null
}

export const Context = React.createContext<AppContextInterface | null>(null);
function App() {
  const [viewChatBox, setViewChatBox] = useState<boolean>(false);
  const [currentChat, setCurrentChat] = useState<Feeds>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { connector, account, chainId } = useWeb3React<Web3Provider>();
  const [did, setDid] = useState<DID>();
  const [userProfile,setUserProfile] = useState<string>('');
  const [userWallets,setUserWallets] = useState<string>('');
  const [renderInboxFeed,setRenderInboxFeed] = useState<Array<{}> | null>();
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
    console.log(account);
    const didProvider = await DIDHelpers.Get3IDDIDProvider(threeID, provider, account);
    console.log(didProvider);
    const did: DID = await DIDHelpers.CreateDID(keyDIDGetResolver, threeIDDIDGetResolver, ceramic, didProvider);
    console.log(did);
    setDid(did);
    
    setCeramicInstance(ceramic);
    const response = await getUser(did.id,account);
    console.log(response);
    if (response === null) {
      const randomstring = randomString();
      const keyPairs = await generateKeyPair(randomstring);
      const encryptedPrivateKey = await encrypt(keyPairs.privateKey, did);
      const userDetails = await createUser(account,did.id,keyPairs.publicKey,encryptedPrivateKey.toString(),'pgp','xyz','a');
      console.log(userDetails);
      setUserProfile(userDetails.profile_picture);
      setUserWallets(userDetails.wallets);
    }
    else{
      setUserProfile(response.profile_picture);
      setUserWallets(response.wallets);
    }
    setIsLoading(false);
  };

  const setChat = (text: Feeds) => {
    console.log(text);
    setViewChatBox(true);
    setCurrentChat(text);
  }

  const renderInbox = (args:Array<{}>)=>{
    setRenderInboxFeed(args); 
  }
  return (
    <>
      <div className="w2wIndex">
        {!isLoading ?
          (
            <Context.Provider value={{ currentChat, viewChatBox, did,renderInboxFeed }}>
              <Sidebar setChat={setChat} renderInbox = {renderInbox} userProfile = {userProfile} userWallets = {userWallets}/>
              <ChatBox renderInbox = {renderInbox} />
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