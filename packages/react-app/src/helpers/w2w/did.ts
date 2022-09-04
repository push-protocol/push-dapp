import { ThreeIdConnect, EthereumAuthProvider } from '@3id/connect'
import { ResolverRegistry } from 'did-resolver'
import { DID, DIDProvider } from 'dids'
import { CeramicApi } from '@ceramicnetwork/common'
import { JWE } from 'did-jwt'

export async function Get3IDDIDProvider(
  threeIdConnect: ThreeIdConnect,
  provider: any,
  walletAddress: string
): Promise<DIDProvider> {
  await threeIdConnect.connect(new EthereumAuthProvider(provider, walletAddress))
  return threeIdConnect.getDidProvider()
}

export async function CreateDID(
  keyDIDGetResolver: () => ResolverRegistry,
  threeIDGetResolver: (ceramic: CeramicApi) => ResolverRegistry,
  ceramic,
  didProvider: DIDProvider
): Promise<DID> {
  const threeIDResolver: ResolverRegistry = threeIDGetResolver(ceramic)
  const keyDIDResolver: ResolverRegistry = keyDIDGetResolver()

  const resolverRegistry = {
    ...threeIDResolver,
    ...keyDIDResolver
  }
  const did = new DID({
    provider: didProvider,
    resolver: resolverRegistry
  })

  try{ 
  await did.authenticate()
  } catch (e) {
    console.error(e)
  }
  return did
}

export async function encrypt(content: object | string, did: DID): Promise<JWE> {
  const jwe: JWE = await did.createDagJWE((content as unknown) as Record<string, any>, [did.id])
  return jwe
}

export async function decrypt(cipher: object, did: DID): Promise<string> {
  const cleartext: string = ((await did.decryptDagJWE(cipher as JWE)) as unknown) as string
  return cleartext
}
