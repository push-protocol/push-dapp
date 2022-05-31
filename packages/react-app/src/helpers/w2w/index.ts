import * as PGP from './PGP'
import * as DIDHelper from './DID'
import * as Ceramic from './Ceramic'
import * as IPFS from './IPFS';
import { DID } from 'dids'
import { JWE } from 'did-jwt';
import { decrypt } from './DID';
import { CID, IPFSHTTPClient } from "ipfs-http-client"


export const getPGPKeysFromIPFSDecrypt = async (did: DID, cid: string, ipfs: IPFSHTTPClient) => {
  const keyFileData: JWE = await IPFS.get(cid, ipfs);
  const keyData = await decrypt(keyFileData, did);
  return keyData;
}

export const generateKeysEncryptStoreIPFS = async (passphrase: string, did: DID, ipfs: IPFSHTTPClient): Promise<CID> => {
    const pgpKeys = await PGP.generateKeyPair(passphrase);
    const keyData = {
        privateKey: pgpKeys.privateKey,
        publicKey: pgpKeys.publicKey,
        passphrase: passphrase
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