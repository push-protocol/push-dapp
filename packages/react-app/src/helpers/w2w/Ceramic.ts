import { CeramicClient } from '@ceramicnetwork/http-client'

export function createCeramic(): CeramicClient {
  const ceramic = new CeramicClient('https://ceramic-clay.3boxlabs.com')
  return ceramic;
}