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

export const encryptAndSign = async ({
  plainText,
  toPublicKeyArmored,
  fromPublicKeyArmored,
  fromPrivateKeyArmored
}: {
  plainText: string
  toPublicKeyArmored: string
  fromPublicKeyArmored: string
  fromPrivateKeyArmored: string
}): Promise<{ cipherText: string; signature: string }> => {
  const toPublicKey: openpgp.Key = await publicKeyObject(toPublicKeyArmored)
  const fromPublicKey: openpgp.Key = await publicKeyObject(fromPublicKeyArmored)
  const privateKey: openpgp.PrivateKey = await privateKeyObject(fromPrivateKeyArmored)
  const message: openpgp.Message<string> = await openpgp.createMessage({ text: plainText })
  const encrypted: string = <string>await openpgp.encrypt({
    message: message,
    encryptionKeys: [toPublicKey, fromPublicKey],
    signingKeys: privateKey
  })
  const signature: string = await sign({ message, signingKey: privateKey })
  return {
    cipherText: encrypted,
    signature
  }
}

const sign = async ({
  message,
  signingKey
}: {
  message: openpgp.Message<string>
  signingKey: openpgp.PrivateKey
}): Promise<string> => {
  return <string>await openpgp.sign({ message, signingKeys: signingKey, detached: true })
}

export const decryptAndVerifySignature = async ({
  cipherText,
  fromPublicKeyArmored,
  toPrivateKeyArmored,
  signatureArmored
}: {
  cipherText: any
  fromPublicKeyArmored: string
  toPrivateKeyArmored: string
  signatureArmored: string
}): Promise<string> => {
  const message = await openpgp.readMessage({ armoredMessage: cipherText })
  const publicKey: openpgp.PublicKey = await publicKeyObject(fromPublicKeyArmored)
  const privateKey: openpgp.PrivateKey = await privateKeyObject(toPrivateKeyArmored)

  ////////
  const signature: openpgp.Signature = await openpgp.readSignature({
    armoredSignature: signatureArmored
  })
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
  ////////

  const { data: decrypted, signatures } = await openpgp.decrypt({
    message,
    decryptionKeys: privateKey,
    expectSigned: true,
    verificationKeys: publicKey
  })
  try {
    await signatures[0].verified
    console.log('Signature is valid!')
  } catch (e) {
    throw new Error('Signature invalid' + e)
  }

  return decrypted as string
}
