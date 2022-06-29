import * as openpgp from 'openpgp';

export const generateKeyPair = async (): Promise<{ privateKey: string, publicKey: string }> => {
    return await openpgp.generateKey({
        type: 'rsa',
        rsaBits: 4096,
        userIDs: [{ name: '', email: '' }]
    });
};

const privateAndPubilcKeyObject = async (publicKeyArmored, privateKeyArmored) => {
    const publicKeyObject = await openpgp.readKey({ armoredKey: publicKeyArmored });
    const privateKeyObject = await openpgp.decryptKey({
        privateKey: await openpgp.readPrivateKey({ armoredKey: privateKeyArmored }),
        passphrase: 'helloworld'
    })
    return { publicKeyObject, privateKeyObject }
}

export const encryptMessage = async (jsonMessage, publicKeyArmored, privateKeyArmored) => {
    console.log(jsonMessage);
    const { publicKeyObject, privateKeyObject } = await privateAndPubilcKeyObject(publicKeyArmored, privateKeyArmored);
    console.log(publicKeyObject);
    const encrypted = await openpgp.encrypt({
        message: await openpgp.createMessage({ text: 'Hello, World!' }), // input as Message object
        encryptionKeys: publicKeyObject,
        signingKeys: privateKeyObject // this will sign the object with privatekey
    });
    // console.log(encrypted); // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
    return encrypted;
}


export const decryptMessage = async (encrypted, publicKeyArmored, privateKeyArmored, passphrase) => {
    const message = await openpgp.readMessage({
        armoredMessage: encrypted // the messaged that got encrypted in encrypt function above
    });
    const { publicKeyObject, privateKeyObject } = await privateAndPubilcKeyObject(publicKeyArmored, privateKeyArmored);
    const { data: decrypted, signatures } = await openpgp.decrypt({
        message,
        decryptionKeys: privateKeyObject,
        expectSigned: true,//mandatory to verify signature
        verificationKeys: publicKeyObject
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
