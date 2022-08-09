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
  fromPublicKeyArmored,
  fromPrivateKeyArmored
}: {
  plainText: string
  toPublicKeyArmored: string
  fromPublicKeyArmored: string
  fromPrivateKeyArmored: string
}): Promise<string> => {
  const toPublicKey: openpgp.Key = await publicKeyObject(toPublicKeyArmored)
  const fromPublicKey: openpgp.Key = await publicKeyObject(fromPublicKeyArmored)
  const privateKey: openpgp.PrivateKey = await privateKeyObject(fromPrivateKeyArmored)
  const encrypted = await openpgp.encrypt({
    message: await openpgp.createMessage({ text: plainText }),
    encryptionKeys: [toPublicKey, fromPublicKey],
    signingKeys: privateKey
  })
  return encrypted as string
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
  const publicKey: openpgp.PublicKey = await publicKeyObject(fromPublicKeyArmored)
  const privateKey: openpgp.PrivateKey = await privateKeyObject(toPrivateKeyArmored)

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
