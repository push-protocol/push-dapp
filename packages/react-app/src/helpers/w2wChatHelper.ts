import { randomBytes } from '@stablelib/random';
import { toString } from 'uint8arrays/to-string';

export const getInbox = async (Did: string) => {
    const response = await fetch('http://localhost:4000/apis/w2w/inbox/did/' + Did);
    const data: any = await response.json();
    return data;
}

export const getIntents = async (Did: string) => {
    const response = await fetch('http://localhost:4000/apis/w2w/intents/did/' + Did);
    const data: any = await response.json();
    return data;
}

export const getUser = async (Did: string) => {
    const response = await fetch('http://localhost:4000/apis/w2w/getUser/did/' + Did);
    const data = await response.json();
    return data;
}
export const postMessage = async (fromWallet: string, fromDID: string, toDID: string,
    messageContent: string, messageType: string, signature: string) => {
    const response = await fetch('http://localhost:4000/apis/w2w/messages', {
        method: 'POST',
        headers: {
            "content-Type": 'application/json'
        },
        body: JSON.stringify({
            fromWallet,
            fromDID,
            toDID,
            messageContent,
            messageType,
            signature
        })
    });
    if (response.status > 299) {
        throw new Error('Error posting message')
    }
    const data: any = await response.json();
    return data;
}

export const getAllWallets = async () => {
    const response = await fetch('http://localhost:4000/apis/w2w/users');
    const data = await response.json();
    return data;
}

export const createUser = async (did: string, publicKey: string, encryptedPrivateKey: string, wallet: string) => {
    const response = await fetch('http://localhost:4000/apis/w2w/user', {
        method: 'POST',
        headers: {
            "content-Type": 'application/json'
        },
        body: JSON.stringify({
            did,
            publicKey,
            encryptedPrivateKey,
            wallet
        })
    });
    const data = await response.json();
    return data;
}

export const getKeys = async (Did: string) => {
    const response = await fetch('http://localhost:4000/apis/w2w/keys/did/' + Did);
    const data: any = await response.json();
    return data;
}

export function randomString() {
    return toString(randomBytes(16), 'base64');
}