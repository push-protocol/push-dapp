import * as PGP from './PGP'
import * as DIDHelper from './Did'
import * as Ceramic from './Ceramic'
import * as IPFS from './IPFS';
import { DID } from 'dids'
import { JWE } from 'did-jwt';
import { decrypt } from './Did';
import { CID, IPFSHTTPClient } from "ipfs-http-client"

export const getPGPKeysFromIPFSDecrypt = async (did: DID, cid: string, ipfs: IPFSHTTPClient) => {
    const keyFileData: JWE = await IPFS.get(cid, ipfs);
    const keyData = await decrypt(keyFileData, did);
    return keyData;
}

export const generateKeysEncryptStoreIPFS = async (did: DID, ipfs: IPFSHTTPClient): Promise<CID> => {
    const pgpKeys = await PGP.generateKeyPair();
    const keyData = {
        privateKey: pgpKeys.privateKey,
        publicKey: pgpKeys.publicKey
    }
    const jwe: JWE = await DIDHelper.encrypt(keyData, did);
    const cid: CID = await IPFS.store(jwe, ipfs);
    return cid;
}

export default {
    PGP: PGP,
    DID: DIDHelper,
    Ceramic: Ceramic,
    getPGPKeysFromIPFSDecrypt: getPGPKeysFromIPFSDecrypt,
    generateKeysEncryptStoreIPFS: generateKeysEncryptStoreIPFS
}