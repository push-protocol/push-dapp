import { randomBytes } from '@stablelib/random';
import { toString } from 'uint8arrays/to-string';

export const getInbox = async (Did:string)=>{
    try {
        const response = await fetch('http://localhost:4000/apis/w2w/inbox/did/' + Did);
        const data: any = await response.json();
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

export const postMessageToServer = async (time:number,text:string,wallet:string)=>{
    try {
        const response = await fetch('/api/w2w/postMessage', {
            method: 'POST',
            headers: {
                "content-Type": 'application/json'
            },
            body: JSON.stringify({
                time,
                text,
                wallet
            })
        });
        if (response.status !== 201) {
            throw new Error("something went wrong")
        }
        const data: any = await response.json();
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

export const getAllWallets = async ()=>{
    try {
        const response = await fetch('http://localhost:4000/apis/w2w/users');
        const data = await response.json();
        return data;
    }
    catch (err) {
        console.error(err);
    }
}

export const createUser = async (did: string, publicKey: string, encryptedPrivateKey: string) => {
    try {
        const response = await fetch('http://localhost:4000/apis/w2w/user', {
            method: 'POST',
            headers: {
                "content-Type": 'application/json'
            },
            body: JSON.stringify({
                did,
                publicKey,
                encryptedPrivateKey
            })
        });
        const data = await response.json();
        return data;
    }
    catch (err) {
        console.error(err);
    }
}

export const getKeys = async (Did: string) => {
    try {
        const response = await fetch('http://localhost:4000/apis/w2w/keys/did/' + Did);
        const data: any = await response.json();
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

export function randomString() {
    return toString(randomBytes(16), 'base64');
}