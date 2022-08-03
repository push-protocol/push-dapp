import * as PGP from './pgp'
import * as DIDHelper from './did'
import * as Ceramic from './ceramic'

export const walletToCAIP10 = (account: string, chainId: number): string => {
  if (account.includes('eip155:1') || account.includes('eip155:42')) {
    return account
  }
  if (chainId === 1) {
    return 'eip155:1:' + account
  } else if (chainId === 42) {
    return 'eip155:42:' + account
  } else throw new Error()
}

export const caip10ToWallet = (wallet: string) => {
  wallet = wallet.replace('eip155:1:', '')
  wallet = wallet.replace('eip155:42:', '')
  return wallet
}

export default {
  PGP: PGP,
  DID: DIDHelper,
  Ceramic: Ceramic
}
