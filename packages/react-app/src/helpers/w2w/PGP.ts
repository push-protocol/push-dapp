import * as openpgp from 'openpgp';

export const generateKeyPair = async (): Promise<{ privateKey: string, publicKey: string }> => {
    return await openpgp.generateKey({
        type: 'rsa',
        rsaBits: 4096,
        userIDs: [{ name: '', email: '' }]
    });
};

const privateAndPubilcKeyObject = async (publicKeyArmored, privateKeyArmored): Promise<{ publicKey: openpgp.Key, privateKey: openpgp.PrivateKey }> => {
    const publicKey = await openpgp.readKey({ armoredKey: publicKeyArmored });
    const privateKey = await openpgp.decryptKey({
        privateKey: await openpgp.readPrivateKey({ armoredKey: privateKeyArmored })
    })
    return { publicKey: publicKey, privateKey: privateKey };
}

export const encryptMessage = async (plainText: any, toPublicKeyArmored: string, fromPrivateKeyArmored: string) => {
    const { publicKey, privateKey } = await privateAndPubilcKeyObject(toPublicKeyArmored, fromPrivateKeyArmored);
    const encrypted = await openpgp.encrypt({
        message: await openpgp.createMessage({ text: plainText }),
        encryptionKeys: publicKey,
        signingKeys: privateKey
    });
    return encrypted;
}

export const decryptMessage = async (encrypted: any, publicKeyArmored: string, privateKeyArmored: string) => {
    const message = await openpgp.readMessage({ armoredMessage: encrypted });
    const { publicKey, privateKey } = await privateAndPubilcKeyObject(publicKeyArmored, privateKeyArmored);
    const { data: decrypted, signatures } = await openpgp.decrypt({
        message,
        decryptionKeys: privateKey,
        expectSigned: true,
        verificationKeys: publicKey
    });
    try {
        await signatures[0].verified;
        console.log('signature is valid');
    }
    catch (e) {
        throw new Error('Signature invalid' + e.message);
    }

    return decrypted;
}