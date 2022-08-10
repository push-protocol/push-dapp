import * as openpgp from 'openpgp'

export const generateKeyPair = async (): Promise<{ privateKeyArmored: string; publicKeyArmored: string }> => {
  const keys = await openpgp.generateKey({
    type: 'rsa',
    rsaBits: 4096,
    userIDs: [{ name: '', email: '' }]
  })
  return {
    privateKeyArmored: keys.privateKey,
    publicKeyArmored: keys.publicKey
  }
}

const publicKeyObject = async (publicKeyArmored: string): Promise<openpgp.Key> => {
  return await openpgp.readKey({ armoredKey: publicKeyArmored })
}

const privateKeyObject = async (privateKeyArmored: string): Promise<openpgp.PrivateKey> => {
  return await openpgp.readPrivateKey({ armoredKey: privateKeyArmored })
}

export const encrypt = async ({
  plainText,
  toPublicKeyArmored,
  fromPublicKeyArmored
}: {
  plainText: string
  toPublicKeyArmored: string
  fromPublicKeyArmored: string
}): Promise<string> => {
  const toPublicKey: openpgp.Key = await publicKeyObject(toPublicKeyArmored)
  const fromPublicKey: openpgp.Key = await publicKeyObject(fromPublicKeyArmored)
  const message: openpgp.Message<string> = await openpgp.createMessage({ text: plainText })
  const encrypted: string = <string>await openpgp.encrypt({
    message: message,
    encryptionKeys: [toPublicKey, fromPublicKey]
  })
  return encrypted
}

export const sign = async ({ message, signingKey }: { message: string; signingKey: string }): Promise<string> => {
  const messageObject: openpgp.Message<string> = await openpgp.createMessage({ text: message })
  const privateKey: openpgp.PrivateKey = await privateKeyObject(signingKey)
  return <string>await openpgp.sign({ message: messageObject, signingKeys: privateKey, detached: true })
}

export const verifySignature = async ({
  messageContent,
  signatureArmored,
  publicKeyArmored
}: {
  messageContent: string
  signatureArmored: string
  publicKeyArmored: string
}): Promise<void> => {
  const message: openpgp.Message<string> = await openpgp.createMessage({ text: messageContent })
  const signature: openpgp.Signature = await openpgp.readSignature({
    armoredSignature: signatureArmored
  })
  const publicKey: openpgp.PublicKey = await publicKeyObject(publicKeyArmored)
  const verificationResult = await openpgp.verify({
    message,
    signature,
    verificationKeys: publicKey
  })
  const { verified, keyID } = verificationResult.signatures[0]
  try {
    await verified
    console.log('========> The signature is valid! <========')
  } catch (e) {
    throw new Error('Signature could not be verified: ' + e)
  }
}

export const decrypt = async ({
  cipherText,
  fromPublicKeyArmored,
  toPrivateKeyArmored
}: {
  cipherText: any
  fromPublicKeyArmored: string
  toPrivateKeyArmored: string
}): Promise<string> => {
  const message = await openpgp.readMessage({ armoredMessage: cipherText })
  const privateKey: openpgp.PrivateKey = await privateKeyObject(toPrivateKeyArmored)

  const { data: decrypted } = await openpgp.decrypt({
    message,
    decryptionKeys: privateKey
  })

  return decrypted as string
}
