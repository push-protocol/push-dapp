// External Packages
import CryptoJS from 'crypto-js'

export function encrypt({ plainText, secretKey }: { plainText: string; secretKey: string }): string {
  return CryptoJS.AES.encrypt(plainText, secretKey).toString()
}

export function decrypt({ cipherText, secretKey }: { cipherText: string; secretKey: string }): string {
  let bytes = CryptoJS.AES.decrypt(cipherText, secretKey)
  return bytes.toString(CryptoJS.enc.Utf8)
}

export function generateRandomSecret(length: number): string {
  let result = ''
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }

  return result
}
