//@ts-ignore
import * as openpgp from 'openpgp';
export const generateKeyPair = async (passphrase: string): Promise<{ privateKey: string, publicKey: string }> => {
    return await openpgp.generateKey({
        type: 'rsa', // Type of the key
        rsaBits: 4096, // RSA key size (defaults to 4096 bits)
        // Check this later
        // Check this later
        userIDs: [{ name: 'Jon Smith', email: 'jon@example.com' }], // you can pass multiple user IDs
        passphrase: passphrase// protects the private key
    });
};