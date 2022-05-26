import { Caip10Link } from '@ceramicnetwork/stream-caip10-link'
import { TileDocument } from '@ceramicnetwork/stream-tile'

import { CeramicClient } from '@ceramicnetwork/http-client'

export async function createCeramic() {
  const ceramic = new CeramicClient('https://ceramic-clay.3boxlabs.com')
  window.ceramic = ceramic
  window.TileDocument = TileDocument
  window.Caip10Link = Caip10Link
  return Promise.resolve(ceramic);
}
