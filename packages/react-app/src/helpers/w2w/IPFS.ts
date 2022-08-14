import { JWE } from 'did-jwt'
import { CID, create, IPFSHTTPClient } from 'ipfs-http-client'
import { envConfig } from '@project/contracts'
import * as PushNodeClient from '../../api'

export interface MessageIPFS {
  fromWallet: string
  fromDID: string
  toDID: string
  messageType: string
  messageContent: string
  signature: string
  sigType: string
  link: string | null
  timestamp?: number
  enc_type: string
  encryptedSecret: string
}

function createIPFSClient(): IPFSHTTPClient {
  return create({ host: 'epns-gateway.infura-ipfs.io', port: 5001, protocol: 'https' })
}

// We try to get the cid from Push Node. If not success, we get from IPFS directly
export async function get(cid: string): Promise<MessageIPFS> {
  let content: MessageIPFS
  try {
    content = await PushNodeClient.getFromIPFS(cid)
  } catch (e) {
    const ipfsHttpClient: IPFSHTTPClient = createIPFSClient()
    const cidObject = CID.parse(cid)
    content = (await ipfsHttpClient.dag.get(cidObject)).value
  }
  return content
}

// TODO: Change this to make request to Push Node instead
export async function uploadImage(image): Promise<string> {
  const ipfsHttpClient: IPFSHTTPClient = createIPFSClient()
  const cid = await ipfsHttpClient.add(image)
  return cid.path
}
