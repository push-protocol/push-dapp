import CryptoJS from 'crypto-js'

export function encryptWithAES({ message, key }: { message: string; key: string }): string {
  return CryptoJS.AES.encrypt(message, key).toString()
}

export function decryptWithAES({ message, key }: { message: string; key: string }): string {
  let bytes = CryptoJS.AES.decrypt(message, key)
  return bytes.toString(CryptoJS.enc.Utf8)
}
