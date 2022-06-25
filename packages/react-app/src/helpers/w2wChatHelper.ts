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

export const getUser = async (Did: string,account:string) => {
   
    const response = await fetch(`http://localhost:4000/apis/w2w/getUser/${Did}/${account}`);
    
    const data = await response.json();
    console.log(data);
    return data;
}

export const getDidLinkWallets = async (Did:string)=>{
    const response = await fetch('http://localhost:4000/apis/w2w/getDidLinkWallets/'+Did);
    const data =await response.json();
   
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

export const getIntent = async (firstDID:string,secondDID:string)=>{
  
    const response = await fetch(`http://localhost:4000/apis/w2w/intent/did/${firstDID}/${secondDID}`);
    const data = await response.json();
    return data;
}
export const getAllWallets = async () => {
    const response = await fetch('http://localhost:4000/apis/w2w/getAllUsers');
    const data = await response.json();
    return data;
}

export const createUser = async (wallet:string,did: string, pgp_pub: string, pgp_priv_enc: string, pgp_enc_type: string,signature:string,sig_type:string) => {
    const response = await fetch('http://localhost:4000/apis/w2w/createUser', {
        method: 'POST',
        headers: {
            "content-Type": 'application/json'
        },
        body: JSON.stringify({
            wallet,
            did,
            pgp_pub,
            pgp_priv_enc,
            pgp_enc_type,
            signature,
            sig_type
        })
    });
    const data = await response.json();
    return data;
}
export const getLatestThreadhash = async (firstDID:string,secondDID:string)=>{
    const response = await fetch(`http://localhost:4000/apis/w2w/messages/dids/${firstDID}/${secondDID}`);
    
    const data = await response.json();
    console.log(data);
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