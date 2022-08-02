import { JWE } from 'did-jwt'
import { CID, create, IPFSHTTPClient } from 'ipfs-http-client'

export interface MessageIPFS {
  fromWallet: string
  fromDID: string
  toDID: string
  messageType: string
  messageContent: string
  signature: string
  sig_type: string
  link: string | null
  time: number
  timestamp?: number
  enc_type: string
}

export function createIPFSClient(): IPFSHTTPClient {
  return create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })
}

export async function store(content: JWE, ipfs: IPFSHTTPClient): Promise<CID> {
  return await ipfs.dag.put(content, { storeCodec: 'dag-jose', hashAlg: 'sha2-256' })
}

export async function get(cid: string, ipfs: IPFSHTTPClient): Promise<any> {
  const cidObject = CID.parse(cid)
  const content: any = (await ipfs.dag.get(cidObject)).value
  return content
}

export async function uploadImage(image, ipfs: IPFSHTTPClient): Promise<string> {
  const cid = await ipfs.add(image)
  return cid.path
}
