import React, { useState } from "react";

// import { TileDocument } from '@ceramicnetwork/stream-tile'
// import { DID } from 'dids'
// import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
// import KeyDidResolver from 'key-did-resolver'
// import { createCeramic } from 'helpers/ceramic'
// import { createDataStore } from 'helpers/datastore'
// import { getProvider } from 'helpers/wallet'

// Encrypting and Signing
// import {create as createIPFS} from 'ipfs-core'
// import * as dagJose from 'dag-jose'

// let ipfs;

// ;(async () => {
//     ipfs = await createIPFS()
// })()

function LoginIDX() {
    // const ceramicPromise = createCeramic()

    // const [did, setDid] = useState({});
    // const [ceramicState, setCeramicState] = useState({});
    // const [content, setContent] = useState('');
    // const [streamId, setStreamId] = useState('');
    // const [stream, setStream] = useState('');
    // const [encryptedDataCID, setEncryptedDataCID] = useState({});
    // const [decryptedContent, setDecryptedContent] = useState('');

    // const getDAGFile = async () => {
    //     // const result = await ipfs.dag.get(cid);
    //     // return result.value;
    //     const jwe = (await ipfs.dag.get(encryptedDataCID)).value;
    //     const cleartext = await did.decryptDagJWE(jwe);
    //     setDecryptedContent(cleartext);
    // }

    // const encrypt = async () => {
    //     const jwe = await did.createDagJWE(content, [did.id]);
    //     const cid = await ipfs.dag.put(jwe, { storeCodec: 'dag-jose', hashAlg: 'sha2-256' });
    //     window.cid = cid;
    //     setEncryptedDataCID(cid);
    // }

    // const connectToCeramic = async () => {
    //     const [ceramic, provider] = await Promise.all([ceramicPromise, getProvider()])
    //     const keyDidResolver = KeyDidResolver.getResolver()
    //     const threeIdResolver = ThreeIdResolver.getResolver(ceramic)
    //     const resolverRegistry = {
    //         ...threeIdResolver,
    //         ...keyDidResolver,
    //     }
    //     const did = new DID({
    //         provider: provider,
    //         resolver: resolverRegistry,
    //     })
    //     await did.authenticate()
    //     await ceramic.setDID(did)
    //     // const datastore = createDataStore(ceramic)

    //     setDid(did);
    //     setCeramicState(ceramic);
    // }

    // const createStream = async (e) => {
    //     e.preventDefault();
    //     // The following call will fail if the Ceramic instance does not have an authenticated DID
    //     const doc = await TileDocument.create(ceramicState, content)
    //     // The stream ID of the created document can then be accessed as the `id` property
    //     setStreamId(doc.id);
    // }

    // const loadStream = async () => {
    //     const streamReturned = await TileDocument.load(ceramicState, streamId);
    //     setStream(streamReturned);
    // }

    return (
        <div>
           
        </div>
    );
}
export default LoginIDX;