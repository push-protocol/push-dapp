import { CID, create, IPFSHTTPClient } from 'ipfs-http-client'

export interface MessageIPFS {
  fromCAIP10: string
  fromDID: string
  toDID: string
  messageType: string
  messageContent: string
  signature: string
  sigType: string
  link: string | null
  timestamp?: number
  encType: string
  encryptedSecret: string
}

function createIPFSClient(): IPFSHTTPClient {
  return create({ host: 'epns-gateway.infura-ipfs.io', port: 5001, protocol: 'https' })
}

// TODO: Change this to make request to Push Node instead
export async function uploadImage(image): Promise<string> {
  const ipfsHttpClient: IPFSHTTPClient = createIPFSClient()
  const cid = await ipfsHttpClient.add(image)
  return cid.path
}
