import { randomBytes } from '@stablelib/random';
import { Feeds, User } from 'components/chat/w2wChat/w2wIndex';
import { toString } from 'uint8arrays/to-string';
import { envConfig } from "@project/contracts";
const BASE_URL = envConfig.w2wApiUrl;
export const walletToCAIP10 = (account: string, chainId: number): string => {
    if (chainId === 1) {
        return 'eip155:1:' + account;
    }
    else if (chainId === 42) {
        return 'eip155:42:' + account
    }
    else throw new Error();
}

export const getInbox = async (did: string): Promise<Feeds[]> => {
    const response = await fetch(BASE_URL+'/w2w/inbox',{
        method:'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            did
        })
    });
    const data: Feeds[] = await response.json();
    return data;
}

export const getIntents = async (did: string) => {
    const response = await fetch(BASE_URL+'/w2w/getIntents',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            did
        })
    });
    const data: any = await response.json();
    return data;
}

export const getUser = async (did: string) => {
    const response = await fetch(BASE_URL+'/w2w/getUser',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            did
        })
    });
    const data = await response.json();
    return data;
}

export const updateWalletIfNotExist = async (did:string,caip10:string)=>{
    const response = await fetch(BASE_URL+'/w2w/updateWalletIfNotExist',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            did,
            caip10
        })
    })
    const data = await response.json();
    return data;
}


export const getDidLinkWallets = async (did: string) => {
    const response = await fetch(BASE_URL+'/w2w/getDidLinkWallets/',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            did
        })
    });
    const data = await response.json();
    return data;
}

export const uploadUserProfileImage = async (did: string, image: string) => {
    const response = await fetch(BASE_URL+'/w2w/updateProfilePicture/' + did, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            image
        })
    });
}

export const postMessage = async (fromWallet: string, fromDID: string, toDID: string,
    messageContent: string, messageType: string, signature: string) => {
    const response = await fetch(BASE_URL+'/w2w/postMessage', {
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

export const getIntent = async (firstDID: string, secondDID: string) => {
    const response = await fetch(BASE_URL+'/w2w/getIntent',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            firstDID,
            secondDID
        })
    });
    const data = await response.json();
    return data;
}

export const getAllUsers = async (): Promise<User[]> => {
    const response = await fetch(BASE_URL+'/w2w/getAllUsers',{
        method:'POST',
        headers:{
            "content-Type":"application/json"
        }
    });
    const data = await response.json();
    console.log('All Users: ', data);
    return data;
}

export const createUser = async ({ wallet, did, pgp_pub, pgp_priv_enc, pgp_enc_type, signature, sig_type }:
    { wallet: string, did: string, pgp_pub: string, pgp_priv_enc: string, pgp_enc_type: string, signature: string, sig_type: string }) => {
    const response = await fetch(BASE_URL+'/w2w/createUser', {
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

export const getLatestThreadhash = async (firstDID: string, secondDID: string) => {
    const response = await fetch(BASE_URL+'/w2w/messages',{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify({
            firstDID,
            secondDID
        })
    });
    const data = await response.json();
    return data;

}

export const getKeys = async (did: string) => {
    const response = await fetch(BASE_URL+'/w2w/keys/did/' + did);
    const data: any = await response.json();
    return data;
}
export function randomString() {
    return toString(randomBytes(16), 'base64');
}
export const approveIntent = async (fromDID: string, toDID: string, status: string, signature: string) => {
    const response = await fetch(BASE_URL+'/w2w/updateIntent', {
        method: 'PUT',
        headers: {
            "content-Type": 'application/json'
        },
        body: JSON.stringify({
            toDID,
            fromDID,
            status,
            signature
        })
    });
    return response;
}

export const createIntent = async (toDID: string, fromDID: string, fromWallet: string, message: string, signature: string) => {
    const response = await fetch(BASE_URL+'/w2w/createIntent', {
        method: 'POST',
        headers: {
            "content-Type": 'application/json'
        },
        body: JSON.stringify({
            toDID,
            fromDID,
            fromWallet,
            message,
            signature
        })
    });
    const data = await response.json();
    return data;
}