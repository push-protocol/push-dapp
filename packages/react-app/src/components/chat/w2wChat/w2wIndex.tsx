import React,{useState,useEffect} from 'react';
import Sidebar from './sidebar/sidebar';
import ChatBox from './chatBox/chatBox';
import Loader from 'react-loader-spinner';

// Helper
import { createCeramic, getDIDFromWallet } from '../../../helpers/w2w/Ceramic'
import * as DIDHelpers from '../../../helpers/w2w/Did';

// DID and ceramic
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
  name: string | null,
  profile_picture: string | null,
  public_key: string | null,
  about: string | null,
  threadhash: string | null,
  combined_did: string | null,
  intent: string | null,
  intent_sent_by: string | null,
  intent_timestam: Date
}

interface AppContextInterface {
  currentChat: Feeds, viewChatBox: boolean
}

export const Context = React.createContext<AppContextInterface | null>(null)

function App() {
  const [viewChatBox, setViewChatBox] = useState(false);
  const [currentChat, setCurrentChat] = useState<Feeds>();
  const [isLoading, setIsLoading] = useState(true);
  const { connector, account, chainId } = useWeb3React<Web3Provider>();
  const [did, setDid] = useState<DID>();

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
    const didProvider = await DIDHelpers.Get3IDDIDProvider(threeID, provider, account);
    const did: DID = await DIDHelpers.CreateDID(keyDIDGetResolver, threeIDDIDGetResolver, ceramic, didProvider);
    console.log(did);

    setDid(did);
    setIsLoading(false);
  };

  const setChat = (text: Feeds) => {
    console.log('entrei aqui')
    console.log(text);
    setViewChatBox(true);
    setCurrentChat(text);
  }

  return (
    <div className="w2wIndex">
      {!isLoading &&
        <Context.Provider value={{ currentChat, viewChatBox }}>
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