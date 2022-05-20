import Ceramic from '@ceramicnetwork/http-client'
import { Caip10Link } from '@ceramicnetwork/stream-caip10-link'
import { TileDocument } from '@ceramicnetwork/stream-tile'

export async function createCeramic() {
  const ceramic = new Ceramic('https://ceramic-clay.3boxlabs.com')
  window.ceramic = ceramic
  window.TileDocument = TileDocument
  window.Caip10Link = Caip10Link
  return Promise.resolve(ceramic);
}
