import { DID } from 'dids'
import { JWE } from 'did-jwt';
import { CID, create, IPFSHTTPClient } from "ipfs-http-client"

export function createIPFSClient(): IPFSHTTPClient {
  return create();
}

export async function store(content: JWE, ipfs: IPFSHTTPClient): Promise<CID> {
  return await ipfs.dag.put(content, { storeCodec: 'dag-jose', hashAlg: 'sha2-256' });
}

export async function get(cid: string, ipfs: IPFSHTTPClient): Promise<JWE> {
  const cidObject = CID.parse(cid);
  const jwe = (await ipfs.dag.get(cidObject)).value;
  console.log(jwe);
  return jwe;
}