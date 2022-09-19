import { CeramicClient } from '@ceramicnetwork/http-client'
import { Caip10Link } from '@ceramicnetwork/stream-caip10-link'
import { CeramicApi } from '@ceramicnetwork/common'

export function createCeramic(): CeramicClient {
  const ceramic = new CeramicClient('https://chat.epns.io')
  return ceramic
}

export async function getDIDFromWallet(
  ceramicClient: CeramicClient,
  walletAddress: string,
  chainId: number
): Promise<string | null> {
  // Use later CAIP library to allow other chainIds
  if (chainId !== 1) {
    console.error('Wrong chainId!!!')
  }
  const link: Caip10Link = await Caip10Link.fromAccount(
    // @ts-ignore
    ceramicClient as CeramicApi,
    walletAddress + '@eip155:1'
  )
  return link.did
}
