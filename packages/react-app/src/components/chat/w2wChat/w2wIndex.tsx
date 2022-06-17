import React, { useState, useEffect } from 'react';
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
import { JWE } from 'did-jwt';
import { getResolver as threeIDDIDGetResolver } from '@ceramicnetwork/3id-did-resolver';
import { getResolver as keyDIDGetResolver } from 'key-did-resolver'
import { Caip10Link } from '@ceramicnetwork/stream-caip10-link';

// Web3
import { Web3Provider } from "ethers/providers";
import { useWeb3React } from "@web3-react/core";
import { CeramicClient } from "@ceramicnetwork/http-client";
import './w2wIndex.css';
export interface Feeds {
  did: string,
  threadhash: string,
  name: string,
  lastMessage: string,
  profile_picture: string,
  time: string,
  intent: string

}

interface AppContextInterface {
  currentChat: Feeds, viewChatBox: boolean, getLinkWallets: (account: string) => Promise<string>, did: DID
}

export const Context = React.createContext<AppContextInterface | null>(null)
function App() {
  const [viewChatBox, setViewChatBox] = useState(false);
  const [currentChat, setCurrentChat] = useState<Feeds>();
  const [isLoading, setIsLoading] = useState(true);
  const { connector, account, chainId } = useWeb3React<Web3Provider>();
  const [did, setDid] = useState<DID>();
  const [ceramicInstance, setCeramicInstance] = useState<CeramicClient>();
  /* const [content, setContent] = useState<string>("");
   const [encryptedData, setEncryptedData] = useState<JWE>();
   const [decryptedData, setDecryptedData] = useState<string>();
   */

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
    setIsLoading(false);
    setCeramicInstance(ceramic);
    const response = await getUser(did.id);
    console.log(response);
    if (response === null) {
      const randomstring = randomString();
      const keyPairs = await generateKeyPair(randomstring);
      const encryptedPrivateKey = await encrypt(keyPairs.privateKey, did);
      const userDetails = await createUser(did.id, keyPairs.publicKey, encryptedPrivateKey.toString(), account);
      console.log(userDetails);
      localStorage.setItem('name', userDetails.name);
      localStorage.setItem('avatar', userDetails.profile_picture);

      //await updateKeys(did.id,keyPairs.privateKey,keyPairs.publicKey);

    }

    // const res = await encryptMessage({"hello":"world"},response.public_key);
    //console.log(res);
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
  return (
    <div className="w2wIndex">
      {!isLoading &&
        <Context.Provider value={{ currentChat, viewChatBox, getLinkWallets, did }}>
          <Sidebar setChat={setChat} />
          <ChatBox />
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