import * as PGP from './pgp'
import * as DIDHelper from './did'
import * as Ceramic from './ceramic'
import * as AES from './aes'
import { DID } from 'dids'

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

export const caip10ToWallet = (wallet: string): string => {
  wallet = wallet.replace('eip155:1:', '')
  wallet = wallet.replace('eip155:42:', '')
  return wallet
}

export const encrypt = async ({
  plainText,
  fromEncryptedPrivateKeyArmored,
  fromPublicKeyArmored,
  toPublicKeyArmored,
  did
}: {
  plainText: string
  fromEncryptedPrivateKeyArmored: string
  fromPublicKeyArmored: string
  toPublicKeyArmored: string
  did: DID
}): Promise<{ cipherText: string; encryptedSecret: string }> => {
  const privateKeyArmored: string = await DIDHelper.decrypt(JSON.parse(fromEncryptedPrivateKeyArmored), did)
  const secretKey: string = AES.generateRandomSecret(15)
  const cipherText: string = AES.encrypt({ plainText, secretKey })
  const encryptedSecret: string = await PGP.encrypt({
    fromPublicKeyArmored,
    plainText: secretKey,
    fromPrivateKeyArmored: privateKeyArmored,
    toPublicKeyArmored
  })
  return {
    cipherText,
    encryptedSecret
  }
}

export const decrypt = async ({
  cipherText,
  encryptedSecretKey,
  encryptedPrivateKeyArmored,
  publicKeyArmored,
  did
}: {
  cipherText: string
  encryptedSecretKey: string
  encryptedPrivateKeyArmored: string
  publicKeyArmored: string
  did: DID
}): Promise<string> => {
  const privateKeyArmored: string = await DIDHelper.decrypt(JSON.parse(encryptedPrivateKeyArmored), did)
  const secretKey: string = await PGP.decrypt({
    cipherText: encryptedSecretKey,
    fromPublicKeyArmored: publicKeyArmored,
    toPrivateKeyArmored: privateKeyArmored
  })
  return AES.decrypt({ cipherText, secretKey })
}

export default {
  PGP: PGP,
  DID: DIDHelper,
  Ceramic: Ceramic
}
