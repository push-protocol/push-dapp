import React, { useState } from "react";

import styled, { useTheme } from "styled-components";
import { Content, Item, H2, H3, Span } from "components/SharedStyling";

// import { TileDocument } from '@ceramicnetwork/stream-tile'
import { DID } from 'dids'
// import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
// import KeyDidResolver from 'key-did-resolver'
import { createCeramic } from 'helpers/ceramic'
// import { createDataStore } from 'helpers/datastore'
import { getProvider } from 'helpers/wallet'

// // Encrypting and Signing
import * as IPFS from 'ipfs-core'
// import * as dagJose from 'dag-jose'

function LoginIDX() {
  const ceramicPromise = createCeramic()

  const [did, setDid] = useState({});
  const [ipfs, setIPFS] = useState(null);

  const [ceramicState, setCeramicState] = useState({});
  const [content, setContent] = useState("");
  const [streamId, setStreamId] = useState("");
  const [stream, setStream] = useState("");
  const [encryptedDataCID, setEncryptedDataCID] = useState({});
  const [decryptedContent, setDecryptedContent] = useState("");

  React.useEffect(() => {
    initializeIPFS();
  }, []);
  
  const initializeIPFS = async () => {
    if (ipfs) {
      return ipfs;
    }
    else {
      const instance = await IPFS.create();
      setIPFS(instance);
      return instance;
    }
  }

  const getDAGFile = async () => {
    // // const result = await ipfs.dag.get(cid);
    // // return result.value;
    // const jwe = (await ipfs.dag.get(encryptedDataCID)).value;
    // const cleartext = await did.decryptDagJWE(jwe);
    // setDecryptedContent(cleartext);
  };

  const encrypt = async () => {
    //     const jwe = await did.createDagJWE(content, [did.id]);
    //     const cid = await ipfs.dag.put(jwe, { storeCodec: 'dag-jose', hashAlg: 'sha2-256' });
    //     window.cid = cid;
    //     setEncryptedDataCID(cid);
  };

  const connectToCeramic = async () => {
    const [ceramic, provider] = await Promise.all([ceramicPromise, getProvider()])
    // const keyDidResolver = KeyDidResolver.getResolver()
    // const threeIdResolver = ThreeIdResolver.getResolver(ceramic)
    // const resolverRegistry = {
    //     ...threeIdResolver,
    //     ...keyDidResolver,
    // }
    // const did = new DID({
    //     provider: provider,
    //     resolver: resolverRegistry,
    // })
    // await did.authenticate()
    // await ceramic.setDID(did)
    // // const datastore = createDataStore(ceramic)
    // setDid(did);
    // setCeramicState(ceramic);
  };

  const createStream = async (e) => {
    //     e.preventDefault();
    //     // The following call will fail if the Ceramic instance does not have an authenticated DID
    //     const doc = await TileDocument.create(ceramicState, content)
    //     // The stream ID of the created document can then be accessed as the `id` property
    //     setStreamId(doc.id);
  };

  const loadStream = async () => {
    //     const streamReturned = await TileDocument.load(ceramicState, streamId);
    //     setStream(streamReturned);
  };

  return (
    <Content padding="20px">
      <Item justify="flex-start" align="flex-start">
        <H2 textTransform="uppercase" spacing="0.1em">
          <Span weight="200">Send </Span>
          <Span bg="#674c9f" color="#fff" weight="600" padding="0px 8px">
            Chats
          </Span>
        </H2>
        <H3>Send Chat Test</H3>
      </Item>
      <Item justify="flex-start" align="flex-start" margin="20px">
        <button onClick={connectToCeramic}>Connect to Ceramic</button>
        {/* <p>{did.id}</p> */}
        <form onSubmit={createStream}>
          <label>
            Enter your text to be added to Ceramic:
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
          <input type="submit" />
          <p>{streamId.toString()}</p>
        </form>
        {/* <button onClick={loadStream}>Load latest stream: </button> */}
        {/* <p>{stream?.content}</p> */}
        <H2 textTransform="uppercase" spacing="0.1em">
          Encrypt data
        </H2>
        <button onClick={encrypt}>Encrypt</button>
        {Object.keys(encryptedDataCID).length === 0 ? (
          <p>Please submit text to encrypt</p>
        ) : (
          <div>
            <p>{encryptedDataCID.toString()}</p>
          </div>
        )}
        <H2 textTransform="uppercase" spacing="0.1em">
          Decrypt data
        </H2>
        <button onClick={getDAGFile}>Decrypt</button>
        <p>{decryptedContent}</p>
      </Item>
    </Content>
  );
}
export default LoginIDX;
