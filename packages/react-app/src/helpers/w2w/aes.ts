import CryptoJS from 'crypto-js'

export function encryptWithAES({ message, key }: { message: string; key: string }): string {
  return CryptoJS.AES.encrypt(message, key).toString()
}

export function decryptWithAES({ message, key }: { message: string; key: string }): string {
  let bytes = CryptoJS.AES.decrypt(message, key)
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
