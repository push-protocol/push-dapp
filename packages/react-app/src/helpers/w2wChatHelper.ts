import { randomBytes } from '@stablelib/random';
import { toString } from 'uint8arrays/to-string';
import * as PGP from '../helpers/w2w/PGP';

export const walletToCAIP10 = (account: string, chainId: number): string => {
    if (chainId === 1) {
        return 'eip155:1:' + account;
    }
    else if (chainId === 42) {
        return 'eip155:42:' + account
    }
    else throw new Error();
}

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

export const getUser = async (did: string, account: string) => {
    const response = await fetch(`http://localhost:4000/apis/w2w/getUser/${did}/${account}`);
    const data = await response.json();
    return data;
}

export const getDidLinkWallets = async (Did: string) => {
    const response = await fetch('http://localhost:4000/apis/w2w/getDidLinkWallets/' + Did);
    const data = await response.json();
    return data;
}

export const uploadUserProfileImage = async (Did: string, image: string) => {
    const response = await fetch('http://localhost:4000/apis/w2w/updateProfilePicture/' + Did, {
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
    const cipherText = PGP.encryptMessage(messageContent)
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

export const getIntent = async (firstDID: string, secondDID: string) => {
    const response = await fetch(`http://localhost:4000/apis/w2w/intent/did/${firstDID}/${secondDID}`);
    const data = await response.json();
    return data;
}

export const getAllUsers = async (): Promise<User[]> => {
    const response = await fetch('http://localhost:4000/apis/w2w/getAllUsers');
    const data = await response.json();
    return data;
}

export const createUser = async ({ wallet, did, pgp_pub, pgp_priv_enc, pgp_enc_type, signature, sig_type }:
    { wallet: string, did: string, pgp_pub: string, pgp_priv_enc: string, pgp_enc_type: string, signature: string, sig_type: string }) => {
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

export const getLatestThreadhash = async (firstDID: string, secondDID: string) => {
    const response = await fetch(`http://localhost:4000/apis/w2w/messages/dids/${firstDID}/${secondDID}`);
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
export interface User {
    readonly id?: string,
    did: string,
    wallets: string,
    profile_picture: string | null,
    pgp_pub: string,
    pgp_priv_enc: string,
    pgp_enc_type: string,
    signature: string,
    sig_type: string,
    about: string | null,
    num_msg: number,
    allowed_num_msg: number,
    linked_list_hash?: string | null
}
export const approveIntent = async (fromDID: string, toDID: string, status: string, signature: string) => {
    const response = await fetch('http://localhost:4000/apis/w2w/intent', {
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
    const response = await fetch('http://localhost:4000/apis/w2w/intent', {
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